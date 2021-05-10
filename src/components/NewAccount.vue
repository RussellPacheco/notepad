<template>
    <div class="create-account-container">
        <div class="form-container">
            <form>
                <ul class="wrapper">
                    <li class="form-row">
                        <label for="username">Username:</label>
                        <input type="text" v-model="username" id="username">
                    </li>
                    <li class="form-row">
                        <label for="password">Password:</label>
                        <input type="password" v-model="password" id="password">
                    </li>
                    <li class="form-row">
                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" v-model="confirmPassword" id="confirm-password">
                    </li>
                    <li class="form-row">
                        <label for="email">Email:</label>
                        <input type="email" v-model="email" id="email">
                    </li>
                    <li class="form-row">
                        <label for="online-tag">First Name:</label>
                        <input type="text" v-model="firstName" id="first-name">
                    </li>
                    <li class="form-row">
                        <label for="online-tag">Last Name:</label>
                        <input type="text" v-model="lastName" id="last-name">
                    </li>
                        <li class="form-row">
                        <div class="error" :class="[this.$store.state.createUserErrorToggle ? errorVisible : errorHidden]">{{this.$store.state.createUserError}}</div>
                        <button type="submit" @click.prevent="onClick">Submit</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewAccount",
    data() {
        return {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            firstName: "",
            lastName: "",
            errorVisible: "error-visible",
            errorHidden: "error-hidden"
        }
    },
    methods: {
        onClick() {
            const validator = this.inputValidator()

            if (validator === "pass") {
                alert("Passwords do not match!")
            } else if (!validator) {
                alert("Please fill in everything")
            } else {

                const payload = {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    username: this.username,
                    password: this.password,
                    email: this.email,
                }

                this.$store.dispatch("createUser", payload)
            }
        },

        inputValidator() {
            if (this.username === "" || this.password === "" || this.confirmPassword === "" || this.email === "" || this.firstName === "" || this.lastName === "") {
                return false
            } else if (this.password !== this.confirmPassword) {
                return "pass"
            } else {
                return true
            }
        }
    }
}
</script>

<style scoped>

.subtitle {
    font-size:25px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 2%;
    font-weight: bold;
}

.error-visible {
    margin-right: 25%;
    color: red;
}

.error-hidden {
    margin-right: 50%;
}

.title-bar {
    border-style: none none solid;
    display: flex;
    justify-content: space-between;
    width: 99.75vw;
    margin-left: -0.25%
}

.title {
    font-family: smashFont;
    font-size: 50px;
    margin-left: 1%;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
}

.create-account-container {
    display: flex;
    flex-direction: column;
}

.form-container {
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-radius: 10px;
    margin-top: 3%;
    margin-left:auto;
    margin-right:auto;
    background-color: whitesmoke;

}

.wrapper {
list-style-type: none;
padding: 0;
border-radius: 3px;
}

.form-row {
display: flex;
justify-content: flex-end;
padding: .5em;
}

.form-row > label {
padding: .5em 1em .5em 0;
flex: 1;
}

.form-row > input {
flex: 2;
}

.form-row > input,
.form-row > button {
padding: .5em;
}

.form-row > button {
background: gray;
color: white;
border: 0;
}

</style>