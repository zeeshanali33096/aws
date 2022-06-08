import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const FetchComponent = () => {
  const { fetchData } = useContext(DataContext);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        fetchData();
      }}
      className="my-button"
    >
      Fetch Data
    </button>
  );
};

export default FetchComponent;
