import React, { useContext } from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";
import DataAreaContext from "../utils/DataAreaContext";
import Table from "react-bootstrap/Table";

const DataTable = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="datatable mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <DataBody />
      </Table>
    </div>
  );
};

export default DataTable;
