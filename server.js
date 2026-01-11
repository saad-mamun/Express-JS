import express from "express";
import path from "path";
import { fileURLToPath } from "url";

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT;

// role-2 setup static folder....
// app.use(express.static(path.join(__dirname, "public")))

// role -1 file routing....
// app.get("/", (req, res) => {
//   // file director
//   res.sendFile(path.join(__dirname, "public", "index.html"));
//   // res.send('<h1>Hello world</h1>')
//   //   res.send({ message: "Hello, World!" });
// });
// app.get("/about", (req, res) => {
//   // file director
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// role 3 - json
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

//role 4 - id
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
