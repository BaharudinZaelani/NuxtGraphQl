<template>
    <div class="card">
        <div class="card-body">
            <h1>Table Pokemon</h1>
            <table cellpadding="10" cellspacing="0">
                <tr>
                    <th v-for="(header, index) in data.headers" :key="index">{{ header.label }}</th>
                </tr>
                <!-- <tr>
                    <td>xx</td>
                    <td>xx</td>
                    <td>xx</td>
                    <td>xx</td>
                </tr> -->
            </table>
        </div>
    </div>
</template>
<style scoped>
    .card {
        display: flex; 
        justify-content: center; 
        width: 100%;
        align-items: center;
    }
    .card-body {
        width: 50%;
        border-radius: 4px;
        box-shadow: 0 0 10px 0px rgba(128, 128, 128, 0.226);
        padding: 12px;
        margin-top: 12px;
    }
    table {
        width: 100% !important;
        border-left: 1px solid rgba(128, 128, 128, 0.226) !important;
    }
    th {
        background: rgb(214, 214, 214);
    }
    th, td {
        border-right: 1px solid rgba(128, 128, 128, 0.226) !important;
        text-align: start !important;
    }
</style>
<script>
import { Component, Prop, Vue } from "nuxt-property-decorator"
@Component
export default class PokemonTable extends Vue {
    @Prop({required: true}) url
    @Prop({required: true}) query
    @Prop({default: ""}) variable
    data = {}

    created() {
        this.data = {
            headers: [
                {label: "ID"},
                {label: "Name"},
                {label: "Height"},
                {label: "Order"}
            ],
            data: [

            ]
        }
        this.ftechData()
    }

    async ftechData() {
        await this.$apollo.query({
            query: this.query, 
            variables: this.variable
        }).then((data) => {
            console.log(data)
        }).catch(err => {
            alert("Error Fetched..! see console")
            console.log(err)
        })
    }
}
</script>