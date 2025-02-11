import nodemailer from 'nodemailer';
import {CLIENT_ID,CLIENT_SECRET,REDIRECT_URI,MY_EMAIL,REFRESH_TOKEN} from './environment.js';
import { google } from 'googleapis';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function refreshTransport (){
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      type: "OAuth2",
      user: MY_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
    tls: {
      rejectUnauthorized: true
    }
  });
  return transporter;
}

  
  export default refreshTransport;  