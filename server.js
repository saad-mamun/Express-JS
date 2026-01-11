import express from "express";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
