import { useContext } from "react";
import { APIFetchStatus, DataContext } from "../Context/DataContext";
import TableRow from "../TableRow";

const MyTable = () => {
  const { dataFetched, data, onChange } = useContext(DataContext);
  return (
    <table className="my-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Contact Flow</th>
          <th>Update</th>
          <th>TTS</th>
        </tr>
      </thead>
      <tbody>
        {dataFetched === APIFetchStatus.FETCHED
          ? data.map((e, idx) => (
              <TableRow {...e} id={idx} key={e.Id} onChange={onChange} />
            ))
          : printStatus()}
      </tbody>
    </table>
  );
};

const printStatus = (dataFetched) => {
  switch (dataFetched) {
    case APIFetchStatus.BOOTED:
      return (
        <tr>
          <td colSpan="100%">No Data Fetched</td>
        </tr>
      );
    case APIFetchStatus.FAILED:
      return (
        <tr>
          <td colSpan="100%">Data Fetching Failed</td>
        </tr>
      );
    default:
      return <></>;
  }
};

export default MyTable;
