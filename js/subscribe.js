const mailjet = require ('node-mailjet')
.connect('c491672eff8c735733a70a3eee7763fd', '2e9b84cc8a6a039cca5ba09c94d9da02')
const request = mailjet
.post("send", {'version': 'v3.1'})
.id(subscribe)
.request({
  "Messages":[
    {
      "From": {
        "Email": "tshalom01@gmail.com",
        "Name": "Shalom"
      },
      "To": [
        {
          "Email": "tshalom01@gmail.com",
          "Name": "Shalom"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
