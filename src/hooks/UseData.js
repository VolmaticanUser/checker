import { useContext } from "react";
import { MyContext } from "../context/ContextProvider";

const useData = () => {
    return (useContext(MyContext))
};

export default useData;