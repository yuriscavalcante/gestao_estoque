import React from "react";
import "./styles.css";
import { FormsInput } from "../components/formsInput/formsInput";
import { Button } from "../components/button/button";
export default function Login() {
  return (
    <>
      <div className="content">
        <div className="logo">
          <img src="./images/generic_logo.png" alt="logo" />
        </div>
        <div className="division"></div>
        <div className="forms">
          <form>
            <FormsInput
              placeholder="E-mail"
              type="email"
              icon="bi bi-envelope"
            ></FormsInput>
            <FormsInput
              placeholder="Senha"
              type="password"
              icon="bi bi-lock"
            ></FormsInput>
            <Button label="login" background="#228B22" color="#fff" />
          </form>
          <p>
            Não tem conta? <a href="#">Cadastre-se</a>
          </p>
        </div>
      </div>
    </>
  );
}
