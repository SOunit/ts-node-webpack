const express = require("express");

const app = express();

app.get("/", (req: any, res: any, next: any) => {
  res.json({ name: "test" });
});

app.listen(5001, () => {
  console.log("express running...");
});
