import React, { Suspense, lazy, useState} from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { primaryColors } from "./colorUtility";

import axios from "axios";

import Loading from "./components/Loading";
const Home = lazy(() => import("./components/Home/Home"));
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

  const [user, setUser] = useState({
    STATUS: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    linkedInProfile: "",
    picture: "",
  });

  const handleSubmit = async () => {
    await axios
      .post(process.env.REACT_APP_API_ENDPOINT, newUser)
      .then((res) => {
        setUser({
          ...newUser,
          STATUS: res.data.STATUS,
          picture: res.data.data.picture,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home colors={primaryColors} />}
          />
          {Object.keys(primaryColors).map((color, index) => {
            return (
              <Route
                key={index}
                path={`/${color}/register`}
                render={() => (
                  <RegisterPage
                    color={primaryColors[color]}
                    newUser={newUser}
                    setNewUser={setNewUser}
                    handleSubmit={handleSubmit}
                  />
                )}
              />
            );
          })}
          <Route
            path="/success"
            render={() => <Success user={user} setUser={setUser} />}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
