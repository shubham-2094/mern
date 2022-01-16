import React, { Component } from 'react';
 import axios from 'axios';
 import { Table, Button } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 import '../index.css';
 import CompanyService from './Services';
 
 var divStyle = {
 margin: '8% 8%',
 };
 
 class ListCompany extends Component {
 
 constructor(props) {
 super(props);
 this.companyService = new CompanyService();
 this.state = {
 company: []
 }
 this.deleteCompany = this.deleteCompany.bind(this);
 }
 
 componentDidMount = () => {
 this.getCompanyList();
 }
 
 // To get all the employees
 getCompanyList() {
 axios.get('http://localhost:4000/company')
 .then((response) => {
 console.log(response);
 this.setState({
 company: response.data
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 // To delete any employee
 deleteCompany(empid) {
 this.companyService.deleteCompany(empid);
 this.getCompanyList();
 }
 
 render() {
 const { company } = this.state;
 return (
 <div style={divStyle}>
 <Table responsive>
 <thead>
 <tr>
 <th>#</th>
 <th>Company Name</th>
 <th>Company Name</th>
 <th>Email</th>
 <th>Phone</th>
 <th></th>
 <th></th>
 </tr>
 </thead>
 <tbody>
 {
 company && company.map((company, i) => {
 return (
 <tr key={i}>
 <td>{i}</td>
 <td>{company.companyName}</td>
 <td>{company.companyDesc}</td>
 <td>{company.email}</td>
 <td>{company.phone}</td>
 <td>
 <Link to={"editcompany/" + company._id} className="btn btn-primary">Edit</Link>
 </td>
 <td>
 <Button onClick={() => this.deleteCompany(company._id)} bsStyle="danger" >Delete</Button>
 </td>
 </tr>
 )
 })
 }
 </tbody>
 </Table>
 </div>
 );
 } 
 }
 
 export default ListCompany;