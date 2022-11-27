<script setup>

const   characterName = ref(),
        player = ref(),
        species = ref(),
        gender = ref(),
        height = ref(),
        hair = ref(),
        eyes = ref(),
        age = ref(),
        build = ref(),
        notableFeatures = ref(),
        woundsThreshold = ref(),
        woundsCurrent = ref(),
        strainThreshold = ref(),
        strainCurrent = ref(),
        career = ref(),
        specializations = ref(),
        soakValue = ref(),
        rangedDefense = ref(),
        meleeDefense = ref()

</script>

<template>
    <div class="container-fluid text-center">

        <h1>{{$t("pages.swrpcharsheet.title")}}</h1>

        <div class="subtitle">
            <div class="icon republic i-fa6-brands:jedi-order" ></div>
            <span>{{$t("pages.swrpcharsheet.subtitle")}}</span>
            <div class="icon republic i-fa6-brands:jedi-order" ></div>
        </div>

        <button class="btn btn-primary" v-on:click="downloadPdf">Download PDF</button>

        <div class="container pt-3 md-x mt-5 border-top border-opacity-50 border-danger rounded">
            <form>
                <div class="row align-items-center">
                    <div class="col-auto">
                        <label id="charaHelpInline" for="characterName" class="col-form-label">{{$t("pages.swrpcharsheet.sheet.characterName")}}</label>
                    </div>
                    <div class="col">
                        <input v-model="characterName" type="text" id="characterName" class="form-control form-control-sm" aria-describedby="charaHelpInline" />
                    </div>
                    <div class="col-auto">
                        <label id="playerHelpInline" for="player" class="col-form-label">{{$t("pages.swrpcharsheet.sheet.player")}}</label>
                    </div>
                    <div class="col">
                        <input v-model="player" type="text" id="player" class="form-control form-control-sm" aria-describedby="playerHelpInline" />
                    </div>
                </div>

                <hr>

                <div class="row align-items-center">
                    <div class="col-1">
                        <label id="speciesHelpInline" for="species" class="col-form-label">{{$t("pages.swrpcharsheet.sheet.species")}}</label>
                    </div>
                    <div class="col">
                        <input v-model="species" type="text" id="species" class="form-control form-control-sm" aria-describedby="speciesHelpInline" />
                    </div>
                    <div class="col-1">
                        <label id="genderHelpInline" for="player" class="col-form-label">{{$t("pages.swrpcharsheet.sheet.gender")}}</label>
                    </div>
                    <div class="col">
                        <input v-model="gender" type="text" id="gender" class="form-control form-control-sm" aria-describedby="genderHelpInline" />
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-1">
                        <label id="heightHelpInline" for="height" class="col-form-label">{{$t("pages.swrpcharsheet.sheet.height")}}</label>
                    </div>
                    <div class="col">
                        <input v-model="height" type="text" id="height" class="form-control form-control-sm" aria-describedby="heightHelpInline" />
                    </div>
                    <div class="col-1">
                        <label id="hairHelpInline" for="hair" class="col-form-label">{{$t("pages.swrpcharsheet.sheet.hair")}}</label>
                    </div>
                    <div class="col">
                        <input v-model="hair" type="text" id="hair" class="form-control form-control-sm" aria-describedby="hairHelpInline" />
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-1">
                        <label id="eyesHelpInline" for="eyes" class="col-form-label">{{$t("pages.swrpcharsheet.sheet.eyes")}}</label>
                    </div>
                    <div class="col">
                        <input v-model="eyes" type="text" id="eyes" class="form-control form-control-sm" aria-describedby="eyesHelpInline" />
                    </div>
                    <div class="col-1">
                        <label id="ageHelpInline" for="age" class="col-form-label">{{$t("pages.swrpcharsheet.sheet.age")}}</label>
                    </div>
                    <div class="col">
                        <input v-model="age" type="text" id="age" class="form-control form-control-sm" aria-describedby="ageHelpInline" />
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-1">
                        <label id="buildHelpInline" for="build" class="col-form-label">{{$t("pages.swrpcharsheet.sheet.build")}}</label>
                    </div>
                    <div class="col">
                        <input v-model="build" type="text" id="build" class="form-control form-control-sm" aria-describedby="buildHelpInline" />
                    </div>
                </div>

                <div class="text-start mt-3">
                    <label id="notableFeaturesHelpInline" for="notableFeatures" class="form-label">{{$t("pages.swrpcharsheet.sheet.notableFeatures")}}</label>
    
                    <textarea v-model="notableFeatures" id="notableFeatures" class="form-control" rows="5"></textarea>
                </div>

                <div class="row align-items-center mt-3">
                    <div class="col">
                        <div class="attrBox pt-2">
                            <h5>{{$t("pages.swrpcharsheet.sheet.Wounds")}}</h5>
                            <div class="row align-items-center">
                                <div class="col">
                                    <input v-model="woundsThreshold" type="text" id="woundsThreshold">
                                    <label for="woundsThreshold">{{$t("pages.swrpcharsheet.sheet.Threshold")}}</label>
                                </div>
                                <div class="vr align-self-center"></div>
                                <div class="col">
                                    <input v-model="woundsCurrent" type="text" id="woundsCurrent">
                                    <label for="woundsCurrent">{{$t("pages.swrpcharsheet.sheet.Current")}}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="attrBox pt-2">
                            <h5>{{$t("pages.swrpcharsheet.sheet.Strain")}}</h5>
                            <div class="row align-items-center">
                                <div class="col">
                                    <input v-model="strainThreshold" type="text" id="strainThreshold">
                                    <label for="strainThreshold">{{$t("pages.swrpcharsheet.sheet.Threshold")}}</label>
                                </div>
                                <div class="vr align-self-center"></div>
                                <div class="col">
                                    <input v-model="strainCurrent" type="text" id="strainCurrent">
                                    <label for="strainCurrent">{{$t("pages.swrpcharsheet.sheet.Current")}}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col text-start">
                        <label id="careerHelpInline" for="career" class="form-label">{{$t("pages.swrpcharsheet.sheet.career")}}</label>
    
                        <textarea v-model="career" id="career" class="form-control" rows="5"></textarea>
                    </div>
                    <div class="col text-start">
                        <label id="specializationsHelpInline" for="specializations" class="form-label">{{$t("pages.swrpcharsheet.sheet.specializations")}}</label>
    
                        <textarea v-model="specializations" id="specializations" class="form-control" rows="5"></textarea>
                    </div>
                </div>

                <div class="row align-items-center mt-3">
                    <div class="col">
                        <div class="attrBox pt-2">
                            <h5>{{$t("pages.swrpcharsheet.sheet.SoakValue")}}</h5>
    
                            <textarea v-model="soakValue" id="soakValue" rows="3" ></textarea>
                        </div>
                    </div>

                    <div class="col">
                        <div class="attrBox pt-2">
                            <h5>{{$t("pages.swrpcharsheet.sheet.defense")}}</h5>
                            <div class="row align-items-center">
                                <div class="col">
                                    <input v-model="rangedDefense" type="text" id="rangedDefense">
                                    <label for="rangedDefense">{{$t("pages.swrpcharsheet.sheet.ranged")}}</label>
                                </div>
                                <div class="vr align-self-center"></div>
                                <div class="col">
                                    <input v-model="meleeDefense" type="text" id="meleeDefense">
                                    <label for="meleeDefense">{{$t("pages.swrpcharsheet.sheet.melee")}}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>

