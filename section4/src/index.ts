import { User } from "./User";
import { Company } from "./Company";
import {} from "@types/googlemaps";

const user = new User();
const comp = new Company();

// console.log(comp);
// console.log(user);

new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});
