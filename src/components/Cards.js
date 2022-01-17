import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Cards({ element, type }) {
  const navigate = useNavigate();
  console.log(type);
  const badge_class = () => {
    switch (element.difficulty) {
      case "Easy":
        return "p-2 w-20 flex items-center justify-start text-sm px-3 bg-purple-500 font-bold text-white rounded-sm mt-1";
      case "Medium":
        return "p-2 w-20 flex items-center justify-start text-sm px-3 bg-yellow-500 font-bold text-white rounded-sm mt-1";
      case "Difficult":
        return "p-2 w-20 flex items-center justify-start text-sm px-3 bg-red-500 font-bold text-white rounded-sm mt-1";
    }
  };
  const handleEdit = (e) => {
    e.preventDefault();
    console.log("EDIT BUTTON PRESSED");
    navigate(`/edit/${element.id}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("DELETE BUTTON CHECK");
    try {
      const data = await fetch(
        `http://127.0.0.1:8000/modeldelete/${element.id}/`,
        { method: "DELETE" }
      );
      console.log(data);
      toast("SUCCESSFULLY DELETED", { autoClose: 1500 });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err);
      toast("DELETE FAILED: SOME ERROR OCCURED", { autoClose: 1500 });
    }
  };
  return (
    <div
      key={element.id}
      className=" bg-green-300 overflow-hidden rounded-md p-4 shadow-md m-4"
    >
      <p className="text-lg font-black">{element.title.substring(0, 100)}</p>
      <div className=" text-left font-medium flex justify-between items-center">
        <span>Author: {element.author}</span>
        <span>{new Date(element.data).toUTCString().split("GMT")[0]}</span>
      </div>
      <p className=" text-left bg-white p-4 text-base font-sans font-medium">
        {element.description.substring(0, 100)}
      </p>
      <pre className=" bg-green-900 text-white font-semibold text-left p-4">
        {parse(element.snippet)}
      </pre>
      {/* <span>{element.name}</span> */}
      <span className={badge_class()}>{element.difficulty}</span>
      <div className="flex flex-row items-center justify-between">
        <button
          className="view_button"
          onClick={() => {
            navigate(`/model/${element.id}`);
            console.log(element.id);
          }}
        >
          VIEW
        </button>
        {type === "my_blogs" ? (
          <button onClick={handleEdit} className="edit_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clip-rule="evenodd"
              />
            </svg>
            <span>EDIT</span>
          </button>
        ) : (
          ""
        )}
        {type === "my_blogs" ? (
          <button onClick={handleDelete} className="delete_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span>DELETE</span>
          </button>
        ) : (
          ""
        )}
        <ToastContainer />
      </div>
    </div>
  );
}
