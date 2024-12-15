import axios from "axios";
import {useState} from 'react';



const fetchUserData = async (username, location, minimumRepositories) => {
    try {
        const response = await axios.get (`https://api.github.com/users/${username}`);
        return response.data;


    } catch (error) {
        throw new Error ("User not found ");
    }
};

export default fetchUserData;