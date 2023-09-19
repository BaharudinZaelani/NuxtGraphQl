<template>
    <div class="card">
        <div v-if="!fetched">Harap tunggu ...</div>
        <div v-if="fetched" class="card-body">
            <h1>Table Pokemon</h1>
            <span>Endpoint : https://beta.pokeapi.co/graphql/v1beta</span>
            <table cellpadding="10" cellspacing="0">
                <tr>
                    <th>NO</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Order</th>
                </tr>
                <tr v-for="(item, index) in data" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.height }}</td>
                    <td>{{ item.order }}</td>
                </tr>
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
    @Prop({required: true}) query
    @Prop({default: ""}) variable
    data = {}
    fetched = false

    created() {
        this.data = {}
        this.ftechData()
    }

    async ftechData() {
        await this.$apollo.query({
            query: this.query, 
            variables: this.variable
        }).then((data) => {
            this.data = data.data.pokemon_v2_pokemon
            this.fetched = true
        }).catch(err => {
            alert("Error Fetching")
            console.log(err)
        })
    }
}
</script>