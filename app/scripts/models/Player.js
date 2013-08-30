Pong.Player = Ember.Object.extend({
    name: null,
    score: null,
    positionTop: 0,
    positionLeft: 0
});

Pong.Players = Ember.Object.extend({
    players: [],
    paddle: null,
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


Leap.loop({}, function(frame) {
    var leftHand, rightHand, hand;

    for (var i = 0; i < frame.hands.length; i++) {
        hand = frame.hands[i];
        if (!leftHand) {
            leftHand = hand;
        }
        if (!rightHand) {
            rightHand = hand;
        }
        if (hand.palmPosition[0] > rightHand.palmPosition[0]) {
            rightHand = hand;
        }
        if (hand.palmPosition[0] < leftHand.palmPosition[0]) {
            leftHand = hand;
        }
    }

    if (leftHand && rightHand && leftHand !== rightHand) {
        console.log(~~leftHand.palmPosition[1], ~~rightHand.palmPosition[1]);
    }
});
