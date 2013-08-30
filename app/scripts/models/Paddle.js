Pong.Paddle = Ember.Object.extend({
    x: 0,
    y: 0,
    height: 256,
    width: 64,
    color: 'white',
    rect: null,

    drawRect: function (ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
    },
    updatePosition: function (pos, ctx) {
        this.x = pos.x;
        this.y = pos.y;
    }
});
