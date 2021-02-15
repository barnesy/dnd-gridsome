<template>
  <Layout>

    <div class="card-group pattern">
      <Card v-for="monster in $page.monsters" :monsterInfo="monster" :key="monster.index" />
    </div>

  </Layout>
</template>

<page-query>
  query {
    monsters (limit: 50, sort: _ID_ASC) {
      name
      alignment
      challenge_rating
      actions {
        name
        damage {
          damage_dice
          damage_type {
            index
          }
        }
        desc
      }
      armor_class
      charisma
      constitution
      damage_immunities
      damage_resistances
      damage_vulnerabilities
      dexterity
      hit_dice
      hit_points
      index
      intelligence
      languages
      senses {
        darkvision
        passive_perception
      }
      size
      speed {
        burrow
        climb
        fly
        hover
        swim
        walk
      }
      strength
      subtype
      type
      url
      wisdom
      xp
    }
  }
</page-query>

<script>
import Card from '~/components/card.vue'

export default {
  components: {
    Card
  }
}

</script>
