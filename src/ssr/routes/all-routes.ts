import * as express from "express";

export function allRoutes(app: express.Express) {

    app.use(express.static("dist"));    

   /*  app.get('/*', (req, res) => {
        const { content } = serverRender({initialData: "Hello"}, req.url);
        const response = template("TataCliq Luxury1", content, {initialData: "Hello"});
        console.log("Hello there")
        res.send(response);
      }) */

   // app.get("/*", ContentPageRoute);

}