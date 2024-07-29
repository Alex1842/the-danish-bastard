<template>
  <div id="deck" @click="drawCard">
    <div v-if="error">Error: {{ error }}</div>
    <div v-else>
      <div id="deckCounter">{{ deckRemainingCards }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "DeckOfCards",
  computed: {
    ...mapGetters(["deckRemainingCards"]),
    ...mapState(["deck", "error"]),
  },
  created() {
    this.fetchDeck();
  },
  methods: {
    ...mapActions(["fetchDeck", "drawCard"]),
  },
};
</script>

<style>
#deck {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: url(https://www.deckofcardsapi.com/static/img/back.png);
  width: 226px;
  height: 314px;
  cursor: pointer;
  user-select: none;
}
#deckCounter {
  position: absolute;
  left: 50%;
  background: red;
  transform: translateX(-50%);
  bottom: 20px;
  padding: 10px;
  border-radius: 50px;
  color: yellow;
  font-weight: 600;
  font-size: larger;
}
h1 {
  font-size: 24px;
}
pre {
  background-color: #f5f5f5;
  padding: 10px;
}
</style>
