export default function initPage() {
  const container = document.createElement('DIV');
  container.className = 'container';

  const html = `

    <img src="/src/assets/Logo.png" alt="Logo" class="logo">
    <img class="cart" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-shopping-cart-ecommerce-kiranshastry-lineal-color-kiranshastry-1.png"/>
    <ul class="navbar">
        <li class="link" id="home">Home</li>      
        <li class="link" id="about">About</li>     
        <li class="link" id="menu">Menu</li>
        <li class="link" id="contact">Contact</li>    
    </ul>
    
    <div class="main-content"></div>
    `;
  container.insertAdjacentHTML('beforeend', html);
  return container;
}
