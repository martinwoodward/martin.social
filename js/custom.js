
/* Template Name   : Treelink, mobile page for links.
* Author           : Jorge Perez
* Version          : 1.0.2
* Updated          : Nov 2022
* File Description : Main .js file of the template   */


! function($) {
    "use strict";

    var Treelink = function() {};

    //PreLoader
    Treelink.prototype.initPreLoader = function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    },

    Treelink.prototype.init = function() {
        this.initPreLoader();
    },
    //init
    $.Treelink = new Treelink, $.Treelink.Constructor = Treelink
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Treelink.init();
}(window.jQuery);