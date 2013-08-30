Pong.PlayfieldView = Ember.View.extend({
    classNames: ['playfield'],
    tagName: 'canvas',

    getContext: function () {
        return this.get('element').getContext('2d');
    },

    didInsertElement: function () {
        console.log("elementInserted");
        var ctx = this.getContext();

        // do canvas stuff here.
    }
});
