<template>
    <div class="header"><h2 class="title">DashBoard</h2></div>
    <p>
        This dashboard was made by the APPSAFE project, based at Tilburg university, Radboud universiteit and the Trimbos institute. It is
        designed to visualise the app features that Android app developers are required to report when they submit an app to the Google Play
        store. These features are required by the Play store, and are defined by requirements based on data protection law.
    </p>
    <span>(ERC PoC grant # 101069354 — APPSAFE)</span>
    <hr />
    <h2>Overall statistics</h2>
    <div v-for="(app, index) in appData" :key="index">
        <div class="blocks">
            <BlockDisplay :data="31" info="Total Apps"></BlockDisplay>
            <BlockDisplay :data="getTotalIssues(app)" info="Total # of data risks"></BlockDisplay>
            <BlockDisplay :data="2" info="Total issues" :company="true"></BlockDisplay>
        </div>

        <hr class="line" />

        <h2>Select an individual App</h2>
        <div class="custom-select">
            <select v-model="selectedOption">
                <option disabled value="">Please select one</option>
                <option v-for="(data, index) in filterHeading(app)" :value="data['App name']" :key="index">
                    {{ data['App name'] }}
                </option>
            </select>
        </div>
        <h2>Data privacy and security concerns</h2>
        <AppDetails
            :appName="selectedOption"
            :appImage="getAppImage(app, selectedOption)"
            :appUrl="getAppUrl(app, selectedOption)"></AppDetails>
        <SphereFills
            :issues="getIssues(app, selectedOption)"
            :spherePrivacyColor="getColorForPrivacy(app, selectedOption)"
            :sphereSecurityColor="getColorForSecurity(app, selectedOption)"></SphereFills>
        <div class="qna-block">
            <p class="category">Security Questions</p>
            <hr />
            <div class="question">Can the device be controlled remotely?</div>
            <div class="answer">{{ getQuestion1(app, selectedOption) }}</div>
            <div class="question">Can harmful code be executed remotely?</div>
            <div class="answer">{{ getQuestion2(app, selectedOption) }}</div>
            <div class="question">Can a third party intercept the application’s communication?</div>
            <div class="answer">{{ getQuestion3(app, selectedOption) }}</div>
            <div class="question">Can a third party update this legitimate app with a malicious one?</div>
            <div class="answer">{{ getQuestion4(app, selectedOption) }}</div>
            <div class="question">Which phone hardware(s) can be misused from this app?</div>
            <div class="answer">{{ getQuestion6(app, selectedOption) }}</div>
            <p class="category">Privacy Question</p>
            <hr />
            <div class="question">Is data collected by third party?</div>
            <div class="answer">{{ getQuestion5(app, selectedOption) }}</div>
        </div>
    </div>
</template>

<script setup>
    // Added changes of Linnet after holidays
    import { onMounted, ref } from 'vue';
    import axios from 'axios';

    import BlockDisplay from './components/BlockDisplay.vue';
    import SphereFills from './components/SphereFills.vue';
    import AppDetails from './components/AppDetails.vue';

    // Define a reactive value for the meter

    let appData = ref([]);
    let selectedOption = ref('7 Cups: Therapy & Support');

    onMounted(async () => {
        const data = await axios.get('appData50.json');
        appData.value = data.data;
    });

    // Data object has heading so we don't want to show this in options.
    function filterHeading(app) {
        return app.filter((app) => app['App name'] !== '');
    }

    function getQuestion1(app, questionForApp) {
        const data = app.filter((appData) => {
            return appData['App name'] === questionForApp;
        });

        if (data[0] && data[0]['Can device be controlled remotely?'] === null) {
            return 'Unknown';
        } else {
            return data[0] && data[0]['Can device be controlled remotely?'];
        }
    }
    function getQuestion2(app, questionForApp) {
        const data = app.filter((appData) => {
            return appData['App name'] === questionForApp;
        });

        if (data[0] && data[0]['Can harmful code be executed remotely?'] === null) {
            return 'Unknown';
        } else {
            return data[0] && data[0]['Can harmful code be executed remotely?'];
        }
    }
    function getQuestion3(app, questionForApp) {
        const data = app.filter((appData) => {
            return appData['App name'] === questionForApp;
        });

        if (data[0] && data[0]['Can third party intercept application communication?'] === null) {
            return 'Unknown';
        } else {
            return data[0] && data[0]['Can third party intercept application communication?'];
        }
    }
    function getQuestion4(app, questionForApp) {
        const data = app.filter((appData) => {
            return appData['App name'] === questionForApp;
        });

        if (data[0] && data[0]['Can third party update a ligitimate app with a malicious one?'] === null) {
            return 'Unknown';
        } else {
            return data[0] && data[0]['Can third party update a ligitimate app with a malicious one?'];
        }
    }
    function getQuestion5(app, questionForApp) {
        const data = app.filter((appData) => {
            return appData['App name'] === questionForApp;
        });

        if (data[0] && data[0]['Is data collected by third party?*'] === null) {
            return 'Unknown';
        } else {
            return data[0] && data[0]['Is data collected by third party?*'];
        }
    }
    function getQuestion6(app, questionForApp) {
        const data = app.filter((appData) => {
            return appData['App name'] === questionForApp;
        });

        if (data[0] && data[0]['Which phone hardware(s) can be misued from app?*'] === null) {
            return 'Unknown';
        } else {
            return data[0] && data[0]['Which phone hardware(s) can be misued from app?*'];
        }
    }

    function getTotalIssues(app) {
        let totalIssues = 0;
        app.forEach((data) => {
            if (data && data['Can device be controlled remotely?'] !== null) {
                totalIssues++;
            }
            if (data && data['Can harmful code be executed remotely?'] !== null) {
                totalIssues++;
            }
            if (data && data['Can third party intercept application communication?'] !== null) {
                totalIssues++;
            }
            if (data && data['Can third party update a ligitimate app with a malicious one?'] !== null) {
                totalIssues++;
            }
            if (data && data['Is data collected by third party?*'] !== null) {
                totalIssues++;
            }
            if (data && data['Which phone hardware(s) can be misued from app?*'] !== null) {
                totalIssues++;
            }
        });
        return totalIssues;
    }

    function getIssues(app, questionForApp) {
        let totalNotNull = 0;

        const data = app.filter((appData) => {
            return appData['App name'] === questionForApp;
        });

        if (data[0] && data[0]['Can device be controlled remotely?'] !== null) {
            totalNotNull++;
        }
        if (data[0] && data[0]['Can harmful code be executed remotely?'] !== null) {
            totalNotNull++;
        }
        if (data[0] && data[0]['Can third party intercept application communication?'] !== null) {
            totalNotNull++;
        }
        if (data[0] && data[0]['Can third party update a ligitimate app with a malicious one?'] !== null) {
            totalNotNull++;
        }

        if (data[0] && data[0]['Which phone hardware(s) can be misued from app?*'] !== null) {
            totalNotNull++;
        }
        console.debug(data[0]);
        console.debug('Total answers', totalNotNull);
        // Total questions are six
        return totalNotNull * 50;
    }

    function getColorForPrivacy(app, questionForApp) {
        const data = app.filter((appData) => {
            return appData['App name'] === questionForApp;
        });

        // Questions are addressed and data
        if (data[0] && data[0]['Is data collected by third party?*'] !== null) {
            return '#FF033E';
        }
        if (data[0] && data[0]['Is data collected by third party?*'] === null) {
            return '#899499';
        }
        return '#32de84';
    }

    function getColorForSecurity(app, questionForApp) {
        let unknownValue;
        let notUsedValue = 1;

        let singleConcernForSecurity;
        const data = app.filter((appData) => {
            return appData['App name'] === questionForApp;
        });

        // Finding insufficient data
        data.forEach((app) => {
            // Identifying insufficient data
            const unknowns = Object.keys(app).filter((key) => {
                return app[key] === null;
            });
            unknownValue = unknowns.length;
        });
        // These not security concerns
        if (data[0] && data[0]['Is data collected by third party?*'] === null) notUsedValue++;

        const inSufficientCalculation = unknownValue - notUsedValue;

        // Total security question are 5
        if (5 === inSufficientCalculation) return '#899499';

        notUsedValue = 0;

        // Finding a single concern

        data.forEach((app) => {
            // Identifying insufficient data
            const singleConcern = Object.keys(app).filter((key) => {
                return (app[key] === 'Yes') | (app[key] === null);
            });
            singleConcernForSecurity = singleConcern.length;
        });

        const singleConcernCalculation = singleConcernForSecurity - notUsedValue;
        if (singleConcernCalculation > 0) return '#FF033E';

        return '#32de84';
    }

    function getAppImage(app, appData) {
        const data = app.filter((thisApp) => {
            return thisApp['App name'] === appData;
        });
        return data[0]['url'];
    }

    function getAppUrl(app, appData) {
        const data = app.filter((thisApp) => {
            return thisApp['App name'] === appData;
        });
        return data[0]['playstore'];
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .blocks {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        flex-wrap: nowrap;
        margin-bottom: 5%;
    }
    .header {
        background: rgb(95, 95, 95);
        margin-bottom: 2em;
        padding-left: 2em;
        height: 4.5em;
    }
    .title {
        text-align: left;
        background: rgb(95, 95, 95);
        color: white;
        padding-top: 1em;
    }
    .qna-block {
        width: 90%;
        margin: auto;
    }
    .question {
        font-size: 1.5em;
        text-align: left;
    }
    .category {
        font-style: italic;
        font-size: 1.6em;
        text-align: left;
        color: rgb(125, 125, 125);
    }
    .answer {
        font-size: 1.2em;
        text-align: left;
        margin: 5px;
        color: #68878a;
    }

    .custom-select {
        min-width: 350px;
        position: relative;
        margin-bottom: 2em;
    }

    select {
        appearance: none;
        /* safari */
        -webkit-appearance: none;
        /* other styles for aesthetics */
        width: 80%;
        font-size: 1.15rem;
        padding: 0.675em 6em 0.675em 1em;
        background-color: #fff;
        border: 1px solid #caced1;
        border-radius: 0.25rem;
        color: #000;
        cursor: pointer;
    }

    .custom-select::before,
    .custom-select::after {
        --size: 0.3rem;
        position: absolute;
        content: '';
        right: 9rem;
        pointer-events: none;
    }

    .custom-select::before {
        border-left: var(--size) solid transparent;
        border-right: var(--size) solid transparent;
        border-bottom: var(--size) solid black;
        top: 40%;
    }

    .custom-select::after {
        border-left: var(--size) solid transparent;
        border-right: var(--size) solid transparent;
        border-top: var(--size) solid black;
        top: 55%;
    }

    .heading {
        font-size: 1.3em;
    }
    .line {
        width: 90%;
        height: 2px;
        margin-bottom: 4em;
    }
    hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }
</style>
