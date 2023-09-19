<template>
    <div style="display: flex; justify-content: center; width: 100%; align-items-center">
        <table cellpadding="10" cellspacing="0" border="1" style="width: 50%;">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Hegiht</th>
                <th>Order</th>
            </tr>
        </table>
    </div>
</template>
<script>
import { Component, Prop, Vue } from "nuxt-property-decorator"
@Component
export default class PokemonTable extends Vue {
    @Prop({required: true}) url
    @Prop({required: true}) query
    @Prop({default: ""}) variable

    created() {
        this.ftechData()
    }

    async ftechData() {
        await this.$apollo.query({
            query: this.query, 
            variables: this.variable
        }).then((data) => {
            console.log(data)
        }).catch(err => {
            alert("Error.. see console")
            console.log(err)
        })
    }
}
</script>