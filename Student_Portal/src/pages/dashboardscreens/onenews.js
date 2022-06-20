import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function OneNews({ res, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(res.user);

  const handleChange = (e) => {
    e.preventDefault();
    if (res.complete === true) {
      setNewTitle(res.user);
    } else {
      res.user = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: res.completed && "line-through" }}
        type="text"
        value={res.user === "" ? newTitle : res.user}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(res)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(res, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(res.user.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}

