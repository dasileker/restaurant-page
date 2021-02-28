import hero from "/src/assets/about-photo.png";

export function aboutPage(){
    const aboutDiv = document.createElement('DIV');
    aboutDiv.className = 'pages about-page';

    const html = `
    <div class="about-content">
    <p class="about-title">About Us</p>
    <p class="about-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
    
    <img src=${hero} alt="About photo">

    `;

    aboutDiv.insertAdjacentHTML('beforeend', html)
    
    return aboutDiv;
}