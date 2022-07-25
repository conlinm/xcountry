<script >


    export let interactions;

    export let firstNameField;
    export let lastNameField;
    export let dateField;
    export let noteField;
    export let interactionIDField;
    export let athleteIDField

    // import Modal from './Modal.svelte'
    // import Test from './Test.svelte'

    // // initialise modal state and content
	//  let showModal = false;
	//  let modalContent;


	// // pass in component as parameter and toggle modal state
	// function toggleModal(component) {
	// 	modalContent = component;
	// 	showModal = !showModal;
	// }
    function createNew(interaction){
        firstNameField = interaction.first_name;
        lastNameField = interaction.last_name;
        athleteIDField = interaction.athlete_id;
        window.location.replace('./create_interaction?athlete_id=' + interaction.athlete_id + '&first_name=' + interaction.first_name + '&last_name=' + interaction.last_name);
    }

    function openEdit(interaction){
        firstNameField = interaction.first_name;
        lastNameField = interaction.last_name;
        dateField = interaction.interaction_date;
        noteField = interaction.notes;
        interactionIDField = interaction.interactions_id;
        athleteIDField = interaction.athlete_id;
    }
    function modifyAccount(){
        let interaction = {
            first_name: firstNameField,
            last_name: lastNameField,
            date: dateField,
            note: noteField
        };
    }

</script>

  
<div class="interactions">
    <div class="heading">
        <div class="intro">
         <h3 class="center">Interactions</h3>
         <p>
            This page displays the interactions a user has with the athletes they are following. Interactions can be created, edited, or deleted.
         </p>
        </div>
        <!-- <div class="right">
            <button on:click={() => (toggleModal(Test))} class="button-create">New Interaction</button>
            {#if showModal}
	        <Modal on:click={toggleModal} {modalContent} />
            {/if}
        </div> -->
    </div>  
      <div class="table">
      <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Note</th>
            </tr>
          </thead>
         
          <tbody>
            {#each interactions as interaction}
            <tr>
                <td>{interaction.first_name} {interaction.last_name}</td>
                <td></td>
                <td>{interaction.interaction_date}</td>
                <td>{interaction.notes}</td>
                <td><button on:click={()=>openEdit(interaction)} class="button-primary-edit">Edit</button></td>
                <td><button on:click={()=>createNew(interaction)} class="button-primary-edit">New</button></td>
            </tr>
            {/each}
          </tbody>
        </table>
    </div>
    <div class="edit">
        {#if lastNameField}
        <h3>Edit Interaction</h3>
        <form action="/interactions?_method=put" method="post">
            <fieldset>
                <input bind:value={interactionIDField} type="hidden" name="interaction_id" id="interactionIdField">
                <input bind:value={athleteIDField} type="hidden" name="athlete_id" id="athleteIdField">
                <h4>Name: {firstNameField} {lastNameField}</h4>
                <label for="date">Date</label>
                <input  bind:value={dateField} type="text" name="date" placeholder="Date" id="dateField">
                <label for="note">Note</label>
                <textarea bind:value={noteField} name="note" id="" cols="30" rows="60"></textarea>
              <button class="button-primary" type="submit" >Save Edited Interaction</button>
              <button formaction="/interactions?_method=delete" class="button-primary-delete" type="submit">Delete Interaction</button>
            </fieldset>
          </form>
        {/if}
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
    /* .right{
        padding: 2rem 4rem 2rem 4rem;
    }
    .button-create {

        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00; 
     }  */
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