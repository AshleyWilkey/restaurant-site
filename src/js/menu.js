import menu from "./menu.json";

import "./reservations-modal";
import "tingle.js/dist/tingle.min.css";
import "../styles/index.css";
import "../styles/menu.css";

for (let item of menu) {
  const categoryDiv = document.getElementById(item.category.toLowerCase());
  const menuItemDiv = document.createElement("div");
  const menuItemName = document.createElement("h4");
  const menuItemDesc = document.createElement("p");

  menuItemName.innerText = item.name;
  menuItemDesc.innerText = item.description;

  menuItemDiv.appendChild(menuItemName);
  menuItemDiv.appendChild(menuItemDesc);

  categoryDiv.appendChild(menuItemDiv);
}
