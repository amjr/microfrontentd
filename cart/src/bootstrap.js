import faker from "faker";

const mountCart = (el) => {
  const cart = `you have ${faker.random.number()} items in your cart`;

  el.innerHTML = cart;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  el && mountCart(el);
}

export { mountCart };
