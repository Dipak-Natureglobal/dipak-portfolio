export const siteUrl = "https://dipakdev.in";

export const defaultKeywords = [
  "Dipak Mourya",
  "dipadev",
  "Full Stack Developer",
  "Frontend Developer",
  "UI Developer",
  "React Developer",
  "Next.js Developer",
  "Portfolio",
];

export function canonical(path = "/") {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${siteUrl}${path}`;
}

export function twitterMeta({ title, description, image }) {
  return {
    card: "summary_large_image",
    title,
    description,
    images: image ? [image] : [],
  };
}

// small helper to build default JSON-LD Person object (stringified elsewhere if needed)
export function personJsonLd({
  name = "Dipak Mourya",
  url = siteUrl,
  jobTitle = "Full Stack Developer",
  sameAs = socialProfiles,
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    jobTitle,
    sameAs,
  };
}

export const socialProfiles = [
  "https://www.linkedin.com/in/dipak-mourya-429204210",
  "https://github.com/Dipak-Mourya",
  "https://www.instagram.com/dipak_mourya15/",
  "https://t.me/Dipak_15",
];

// Organization JSON-LD helper
export function organizationJsonLd({
  name = 'Dipak Mourya',
  url = siteUrl,
  logo = `${siteUrl}/assets/profile/logo.png`,
  sameAs = socialProfiles,
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    sameAs,
  };
}

// WebSite JSON-LD helper
export function websiteJsonLd({
  name = 'Dipak Mourya',
  url = siteUrl,
  potentialAction = {
    '@type': 'SearchAction',
    target: `${siteUrl}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction,
  };
}
