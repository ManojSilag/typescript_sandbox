import { Invoice } from "./classes/Invoice.js";
const InvoiceOne = new Invoice("mario", "works on mario", 200);
const InvoiceTwo = new Invoice("anuj", "works on anuj", 400);
let invoices = [];
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);
const me = {
    name: "manoj",
    age: 12,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent `, amount);
        return amount;
    }
};
console.log(me);
me.speak("yoyoyo");
me.spend(1232);
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
const form = document.querySelector(".new-item-form");
const types = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(types.value, tofrom.value, details.value, amount.valueAsNumber);
});
