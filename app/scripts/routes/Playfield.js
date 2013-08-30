Pong.PlayfieldRoute = Ember.Route.extend({
    model : function () {
        return Pong.currentPlayers.findall();
    },
    setupController: function (controller, model) {
        controller.set('model', model);
    },
    renderTemplate: function () {
        this.render();
    }
});