<style lang="scss" scoped>

    .form-control {
        background-color: rgba(0,0,0,0.5);
        border: none;
        color: white;

        &:focus {
            box-shadow: 0 0 0 0.25rem rgba(218, 18, 18, 0.25);
        }
    }

    form {
        page-break-before: always;
        page-break-after: always;
    }

    .attrBox {
        height: 150px;
        width: 300px;

        border-radius: 10% / 50%;
        border: 10px double rgba(0,0,0,0.3);

        background-color: gray;

        .vr {
            height: 50px;
            width: 1px;
            background-color: black;
        }

        input {
            width: 80px;
            height: 60px;
            text-align: center;
        }

        textarea {
            resize: none;
            text-align: center;
        }
    }

    @media print {
        * {
          color: black;  
        }

        textarea {
            resize: none;
            border-left: 1px solid black !important;
        }

        input[type="text"] {
            border-bottom: 1px solid black;
        }

        .attrBox {
            height: 150px;
            width: 200px;

            h5 {
                font-size: 22px;
            }

            input[type="text"] {
                width: 40px;
                height: 50px;
                border: none;
                color: black !important;
            }

            textarea {
                height: 70px;
                border: none !important;
            }

            label {
                background-color: white;
                padding: 2px;
                border-radius: 5px;
            }
        }
    }

    .subtitle {
        font-family: monospace;

        span {
            vertical-align: middle;
        }
    }

    .republic {
        color: red;
        font-size: 22px;
        width: 45px;
    }
</style>