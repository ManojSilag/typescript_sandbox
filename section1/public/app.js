import { Invoice } from "./classes/Invoice.js";
const InvoiceOne = new Invoice("mario", "works on mario", 200);
const InvoiceTwo = new Invoice("anuj", "works on anuj", 400);
let invoices = [];
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);
console.log(invoices);
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const types = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(types.value, tofrom.value, details.value, amount.valueAsNumber);
});
