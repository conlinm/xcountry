<script >

    export let result;
    export let first_name;
    export let last_name;
    export let athlete_id;
    export let distance;
    export let result_time;
    export let finishing_position;


	
	
    function createNew(result){
        firstNameField = result.first_name;
        lastNameField = result.last_name;
        athleteIDField = result.athlete_id;
        distanceField = result.distance;
        resultTimeField = result.result_time;
        positionField = result.finishing_position;
        window.location.replace('./create_meet_result');
    }
</script>



<div class="result">
    <div class="create">
        <h3>Create New Meet Result</h3>
        <form action="/create_meet_result" method="post">
            <fieldset>
                <input bind:value={athlete_id} type="hidden" name="athlete_id" id="athleteIdField">
                <h4>Athlete: {first_name} {last_name}</h4>
                <select  name="distance">
                    <option value="">Select a Distance</option>
                    <option value="5000 m">5000 Meters</option>
                    <option value="2 mile">2 Miles</option>
                </select>
                <label for="result_time">Result Time</label>
                <input  bind:value={result_time} type="text" name="result_time" placeholder="hh:mm:ss" id="resultTimeField">
                <label for="finishing_position">Finishing Postion</label>
                <input  bind:value={finishing_position} type="text" name="finishing_position" placeholder="e.g., 4" id="finishingPositionField">
                <button class="button-primary" type="submit" >Save Meet Result</button>
            </fieldset>
        </form>
    </div>
</div>

<style>
    .result {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: top; 
        height: auto;
        margin-top: 2rem;
    }
    .heading {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 2rem;
    }
    .intro{
        padding: 2rem;
        width: 80%;
    }
    .right{
        padding: 2rem 4rem 2rem 4rem;
    }
    .button-create {

        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
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
    .button-primary:hover {
        
        background-color: #fea347;
        border: 0.1rem solid #fea347;
    }
    .button-primary:active {
        
        background-color: #c16100;
        border: 0.1rem solid #c16100;
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
    .edit {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
      margin: 0rem 16rem 2rem;

}
  </style>