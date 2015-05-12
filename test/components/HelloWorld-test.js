var React = require('react/addons');
var assert = require('assert');
var HelloWorld = require('../../js/components/HelloWorld.react');
var TestUtils = React.addons.TestUtils;

describe('Hello World', function() {

    before('render and locate element', function() {
        var renderedComponent = TestUtils.renderIntoDocument(
            <HelloWorld />
        );

        var pComponent = TestUtils.findRenderedDOMComponentWithTag( renderedComponent, 'p' );
        this.pElement = pComponent.getDOMNode();
    });

    it('should show hello world', function() {
        assert.equal(this.pElement.textContent, 'Hello World');
    });

});
