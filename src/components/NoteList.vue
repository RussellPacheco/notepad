<template>
    <div class="notelist-container">
        <div class="button-container">
            <div class="button">
                <img src="../assets/trash.png" />
            </div>
        </div>
        <div class="notes-container">
            <div class="note-container" v-for="(note, index) in this.$store.state.notes" :key="index">
                <div class="note-title">{{note.title}}</div>
                <div class="note-detail">{{note.body}}</div>
            </div>
        </div>  
    </div>  
</template>

<script>

export default {
    name: "NoteList",
    components: {
    }

}
</script>

<style>

.note-container {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    border-style: solid;
    height: 15vh;
}

.note-title {
    margin:auto;
}

.notelist-container {
    display: flex;
    flex-direction: column;
    margin-left: 2px;
    margin-top: 2px;
    width: 15vw;
    height: 70vh;
}

.button-container {
    display: flex;
    border-style: solid;
    justify-content: space-between;
    height: 5vh;

}

.notes-container {
    overflow-y: scroll;
}

.button {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
}

</style>