import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Table() {
  const [rowData, setRowData] = useState();

  const ImageCellRenderer = (props: { value: string | undefined }) => (
    <span>
      {new Array(props.value).fill("").map((ignore) => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <LazyLoadImage height="140" alt={"A pokemon"} effect="blur" src={props.value} />
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

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData.pokemon));
  }, []);

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
