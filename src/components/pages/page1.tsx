import * as React from "react";
import { Route, Switch, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { of } from "rxjs";

class Page1 extends  React.Component<Page1Props, Page1State> {
  
    constructor(props: any) {
        super(props);
        console.log('page 1');
    }

    public callData(){
        alert("function Called");
    }

    public render() {
        return (
            <div>
            <div>This is Page 1</div>
            <button onClick={()=> this.callData()}>Click 2</button>
            </div>
        );
    }
}

export default Page1;


export interface Page1Props extends RouteComponentProps {
    url?: string;
    //routes: IRoute[];
}

export interface Page1State {
}
