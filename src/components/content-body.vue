<template>
  <ProfileCard class="content"></ProfileCard>

    </template>

    <script>
    import ProfileCard from './profile-card.vue';

    export default {
      name: 'ContentBody',
      components: {
        ProfileCard,
  },
      props: {
        msg: String
      }
    }
    </script>

 <style>

  template,body{
  margin:0;
  width:100%;
  height: 1000px;
}
html{
    background-color: rgb(171, 170, 170);
}
</style>