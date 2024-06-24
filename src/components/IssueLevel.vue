<template>
    <p class="heading">Privacy meter</p>
    <div class="bar-details">
        <img src="../assets/star.png" width="50px" height="50px" />
        <meter class="style" low="69" high="80" max="100" :value="issues"></meter>
        <img src="../assets/nervous.png" width="50px" height="50px" />
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    // Define props
    defineProps({
        issues: {
            type: Number,
            required: true,
            default: 50,
            validator: (value) => value >= 0 && value <= 100,
        },
    });
</script>

<style scoped>
    .style {
        width: 90%;
        margin: auto;
    }

    .bar-details {
        display: flex;
        width: 80%;
        margin: auto;
    }
    img {
        padding-left: 5px;
        padding-right: 5px;
    }
    .heading {
        font-size: 1.3em;
    }
</style>
