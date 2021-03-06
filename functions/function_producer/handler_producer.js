'use strict()';
var AWS = require('aws-sdk');
var sqs = new AWS.SQS(); 


module.exports.producer = async (event) => {


  let params = {
    MessageBody: "oi",
    QueueUrl: "http://0.0.0.0:9324/queue/cat_facts"
  };

  const data = {
    name: 'Paulo Vaz'
  }
  sqs.sendMessage(params, function(err, data) {
      if (err) {
          console.log('Error encountered sending a message: %s', err);
      } else {
          console.log('A message about a cat fact is sent to ' + params.QueueUrl);
      }
  }); 

  return {
    statusCode: 200,
    body: "Hello"
  };
};
