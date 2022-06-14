var s1 = '2022-5-26';
s1 = new Date(s1.replace(/-/g, "/"));
s2 = new Date();
var days = s2.getTime() - s1.getTime();
var time = parseInt(days / (1000 * 60 * 60 * 24));
document.getElementById('time').innerHTML = "在一起已经" + '<span>' + time + '</span>' + "天";
window.addEventListener("load", function() {
    var addEventListener = 'addEventListener';
    var elems = document.getElementsByClassName('img');
    for (var i = 0; i < elems.length;) {
        (function(elem, lastClientX, pushed) {
            elem[addEventListener]('mousedown', function(e) {
                pushed = 1;
                lastClientX = e.clientX;
                e.preventDefault();
                e.stopPropagation()
            }, 0);
            window[addEventListener]('mousemove', function(e) {
                if (pushed) {
                    elem.scrollLeft -= (-lastClientX + (lastClientX = e.clientX))
                }
            }, 0);
            window[addEventListener]('mouseup', function() {
                pushed = 0
            }, 0)
        })(elems[i++])
    }
}, 0);
window.addEventListener("load", function() {
    var addEventListener = 'addEventListener';
    var elemd = document.getElementsByClassName('text-big');
    for (var i = 0; i < elemd.length;) {
        (function(elem, lastClientY, pushed) {
            elem[addEventListener]('mousedown', function(e) {
                pushed = 1;
                lastClientY = e.clientY;
                e.preventDefault();
                e.stopPropagation()
            }, 0);
            window[addEventListener]('mousemove', function(e) {
                if (pushed) {
                    elem.scrollTop -= (-lastClientY + (lastClientY = e.clientY))
                }
            }, 0);
            window[addEventListener]('mouseup', function() {
                pushed = 0
            }, 0)
        })(elemd[i++])
    }
}, 0);
$(function() {
    var _width = $(window).width();
    if (_width < 500) {
        $(".a").click(function() {
            $('html').animate({
                scrollTop: '0'
            }, 600)
        });
        $(".b").click(function() {
            $('html').animate({
                scrollTop: '1000'
            }, 600)
        });
        $(".c").click(function() {
            $('html').animate({
                scrollTop: '1720'
            }, 600)
        })
    } else {
        $(".a").click(function() {
            $('html').animate({
                scrollTop: '0'
            }, 600)
        });
        $(".b").click(function() {
            $('html').animate({
                scrollTop: '1000'
            }, 600)
        });
        $(".c").click(function() {
            $('html').animate({
                scrollTop: '2122'
            }, 600)
        })
    }
});