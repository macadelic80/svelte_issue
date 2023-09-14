import express from "express";
import http from "http";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();
const server = http.createServer(app);

const getDirname = (url) => {
  const __filename = fileURLToPath(url);
  return path.dirname(__filename);
};

const staticOptions = {
  setHeaders: (res, _path) =>
    res.setHeader("Cache-Control", "public, max-age=1, s-maxage=7200"),
};

app.use(
  express.static(
    path.resolve(getDirname(import.meta.url), "./svelte-public/"),
    staticOptions
  )
);


app.use(
  express.static(
    path.resolve(getDirname(import.meta.url), "./svelte-public/app"),
    staticOptions
  )
);

server.listen(8080);