<template>
  <div>
    <div style="padding: 12px; border: 1px solid grey;">
      <span>Filtey BY:</span> <br>
      <input v-model="heightBy" type="number"> : Height _eq atau sama dengan <br>
      <input v-model="limit" type="number"> : Limit data yang ditampilkan <br>
      <button @click="submit()">
        Submit
      </button>
      <button v-if="fetchSubmit" @click="clear()">
        Clear
      </button>
    </div>

    <PokemonTable 
      v-if="fetchSubmit"
      :query="query" 
      :variable="variable"/>
  </div>
</template>
<script>
import { Vue, Component } from 'nuxt-property-decorator'
import PokemonTable from '../components/PokemonTable.vue'
import gql from 'graphql-tag'

@Component({
  components: {
    PokemonTable
  }
})
export default class Home extends Vue {
  query = ""
  variable = {}
  limit = 0
  heightBy = 0
  fetchSubmit = false

  submit() {

    // query data
    this.query = gql`
      query Pokemon_v2_pokemon($where: pokemon_v2_pokemon_bool_exp, $limit: Int) {
        pokemon_v2_pokemon(where: $where, limit: $limit) {
          height
          id
          name
          order
        }
      }
    `

    // filter data
    this.variable = {
      "where": {
        "height": {
          "_eq": parseInt(this.heightBy) 
        },
      },
      "limit": parseInt(this.limit)
    }
    
    this.fetchSubmit = true
  }

  clear() {
    this.fetchSubmit = false
  }
}
</script>