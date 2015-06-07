var toCamelCase = require('to-camel-case');
var hasRemovePropertyInStyle = typeof document !== "undefined" && "removeProperty" in document.createElement("a").style;

/**
 * Gets/Sets a DOM element property.
 *
 * @param  Object        element A DOM element.
 * @param  String|Object name    The name of a property or an object of values to set.
 * @param  String        value   The value of the property to set, or none to get the current
 *                               property value.
 * @return String                The current/new property value.
 */
function css(element, name, value) {
  var name;
  if (arguments.length === 3) {
    name = toCamelCase((name === 'float') ? 'cssFloat' : name);
    if (value) {
      element.style[name] = value;
      return value;
    }
    if (hasRemovePropertyInStyle) {
      element.style.removeProperty(name);
    } else {
      element.style[name] = "";
    }
    return value;
  }
  if (typeof name === "string") {
    name = toCamelCase((name === 'float') ? 'cssFloat' : name);
    return element.style[name];
  }

  var style = name;
  for (name in style) {
    css(element, name, style[name]);
  }
  return style;
}

module.exports = css;
