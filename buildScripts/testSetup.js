// this file isnt transpiled, so must use commomJS and es5

// register babel to transpile before our tests run
require("babel-register");

// disable webpack features that mocah doesnt understand
require.extensions[".css"] = function() {};
