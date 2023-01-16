import React, { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { serverClient } from "../Constant";
const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState(null);
  const [role, setRole] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //Login Function
  const login = (email, password) => {
    setLoading(true);
    axios
      .post(`${serverClient}/api/v1/users/login`, {
        email: email,
        password: password,
      })
      .then((result) => {
        setToken(result.data.token);
        setUserName(result.data.user.fName);
        setRole(result.data.user.role);
        setIsLoggedIn(true);
        setLoading(false);

        AsyncStorage.setItem("token", result.data.token)
          .then((result) => {
            console.log("Token saved.");
            setIsLoggedIn(true);
          })
          .catch((err) => {
            alert(result.data.Info);
            console.log(err);
            setIsLoggedIn(false);
          });
      })
      .catch((err) => {
        alert(err);
        setError(err);
        setIsLoggedIn(false);
        setUserName(null);
        setRole(null);
        setLoading(false);
      });
  };
  return (
    <UserContext.Provider
      value={{
        login,
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        userName,
        setUserName,
        role,
        setRole,
        isLoading,
        setIsloading,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
