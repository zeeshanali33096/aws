import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";

const TableRow = (props) => {
  const { updateData } = useContext(DataContext);
  return (
    <tr>
      <td>{props.Id}</td>
      <td>{props.Name}</td>
      <td>{props.ContactFlowType}</td>
      <td>
        <textarea
          value={props.tts}
          onChange={(e) => props.onChange(e.target.value, props.id)}
        />
      </td>
      <td>
        <button
          onClick={(e) => {
            e.preventDefault();
            updateData(props.id);
          }}
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
