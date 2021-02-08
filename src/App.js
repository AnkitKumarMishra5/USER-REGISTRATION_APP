import React, { Suspense, lazy, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { primaryColors } from "./colorUtility";

import axios from "axios";

import Loading from "./components/Loading";
const RegisterPage = lazy(() => import("./components/Register/RegisterPage"));
const Success = lazy(() => import("./components/Success/Success"));

const App = () => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    linkedInProfile: "",
  });

  useEffect(() => {
    console.log(newUser);
  }, [newUser]);

  const handleSubmit = async () => {
    await axios
      .post(process.env.REACT_APP_API_ENDPOINT, newUser)
      .then((res) => {
        setNewUser({...newUser, STATUS: res.data.STATUS, picture: res.data.data.picture});
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {Object.keys(primaryColors).map((color, index) => {
            return (
              <Route
                key={index}
                path={`/${color}/register`}
                render={() => <RegisterPage color={primaryColors[color]} newUser={newUser} setNewUser={setNewUser} handleSubmit={handleSubmit}/>}
              />
            );
          })}
          <Route
            path="/success"
            render={() => (
              <Success newUser={newUser} setNewUser={setNewUser} />
            )}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
