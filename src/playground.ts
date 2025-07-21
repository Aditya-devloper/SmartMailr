import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "adi@gmail.com",
    firstName: "Adi",
    lastName: "Soni",
  },
});

console.log("Done");
