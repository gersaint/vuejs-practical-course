<template>

  <div class="test">
    {{ msg }}
  </div>

  <!--div>
    {{ fullName }}
  </!--div-->

  <!--div>
    <input type="text" v-on:keyup.enter = "typedEnter" >
  </div-->

  <!-- div>
  <div v-text = "title"></div>

  <div v-if = "showName">
    <p> {{ user.firstName }} </p>
  </div>
  <div v-else>
    <p> No puedo mostrar nombre </p>
  </div>

  <hr>

  <ul>
    <li v-for = "task in tasks">
      {{ task.title }}
    </li>
  </ul>
</div -->

  <!-- div>
    <input type="text" v-model="user.firstName">
    <button type="button" v-on:click = "saludar( user.firstName )" >
      Click Me
    </button>
  </div -->


</template>

<script>

  export default {
    data() {
      return {
        title: "Hola VueJs",
        user: {
          firstName: "Gersa",
          lastName: "Jean"

        },
        myHtml: '<h3> hola vue </h3>',
        // showName: true
        showName: false,
        tasks: [
          { title: 'eat' },
          { title: 'dinner' },
          { title: 'play' },
          { title: 'sleep' }

        ]
      }
    },

    methods: {

      saludar( name ) {
        alert("Hello " + name)
      },

      typedEnter (e) {
        console.log( "Dio un ENTER" );

        // Codigo condicional si se Teclea la tecla <ENTER>
        // if (e.target.keyCode === 13 ) {}

      }
    },

    computed: {
      fullName() {
        return this.user.firstName + " " + this.user.lastName;
      }
    },

    props: {
      msg: {
        type: String,
        default: 'Mensaje por defecto'
      }
    }
  }

</script>

<style media = "screen">

  .test {

    background-color: #ddd;

  }

</style>

