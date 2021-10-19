import axios from "axios";
import React, { useState, useEffect } from "react";

const useAppData = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities").then((res) => {
      setActivities(res.data);
    });
  }, []);

  //all app functions/ API interactions should be here

  const archiveCall = (callObj) => {
    const setArchived = {
      is_archived: true,
    };
    if (callObj.is_archived === "true") {
      setArchived.is_archived = "false";
    }
    const updatedCall = Object.assign(callObj, setArchived);

    console.log("Call updated...", updatedCall);

    // return axios.post(
    //   `https://aircall-job.herokuapp.com/activities/${updatedCall.id}`
    // );
  };

  return { activities, archiveCall };
};

export default useAppData;
