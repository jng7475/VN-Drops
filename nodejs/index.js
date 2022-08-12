const admin = require('firebase-admin');
const express = require('express');
const app = express();
const port = 3000;

var serviceAccount = require('./vn-drops-firebase-adminsdk-ws0wo-c80d38b1d4.json');
app.use(express.json());
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post('/hospital-post', (req, res) => {
  const message = {
    notification: req.body.message,
    tokens: req.body.tokens,
  };
  admin
    .messaging()
    .sendMulticast(message)
    .then(res => console.log('success', res))
    .catch(err => console.log(err));
});

app.listen(process.env.PORT || port, () => {
  console.log('server running on port ', port);
});
