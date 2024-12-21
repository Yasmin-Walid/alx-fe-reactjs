import axios from "axios";
import { useState } from "react";

const fetchUserData = async (username, location, minimumRepositories) => {
  try {
    let query = username ? `username: ${username}` : "";
    if (location) {
      query += `location: ${location}`;
    }
    if (minimumRepositories) {
      query = +`minimumRepositories:${minimumRepositories}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items;
  } catch (error) {
    throw new Error("User not found ");
  }
};

export default fetchUserData;
