window.onload = init();

function init() {
  addCategoryButtons();
  addMenuItems();
}

function getCategories() {
  const categories = ["All"];
  menu.filter((element) => {
    if (!categories.includes(element.category)) {
      categories.push(element.category);
    }
  });
  return categories;
}

function addCategoryButtons() {
  const buttonContainer = document.querySelector("#buttonContainer");
  const categories = getCategories();
  categories.forEach((category) => {
    const categoryElement = document.createElement("button");
    categoryElement.innerText = category;
    categoryElement.classList.add("btn", "btn-outline-dark", "btn-item");
    categoryElement.dataset.id = category;
    // categoryElement.addEventListener("click", addMenuItems(category));
    categoryElement.addEventListener("click", (e) => {
      const categoryid = e.currentTarget.dataset.id;
      addMenuItems(categoryid);
    });
    buttonContainer.append(categoryElement);
  });
}

function addMenuItems(type = "All") {
  const menuContainer = document.querySelector("#menuList");
  menuContainer.innerHTML = "";
  let items = [];
  if (type == "All") {
    items = [...menu];
  } else {
    items = menu.filter((element) => element.category === type);
  }
  items.forEach((element) => {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("menu-items", "col-lg-6", "col-sm-12");
    const imgTag = document.createElement("img");
    imgTag.src = element.img;
    imgTag.classList.add("photo");
    parentDiv.append(imgTag);
    const infoElement = document.createElement("div");
    infoElement.classList.add("menu-info");
    const titleElement = document.createElement("div");
    titleElement.classList.add("menu-title");
    const h4Element = document.createElement("h4");
    h4Element.innerText = element.title;
    titleElement.append(h4Element);
    const h4PriceElement = document.createElement("h4");
    h4PriceElement.innerText = element.price;
    h4PriceElement.classList.add("price");
    titleElement.append(h4PriceElement);
    infoElement.append(titleElement);
    const textElement = document.createElement("div");
    textElement.innerText = element.desc;
    textElement.classList.add("menu-text");
    infoElement.append(textElement);
    parentDiv.append(infoElement);
    menuContainer.append(parentDiv);
  });
}
