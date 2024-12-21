import React from "react";
import { useState } from "react";
import fetchUserData from "../services/githubService";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minimumRepositories, setMinimumRepositories] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
    setErrors("");
  };

  const validateForm = () => {
    let newError = "";
    if (!username) newError = "username is required";
    setErrors(newError);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setUsername("");
      }, 1000);
    }

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setErrors("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container flex flex-col">
        <input
          className="mt-5"
          type="text"
          name="Username"
          value={username}
          placeholder="Enter Github username"
          onChange={handleInputChange}
        />
      </div>

      <div className="container flex flex-col mt-5">
        <input
          className="md-5"
          type="text"
          name="location"
          value={location}
          placeholder="Enter username location"
        />
      </div>

      <input
        type="text"
        className="mt-5"
        name="Repositpries"
        value={minRepos}
        placeholder="Enter minimum Repositpries"
      />

      <div>
        <button className="ml-5 bg-green-500 mt-5">Search</button>
      </div>

      {errors && <p>{errors}</p>}
      {loading && <p>Loading...</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} />
          <h2>{userData.login || "No Name Available"}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
          <p>{userData.location || "No Location Available"}</p>
          <p>{userData.public_repos || "No Minimum Repositories Available"}</p>
        </div>
      )}

      {userData && Array.isArray(userData) && (
        <div>
          {userData.map((user) => (
            <div key={user.id}>
              <img src={userData.avatar_url} />
              <h3> {user.login} </h3>
              <p>{user.location}</p>
              <p>Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default Search;
