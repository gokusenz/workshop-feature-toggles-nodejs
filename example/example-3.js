var toggles = {
    foo: function() {
        var date = new Date();
        return date.getDate() > 16;
    }
}

var featureToggles = require('feature-toggles');
featureToggles.load(toggles);

if (featureToggles.isFeatureEnabled('foo')) {
    console.log('enable foo');
}