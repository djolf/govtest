import { Button } from "@material-ui/core";
import React from "react";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import "./TopNav.scss";

const TopNav = () => {
  return (
    <header>
      <div className="content">
        <div
          className="title"
          onClick={() => {
            window.location.href = process.env.PUBLIC_URL + "/";
          }}
        >
          CapDev<b>Portal</b>
        </div>
        <div className="logout">
          <Button
            color="default"
            size="large"
            endIcon={<PowerSettingsNewRoundedIcon fontSize="inherit" />}
            onClick={() => {
              window.location.href = process.env.PUBLIC_URL + "/logout";
            }}
          >
            Log Out
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
