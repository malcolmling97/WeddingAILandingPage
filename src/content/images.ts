// Image manifest: the single edit point when real assets replace placeholders.
// Swap procedure: drop real files with the same basenames into src/assets/images/,
// update the extensions below, and replace every "Placeholder:" alt with a real
// description (bride + dress + setting).
import heroInput from '../assets/images/hero-input.svg';
import heroRenderBali from '../assets/images/hero-render-bali.svg';
import heroRenderSapa from '../assets/images/hero-render-sapa.svg';
import heroRenderBallroom from '../assets/images/hero-render-ballroom.svg';
import step1 from '../assets/images/step-1.svg';
import step2 from '../assets/images/step-2.svg';
import step3 from '../assets/images/step-3.svg';
import dress01 from '../assets/images/dress-01.svg';
import dress02 from '../assets/images/dress-02.svg';
import dress03 from '../assets/images/dress-03.svg';
import dress04 from '../assets/images/dress-04.svg';
import dress05 from '../assets/images/dress-05.svg';
import dress06 from '../assets/images/dress-06.svg';
import destJiangsu from '../assets/images/dest-jiangsu.svg';
import destSapa from '../assets/images/dest-sapa.svg';
import destBali from '../assets/images/dest-bali.svg';
import destBallroom from '../assets/images/dest-ballroom.svg';
import gallery01 from '../assets/images/gallery-01.svg';
import gallery02 from '../assets/images/gallery-02.svg';
import gallery03 from '../assets/images/gallery-03.svg';
import gallery04 from '../assets/images/gallery-04.svg';
import gallery05 from '../assets/images/gallery-05.svg';
import gallery06 from '../assets/images/gallery-06.svg';
import gallery07 from '../assets/images/gallery-07.svg';
import gallery08 from '../assets/images/gallery-08.svg';
import gallery09 from '../assets/images/gallery-09.svg';
import gallery10 from '../assets/images/gallery-10.svg';

export const images = {
  hero: {
    input: {
      src: heroInput,
      alt: 'Placeholder: phone snap of a bride in a fitting room, trying on a gown',
    },
    renders: [
      { src: heroRenderBali, alt: 'Placeholder: same bride and dress at a Bali sunset', tilt: -4 },
      { src: heroRenderSapa, alt: 'Placeholder: same bride and dress in the Sapa mountains', tilt: 2 },
      { src: heroRenderBallroom, alt: 'Placeholder: same bride and dress in a grand ballroom', tilt: -2 },
    ],
  },
  steps: [
    { src: step1, alt: 'Placeholder: raw phone photo taken during a first fitting' },
    { src: step2, alt: 'Placeholder: choosing a dress and destination' },
    { src: step3, alt: 'Placeholder: finished destination photoshoot set' },
  ],
  dresses: [
    { src: dress01, alt: 'Placeholder: catalog photo of gown 1' },
    { src: dress02, alt: 'Placeholder: catalog photo of gown 2' },
    { src: dress03, alt: 'Placeholder: catalog photo of gown 3' },
    { src: dress04, alt: 'Placeholder: catalog photo of gown 4' },
    { src: dress05, alt: 'Placeholder: catalog photo of gown 5' },
    { src: dress06, alt: 'Placeholder: catalog photo of gown 6' },
  ],
  destinations: {
    jiangsu: { src: destJiangsu, alt: 'Placeholder: Jiangsu water town scene' },
    sapa: { src: destSapa, alt: 'Placeholder: Sapa mountains scene' },
    bali: { src: destBali, alt: 'Placeholder: Bali sunset scene' },
    ballroom: { src: destBallroom, alt: 'Placeholder: grand ballroom scene' },
  },
  gallery: [
    { src: gallery01, alt: 'Placeholder: render 1', tag: 'Bali sunset' },
    { src: gallery02, alt: 'Placeholder: render 2', tag: 'Sapa mountains' },
    { src: gallery03, alt: 'Placeholder: render 3', tag: 'Jiangsu water town' },
    { src: gallery04, alt: 'Placeholder: render 4', tag: 'The grand ballroom' },
    { src: gallery05, alt: 'Placeholder: render 5', tag: 'Bali sunset' },
    { src: gallery06, alt: 'Placeholder: render 6', tag: 'Sapa mountains' },
    { src: gallery07, alt: 'Placeholder: render 7', tag: 'Jiangsu water town' },
    { src: gallery08, alt: 'Placeholder: render 8', tag: 'The grand ballroom' },
    { src: gallery09, alt: 'Placeholder: render 9', tag: 'Bali sunset' },
    { src: gallery10, alt: 'Placeholder: render 10', tag: 'Sapa mountains' },
  ],
} as const;
