import * as React from 'react';
import Exchange from "./components/Exchange";
import Form from "./components/Form";
import Titles from "./components/Titles";


// import { userInfo } from "os";

interface IState{
  rate: any,
  baseCurrency: any,
  date: any,
  newBaseCurrency: any,
  error: any
}

class App extends React.Component<{}, IState>{
  constructor(props:any){
    super(props);

    this.state = {
      baseCurrency: "",
      date: "",
      error: "",
      newBaseCurrency: "",
      rate: ""
    } 
  }


  public getRate = async (e: any) => {   
    e.preventDefault(); 
    const base = e.target.elements.base.value;
    const newBase = e.target.elements.newBase.value;
    const amount = e.target.elements.amount.value;
    
    if(base && newBase){
      const apiCall = await fetch(`https://orion.apiseeds.com/api/exchangerates/convert/${base}/${newBase}?amount=${amount}&apikey=kvqE00Fb270NKLwud2VRJhpZy7MWStfixvro08VpuXlTRnAOivmMYNTtlVMz59x9`);
      const data = await apiCall.json(); 
       if(data.from.code && data.to.code){
        this.setState({
          baseCurrency: data.from.code,
          date: data.from.updated,
          error: "",
          newBaseCurrency: data.to.code,
          rate: data.result.format
        });
      }
    }
    else{
      this.setState({
        baseCurrency: undefined,
        date: undefined,
        error: "Unable to Convert the given Currency. Please Enter Another.",
        newBaseCurrency: undefined,
        rate: undefined
      });
    }


  } 
  public render(){
    return(
      <div>
        <Titles />
        <Form getRate={this.getRate}/> 
        <Exchange 
            baseCurrency ={this.state.baseCurrency}
            date ={this.state.date} 
            error ={this.state.error}
            newBaseCurrency ={this.state.newBaseCurrency}
            rate ={this.state.rate} 
        />
      </div>
    );
  }
}
export default App;