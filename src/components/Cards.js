import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

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
    const data = await fetch(`http://127.0.0.1:8000/modeldelete/${element.id}/`, { method: "DELETE" });
    console.log(data);
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
              class="h-5 w-5"
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
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span>DELETE</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
