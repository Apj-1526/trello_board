import axios from "axios";

const API = "http://localhost:8080/api/tasks";

export const getTask = () => axios.get(API);

export const addTasks = (task) => axios.post(API,task);

export const updateTask = (id,status) => axios.put(`${API}/${id}?status=${status}`);

export const updateTaskContent = (id,title) =>axios.put(`${API}/title/${id}`,{title});

export const deleteTasks= (id) => axios.delete(`${API}/${id}`);
