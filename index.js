"use strict";

let data = document.getElementsByClassName("container");

let product =[];
let productimages=[];
let productprice =[];

function addProduct(options) {
    let container = document.createElement("div");
    container.classList.add("product");
    container.classList.add(options.class);

    let image = document.createElement("img");
    image.classList.add("image");
    image.src = options.image;
    container.appendChild(image);

    let title = document.createElement("h3");
    title.classList.add("title");
    title.innerHTML =options.title;
    container.appendChild(title);

    let price = document.createElement("p");
    price.classList.add("price");
    price.innerHTML = options.price;
    container.appendchlid(price);

    let button = document.createElement("button");
    button.classList.add("button");
    button.innerHTML = options.button;
    container.appendChild(button);

    data[0].appendChild(container);

   product.push(options.title);
   productimages.push(options.image);
   productprice.push(options.price);

   fetch('https://dummyjson.com/products/category/smartphones')
   .then(res => res.json())
   .then(console.log);

    let file ="fetch.json";
    data = fetch(file).then(res => res.json());
    data.then(function(data){
        console.log(data);
    });

}

