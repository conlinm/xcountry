<script >
    export let interactions;

    export let firstNameField;
    export let lastNameField;
    export let dateField;
    export let noteField;

    import Modal from './Modal.svelte'
    import Test from './Test.svelte'

    // initialise modal state and content
	 let showModal = false;
	 let modalContent;
	
	// pass in component as parameter and toggle modal state
	function toggleModal(component) {
		modalContent = component;
		showModal = !showModal;
	}


    function openEdit(interaction){
        firstNameField = interaction.first_name;
        lastNameField = interaction.last_name;
        dateField = interaction.interaction_date;
        noteField = interaction.notes;
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
        <div class="right">
            <button on:click={() => (toggleModal(Test))} class="button-create">New Interaction</button>
            {#if showModal}
	        <Modal on:click={toggleModal} {modalContent} />
            {/if}
        </div>
    </div>  
      <div class="table">
      <table>
          <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date</th>
                <th>Note</th>
            </tr>
          </thead>
         
          <tbody>
            {#each interactions as interaction}
            <tr>
                <td>{interaction.first_name}</td>
                <td>{interaction.last_name}</td>
                <td>{interaction.interaction_date}</td>
                <td>{interaction.notes}</td>
                <td><button on:click={()=>openEdit(interaction)} class="button-primary-edit">Edit</button></td>
            </tr>
            {/each}
          </tbody>
        </table>
    </div>
    <div class="edit">
        {#if lastNameField}
        <h3>Modify Account</h3>
        <form action="/create?_method=put" method="post">
            <fieldset>
                <label for="first_name">First Name</label>
                <input bind:value={firstNameField} type="text" name="first_name" placeholder="First Name" id="firstNameField">
                <label for="last_name">Last Name</label>
                <input  bind:value={lastNameField} type="text" name="last_name" placeholder="Last Name" id="lastNameField">
                <label for="date">Date</label>
                <input  bind:value={dateField} type="date" name="date" placeholder="Date" id="dateField">
                <label for="note">Note</label>
                <input  bind:value={noteField} type="text" name="note" placeholder="Notes" id="noteField">
              <button class="button-primary" type="submit" >Modify Account</button>
              <button formaction="/create?_method=delete" class="button-primary-delete" type="submit">Delete Account</button>
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
    .edit {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
      margin: 0rem 16rem 2rem;

}
  </style>