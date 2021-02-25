export const PageLoader = (container, section) => {
  import(`./${section}`).then((module) => {
    let sectionObject = module[section]();
    container.innerHTML = sectionObject.html;
    sectionObject.load();
  });
};
