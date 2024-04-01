import * as d3 from "d3";
import { useState } from "react";

type Table = {
    head: string[];
    rows: (string[] | number[])[]
}
 

export default function AllPlotsRenderer(plots: string[], src: string){
    const [options, setOptions] = useState<string[]>([]);
    const [rows, setRows] = useState<(string[] | number[])[]>([]);
    
    const [table, setTable] = useState<Table>({
        head: [],
        rows: []
    })


    //Used to fetch the csv from the store
    async function parseCSV() {
        try {
          const rows_arr: (string[] | number[])[] = [];
          //GET REQUEST HERE FOR CSV FETCHING
          const data = await d3.csv(
            "https://s3.ap-south-1.amazonaws.com/bucket.visauldev/Popular_Spotify_Songs.csv"
          );
          setTable({head: Object.keys(data[0]), rows: table?.rows});
          data.map((d) => {
            rows_arr.push(Object.values(d));
          });
          setRows(rows_arr);
        } catch (e) {
          console.log("Unexpected error occured: ", e);
        }
      }

      function preProcessor(
        chartType: string,
        column_names: string[],
        rows: (string[] | number[])[]
      ) {
        switch (chartType) {
          case "Density":
            let finaldata: densityData[] = [];
            for (let i = 0; i < column_names?.length; i++) {
              const name = column_names[i];
              var values: number[] = [];
    
              //This condition is used to skip an iteration whenever it encounters a true string in the first column element, since it cannot be used for any plotting
              //Regex is used to check whether if it is a string
              if (!/^\d+$/.test(rows[0][i].toString())) continue;
    
              for (let j = 0; j < rows?.length; j++)
                values.push(parseInt(rows[j][i] as string));
    
              //await new Promise((resolve) => setTimeout(resolve, 100));
              finaldata.push({
                name: name,
                values: values,
              });
            }
            setProcesseddata(finaldata);
            break;
          
          case "Area":
            
        }
      }
}