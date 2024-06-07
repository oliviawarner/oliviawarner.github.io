"use client"; 
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
const portraitImage = '/images/portrait.jpg'
import { Button } from '@/components/Button'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const Alert = ({ type, message, onClose }) => {
  const alertStyles = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700',
  };

  return (
    <div className={`border-l-4 p-4 ${alertStyles[type]} mb-4`} role="alert">
      <div className="flex justify-between items-center">
        <span className="block sm:inline">{message}</span>
        <button onClick={onClose} className="text-lg font-semibold ml-4">&times;</button>
      </div>
    </div>
  );
};

export const ContactForm = () => {
  const form = useRef();
  const [alert, setAlert] = useState(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setAlert({ type: 'error', message: 'Please complete the reCAPTCHA' });
      return;
    }

    emailjs.sendForm(
      'service_03w14n7',
      'template_f4sdf1v',
      form.current,
      'UbmjM1uXz4Bzavqm8'
    ).then(
      () => {
        setAlert({ type: 'success', message: 'Email sent successfully!' });
      },
      (error) => {
        setAlert({ type: 'error', message: `Failed to send email: ${error.text}` });
      }
    );
  };

  const clearForm = () => {
    form.current.reset();
    setAlert({ type: 'info', message: 'Form cleared!' });
    setRecaptchaValue(null);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <>
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
      <form className="space-y-6" ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Name
          </label>
          <input
            id="name"
            name="user_name"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Email
          </label>
          <input
            id="email"
            name="user_email"
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          ></textarea>
        </div>
        <div>
          <ReCAPTCHA
            sitekey="6LcBn_IpAAAAAH8zrRqEFb0jKD2WzYUpYhurkKAP"
            onChange={handleRecaptchaChange}
          />
        </div>
        <div className="flex space-x-4">
          <Button type="submit" value="Send" variant="secondary" className="flex-1 flex justify-center items-center py-2 px-4 mt-4">
            Submit
          </Button>
          <Button type="button" onClick={clearForm} variant="secondary" className="flex-1 flex justify-center items-center py-2 px-4 mt-4">
            Clear Form
          </Button>
        </div>
      </form>
    </>
  );
};

export default function Contact() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hello World -
            <br></br>
            Nice to meet you! 🤩
          </h1>
          <div className="mt-8 p-6 border border-gray-300 rounded-md">
            <ContactForm />
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/oliviawarner" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/olivia-warner-a32015151/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:oliviawarner.dev@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              oliviawarner.dev@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
