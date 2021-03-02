export default function contactPage() {
  const contactDiv = document.createElement('DIV');
  contactDiv.className = 'pages contact-page';

  const html = `
    <div class="contact-container">
        <div class="contact-details">
            <p class="contact-title">Contact Us</p>
            <p class="contact-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            // <img src= alt="phone number">
            <h3>Phone Number: +2120000000</h3>
            <br><br>
            //p
            <h3>Email Address: Email@gmail.com</h3>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15443.78892432645!2d121.1061975!3d14.6020819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52ea5acc710c2ba5!2sH.I.D%20Burgers!5e0!3m2!1sen!2sph!4v1605476365927!5m2!1sen!2sph" width="675" height="740" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    `;
  contactDiv.insertAdjacentHTML('beforeend', html);

  return contactDiv;
}