import React, {useState, useEffect} from "react";
import "../App";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Leagues(){
    const [data, setData] = useState([]);
    useEffect(()=> {
        const options = {
            method: 'GET',
            url: 'https://api-basketball.p.rapidapi.com/timezone',
            headers: {
              'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
              'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    },[])

    return(
        <div className="leagues">
         leagues
        </div>
    )
}

export default Leagues;