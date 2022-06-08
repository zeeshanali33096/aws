import { useState } from "react";

const TableRow = (props) => {
  const [tts, setTTS] = useState("");
  return (
    <tr>
      <td>{props.Id}</td>
      <td>{props.Name}</td>
      <td>{props.ContactFlowType}</td>
      <td>
        <textarea value={tts} onChange={(e) => setTTS(e.target.value)} />
      </td>
      <td>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
