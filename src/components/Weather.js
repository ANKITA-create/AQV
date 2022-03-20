import React,{useState,useEffect} from 'react'
//import Weather from '../components/Weather';
import {db} from '../firebase';

//import firebase from 'firebase';
const initialFieldValues = {
  city: '',
}

class Weather extends React.Component {
      constructor(props) {

      super(props);
      this.state = {
          city: ''

      }

      this.handleSubmit = this.handleSubmit.bind( this );
    }
    handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    console.log(city);
    document.getElementById("myForm").reset();
  };
  


  render(){

  return (
    <>
    <div>
      <div className="container mt-5">
          <div className="row justify-content-center">
              <div className="col-md-4">
                <div class="card text-white text-center border-0">
                  <img src="https://source.unsplash.com/600x900/?nature" class="card-img" alt="..." />
                  <div class="card-img-overlay">
                    <form id = "myForm" autoComplete="off"  onSubmit={this.handleSubmit}>
                      <div class="input-group mb-4 w-75 mx-auto">
                      <input 
                      type="search" 
                      name="city"
                      class="form-control" 
                      placeholder="Search City" 
                      aria-label="Search City" 
                      aria-describedby="basic-addon2" 
                      />
                      <button type="submit" class="input-group-text" id="basic-addon2">
                        <i className="fas fa-search"></i>
                      </button>
                      </div>

                    </form>
                    <div className="bg-dark bg-opacity-50 py-3">
                    <h2 class="card-title">Mumbai</h2>
                    <p class="card-text lead">Tuesday,March 15,2022</p>

                    <hr />
                    <i className="fas fa-cloud fa-4x"></i>
                    <h1 className="fw-bolder mb-5">35 &deg;C</h1>
                    <p className="lead fw-bolder mb-0">Cloud</p>
                    <p className="lead">33.01&deg;C | 35.01&deg;C</p>
                    
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
    </>
  )
}
};
export default Weather;

