//step2
//to simplify code we create this Form.js n paste our code instead of puting in app.js and exported to app.js
//now cut all the code from render method n pasted it in FormComponent.js n then import FromComponent here
//inside render method call FormComponent inorder to run the code

import React  from 'react';
import FormComponent from "./FormComponent";

class Form extends React.Component{
  constructor() {
    super()
      this.state={
      firstName: "",
      lastName: "",
      age: "",
      gender:"",
      destination:"",
      dietaryRestrictions: {
        isVegan: false,
        isGlutenFree: false,
        isLactoseFree: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value,type, checked} = event.target
    type === "checkbox" ? this.setState({ 
      dietaryRestrictions:{[name]:checked}
    })
    :
    this.setState({ [name]: value });
  }
  render() {
      return(
     <FormComponent
         handleChange={this.handleChange}
         data={this.state}
     />
      )
  }
}
 
export default Form;