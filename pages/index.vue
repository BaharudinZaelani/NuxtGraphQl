<template>
  <div>
    <PokemonTable 
      :url="url" 
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
  url = "https://bahardev.my.id"
  query = ""
  variable = {}
  created() {
    this.query = gql`
      query Pokemon_v2_ability_aggregate {
        pokemon_v2_pokemon {
          height
          id
          name
          order
        }
      }
    `
    this.variable = {
      "where": {
        "height": {
          "_neq": 5
        }
      }
    }
  }
}
</script>