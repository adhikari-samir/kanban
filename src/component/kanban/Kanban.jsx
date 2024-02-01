import React, { useEffect, useState } from "react";
import "./kanban.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { BiSolidPlusCircle } from "react-icons/bi";
import Popup from "./Popup";
import axios from "axios";

const Kanban = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [sitPopup, setSitPopup] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [showLorem, setShowLorem] = useState({
    retailOrder: false,
    dataAnalyticsPodcast: false,
    analytics: false,
  });

  const [userEnteredTasks, setUserEnteredTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [tasksData, setTasksData] = useState([]);

  const baseurl = "http://localhost:8000/api/v1/tasks";

  const fetchData = async () => {
    try {
      const response = await axios.get(baseurl);
      setTasksData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(tasksData);

  useEffect(() => {
    fetchData();
  }, []);

  const toggleLorem = (task) => {
    setShowLorem((prevShowLorem) => ({
      ...prevShowLorem,
      [task]: !prevShowLorem[task],
    }));
  };
  const shift = (task) => {
    setSelectedTask(task);
    setShowPopup(true);
  };

  const handle = (tsk) => {
    setSelectedTask(tsk);
    setSitPopup(true);
  };

  const closePopup = () => {
    setSitPopup(false);
  };

  // const closingPopup = () => {
  //   setSitPopup(false);
  // };

  // const handleInputChange = (e) => {
  //   setNewTask(e.target.value);
  // };

  return (
    <>
      <div className="heading_txt">
        <h1 className="ux_txt"> Kanban Board</h1>
        <h5 className="en_txt">
          Entrust User Experience Center of Excellence Task
        </h5>
        <button onClick={(tsk) => handle(tsk)}> + Add Task </button>
      </div>
      <div className="flexing_data">
        <div className="boxing">
          <h2>Todo </h2>
          <div className="padding_item">
            {tasksData
              ?.filter((task) => task.status === "to-do")
              .map((task) => (
                <div key={task.id} className="txxt">
                  <div className="reatail_txt">
                    <p>{task.title}</p>
                    <div
                      className="btnn"
                      onClick={() => toggleLorem(task.name)}
                    >
                      {showLorem[task.name] ? <FaCaretUp /> : <FaCaretDown />}
                    </div>
                  </div>
                  {showLorem[task.name] && (
                    <p>
                      {task.description}{" "}
                      <button onClick={() => shift(task)} className="btn">
                        Edit
                      </button>
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="boxing">
          <h2>Doing</h2>
          <div className="padding_item">
            {tasksData
              ?.filter((task) => task.status === "doing")
              .map((task) => (
                <div key={task.id} className="txxt">
                  <div className="reatail_txt">
                    <p>{task.title}</p>
                    <div
                      className="btnn"
                      onClick={() => toggleLorem(task.name)}
                    >
                      {showLorem[task.name] ? <FaCaretUp /> : <FaCaretDown />}
                    </div>
                  </div>
                  {showLorem[task.name] && (
                    <p>
                      {task.description}{" "}
                      <button onClick={() => shift(task)} className="btn">
                        Edit
                      </button>
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="boxing">
          <h2>Done</h2>
          <div className="padding_item">
            {tasksData
              ?.filter((task) => task.status === "done")
              .map((task) => (
                <div key={task.id} className="txxt">
                  <div className="reatail_txt">
                    <p>{task.title}</p>
                    <div
                      className="btnn"
                      onClick={() => toggleLorem(task.name)}
                    >
                      {showLorem[task.name] ? <FaCaretUp /> : <FaCaretDown />}
                    </div>
                  </div>
                  {showLorem[task.name] && (
                    <p>
                      {task.description}{" "}
                      <button onClick={() => shift(task)} className="btn">
                        Edit
                      </button>
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* {showPopup && selectedTask && (
        <Popup task={selectedTask} onClose={closePopup} /> */}

      {sitPopup && <Popup onclose={closePopup} />}
    </>
  );
};

export default Kanban;
