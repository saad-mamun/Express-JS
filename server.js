import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/posts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT;

// role-2 setup static folder....
// app.use(express.static(path.join(__dirname, "public")))

// role -1 file routing....
app.get("/", (req, res) => {
  // file director
  res.sendFile(path.join(__dirname, "public", "index.html"));
  // res.send('<h1>Hello world</h1>')
  //   res.send({ message: "Hello, World!" });
});
app.get("/about", (req, res) => {
  // file director
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

//Route..
app.use("/api/posts", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
