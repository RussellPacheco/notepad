<template>
    <div class="note-container">
        <div class="note-title">TEMP NOTE TITLE
        </div>
        <div class="note-detail">TEMP NOTE DETAIL
        </div>
    </div>
</template>

<script>
export default {
    name: "Note"

}
</script>

<style scoped>

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

</style>