import React from 'react';
import './App.css';
import Badge from './Badge';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        aboutMe: ""
    }
  }

  handleChange = (event) => {
    const {value} = event.target
    value === "" ? 
    document.querySelector("#submitButton").disabled = true : 
    document.querySelector("#submitButton").disabled = false
    }

  handleSubmit = (event) => {
    event.preventDefault()

    let form = document.querySelector(".form")

    this.setState({
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      placeOfBirth: form.placeOfBirth.value,
      phone: form.phone.value,
      favoriteFood: form.favoriteFood.value,
      aboutMe: form.aboutMe.value
    });
    form.firstName.value = ""
    form.lastName.value = ""
    form.email.value = ""
    form.placeOfBirth.value = ""
    form.phone.value = ""
    form.favoriteFood.value = ""
    form.aboutMe.value = ""
}

  render() {
    return (
      <div className="App">

        <form className="form" 
          onSubmit={this.handleSubmit}>

          <input name="firstName" 
            placeholder="First Name" 
            minLength="3"
            onChange={this.handleChange}
            required/>

          <input name="lastName" 
            placeholder="Last Name" 
            onChange={this.handleChange}/>

          <br />

          <input name="email" 
            placeholder="Email" 
            type="email"
            minLength="3"
            onChange={this.handleChange}
            required/>

          <input name="placeOfBirth" 
            placeholder="Place of Birth" 
            minLength="3"
            onChange={this.handleChange}
            required/>

          <br />

          <input name="phone" 
            placeholder="Phone" 
            type="number" 
            minLength="10"
            maxLength="10"
            onChange={this.handleChange}
            required/>

          <input name="favoriteFood" 
            placeholder="Favorite Food" 
            minLength="3"
            onChange={this.handleChange}
            required/>

          <br />

          <textarea name="aboutMe" 
            placeholder="Tell us about yourself." 
            minLength="3"
            onChange={this.handleChange}
            required />

          <br />

          <button id="submitButton" disabled={true}>Submit</button>

        </form>

        <Badge firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} placeOfBirth={this.state.placeOfBirth} phone={this.state.phone} favoriteFood={this.state.favoriteFood} aboutMe={this.state.aboutMe}/>

      </div>
    );  
  }
}

export default App;