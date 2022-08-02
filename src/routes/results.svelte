
<script >

    export let results;
  
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
  
  
  