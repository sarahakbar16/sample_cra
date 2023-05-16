import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState, useEffect, useRef, useCallback } from "react";

function Table() {
  const [rowData, setRowData] = useState();
  const dataFetchedRef = useRef(false);

  const ImageCellRenderer = (props: { value: string | undefined }) => (
    <span>
      {new Array(props.value).fill("").map((ignore) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={props.value} />
      ))}
    </span>
  );
  const [columnDefs] = useState([
    { field: "num" },
    { field: "img", cellRenderer: ImageCellRenderer },
    { field: "name" },
    { field: "type" },
    { field: "height" },
    { field: "weight" },
    { field: "candy" },
    { field: "egg" },
    { field: "spawn_chance" },
    { field: "avg_spawns" },
    { field: "spawn_time" },
    { field: "multipliers" },
    { field: "weaknesses" },
  ]);

  const rowHeight = 150;

  const fetchData = useCallback(() => {
    console.log("FETCH");
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData.pokemon));
  }, []);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, [fetchData]);

  return (
    <div className="Table" style={{ height: "100%" }}>
      <div
        className="ag-theme-alpine"
        style={{ width: "100%", height: "800px" }}
      >
        <AgGridReact
          rowHeight={rowHeight}
          rowData={rowData}
          columnDefs={columnDefs}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default Table;
