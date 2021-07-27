import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { GetApp } from "@material-ui/icons";
import React, { useState } from "react";
import { fetchCSV, fetchProfiles } from "../util/profileAPI";
import "./staffprofile.scss";

interface IProfileResult {
  missing_emails: string[];
  missing_emp_nums: string[];
  profiles: IProfile[];
}

interface IProfile {
  Dept: string;
  "Display Name": string;
  Division: string;
  Email: string;
  "Employee Group": string;
  "Employee Number": string;
  "HQ/SVC": string;
  Manager: string;
  "Org Chain": string;
  "Reporting Officer": string;
  groupname: string;
  large_div: string;
  username: string;
}

const StaffProfile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Upload Data", "Download"];
  const [emails, setEmails] = useState<string[]>([]);
  const [empNo, setEmpNo] = useState<string[]>([]);
  const [results, setResults] = useState<IProfileResult>();
  const [loading, setLoading] = useState(false);

  const goBack = () => {
    if (activeStep === 0) return;
    else {
      setActiveStep(activeStep - 1);
    }
  };
  const getProfiles = async () => {
    setLoading(true);
    const response = await fetchProfiles(emails, empNo);
    const data = await response.json();
    setLoading(false);
    if (response.ok) {
      setResults(data);
      setActiveStep(activeStep + 1);
    }
  };

  const getCSV = async () => {
    setLoading(true);
    const response = await fetchCSV(emails, empNo);
    const data = await response.text();
    setLoading(false);
    if (response.ok) {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", String(new Date().valueOf()) + ".csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const string2arr = (str: string) =>
    str
      .replaceAll("\n", " ")
      .trim()
      .split(/[ ,;]+/);

  const getColumns = () => {
    return [
      {
        field: "Display Name",
        headerName: "Display Name",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "Email",
        headerName: "Email Address",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "Employee Number",
        headerName: "Employee No.",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "Reporting Officer",
        headerName: "Reporting Officer",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "Division",
        headerName: "Division",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "Employee Group",
        headerName: "Employee Group",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "HQ/SVC",
        headerName: "HQ/SVC",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "Manager",
        headerName: "Manager",
        minWidth: 200,
        flex: 1,
      },
      {
        field: "Org Chain",
        headerName: "Org Chain",
        minWidth: 200,
        flex: 1,
      },
    ];
  };

  return (
    <div className="staff-profile-container">
      <div className="title">Staff Profile Fetcher</div>
      <div className="stepper-container">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {activeStep === 0 && (
        <>
          <p className="text">
            Enter list of emails and/or employee numbers to search.
            <br />
            (Deliminate each record by white space or comma or semicolon)
          </p>
          <div className="input-container">
            <TextField
              label="Emails"
              multiline
              rows={15}
              variant="outlined"
              onChange={(e) => setEmails(string2arr(e.target.value))}
              defaultValue={emails.join("\n")}
            />
            <TextField
              label="Employee Numbers"
              multiline
              rows={15}
              variant="outlined"
              onChange={(e) => setEmpNo(string2arr(e.target.value))}
              defaultValue={empNo.join("\n")}
            />
          </div>
        </>
      )}
      {activeStep === 1 &&
        results &&
        (!!results.missing_emails.length ||
          !!results.missing_emp_nums.length) && (
          <div className="error-results-container">
            <div className="error-text">
              List of emails and/or employee numbers not found
            </div>
            <div className="error-table-container">
              {!!results.missing_emails.length && (
                <div className="error-table">
                  <div className="error-header">Email Address</div>
                  {results.missing_emails.map((email) => (
                    <div key={email} className="error-row">
                      {email}
                    </div>
                  ))}
                </div>
              )}
              {!!results.missing_emp_nums.length && (
                <div className="error-table">
                  <div className="error-header">Employee No.</div>
                  {results.missing_emp_nums.map((empNo) => (
                    <div key={empNo} className="error-row">
                      {empNo}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      {activeStep === 1 && results && !!results.profiles.length && (
        <div className="profiles-container">
          <div className="profiles-text">Found Profiles</div>
          <div style={{ display: "flex", height: "100%", width: "100%" }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                disableSelectionOnClick
                autoHeight
                columns={getColumns()}
                rows={results.profiles.map((profile, index) => {
                  return {
                    ...profile,
                    id: index,
                  };
                })}
              />
            </div>
          </div>
        </div>
      )}
      <div className="button-container">
        <Button size="large" onClick={() => goBack()} disabled={loading}>
          BACK
        </Button>
        {activeStep === 0 && (
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={() => getProfiles()}
            disabled={loading}
          >
            NEXT&nbsp;
            {loading && <CircularProgress size={24} color="inherit" />}
          </Button>
        )}
        {activeStep === 1 && (
          <Button
            color="primary"
            variant="contained"
            size="large"
            startIcon={<GetApp />}
            onClick={() => getCSV()}
            disabled={loading || !results?.profiles.length}
          >
            DOWNLOAD CSV&nbsp;
            {loading && <CircularProgress size={24} color="inherit" />}
          </Button>
        )}
      </div>
    </div>
  );
};

export default StaffProfile;
