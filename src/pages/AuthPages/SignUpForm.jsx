import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/Buttons/AddButton";
import { Link } from "react-router-dom";
import ItemButton from "../../components/ItemButton/ItemButton";
import Card from "../../components/Card/Card";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Auth.scss";
import AuthHeader from "../../components/Header/AuthHeader";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Acoount created!!");
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
              <h2>Sign Up</h2>
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
              <AddButton>Sign Up</AddButton>
              <Link to={`/login`}>
                <ItemButton text="Already registered? Login" />
              </Link>
            </form>
          </div>
        </Card>
      </main>
    </>
  );
};

export default SignUpForm;
