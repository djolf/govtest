import { Button, CircularProgress, TextField } from "@material-ui/core";
import { useSnackbar } from "material-ui-snackbar-provider";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BgImg from "../login_bg.png";
import { fetchOtp, fetchToken } from "../util/authAPI";
import userStore from "../util/userStore";
import "./login.scss";

const LoginPage = () => {
  const history = useHistory();
  const [stage, setStage] = useState("EMAIL");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [OTP, setOTP] = useState("");
  const snackbar = useSnackbar();
  const [loading, setLoading] = useState(false);

  const validateEmail = (str: string) => {
    if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/.test(str.toUpperCase())) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const getOtp = async () => {
    setLoading(true);
    const response = await fetchOtp(email);
    const data = await response.json();
    setLoading(false);
    if (response.ok) {
      setStage("OTP");
    } else {
      snackbar.showMessage("GetOTP failed: " + data.detail);
    }
  };

  const getToken = async () => {
    setLoading(true);
    const response = await fetchToken(email, OTP);
    const data = await response.json();
    setLoading(false);
    if (response.ok) {
      userStore.setStore(data);
      history.replace("/" + window.location.hash);
    } else {
      snackbar.showMessage("Login failed: " + data.detail);
      history.replace("/login");
    }
  };

  return (
    <div className="login-screen">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <section>
        <div className="login-container">
          <span className="title">
            CapDev<b>Portal</b>
          </span>
          <span className="tagline">
            The Future is <i>Now</i>
          </span>
          {stage === "EMAIL" && (
            <>
              <p className="text">
                Enter your Email Address and we will send you a One-Time
                Password (OTP) to enter below.
              </p>
              <form noValidate autoComplete="off">
                <div className="row">
                  <TextField
                    className="textfield"
                    required
                    type="email"
                    label="Email"
                    variant="outlined"
                    placeholder="e.g. glenn@dsaid.gov.sg"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                    error={emailError}
                    helperText={emailError && "Invalid Email"}
                  />
                </div>
                <div className="row">
                  <Button
                    className="get-otp"
                    size="large"
                    color="primary"
                    variant="contained"
                    disabled={email.length === 0 || emailError}
                    onClick={() => getOtp()}
                  >
                    <b>GET OTP</b>&nbsp;
                    {loading && <CircularProgress size={24} color="inherit" />}
                  </Button>
                  <div className="text register">
                    <span>Not a registered user yet?</span>
                    <br />
                    <a href="#">Contact Us.</a>
                  </div>
                </div>
              </form>
            </>
          )}
          {stage === "OTP" && (
            <>
              <p className="text">
                An OTP has been emailed to you. Enter OTP below.
              </p>
              <form noValidate autoComplete="off">
                <div className="row">
                  <TextField
                    className="textfield"
                    autoComplete="one-time-code"
                    required
                    type="text"
                    label="One-Time Password"
                    variant="outlined"
                    placeholder="OTP"
                    inputProps={{
                      maxLength: 5,
                    }}
                    onChange={(e) => {
                      setOTP(e.target.value);
                    }}
                  />
                </div>
                <div className="row">
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    onClick={() => getToken()}
                  >
                    <b>LOGIN</b>&nbsp;
                    {loading && <CircularProgress size={24} color="inherit" />}
                  </Button>
                  <Button
                    className="resend"
                    size="large"
                    onClick={() => getOtp()}
                  >
                    RESEND OTP
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
