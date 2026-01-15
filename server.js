import express from "express";
import router from "./routes/posts.js";
import logger from "./middleware/logger.js"
import { fileURLToPath } from 'url'
import path  from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const port = process.env.PORT;


// Logger middleware
app.use(logger)

// role-2 setup static folder....
app.use(express.static(path.join(__dirname, "public")))


// Body parser middleware
// atake app.use("/api/posts", router) file er upore likhte hobe

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Route..
app.use("/api/posts", router);







app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
