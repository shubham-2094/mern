import axios from 'axios';
 
 class CompanyService {
 
 deleteEmployee(id) {
 axios.get('http://localhost:4000/company/deleteCompany/' + id)
 .then(() => {
 console.log('Company  Deleted !!!')
 })
 .catch((error) => {
 console.log(error)
 })
 }
 }
 
 export default CompanyService;