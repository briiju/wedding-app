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
                >{{ content.head }}: </span>
                <span>{{ content.text }}</span>
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
          heading: 'Cherry Creek Golf Club',
          iframe: 'pb=!1m14!1m8!1m3!1d11733.051072524004!2d-83.0213674!3d42.6769759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ea41d6678affb4c!2sCherry%20Creek%20Golf%20Club!5e0!3m2!1sen!2sus!4v1618097262169!5m2!1sen!2sus',
        },
      ],
      info: [
        {
          heading: 'Info',
          contents: [
            {
              head: 'Ceremony',
              text: 'Starts at 5:00pm',
            },
            {
              head: 'Cocktail Hour',
              text: 'Starts at 5:30pm',
            },
            {
              head: 'Dinner',
              text: 'Starts at 6:30 pm (Serving at 7pm)',
            },
            {
              head: 'Skiddadle',
              text: 'at 11:30pm',
            },
          ],
        },
      ],
    }),
  }
</script>
