import nodemailer from 'nodemailer';
import {MAIL, PASSWORD} from './environment.js';

export default transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: MAIL,
      pass: PASSWORD,
    },
  });