import { mountProducts } from "products/ProductsIndex";
import { mountCart } from "cart/CartIndex";

mountProducts(document.querySelector("#products"));
mountCart(document.querySelector("#cart"));
