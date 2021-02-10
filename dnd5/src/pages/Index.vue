<template>
  <Layout>

    <div class="card-group pattern">
      <div v-for="monster in $page.monsters" class="card">
        <div class="card--content">
          <p class="hed">{{monster.name}}</p>
          <ul>
            <li>{{monster.alignment}}</li>
            <li>{{monster.hit_dice}}</li>
            <li>{{monster.hit_points}}</li>
            <li>{{monster.size}}</li>
            <li v-for="(value, key) in monster.senses">{{key}} : {{value}}</li>
          </ul>
        </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
  query {
    monsters (sort: _ID_ASC, limit: -1) {
      name
      alignment
      hit_dice
      hit_points
      size
      senses {
        darkvision
        passive_perception
      }
    }
  }
</page-query>

<script>

</script>

<style>

</style>
