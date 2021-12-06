//step-3
//lets put all our rendering logic from form.js n paste here
//change all this.handleChange to props.handleChange
//data={setState} in Form.js
import React from 'react'
//import Form from './Form'

const FormComponent = (props) => {
  return (
    <main>
      <form>
        <h3>Fill Your Details Here</h3>
        <input
          type="text"
          name="firstName"
          placeholder="FIRST NAME"
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="LAST NAME"
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          name="age"
          placeholder="AGE"
          value={props.data.Age}
          onChange={props.handleChange}
        />
        <br />
        <br />
        <h3>select your gender</h3>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <br />

        <h3>Select Your Destination</h3>
        <select
          name="destination"
          value={props.data.destination}
          onChange={props.handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="toronto">Toronto</option>
          <option value="monteal">Montreal</option>
          <option value="alberta">Alberta</option>
          <option value="halifax">Halifax</option>
        </select>
        <br />
        <br />

        <h3>check below boxes if you have any dietary restrictions</h3>
        <label>vegitarian ?</label>
        <input
          type="checkbox"
          name="isVegan"
          checked={props.data.isVegan}
          onChange={props.handleChange}
        />
        <br />
        <br />
        <label>Gluten free ?</label>
        <input
          type="checkbox"
          name="isGlutenFree"
          checked={props.data.isGlutenFree}
          onChange={props.handleChange}
        />
        <br />
        <br />
        <label>Lactose free ?</label>
        <input
          type="checkbox"
          name="isLactoseFree"
          checked={props.data.isLactoseFree}
          onChange={props.handleChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <h2>List Of Entered information:</h2>
      <p>
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>
        Your gender: {props.data.gender}
        {/* Gender here */}
      </p>
      <p>
        Your destination: {props.data.destination}
        {/* Destination here */}
      </p>
      <p>
        Your dietary restrictions: Vegan:{" "}
        {props.data.dietaryRestrictions.isVegan ? "Yes" : "No, "}
        GlutenFree:{" "}
        {props.data.dietaryRestrictions.isGlutenFree ? "Yes" : "No, "}
        Lactose Free:{" "}
        {props.data.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}
      </p>
    </main>
  );
};

export default FormComponent;
