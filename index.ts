import * as express from "express";
import template from './template';  
import { serverRender } from "ServerRender";
import reload from "reload";
import { DataRoute } from "./src/core/routes/data.route";
//import { allRoutes } from "./src/ssr/routes/all-routes";

const app = express();

app.use(express.static("dist"));

if (process.env.environment === "development") {
  reload(app, {
    verbose: true
  });
}

//allRoutes(app);

app.get('/page1', (req, res) => {
  const { content } = serverRender({initialData: "Hello page1"}, req.url);
  const response = template("TataCliq Luxury1 page1", content, {initialData: "Hello page1"});
  console.log("Hello page1")
  res.send(response);
}) 
app.get('/page2', (req, res) => {
  const { content } = serverRender({initialData: "Hello page2"}, req.url);
  const response = template("TataCliq Luxury1 page 2", content, {initialData: "Hello page2"});
  console.log("Hello page2")
  res.send(response);
}) 

app.get('/datapage', (req, res) => {
  DataRoute(req, res);
 /*  const { content } = serverRender({initialData: "Hello datapage"}, req.url);
  const response = template("TataCliq Luxury1", content, {initialData: "Hello datapage"});
  console.log("Hello there datapages") */
  //res.send(response);
}) 

app.get('/', (req, res) => {
  const { content } = serverRender({initialData: "Hello"}, req.url);
  const response = template("TataCliq Luxury1", content, {initialData: "Hello"});
  console.log("Hello there")
  res.send(response);
}) 

app.listen(process.env.PORT || 3000, () => {
    // tslint:disable-next-line:no-console
    console.log("server started on port" + process.env.PORT);
});