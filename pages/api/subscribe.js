import Mailchimp from 'mailchimp-api-v3';

const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;

const mailchimp = new Mailchimp(API_KEY);

export default async function handler(req, res) {
  const { email } = JSON.parse(req.body);

  try {
    const response = await mailchimp.request({
      method: 'post',
      path: `/lists/${AUDIENCE_ID}/members`,
      body: {
        email_address: email,
        status: 'subscribed',
      },
    });
    const { _links, ...result } = response;
    res.status(result.statusCode).json(result);
  } catch (err) {
    res.status(err.status).send(err);
  }
}
