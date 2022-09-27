var express = require("express");
var request = require('request');
var bodyParser = require("body-parser");
var app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/", function(req, res) {
  var size = Object.keys(req.body).length;


  if (req.body.status) {console.log("\nSMS_DeliveryReport, Message TO %s FROM %d is in status - %j",req.body.destination, req.body.source, req.body.status);
  } else if (req.body.type == "inbound" && (req.body.body.includes("Nothing") || req.body.body.includes("nothing")) ) 
        //SMS_Reply_Successful_Initiation
        {var options = Yes_Init_SMS(req);
            //SMS Faile inititation and Voice messages
            }  else if (req.body.body == "10") {var options = Win_Voice_Messagae(req, options)} 
            else if ((req.body.body == "1") || (req.body.body == "2") || (req.body.body == "3") || (req.body.body == "4") || (req.body.body == "5") || (req.body.body == "7") || (req.body.body == "8") || (req.body.body == "9")) {var options = Lose_Voice_Messagae(req, options); Lose_SMS(req, options)
                } else if (req.body.body == "6") {var options = Rick_Roll(req, options)
                //Proxy message
                } else if (req.body.body.includes("Prxy")) {var options = Proxy_SMS(req, options) 
                //Help message
                } else if (req.body.body.includes("Help!")) {var options = Help_SMS(req, options)    
                //if (req.body.body == "Conference") {var options = Conf_init(req, options)} else
                } else {var options = No_Init_SMS(req, options)}
    console.log(req.body);
  return res.end();
  //return res.send(req.body);
});

var server = app.listen(8080, function() {
  console.log("Listening on port %s...", server.address().port);
});





function Yes_Init_SMS(req) {
  console.log("\nReply from from %s - They have initiated the test!", req.body.source);
  var options = {
    'method': 'POST',
    'url': 'https://api.wavecell.com/sms/v1/MehmetTest_5uU74_hq/single',
    'headers': {
      'Authorization': 'Bearer 9GzS5mOzSsxtgdlCRyhptgFHyEO4wym7VRSgCIrG8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "source": "+447307309631", "destination": req.body.source, "text": "You've started the test! - What's the magic number? (1 - 10)" })
  };
  request(options, function (error, response) {
    if (error)
      throw new Error(error);
    console.log(response.body);
  });
  return options;
}

function No_Init_SMS(req, options) {
  {
    console.log("\nMessage from from %s - They didn't initiate!", req.body.source);
    var options = {
      'method': 'POST',
      'url': 'https://api.wavecell.com/sms/v1/MehmetTest_5uU74_hq/single',
      'headers': {
        'Authorization': 'Bearer 9GzS5mOzSsxtgdlCRyhptgFHyEO4wym7VRSgCIrG8',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "source": "+447307309631", "destination": req.body.source, "text": "Answer me to begin - What does man love more than life, hate more than death or mortal strife; that which contented men desire; the poor have, the rich require; the miser spends, the spendthrift saves, and all men carry to their graves?" })
    };
    request(options, function (error, response) {
      if (error)
        throw new Error(error);
      console.log(response.body);
    });
  }
  return options;
}

function Rick_Roll(req, options) {
    {
      console.log("\nMessage from from %s - They got rolled...", req.body.source);
      var options = {
        'method': 'POST',
        'url': 'https://api.wavecell.com/sms/v1/MehmetTest_5uU74_hq/single',
        'headers': {
          'Authorization': 'Bearer 9GzS5mOzSsxtgdlCRyhptgFHyEO4wym7VRSgCIrG8',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "source": "+447307309631", "destination": req.body.source, "text": "https://bit.ly/3oBaS7u   click me..." })
      };
      request(options, function (error, response) {
        if (error)
          throw new Error(error);
        console.log(response.body);
      });
    }
    return options;
  }

function Conf_init(req, options) {
    {
      console.log("\nMessage from from %s - They didn't initiate!", req.body.source);
      var options = {
        'method': 'POST',
        'url': 'https://api.wavecell.com/sms/v1/MehmetTest_5uU74_hq/single',
        'headers': {
          'Authorization': 'Bearer 9GzS5mOzSsxtgdlCRyhptgFHyEO4wym7VRSgCIrG8',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "source": "+447307309631", "destination": req.body.source, "text": "Answer me to begin - What does man love more than life, hate more than death or mortal strife; that which contented men desire; the poor have, the rich require; the miser spends, the spendthrift saves, and all men carry to their graves?" })
      };
      request(options, function (error, response) {
        if (error)
          throw new Error(error);
        console.log(response.body);
      });
    }
    return options;
  }

