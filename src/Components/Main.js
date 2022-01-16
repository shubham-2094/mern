
 import React, { Component } from 'react';
 import { Switch, Route } from 'react-router-dom';
 
 // Our all component files
 import ListCompany from './ListCompany';
 import AddCompany from './AddCompany';
 import EditCompany from './EditCompany';
 
 class Main extends Component {
 
 render() {
 return (
 <main>
 <Switch>
 <Route exact path='/' component={ListCompany} />
 <Route path='/list' component={ListCompany} /> 
 <Route path='/addcompany' component={AddCompany} />
 <Route path='/editcompany/:id' component={EditCompany} />
 </Switch>
 </main>
 );
 }
 }

 export default Main;