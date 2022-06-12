import faker from "faker";

const cart = `you have ${faker.random.number()} items in your cart`;

document.querySelector("#dev-cart").innerHTML = cart;
