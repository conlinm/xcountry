
<script >

  export let schools;

</script>

<style>
  .schools {
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

<div class="schools">
  <h3>Schools</h3>
    <div class="table">
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>League</th>
          </tr>
        </thead>
       
        <tbody>
          {#each schools as school}
          <tr>
            <td>{school.school_name}</td>
            <td>{school.city}</td>
            <td>{school.state}</td>
            <td>{school.league}</td>
          </tr>
          {/each}

        </tbody>
      </table>
     
    <fieldset>
    <button class="button-primary">Get All Schools</button>
    </fieldset>
</div>
</div>


