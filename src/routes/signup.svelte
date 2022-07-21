
<div class='create'>
    <h2>New Account</h2>
      
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
      height: 100vh;
      margin:6rem;

    }
    .button-primary {
        width: 100%;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
    }

</style>