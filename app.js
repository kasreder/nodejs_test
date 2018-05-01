console.log("hello nodejs");
var steem = require("steem")
steem.api.setOptions({url: 'https://api.steemit.com'});
steem.api.getAccounts(['kview'], function(err, response){
  console.log(err, response);
});

steem.api.getState('/trends/funny', function(err, result){console.log(err, result);
});
