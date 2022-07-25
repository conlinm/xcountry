<script >

    export let interaction;
    export let first_name;
    export let last_name;
    export let date;
    export let note;
    export let athlete_id


	
	
    function createNew(interaction){
        firstNameField = interaction.first_name;
        lastNameField = interaction.last_name;
        athleteIDField = interaction.athlete_id;
        window.location.replace('./create_interaction');
    }
</script>



<div class="interactions">
    <div class="create">
        <h3>Create New Interaction</h3>
        <form action="/create_interaction" method="post">
            <fieldset>
                <input bind:value={athlete_id} type="hidden" name="athlete_id" id="athleteIdField">
                <h4>Name: {first_name} {last_name}</h4>
                <label for="date">Date</label>
                <input  bind:value={date} type="date" name="date" placeholder="Date" id="dateField">
                <label for="note">Note</label>
                <textarea bind:value={note} name="note" id="" cols="30" rows="60"></textarea>
                <button class="button-primary" type="submit" >Save Interaction</button>
            </fieldset>
        </form>
    </div>
</div>

<style>
    .interactions {
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