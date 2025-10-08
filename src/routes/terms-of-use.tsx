import Reveal from "@/components/Revel";
import { createFileRoute } from "@tanstack/react-router";
import { Dot, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/terms-of-use")({
  component: TermsOfUsePage,
  head: () => ({
    meta: [{ title: "Terms of Use" }],
  }),
});

export interface TOC {
  id: string;
  label: string;
}

const toc: TOC[] = [
  { id: "Introduction", label: "Introduction" },
  { id: "WhoWeAre", label: "A Boutique Platform with Institutional Standards" },
  { id: "ScopeThisPolicy", label: "Scope of This Policy" },
  { id: "InformationWeCollect", label: "Information We Collect" },
  { id: "HowWeUseInformation", label: "How We Use Your Information" },
  { id: "CookiesTracking", label: "Cookies & Tracking Technologies" },
  { id: "InformationSharing", label: "Information Sharing" },
  { id: "DataSecurity", label: "Data Security" },
  {
    id: "LinksThirdParty",
    label: "Links to Customer Portal & Third-Party Sites",
  },
  { id: "RetentionInformation", label: "Retention of Information" },
  { id: "YourRights", label: "Your Rights & Choices" },
  { id: "ChildrensPrivacy", label: "Children’s Privacy" },
  { id: "UpdatesPolicy", label: "Updates to This Policy" },
  { id: "ContactUs", label: "Contact Us" },
];

