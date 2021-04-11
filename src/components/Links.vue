<template>
  <v-container>
    <v-row align="center">
      <v-col
        v-for="(link, i) in links"
        :key="i"
        class="text-center"
        cols="6"
        md="auto"
      >
        <span />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Links',

    data: () => ({
      links: [
      ],
    }),
  }
</script>

<style lang="sass" scoped>
  a
    color: inherit !important
</style>
