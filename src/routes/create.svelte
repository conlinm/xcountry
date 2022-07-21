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
        console.log(user.first_name, user.last_name, user.email, user.password);
    }
</script>

 
  
<div class="users">
    <h3>Users</h3>
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
                <td><button on:click={openEdit(user)} class="button-primary">Edit</button></td>
            </tr>
            {/each}
          </tbody>
        </table>
    </div>
    <div class="edit">
        {#if userIdField}
        <h3>Modify Account</h3>
        <form action="/create" method="post">
            <fieldset>
                <p>User ID = {userIdField}</p>
                <input bind:value={firstNameField} type="text" name="first_name" placeholder="First Name" id="firstNameField">
                <input  bind:value={lastNameField} type="text" name="last_name" placeholder="Last Name" id="lastNameField">
                <input  bind:value={emailField} type="email" name="email" placeholder="Email" id="lastNameField">
                <input  bind:value={passwordField} type="password" name="password" placeholder="Password" id="lastNameField">
        
              <button class="button-primary" on:click={modifyAccount} type="submit" value="Modify Account">Modify Account</button>
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
    .button-primary {
        width: 100%;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
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