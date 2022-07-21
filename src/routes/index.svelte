
<div class='login'>
    <h1>Cross Country Recruit Manager</h1>

<form>
    <fieldset>
      <input type="text" placeholder="username" id="userNameField">
        <input type="password" placeholder="password" id="passwordField">
    <div>
      <input class="button-primary" type="submit" formaction="/home"value="Login">
      <input class="button-outline" type="submit" formaction="/signup"value="Create Account">
    </div>
    </fieldset>
  </form>
</div>

<style>
    .login {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .button-primary {
        width: 100%;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
    }
    .button-outline {
        width: 100%;
        border: 0.1rem solid #FF7F00;
        color: #FF7F00;
    }
</style>