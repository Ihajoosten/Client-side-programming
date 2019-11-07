"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringUtility = exports.StringUtility = function () {
    function StringUtility() {
        _classCallCheck(this, StringUtility);
    }

    _createClass(StringUtility, null, [{
        key: "isEmpty",
        value: function isEmpty(value) {
            return !value || value.length === 0;
        }
    }, {
        key: "capitalize",
        value: function capitalize(word) {
            return word.charAt(0).toUpperCase();
        }
    }]);

    return StringUtility;
}();