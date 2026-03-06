import { EducationItem, Certification } from '@/types';

export const education: EducationItem[] = [
  {
    degree: 'Master of Science in Management',
    institution: 'ESMT Berlin',
    location: 'Berlin, Germany',
    period: '2017 to 2019',
    details: [
      'Quantitative Business Track',
      'Specialization: Business Analytics',
      'Partial Merit Scholarship Recipient',
    ],
  },
  {
    degree: 'Bachelor of Business Administration',
    institution: 'Koc University',
    location: 'Istanbul, Turkey',
    period: '2011 to 2016',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Adobe Certified Professional: Adobe Analytics Business Practitioner',
    issuer: 'Adobe',
  },
  {
    name: 'Adobe Qualified: Adobe Experience Platform',
    issuer: 'Adobe',
  },
];

export const languages = [
  { language: 'Turkish', level: 'Native' },
  { language: 'English', level: 'C2' },
  { language: 'German', level: 'B1' },
  { language: 'French', level: 'A1' },
];
