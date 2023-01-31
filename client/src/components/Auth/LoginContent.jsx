import React from "react";
import Footer from "./Footer";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginContent = ({ page, setPage, refCode }) => {
  return (
    <div className="login-content flex-lg-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden py-10 py-lg-20 px-10 p-lg-7 mx-auto mw-450px w-100">
      <div className="d-flex flex-column-fluid flex-center py-10">
        {page === "login" ? <LoginForm setPage={setPage} /> : ""}
        {page === "register" ? (
          <RegisterForm setPage={setPage} refCode={refCode} />
        ) : (
          ""
        )}
        {page === "forgot" ? <ForgotPasswordForm setPage={setPage} /> : ""}
      </div>

      <Footer />
    </div>
  );
};

export default LoginContent;
