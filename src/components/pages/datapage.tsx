import * as React from "react";

export default class Datapage extends React.Component<any, any>{

    constructor(props: any){
        super(props);
        this.state = { index: null, id: null }
    }
        

    public componentDidMount(){
         if ((window as any).initialData) {
            this.setState({
                index: (window as any).initialData.cart.index,
                id: (window as any).initialData.cart._id
            })
        }      
       // console.log("(window as any).initialData.cart", (window as any).initialData.cart)  
    }
    

    public render() {
        return(
            <div>
            data page with data 
            <div>index: {this.state.index}</div>
            <div>id: {this.state.id}</div>
            </div>
        )
    }


} 