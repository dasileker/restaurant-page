import { gsap } from 'gsap';

export const Navigation = () => {
  const logoText = document.querySelector('.header__logo--link-text');
  const btn = document.querySelector('.button__main');

  const load = () => {
    const timeline = gsap.timeline();

    logoText.classList.add('onChange');
    btn.classList.add('onChange');

    // Bring navigation down
    gsap.to('.navigation', { duration: 1, y: 0, ease: 'power2.out' });

    // Change from 'Menu' to 'Close'
    gsap.to('.button__main--container-inside', {
      duration: 0.5,
      y: '-50%',
      ease: 'power2.out',
    });

    // Show links
    timeline.to('.link', {
      duration: 0.5,
      delay: 1,
      y: '0%',
      stagger: 0.25,
      ease: 'slow',
    });

    // Show seperators
    timeline.to('.navigation__seperator', { duration: 0.5, opacity: 1 });
  };
  const unload = () => {
    logoText.classList.remove('onChange');
    btn.classList.remove('onChange');

    // Revert back
    gsap.to('.navigation', { duration: 1, y: '-100%', ease: 'power2.out' });
    gsap.to('.button__main--container-inside', {
      duration: 0.5,
      y: '2%',
      ease: 'power2.out',
    });

    // Hide seperators
    gsap.to('.navigation__seperator', { duration: 0, opacity: 0 });

    // Hide links
    gsap.to('.link', {
      duration: 0,
      y: '100%',
    });
  };

  return { load, unload };
};
