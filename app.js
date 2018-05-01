console.log("hello nodejs");
var steem = require("steem")
steem.api.setOptions({url: 'https://api.steemit.com'});
/*steem.api.getAccounts(['kview'], function(err, response){
  console.log(err, response);
});

steem.api.getState('/trends/funny', function(err, result){console.log(err, result);
});

steem.api.getDiscussionsByBlog({"tag": "kview", "limit":3, "start_author":"leesol", "start_permlink":"0"}, function(err,result){
  console.log(err, result);
});*/

steem.api.getDiscussionsByTrending({"tag":"kr", "limit":10,"author":"smartbear"}, function(err, result){
  console.log(err, result);
})
