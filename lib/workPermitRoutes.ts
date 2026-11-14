import { irelandHealthcareRoute } from './irelandHealthcareRoute';

export type RouteSource = { label: string; url: string };
export type RouteSection = { id: string; title: string; items: string[]; sources: string[] };
export type WorkPermitRoute = {
  slug: string;
  country: string;
  title: string;
  route: string;
  eligibility: string[];
  documents: string[];
  validity: string;
  processing: string;
  steps: string[];
  limitations: string;
  renewal?: string;
  quota?: string;
  status?: 'coming-soon';
  statusNote?: string;
  checkedOn?: string;
  overview?: string;
  sections?: RouteSection[];
  sources?: RouteSource[];
};

export const workPermitRoutes: WorkPermitRoute[] = [
  {
    "slug": "turkey-electricians",
    "country": "Turkey",
    "title": "Work Permit for Electricians",
    "route": "Employer-sponsored work permit",
    "eligibility": [
      "Genuine job offer from a qualifying Turkish employer",
      "Relevant electrical qualifications and experience",
      "Valid passport",
      "MYK vocational certification or accepted exemption where required"
    ],
    "documents": [
      "Passport and photographs",
      "Signed employment contract",
      "Trade certificates and experience letters",
      "Required Turkish translations",
      "Employer registration and financial documents"
    ],
    "validity": "Up to one year, depending on the contract and approval.",
    "processing": "Complete applications assessed within 30 days; appointments and other formalities add time.",
    "steps": [
      "Eligibility review",
      "Document preparation",
      "Consular stage and employer electronic application, as applicable",
      "Approval and entry formalities"
    ],
    "limitations": "Requires a qualifying employer. Job placement and approval are not guaranteed."
  },
  {
    "slug": "azerbaijan-construction",
    "country": "Azerbaijan",
    "title": "Work Permit for Construction Workers",
    "route": "Employer-sponsored work permit plus temporary residence",
    "eligibility": [
      "Over 18 with appropriate construction qualifications",
      "Azerbaijani employer willing to obtain the permit and justify hiring a foreign worker",
      "Compliance with medical and immigration requirements"
    ],
    "documents": [
      "Passport",
      "Notarised qualification evidence and experience letters",
      "Required medical certificate",
      "Employer justification and company documents",
      "Separate residence application documents"
    ],
    "validity": "Ordinarily up to one year, or the shorter contract period.",
    "processing": "Work permit options of 10, 15 or 20 working days; visa and residence stages are separate.",
    "steps": [
      "Review qualifications and employer sponsorship",
      "Prepare worker and employer documents",
      "Employer applies for work permit",
      "Complete separate visa and temporary residence stages"
    ],
    "renewal": "Employer should apply at least 30 days before expiry.",
    "limitations": "Permission is tied to the authorised employer. A visa alone does not authorise employment."
  },
  {
    "slug": "sweden-job-seeker",
    "country": "Sweden",
    "title": "Job Seeker Residence Permit",
    "route": "Look for work or investigate starting a business",
    "eligibility": [
      "Qualification equivalent to a Swedish second-cycle degree, such as a qualifying master’s or doctorate",
      "Valid passport and sufficient self-support",
      "Comprehensive health insurance",
      "Genuine job-search or business plan"
    ],
    "documents": [
      "Passport copies",
      "Degree certificate and transcripts",
      "Consent for education verification",
      "Insurance and financial evidence",
      "Required translations"
    ],
    "validity": "Up to nine months, limited by passport validity.",
    "processing": "Variable; education verification and passport checks can add time.",
    "steps": [
      "Review education eligibility and prepare a search or business plan",
      "Gather financial, insurance and education evidence",
      "Apply from outside Sweden",
      "Receive approval before entry"
    ],
    "limitations": "No job offer required for the initial application. A bachelor’s degree alone normally does not qualify. This permit does not provide unrestricted work rights."
  },
  {
    "slug": "italy-freelancer",
    "country": "Italy",
    "title": "Digital Nomad Visa for Freelancers",
    "route": "Remote self-employment for qualified non-EU professionals",
    "eligibility": [
      "Highly qualified remote freelance work",
      "Accepted qualification or experience pathway",
      "At least six months of relevant experience and established freelance activity",
      "Sufficient income, accommodation and health insurance"
    ],
    "documents": [
      "Passport, visa application and photographs",
      "Proof of legal residence in the consulate jurisdiction",
      "Qualification and experience evidence",
      "Client contracts, invoices and tax records",
      "Accommodation and insurance",
      "Required translations and legalisation"
    ],
    "validity": "Up to one year, renewable subject to eligibility.",
    "processing": "Up to 120 days, plus appointment waiting time.",
    "steps": [
      "Review professional eligibility and consular requirements",
      "Prepare freelance, income, accommodation and insurance evidence",
      "Attend the consular application stage",
      "After arrival request residence permit within eight working days and complete applicable tax registration"
    ],
    "quota": "Described as outside the annual Decreto Flussi quota.",
    "limitations": "Intended for established remote professionals. Traditional Italian self-employment and employed remote work have different rules. This guide does not cover construction or general employment."
  },
  irelandHealthcareRoute
]
