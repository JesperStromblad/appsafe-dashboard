<template>
    <div class="parallel_sphere">
        <div>
            <div id="sphere_color" class="sphere fill"></div>
        </div>
        <div class="outer_sphere outer_fill">
            <div id="sphere_id" class="sphere fill"></div>
        </div>
    </div>
    <div class="label-container">
        <div class="label-column">
            <div class="label">
                <div class="label">
                    <div class="info">Privacy Bubble:</div>
                    <div class="desc">
                        <div class="block-red"></div>
                        Data marketed and privacy concerns exist
                    </div>
                    <div class="desc">
                        <div class="block-gray"></div>
                        No data marketed and no privacy concerns exist
                    </div>
                    <div class="desc">
                        <div class="block-green"></div>
                        No data marketed but privacy concerns exist
                    </div>
                </div>
            </div>
        </div>
        <div class="label-column">
            <div class="label">
                <div class="info">Security Bubble</div>
                <p class="legend-info">Size of Bubble: proportion of questions answered by app developer</p>
                <div class="desc">
                    <div class="block-red"></div>
                    Developer provided answers to the questions and they indicate concerns
                </div>
                <div class="desc">
                    <div class="block-gray"></div>
                    Developer provided answers to the questions and they do not indicate concerns
                </div>
                <div class="desc">
                    <div class="block-green"></div>
                    Developer provided (sufficient) answers to the questions
                </div>
            </div>
        </div>
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
        console.debug(props.sphereColor);
        document.getElementById('sphere_color').style.width = '260px';
        document.getElementById('sphere_color').style.height = '260px';
        document.getElementById('sphere_color').style.background = props.sphereColor;
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
    }

    .fill {
        background: #d6bba9;
    }

    .label-container {
        display: flex;
        flex-direction: row;
        margin-top: 8px;
    }

    .label-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center; /* Center align items horizontally */
        text-align: center; /* Center align text within each column */
        margin-right: 5%;
    }

    .label {
        margin-bottom: 8px;
    }

    .info {
        font-weight: bold;
    }

    .legend-info {
        font-size: smaller;
        font-style: italic;
    }

    .block-red,
    .block-green,
    .block-gray {
        width: 10px;
        height: 10px;
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
        align-items: center; /* Center align items horizontally */
        justify-content: center; /* Center align content horizontally */
        width: 90%;
        margin-left: 15%;
    }
</style>
