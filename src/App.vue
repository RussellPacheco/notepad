<template>
  <div>
    <div class="navbar">
      <div class="navbar-title" @click="setTogglesFalse">Notepad</div>
      <div class="links">
        <div class="create-account" v-if="!this.$store.state.signedIn && !this.$store.state.createAccountToggle" @click="setCreateAccountToggle">Create Account</div>
        <div class="login" v-if="!this.$store.state.signedIn && !this.$store.state.loginToggle" @click="setLoginToggle">Login</div>
        <div class="logged-in" v-if="this.$store.state.signedIn">Welcome back, {{this.$store.state.user.first_name}}</div>        
      </div>
    </div>
    <NewAccount v-if="this.$store.state.createAccountToggle && !this.$store.state.signedIn" />
    <Login v-if="this.$store.state.loginToggle && !this.$store.state.signedIn"/>
    <div class="notepad-container" v-if="!this.$store.state.createAccountToggle && !this.$store.state.loginToggle || this.$store.state.signedIn">
      <div class="col-left">
        <NoteList />
      </div>
      <div class="col-right">
        <BlankNotepad />
      </div>
    </div>
  </div>
</template>

<script>
import BlankNotepad from "./components/BlankNotepad"
import NoteList from "./components/NoteList"
import NewAccount from "./components/NewAccount"
import Login from "./components/Login"

export default {
  name: 'App',
  components: {
    BlankNotepad,
    NoteList,
    NewAccount,
    Login,
  },
  methods: {
    setCreateAccountToggle() {
      this.setTogglesFalse()
        this.$store.commit("setCreateAccountToggle")
    },

    setLoginToggle() {
      this.setTogglesFalse()
      this.$store.commit("setLoginToggle")
    },

    setTogglesFalse() {
      this.$store.commit("setTogglesFalse")
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    border-bottom: solid;
    padding-bottom: 1%;
}

.navbar-title {
  cursor: pointer;
}

.links {
  display: flex;
}

.create-account, .login {
  cursor: pointer;
  padding-left: 1%;
  padding-right: 1%;
}


.notepad-container {
  display:flex;
  width: 60vw;
  height: 70vh;
  border-style: solid;
  margin: auto;
  margin-top: 5%;
}

.col-right {
  margin: auto;
}

</style>
