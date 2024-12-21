import axios from "axios";
import { useState } from "react";

const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = username ? `username: ${username}` : "";
    if (location) {
      query += `location: ${location}`;
    }
    if (minRepos) {
      query = +`minimumRepositories:${minRepos}`;
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
