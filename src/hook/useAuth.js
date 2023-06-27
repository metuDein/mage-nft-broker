import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import DataContext from "../context/DataContext";

const useAuth = () => {
   return useContext(DataContext);
}

export default useAuth;