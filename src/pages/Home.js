import { useNavigate } from "react-router-dom"

export default function Home() {
    return (
        <div className="container h-screen mx-auto flex flex-col items-center justify-center">
            <h1 className=" text-4xl lg:text-8xl md:text-6xl font-homebody" >ML ALGO</h1>
            <p className=" font-sans font-light text-xl">Algorithms and Code</p>            
        </div>
    )
}
