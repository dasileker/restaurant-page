import ThiccBurger from "/src/assets/thicc-burger.png";
import RedBurger from "/src/assets/red-burger.png";
import VeryThiccBurger from "/src/assets/very-thicc-burger.png";
import ThiccFries from "/src/assets/thicc-fries.png";

export function menuPage() {
    const menuDiv = document.createElement('DIV');
    menuDiv.className = 'pages menu-page'

    const html = `
        <div class="menu-items">
            <div class="menu-item">
                <img src=${ThiccBurger} alt="Thicc Burger">
                <div class="item-details">
                    <p class="item-name">Thicc Burger</p>
                    <p class="item-price">$5</p>
                </div>
            </div>
            <div class="menu-item">
                <img src=${RedBurger} alt="Red Burger">
                <div class="item-details">
                    <p class="item-name">Red Burger</p>
                    <p class="item-price">$5</p>
                </div>
            </div>
            <div class="menu-item">
                <img src=${VeryThiccBurger} alt="Very Thicc Burger">
                <div class="item-details">
                    <p class="item-name">Very Thicc Burger</p>
                    <p class="item-price">$7</p>
                </div>
            </div>
            <div class="menu-item">
                <img src=${ThiccFries} alt="Thicc Fries">
                <div class="item-details">
                    <p class="item-name">Thicc Fries</p>
                    <p class="item-price">$3</p>
                </div>
            </div>
        </div>
        <p class="add-ons">With Softdrinks Add $2</p>
    `;

    menuDiv.insertAdjacentHTML("beforeend", html)

    return menuDiv;
}