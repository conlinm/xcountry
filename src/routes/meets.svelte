
<script >

    export let meets;

    function getFormattedDate(date) {
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return month + '/' + day + '/' + year;
    }
  
  </script>
  
  <style>
    .meets {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: top; 
        height: 100vh;
    }
    .button-primary {
        width: 100%;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
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
              <td>{getFormattedDate(meet.meet_date)}</td>
             
            </tr>
            {/each}
  
          </tbody>
        </table>
       
  </div>
  </div>
  
  
  

