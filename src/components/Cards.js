import parse from "html-react-parser";
import {useNavigate} from 'react-router-dom';


export default function Cards({ element }) {
  const navigate=useNavigate();
  return (
    <div
    onClick={()=>{
      navigate(`/model/${element.id}`)
      console.log(element.id);
    }}
      key={element.id}
      className=" bg-green-100 overflow-hidden rounded-md p-4 shadow-md m-4 hover:bg-green-300"
    >
      <p className="text-lg font-black">{element.title.substring(0, 100)}</p>
      <p className=" text-left bg-white p-4 text-base font-sans font-medium">
        {element.description.substring(0, 100)}
      </p>
      <pre className=" bg-green-900 text-white font-semibold text-left p-4">
        {parse(element.snippet)}
      </pre>
      {/* <span>{element.name}</span> */}
    </div>
  );
}
