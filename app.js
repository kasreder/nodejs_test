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
/*
steem.api.getDiscussionsByAuthorBeforeDate('lovehm1223','','2018-05-22T09:00:00',1, function(err, result){
  if (err){
    console.log(err)
  }else{
    for (i = 0; i < result.length; i++){
      title = result[i].title
      pending_payout_value1 = result[i].pending_payout_value
      console.log(title, pending_payout_value1)
      /*제목 일주일치보팅받은스달 pending_payout_value:일주일간 수익코인
  }
}
});*/

var query ={ "tag":"kr","limit": 10}
steem.api.getDiscussionsByTrending( query , function(err, result){
  if (err){
    console.log(err)
  }else{
    for (i = 0; i < result.length; i++){
      title = result[i].title
      pending_payout_value1 = result[i].pending_payout_value
      console.log(i,title, pending_payout_value1)
    }
  }
});