function TermsOfUsePage() {
  const [currentSection, setCurrentSection] =
    useState<string>("BuildingPlatform");

  // Table of contents scroll tracker
  useEffect(() => {
    scrollTo(0, 0);

    const handleScroll = () => {
      let current = "";
      for (const t of toc) {
        const el = document.getElementById(t.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = t.id;
          }
        }
      }

      if (window.scrollY < 150) current = toc[0].id;

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        current = toc[toc.length - 1].id;
      }

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-12 gap-x-5 lg:max-w-5xl max-w-3xl mx-auto lg:mt-24 mt-16 lg:px-0 px-6">
      {/* Main Content */}
      <div className="lg:col-span-9 lg:px-8">
        <div>
          <Reveal>
            <h1 id="BuildingPlatform" className="lg:text-3xl text-xl">
              Terms of Use
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-7 text-zinc-800 text-sm">
              Last Updated: October 2025
            </p>
          </Reveal>

          {/* 1. Introduction */}
          <div id="Introduction" className="pt-16">
            <Reveal>
              <h1 className="lg:text-3xl text-xl">1. Introduction</h1>
            </Reveal>
            <Reveal>
              <>
                <p className="mt-4 text-zinc-800">
                  Welcome to Nevo Capital. We value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy explains how we collect, use, and protect
                  information when you visit our public website (the “Site”),
                  which provides general information about our investment funds
                  and services, and when you are redirected to our secure
                  customer portal operated under a separate login environment.
                </p>
                <p className="mt-4 text-zinc-800">
                  By using our Site, you consent to the practices described in
                  this Privacy Policy.
                </p>
              </>
            </Reveal>
          </div>

          {/* 2. Scope of This Policy */}
          <div id="ScopeThisPolicy" className="lg:pt-28 pt-20">
            <Reveal>
              <h1 className="lg:text-3xl text-xl">2. Scope of This Policy</h1>
            </Reveal>
            <Reveal>
              <>
                <p className="mt-4 text-zinc-800">
                  This Privacy Policy applies only to the public informational
                  website located at nevocapital.com. It does not apply to:
                </p>
                {[
                  "The customer portal, which operates under its own privacy and security terms.",
                  "Any third-party websites linked or referenced from this Site.",
                  "Offline interactions or business relationships outside this website.",
                ].map((text, i) => (
                  <div key={i} className="ms-2 flex items-center space-x-2">
                    <Dot />
                    <p className="mt-2 text-zinc-800">{text}</p>
                  </div>
                ))}
                <p className="mt-2 text-zinc-800">
                  For information on how we handle data within our customer
                  portal or fund management platform, please review the
                  portal-specific privacy notice displayed at login.
                </p>
              </>
            </Reveal>
          </div>

          {/* 3. Information We Collect */}
          <div id="InformationWeCollect" className="lg:pt-28 pt-20">
            <Reveal>
              <h1 className="lg:text-3xl text-xl">3. Information We Collect</h1>
            </Reveal>
            <Reveal>
              <>
                <p className="mt-4 text-zinc-800">
                  We collect limited personal information necessary to operate
                  and improve our website.
                </p>
                <p className="mt-2 text-zinc-800 font-medium">
                  a. Information You Provide
                </p>
                {[
                  "Contact details when submitting inquiries (name, email, phone number).",
                  "Preferences or feedback you share voluntarily through forms or surveys.",
                ].map((text, i) => (
                  <div key={i} className="ms-2 flex items-center space-x-2">
                    <Dot />
                    <p className="mt-4 text-zinc-800">{text}</p>
                  </div>
                ))}
                <p className="mt-2 text-zinc-800 font-medium">
                  b. Information Collected Automatically
                </p>
                {[
                  "Browser type, device information, IP address, and site usage analytics.",
                  "Cookies and similar technologies to improve site functionality and measure engagement.",
                ].map((text, i) => (
                  <div key={i} className="ms-2 flex items-center space-x-2">
                    <Dot />
                    <p className="mt-2 text-zinc-800">{text}</p>
                  </div>
                ))}
                <p className="mt-2 text-zinc-800">
                  We do not collect sensitive financial data, account numbers,
                  or Social Security numbers through this public Site.
                </p>
              </>
            </Reveal>
          </div>

          {/* 4. How We Use Your Information */}
          <div id="HowWeUseInformation" className="lg:pt-28 pt-20">
            <Reveal>
              <h1 className="lg:text-3xl text-xl">
                4. How We Use Your Information
              </h1>
            </Reveal>
            <Reveal>
              <>
                <p className="mt-4 text-zinc-800">
                  We may use the collected information to:
                </p>
                {[
                  "Respond to inquiries and requests for information.",
                  "Improve website content, functionality, and user experience.",
                  "Maintain security and prevent unauthorized access.",
                  "Comply with applicable U.S. laws and regulations.",
                ].map((text, i) => (
                  <div key={i} className="ms-2 flex items-center space-x-2">
                    <Dot />
                    <p className="mt-2 text-zinc-800">{text}</p>
                  </div>
                ))}
                <p className="mt-2 text-zinc-800">
                  We do not sell or rent personal information to any third
                  parties.
                </p>
              </>
            </Reveal>
          </div>

          {/* 5. Cookies & Tracking Technologies */}
          <div id="CookiesTracking" className="lg:pt-28 pt-20">
            <Reveal>
              <h1 className="lg:text-3xl text-xl">
                5. Cookies & Tracking Technologies
              </h1>
            </Reveal>
            <Reveal>
              <>
                <p className="mt-4 text-zinc-800">
                  Our Site uses cookies and analytics tools (such as Google
                  Analytics) to:
                </p>
                {[
                  "Understand how visitors use our Site.",
                  "Improve performance and navigation.",
                  "Ensure proper functionality of redirects to our customer portal.",
                ].map((text, i) => (
                  <div key={i} className="ms-2 flex items-center space-x-2">
                    <Dot />
                    <p className="mt-2 text-zinc-800">{text}</p>
                  </div>
                ))}
                <p className="mt-2 text-zinc-800">
                  You may disable cookies in your browser settings, though some
                  features of the Site may not function optimally.
                </p>
              </>
            </Reveal>
          </div>

          {/* 6–12 (Information Sharing, Security, etc.) */}
          {[
            {
              id: "InformationSharing",
              title: "6. Information Sharing",
              content: [
                "Service providers who assist with website hosting, analytics, or security.",
                "Regulatory authorities if required by law or to comply with legal processes.",
                "Affiliates or partners assisting with customer support or marketing compliance.",
              ],
              after:
                "All service providers are bound by confidentiality agreements and data protection obligations.",
            },
            {
              id: "DataSecurity",
              title: "7. Data Security",
              paragraph:
                "We maintain industry-standard administrative, technical, and physical safeguards designed to protect your information against unauthorized access, loss, misuse, or disclosure.",
              after:
                "This includes the use of HTTPS encryption, firewalls, and regular security audits. However, no online system is completely secure, and we cannot guarantee absolute security.",
            },
            {
              id: "LinksThirdParty",
              title: "8. Links to Customer Portal and Third-Party Sites",
              content: [
                "The official customer portal for account access, transactions, or detailed investment data.",
                "Third-party sites for regulatory filings, reports, or affiliated service providers.",
              ],
              after:
                "We are not responsible for the content, policies, or practices of these external sites. We encourage users to review their privacy policies separately.",
            },
            {
              id: "RetentionInformation",
              title: "9. Retention of Information",
              paragraph:
                "We retain information collected through this Site only as long as necessary to fulfill the purposes described in this Privacy Policy, or as required by law.",
            },
            {
              id: "YourRights",
              title: "10. Your Rights & Choices",
              paragraph:
                "Depending on your location, you may have rights to request access to, correction, or deletion of your information, and to opt out of certain communications.",
              after:
                "To exercise these rights, please contact us at privacy@nevocapital.com. Residents of California may have additional rights under the California Consumer Privacy Act (CCPA).",
            },
            {
              id: "ChildrensPrivacy",
              title: "11. Children’s Privacy",
              paragraph:
                "Our Site is not directed toward individuals under 18 years of age, and we do not knowingly collect personal information from children.",
            },
            {
              id: "UpdatesPolicy",
              title: "12. Updates to This Policy",
              paragraph:
                "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.",
              after:
                "The “Last Updated” date at the top of this page will indicate when it was most recently revised.",
            },
            {
              id: "ContactUs",
              title: "13. Contact Us",
              paragraph:
                "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:",
            },
          ].map((section) => (
            <div id={section.id} className="lg:pt-28 pt-20" key={section.id}>
              <Reveal>
                <h1 className="lg:text-3xl text-xl">{section.title}</h1>
              </Reveal>
              <Reveal>
                <>
                  {section.paragraph && (
                    <p className="mt-4 text-zinc-800">{section.paragraph}</p>
                  )}
                  {section.content &&
                    section.content.map((text, i) => (
                      <div key={i} className="ms-2 flex items-center space-x-2">
                        <Dot />
                        <p className="mt-2 text-zinc-800">{text}</p>
                      </div>
                    ))}
                  {section.after && (
                    <p className="mt-2 text-zinc-800">{section.after}</p>
                  )}
                </>
              </Reveal>
            </div>
          ))}

          <Reveal>
            <div className="mt-10">
              <p className="text-start font-semibold mb-5">Nevo Capital</p>
              <div className="flex items-center space-x-2 text-zinc-600 mb-2">
                <Phone size={16} />
                <p className="text-sm">+1-248-450-4836</p>
              </div>

              <div className="flex items-center space-x-2 text-zinc-600">
                <Mail size={16} />
                <p className="textsms">info@nevo-capital.com</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Sidebar Table of Contents */}
      <div className="lg:block hidden col-span-3 relative">
        <div className="sticky top-60">
          <div className="flex flex-col space-y-2">
            {toc.map((t) => (
              <Reveal key={t.id}>
                <a
                  href={`#${t.id}`}
                  className={`cursor-pointer text-sm ${
                    currentSection === t.id ? "font-medium" : "text-zinc-700"
                  }`}
                >
                  {t.label}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUsePage;
