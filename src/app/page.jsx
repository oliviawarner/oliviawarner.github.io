"use client";
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';

// Direct references to images in the public folder
const logoSru = '/images/logos/sru.png';
const logoCei = '/images/logos/cei.webp';
const logoItc = '/images/logos/itc.png';
const logoMicrosoft = '/images/logos/microsoft.png';
const image1 = '/images/photos/image-1.jpg';
const image2 = '/images/photos/image-2.jpg';
const image3 = '/images/photos/image-3.jpg';
const image4 = '/images/photos/image-4.jpg';
const image5 = '/images/photos/image-5.jpg';

function AcademicCapIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-2 p-3" {...props}>
      <Icon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-300" />
    </Link>
  );
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume = [
    {
      company: 'CEI',
      title: 'Developer 1',
      logo: logoCei,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Slippery Rock University',
      title: 'Web Assistant',
      logo: logoSru,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Intense Tennis Camps',
      title: 'Freelance Web Developer',
      logo: logoItc,
      start: '2020',
      end: '2021',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-300 p-6 dark:border-zinc-500/50">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <a
        href="/files/Olivia_Warner_Resume_2024.pdf"
        download
        style={{ textDecoration: 'none' }}
      >
        <Button
          variant="secondary"
          className="group mt-6 w-full d-flex justify-content-center align-items-center"
        >
          Download Resume
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50 ml-2" />
        </Button>
      </a>
    </div>
  );
}

function Certifications() {
  let certifications = [
    {
      title: 'Power BI Data Analyst Associate',
      issuer: 'Microsoft',
      logo: logoMicrosoft,
      date: '2022',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-300 p-6 dark:border-zinc-500/50">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <AcademicCapIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Certifications</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {certifications.map((certification, certIndex) => (
          <li key={certIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={certification.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Certification</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {certification.title}
              </dd>
              <dt className="sr-only">Issuer</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {certification.issuer}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                <time dateTime={certification.date}>{certification.date}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Photos() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2', 'rotate-2'];
  const [tappedImages, setTappedImages] = useState({});

  const handleTap = (imageIndex) => {
    setTappedImages((prevState) => ({
      ...prevState,
      [imageIndex]: !prevState[imageIndex],
    }));
  };

  return (
    <div className="mt-16 sm:mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-center text-zinc-800 dark:text-zinc-100 flex items-center justify-center">
        Tidy up Pittsburgh
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50 ml-2" />
      </h2>
      <div className="mt-8 -my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <motion.div
            key={image}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12)" }}
            onTap={() => handleTap(imageIndex)}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              tappedImages[imageIndex] ? '' : rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Developer. Designer. Analyst.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hello! My name is Olivia Warner and I am a software developer, designer, and data analyst based in Pittsburgh, Pennsylvania.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/oliviawarner"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/olivia-warner-a32015151/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-16 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 lg:gap-x-12">
          <div>
            <Resume />
          </div>
          <div>
            <Certifications />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  );
}
