Pong.Player = Ember.Object.extend({
    name: null,
    score: null,
    positionTop: 0,
    positionLeft: 0
});

Pong.Players = Ember.Object.extend({
    players: [],
    findall: function () {
        return this.players;
    },
    addNewPlayer: function (data) {
        if (this.players.length === 2) {
            return;
        }

        this.players.push(Pong.Player.create(data));
    }
});

Pong.currentPlayers = Pong.Players.create();

Pong.currentPlayers.players.push(Pong.Player.create({
    name: 'Player 1',
    score: 0,
    positionTop: 0,
    positionLeft: 0
}));
