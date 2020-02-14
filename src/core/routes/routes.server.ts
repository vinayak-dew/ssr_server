
//import { IRoute } from "Core/route/route";
import { IRoute } from "./route";

const lazy = true;

export const routes: IRoute[] = [
    {
        path: '/page1',
        component: require("../../components/pages/page1").default,
        exact: false,
        lazy
    },
    {
        path: '/page2',
        component: require("../../components/pages/page2").default,
        exact: false,
        lazy
    },
    {
        path: '/datapage',
        component: require("../../components/pages/datapage").default,
        exact: false,
        lazy
    }
]