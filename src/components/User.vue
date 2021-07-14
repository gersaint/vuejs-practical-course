<template lang="html">
  <div class="users">
    <h1> User component </h1>
    <ul>
      <li v-for="user in users">
        {{user.name}} - {{ user.email }}
        <button v-on:click="deleteUser(user)">X</button>


      </li>
    </ul>
    <form v-on:submit.prevent="addUser">

      <input type="text" v-model="newUser.name" placeholder="Nombre">
      <input type="text" v-model="newUser.email" placeholder="Email">
      <button type="submit">
        Add
      </button>


    </form>
  </div>
</template>

<script>
export default {

  data() {

    return {
      users: [],
      newUser: {}
    }
  },

  methods: {

    // addUser(e) {
    addUser() {
      // e.preventDefault(); // se puede resumir con VueJs
      // console.log( "agregando usuario...", this.newUser );
      this.users.push( this.newUser );
      this.newUser = {};
    },

    deleteUser(user) {

      // console.log( "deleting user..." )

      this.users.splice(this.users.indexOf(user), 1);

    }

  },
  // metodo/propiedad este metodo se ejecuta apenas el componente sea creado....
  created() {
    // console.log("Componente Creado...")
    this.$http.get( "https://jsonplaceholder.typicode.com/users" )
      // .then( res => console.log( res) );

      .then(res => this.users = res.body )
  }
}
</script>

<style lang="css">

  ul li {
    text-align: left;
  }

  .contacted {
    text-decoration: line-through;
  }

  .users {

    background: #333;
    color: #fff;
    padding: 20px

  }

</style>

<!--
<style lang="css">

  .users {

    background: #333;
    color: #fff;
    padding: 20px

  }
</style>
-->
