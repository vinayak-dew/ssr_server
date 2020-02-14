
//import { IRoute } from "Core/route/route";
import { IRoute } from "./route";
const lazy = true;

export const routes: IRoute[] = [
    
    {
        path: '/page1',
        component: () => import(/* webpackChunkName: "page1" */ "../../components/pages/page1"),
        exact: false,
        lazy
    },
    {
        path: '/page2',
        component: () => import(/* webpackChunkName: "page2" */ "../../components/pages/page2"),
        exact: false,
        lazy
        
    },
    {
        path: '/datapage',
        component: () => import(/* webpackChunkName: "datapage" */ "../../components/pages/datapage"),
        exact: false,
        lazy
        
    }
]