"use strict";

function init() {
    var i = require("../dispatcher/dispatcher.js"),
        e = { hideAll: function(e) { i.dispatch({ webviewID: e, actionType: "LEFTVIEW_HIDEALL" }) }, clickRightHeader: function(e) { i.dispatch({ webviewID: e, actionType: "LEFTVIEW_CLICK_RIGHTHEADER" }) }, upShareStatus: function(e, t) { i.dispatch({ webviewID: e, show: t, actionType: "LEFTVIEW_UP_SHARESTATUS" }) }, clickMask: function(e) { i.dispatch({ webviewID: e, actionType: "LEFTVIEW_CLICK_MASK" }) } };
    _exports = e
}
var _exports;
init(), module.exports = _exports;
