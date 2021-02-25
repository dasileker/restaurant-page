import { SectionHandler } from './SectionHandler';

export const Meat = () => {
  const html = `<section class="main__menu meat">
                  <div class="main__menu--container">
                    <div class="main__menu--container-borderTop containerTopBorder"></div>
                    <div class="main__menu--container-header">
                      <h2 class="main__menu--header">Meat</h2>
                    </div>
                    <div class="main__menu--gallery">
                      <div class="main__menu--gallery-row">
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/meat/adana-kebap.jpg"
                                alt="Adana Kebap"
                              />
                            </div>
                            <div class="main__menu--dishe-text">Adana kebap</div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/meat/bistec-a-lo-pobre.jpg"
                                alt="Bistec A Lo Pobre"
                              />
                            </div>
                            <div class="main__menu--dishe-text">Bistec a lo pobre</div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img src="./images/food/meat/kassler.jpg" alt="Kassler" />
                            </div>
                            <div class="main__menu--dishe-text">Kassler</div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/meat/massaman-curry.jpg"
                                alt="Massaman Curry"
                              />
                            </div>
                            <div class="main__menu--dishe-text">Massaman Curry</div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img src="./images/food/meat/char-siu.jpg" alt="Char Siu" />
                            </div>
                            <div class="main__menu--dishe-text">Char siu</div>
                          </div>
                        </div>
                        <div class="main__menu--gallery-col gallery-col">
                          <div class="main__menu--dishe">
                            <div class="main__menu--dishe-image">
                              <img
                                src="./images/food/meat/pečená-kachna.jpg"
                                alt="Pečená kachna"
                              />
                            </div>
                            <div class="main__menu--dishe-text">Pečená kachna</div>
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
