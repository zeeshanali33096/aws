import { useContext } from "react";
import "./App.css";
import DataProvider, { DataContext } from "./Components/Context/DataContext";
import FetchComponent from "./Components/FetchComponent";
import MyTable from "./Components/Table";

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <FetchComponent />
        <MyTable />
      </div>
    </DataProvider>
  );
};

export default App;
