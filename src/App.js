import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/dumb_button' ;
import Button from './components/actual_button'; 
import Address from './components/address';
// import AddressList from './components/address_list';


class App extends Component {
  render() {
    return (
        <div>
            <Article coolBoy="mobro"/> 
            <Article coolBoy="ahmedbro"/> 
            <Article coolBoy="leencakes"/> 

            <Button/>

            <Address address="RunnyMead" state="CA" city="LA"/>
            <Address address="RunnyMead1" state="NY" city="Brooklyn"/>
            <Address address="RunnyMead2" state="CO" city="Nowhere"/>
            {/* <AddressList/> */}
        </div>

      
    );
  }
}

export default App;
