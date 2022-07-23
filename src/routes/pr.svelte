
<script >

    export let prs;
    prs = prs[0];
  
  </script>
  
  <style>
    .records {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: top; 
        height: 100vh;
    }  
        .table {
          width: 700px;
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
  
  <div class="records">
    <h3>Record Times</h3>
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
            {#each prs as pr}
            <tr>
              <td>{pr.last_name}</td>
              <td>{pr.school_name}</td>
              <td>{pr.distance}</td>
              <td>{pr.pr_time}</td>
              <td>{pr.meet_date}</td>
            </tr>
            {/each}
  
          </tbody>
        </table>
       
  </div>
  </div>
  
  
  