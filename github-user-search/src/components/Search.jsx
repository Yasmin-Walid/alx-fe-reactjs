import React from 'react'
import {useState} from 'react';
import fetchUserData from '../services/githubService'
import axios from "axios";



const Search = () => {
    const [username, setUsername] = useState ("");
    const [errors,setErrors] = useState ("");
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null); 



    const handleInputChange = (event) => {
        setUsername(event.target.value);
        setErrors ("");

    };

    const validateForm = () => {
        let newError = "";
        if (!username) newError = "username is required";
        setErrors (newError);
    };

    const handleSubmit = (event) => {
        event.preventDefault ();
        if(validateForm()) {
            setLoading(true);
            console.log("Searching for user:", username);
            setTimeout (() => {
                setLoading (false);
                setUsername ("");
            },1000);
        }; 

        try {
            const data = fetchUserData (username);
            setUserData (data);
            } catch (err){
                setErrors ("Looks like we cant find the user");
            } finally {
                setLoading (false);
            };
    };
    
  

  return (

    <form onSubmit = {handleSubmit}>
        <input 
        className='mr-5'
        type = "text"
        name = "Username"
        value = {username}
        placeholder="Enter Github username"
        onChange = {handleInputChange}
        />
        <button
        className='ml-5'

>
            Search
        </button>
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        {loading && <p>Loading...</p>}

        {userData && ( 
        <div>
          <img
            src={userData.avatar_url}
          />
          <h2>{userData.login || "No Name Available"}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}

    </form>

  )
}

export default Search;