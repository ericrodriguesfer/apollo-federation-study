import app from "./app/app.js";

app.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
