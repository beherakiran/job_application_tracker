import { useEffect, useState } from "react";
import ApplicationContext from "./ApplicationContext.js";

function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState(() => {
    const savedApplications = localStorage.getItem("applications");

    return savedApplications ? JSON.parse(savedApplications) : [];
  });

  const addApplication = (newApplication) => {
    setApplications([...applications, newApplication]);
  };

  const updateApplication = (id, updatedApplication) => {
    const updatedApplications = applications.map((application) => {
      if (application.id === id) {
        return updatedApplication;
      }

      return application;
    });

    setApplications(updatedApplications);
  };

  const deleteApplication = (id) => {
    const filteredApplications = applications.filter((application) => {
      return application.id !== id;
    });

    setApplications(filteredApplications);
  };

  useEffect(() => {
  localStorage.setItem("applications", JSON.stringify(applications));
}, [applications]);

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        updateApplication,
        deleteApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationProvider;
