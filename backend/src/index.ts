import express from "express";
import { router as routes } from "./routes/index";

const app = express();
app.use(express.json());

// routes
app.get('/' ,(req,res) => {
  res.status(200).send({success: true, data: 'Hello World'})
});
app.use('/api' , routes);

const port = process.env.PORT || 5000;
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Server started at port ${port}`));

module.exports = app;