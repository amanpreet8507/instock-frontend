import React, { useState } from "react";
import AddButton from "../../components/Buttons/AddButton";
import { Link, useNavigate } from "react-router-dom";
import ItemButton from "../../components/ItemButton/ItemButton";
import Card from "../../components/Card/Card";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Auth.scss";
import AuthHeader from "../../components/Header/AuthHeader";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged In Successfully!!");
      navigate("/warehouses");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <AuthHeader />
      <main className="app__container">
        <Card>
          <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <label htmlFor="email">
                Work Email:
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </label>
              <label
                htmlFor="password"
                onChange={(e) => setPassword(e.target.value)}
              >
                Password:
                <input type="text"></input>
              </label>
              <AddButton>Log in</AddButton>
              <Link to={`/`}>
                <ItemButton text="New Employee? Sign Up" />
              </Link>
            </form>
          </div>
        </Card>
      </main>
    </>
  );
};

export default LoginForm;
