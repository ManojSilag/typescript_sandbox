//class
// class Invoice {
//   readonly client: string;
//   private details: string;
//   public amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const InvoiceOne = new Invoice("mario", "works on mario", 200);
// console.log("dev: InvoiceOne", InvoiceOne);
const InvoiceTwo = new Invoice("anuj", "works on anuj", 400);
// console.log("dev: InvoiceTwo", InvoiceTwo);

let invoices: Invoice[] = [];

// InvoiceTwo.client = "manoj";
// invoices.push("string");
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);
// console.log(invoices);

console.log(InvoiceOne.amount);
console.log(InvoiceOne.format());

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
