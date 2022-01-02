import parse from 'html-react-parser';

export default function Cards({ element }) {
  return (
    <div key={element.id} className=" bg-green-100 overflow-hidden rounded-md p-4 shadow-md m-4">
      <p className="text-lg font-black">{element.title}</p>
      <p className="text-left bg-white p-4 text-base font-sans font-medium">{element.description}</p>
      <pre className=' bg-green-900 text-white font-semibold text-left p-4'>{parse(element.snippet)}</pre>
      <span>{element.name}</span>
    </div>
  );
}
