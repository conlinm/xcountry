<div class="schools">
    <div class="table">
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stephen Curry</td>
            <td>27</td>
            <td>1,91</td>
            <td>Akron, OH</td>
          </tr>
          <tr>
            <td>Klay Thompson</td>
            <td>25</td>
            <td>2,01</td>
            <td>Los Angeles, CA</td>
          </tr>
        </tbody>
      </table>
    </div> 
    <fieldset>
    <button class="button-primary">Get All Schools</button>
    </fieldset>

</div>

<script>
    async function getSchools() {
        const response = await fetch('/api/schools');
        const schools = await response.json();
        return schools;
    }
</script>

<style>
    .schools {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: top; 
        height: 100vh;
    }
    .button-primary {
        width: 100%;
        background-color: #FF7F00;
        border: 0.1rem solid #FF7F00;
    }
</style>

