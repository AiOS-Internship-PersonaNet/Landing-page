// app/privacy-policy/page.jsx
// this is Privacy policy file

//import "termsconds.css" file from term-and-conditions file
import Link from 'next/link';
import styles from '../terms-and-conditions/termsconds.css';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function PrivacyPolicy() {
  return (
    <div className="pb-6">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              <img src="/images/logo.svg" width={120} alt="SuperIntro" />
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 px-4">
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-purple-600 transition-colors">
              How It Works
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Success Stories
            </Link>
          </nav>
          <div className="flex gap-4">
            <Button asChild variant="ghost">
              <a href="https://app.superintro.me/login">Log in</a>
            </Button>
            <Button asChild>
              <a href="https://app.superintro.me/signup">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-4xl py-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: Dec 23, 2024</p>
          </div>

          <p className="text-muted-foreground leading-normal">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
            information when You use the Service and tells You about Your privacy rights and how the law protects You.
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
            collection and use of information in accordance with this Privacy Policy.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="interpretation">
              <AccordionTrigger>Interpretation and Definitions</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <h3 className="font-medium">Interpretation</h3>
                  <p>
                    The words of which the initial letter is capitalized have meanings defined under the following
                    conditions. The following definitions shall have the same meaning regardless of whether they appear
                    in singular or in plural.
                  </p>

                  <h3 className="font-medium">Definitions</h3>
                  <p>For the purposes of this Privacy Policy:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Account</strong> means a unique account created for You to access our Service or parts of
                      our Service.
                    </li>
                    <li>
                      <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common
                      control with a party, where "control" means ownership of 50% or more of the shares, equity
                      interest or other securities entitled to vote for election of directors or other managing
                      authority.
                    </li>
                    <li>
                      <strong>Business</strong>, for the purpose of CCPA/CPRA, refers to the Company as the legal entity
                      that collects Consumers' personal information and determines the purposes and means of the
                      processing of Consumers' personal information, or on behalf of which such information is collected
                      and that alone, or jointly with others, determines the purposes and means of the processing of
                      consumers' personal information, that does business in the State of California.
                    </li>
                    <li>
                      <strong>CCPA and/or CPRA</strong> refers to the California Consumer Privacy Act (the "CCPA") as
                      amended by the California Privacy Rights Act of 2020 (the "CPRA").
                    </li>
                    <li>
                      <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this
                      Agreement) refers to SuperINTRO, Inc, 528 Larkin St Ste 300. For the purpose of the GDPR, the
                      Company is the Data Controller.
                    </li>
                    <li>
                      <strong>Consumer</strong>, for the purpose of the CCPA/CPRA, means a natural person who is a
                      California resident. A resident, as defined in the law, includes (1) every individual who is in
                      the USA for other than a temporary or transitory purpose, and (2) every individual who is
                      domiciled in the USA who is outside the USA for a temporary or transitory purpose.
                    </li>
                    <li>
                      <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any
                      other device by a website, containing the details of Your browsing history on that website among
                      its many uses.
                    </li>
                    <li>
                      <strong>Country</strong> refers to: Arizona, United States
                    </li>
                    <li>
                      <strong>Data Controller</strong>, for the purposes of the GDPR (General Data Protection
                      Regulation), refers to the Company as the legal person which alone or jointly with others
                      determines the purposes and means of the processing of Personal Data.
                    </li>
                    <li>
                      <strong>Device</strong> means any device that can access the Service such as a computer, a
                      cellphone or a digital tablet.
                    </li>
                    <li>
                      <strong>Do Not Track (DNT)</strong> is a concept that has been promoted by US regulatory
                      authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to
                      develop and implement a mechanism for allowing internet users to control the tracking of their
                      online activities across websites.
                    </li>
                    <li>
                      <strong>GDPR</strong> refers to EU General Data Protection Regulation.
                    </li>
                    <li>
                      <strong>Personal Data</strong> is any information that relates to an identified or identifiable
                      individual. For the purposes of GDPR, Personal Data means any information relating to You such as
                      a name, an identification number, location data, online identifier or to one or more factors
                      specific to the physical, physiological, genetic, mental, economic, cultural or social identity.
                      For the purposes of the CCPA/CPRA, Personal Data means any information that identifies, relates
                      to, describes or is capable of being associated with, or could reasonably be linked, directly or
                      indirectly, with You.
                    </li>
                    <li>
                      <strong>Service</strong> refers to the Website.
                    </li>
                    <li>
                      <strong>Service Provider</strong> means any natural or legal person who processes the data on
                      behalf of the Company. It refers to third-party companies or individuals employed by the Company
                      to facilitate the Service, to provide the Service on behalf of the Company, to perform services
                      related to the Service or to assist the Company in analyzing how the Service is used. For the
                      purpose of the GDPR, Service Providers are considered Data Processors.
                    </li>
                    <li>
                      <strong>Third-party Social Media Service</strong> refers to any website or any social network
                      website through which a User can log in or create an account to use the Service.
                    </li>
                    <li>
                      <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of
                      the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                    </li>
                    <li>
                      <strong>Website</strong> refers to SuperINTRO, accessible from https://www.SuperINTRO
                    </li>
                    <li>
                      <strong>You</strong> means the individual accessing or using the Service, or the company, or other
                      legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                      Under GDPR, You can be referred to as the Data Subject or as the User as you are the individual
                      using the Service.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="collecting-data">
              <AccordionTrigger>Collecting and Using Your Personal Data</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <h3 className="font-medium">Types of Data Collected</h3>
                  <h4 className="font-medium text-sm">Personal Data</h4>
                  <p>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable
                    information that can be used to contact or identify You. This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Usage Data</li>
                  </ul>

                  <h4 className="font-medium text-sm">Usage Data</h4>
                  <p>Usage Data is collected automatically when using the Service. This may include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Browser type and version</li>
                    <li>Time spent on pages</li>
                    <li>Device information</li>
                    <li>IP address</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="use-of-data">
              <AccordionTrigger>Use of Your Personal Data</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>The Company may use Personal Data for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and maintain our Service</li>
                    <li>To manage Your Account</li>
                    <li>For the performance of a contract</li>
                    <li>To contact You</li>
                    <li>To provide You with news and offers</li>
                    <li>To manage Your requests</li>
                    <li>To deliver targeted advertising</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-retention">
              <AccordionTrigger>Retention of Your Personal Data</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out
                  in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply
                  with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ccpa-rights">
              <AccordionTrigger>CCPA Privacy Rights</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    Under the CCPA/CPRA, California residents have specific rights regarding their personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The right to notice</li>
                    <li>The right to know/access</li>
                    <li>The right to delete Personal Data</li>
                    <li>The right to correct Personal Data</li>
                    <li>The right to limit use of sensitive Personal Data</li>
                    <li>The right not to be discriminated against</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gdpr-rights">
              <AccordionTrigger>GDPR Privacy Rights</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>If you are within the EU, you have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Request access to Your Personal Data</li>
                    <li>Request correction of Your Personal Data</li>
                    <li>Request erasure of Your Personal Data</li>
                    <li>Object to processing of Your Personal Data</li>
                    <li>Request restriction of processing Your Personal Data</li>
                    <li>Request transfer of Your Personal Data</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="children">
              <AccordionTrigger>Children's Privacy</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Our Service does not address anyone under the age of 13. We do not knowingly collect personally
                  identifiable information from anyone under the age of 13. If You are a parent or guardian and You are
                  aware that Your child has provided Us with Personal Data, please contact Us.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="changes">
              <AccordionTrigger>Changes to this Privacy Policy</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                  Privacy Policy periodically for any changes.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact">
              <AccordionTrigger>Contact Us</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, You can contact us:
                  <br />
                  By email: admin@aios.agency
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}