"use client";

import { contacts } from "@/content/contacts";
import { siteInfo } from "@/content/siteInfo";

export default function JsonLd() {
    const siteUrl = siteInfo.siteURL || "";
    const githubUrl = contacts.github.href || "";
    const linkedinUrl = contacts.linkedin.href || "";
    const email = contacts.email.href || "";

    const data = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Alphones Odhiambo",
        jobTitle: "Web Developer",
        description:
            "Passionate web developer using modern web technologies, delivering high-performance, user-focused digital experiences.",
        url: siteUrl,
        image: `${siteUrl}/about-image.jpg`,
        sameAs: [githubUrl, linkedinUrl, email],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
