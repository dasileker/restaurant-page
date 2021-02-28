export function homePage() {
    const homeDiv = document.createElement('DIV');
    homeDiv.className = 'pages home-page';

    const html = `
    <div class="intro">
    <h1>The Best Burger in Town</h1>
    <button type="button" class="cta-btn">Check our menu</button>
    </div>
    `
    homeDiv.insertAdjacentHTML("beforeend", html)

    return homeDiv;
}