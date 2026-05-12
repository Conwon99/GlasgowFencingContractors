/** Stable @id for JSON-LD linking (matches BaseLayout LocalBusiness). */
export const LOCAL_BUSINESS_ID = "https://www.glasgowfencingcontractors.co.uk/#localbusiness";

export function buildServicePageJsonLd(input: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: input.name,
    provider: { "@id": LOCAL_BUSINESS_ID },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Greater Glasgow" },
      { "@type": "Country", name: "United Kingdom" },
    ],
  };
}

export function buildContactPageJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: pageUrl,
    mainEntity: { "@id": LOCAL_BUSINESS_ID },
  };
}

export function buildAboutPageJsonLd(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: pageUrl,
    mainEntity: { "@id": LOCAL_BUSINESS_ID },
  };
}
