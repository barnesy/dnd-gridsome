<template>
  <div class="card">
    <div class="card--content">
      <p class="hed">{{monster.name}}</p>
      <ul>
        <li>name: {{monster.name}} ({{monster.size}})</li>
        <li>challenge rating: {{monster.challenge_rating}} - ({{monster.xp}} XP)</li>
        <li v-for="action in monster.actions">
          <strong>{{action.name}}: </strong>
          <span v-for="damage in action.damage">{{damage.damage_type.index}}: {{damage.damage_dice}}</span>
        </li>
        <li>alignment: {{monster.alignment}}</li>
        <li>armor class: {{monster.armor_class}}</li>
        <li>strength: {{monster.strength}}</li>
        <li>dexterity: {{monster.dexterity}}</li>
        <li>constitution: {{monster.constitution}}</li>
        <li>intelligence: {{monster.intelligence}}</li>
        <li>wisdom: {{monster.wisdom}}</li>
        <li>charisma: {{monster.charisma}}</li>
        <li v-for="(value, key) in monster.senses">{{key}} : {{value}}</li>
        <li>immunities: {{monster.damage_immunities}}</li>
        <li>resistances: {{monster.damage_resistances}}</li>
        <li>vulnerabilities: {{monster.damage_vulnerabilities}}</li>
        <li>hit dice: {{monster.hit_dice}}</li>
        <li>hit points: {{monster.hit_points}}</li>
        <li>languages: {{monster.languages}}</li>
        <li v-if="monster.subtype">subtype: {{monster.subtype}}</li>
        <li>type: {{monster.type}}</li>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data: function () {
    return {
      monster: {}
    }
  },
  props: {
    monsterInfo: {}
  },
  methods: {

  },
  mounted () {
    this.monster = this.monsterInfo
  }
}
</script>

<style scoped>

.hed {
  font-family: 'Hammersmith One', sans-serif;
}

ul {
  list-style: none;
  padding: 0;
}

</style>
