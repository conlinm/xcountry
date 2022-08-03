
<script >


    export let coaches;

  </script>
  

  
  <div class="coaches">
    <h3>High School Coaches</h3>
    
    
      <div class="table">
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>School</th>
            </tr>
          </thead>
         
          <tbody>
            {#each coaches as coach}
            <tr>
                <td>{coach.first_name} {coach.last_name}</td>             
                <td>{coach.email}</td>
                <td>{coach.phone_number}</td>
                <td>{coach.school_name}</td>
            </tr>
            {/each}
  
          </tbody>
        </table>
       
  </div>
  </div>

  <style>
    
    .coaches {
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
  
  
  