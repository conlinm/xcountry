<!-- <div class="edit">
    {#if lastNameField}
    <h3>Edit Interaction</h3>
    <form action="/interactions" method="post">
        <fieldset>
            <input bind:value={interactionIDField} type="hidden" name="interaction_id" id="interactionIdField">
            <input bind:value={athleteIDField} type="hidden" name="athlete_id" id="athleteIdField">
            <h4>Name: {firstNameField} {lastNameField}</h4>
            <label for="date">Date</label>
            <input  bind:value={dateField} type="text" name="date" placeholder="Date" id="dateField">
            <label for="note">Note</label>
            <textarea bind:value={noteField} name="note" id="" cols="30" rows="60"></textarea>
          <button class="button-primary" type="submit" >Save Edited Interaction</button>
          <button formaction="/create?_method=delete" class="button-primary-delete" type="submit">Delete Interaction</button>
        </fieldset>
      </form>
    {/if}
</div> -->

Test
