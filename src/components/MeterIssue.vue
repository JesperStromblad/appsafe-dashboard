<template>
    <div class="meter-container">
        <div class="meter-bar">
            <p>good</p>
            <div class="meter-green" :style="{ width: greenWidth + '%' }"></div>
            <div class="meter-red" :style="{ width: redWidth + '%' }"></div>
            <p>bad</p>
        </div>
    </div>
</template>

<script setup>
    import { computed, defineProps } from 'vue';

    // Define props
    const props = defineProps({
        value: {
            type: Number,
            required: true,
            default: 50,
            validator: (value) => value >= 0 && value <= 100,
        },
    });

    // Compute widths based on the value prop
    const greenWidth = computed(() => props.value);
    const redWidth = computed(() => 100 - props.value);
</script>

<style scoped>
    .meter-container {
        width: 100%;
        height: 30px; /* Adjust the height as needed */
        margin-bottom: 5%;
        margin-top: 5%;
    }

    .meter-bar {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .meter-green {
        background-color: rgb(0, 210, 0);
        height: 100%;
    }

    .meter-red {
        background-color: rgb(189, 43, 43);
        height: 100%;
    }
</style>
