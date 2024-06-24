<template>
    <div id="sphere_id" class="sphere fill"></div>
</template>

<script setup>
    import { defineProps, onMounted, watch } from 'vue';

    // Define props
    const props = defineProps({
        issues: {
            type: Number,
            required: true,
            default: 100,
            validator: (value) => value >= 0 && value <= 100,
        },
        sphereColor: {
            type: String,
            required: true,
            default: 'gray',
        },
    });

    function setSphereSize() {
        document.getElementById('sphere_id').style.width = props.issues + 'px';
        document.getElementById('sphere_id').style.height = props.issues + 'px';
    }

    watch(
        () => props.issues,
        () => {
            setSphereSize();
            setSpehereFillColor();
        }
    );

    function setSpehereFillColor() {
        document.getElementById('sphere_id').style.background = props.sphereColor;
    }

    onMounted(() => {
        setSphereSize();
        setSpehereFillColor();
    });
</script>

<style scoped>
    .sphere {
        border-radius: 50%;
        width: 90%;
        margin: auto;
    }

    .fill {
        background: yellow;
    }
</style>
