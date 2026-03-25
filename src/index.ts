import express from "express";

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", (_req, res) => {
  res.send("hello-world");
});

app.listen(port, () => {
  console.log(`wpsl-api listening on port ${port}`);
});
