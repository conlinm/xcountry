<script>
export let top_schools;
top_schools = top_schools[0];
</script>

<div class="topschools">
  <h3>Count of Top Female Athletes by School</h3>
  <p>
    This page implements our advanced query that determines the number of female athletes with a time less that 22 mins, in the 11th grade, by school. This query utilizes a subquery, two joins, and a group by function. 
  </p>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>School Name</th>
            <th>Top Girl Athlete Count</th>
          </tr>
        </thead>
       
        <tbody>
          {#each top_schools as top}
          <tr>
            <td>{top.school_name}</td>
            <td>{top.ath_count}</td>
          </tr>
          {/each}

        </tbody>
      </table>
    </div> 


</div>



<style>
        .topschools {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: top; 
        height: 100vh;
    }  
        .table {
          width: 400px;
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

