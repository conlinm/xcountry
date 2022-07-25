<script>
    export let top_athletes;
    top_athletes = top_athletes[0];
    </script>
    
    <div class="topathletes">
        <div class="table">
            <h3>Top Athletes By Time</h3>
            <p>This is a page that runs our advanced query that selects the athletes with a time in the 5000 m of less than 19 min for boys, and less than 20 min for girls. This is implemented in a stored procedure.</p>
          <table>
            <thead>
              <tr>
                <th>Last Name</th>
                <th>School</th>
                <th>Result Time</th>
                <th>Event</th>
              </tr>
            </thead>
           
            <tbody>
              {#each top_athletes as top}
              <tr>
                <td>{top.last_name}</td>
                <td>{top.school_name}</td>
                <td>{top.result_Time}</td>
                <td>{top.event_name}</td>

              </tr>
              {/each}
    
            </tbody>
          </table>
        </div> 
    
    
    </div>
    
    
    
    <style>
            .topathletes {
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
    
    