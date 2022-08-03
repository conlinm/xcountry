<script >
    export let users;
    export let userIdField;
    export let firstNameField;
    export let lastNameField;
    export let emailField;
    export let passwordField;


    function openEdit(user){
        userIdField = user.user_id;
        firstNameField = user.first_name;
        lastNameField = user.last_name;
        emailField = user.email;
        passwordField = user.password;
    }
    function modifyAccount(){
        let user = {
            user_id: userIdField,
            first_name: firstNameField,
            last_name: lastNameField,
            email: emailField,
            password: passwordField
        };
    }
</script>

 
  
<div class="users">
    <div class="heading">
        <div class="intro">
         <h3 class="center">Users</h3>
         <p>
            Admin page to manage Cross Country Reference Manager Users.
         </p>
        </div>
        <div class="right">
            <form  action="./signup">
                <button type="submit" class="button-create">Add New User</button>
            </form>
        </div>
    </div>  
      <div class="table">
      <table>
          <thead>
            <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
          </thead>
         
          <tbody>
            {#each users as user}
            <tr>
                <td>{user.user_id}</td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td><button on:click={()=>openEdit(user)} class="button-primary-edit">Edit</button></td>
            </tr>
            {/each}
          </tbody>
        </table>
    </div>
    <div class="edit">
        {#if userIdField}
        <h3>Modify Account</h3>
        <form action="/create?_method=put" method="post">
            <fieldset>

                <input bind:value={userIdField} type="hidden" name="user_id" placeholder="User ID" id="userIdField">
                <h4>User ID = {userIdField}</h4>
                <label for="first_name">First Name</label>
                <input bind:value={firstNameField} type="text" name="first_name" placeholder="First Name" id="firstNameField">
                <label for="last_name">Last Name</label>
                <input  bind:value={lastNameField} type="text" name="last_name" placeholder="Last Name" id="lastNameField">
                <label for="email">Email</label>
                <input  bind:value={emailField} type="email" name="email" placeholder="Email" id="emailField">
                <label for="password">Password</label>
                <input  bind:value={passwordField} type="password" name="password" placeholder="Password" id="passwordField">
        
              <button class="button-primary" type="submit" >Modify Account</button>
              <button formaction="/create?_method=delete" class="button-primary-delete" type="submit">Delete Account</button>
            </fieldset>
          </form>
        {/if}
    </div>
</div>



  <style>
    .users {
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