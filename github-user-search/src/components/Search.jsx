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
        const { value} = event.target;
        setUsername(value);
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
            }
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

        <div> 
            <img src = {userData.avatar_url} /> 
            <p> {userData.name} </p>
            <a href = {userData.html_url} /> 
        </div>


    </form>

  )
}

export default Search;