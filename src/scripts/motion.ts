// Scroll reveals, ribbon draw-on, and Plausible events.
// Reduced-motion visitors get static visuals via CSS overrides; here we only
// skip the observers (the click listener must still run).

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

document.addEventListener('click', (e) => {
  const target = (e.target as Element).closest<HTMLElement>('[data-event="cta_click"]');
  if (target) {
    window.plausible?.('cta_click', { props: { location: target.dataset.eventLoc ?? 'unknown' } });
  }
});

const galleryObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      window.plausible?.('gallery_view');
      galleryObserver.unobserve(entry.target);
    }
  }
});
document.querySelectorAll('[data-gallery]').forEach((el) => galleryObserver.observe(el));

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (entry.target.hasAttribute('data-reveal')) entry.target.classList.add('is-in');
        if (entry.target.hasAttribute('data-ribbon')) entry.target.classList.add('is-drawn');
        revealObserver.unobserve(entry.target);
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
  );
  document.querySelectorAll('[data-reveal], [data-ribbon]').forEach((el) => revealObserver.observe(el));
}

export {};
