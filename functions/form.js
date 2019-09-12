require('dotenv').config();
const mailClient = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_FORM_FROM = process.env.CONTACT_FORM_FROM;
const CONTACT_FORM_TO = process.env.CONTACT_FORM_TO;
const htmlEncode = require('htmlencode');

const validate = function(fields) {
  return true;
};

const handler = function(event, context, callback) {
  try {
    const body = JSON.parse(event.body);
    if (event.httpMethod !== 'POST' || !validate(body)) {
      return callback(null, {
        statusCode: 400,
      });
    }

    mailClient.setApiKey(SENDGRID_API_KEY);
    const recipient = CONTACT_FORM_TO;
    const fields = Object.entries(body)
      .map(
        ([key, value]) =>
          `<b>${htmlEncode.htmlEncode(key)}</b>
        <div style="border: 1px solid #1e1e1e; border-radius: 4px; margin-bottom:12px; padding-left: 12px; padding-right: 12px;">
          <p>${htmlEncode.htmlEncode(value)}</p>
        </div>`,
      )
      .join('');
    const msg = {
      to: recipient,
      from: CONTACT_FORM_FROM,
      subject: `dev.outotec.com contact form submission`,
      html: `A contact form submission from dev.outotec.com<br><br> 
               <p>${fields}</p>`,
    };
    mailClient
      .send(msg)
      .then(() =>
        callback(null, {
          statusCode: 200,
          body: 'OK',
        }),
      )
      .catch(reason => {
        console.log(reason);
        callback(null, {
          statusCode: 500,
          body: '',
        });
      });
  } catch (e) {
    console.log(e);
    callback(null, {
      statusCode: 500,
      body: '',
    });
  }
};

exports.handler = handler;
