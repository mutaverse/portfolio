export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mutakilu Mukailu",
    jobTitle: "AI Engineer & Researcher",
    description: "AI Engineer, Researcher, and Founder. Building intelligent systems with strong mathematical foundations.",
    email: "mutakilu914@icloud.com",
    url: "https://mutakilu.dev", // Update with your actual domain
    sameAs: [
      "https://www.linkedin.com/in/mutakilu-mukailu",
      "https://twitter.com",
      "https://github.com",
      "https://scholar.google.com",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Statistics",
      "Mathematics",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
