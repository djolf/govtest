import { Button } from "@material-ui/core";
import React from "react";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import "./TopNav.scss";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const history = useHistory();
  return (
    <header>
      <div className="content">
        <div
          className="title"
          onClick={() => {
            history.push("/");
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
              history.replace("/logout");
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
