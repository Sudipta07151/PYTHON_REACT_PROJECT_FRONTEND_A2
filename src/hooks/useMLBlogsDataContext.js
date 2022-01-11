import { MLBlogsDataContext } from "../context/MLBlogsDataContext";
import { useContext } from "react";

export const useMLBlogsDataContext=()=>{
    const context=useContext(MLBlogsDataContext);

    if(!context){
        throw Error('useMLDataContext must be under an MLDataContextProvider');
    }
    return context;
}