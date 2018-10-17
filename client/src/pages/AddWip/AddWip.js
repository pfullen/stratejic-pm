import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import 'react-dates/lib/css/_datepicker.css'; 
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Form, Label, TextArea, Input, Button, Select, Container, Checkbox} from 'semantic-ui-react'
import 'react-datepicker/dist/react-datepicker.css'
import "./addWip.css";
import API from "../../utils/API";
  
	const options = [
  {text: 'Type1', value: 'Retainer Invoiced'},
  {text: 'Type2', value: 'Retainer Received'},
  {text: 'Type3', value: 'Retainer Received'},
  {text: 'Type4', value: 'Retainer Received'},
  
  /*
  { text: '1040', value: '1040' },
  {  text: '1120S', value: '1120S' },
  {  text: '1120', value: '1120' },
  {  text: '1065', value: '1065' },
  {  text: '990', value: '990' },
  {  text: '1041', value: '1041' },
  {  text: 'Payroll', value: 'Payroll' },
  {  text: 'Tax Planning', value: 'Tax Planning' },
  {  text: 'Consulting', value: 'Consulting' },
  {  text: 'Notice', value: 'Notice' },
  {  text: 'Other', value: 'Other' }
  */
]

	const status = [
  { text: "Not Started", value: "Not Started"},
  { text: "In Process", value: "In Process"},
  { text: "Need Info", value: "In Process"},
  { text: "Completed", value: "completed"},

  

  
  


  /*
		{ text: "Organizer Sent", value: "Organizer Sent"},
		{ text: "Received Info", value: "Received Info"},
		{ text: "Missing Info", value: "Missing Info"},
		{ text: "Completed", value: "Completed"},
		{ text: "Extension", value: "Extension"}
    */
	]

let value =""

const date = Date()


class Project extends React.Component {
	constructor(props) {
    super(props)
	this.state = {
	  Projects: [],
	  clientName: "",
	  loginDate: moment(), 
	  projType: "",
	  memo: "",
	  status: "",
	  engLetter: false,
	  efileAuth: false,
	  hardCopies: false,
	  creditCardInfo: false,
	  efiled: false,
	  efileAccepted: false,
	  extension: false ,
	  smartVault: false,
	  redirect: false,

    checked: false,
    numberOfMonths: 1

}

 this.handleChange = this.handleChange.bind(this);
}


componentDidMount(){
	this.clearForm();
}


handleChange = (date) => {
  this.setState ({
    loginDate: date
  })
}
 


clearForm = () => {
	this.setState({
	Projects: [],
	  clientName: "",
	  loginDate: moment(), 
	  projType: "",
	  memo: "",
	  status: "",
	  engLetter: false,
	  efileAuth: false,
	  hardCopies: false,
	  creditCardInfo: false,
	  efiled: false,
	  efileAccepted: false,
	  extension: false,
	  smartVault: false,
	}) 
};



handleInputChange = event  => {
    const { name, value } = event.target;  
    this.setState({
      [name]: value  
    });
  };



    
  handleSelect = (event, data) => {
    let value = data.value
    let name = data.name

    this.setState({
      [name]: value
    })
    console.log(name + " " + value)
  }

  renderRedirect = () => {
   return <Redirect to='/Wip'/>
  }



	handleFormSubmit = event => {
    const { name, value } = event.target;

		

 {
			API.saveProject({
				clientName: this.state.clientName,
				loginDate: this.state.loginDate._d,
				projType: this.state.projType,
				memo: this.state.memo,
				status: this.state.status,
				engLetter: this.state.engLetter,
				efileAuth: this.state.efileAuth,
				hardCopies: this.state.hardCopies,
				creditCardInfo: this.state.creditCardInfo,
				efiled: this.state.efiled,
				efileAccepted: this.state.efileAccepted,
				extension: this.state.extension,
				smartVault: this.state.smartVault
				
			})
				.then(res =>  window.location.href='/Wip') // {this.renderRedirect()} )  //this.clearForm())
				.catch(err => console.log(err));
		}
		
			
		
    // return	<Redirect to="/companies">
	};

 

  toggle(event, data) {
    console.log(data.checked)
    let myName = data.name  
    let newValue = data.checked
    this.setState({
      [myName]: newValue
    })
}




