
<div class='create'>
    <h2>New Account</h2>
      <div>
        <p>
          This is the form for a new user creation. Entry of data in the form and clicking of the create account button will send the information to a post request, which generats the SQL statement to add the new user to the database. This is followed by a redirect to the users page.
        </p>
      </div>
      <form action="/create" method="post">
          <fieldset>
              <input type="text" name="first_name" placeholder="First Name" id="firstNameField">
              <input type="text" name="last_name" placeholder="Last Name" id="lastNameField">
              <input type="email" name="email" placeholder="Email" id="lastNameField">
              <input type="password" name="password" placeholder="Password" id="lastNameField">
      
            <input class="button-primary" type="submit" formaction="/create"value="Create Account">
            <a href="/">Already a Member</a>
          </fieldset>
        </form>
</div>

<style>
    .create {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: top;
      height: auto;
      margin :6rem;
      width: 800px;

    }
    .button-primary {
        width: 100%;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
    }

</style>