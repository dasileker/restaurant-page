import { SectionHandler } from '../components/SectionHandler';

export const Vegan = () => {
  const html = `<section class="main__menu" vegan>
                  <div class="main__menu--container">
                    <div class="main__menu--container-borderTop containerTopBorder"></div>
                    <div class="main__menu--container-header">
                      <h2 class="main__menu--header">Vegan</h2>
                    </div>
                    <div class="main__menu--gallery">
                      <div class="main__menu--gallery-row">
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/vegan/briyani.jpg"
                                alt="Vegetable Biryani"
                              />
                            </div>
                            <div class="main__menu--dishe-text">Vegetable Biryani</div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/vegan/whole-roasted-cauliflower.jpg"
                                alt="Whole Roasted Cauliflower"
                              />
                            </div>
                            <div class="main__menu--dishe-text">
                              Whole Roasted Cauliflower
                            </div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/vegan/bombay-burrito.jpg"
                                alt="Bombay Burrito"
                              />
                            </div>
                            <div class="main__menu--dishe-text">Bombay Burrito</div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/vegan/szechuan-eggplant.jpg"
                                alt="Chinese Szechuan Eggplant"
                              />
                            </div>
                            <div class="main__menu--dishe-text">
                              Chinese Szechuan Eggplant
                            </div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/vegan/vegan-alfredo-sauce.jpg"
                                alt="Vegan Alfredo"
                              />
                            </div>
                            <div class="main__menu--dishe-text">Vegan Alfredo</div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/vegan/vegan-broccoli-soup.jpg"
                                alt="Vegan Broccoli Soup"
                              />
                            </div>
                            <div class="main__menu--dishe-text">Vegan Broccoli Soup</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>`;

  const load = () => {
    SectionHandler().load();
  };

  return { html, load };
};
