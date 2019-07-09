// https://www.jianshu.com/p/c8df431b7f89
// https://www.cnblogs.com/huangmin1992/p/8004990.html
// https://www.jb51.net/article/128527.htm
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
            // docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            // // docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);