"use strict"

const dataProducts = JSON.parse(dataProductsJson);
console.log(dataProducts);

let productTemplate = document.querySelector('#jazzTemplate .album');

let container = document.querySelector('.container');

dataProducts.forEach(element => {

    let product = productTemplate.cloneNode(true);
    product.querySelector('.album__img img').src = element.image;

    product.querySelector('.album__info .album__title').textContent = element.title;

    let released = product.querySelector('.album__info .album__Released');
    released.innerHTML = "<b>Released</b> " + element.released;

    let recorded = product.querySelector('.album__info .album__Recorded');
    recorded.innerHTML = "<b>Recorded</b> "+ element.recorded;

    let venue = product.querySelector('.album__info .album__Venue');
    venue.innerHTML = "<b>Venue</b> " + element.venue;

    let genre = product.querySelector('.album__info .album__Genre');
    genre.innerHTML= "<b>Genre </b>"+ element.genre;

    let label = product.querySelector('.album__info .album__Label');
    label.innerHTML = "<b>Label </b>" + element.label;

    let producer = document.querySelector('.album__info .album__Producer');
    producer.innerHTML = "<b>Producer </b>" + element.producer;

    container.appendChild(product);
});