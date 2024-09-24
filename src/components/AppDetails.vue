<template>
    <div class="block">
        <div id="border">
            <a target="_blank" :href="appUrl"
                ><img v-if="appImage" :src="appImage" height="96px" /> <img v-else src="../assets/missing.png" height="96px"
            /></a>
        </div>
        <div class="appInfo">
            <p>{{ appName }}</p>
            <a @mouseover="hover = true" @mouseleave="hover = false" target="_blank" :href="appUrl"
                ><img src="../assets/more.png" height="40px" />
            </a>
            <span class="details" v-if="hover">Click for App details</span>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, computed, ref } from 'vue';
    const hover = ref(false);
    const props = defineProps({
        appName: {
            type: String,
            required: true,
        },
        appImage: {
            type: String,
            required: true,
        },
        appUrl: {
            type: String,
            required: true,
        },
    });

    const appImage = computed(() => {
        return props.appImage;
    });

    const appUrl = computed(() => {
        return props.appUrl;
    });
</script>

<style>
    #border {
        border: rgb(219, 219, 219) solid 4px;
        border-radius: 10px;
        width: 96px;
        height: 96px;
    }
    .block {
        display: flex;
        width: 30%;
        height: 96px;
        margin: auto;

        justify-content: center;
    }
    p {
        margin-left: 1em;
        font-size: large;
        font-weight: bold;
        color: gray;
    }
    .details {
        position: absolute;
        font-size: medium;
        color: rgb(101, 134, 159);
        background-color: aliceblue;
        border: 1px solid rgb(197, 234, 251);
        border-radius: 5px;
        padding-left: 1em;
        padding-right: 1em;
        font-weight: bold;
    }
</style>