function Lose_SMS(req, options) {
    {
      var options = {
        'method': 'POST',
        'url': 'https://api.wavecell.com/sms/v1/MehmetTest_5uU74_hq/single',
        'headers': {
          'Authorization': 'Bearer 9GzS5mOzSsxtgdlCRyhptgFHyEO4wym7VRSgCIrG8',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "source": "+447307309631", "destination": req.body.source, "text": "You got the number wrong, Try again - It's 1 - 10" })
      };
      request(options, function (error, response) {
        if (error)
          throw new Error(error);
        console.log(response.body);
      });
    }
    return options;
  }

function Win_Voice_Messagae(req, options) {
  console.log("\nReply from from %s - It's a winner!", req.body.source);
  var options = {
    'method': 'POST',
    'url': 'https://voice.wavecell.com/api/v1/MehmetTest_5uU74_hq/calls',
    'headers': {
      'Authorization': 'Bearer 9GzS5mOzSsxtgdlCRyhptgFHyEO4wym7VRSgCIrG8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "clientRequestId": "req-01", "callflow": [{ "action": "say", "params": { "source": "+447307309631", "destination": req.body.source, "text": "You've won! the magic number was 10", "language": "en-GB", "repetition": 2, "speed": 1.5 } }] })
  };
  request(options, function (error, response) {
    if (error)
      throw new Error(error);
    console.log(response.body);
  });
  return options;
}


function Lose_Voice_Messagae(req, options) {
  console.log("\nReply from from %s - They got the number wrong", req.body.source);
  var options = {
    'method': 'POST',
    'url': 'https://voice.wavecell.com/api/v1/MehmetTest_5uU74_hq/calls',
    'headers': {
      'Authorization': 'Bearer 9GzS5mOzSsxtgdlCRyhptgFHyEO4wym7VRSgCIrG8',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "clientRequestId": "req-01", "callflow": [{ "action": "say", "params": { "source": "+447307309631", "destination": req.body.source, "text": "Sorry, you got the number wrong!", "language": "en-US", "repetition": 1, "speed": 1 } }] })
  };
  request(options, function (error, response) {
    if (error)
      throw new Error(error);
    console.log(response.body);
  });
  return options;
}

function Proxy_SMS(req, options) {
    var smsBody = (req.body.body);
    var pFrom = smsBody.substring(smsBody.lastIndexOf("{") +1, smsBody.lastIndexOf("}"));
    var pTo = smsBody.substring(smsBody.lastIndexOf("[") +1, smsBody.lastIndexOf("]"));
    var pBody = smsBody.substring(smsBody.lastIndexOf("(") +1, smsBody.lastIndexOf(")"));

    console.log("\nMessage: %s To: %s From: %s", pBody, pTo, pFrom);
    {        var options = {
        'method': 'POST',
        'url': 'https://api.wavecell.com/sms/v1/MehmetTest_5uU74_hq/single',
        'headers': {
          'Authorization': 'Bearer 9GzS5mOzSsxtgdlCRyhptgFHyEO4wym7VRSgCIrG8',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "source": pFrom, "destination": pTo, "text": pBody })
      };
      request(options, function (error, response) {
        if (error)
          throw new Error(error);
        console.log(response.body);
      });
    }
    return options;
}

  function Help_SMS(req, options, ) {
    
        console.log("\n %s Has asked for help", req.body.source);
    { 

  var options = {
  'method': 'POST',
    'url': 'https://api.wavecell.com/sms/v1/MehmetTest_5uU74_hq/single',
       'headers': {
       'Authorization': 'Bearer 9GzS5mOzSsxtgdlCRyhptgFHyEO4wym7VRSgCIrG8',
       'Content-Type': 'application/json'
       },
        body: JSON.stringify({ "source": "Helper!", "destination": req.body.source, "text": "To send a message, include phrase 'Prxy' and follow this format {From} [To] (Body). To must be a number in international format. Any other sms initiates quiz! A1:Nothing, A2:10 Bonus:6" })
      };
      request(options, function (error, response) {
        if (error)
          throw new Error(error);
        console.log(response.body);
      });
    }
    return options;
 }