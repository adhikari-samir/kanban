import React, { useState } from "react";
import axios from "axios";
import "./Popup.css";
import { ImCross } from "react-icons/im";
const Popup = ({ tsk, onclose }) => {
  const baseurl = " http://localhost:8000/api/v1/tasks";

  const [selectedStatus, setSelectedStatus] = useState("to-do");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  function handleSave() {
    // console.log("Title:", title);
    // console.log("Description", description);
    // console.log("Selected Status:", selectedStatus);
    axios
      .post(baseurl, {
        title: "Hello World!",
        description: "This is 1st request.",
        status: selectedStatus,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Data saved successfully!");
          onclose();
        } else {
          // console.log(response.data);
          console.log("Unexpected status:", response.status);
        }
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  return (
    <>
      <div className="popup-model">
        <div className="popup-container">
          <i className="cross" onClick={onclose}>
            <ImCross></ImCross>
          </i>
          <div className="popup-body">
            <div>Title:</div>
            <input type="text" onChange={handleTitleChange}></input>
            <div>Description:</div>
            <input type="text" onChange={handleDescriptionChange}></input>
            <label>Status : </label>
            <select value={selectedStatus} onChange={handleStatusChange}>
              <option value="to_do">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popup;
