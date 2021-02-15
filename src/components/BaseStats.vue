<template>

  <div class="base-stats" ref="baseStats">

    <div class="stat armor-class">
      <div class="num">{{monster.armor_class}}</div>
      <div class="desc">AC</div>
    </div>
    <div class="stat hit-points">
      <div class="num">{{monster.hit_points}}</div>
      <div class="desc">HP</div>
    </div>
    <div class="stat challenge">
      <div class="num">{{monster.challenge_rating}}</div>
      <div class="desc">({{monster.xp}} XP)</div>
    </div>

    <svg viewBox="0 0 300 300" height="300" width="300">

      <g transform="translate(150,150)" v-for="index in 30">
        <g v-for="(ability, side) in abilities">

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
  width: 100%;
  background: blue;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

.stat {
  position: absolute;
  color: white;
  font-size: 2.6rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
}

.stat .desc {
  font-size: 1rem;
}

.hit-points{
  left: 2rem;
  bottom: 2rem;
}

.armor-class{
  left: 2rem;
  top: 2rem;
}

.challenge {
  right: 2rem;
  top: 2rem;
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
