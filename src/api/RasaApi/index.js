import { API_KEY } from './API_KEY';
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
          role: 'system',
          content: 'Bạn trong vai là người trợ lý ảo trong một ứng dụng hiến máu nhân đạo. Công việc của bạn là trả lời các câu hỏi liên quan đến hiến máu, dễ hiểu, thân thiện, dưới 100 từ và có xu hướng định hướng người dùng  đi hiến máu. Sau đây là câu hỏi của người dùng:',
        },
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
