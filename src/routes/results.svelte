
<script >
    // import * as d3 from "d3";

    export let results;
    

    // const width = 800;
    // const height = 600;

    // const margin = { top: 20, right: 20, bottom: 20, left: 180 };
    // const innerHeight = height - margin.top - margin.bottom;
    // const innerWidth = width - margin.left - margin.right;

    // $: xDomain = results.map((d) => d.country);
    // $: yDomain = results.map((d) => +d.population);

    // $: yScale = d3.scaleBand().domain(xDomain).range([0, innerHeight]).padding(0.1);
    // $: xScale = d3.scaleLinear()
    // .domain([0, Math.max.apply(null, yDomain)])
    // .range([0, innerWidth]);
  
  </script>
  

  
  <div class="results">
    <h3>Meet Results</h3>
    <p>
      These are the meet results ordered by athlete.
    </p>
    
    
      <div class="table">
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>School</th>
              <th>Distance</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
         
          <tbody>
            {#each results as result}
            <tr>
                <td>{result.first_name} {result.last_name}</td>
                <td>{result.school_name}</td>
                <td>{result.distance}</td>
                <td>{result.result_time}</td>
                <td>{result.meet_date}</td>
            </tr>
            {/each}
  
          </tbody>
        </table>
       
  </div>
  </div>

  <style>
    
    .results {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: top; 
        height: 100vh;
    }  
        .table {
          width: 800px;
          table-layout: auto;
          border-collapse: collapse;
        }
        .table tbody {
          display: block;
          width: 100%;
          overflow: auto;
          height: 400px;
        }
        .table thead tr {
          display: block;
  
        }
        .table th,
        .table td {
          padding: 5px;
          /* text-align: left; */
          width: 200px;
        }
        p {
          padding: 2rem 6rem;
        }
  </style>
  
  
  