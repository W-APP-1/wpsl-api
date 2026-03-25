import app from "./app.js";

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`wpsl-api listening on port ${port}`);
});
