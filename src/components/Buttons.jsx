import React, { Component } from 'react'

export class Buttons extends Component {
  render() {
    return (
      <div className="all-buttons">
        <button className="previous-next-buttons" onClick={this.props.previousPerson}>&lt; Previous</button>
        <div className="middle-buttons">
            <button>Edit</button>
            <input type="text" placeholder="enter person's first name" onChange={e=>this.props.handleDeleteChange(e)} value={this.props.currentPerson}/>
            <button onClick={()=>this.props.deletePerson(this.props.currentPerson)}>Delete</button>


            <div className="new-person-form">
                <input type="text" placeholder="enter person's first name" value={this.props.currentFirstName} onChange={(e)=>this.props.handleFirstNameChange(e)}/>
                <input type="text" placeholder="enter person's last name" value={this.props.currentLastName} onChange={(e)=>this.props.handleLastNameChange(e)}/>
                <input type="text" placeholder="enter person's city" value={this.props.currentCity} onChange={(e)=>this.props.handleCityChange(e)}/>
                <input type="text" placeholder="enter person's country" value={this.props.currentCountry} onChange={(e)=>this.props.handleCountryChange(e)}/>
                <button onClick={()=>this.props.newPerson(this.props.currentfirstName, this.props.currentLastName, this.props.currentCity, this.props.currentCountry)}>Add New Person</button>
            </div> 

        </div>
        <button className="previous-next-buttons" onClick={this.props.nextPerson}>Next &gt;</button>
      </div>
    )
  }
}

export default Buttons
