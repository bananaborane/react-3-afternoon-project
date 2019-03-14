import React, { Component } from "react";
import Buttons from "./Buttons";
import Header from "./Header";
import data from "./../data";
import NonIndexArray from "./NonArrayIndex"

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      currentPerson: '',
      arrayOfData: data,
      currentArrayLength: data.length,
      currentFirstName: '',
      currentLastName: '',
      currentCity: '',
      currentCountry: '',
      newGuy: {}
    };
  }

  previousPerson = () => {
    if (this.state.currentIndex >= 1) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  };

  newPerson = (a, b, c, d) => {
      let newGuy = {
          id: this.state.currentArrayLength + 1,
          name: { first: a, last: b },
          city: c,
          country: d,
          employer: null,
          title: null,
          favoriteMovies: [null, null, null]
      }
      let newArrayOfData = [...data, newGuy]
      this.setState({
          arrayOfData: newArrayOfData,
          currentArrayLength: data.length+1,
          currentFirstName: '',
          currentLastName: '',
          currentCity: '',
          currentCountry: '',
          newGuy: ''
      })
    }   

  deletePerson = (person) => {
    let newArr = this.state.arrayOfData.filter((item)=>{return item.name.first !== person})
    if (this.state.currentPerson !== ''){
    this.setState({
        arrayOfData: newArr,
        currentPerson: '',
        currentArrayLength: this.state.currentArrayLength - 1
        })
        }
    }

  handleDeleteChange = (e) => {
      this.setState({
          currentPerson: e.target.value
      })
  }

  handleFirstNameChange = (e) => {
      this.setState({
          currentFirstName: e.target.value
      })
  }

  handleLastNameChange = (e) => {
      this.setState({
          currentLastName: e.target.value
      })
  }

  handleCityChange = (e) => {
      this.setState({
          currentCity: e.target.value
      })
  }

  handleCountryChange = (e) => {
      this.setState({
          currentCountry: e.target.value
      })
  }
  


  nextPerson = () => {
    if (this.state.currentIndex < this.state.currentArrayLength-1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  };

  render() {
      let mappedCities = data.map((item)=>{
          return (<div key={item.id}>
            {item.city}
          </div>)
      })
      let movieList = this.state.arrayOfData[this.state.currentIndex].favoriteMovies.map((item)=>{return (<li>{item}</li>)})
    return (
      <div className='main-container'>
        <Header />
        <div className="display">
        <NonIndexArray currentIndex={this.state.currentIndex} currentArrayLength={this.state.currentArrayLength}/>
            <h3 className="fullname"><span>{this.state.arrayOfData[this.state.currentIndex].name.first}</span> <span>{this.state.arrayOfData[this.state.currentIndex].name.last}</span></h3>
            <div><b>from:</b> {this.state.arrayOfData[this.state.currentIndex].city}, {this.state.arrayOfData[this.state.currentIndex].country}</div>
            <div><b>job title:</b> {this.state.arrayOfData[this.state.currentIndex].title}</div>
            <div><b>employer:</b> {this.state.arrayOfData[this.state.currentIndex].employer}</div>
            <div><b>favorite movies:</b> <ol>{movieList}</ol></div>
        </div>
        <Buttons currentIndex={this.state.currentIndex} currentPerson={this.state.currentPerson} arrayOfData={this.state.arrayOfData} currentObject={this.state.currentObject} currentFirstName={this.state.currentFirstName} currentLastName={this.state.currentLastName} currentCity={this.state.currentCity} currentCountry={this.state.currentCountry} previousPerson={this.previousPerson} nextPerson={this.nextPerson} editPerson={this.editPerson} deletePerson={this.deletePerson} handleDeleteChange={this.handleDeleteChange} handleFirstNameChange={this.handleFirstNameChange} handleLastNameChange={this.handleLastNameChange} handleCityChange={this.handleCityChange} handleCountryChange={this.handleCountryChange} newPerson={this.newPerson} />
      </div>
    )
  }
}

export default Main;
