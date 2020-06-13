import { Invoice } from "./classes/Invoice.js";

const InvoiceOne = new Invoice("mario", "works on mario", 200);
const InvoiceTwo = new Invoice("anuj", "works on anuj", 400);

let invoices: Invoice[] = [];
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);
// console.log(invoices);

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "manoj",
  age: 12,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent `, amount);
    return amount;
  }
};
console.log(me);
me.speak("yoyoyo");
me.spend(1232);

const greetPerson = (person: IsPerson) =>{
  console.log('hello', person.name);
}

greetPerson(me)

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const types = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(types.value, tofrom.value, details.value, amount.valueAsNumber);
});
