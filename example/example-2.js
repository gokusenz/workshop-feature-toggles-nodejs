const express = require('express')
const app = express()

var toggles = {
    moon: function(request) {
      return request.query.moon == "yes" ? true : false
    }
}

var featureToggles = require('feature-toggles');
featureToggles.load(toggles);


app.get('/', function (req, res) {
  if (featureToggles.isFeatureEnabled('moon', req)) {
    res.send("Hello Moon!")
  } else {
    res.send('Hello World!')
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})