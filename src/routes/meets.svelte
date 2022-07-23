
<script >

    export let meets;

  </script>
  
  <div class="meets">
    <h3>Meets</h3>
      <div class="table">
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
         
          <tbody>
            {#each meets as meet}
            <tr>
              <td>{meet.meet_name}</td>
              <td>{meet.meet_location}</td>
              <td>{meet.meet_date}</td>
             
            </tr>
            {/each}
  
          </tbody>
        </table>  
  </div>
  </div>

    
  <style>
    .meets {
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
          width: 200px;
        }
  </style>
  
  
  

