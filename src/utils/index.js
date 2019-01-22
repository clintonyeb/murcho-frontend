/* eslint-disable */

export const MESSAGE_TYPES = Object.freeze({
  info: 0,
  warning: 1,
  error: 2
})

export const COLORS = Object.freeze({
  blue: 0,
  green: 1,
  yellow: 2,
  purple: 3,
  red: 4
})

if (typeof String.prototype.trimLeft !== 'function') {
  String.prototype.trimLeft = function () {
    return this.replace(/^\s+/, '')
  };
}
if (typeof String.prototype.trimRight !== 'function') {
  String.prototype.trimRight = function () {
    return this.replace(/\s+$/, '')
  };
}
if (typeof Array.prototype.map !== 'function') {
  Array.prototype.map = function (callback, thisArg) {
    for (var i = 0, n = this.length, a = []; i < n; i++) {
      if (i in this) a[i] = callback.call(thisArg, this[i])
    }
    return a
  };
}

function getCookies() {
  var c = document.cookie;
  var v = 0;
  var cookies = {}
  if (document.cookie.match(/^\s*\$Version=(?:"1"|1);\s*(.*)/)) {
    c = RegExp.$1
    v = 1
  }
  if (v === 0) {
    c.split(/[,;]/).map(function (cookie) {
      var parts = cookie.split(/=/, 2);


      var name = decodeURIComponent(parts[0].trimLeft());


      var value = parts.length > 1 ? decodeURIComponent(parts[1].trimRight()) : null
      cookies[name] = value
    })
  } else {
    c.match(/(?:^|\s+)([!#$%&'*+\-.0-9A-Z^`a-z|~]+)=([!#$%&'*+\-.0-9A-Z^`a-z|~]*|"(?:[\x20-\x7E\x80\xFF]|\\[\x00-\x7F])*")(?=\s*[,;]|$)/g).map(function ($0, $1) {
      var name = $0;


      var value = $1.charAt(0) === '"' ?
        $1.substr(1, -1).replace(/\\(.)/g, '$1') :
        $1
      cookies[name] = value
    })
  }
  return cookies
}

export const getCookie = function getCookie(name) {
  return getCookies()[name]
}

/* eslint-enable */
