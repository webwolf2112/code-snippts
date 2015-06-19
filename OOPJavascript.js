(function($) {

    var App = {

        $header: $(".header"),
        $scrolled: undefined,
        $prevScrolled: undefined,
        $this: $(window),

        init: function() {
            App.setScrollHandler();
        },

        setScrollHandler: function() {
            $(window).on("scroll", function () {
                $scrolled = App.evalScrollPosition() ? true : false;

                if ($scrolled != $prevScrolled) {
                    App.updateHeader();
                    $prevScrolled = $scrolled;
                };
            });
        },

        updateHeader: function() {
            if (App.evalScrollPosition()) {
            $header.addClass("scroll");

            $(".header").css("top", "-77px");

            
            $(".header").animate({
                top: 0
            }, 500);

            } else {
                $header.removeClass("scroll");
            }
        },

        evalScrollPosition: function() {
            ($this.scrollTop() > 77) ? return true : return false;
        }


        $(function() {
            App.init();
        });


    }

});
