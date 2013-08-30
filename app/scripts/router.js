Pong.Router.map(function () {

    // playfield
    this.resource('playfield', function () {
        this.route('new');
        this.route('game');
        this.route('pause');
    });

    // score screen when game over
    this.resource('score');

    // set up the player
    this.resource('players', {'path': '/players'}, function () {
        this.route('add');
        this.route('list');
    });
});
