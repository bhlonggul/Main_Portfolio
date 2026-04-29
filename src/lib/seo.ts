export const SITE_URL = "https://bhlonggul.vercel.app";
export const PERSON_ID = `${SITE_URL}/#person`;

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  "name": "Brian Hlonggul",
  "url": SITE_URL,
  "image": `${SITE_URL}/og-image.png`,
  "jobTitle": "Computer Science Student",
  "description":
    "CS undergrad at Cal State Fullerton. Tools, algorithms, small games.",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "California State University, Fullerton",
  },
  "sameAs": [
    "https://github.com/bhlonggul",
    "https://www.linkedin.com/in/brian-hlonggul-45222b356",
  ],
} as const;
