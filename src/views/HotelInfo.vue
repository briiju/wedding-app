<template>
  <v-container
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
                <strong
                  v-if="content.boldEnd"
                >
                  {{ content.boldEnd }}
                </strong>
              </p>
            </v-sheet>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, i) in maps"
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
              <iframe
                :src="`https://www.google.com/maps/embed?${item.iframe}`"
                allowfullscreen
                frameborder="0"
                height="450"
                style="border:0"
                width="100%"
              />
            </v-sheet>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'VenueInfoView',

    data: () => ({
      maps: [
        {
          heading: 'Cambria Hotel Detroit-Shelby Township',
          iframe: 'pb=!1m18!1m12!1m3!1d295598.7203963494!2d-83.08533737311964!3d42.56485344002788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e791a6325f57%3A0xed91f3390248e9fc!2sCambria%20Hotel%20Detroit-Shelby%20Township!5e0!3m2!1sen!2sus!4v1618097809417!5m2!1sen!2sus',
        },
      ],
      info: [
        {
          heading: 'Info',
          contents: [
            {
              head: 'Complimentary Shuttle',
              text: 'to venue available',
            },
            {
              head: 'For Block Pricing',
              text: 'mention ',
              boldEnd: '"Mason and Bieszke Wedding"'
            },
          ],
        },
      ],
    }),
  }
</script>
