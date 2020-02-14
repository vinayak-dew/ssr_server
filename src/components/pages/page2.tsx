import * as React from "react";
import { Route, Switch, Redirect, RouteComponentProps, withRouter } from "react-router-dom";

class Page2 extends   React.Component<AppProps, AppState> {
    public isCheckout: boolean;
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>This is Page 2</div>
        )
    }
}

export default Page2;

export interface AppProps  {
   // url?: string;
   // routes: IRoute[];
}

export interface AppState {

}
