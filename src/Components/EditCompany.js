import React, { Component } from 'react';
 import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }
 
 class EditCompany extends Component {
 constructor(props) {
 super(props);
 this.state = {
 companyName: '',
 companyDesc: '',
 email: '',
 phone: ''
 }
 }
 
 componentDidMount = () => {
 this.getCompanyById();
 }
 
 // To get employee based on ID
 getCompanyById() {
 axios.get('http://localhost:4000/company/editCompany/' + this.props.match.params.id)
 .then((response) => {
 this.setState({
 companyName: response.data.companyName,
 companyDesc: response.data.companyDesc,
 email: response.data.email,
 phone: response.data.phone
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 handleChange = (event) => {
 this.setState({ [event.target.name]: event.target.value });
 }
 
 // To update the record on submit
 handleSubmit = (event) => {
 event.preventDefault();
 const { companyName, companyDesc, email, phone } = this.state;
 axios.post('http://localhost:4000/company/updateCompany/' + this.props.match.params.id, {
 companyName: companyName,
 companyDesc: companyDesc,
 email: email,
 phone: phone,
 })
 .then((response) => {
 console.log(response);
 this.props.history.push('/');
 })
 .catch((error) => {
 console.log(error);
 });
 
 }
 
 render() {
 return (
 <div className="container">
 <form style={customStyle} onSubmit={this.handleSubmit}>
 <label>
 Company Name
 <input
 name="companyName"
 type="text"
 value={this.state.firstName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Last Name
 <input
 name="companyDesc"
 type="text"
 value={this.state.lastName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Email
 <input
 name="email"
 type="text"
 value={this.state.email}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Phone No
 <input
 name="phone"
 type="text"
 value={this.state.phone}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <input
 type="submit"
 value="submit"
 className="btn btn-primary"
 />
 </form>
 </div>
 );
 }
 }
 
 export default EditCompany;