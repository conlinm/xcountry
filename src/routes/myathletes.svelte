<script>
export let my_athletes;
</script>

<div class="athletes">
  <div>
    <h3>My Athletes</h3>
    <p>
      This page displays the athletes that I am following.
    </p>
  </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Last Name</th>
            <th>Grade</th>
            <th>School</th>
            <th>GPA</th>
            <th>Recruit recruit_status</th>
          </tr>
        </thead>
       
        <tbody>
          {#each my_athletes as athlete}
          <tr>
            <td>{athlete.last_name}</td>
            <td>{athlete.grade_level}</td>
            <td>{athlete.school_name}</td>
            <td>{athlete.gpa}</td>
            <td>{athlete.recruit_status}</td>
            
          </tr>
          {/each}

        </tbody>
      </table>
    </div> 


</div>



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

