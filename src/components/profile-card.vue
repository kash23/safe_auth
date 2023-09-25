<template>
    <div  v-if="isMobile()" class="rectangle mt-4">
      <div class="user ml-4 pt-3 is-size-1"><font-awesome-icon icon="user-circle" /></div>
      <div>
        <h2>Name:</h2>
      </div>
    </div>
    <div  v-else class="desktop mt-4">
      <div class="user ml-4 pt-3 is-size-1"><font-awesome-icon icon="user-circle" /></div>
      <span class="name">
        <h5>Name:</h5>
      </span>
    </div>
    </template>
    <script>
    export default {
      name: 'ProfileCard',
      props: {
        msg: String
      },
      methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
  },
}
</script>
<style>
    .rectangle{
    height:300px;
    background:rgb(216, 216, 216);
    margin-left: 15px;
    margin-right: 20px;
}
.desktop{
  height:100px;
    background:rgb(216, 216, 216);
    margin-left: 15px;
    margin-right: 20px;
}
.user{
  width: 0;
}
.name{
  
}
</style>