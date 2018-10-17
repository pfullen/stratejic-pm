import React, { Component } from "react";
import ReactTable from 'react-table';
import _ from 'lodash'
import API from "../../utils/API";
import 'react-table/react-table.css';
import {
  Icon,
  Label,
  Checkbox,
  Menu,
  Table,
  Button,
  Container,
  Search
} from "semantic-ui-react";
import "./Wip.css";

class Wip extends Component {

 

  state = {
    //companyList:["Home Depot", "Target", "Walmart", "Publix", "Amazon", "Wendys"]
    projects: [],
    isDisabled: true,
    column: null,
    data: [],
    direction: 'ascending',
  };

  componentDidMount() {
    this.loadProjects();

    this.setState ({
      data: this.state

      })
  }

  handleSeach = event => {
    
    console.log(event)
    //const array = this.state.projects
    //const filterdArray = array.filter(value => {

    //})
    //this.setState ({
     // projects: 
   // })
  }



  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));

  };

  

  render() {

    const data = this.state.projects

     const displayCheckBox = (value => {
    if (value === true) {
      return (
            <i class= "check icon"/>
        ) 
     }
    })
    


    const columns = [{
      Header: 'Client',
      accessor: 'clientName'
    },{
      Header: 'Date',
      accessor: 'loginDate',
      Cell: row => (
        console.log('This is login date' + row.loginDate))
    }, {
      Header: 'Memo',
      id: 'memo',
      accessor: d => d.memo
    }, {
      Header: 'Status',
      accessor: 'status'
    }, {

      Header: 'EngLetter',
      id: 'engLetter',
      accessor: d => d.engLetter,
      Cell: row => 
      <span
        className="center">

      {displayCheckBox(row.original.engLetter)} 
      
      </span>
      
      
    },   {
      Header: 'Type',
      accessor: 'projType',
        }]
    const column = this.state.column
    
    const direction = this.state.direction 

    const isChecked = value => {
      if (value) {
        return true;
      }
      return false;
    }

    return (
      <div>
      <Container>
           <h3> Projects 
      <Search
      placeholder="Search"
      className="search"
      onChange={this.handleSeach}
      value= {this.state.value}
      >
        <i className="search icon" />
      </Search>
      </h3>

      </Container>        

   
      

      <Container>
     


     
     

      
       <ReactTable
       className = "-striped -highlight"
       defaultPageSize={10}
       data={data}
       columns={columns}  
       celled

       >   

        </ReactTable>  
        
      </Container>
      </div>
    );
  }
}

export default Wip;
