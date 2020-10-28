import { User } from "./models/User";
import axios from "axios";

const user = new User({ name: "New Recod", age: 0 });

user.events.on("change", () => {
  console.log("Change!!!");
});

user.events.trigger("change")