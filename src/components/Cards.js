import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function Cards({ element }) {
  const navigate = useNavigate();

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
  return (
    <div
      onClick={() => {
        navigate(`/model/${element.id}`);
        console.log(element.id);
      }}
      key={element.id}
      className=" bg-green-300 overflow-hidden rounded-md p-4 shadow-md m-4 hover:bg-green-200"
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
    </div>
  );
}
