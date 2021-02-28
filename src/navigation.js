export class Navigation {
  constructor() {
    this.home = document.getElementById("home");
    this.about = document.getElementById("about");
    this.menu = document.getElementById("menu");
    this.contact = document.getElementById("contact");
  }

  onClick(cb) {
    [this.home, this.about, this.menu, this.contact].forEach((nav) => {
      nav.addEventListener("click", cb);
    });
  }
}
