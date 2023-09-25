<template>
    
      <!-- Your main content -->
      <div class="nav">
        <div class="bar pl-4 is-size-8-mobile" @click="toggleSidebar">
          <font-awesome-icon icon="bars" />
        </div>
        <div class="logo mt-1 is-size-4-mobile">
          SafeAuth
        </div>
        <ul>
          <li></li>
        </ul>
        <div class="logIn mt-5 mr-2 is-size-5">
          <a href="#">SignIn/SignUp</a>
        </div>
        <div class="power is-size-4-mobile">
          <span class="m-3"> <font-awesome-icon icon="cog" /></span>
          <span v-if="!isMobile()"><font-awesome-icon icon="power-off" /></span>
        </div>
      </div>
  
      <!-- Sidebar -->
      <div class="sidebar" :class="{ 'open': isSidebarOpen }">
        <ul>
          <a> 
            <li>1</li>
        </a>
          <a>
            <li>2</li>
          </a>
       
        </ul>
      </div>
    
  </template>
  
  <script>
  export default {
    name: 'TopNav',
    data() {
      return {
        isSidebarOpen: false, 
      };
    },
    props: {
    msg: String
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen; 
      },
      isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    },
  };
  </script>


<style style="scss">
body
{
    line-height: 0.5;
}
.nav{
    background: #120e0e;
    color: #303030;
    display: flex; 
    

}
.nav .logo{
    font-size: 24px;
    padding: 20px;
    margin-left: 10px;
    color: #ffffff;
}
.nav .logo a{
    text-decoration: none
}
.nav ul{
    margin: 0;
    padding: 0;
    display: flex;
    width: 50%;
    color: #ffffff;
    margin-left: auto
}
.nav .bar{
    cursor: pointer;
}
ul li{
    padding: 20px;
    list-style: none
}
ul li a{
    color: #ffffff;
    justify-content: center;
}

.logo{
    font-family: MD Primer ,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
    font-style: normal;
    font-weight: 600;
}
.power{
    color: #ffffff;
    cursor: pointer;
    margin-top: 20px;
    width: 80px;
}
.bar{
    color: #ffffff;
    margin-top: 20px;
}
.logIn a{
    color: #ffffff;
    cursor: pointer;
    text-align: start;
}

.sidebar {
  width: 50px;
  height: 100%;
  position: fixed;
  top: 90px;
  left: -50px; /* Set the initial position off-screen */
  background: #120e0e; /* Customize the sidebar background color */
  color: aliceblue;
  transition: left 0.1s ease-in-out;
  z-index: 10;
}

.sidebar.open {
  left: 0; /* Bring the sidebar on-screen when it's open */
}
a{
  color: #ffffff;
}
</style>