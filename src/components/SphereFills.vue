<template>
    <p>Maximum Sphere Size</p>
    <div class="outer_sphere outer_fill">
        <div id="sphere_id" class="sphere fill"></div>
    </div>
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

    function setSphereSize(size) {
        const maxSize = 250;
        const minSize = 50;
        let minMargin = 40;
        let maxMargin = 1;
        const marginTop = minMargin + ((maxMargin - minMargin) / (maxSize - minSize)) * (size - minSize);
        document.getElementById('sphere_id').style.width = props.issues + 'px';
        document.getElementById('sphere_id').style.height = props.issues + 'px';
        document.getElementById('sphere_id').style.marginTop = marginTop + '%';
    }

    watch(
        () => props.issues,
        () => {
            setSphereSize(props.issues);
            setSpehereFillColor();
        }
    );

    function setSpehereFillColor() {
        document.getElementById('sphere_id').style.background = props.sphereColor;
    }

    onMounted(() => {
        setSphereSize(props.issues);
        setSpehereFillColor();
    });
</script>

<style scoped>
    p {
        margin: 0;
        color: black;
    }
    .outer_sphere {
        border-radius: 50%;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    .outer_fill {
        width: 260px;
        height: 260px;
        border: 2px dotted black;
    }

    .sphere {
        margin-top: 10%;
        border-radius: 50%;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

    .fill {
        background: yellow;
    }
</style>
