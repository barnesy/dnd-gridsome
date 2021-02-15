<template>

  <div class="base-stats" ref="baseStats">

    <!-- <li>armor class: {{monster.armor_class}}
      <div class="bar" :style="{width: getWidth(monster.armor_class)}"></div>
    </li> -->

    <svg viewBox="0 0 380 380" height="380" width="380">

      <g transform="translate(190,190)" v-for="index in 50">
        <g v-for="(ability, side) in abilities">

          <circle style="fill:rgba(255,255,255,0.5)" :cx="getX(side, index)" :cy="getY(side, index)" r="1" />
          <line :x1="getX(side, index)" :y1="getY(side, index)" :x2="getX(side+1, index)" :y2="getY(side+1, index)" stroke="rgba(255,255,255,0.3)" />

          <g v-if="index == monster[abilities[side]] && abilities[side] == ability">
            <circle :cx="getX(side, index)" :cy="getY(side, index)" r="2" style="fill:rgba(255,255,255,1)" />
            <text text-anchor="middle" fill="white" :x="getX(side, index)" :y="-10 + getY(side, index)" class="number">{{monster[abilities[side]]}}</text>
            <text text-anchor="middle" fill="white" :x="getX(side, index)" :y="18 + getY(side, index)" class="ability">{{abilities[side]}}</text>
          </g>

        </g>
      </g>

    </svg>

  </div>

</template>

<script>

export default {
  name: 'BaseStats',
  data: function () {
    return {
      monster: {},
      abilities: ["strength", "constitution", "dexterity", "intelligence", "charisma", "wisdom"]
    }
  },
  props: {
    monsterInfo: {},
  },
  mounted () {
    this.$nextTick(function () {
      this.height = this.$refs.baseStats.clientHeight
      this.width = this.$refs.baseStats.clientWidth
      this.monster = this.monsterInfo
    })
  },
  methods: {
    getY(side, index) {
      return (index*(15/3))*Math.cos(side * 2 * Math.PI / 6)
    },
    getX(side, index) {
      return (index*(15/3))*Math.sin(side * 2 * Math.PI / 6)
    }
  }
}

</script>

<style scoped>

.base-stats {
  height: 38rem;
  width: 38rem;
  background: blue;
  display: block;
  position: relative;
}

.number {
  font-size: 2rem;
  font-weight: bold;
}

.ability {
  opacity: 0.6;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
}

</style>
