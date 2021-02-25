import { gsap } from 'gsap';

export const Home = () => {
  const html = `<section class="main__home home">
                  <div class="main__home--container">
                    <div class="main__home--hero-text">
                      <h1 class="text-hero">banquet</h1>
                    </div>
                    <div class="main__home--hero-image">
                      <img
                        src="./images/food/hero.png"
                        alt="Pancake"
                        class="image-hero"
                      />
                    </div>
                    <div class="main__home--quotes">
                      <div class="quote">
                        <p class="quote-text">Pull up a chair.</p>
                      </div>
                      <div class="quote">
                        <p class="quote-text">Take a taste.</p>
                      </div>
                      <div class="quote">
                        <p class="quote-text">Come join us.</p>
                      </div>
                      <div class="quote">
                        <p class="quote-text">Life is so endlessly delicious.</p>
                      </div>
                    </div>
                  </div>
                </section>`;

  const load = () => {
    const timeline = gsap.timeline();
    timeline
      .from('.text-hero', { duration: 1, x: '-100%', ease: 'back.out(1.7)' })
      .from('.image-hero', { duration: 1.5, y: '-100%', ease: 'power4.out' })
      .from('.quote-text', {
        duration: 0.75,
        y: '-100%',
        stagger: 0.5,
        ease: 'power4.out',
      });
  };

  return { html, load };
};
