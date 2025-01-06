'use server';

import nodemailer from 'nodemailer';
import { headers } from 'next/headers';
import { RateLimiter } from '@/utils/rateLimiter';

type FormState = {
  success?: boolean;
  message?: string;
} | null;

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;
const MIN_MESSAGE_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 5000;

function sanitizeInput(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailRegex.test(email);
}

const rateLimiter = new RateLimiter<string>(5, 120);

async function sendEmail(_: FormState, formData: FormData): Promise<FormState> {
  try {
    const headerStore = headers();
    const clientIp =
      headerStore.get('X-Real-IP') ??
      headerStore.get('X-Forwarded-For')?.split(',')[0] ??
      'unknown';
    const success = rateLimiter.consume(clientIp, 1);

    if (!success) {
      return {
        success: false,
        message: 'Too many requests',
      };
    }

    const name = sanitizeInput(formData.get('name') as string);
    const email = formData.get('email') as string;
    const message = sanitizeInput(formData.get('message') as string);

    if (!name || !email || !message) {
      return { success: false, message: 'All fields are required' };
    }

    if (name.length < MIN_NAME_LENGTH) {
      return { success: false, message: 'Name is too short' };
    }
    if (name.length > MAX_NAME_LENGTH) {
      return { success: false, message: 'Name is too long' };
    }
    if (message.length < MIN_MESSAGE_LENGTH) {
      return { success: false, message: 'Message is too short' };
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return { success: false, message: 'Message is too long' };
    }
    if (!isValidEmail(email)) {
      return { success: false, message: 'Invalid email address' };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDING_EMAIL,
        pass: process.env.SENDING_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVING_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
}

export { sendEmail };
