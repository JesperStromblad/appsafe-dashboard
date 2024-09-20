<template>
    <div class="outer-block">
        <div :class="!company ? 'data numbers' : 'data numbers align'">{{ data }}</div>
        <div v-if="!company" class="data label">{{ info }}</div>
        <div v-else class="data">
            <p class="analytic-label">Data collected by commercial party</p>
            <img src="../assets/google.png" width="40px" height="40px" />
            <img src="../assets/huawei.png" width="40px" height="40px" />
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        data: {
            type: Number,
            required: true,
            default: 10,
            validator: (value) => value >= 0 && value <= 100,
        },
        info: {
            type: String,
            default: 'Total Apps',
        },
        company: {
            type: Boolean,
            default: false,
        },
    });
    props;
</script>

<style scoped>
    .outer-block {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border: 1px solid #adadad;
        border-radius: 5%;
        width: 15%;
        background-color: #f4f4f4;
        overflow: hidden;
    }
    .data {
        background-color: #f4f4f4;
        padding: 10px;
        text-align: center;
        font-size: 40px;
        border-radius: 5%;
    }

    .numbers {
        color: rgb(141, 141, 141);
        font-size: 6em;
    }

    .label {
        color: rgb(141, 141, 141);
        font-size: 2em;
    }
    .analytic-label {
        font-size: 20px;
        color: rgb(141, 141, 141);
    }
    img {
        padding: 4px;
    }
    .align {
        padding-top: 30px;
    }

    /* Smaller tablets and mobiles */
    @media (max-width: 1130px) {
        .data {
            font-size: 30px;
        }
        .label {
            color: rgb(141, 141, 141);
            font-size: 1em;
        }
        .analytic-label {
            font-size: 10px;
            color: rgb(141, 141, 141);
        }
    }
</style>
