"use strict";
//class
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var InvoiceOne = new Invoice("mario", "works on mario", 200);
console.log("dev: InvoiceOne", InvoiceOne);
var InvoiceTwo = new Invoice("anuj", "works on anuj", 400);
console.log("dev: InvoiceTwo", InvoiceTwo);
var invoices = [];
InvoiceTwo.client = "manoj";
// invoices.push("string");
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);
console.log(invoices);
var form = document.querySelector(".new-item-form");
// console.log(form.children);
var types = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(types.value, tofrom.value, details.value, amount.valueAsNumber);
});
