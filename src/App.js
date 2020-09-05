import React, {Component} from 'react';
import Header from "./Header";
import  "./App.css";

class App extends Component{

  constructor()
  {
    super();
    this.state = {
      subscribersList: []
    }
  }

  deleteHandler(message){
    alert(message);
  }
  render(){
    // let subscribers = [
    //   {
    //     id:1,
    //     name : "Aditya",
    //     phone : "8884333503"
    //   },
    //   {
    //     id:2,
    //     name : "Balasubramanyam",
    //     phone : "9038948210"
    //   }
    // ]
    return (
      <div>        
        <Header heading="Aditya"/>
          <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>

            <div className="grid-container heading-container">
              <span className="grid-item name-heading">Name</span>
              <span className="grid-item phone-heading">Phone</span>
            </div>

            {
              this.state.subscribersList.map(sub => {
                return<div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this,"You have clicked delete on")}>Delete</button>
                </span>
            </div>
              })
            }
          </div>
      </div> 
  );
  }
}

export default App;
