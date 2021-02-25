import { gsap } from 'gsap';

export const SectionHandler = () => {
  const load = () => {
    const timeLine = gsap.timeline();

    timeLine
      .from('.containerTopBorder', {
        duration: 1.5,
        width: '0%',
        ease: 'power4.in',
      })
      .from('.main__menu--header', { duration: 1, y: -100, ease: 'power4.out' })
      .from('.gallery-col', {
        duration: 1,
        opacity: 0,
        stagger: 0.5,
        ease: 'power2.out',
      });
  };

  const unload = () => {
    const timeLine = gsap.timeline();

    timeLine
      .to('.gallery-col', {
        duration: 0.5,
        opacity: 0,
        stagger: 0.25,
      })
      .to('.main__menu--header', { duration: 0.5, y: -80 })
      .to('.containerTopBorder', {
        duration: 0.75,
        width: '0%',
      });
  };

  return { load, unload };
};
