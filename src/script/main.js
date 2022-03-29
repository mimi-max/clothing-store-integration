const url ="https://dummyjson.com/products/category/smartphones/";
let items = document.querySelector(".items");




fetch(url).then((response)=>response.json())
.then((data)=>{
    console.log(data.products)
    data.products.forEach(product => {
        console.log(product)
        let div = document.createElement("div");
        div.className="items__item";
        items.append(div)
        div.innerHTML = `
            <img src=${product.images[0]} class="items__img"/>
            <p class="items__title">${product.title}</p>
            <p class="items__price">$${product.price}</p> `
    });
})
