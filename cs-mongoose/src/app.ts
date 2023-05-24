import express, { Application } from "express";
import cors from "cors";
import { router } from "./app/post/post.route";

// create app
const app = express();

// use app
app.use(cors());
// body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// set ejs
app.set("view engine", "ejs");

// routes
app.use("/api/v1", router);

// default routes
app.get("/", (req, res) => {
  res.render("index");
});

export { app };
