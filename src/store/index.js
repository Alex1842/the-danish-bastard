import Vue from 'vue';
import Vuex from 'vuex';
import { handleApiCall } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        deck: {
            id: null,
            remaining: 52
        },
        error: null,
        drawnCards: []

    },
    mutations: {
        setDeckId(state, deck) {
            state.deck.id = deck.deck_id;
        },
        setDeckRemaining(state, remaining) {
            state.deck.remaining = remaining;
        },
        setError(state, error) {
            state.error = error;
        },
        getCard(state, card) {
            state.drawnCards.push(card.cards.map(card => card.code).toString());
        },
        discard(state, card) {
            state.discardPile.push(card);
        },
    },
    actions: {
        fetchDeck({ commit }) {
            return handleApiCall(
                commit,
                'setDeckId', {
                    url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
                }
            );
        },
        drawCard({ commit, state }) {
            return handleApiCall(
                commit,
                'getCard', {
                    url: `https://deckofcardsapi.com/api/deck/${state.deck.id}/draw/?count=1`,
                },
                (data) => {
                    console.log(data.remaining)
                    commit('setDeckRemaining', data.remaining);
                }
            );
        },
        discardCard({ commit, state }, cards) {
            return handleApiCall(
                commit,
                'discard', {
                    url: `https://www.deckofcardsapi.com/api/deck/${state.deck.id}/pile/discardPile/add/?cards=${cards}`,
                }
            );
        },
    },
    getters: {
        deckId: state => state.deck.id,
        deckRemainingCards: state => state.deck.remaining,
        error: state => state.error,
    },
});