import { useContext } from "react";
import DataContext from "../context/DataContext";

const useLoading = () => {
   return useContext(DataContext);
}

export default useLoading;