import { User } from "./models/User";

const user = new User({ name: "New Recod", age: 0 });

console.log(user.get("name"));

user.on("change", () => {
  console.log("user changed");
});

user.trigger("change");
