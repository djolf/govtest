import React, { useEffect, useState } from "react";
import { fetchApps } from "../util/authAPI";
import ModuleCard from "./ModuleCard";
import "./dashboard.scss";
import { Backdrop, CircularProgress } from "@material-ui/core";

interface IAppDetail {
  title: string;
  name: string;
  desc: string;
}
const DUMMY_PROJECT = {
  title: "Project 1",
  name: "project1",
  desc: "a dummy project for testing permissions",
};

const Dashboard = () => {
  const [apps, setApps] = useState<IAppDetail[]>();

  const getApps = async () => {
    const response = await fetchApps();
    const data = await response.json();
    if (response.ok) {
      setApps([...data.apps, DUMMY_PROJECT]);
    }
  };
  useEffect(() => {
    getApps();
  }, []);
  return (
    <>
      {apps && !!apps.length ? (
        <div className="dashboard-container">
          {apps?.map((item) => (
            <ModuleCard
              key={item.name}
              name={item.name}
              title={item.title}
              img="https://picsum.photos/id/4/300/200"
            />
          ))}
        </div>
      ) : (
        <Backdrop open>
          <CircularProgress size={64} color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default Dashboard;
