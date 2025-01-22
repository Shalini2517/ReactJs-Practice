import { useState } from "react"

export const Todolistapp = () => {

    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTask = () => {
        if (task.trim() !== "") {
            setTodoList([...todoList, { text: task, completed: false }]);
            setTask("");
            console.log(todoList);

        }

    }

    const taskDeleted = (index) => {
        setTodoList(todoList.filter((_, i) => i != index))
    }

    const toggleCompleted = (index) => {
        const updatedCompleteStatus = todoList.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item);

        setTodoList(updatedCompleteStatus);
    }



    return (<>
        <div className="container">
            <h1>Hello this is todo list app page</h1>
            <div className="input-container">
                <label htmlFor="todoInput"></label>
                <input type="text" id="todoInput" placeholder="Enter a new task.." value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTask}>Add</button>
            </div>
            <div className="todoListShow">
                <ul>
                    {todoList.map((list, index) => (
                        <li key={index} className={`${list.completed ? "completedTrue" : "completedFalse"} listclass`}>
                            <p>{index} - </p>
                            <p>&nbsp;{list.text}</p>
                            <input type="checkbox" checked={list.completed} onChange={() => { toggleCompleted(index) }} />

                            <p onClick={() => { taskDeleted(index) }} className="deleteBtn">&nbsp; ❌</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>)
}

// const [tasks, setTasks] = useState([]);
// const [newTask, setNewTask] = useState("");

// const addTask = () => {
//     if (newTask.trim() !== "") {
//         setTasks([...tasks, { text: newTask, completed: false }]);
//         setNewTask("");
//     }
// };

// const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
// };

// const toggleCompletion = (index) => {
//     setTasks(
//         tasks.map((task, i) =>
//             i === index ? { ...task, completed: !task.completed } : task
//         )
//     );
// };

// return (
//     <div className="app-container">
//         <h1>To-Do List</h1>
//         <div className="input-container">
//             <input
//                 type="text"
//                 placeholder="Add a new task..."
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//             />
//             <button onClick={addTask}>Add</button>
//         </div>
//         <ul>
//             {tasks.map((task, index) => (
//                 <li key={index} className={task.completed ? "completed" : ""}>
//                     <span onClick={() => toggleCompletion(index)}>{task.text}</span>
//                     <button onClick={() => deleteTask(index)}>❌</button>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );
// }