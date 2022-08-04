<script>
  export let  myCheckbox;

  function handleClick() {
    myCheckbox.checked = false;
  }

</script>
<header id='header'>
    <img src="/xcLogo.png" class="img-responsive" alt="logo">
	 <span class ='nav-heading nav-brand' >Cross Country Recruit Manager</span>
	 <input type ='checkbox' class = 'menu-toggle' id ='menu-toggle' bind:this={myCheckbox}>
	<nav class= 'header'>
		<ul>
            <li on:click={handleClick}><a href='/athletes'>Athletes</a></li>
            <li on:click={handleClick}><a href='/topathletes'>Top Athletes</a></li>
            <li on:click={handleClick}><a href='/create'>Users</a></li>
            <li on:click={handleClick}><a href='/pr'>PR Times</a></li>
            <li on:click={handleClick}><a href='/myathletes'>My Athletes</a></li>
            <li on:click={handleClick}><a href='/interactions'>Interactions</a></li>
            <li on:click={handleClick}><a href='/meets'>Meets</a></li>
            <li on:click={handleClick}><a href = '/schools'>Schools</a></li>
            <li on:click={handleClick}><a href = '/topschools'>School Top Athlete Count</a></li>
            <li on:click={handleClick}><a href='/results'>Meet Results </a></li>
            <li on:click={handleClick}><a href='/coaches'>Coaches</a></li>
    </ul>
	</nav>
	<label for='menu-toggle' class='menu-nav-toggle'>
		<span></span>
	</label>
</header>

<style>
.img-responsive {
    height: auto;
    width: auto;
    margin-left:20px;
    max-height: 72px;
    max-width: 250px;
    ;
}
header {
  text-align: center;
  width: 100%;
  z-index: 999;
  padding: .4rem;
  position: sticky;
  top: 0;
  background: #f4f5f6;
  border-bottom: 0.1rem solid #d1d1d1;
}

header input.menu-toggle {
  display: none;
}

nav {
  position: absolute;
  text-align: center;
  top: 100%;
  left: 0;
  background-color: #f4f5f6;
  width: 100%;
  -webkit-transform: scale(1, 0);
          transform: scale(1, 0);
  -webkit-transition: -webkit-transform 400ms ease-in-out;
  transition: -webkit-transform 400ms ease-in-out;
  transition: transform 400ms ease-in-out;
  transition: transform 400ms ease-in-out, -webkit-transform 400ms ease-in-out;
  -webkit-transform-origin: top;
          transform-origin: top;
}

nav ul {
  margin: 0;
  margin-top: 5%;
  padding: 0;
  height: 70vh;
}

nav li {
  margin-left: 1rem;
  height: 7%;
  list-style: none;
}

nav a {
  text-transform: uppercase;
  opacity: 0;
}

.nav-heading {
  font-size: 3rem;
}

.menu-toggle:checked ~ nav {
  -webkit-transform: scale(1, 1);
          transform: scale(1, 1);
}

.menu-toggle:checked ~ nav a {
  opacity: 1;
  -webkit-transition: opacity 200ms ease-in 100ms;
  transition: opacity 200ms ease-in 100ms;
}

.menu-nav-toggle {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-right: 2rem;
}

.menu-nav-toggle:hover, .menu-nav-toggle:focus {
  cursor: pointer;
}

.menu-nav-toggle span, .menu-nav-toggle span:before, .menu-nav-toggle span:after {
  display: block;
  background: #333;
  width: 2rem;
  border-radius: 0.125rem;
  position: relative;
  height: 0.25rem;
}

.menu-nav-toggle span:before, .menu-nav-toggle span:after {
  content: '';
  position: absolute;
}

.menu-nav-toggle span:before {
  top: 0.8rem;
}

.menu-nav-toggle span:after {
  bottom: 0.8rem;
}

@media screen and (min-width: 500rem) {
  .menu-nav-toggle {
    display: none;
  }
  header {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr auto minmax(37.5rem, 3fr) 1fr;
        grid-template-columns: 1fr auto minmax(37.5rem, 3fr) 1fr;
  }
  .nav-brand {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    
  }
  nav {
    all: unset;
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
    grid-column: 3/4;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  nav ul {
    margin-top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: auto;
  }
  nav li {
    margin-bottom: 0;
    margin-left: 2rem;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: auto;
  }
  nav li {
    margin-bottom: 0;
    margin-left: 2rem;
  }
  nav a {
    opacity: 1;
    color:#FF7F00;
  }

}
</style>

