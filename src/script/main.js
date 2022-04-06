const url = "https://fakestoreapi.com/products";
const items = document.querySelector(".items");
const OpenTypeJeans = document.querySelector(".topbar__clothing-jeans");
const OpenSideBar = document.querySelector(".header__icon");
const overlayclose = document.querySelector(".overlay")
const sidebar = document.querySelector(".topbar");
const sidebar__close = document.querySelector(".sidebar__close");


fetch(url).then((response) => response.json())
    .then((data) => {
        data.forEach(product => {
            let div = document.createElement("div");
            div.className = "items__item";
            items.append(div)
            div.innerHTML = `
            <img src=${product.image} class="items__img"/>
            <p class="items__title">${product.title}</p>
            <p class="items__price">$${product.price}</p> `
        });
    })

//OpenTypeJeans

function sidebarClothing() {
    let element = document.querySelector(".topbar__clothing-jeans__type");
    element.classList.toggle("toggleTopbar");
}
OpenTypeJeans.addEventListener("click", sidebarClothing);

//  OpenSideBar

function openSideMenuIcon(e) {
    console.log(e)
    OpenSideBar.classList.add("iconBakgroundClick");
    overlayclose.classList.add("overlayOne");
    sidebar.classList.add("openSideBar");
    
    console.log("toto")
}
OpenSideBar.addEventListener('click', openSideMenuIcon)

// CloseSideBar

function CloseMenuWithOverlay() {
    console.log()
    openSideMenuIcon()
    overlayclose.classList.remove("overlayOne");
    sidebar.classList.remove("openSideBar")
    OpenSideBar.classList.remove("iconBakgroundClick");

}
overlayclose.addEventListener('click', CloseMenuWithOverlay)

// CloseSideBarWith FA-REMOVE

function removeSideBarWithFaIcon(){
    sidebar.classList.remove("openSideBar")
    overlayclose.classList.remove("overlayOne");

}
sidebar__close.addEventListener("click",removeSideBarWithFaIcon)