import React, { Component } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Header from './Components/Header/Header';
import Logo from './Components/Logo/Logo';
import Scroll from './Scroll';

//API KEY of the OpenWeatherMap
const API_KEY = '9cc110d9004bdb8e47b7e44bb39aa52f';


class App extends Component {

  constructor(){
    super()
    //Main State to Manage the Whole Application
    this.state = {
      city:'',
      country:'',
      temeprature:[],
      humidity: [],
      error:'',
      date:[],
      name:'',
      avgPressure: '',
      Weather_Info:[]
    }
  }

  //Calling function of OpenWeatherMap API
  getWeather = async(event) =>{

    //variable for fetching value of input element
    const City = document.getElementById("searchField").value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${City}&units=Metric&appid=${API_KEY}`);

    const response = await api_call.json();


    if( City ){
               this.state.Weather_Info = response.list;
               let totalPressure = 0;

                //Setting state of city, country for Header.js file props
                this.setState({ 
                                   city: response.city.name,
                                   country: response.city.country,
                                   error: " ",                                 
                              })

                //loop for Calculation of totalPressure for the current week
                for(let i=0; i<response.list.length ; i++)
                {
                      totalPressure = totalPressure + response.list[i].main.pressure;
                }

                totalPressure = parseInt(totalPressure / response.list.length);

                  //setting state of avgPressure with calculatio of Avg Pressure
                  this.setState({
                    avgPressure: "Average Pressure for this week: "+totalPressure+"hPa"
                  })
                     
              }
    else{ 
            //Setting state for Providing invaild input 
            this.setState({
                                error: "please input search values..",
                                city: "Please input valid City Name..",
                                country: '',
                                avgPressure: ''

                          })
        }

  }

  //rendering the actual web-page
  render() {
    
     return (
      <div className="App">
          <Logo />
          <SearchBox searchChange={this.onsearchChange} onChange={this.getWeather} />
          <Scroll>
              <Header city = {this.state.city} country={this.state.country} avgPressure = {this.state.avgPressure}/>
              <CardList Weather_Info={this.state.Weather_Info} city={this.state.city} />
          </Scroll>
      </div>
    );
  }
}

export default App;
