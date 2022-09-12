import { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans";

const Auth = createGlobalStyle`
  .full,
  .custom {
    min-height: 100vh;
    over-flow: hidden;
  }
  .title {
    font-family: sans-serif;
    font-weight: 700;
    color: #1f2a36;
  }
  .main-color {
    color: #fbb017;
  }
  .main-color:hover {
    color: #fbb017;
    border: 0px solid #fbb017;
  }
  
  .description {
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }
  .label {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    color: #999999;
  }
  .forgot {
    font-family: 'Airbnb Cereal App Medium';
    color: #999999;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
  }
  .forgot:hover {
    color: #888888;
  }
  .alternative {
    font-family: 'Airbnb Cereal App Medium';
    color: #999999;
    font-weight: 500;
    font-size: 14px;
  }
  .background {
    object-fit: cover;
    object-position: center;
    transform: rotate(180deg);
  }
  .mask {
    background-color: #5e50a1;
    position: absolute;
    opacity: 0.9;
    z-index: 0;
    top: 0;
    left: 0;
  }
  .secondary-color {
    color: #8692a6;
  }
  .separator {
    margin-left: 0;
    border: 1px solid #f5f5f5;
  }
  .input-auth {
    background-color: #ffffff !important;
    box-sizing: border-box;
    border-radius: 6px;
  }
  .input-auth:hover,
  .input-auth:focus {
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11) !important;
    border: 1px solid #efc81a !important;
  }
  .terms {
    display: flex;
    gap: 10px;
  }
  input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }
  input[type="checkbox"]:hover {
    cursor: pointer;
  }
  input[type="checkbox"]:checked {
    background-color: #EFC81A;
    border: none;
  }
  .btn-main {
    height: 50px;
    border: 0;
    box-shadow: none;
    border-radius: 5px;
    background-color: #fbb017;
    color: #f6f7f8;
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }
  .btn-main:hover {
    background-color: #fbb017;
    color: #f6f7f8;
    border: 1px solid #F0F8FF;
  }

  @media screen and (max-width: 767px) {
    .full {
      min-height: 100vh;
    }
    .custom {
      min-height: 100vh;
    }
    .title
    .description {
      text-align: center;
    }
  }


`;

export default Auth;
