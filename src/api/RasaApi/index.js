export const sendMessageToRasa = async (name, msg) => {
  let result = {};
  await sendMessageToChatGPT(name, msg);
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
const API_KEY = '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';
export const sendMessageToChatGPT = async (name, msg) => {
  let result = {};
  await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: msg,
        },
      ],
    }),
  })
    .then(response => response.json())
    .then(response => {
      console.log('test-chatgpt ', response.choices[0].message.content);
      result = {
        status: 'success',
        response: response.choices[0].message.content,
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
