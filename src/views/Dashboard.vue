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
                <span
                  class="blue--text text--darken-3"
                  style="font-size: large;font-weight: bold;"
                >{{ content.head }} </span>
                <span>{{ content.text }}</span>
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
            {
              head: 'We are getting married on 10/22/2022!!!',
              text: 'We hope to see you there!',
            },
            {
              head: 'Check the Sidebar',
              text: 'for informational pages that will be updated periodically',
            },
            {
              head: 'Don\'t Worry!',
              text: 'We did not send out save the dates or invites yet. Save the dates will be sent out about 12 months in advance.',
            },
          ],
        },
      ],
    }),
    computed: {
    },
  }
</script>
