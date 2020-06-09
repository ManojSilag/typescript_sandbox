import { Invoice } from "./classes/Invoice.js";

const InvoiceOne = new Invoice("mario", "works on mario", 200);
const InvoiceTwo = new Invoice("anuj", "works on anuj", 400);

let invoices: Invoice[] = [];

invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);
console.log(invoices);


const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const types = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(types.value, tofrom.value, details.value, amount.valueAsNumber);
});
