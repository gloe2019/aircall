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

  const archiveCall = (id) => {
    const callObj = activities.find((activity) => activity.id === id);
    const setArchived = {
      is_archived: true,
    };
    if (callObj.is_archived === true) {
      setArchived.is_archived = false;
    }

    return axios
      .post(
        `https://aircall-job.herokuapp.com/activities/${callObj.id}`,
        setArchived
      )
      .then((res) => console.log("Successfully archived call obj"));
  };

  return { activities, archiveCall };
};

export default useAppData;
