<template>
    <div>
        <div class="blanknotepad-container">
            <input v-model="title" type="text"  placeholder="Title" />
            <textarea v-model="textbox" placeholder="What's on your mind...?" rows=29 cols=50>
            </textarea>
        </div>
        <div class="button" @click="addNote">
        <img src="../assets/add.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: "BlankNotepad",
    data() {
        return {
            title: "",
            textbox: "",
        }
    },
    methods: {
        addNote() {
            const data = {
                title: this.title,
                body: this.textbox,
                user_id: this.$store.state.user.user_id
            }
            this.$store.dispatch("addNote", data)
        }
    }
}
</script>

<style scoped>

.button {
    position: absolute; 
    left: 76%;
    top: 65%;
    cursor: pointer;
}

.blanknotepad-container {
    display: flex;
    flex-direction: column;
    width: 44.4vw;
}

</style>