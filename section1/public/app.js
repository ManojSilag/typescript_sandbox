import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Man", "work", 240);
// docTwo = new Payment("nonono", "lots work", 140);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const InvoiceOne = new Invoice("mario", "works on mario", 200);
// const InvoiceTwo = new Invoice("anuj", "works on anuj", 400);
// let invoices: Invoice[] = [];
// invoices.push(InvoiceOne);
// invoices.push(InvoiceTwo);
// // console.log(invoices);
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: "manoj",
//   age: 12,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log(`I spent `, amount);
//     return amount;
//   }
// };
// console.log(me);
// me.speak("yoyoyo");
// me.spend(1232);
// const greetPerson = (person: IsPerson) => {
//   console.log("hello", person.name);
// };
// greetPerson(me);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
