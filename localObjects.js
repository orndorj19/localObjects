// File: localObjects.js
// Author: orndorj19
// Description: A simple wrapper for localStorage to facilitate storage of json objects
// See https://github.com/orndorj19/localObjects for more information
/*

    Example use:

    localObjects.set("user", { name: "William", age: 25, interests: [ "music", "reading", "hiking" ] });
    var currentUser = localObjects.get("user");

*/

var localObjects = new (function() {
    var _internal = {};
    this.get = function(prop) {
        if (!_internal.hasOwnProperty(prop)) _internal[prop] = JSON.parse(localStorage.getItem(prop));
        return _internal[prop];
    }
    this.set = function(prop, val) {
        _internal[prop] = val;
        localStorage.setItem(prop, JSON.stringify(val));
    }
})();