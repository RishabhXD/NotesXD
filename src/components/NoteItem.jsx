import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="card w-96 bg-neutral text-neutral-content mx-auto self-center mb-5">
      <div className="card-body items-center text-center rounded-lg">
        <h2 className="card-title">{note.title}</h2>
        <p>{note.description}</p>
        <span className="badge badge-accent">{note.tag}</span>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              updateNote(note);
            }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => {
              deleteNote(note._id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
