import express from "express";

/**
 * Express application instance (shared by local server and Vercel).
 */
const app = express();

app.get("/", (_req, res) => {
  res.send("hello-world");
});

export default app;
