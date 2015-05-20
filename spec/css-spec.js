var jsdom = require("jsdom");
var domify = require("component-domify");

global.document = jsdom.jsdom();
global.window = global.document.parentWindow;

var css = require("..");

global.self = global.window;

describe(".css()", function() {

  it("sets/gets a value", function() {

    var span = domify('<span>Hello World</span>');

    expect(css(span, "display", "none")).toBe("none");

    expect(span.style.display).toBe("none");
    expect(css(span, "display")).toBe("none");

  });

  it("removes a value", function() {

    var span = domify('<span>Hello World</span>');

    expect(css(span, "display", "none")).toBe("none");
    css(span, "display", null);
    expect(css(span, "display")).toBeFalsy();

    expect(css(span, "display", "none")).toBe("none");
    css(span, "display", undefined);
    expect(css(span, "display")).toBeFalsy();

  });

  describe("with an object as value", function() {

    it("sets/gets a value", function() {

      var span = domify('<span>Hello World</span>');

      expect(css(span, { display: "none" })).toEqual({ display: "none" });

      expect(span.style.display).toBe("none");
      expect(css(span, "display")).toBe("none");

    });

  });

});
