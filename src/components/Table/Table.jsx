import React from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import api from "../../Services/Api";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import "./Table.css"

const Table = () => {
const [forexData, setForexData] = useState([]);

const columnDefs = [
    {
      headerName: "Currency",
      field: "currency",
      cellStyle: {
        color: "#6070FF",
        fontWeight: "bold",
        backgroundColor: "rgba(0,0,0,0.1)",
      },
      headerClass: "custom-header",
    },
    {
      headerName: "Range",
      field: "rate",
      filter: "agSetColumnFilter",
      headerClass: "custom-header",
    },
  ];
  

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getData({
            params: {
                api_key: 'ca379549c70ed4c348be67a843caa878',
                base: 'USD',
                currencies: 'EUR,INR,JPY',
              },
        });

        const { data } = response;
        const rates = data.rates;

        // Convert forexData object to an array of objects
        const rowData = Object.keys(rates).map((currency) => ({
          currency,
          rate: rates[currency],
        }));

        setForexData(rowData);
      } catch (error) {
        console.error('Error fetching forex rates:', error);
      }
    };

    fetchData();
  }, []);
  console.log(forexData,'data forex')

  return (
    <React.Fragment>
      <div className="page-content mt-5">
        <div className="d-flex justify-content-center">
        <h4>Table Data</h4>
        </div>
        
        <Container style={{width: '90%'}}>
        <div
          className="ag-theme-alpine"
          style={{ height: 500, marginTop: "20px", borderRadius: '10px' }}
        >
          <AgGridReact
            rowData={forexData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Table;
