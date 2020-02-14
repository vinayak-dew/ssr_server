import * as React from "react";
import { IRoute } from "./core/routes/route";
import { Route, Switch, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import Page1 from "Components/pages/page1";
import AsyncComponent from "./core/components/async.component";
//import AsyncComponent from "./core/components/async.component";

class App extends React.Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
        console.log('props app ', this.props);
    }


    public callData(){
        alert("function Called");
    }

    public render() {
        return (
            <div>
                <div>Hello test</div>
            
                <Switch>
                    {
                        this.props.routes.map((route) => {
                           
                            
                            return (
                                <Route
                                    exact={route.exact}
                                    path={route.path}
                                    render={(props: any) => {
                                        return route.lazy ? 
                                        <AsyncComponent moduleProvider={route.component} {...props} /> :
                                                    <route.component {...props} />;
                                    }}
                                    key={route.path}    
                                />
                            );
                        })
                    }
                </Switch>
            </div>
        )
    }
}

export default withRouter(App);

export interface AppProps extends RouteComponentProps {
    url?: string;
    routes: IRoute[];
}

export interface AppState {

}
