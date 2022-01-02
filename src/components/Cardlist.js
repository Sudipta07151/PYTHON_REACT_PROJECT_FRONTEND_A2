import Cards from "./Cards"

export default function Cardlist({data}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 w-full">
        {
            data.map((element,index)=>{
                return(
                    <Cards key={index} element={element}/>
                )
            })
        }
        </div>
    )
}
