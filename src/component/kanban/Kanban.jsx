import React, { useState } from "react";
import "./kanban.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

import { BiSolidPlusCircle } from "react-icons/bi";

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
    setSitPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closingPopup = () => {
    setSitPopup(false);
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const data = [
    {
      id: 1,
      name: "cow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      status: "Doing",
    },
    {
      id: 2,
      name: "gai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      status: "Doing",
    },
    {
      id: 3,
      name: "sameer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      status: "Todo",
    },
    {
      id: 4,
      name: "sandip",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      status: "Done",
    },
    {
      id: 5,
      name: "nirgun",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      status: "Done",
    },
  ];

  return (
    <>
      {/* {sitPopup && <TOdo onClose={closingPopup} />} */}
      <div className="heading_txt">
        <h1 className="ux_txt">UX Kanban Board</h1>
        <h5 className="en_txt">
          Entrust User Experience Center of Excellence Task
        </h5>
      </div>
      <div className="flexing_data">
        <div className="boxing">
          <h2>
            Todo{" "}
            <i className="icon" onClick={(tsk) => handle(tsk)}>
              <BiSolidPlusCircle size={21} />
            </i>
          </h2>

          <div className="">
            {userEnteredTasks.map((task, index) => (
              <div key={index} className="txxt">
                <div className="reatail_txt">
                  <p>{task}</p>
                  <div className="btnn" onClick={() => toggleLorem(task.name)}>
                    {showLorem[task.name] ? <FaCaretUp /> : <FaCaretDown />}
                  </div>
                </div>
                {showLorem[task.name] && (
                  <p>
                    {task.description}
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
            {data
              .filter((task) => task.status === "Doing")
              .map((task) => (
                <div key={task.id} className="txxt">
                  <div className="reatail_txt">
                    <p>{task.name}</p>
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
            {data
              .filter((task) => task.status === "Done")
              .map((task) => (
                <div key={task.id} className="txxt">
                  <div className="reatail_txt">
                    <p>{task.name}</p>
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
      )}
    </>
  );
};

export default Kanban;
