<template>
  <v-list-item class="mb-0 justify-space-between pl-3">
    <v-list-item-avatar>
      <v-img
        :src="
          require('@/assets/download.png')"
      />
    </v-list-item-avatar>

    <v-list-item-content class="">
      <v-list-item-title class="text-h3">
        <strong class="mr-1 blue--text text--lighten-2">HERB</strong>
        <strong class="primary--text text--lighten-2">ALYSSA</strong>

        <!-- <strong class="primary--text">ALYSSA</strong> -->
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawerHeader',

    computed: { version: get('app/version') },
  }
</script>
