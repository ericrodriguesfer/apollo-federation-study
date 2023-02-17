import app from "./app/app.js";

app.listen(process.env.PORT, () =>
  console.log("[API] => Server was started...")
);
