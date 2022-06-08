import { createContext, useState } from "react";
import AWS from "aws-sdk";

export const APIFetchStatus = {
  BOOTED: 0,
  FETCHING: 1,
  FETCHED: 2,
  FAILED: 3,
};

const initialState = {
  dataFetched: APIFetchStatus.BOOTED,
  data: [],
  fetchData: () => {},
};

export const DataContext = createContext(initialState);

const DataProvider = ({ children }) => {
  const [dataFetched, setDataFetched] = useState(APIFetchStatus.BOOTED);
  const [data, setData] = useState([]);

  const fetchData = () => {
    AWS.config.getCredentials(function (err) {
      if (err) console.log(err.stack);
      // credentials not loaded
      else {
        console.log("Access key:", AWS.config.credentials.accessKeyId);
      }
    });
    AWS.config.update({ region: "us-west-2" });
    var connect = new AWS.Connect();

    var params = {
      InstanceId: "edda9e1b-30f4-4a1e-b207-8a51e5768994" /* required */,
      ContactFlowTypes: [
        "CONTACT_FLOW",
        /* more items */
      ],
      MaxResults: "100",
    };
    connect.listContactFlows(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
    });
  };

  return (
    <DataContext.Provider value={{ dataFetched, data, fetchData }}>
      {dataFetched === APIFetchStatus.FETCHING ? (
        <h1>Data is Loading</h1>
      ) : (
        children
      )}
    </DataContext.Provider>
  );
};

export default DataProvider;
