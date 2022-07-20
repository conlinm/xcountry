
<script >
    export let athletes;
  </script>
  
  <style>
    .athletes {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: top; 
        height: 100vh;
    }
  
        .table {
          width: 600px;
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
  </style>
  
  <div class="athletes">
    <h3>Athletes</h3>
      <div class="table">
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Event</th>
            </tr>
          </thead>
         
          <tbody>
            {#each athletes as athlete}
            <tr>
              <td>{athlete.last_name}</td>
              <td>{athlete.grade_level}</td>
              <td>{athlete.event_name}</td>
            </tr>
            {/each}
  
          </tbody>
        </table>
  </div>
  </div>
  
  
  