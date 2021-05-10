import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        createAccountToggle: false,
        loginToggle: false,
        loginError: "",
        signedIn: false,
        userError: false,
        createUserError: "",
        createUserErrorToggle: false,
        accountCreatedToggle: false,
        user: {},
        notes: []

    },

    mutations: {
        setAccountCreatedToggle(state) {
            state.accountCreatedToggle = true
        },

        setCreateAccountToggle(state) {
            state.createAccountToggle = true
        },

        setLoginToggle(state) {
            state.loginToggle = true
        },

        setSignInToggle(state) {
            state.signedIn = true
        },

        setTogglesFalse(state) {
            state.createAccountToggle = false
            state.loginToggle = false
        },

        setUser(state, payload) {
            state.user = payload
        },

        setUserErrorToggle(state, payload) {
            state.createUserError = payload
            state.createUserErrorToggle = true
        },

        setNotes(state, payload) {
            state.notes = payload
            console.log(state.notes)
        },

        setLoginError(state, payload) {
            state.loginError = payload
            state.loginToggle = true
        },

    },

    actions: {
        async createUser({ commit }, payload) {
            try {
                const res = await axios.post("/user", payload)
                if (res.data !== "Completed") {
                    commit("setUserErrorToggle", res.data)
                } else {
                    commit("setAccountCreatedToggle")
                    commit("setTogglesFalse")
                    commit("setLoginToggle")
                }
            } catch (err) {
                console.error(err)
            }
        },

        async verifyLogin({ commit }, payload) {
            try {
                const res = await axios.post("/user/login", payload)
                if (res.data === "Username and Password does not match" || res.data === "User doesn't exist") {
                    commit("setLoginError", res.data)                    
                } else {
                    const data = await axios.get(`/user/${res.data.user_id}`)
                    console.log("this is the data from notes", data)
                    commit("setNotes", data.data)
                    commit("setUser", res.data)
                    commit("setSignInToggle")
                }
            } catch (err) {
                console.error(err)
            }
        },

        async addNote({ commit }, payload) {
            try {
                const data = await axios.post("/notes/create", payload)
                console.log("note data:", data.data)
                commit("setNotes", data.data)

            } catch (err) {
                console.error(err)
            }
        }
        
    }
})