var     StickView = Backbone.View.extend({
                className: 'sticker',

                events: {
                        'click': 'stopBubbling',
                        'click .remove': 'removeStick',
                        'blur textarea': 'saveText'
                },

                template: _.template( $("#stick-template").html() ),

                render: function() {
                        this.setPosition();
                        this.$el.html(this.template());
                        this.makeItDraggable();
                        return this;
                },

                setPosition: function() {
                        var position = this.model.get('position');
                        this.$el.css({
                                left: position.x + 'px',
                                top: position.y + 'px'
                        });
                },

                makeItDraggable: function(){
                        var width = $('#sticker-board').width(),
                        height = $('#sticker-board').height();

                        this.$el.draggable({
                                drag: function(event, ui) {
                                        if (ui.position.left > width || ui.position.top > height) {
                                                this.$el.animate({opacity: 0.1}, 800, function  () {
                                                        this.removeStick();
                                                }.bind(this))
                                        }
                                }.bind(this)
                        }).css('position', 'absolute');
                },

                removeStick: function() {
                        this.model.destroy();
                        this.$el.remove();
                        return false;
                },

                saveText: function() {
                        var text = this.$el.find('textarea').val();
                        this.model.set('text', text);
                },

                stopBubbling: function() {
                        return false;
                }

        }),

        SticksView = Backbone.View.extend({
                initialize: function() {
                        this.collection = new Sticks();
                },

                events: {
                        'click': 'addStick'
                },

                addStick: function(e) {
                        var coors = this.getCoors(e),
                                stick = new Stick({position: coors}),
                                stickView = new StickView({model: stick});

                        this.collection.add(stick);
                        this.$el.append(stickView.render().el);

                },

                getCoors: function(e) {
                        return {
                                x: e.pageX,
                                y: e.pageY
                        };
                }

        });