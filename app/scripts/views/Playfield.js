Pong.PlayfieldView = Ember.View.extend({
    classNames: ['playfield'],
    tagName: 'canvas',

    ctx: null,

    getContext: function () {
        return this.get('element').getContext('2d');
    },

    didInsertElement: function () {
        console.log("elementInserted");
        this.ctx = this.getContext();

        // do canvas stuff here.
    }
});