	render() {
    const {checked} = this.state;
		const { redirect } = this.state;

		if (redirect) {
			return <Redirect to='/wip'/>
		}

		return (
			<Container className="myContainer">
				<h2> New Project Entry </h2>
          
	

  	<Form>
        <Form.Group >
        <div className="ui label label login-date"> Date
       </div>
        <DatePicker
        id = "login-date"
        selected={this.state.loginDate}
        onChange={this.handleChange}
/>
       
          
        
           <Form.Field className="select">
           <Select
           className="status"
            fluid label='Status'
            placeholder="Received Info" 
            options={status} 
            name="status"
            default="Received Info"
            onChange={this.handleSelect}
            value={this.state.value} 
            />
            </Form.Field>  
         

          </Form.Group>

          <Form.Group>
          <Form.Field id="client">
          <Input 
           fluid label='Client'
           placeholder='Smith, John'
           name="clientName"
           onChange={this.handleInputChange}
           value={this.state.clientName} 
           />
           </Form.Field>


           <Form.Field className="select">
           <Select
            id="project-type"
            fluid label='Type'
            placeholder = 'Project Type' 
            options={options} 
            name="projType"
            onChange={this.handleSelect}
            value={this.state.value} 
            />
            </Form.Field>

                   
  
        </Form.Group>
       
         <Form.Group>
        <Form.Field>
        <Checkbox 
           className = "myCheckbox" 
           label='Retainer Invoiced'
           name = "retainerInvoiced"
           value={this.state.checked}
           onClick={this.toggle.bind(this)}
           />
            <Checkbox 
           className = "myCheckbox" 
           label='Retainer Received'
           name = 'retainerReceived'
           value={this.state.checked}
           onClick={this.toggle.bind(this)}
           />
             <Checkbox 
           className = "myCheckbox" 
           label='Retainer Received'
           name = 'retainerReceived'
           value={this.state.checked}
           onClick={this.toggle.bind(this)}
           />
             <Checkbox 
           className = "myCheckbox" 
           label='Other'
           name = 'other1'
           value={this.state.checked}
           onClick={this.toggle.bind(this)}
           />
           <Checkbox 
           className = "myCheckbox" 
           label='Other'
           name = 'other2'
           value={this.state.checked}
           onClick={this.toggle.bind(this)}
           />

           
      </Form.Field>
           
       
         </Form.Group>

                

          

        <Form.Field>
        <TextArea
         id="memo"
         color="orange"
         fluid label='Memo'
         placeholder='Enter Details & Notes Here...' 
         name="memo"
         onChange={this.handleInputChange}
         value={this.state.memo}

         />
         </Form.Field>
        <Form.Button id="submit"
        	onClick={this.handleFormSubmit}
        >
        Submit</Form.Button>
      </Form>
			

      </Container>


		);
	}
}

export default Project;


/*      

          <Checkbox 
           className = "myCheckbox" 
           label='Engagement Letter'
           name = "engLetter"
           value={this.state.checked}
           onClick={this.toggle.bind(this)}
           />
           </Form.Field>
           <Form.Field>
          <Checkbox
           className = "myCheckbox"
           label='CC'
           name = "creditCardInfo"
           value={this.state.checked}
           onClick={this.toggle.bind(this)}
            />
            </Form.Field>
        
          <Form.Field>
          <Checkbox
           className = "myCheckbox"
           label="Hard Copies"
           name ="hardCopies"
           value={this.state.checked}
           onClick={this.toggle.bind(this)}
            />
            </Form.Field>

          <Form.Field>
          <Checkbox
           className = "myCheckbox"
           label="SV"
           name="smartVault"
           value={this.state.checked}
           onClick={this.toggle.bind(this)}
            />
            </Form.Field>


            <Form.Group>


        
          <Form.Field>
          <Checkbox
            className = "myCheckbox"
            label='8879'
            name="efileAuth"
            value={this.state.checked}
            onClick={this.toggle.bind(this)}
          />
          </Form.Field>
            <Form.Field>
            <Checkbox
              className = "myCheckbox"
              label="e-filed"
              name="efiled"
              value={this.state.checked}
              onClick={this.toggle.bind(this)}
               />
              </Form.Field>
            <Form.Field>
            <Checkbox
              className = "myCheckbox"
              label="Accepted"
              name="accepted"
              value={this.state.checked}
              onClick={this.toggle.bind(this)}
               />
            </Form.Field>
            <Form.Field>
            <Checkbox 
             className = "myCheckbox"
             label="Invoiced"
             name="invoiced"
             value={this.state.checked}
             onClick={this.toggle.bind(this)}
              />
            </Form.Field>
            </Form.Group>

 */           
