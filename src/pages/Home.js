import { LoaderSpinner } from "../components/LoaderSpinner";

import { useFetchMenuData } from "../hooks/useFetchMenusData"



export default function Home() {

    // const {data}=useFetchMenuData('http://127.0.0.1:5000/');    
    const {data}=useFetchMenuData('http://127.0.0.1:8000/');
    console.log(data);
    return (
        <div className="container h-screen mx-auto flex flex-col items-center justify-center">
            
            {!data&&<LoaderSpinner/>}
            {!data&&<h1 className=" text-4xl lg:text-8xl md:text-6xl font-homebody" >ML ALGO</h1>}
            {!data&&<p className=" font-sans font-light text-xl">Algorithms and Code</p>}
            {
                data&&data.map(element=>{
                    return(
                    <ul>
                        <li>{element.author}</li>
                        <li>{element.description}</li>
                    </ul>);
                })
            }
        </div>
    )
}
