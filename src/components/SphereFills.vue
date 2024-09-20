<template>
    <div class="parallel_sphere">
        <div>
            <div title="" id="sphere_color" class="sphere fill"></div>
            <span class="bubble-info">Privacy Bubble</span>
        </div>

        <div>
            <div class="outer_sphere outer_fill">
                <div id="sphere_id" class="sphere securty_fill"></div>
            </div>
            <div class="bubble-description">
                <span class="bubble-info">Security Bubble</span>
                <img
                    title="Size of the bubble is proportional to the questions answered."
                    src="../assets/information-button.png "
                    height="15px" />
            </div>
        </div>
    </div>

    <fieldset id="lsphere">
        <legend>Sphere Color codes</legend>
        <div class="legend-text">
            <div class="block-red"></div>
            <div>More substantial concerns exist</div>
        </div>
        <div class="legend-text">
            <div class="block-green"></div>
            <div>Less substantial concerns exist</div>
        </div>
        <div class="legend-text">
            <div class="block-gray"></div>
            <div>Insufficient information available</div>
        </div>
    </fieldset>
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
        spherePrivacyColor: {
            type: String,
            required: true,
            default: 'gray',
        },
        sphereSecurityColor: {
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
        document.getElementById('sphere_id').style.background = props.sphereSecurityColor;
    }

    watch(
        () => props.issues,
        () => {
            setSphereSize(props.issues);
            setSpehereFillColor();
        }
    );

    function setSpehereFillColor() {
        document.getElementById('sphere_color').style.width = '260px';
        document.getElementById('sphere_color').style.height = '260px';
        document.getElementById('sphere_color').style.background = props.spherePrivacyColor;
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
        text-align: center;
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
        border-radius: 50%;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 6px;
    }

    .securty_fill {
        background: #d6bba9;
    }

    #lsphere {
        width: 20%;
        margin: auto;
    }
    .legend-text {
        display: flex;
        flex-direction: row;
    }

    .info {
        font-weight: bold;
    }

    .legend-info {
        font-size: smaller;
        font-style: italic;
    }
    .bubble-info {
        font-size: large;
    }

    .block-red,
    .block-green,
    .block-gray {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-right: 5px;
    }

    .block-red {
        background-color: #ff033e;
    }

    .block-green {
        background-color: #32de84;
    }

    .block-gray {
        background-color: #899499;
    }

    .desc {
        display: flex;
        align-items: center;
        justify-content: center; /* Center align content horizontally */
    }
    .parallel_sphere {
        display: flex;
        justify-content: space-around; /* Center align content horizontally */
        width: 90%;
    }
    .add-legend {
        margin-top: 8px;
    }
    .bubble-description {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>
