import { PageLoader } from '../scripts/components/PageLoader';
import { Home } from '../scripts/components/home';
import { Navigation } from '../scripts/components/navigation';

// Main container
const main = document.querySelector('.main');

// Load Home page first
window.addEventListener('load', function () {
  main.innerHTML = Home().html;
  Home().load();
});

const menuButton = document.getElementById('menuButton');
let isOpen = false;
menuButton.addEventListener('click', () => {
  if (!isOpen) {
    Navigation().load();
    isOpen = true;
  } else {
    Navigation().unload();
    isOpen = false;
  }
});

for (const link of document.querySelectorAll('.navigation__link')) {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const section = e.target.dataset.section;

    if (section) {
      // Close Navigation
      Navigation().unload();
      isOpen = false;
      // Load Page
      PageLoader(main, section);
    }
  });
}
