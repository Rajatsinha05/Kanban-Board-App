import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../redux/Action";
import Task from "./Task";
const TaskList = () => {
  let dispatch = useDispatch();
  let data = useSelector((store) => store);
  useEffect(() => {
    if(data.user){
        dispatch(getTasks(data.user.token));
    }
    
  }, []);

  return <div>

{data.tasks.map((ele)=><Task {...ele}/>)}

  </div>;
};

export default TaskList;
