"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';

const logoSru = '/images/logos/sru.png';
const logoCei = '/images/logos/cei.webp';
const logoItc = '/images/logos/itc.png';
const logoEliteOps = '/images/logos/eliteops-logo.jpeg';
const logoMicrosoft = '/images/logos/microsoft.png';
const logoZscaler = '/images/logos/zscaler-logo.png';

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
    <Link className="group -m-2 p-2" {...props}>
      <Icon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-300" />
    </Link>
  );
}

function CompanyEntry({ entry }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={entry.logo} alt="" width={28} height={28} className="h-7 w-7" unoptimized />
      </div>
      <div className="flex flex-auto flex-col">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {entry.company}
        </span>
        <ol className="mt-1.5 space-y-1.5">
          {entry.roles.map((role, i) => (
            <li key={i} className="flex items-baseline justify-between gap-2">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</span>
              <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
                {role.start} — {role.end}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </li>
  );
}

function Resume() {
  let resume = [
    {
      company: 'EliteOps',
      logo: logoEliteOps,
      roles: [
        { title: 'Senior Optimize Engineer', start: '2026', end: 'Present' },
        { title: 'Senior SASE Support Specialist', start: '2025', end: '2026' },
      ],
    },
    {
      company: 'CEI',
      logo: logoCei,
      roles: [
        { title: 'Software Developer 1', start: '2022', end: '2025' },
        { title: 'Associate Software Developer', start: '2021', end: '2022' },
      ],
    },
    {
      company: 'Slippery Rock University',
      logo: logoSru,
      roles: [{ title: 'Web Assistant', start: '2020', end: '2021' }],
    },
    {
      company: 'Intense Tennis Camps',
      logo: logoItc,
      roles: [{ title: 'Freelance Web Developer', start: '2020', end: '2021' }],
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/50">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((entry, i) => (
          <CompanyEntry key={i} entry={entry} />
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
      title: 'Zscaler Digital Transformation Engineer (ZDTE)',
      link: 'https://www.credly.com/badges/2d973cec-0109-4255-9de9-d93446295d35',
      logo: logoZscaler,
      date: 'Issued: 2026 | Expires: 2028',
      credentialId: 'Credential ID: 2d973cec-0109-4255-9de9-d93446295d35',
    },
    {
      title: 'Zscaler Digital Transformation Administrator (ZDTA)',
      link: 'https://www.credly.com/badges/7ace8783-157c-4a3f-b70d-d0986e445ac1',
      logo: logoZscaler,
      date: 'Issued: 2025 | Expires: 2027',
      credentialId: 'Credential ID: 7ace8783-157c-4a3f-b70d-d0986e445ac1',
    },
    {
      title: 'Zscaler Zero Trust Automation (EDU-270)',
      logo: logoZscaler,
      date: 'Issued: 2025 | Expires: 2027',
      credentialId: 'Credential ID: 98wape9dkkg8',
    },
    {
      title: 'Microsoft Power BI Data Analyst Associate',
      logo: logoMicrosoft,
      date: 'Issued: 2023 | Expires: 2026',
      credentialId: 'Credential ID: I750-7391',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/50">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <AcademicCapIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Certifications</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {certifications.map((certification, certIndex) => (
          <li key={certIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={certification.logo} alt="" width={28} height={28} className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Certification</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {certification.link ? (
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    {certification.title}
                    <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0 text-zinc-400 dark:text-zinc-500" fill="none" aria-hidden="true">
                      <path d="M3.5 3H2a1 1 0 0 0-1 1v5.5A1 1 0 0 0 2 10.5H7.5a1 1 0 0 0 1-1V8M7 1h4m0 0v4m0-4L5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ) : (
                  certification.title
                )}
              </dd>
              <dt className="sr-only">Credential ID</dt>
              <dd className="w-full flex-none text-xs text-zinc-500 dark:text-zinc-400">
                {certification.credentialId}
              </dd>
              {certification.date && (
                <dd className="w-full flex-none text-xs text-zinc-400 dark:text-zinc-500">
                  {certification.date}
                </dd>
              )}
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}

const nameVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const firstNameVariant = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const lastNameVariant = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const taglineVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.45 },
  },
};

export default function Home() {
  return (
    <>
      <Container className="mt-12 sm:mt-20">
        <div className="overflow-hidden">
          <motion.h1
            className="font-black leading-[0.85] tracking-tight select-none"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="block"
              style={{
                fontSize: 'clamp(3.75rem, 14vw, 10.5rem)',
                WebkitTextStroke: '4px rgb(20 184 166)',
                color: 'var(--text-outline-fill)',
                paintOrder: 'stroke fill',
              }}
              variants={firstNameVariant}
            >
              OLIVIA
            </motion.span>
            <motion.span
              className="block text-zinc-900 dark:text-zinc-50"
              style={{ fontSize: 'clamp(3.75rem, 14vw, 10.5rem)' }}
              variants={lastNameVariant}
            >
              WARNER
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          className="mt-6 flex flex-col gap-4"
          variants={taglineVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Analyst&nbsp;&nbsp;·&nbsp;&nbsp;Designer
            </p>
            <div className="hidden h-px flex-1 bg-zinc-200 dark:bg-zinc-700 sm:block" />
            <span className="text-sm uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
              Pittsburgh, PA
            </span>
          </div>
          <div className="flex gap-2">
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
        </motion.div>
      </Container>

      <Container className="mt-20 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 lg:gap-x-12">
          <div>
            <Resume />
          </div>
          <div>
            <Certifications />
          </div>
        </div>
      </Container>
    </>
  );
}
