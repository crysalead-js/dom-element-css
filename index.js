var toCamelCase = require('to-camel-case');
var hasRemovePropertyInStyle = "removeProperty" in document.createElement("a").style;

/**
 * Gets/Sets a DOM element property.
 *
 * @param  Object element A DOM element.
 * @param  String name    The name of a property.
 * @param  String value   The value of the property to set, or none to get the current
 *                        property value.
 * @return String         The current/new property value.
 */
function css(element) {
  var name;
  if (arguments.length === 3) {
    name = toCamelCase((arguments[1] === 'float') ? 'cssFloat' : arguments[1]);
    var value = arguments[2];
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
  if (typeof arguments[1] === "string") {
    name = toCamelCase((arguments[1] === 'float') ? 'cssFloat' : arguments[1]);
    return element.style[name];
  }

  var style = arguments[1];
  for (name in style) {
    css(element, name, style[name]);
  }
  return style;
}

module.exports = css;
