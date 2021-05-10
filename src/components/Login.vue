<template>
    <div class="login-container">
        <div class="title">Login</div>
        <div :class="[this.$store.state.loginToggle ? this.visibleError : this.hiddenError]">{{this.$store.state.loginError}}</div>
        <div :class="[this.$store.state.accountCreatedToggle ? this.visibleError : this.hiddenError]">Account Created</div>

        <form class="form">
            <input v-model="username" type="text" placeholder="Username"/>
            <input v-model="password" type="password" placeholder="Password"/>
            <button @click.prevent="onClick">Login</button>
        </form>
    </div> 
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
            visibleError: "visibleerror",
            hiddenError: "hiddenerror",
        }
    },

    methods: {
        onClick() {
            this.$store.dispatch("verifyLogin", {username: this.username, password: this.password})
        },

        createAccount() {
            this.$store.commit("setCreateAccountToggle")
        }
    }
}
</script>

<style scoped>

.title {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    
}

.create-account {
    float: right;
    margin-right: 1%;
    cursor: pointer;
}


.visibleerror {
    color:red;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    margin-bottom: 1%;

}

.hiddenerror {
    visibility: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    margin-bottom: 1%;

}

.login-container {
    display: flex;
    flex-direction: column;
}

.form {
    display:flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}

input {
    margin-bottom: 3%;
}

button {
    margin-top: 10%;
}

</style>