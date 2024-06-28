import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';
import '../assets/style.css';
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

// Set the index of the task being edited and initialize editText
  const handleEditTask = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handleSaveTask = (index) => {
    if (editText.trim()) {
        // Dispatch editTask action with new text
      dispatch(editTask(index, editText));
      setEditIndex(null);
    } else {
         // Optionally, handle the case where editText is empty
      alert('Task cannot be empty.');
    }
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <div><input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => dispatch(toggleTask(index))} 
          />
          <span>{task.text}</span>
          </div>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button className="save-btn" onClick={() => handleSaveTask(index)}>Save</button>
              <button className='cancel-btn' onClick={() => setEditIndex(null)}>Cancel</button>
            </>
          ) : (
            < div >
              
              <button className="edit-btn" onClick={() => handleEditTask(index, task.text)}>Edit</button>
              <button className="delete-btn" onClick={() => dispatch(deleteTask(index))}>Delete</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
