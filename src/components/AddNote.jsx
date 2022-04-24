import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Add Note
        </h1>
      </div>
      <form className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="title"
                className="leading-7 text-sm text-gray-400"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={note.title}
                onChange={onChange}
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                minLength={3}
                required
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="tag" className="leading-7 text-sm text-gray-400">
                Tag
              </label>
              <input
                onChange={onChange}
                type="text"
                value={note.tag}
                id="tag"
                name="tag"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="description"
                className="leading-7 text-sm text-gray-400"
              >
                Description
              </label>
              <textarea
                onChange={onChange}
                id="description"
                value={note.description}
                name="description"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                minLength={5}
                required
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button
              onClick={handleClick}
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              disabled={note.title.length < 3 || note.description.length < 5}
            >
              Add Note
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
