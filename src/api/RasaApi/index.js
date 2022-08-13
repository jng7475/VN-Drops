export const sendMessageToRasa = async (name, msg) => {
  let result = {};
  await fetch(
    'https://rasa-server-jng7475.cloud.okteto.net/webhooks/rest/webhook',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        charset: 'UTF-8',
      },
      credentials: 'same-origin',
      body: JSON.stringify({ sender: name, message: msg }),
    },
  )
    .then(response => response.json())
    .then(response => {
      console.log('rasa ', response);
      result = {
        status: 'success',
        response: response,
      };
    })
    .catch(err => {
      console.log('error ', err);
      result = {
        status: 'error',
        error: err,
      };
    });
  return result;
};
