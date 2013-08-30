Pong.Leap = Ember.Object.extend({
    leftPlayer: null,
    rightPlayer: null,
    hasPlayers: false,
    start : function () {
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

            if (!leftHand || rightHand || leftHand === rightHand) {
                this.set('hasPlayers', false);
                return;
            }

            if (this.leftPlayer) {
                this.leftPlayer.set('positionTop', leftHand.palmPosition[1]);
            }

            if (this.rightPlayer) {
                this.rightPlayer.set('positionTop', rightHand.palmPosition[1]);
            }
        });
    }
});
