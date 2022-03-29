const url ="https://fakestoreapi.com/products";
let items = document.querySelector(".items");




fetch(url).then((response)=>response.json())
.then((data)=>{
    console.log(data)
    data.forEach(product => {
        console.log(product)
        let div = document.createElement("div");
        div.className="items__item";
        items.append(div)
        div.innerHTML = `
            <img src=${product.image} class="items__img"/>
            <p class="items__title">${product.title}</p>
            <p class="items__price">$${product.price}</p> `
    });
})
