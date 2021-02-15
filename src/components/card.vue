<template>
  <div class="card">
    <div class="card--featured">
      <BaseStats :monsterInfo="monsterInfo" />
    </div>
    <div class="card--content">
      <p class="hed">{{monster.name}}</p>
      <p>
        {{monster.size}} {{monster.type}} ({{monster.alignment}})<br/>
        {{monster.subtype}}
      </p>


      <p class="center"><strong>Hit Dice</strong></p>
      <div class="dice">
        <div class="dice--images">
          <img v-for="index in amountOfDice(monster.hit_dice)" alt=" "
             :src="diceImageUrl(monster.hit_dice)" />
        </div>
      </div>

      <p class="center"><strong>Actions</strong></p>

      <div class="actions">
        <div class="dices" v-for="action in monster.actions">
          <div v-for="damage in action.damage" class="dice dice--small">
            <div class="dice--images">
              <img v-for="index in amountOfDice(damage.damage_dice)"
                   :src="diceImageUrl(damage.damage_dice)" />
            </div>
            <p class="dice--roll-type">
              {{action.name}} ({{damage.damage_type.index}})</p>
          </div>
        </div>
      </div>

      <ul>

        <!-- <li v-if="monster.damage_immunities">immunities: {{monster.damage_immunities}}</li>
        <li v-if="monster.damage_resistances">resistances: {{monster.damage_resistances}}</li>
        <li v-if="monster.damage_vulnerabilities">vulnerabilities: {{monster.damage_vulnerabilities}}</li> -->


      </ul>
      <p v-if="value" v-for="(value, key) in monster.senses">{{key}} : {{value}}</p>
      <p>languages: {{monster.languages}}</p>
    </div>
  </div>
</template>

<script>
import BaseStats from '~/components/BaseStats.vue'

export default {
  name: 'Card',
  components: {
    BaseStats
  },
  data: function () {
    return {
      monster: {}
    }
  },
  props: {
    monsterInfo: {}
  },
  mounted () {
    this.$nextTick(function () {
      this.monster = this.monsterInfo
    })
  },
  methods: {
    amountOfDice(diceString){
      if(!diceString) return ""
      return diceString.split("d")[0]
    },
    diceImageUrl(diceString) {
      let data = diceString.split("d")[1]
      if(!data) return ""
      return "/img/d"+data.split('+')[0]+".svg"
    }
  }
}
</script>

<style scoped>

.center {
  margin-top: 1rem;
}

.card {
  max-width: 38rem;
}

.card--content {
  overflow: hidden;
}

.card .hed {
  font-family: 'Hammersmith One', sans-serif;
  margin-bottom: 0;
}

.actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.dices {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dice {
  padding: 1rem;
}

.dice--images {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.dice--images img {
  width: 10rem;
  height: 10rem;
  margin: 1rem 0 0.5rem;
}

.dice--roll-type{
  color: grey;
  font-size: 1.1rem;
  width: 100%;
  text-align: center;
}

.dice--small {
  padding: 1rem;
}

.dice-small .dice--roll-type {
  font-size: 1rem;
}

.dice--small img {
  width: 5rem;
  height: 5rem;
}

ul {
  list-style: none;
  padding: 0;

}

p {
  line-height: 1.8;
  margin: 0;
}

</style>
