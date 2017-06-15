// define toggles 
var toggles = {foo: true, bar: false};
 
// load them into the module 
var featureToggles = require('feature-toggles');
featureToggles.load(toggles);
 
// check if a feature is enabled 
if (featureToggles.isFeatureEnabled('foo')) {
    console.log('enable foo');
}