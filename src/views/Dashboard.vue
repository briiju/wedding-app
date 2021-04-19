<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        v-for="(item, i) in info"
        :key="i"
        :md="i !== 0 ? 6 : undefined"
        cols="12"
      >
        <material-card
          :heading="item.heading"
          color="blue"
        >
          <v-card-text>
            <v-sheet>
              <p
                v-for="(content, j) in item.contents"
                :key="j"
              >
                {{ content }}
              </p>
            </v-sheet>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  // import Vue from 'vue'

  // const lineSmooth = Vue.chartist.Interpolation.cardinal({
  //   tension: 0,
  // })

  export default {
    name: 'DashboardView',
    data: () => ({
      test: 'value',
      info: [
        {
          heading: 'Welcome!',
          contents: [
            'We are getting married on 10/22/2022!!! We hope to see you there!',
            'Check the sidebar for informational pages that will be updated periodically',
          ],
        },
      ],
    }),
    computed: {
    },
  }
</script>
