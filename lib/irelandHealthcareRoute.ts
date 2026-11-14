import type { WorkPermitRoute } from './workPermitRoutes';

export const irelandHealthcareRoute: WorkPermitRoute = {
  slug: 'ireland-healthcare-assistant',
  country: 'Ireland',
  title: 'Healthcare Assistant Employment Permit',
  route: 'General Employment Permit, followed by a long-stay D employment visa if required',
  status: 'coming-soon',
  checkedOn: '29 October 2026',
  statusNote: 'Our Ireland healthcare assistant advisory service is coming soon. Interest enquiries only; no launch date or employer vacancies have been announced. The Irish government permit route already exists.',
  overview: 'Healthcare assistants support patient care under qualified clinicians. The immigration route is the General Employment Permit; an entry visa and residence registration are separate stages.',
  eligibility: [
    'A genuine healthcare assistant job offer from an eligible employer trading in Ireland; the employer must employ you directly.',
    'Relevant qualifications, skills or experience for the specific job. Employer recruitment criteria and employment permit rules must both be satisfied.',
    'A qualifying role that meets current General Employment Permit conditions and the applicable employer and labour-market requirements.',
    'A valid passport and an approved employment permit before applying for an entry visa, where a visa is required.'
  ],
  documents: [
    'Passport identity and signature pages plus a passport-type photograph. A new permit requires at least six months of passport validity.',
    'Employment contract signed by employer and employee, with the proposed duties, work locations and start date.',
    'Qualification evidence and relevant employment history; current Irish immigration details if already lawfully resident.',
    'Employer registration, contact and workforce details, plus recruitment advertisement references where required.'
  ],
  validity: 'Initially up to two years; renewal may be granted for up to a further three years, subject to eligibility.',
  processing: 'Submit the employment permit application at least 12 weeks before the intended start date. This is a submission lead time, not a promised processing time. Check the live permit queue and relevant visa office separately.',
  steps: [
    'Secure a suitable job offer and check the employer, role and qualification requirements.',
    'The employer completes the Labour Market Needs Test where required; both parties sign the employment contract.',
    'The employee or employer submits the application through Employment Permits Online with the required evidence.',
    'After permit approval, visa-required applicants apply for a long-stay D employment visa through AVATS from their country of nationality or legal residence.',
    'Travel with the required documents, obtain entry permission and register immigration permission after arrival.'
  ],
  renewal: 'For HCA renewal after two years, a relevant QQI Level 5 qualification is expected. Comparable relevant health or social-care qualifications may be assessed through the clinical-lead declaration process.',
  limitations: 'A job offer is essential. Employment, permit and visa approval are not guaranteed. The permit, entry visa and residence registration are separate permissions. Our coming-soon listing is not a vacancy, a government application or a promise of sponsorship.',
  sections: [
    {
      id: 'qualifications',
      title: 'Qualifications and recruitment checks',
      items: [
        'HSE guidance lists a relevant QQI Level 5 major award for HCA entry. Check the actual employer\'s accepted qualifications and experience pathways before applying.',
        'For permit renewal after two years, relevant QQI Level 5 or an accepted comparable qualification is important. The clinical lead, employee and employer complete the declaration where applicable.',
        'HSE recruitment includes references, Garda or police clearance and occupational-health screening. Follow the recruiting employer\'s instructions; these are separate from permit checks.'
      ],
      sources: ['https://careerhub.hse.ie/pathways_hca/', 'https://enterprise.gov.ie/en/publications/renewal-of-employment-permit-health-care-assistant.html', 'https://about.hse.ie/jobs/hse-recruitment-process/screening-process/']
    },
    {
      id: 'employer',
      title: 'Employer and recruitment requirements',
      items: [
        'The employer must be registered with Revenue and the relevant companies registry where applicable. The normal 50:50 workforce rule applies unless an exemption is accepted.',
        'Where required, advertise on DSP Employment Services/EURES and a second online recruitment platform for at least 28 continuous days. Normally submit the permit application within 90 days of the first advertisement.'
      ],
      sources: ['https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/', 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/employment-permit-eligibility/labour-market-needs-test/']
    },
    {
      id: 'visa-documents',
      title: 'Entry visa preparation, if visa-required',
      items: [
        'Print and sign the AVATS summary. Prepare two recent passport photographs, your current passport and previous passport copies where available.',
        'For the entry visa, your passport must remain valid for at least 12 months after your intended arrival, even though the new-permit passport rule is different.',
        'Prepare the approved employment permit, employment contract or employer letter, application letter and qualification or experience evidence.',
        'Disclose previous visa refusals and supply certified translations where required. Follow the complete official checklist and the application office\'s local instructions; this preparation list is not exhaustive.',
        'Medical or travel insurance may be requested during assessment and must be available at entry. A visa allows travel; admission is decided at the border.'
      ],
      sources: ['https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-work-visa-options/applying-for-a-long-stay-employment-visa/employment-visa/']
    },
    {
      id: 'arrival',
      title: 'After arrival',
      items: [
        'Carry your passport, employment permit, entry visa if required and supporting documents for border checks.',
        'If staying longer than 90 days, book and register immigration permission with ISD within the required period. Follow your landing-stamp instructions and the registration document checklist.'
      ],
      sources: ['https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-register-your-immigration-permission-for-the-first-time/information-on-registering-your-immigration-permission-for-the-first-time/']
    }
  ],
  sources: [
    { label: 'Official General Employment Permit guidance', url: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/' },
    { label: 'Healthcare Assistant permit checklist (PDF)', url: 'https://enterprise.gov.ie/en/publications/publication-files/health-care-assistant-employment-permit-checklist.pdf' },
    { label: 'Healthcare Assistant qualification and renewal guidance', url: 'https://enterprise.gov.ie/en/publications/renewal-of-employment-permit-health-care-assistant.html' },
    { label: 'Labour Market Needs Test', url: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/employment-permit-eligibility/labour-market-needs-test/' },
    { label: 'HSE Healthcare Assistant career pathway', url: 'https://careerhub.hse.ie/pathways_hca/' },
    { label: 'HSE recruitment screening', url: 'https://about.hse.ie/jobs/hse-recruitment-process/screening-process/' },
    { label: 'Long-stay employment visa and documents', url: 'https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-work-visa-options/applying-for-a-long-stay-employment-visa/employment-visa/' },
    { label: 'First immigration registration', url: 'https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-register-your-immigration-permission-for-the-first-time/information-on-registering-your-immigration-permission-for-the-first-time/' }
  ]
};
