
<script >
// import { searchEvent } from "./athletes";

    export let athletes;

    export let firstNameField;
    export let lastNameField;
    export let athleteIDField;
  
    function createNew(athlete){
        firstNameField = athlete.first_name;
        lastNameField = athlete.last_name;
        athleteIDField = athlete.athlete_id;
        window.location.replace('./create_meet_result?athlete_id=' + athlete.athlete_id + '&first_name=' + athlete.first_name + '&last_name=' + athlete.last_name);
    }
  </script>
  

  
  <div class="athletes">
    <h3>Athletes</h3>
    <div class="search">
      <form  method="get" class="search">

      <input type="text" name="name" placeholder="Last Name">
      <select  name="event_selection">
          <option value="">Select an event</option>
          <option value="Cross Country - Boys">Cross Country - Boys</option>
          <option value="Cross Country - Girls">Cross Country - Girls</option>
      </select>
      <button class="button-primary">Search</button>
    </form>
    <form>
      <button class="button-primary" on:click={get}>All Athletes</button>
    </form>
  </div>
      <div class="table">
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Event</th>
              <th>
              </th>
            </tr>
          </thead>
         
          <tbody>
            {#each athletes as athlete}
            <tr>
              <td>{athlete.first_name} {athlete.last_name}</td>
              <td>{athlete.grade_level}</td>
              <td>{athlete.event_name}</td>
              <td><button on:click={()=>createNew(athlete)} class="button-result">Add Result</button></td>
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
    .search {
        display: flex;
        flex-direction: row;
        gap: 2rem;
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
        .button-primary {
        width: 100%;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
    }
    .button-primary-delete {
        width: 100%;
        background-color: #ff3300;
        border: 0.1rem solid #FF7F00;
    }
    .button-primary-edit {
        width: 60px;
        height:30px;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
        padding: 0;
        line-height: 20px;
        

    }
    .button-result {
        width: 80px;
        height:30px;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
        padding: 0;
        line-height: 20px;

    }
    .button-primary:hover {
        
        background-color: #fea347;
        border: 0.1rem solid #fea347;
    }
    .button-primary:active {
        
        background-color: #c16100;
        border: 0.1rem solid #c16100;
    }
  </style>
  
  
  