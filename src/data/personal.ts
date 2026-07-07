import { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Oguzhan Durace',
  title: 'AI Automation Architect',
  tagline:
    'I build AI systems that reach production and stay there. In my current role I shipped a lead qualification engine that lifted conversion 40% and a support pipeline that cut triage time 60%. Six years mapping enterprise process across consulting and Salesforce teams taught me the part most AI projects skip: which problems are worth automating, and which quietly break when you try.',
  location: 'Berlin, Germany',
  email: 'durace.o@gmail.com',
  phone: '+49 176 8009 3317',
  linkedin: 'https://www.linkedin.com/in/oguzhandurace/',
  github: 'https://github.com/dureys',
  cvUrl: '/Oguzhan_Durace_CV.pdf',
};

export const metrics = [
  { value: '40%', label: 'conversion uplift, lead engine' },
  { value: '60%', label: 'less triage time, support AI' },
  { value: '16', label: 'systems documented, with tradeoffs' },
  { value: '6+', label: 'years in enterprise automation' },
];
