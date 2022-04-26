import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    
      this.state = {
        amountDue: 0,
        amountReceived: 0,
        changeDue: 0,
        twenties: 0,
        tens: 0,
        fives: 0,
        ones: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
      }
      this.getData = this.getData.bind(this)
      this.getChange = this.getChange.bind(this)
      }
      getData(event)
      {
      this.setState({
        [event.target.name]: parseFloat(event.target.value)
      })
      }
      getChange()
      {
      let change = ((this.state.amountReceived)-(this.state.amountDue));
      let bills = Math.floor(change);
      let twentycount = Math.floor(bills/20); 
      let twentyremainder = bills%20; 
      let tenscount = Math.floor(twentyremainder/10); 
      let tensremainder = twentyremainder%10; 
      let fivescount = Math.floor(tensremainder/5); 
      let fivesremainder = tensremainder% 5; 
      let onescount = Math.round( fivesremainder/1);      
          
      let coins = change-bills;
      let quartercount = Math.floor(coins/.25); 
      let quarterremainder = coins%.25; 
      let dimescount = Math.floor( quarterremainder/.10); 
      let dimesremainder = quarterremainder%.10; 
      let nickelcount = Math.floor(dimesremainder/.05); 
      let nickelremainder = dimesremainder%.05; 
      let penniescount = Math.round( nickelremainder/.01); 


      this.setState ({
      changeDue: change.toFixed(2)})

      {change >=0 ?
        this.setState ({
      twenties: twentycount,
      tens: tenscount,
      fives: fivescount,
      ones: onescount,
      quarters: quartercount,
      dimes: dimescount,
      nickels: nickelcount,
      pennies: penniescount
    }):    
    this.setState ({
    twenties: 0,
    tens: 0,
    fives: 0,
    ones: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0})};
    }

  render() {
    return (
<div className="container-fluid">
      <h2 className="text-light mt-3 pt-3 pb-3">Change Calculator</h2>
      <div className="dropdown-divider"></div>
              
      <div className="row">
  
  <div className="col-4">
  <div className='container rounded pt-3 pb-3'style={{backgroundColor: "white"}}>
  <h5 className="font-weight-bold">Enter Information</h5>
      <div className="dropdown-divider"></div>
      
  
    <h6 className="ml-3">How much is due?</h6>
  <input type="number" className="form-control" name="amountDue"  
                min="0" max="100000" 
                id="amountDue" onChange={this.getData} ></input>

  
<h6 className="ml-3">How much was received?</h6>
  <input type="number" className="form-control" name="amountReceived"  
                min="0" max="100000" 
                id="amountReceived" onChange={this.getData}></input>
<span className='pb-5'></span>
<div className="dropdown-divider"></div>

<button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.getChange}>Calculate</button>

  </div>
  
  </div>

  <div className="col-8">
  <div className='container rounded pt-3 pb-3'style={{backgroundColor: "white"}}>


    <div>
      {this.state.changeDue >=0
        ? <div className="alert alert-success text-center" role="alert">
        The total change due is ${this.state.changeDue}</div>
        :   <div className="alert alert-danger text-center" role="alert">
        The total amount owe is ${this.state.changeDue}</div>
      }
    </div>


  <div className="card-group">
  <div className="col-3">
  <div className="card mr-2 mb-2 mt-2" style={{height: "6rem", width: "10rem", display: "flex"}}>
  <div className="card-body rounded" style={{backgroundColor: "#DDDDDD"}}>
    <h5 className="card-title text-center">Twenties</h5>
    <p className="card-text text-center fs-1 change" id="twenties">{this.state.twenties}</p>
    </div>
</div></div>
  <div className="col-3">
  <div className="card mr-2 mb-2 mt-2" style={{height: "6rem", width: "10rem", display: "flex"}}>
  <div className="card-body rounded" style={{backgroundColor: "#DDDDDD"}}>
    <h5 className="card-title text-center">Tens</h5>
    <p className="card-text text-center fs-1 change" id="tens">{this.state.tens}</p>
    </div>
</div></div>
  <div className="col-3">
  <div className="card mr-2 mb-2 mt-2" style={{height: "6rem", width: "10rem", display: "flex"}}>
  <div className="card-body rounded" style={{backgroundColor: "#DDDDDD"}}>
    <h5 className="card-title text-center">Fives</h5>
    <p className="card-text text-center fs-1 change" id="fives" >{this.state.fives}</p>
    </div>
</div></div>
  <div className="col-3">
  <div className="card mr-2 mb-2 mt-2" style={{height: "6rem", width: "10rem", display: "flex"}}>
  <div className="card-body rounded" style={{backgroundColor: "#DDDDDD"}}>
    <h5 className="card-title text-center">Ones</h5>
    <p className="card-text text-center fs-1 change">{this.state.ones}</p>
    </div>
</div></div></div>
<div className="card-group mt-4">
<div className="col-3">
  <div className="card mr-2 mb-2 mt-2" style={{height: "6rem", width: "10rem", display: "flex"}}>
  <div className="card-body rounded" style={{backgroundColor: "#DDDDDD"}}>
    <h5 className="card-title text-center">Quarters</h5>
    <p className="card-text text-center fs-1 change">{this.state.quarters}</p>
    </div>
</div></div>
  <div className="col-3">
  <div className="card mr-2 mb-2 mt-2" style={{height: "6rem", width: "10rem", display: "flex"}}>
  <div className="card-body rounded" style={{backgroundColor: "#DDDDDD"}}>
    <h5 className="card-title text-center">Dimes</h5>
    <p className="card-text text-center fs-1 change">{this.state.dimes}</p>
    </div>
</div></div>
  <div className="col-3">
  <div className="card mr-2 mb-2 mt-2" style={{height: "6rem", width: "10rem", display: "flex"}}>
  <div className="card-body rounded" style={{backgroundColor: "#DDDDDD"}}>
    <h5 className="card-title text-center">Nickels</h5>
    <p className="card-text text-center fs-1 change">{this.state.nickels}</p>
    </div>
</div></div>
  <div className="col-3">
  <div className="card mr-2 mb-2 mt-2" style={{height: "6rem", width: "10rem", display: "flex"}}>
  <div className="card-body rounded" style={{backgroundColor: "#DDDDDD"}}>
    <h5 className="card-title text-center">Pennies</h5>
    <p className="card-text text-center change">{this.state.pennies}</p>
    </div>
</div></div></div>

</div>
</div>
</div>     
</div>

  
     ) }}


export default App;
