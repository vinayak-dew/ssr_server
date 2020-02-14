//import { sendResponse } from "../common/send-response";
import template from "../../../template";
import { serverRender } from "../../server/server";
import { Request, Response } from "express";
import { CommonService } from "../services/common.service";
import { forkJoin } from "rxjs";
import { of } from 'rxjs';

export function DataRoute(req: Request, res: Response) {

    CommonService.getUserName().subscribe((userDataGet: any) => {

        console.log("userDataGet ", userDataGet);
        const initialData = { cart: userDataGet };
        const { content } = serverRender(initialData, req.url);
        const response = template("Data Pages", content, initialData);

        res.send(response);

    });
    //const source = of(userDataGet);

}