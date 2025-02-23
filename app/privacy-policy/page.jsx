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

          <p className="text-muted-foreground leading-normal text-smaller">
            This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your
            information when you  use the service and tells you about your privacy rights and how the law protects you.
            We use your Personal data to provide and improve the service. By using the service, you agree to the
            collection and use of information in accordance with this Privacy Policy.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="interpretation">
              <AccordionTrigger>Interpretation and Definitions</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <h3 className="font-large">Interpretation</h3>
                  <p>
                    The words of which the initial letter is capitalized have meanings defined under the following
                    conditions. The following definitions shall have the same meaning regardless of whether they appear
                    in singular or in plural.
                  </p>

                  <h3 className="font-large">Definitions</h3>
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
                    information that can be used to contact or identify You. Personally identifiable information may
                    include, but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Usage Data</li>
                  </ul>

                  <h4 className="font-medium text-sm">Usage Data</h4>
                  <p>
                    Usage Data is collected automatically when using the Service. Usage Data may include information
                    such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version,
                    the pages of our Service that You visit, the time and date of Your visit, the time spent on those
                    pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    When You access the Service by or through a mobile device, We may collect certain information
                    automatically, including, but not limited to, the type of mobile device You use, Your mobile device
                    unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile
                    Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    We may also collect information that Your browser sends whenever You visit our Service or when You
                    access the Service by or through a mobile device.
                  </p>

                  <h4 className="font-medium text-sm">Information from Third-Party Social Media Services</h4>
                  <p>
                    The Company allows You to create an account and log in to use the Service through the following
                    Third-party Social Media Services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Google</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                  </ul>
                  <p>
                    If You decide to register through or otherwise grant us access to a Third-Party Social Media
                    Service, We may collect Personal data that is already associated with Your Third-Party Social Media
                    Service's account, such as Your name, Your email address, Your activities or Your contact list
                    associated with that account.
                  </p>
                  <p>
                    You may also have the option of sharing additional information with the Company through Your
                    Third-Party Social Media Service's account. If You choose to provide such information and Personal
                    Data, during registration or otherwise, You are giving the Company permission to use, share, and
                    store it in a manner consistent with this Privacy Policy.
                  </p>

                  <h4 className="font-medium text-sm">Tracking Technologies and Cookies</h4>
                  <p>
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store
                    certain information. Tracking technologies used are beacons, tags, and scripts to collect and track
                    information and to improve and analyze Our Service. The technologies We use may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device. You
                      can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.
                      However, if You do not accept Cookies, You may not be able to use some parts of our Service.
                      Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use
                      Cookies.
                    </li>
                    <li>
                      <strong>Web Beacons:</strong> Certain sections of our Service and our emails may contain small
                      electronic files known as web beacons (also referred to as clear gifs, pixel tags, and
                      single-pixel gifs) that permit the Company, for example, to count users who have visited those
                      pages or opened an email and for other related website statistics (for example, recording the
                      popularity of a certain section and verifying system and server integrity).
                    </li>
                  </ul>
                  <p>
                    Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal
                    computer or mobile device when You go offline, while Session Cookies are deleted as soon as You
                    close Your web browser.
                  </p>
                  <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Necessary / Essential Cookies</strong>
                      <br />
                      Type: Session Cookies
                      <br />
                      Administered by: Us
                      <br />
                      Purpose: These Cookies are essential to provide You with services available through the Website
                      and to enable You to use some of its features. They help to authenticate users and prevent
                      fraudulent use of user accounts. Without these Cookies, the services that You have asked for
                      cannot be provided, and We only use these Cookies to provide You with those services.
                    </li>
                    <li>
                      <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                      <br />
                      Type: Persistent Cookies
                      <br />
                      Administered by: Us
                      <br />
                      Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                    </li>
                    <li>
                      <strong>Functionality Cookies</strong>
                      <br />
                      Type: Persistent Cookies
                      <br />
                      Administered by: Us
                      <br />
                      Purpose: These Cookies allow us to remember choices You make when You use the Website, such as
                      remembering your login details or language preference. The purpose of these Cookies is to provide
                      You with a more personal experience and to avoid You having to re-enter your preferences every
                      time You use the Website.
                    </li>
                    <li>
                      <strong>Tracking and Performance Cookies</strong>
                      <br />
                      Type: Persistent Cookies
                      <br />
                      Administered by: Third-Parties
                      <br />
                      Purpose: These Cookies are used to track information about traffic to the Website and how users
                      use the Website. The information gathered via these Cookies may directly or indirectly identify
                      you as an individual visitor. This is because the information collected is typically linked to a
                      pseudonymous identifier associated with the device you use to access the Website. We may also use
                      these Cookies to test new pages, features or new functionality of the Website to see how our users
                      react to them.
                    </li>
                  </ul>
                  <p>
                    For more information about the cookies we use and your choices regarding cookies, please visit our
                    Cookies Policy or the Cookies section of our Privacy Policy.
                  </p>
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

            <AccordionItem value="behavioral-remarketing">
              <AccordionTrigger>Behavioral Remarketing</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p>
                      The Company uses remarketing services to advertise to You after You accessed or visited our
                      Service. We and Our third-party vendors use cookies and non-cookie technologies to help Us
                      recognize Your Device and understand how You use our Service so that We can improve our Service to
                      reflect Your interests and serve You advertisements that are likely to be more interesting to you.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">How It Works</h3>
                    <p>
                      These third party vendors collect, store, use, process, and transfer information about Your
                      activity on Our Service in accordance with their Privacy Policies and to enable Us to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Measure and analyze traffic and browsing activity on Our Service</li>
                      <li>
                        Show advertisements for our products and/or services to You on third-party websites or apps
                      </li>
                      <li>Measure and analyze the performance of Our advertising campaigns</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Non-Cookie Technologies and Opt-Out</h3>
                    <p>
                      Some of these third-party vendors may use non-cookie technologies that may not be impacted by
                      browser settings that block cookies. Your browser may not permit You to block such technologies.
                      You can use the following third-party tools to decline the collection and use of information for
                      the purpose of serving You interest-based advertising:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>
                        <a href="http://www.networkadvertising.org/choices/" className="text-blue-600 hover:underline">
                          The NAI's opt-out platform
                        </a>
                      </li>
                      <li>
                        <a href="http://www.youronlinechoices.com/" className="text-blue-600 hover:underline">
                          The EDAA's opt-out platform
                        </a>
                      </li>
                      <li>
                        <a href="http://optout.aboutads.info/?c=2&lang=EN" className="text-blue-600 hover:underline">
                          The DAA's opt-out platform
                        </a>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Mobile Device Opt-Out</h3>
                    <p>
                      You may opt-out of all personalized advertising by enabling privacy features on Your mobile device
                      such as Limit Ad Tracking (iOS) and Opt Out of Ads Personalization (Android). See Your mobile
                      device Help system for more information.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Information Sharing</h3>
                    <p>
                      We may share information, such as hashed email addresses (if available) or other online
                      identifiers collected on Our Service with these third-party vendors. This allows Our third-party
                      vendors to recognize and deliver You ads across devices and browsers. To read more about the
                      technologies used by these third-party vendors and their cross-device capabilities please refer to
                      the Privacy Policy of each vendor listed below.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Third-Party Vendors</h3>
                    <p>The third-party vendors We use are:</p>

                    <div className="space-y-4 mt-4">
                      <div>
                        <h4 className="font-semibold">Google Ads (AdWords)</h4>
                        <p>Google Ads (AdWords) remarketing service is provided by Google Inc.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                          <li>
                            You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the{" "}
                            <a href="http://www.google.com/settings/ads" className="text-blue-600 hover:underline">
                              Google Ads Settings page
                            </a>
                          </li>
                          <li>
                            Google also recommends installing the{" "}
                            <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">
                              Google Analytics Opt-out Browser Add-on
                            </a>{" "}
                            for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.
                          </li>
                          <li>
                            For more information on the privacy practices of Google, please visit the{" "}
                            <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
                              Google Privacy & Terms web page
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold">Bing Ads Remarketing</h4>
                        <p>Bing Ads remarketing service is provided by Microsoft Inc.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                          <li>
                            You can opt-out of Bing Ads interest-based ads by following their instructions:{" "}
                            <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" className="text-blue-600 hover:underline">
                              https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                            </a>
                          </li>
                          <li>
                            You can learn more about the privacy practices and policies of Microsoft by visiting their{" "}
                            <a href="https://privacy.microsoft.com/en-us/PrivacyStatement" className="text-blue-600 hover:underline">
                              Privacy Policy page
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold">Twitter</h4>
                        <p>Twitter remarketing service is provided by Twitter Inc.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                          <li>
                            You can opt-out from Twitter's interest-based ads by following their instructions:{" "}
                            <a href="https://support.twitter.com/articles/20170405" className="text-blue-600 hover:underline">
                              https://support.twitter.com/articles/20170405
                            </a>
                          </li>
                          <li>
                            You can learn more about the privacy practices and policies of Twitter by visiting their{" "}
                            <a href="https://twitter.com/privacy" className="text-blue-600 hover:underline">
                              Privacy Policy page
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold">Facebook</h4>
                        <p>Facebook remarketing service is provided by Facebook Inc.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                          <li>
                            You can learn more about interest-based advertising from Facebook by visiting this page:{" "}
                            <a href="https://www.facebook.com/help/516147308587266" className="text-blue-600 hover:underline">
                              https://www.facebook.com/help/516147308587266
                            </a>
                          </li>
                          <li>
                            To opt-out from Facebook's interest-based ads, follow these instructions from Facebook:{" "}
                            <a href="https://www.facebook.com/help/568137493302217" className="text-blue-600 hover:underline">
                              https://www.facebook.com/help/568137493302217
                            </a>
                          </li>
                          <li>
                            Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through:
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                              <li>
                                The{" "}
                                <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline">
                                  Digital Advertising Alliance in the USA
                                </a>
                              </li>
                              <li>
                                The{" "}
                                <a href="http://youradchoices.ca/" className="text-blue-600 hover:underline">
                                  Digital Advertising Alliance of Canada in Canada
                                </a>
                              </li>
                              <li>
                                The{" "}
                                <a href="http://www.youronlinechoices.eu/" className="text-blue-600 hover:underline">
                                  European Interactive Digital Advertising Alliance in Europe
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>You can also opt-out using your mobile device settings.</li>
                          <li>
                            For more information on the privacy practices of Facebook, please visit{" "}
                            <a href="https://www.facebook.com/privacy/explanation" className="text-blue-600 hover:underline">
                              Facebook's Data Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gdpr-legal-basis">
              <AccordionTrigger>Legal Basis for Processing Personal Data under GDPR [GDPR Privacy] </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>We may process Personal Data under the following conditions:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Consent:</strong> You have given Your consent for processing Personal Data for one or more
                      specific purposes.
                    </li>
                    <li>
                      <strong>Performance of a contract:</strong> Provision of Personal Data is necessary for the
                      performance of an agreement with You and/or for any pre-contractual obligations thereof.
                    </li>
                    <li>
                      <strong>Legal obligations:</strong> Processing Personal Data is necessary for compliance with a
                      legal obligation to which the Company is subject.
                    </li>
                    <li>
                      <strong>Vital interests:</strong> Processing Personal Data is necessary in order to protect Your
                      vital interests or of another natural person.
                    </li>
                    <li>
                      <strong>Public interests:</strong> Processing Personal Data is related to a task that is carried
                      out in the public interest or in the exercise of official authority vested in the Company.
                    </li>
                    <li>
                      <strong>Legitimate interests:</strong> Processing Personal Data is necessary for the purposes of
                      the legitimate interests pursued by the Company.
                    </li>
                  </ul>
                  <p>
                    In any case, the Company will gladly help to clarify the specific legal basis that applies to the
                    processing, and in particular whether the provision of Personal Data is a statutory or contractual
                    requirement, or a requirement necessary to enter into a contract.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value="gdpr-rights-details">
              <AccordionTrigger>Your Rights under the GDPR</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  The Company undertakes to respect the confidentiality of Your Personal Data and to guarantee You can
                  exercise Your rights. You have the right under this Privacy Policy, and by law if You are within the
                  EU, to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong>Request access to Your Personal Data.</strong> The right to access, update or delete the
                    information We have on You. Whenever made possible, you can access, update or request deletion of
                    Your Personal Data directly within Your account settings section. If you are unable to perform these
                    actions yourself, please contact Us to assist You. This also enables You to receive a copy of the
                    Personal Data We hold about You.
                  </li>
                  <li>
                    <strong>Request correction of the Personal Data that We hold about You.</strong> You have the right
                    to have any incomplete or inaccurate information We hold about You corrected.
                  </li>
                  <li>
                    <strong>Object to processing of Your Personal Data.</strong> This right exists where We are relying
                    on a legitimate interest as the legal basis for Our processing and there is something about Your
                    particular situation, which makes You want to object to our processing of Your Personal Data on this
                    ground. You also have the right to object where We are processing Your Personal Data for direct
                    marketing purposes.
                  </li>
                  <li>
                    <strong>Request erasure of Your Personal Data.</strong> You have the right to ask Us to delete or
                    remove Personal Data when there is no good reason for Us to continue processing it.
                  </li>
                  <li>
                    <strong>Request the transfer of Your Personal Data.</strong> We will provide to You, or to a
                    third-party You have chosen, Your Personal Data in a structured, commonly used, machine-readable
                    format. Please note that this right only applies to automated information which You initially
                    provided consent for Us to use or where We used the information to perform a contract with You.
                  </li>
                  <li>
                    <strong>Withdraw Your consent.</strong> You have the right to withdraw Your consent on using your
                    Personal Data. If You withdraw Your consent, We may not be able to provide You with access to
                    certain specific functionalities of the Service.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="exercising-gdpr-rights">
              <AccordionTrigger>Exercising of Your GDPR Data Protection Rights</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    You may exercise Your rights of access, rectification, cancellation and opposition by contacting Us.
                    Please note that we may ask You to verify Your identity before responding to such requests. If You
                    make a request, We will try our best to respond to You as soon as possible.
                  </p>
                  <p>
                    You have the right to complain to a Data Protection Authority about Our collection and use of Your
                    Personal Data. For more information, if You are in the European Economic Area (EEA), please contact
                    Your local data protection authority in the EEA.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ccpa-cpra-privacy-notice">
              <AccordionTrigger>CCPA/CPRA Privacy Notice (California Privacy Rights)</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    This privacy notice section for California residents supplements the information contained in Our
                    Privacy Policy and it applies solely to all visitors, users, and others who reside in the State of
                    California.
                  </p>

                  <h3 className="text-lg font-semibold">Categories of Personal Information Collected</h3>
                  <p>
                    We collect information that identifies, relates to, describes, references, is capable of being
                    associated with, or could reasonably be linked, directly or indirectly, with a particular Consumer
                    or Device. The following is a list of categories of personal information which we may collect or may
                    have been collected from California residents within the last twelve (12) months.
                  </p>
                  <p>
                    Please note that the categories and examples provided in the list below are those defined in the
                    CCPA/CPRA. This does not mean that all examples of that category of personal information were in
                    fact collected by Us, but reflects our good faith belief to the best of Our knowledge that some of
                    that information from the applicable category may be and may have been collected. For example,
                    certain categories of personal information would only be collected if You provided such personal
                    information directly to Us.
                  </p>

                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Category A: Identifiers.</strong>
                      <br />
                      Examples: A real name, alias, postal address, unique personal identifier, online identifier,
                      Internet Protocol address, email address, account name, driver's license number, passport number,
                      or other similar identifiers.
                      <br />
                      Collected: Yes.
                    </li>
                    <li>
                      <strong>
                        Category B: Personal information categories listed in the California Customer Records statute
                        (Cal. Civ. Code § 1798.80(e)).
                      </strong>
                      <br />
                      Examples: A name, signature, Social Security number, physical characteristics or description,
                      address, telephone number, passport number, driver's license or state identification card number,
                      insurance policy number, education, employment, employment history, bank account number, credit
                      card number, debit card number, or any other financial information, medical information, or health
                      insurance information. Some personal information included in this category may overlap with other
                      categories.
                      <br />
                      Collected: Yes.
                    </li>
                    <li>
                      <strong>
                        Category C: Protected classification characteristics under California or federal law.
                      </strong>
                      <br />
                      Examples: Age (40 years or older), race, color, ancestry, national origin, citizenship, religion
                      or creed, marital status, medical condition, physical or mental disability, sex (including gender,
                      gender identity, gender expression, pregnancy or childbirth and related medical conditions),
                      sexual orientation, veteran or military status, genetic information (including familial genetic
                      information).
                      <br />
                      Collected: No.
                    </li>
                    <li>
                      <strong>Category D: Commercial information.</strong>
                      <br />
                      Examples: Records and history of products or services purchased or considered.
                      <br />
                      Collected: Yes.
                    </li>
                    <li>
                      <strong>Category E: Biometric information.</strong>
                      <br />
                      Examples: Genetic, physiological, behavioral, and biological characteristics, or activity patterns
                      used to extract a template or other identifier or identifying information, such as, fingerprints,
                      faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns,
                      and sleep, health, or exercise data.
                      <br />
                      Collected: No.
                    </li>
                    <li>
                      <strong>Category F: Internet or other similar network activity.</strong>
                      <br />
                      Examples: Interaction with our Service or advertisement.
                      <br />
                      Collected: Yes.
                    </li>
                    <li>
                      <strong>Category G: Geolocation data.</strong>
                      <br />
                      Examples: Approximate physical location.
                      <br />
                      Collected: No.
                    </li>
                    <li>
                      <strong>Category H: Sensory data.</strong>
                      <br />
                      Examples: Audio, electronic, visual, thermal, olfactory, or similar information.
                      <br />
                      Collected: No.
                    </li>
                    <li>
                      <strong>Category I: Professional or employment-related information.</strong>
                      <br />
                      Examples: Current or past job history or performance evaluations.
                      <br />
                      Collected: No.
                    </li>
                    <li>
                      <strong>
                        Category J: Non-public education information (per the Family Educational Rights and Privacy Act
                        (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).
                      </strong>
                      <br />
                      Examples: Education records directly related to a student maintained by an educational institution
                      or party acting on its behalf, such as grades, transcripts, class lists, student schedules,
                      student identification codes, student financial information, or student disciplinary records.
                      <br />
                      Collected: No.
                    </li>
                    <li>
                      <strong>Category K: Inferences drawn from other personal information.</strong>
                      <br />
                      Examples: Profile reflecting a person's preferences, characteristics, psychological trends,
                      predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.
                      <br />
                      Collected: No.
                    </li>
                    <li>
                      <strong>Category L: Sensitive personal information.</strong>
                      <br />
                      Examples: Account login and password information, geolocation data.
                      <br />
                      Collected: Yes.
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-6">Personal information does not include:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Publicly available information from government records</li>
                    <li>Deidentified or aggregated consumer information</li>
                    <li>
                      Information excluded from the CCPA/CPRA's scope, such as:
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>
                          Health or medical information covered by the Health Insurance Portability and Accountability
                          Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or
                          clinical trial data
                        </li>
                        <li>
                          Personal Information covered by certain sector-specific privacy laws, including the Fair
                          Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial
                          Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="sources-of-personal-information">
              <AccordionTrigger>Sources of Personal Information</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <span>
                    We obtain the categories of personal information listed above from the following categories of
                    sources:
                  </span>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Directly from You.</strong> For example, from the forms You complete on our Service,
                      preferences You express or provide through our Service, or from Your purchases on our Service.
                    </li>
                    <li>
                      <strong>Indirectly from You.</strong> For example, from observing Your activity on our Service.
                    </li>
                    <li>
                      <strong>Automatically from You.</strong> For example, through cookies We or our Service Providers
                      set on Your Device as You navigate through our Service.
                    </li>
                    <li>
                      <strong>From Service Providers.</strong> For example, third-party vendors to monitor and analyze
                      the use of our Service, third-party vendors to deliver targeted advertising to You, third-party
                      vendors for payment processing, or other third-party vendors that We use to provide the Service to
                      You.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="use-of-personal-information">
              <AccordionTrigger>Use of Personal Information</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    We may use or disclose personal information We collect for "business purposes" or "commercial
                    purposes" (as defined under the CCPA/CPRA), which may include the following examples:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To operate our Service and provide You with Our Service.</li>
                    <li>
                      To provide You with support and to respond to Your inquiries, including to investigate and address
                      Your concerns and monitor and improve our Service.
                    </li>
                    <li>
                      To fulfill or meet the reason You provided the information. For example, if You share Your contact
                      information to ask a question about our Service, We will use that personal information to respond
                      to Your inquiry. If You provide Your personal information to purchase a product or service, We
                      will use that information to process Your payment and facilitate delivery.
                    </li>
                    <li>
                      To respond to law enforcement requests and as required by applicable law, court order, or
                      governmental regulations.
                    </li>
                    <li>
                      As described to You when collecting Your personal information or as otherwise set forth in the
                      CCPA/CPRA.
                    </li>
                    <li>For internal administrative and auditing purposes.</li>
                    <li>
                      To detect security incidents and protect against malicious, deceptive, fraudulent or illegal
                      activity, including, when necessary, to prosecute those responsible for such activities.
                    </li>
                    <li>Other one-time uses.</li>
                  </ul>
                  <p>
                    Please note that the examples provided above are illustrative and not intended to be exhaustive. For
                    more details on how we use this information, please refer to the "Use of Your Personal Data"
                    section.
                  </p>
                  <p>
                    If We decide to collect additional categories of personal information or use the personal
                    information We collected for materially different, unrelated, or incompatible purposes, We will
                    update this Privacy Policy.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="disclosure-of-personal-information">
              <AccordionTrigger>Disclosure of Personal Information</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    We may use or disclose and may have used or disclosed in the last twelve (12) months the following
                    categories of personal information for business or commercial purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong> Category A:</strong> Identifiers</li>
                    <li> <strong> Category B: </strong>Personal information categories listed in the California Customer Records statute
                      (Cal. Civ. Code § 1798.80(e))
                    </li>
                    <li> <strong> Category D:</strong> Commercial information</li>
                    <li> <strong>  Category F:</strong> Internet or other similar network activity</li>
                  </ul>
                  <p>
                    Please note that the categories listed above are those defined in the CCPA/CPRA. This does not mean
                    that all examples of that category of personal information were in fact disclosed, but reflects our
                    good faith belief to the best of our knowledge that some of that information from the applicable
                    category may be and may have been disclosed.
                  </p>
                  <p>
                    When We disclose personal information for a business purpose or a commercial purpose, We enter a
                    contract that describes the purpose and requires the recipient to both keep that personal
                    information confidential and not use it for any purpose except performing the contract.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="share-of-personal-information">
              <AccordionTrigger>Share of Personal Information</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    We may share, and have shared in the last twelve (12) months, Your personal information identified
                    in the above categories with the following categories of third parties:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service Providers</li>
                    <li>Payment processors</li>
                    <li>Our affiliates</li>
                    <li>Our business partners</li>
                    <li>
                      Third party vendors to whom You or Your agents authorize Us to disclose Your personal information
                      in connection with products or services We provide to You
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sale-of-personal-info ">
              <AccordionTrigger> Sale of Personal Information </AccordionTrigger>
              <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                <h3 className="font-large font-bold"> Definition of "Sell" and "Sale" Under CCPA/CPRA  </h3>
                  <p>
                    As defined in the CCPA/CPRA, "sell" and "sale" refer to the sharing of a Consumer's personal information by a
                    Business to a third party for valuable consideration. This means that we may have received some kind of benefit
                    in return for sharing personal information, but not necessarily a monetary benefit.
                  </p>
                <h3 className="font-large font-bold"> Our Practices Regarding the Sale of Personal Information </h3>
                  <p>
                    We do not sell personal information as the term "sell" is commonly understood. However, we do allow Service Providers
                    to use your personal information for business purposes, such as Advertising, Marketing and Analytics. These activities may be
                    deemed a "sale" under CCPA/CPRA.
                  </p>
                <h3 className="font-large font-bold"> Categories of Personal Information That May Be Sold </h3>
                   <p>  </p>
                  <span> We may sell and may have sold in the last 12 months the following categories of personal information: </span>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>  <strong> Category A: </strong> Identifiers </li>
                      <li>  <strong> Category B: </strong> Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)) </li>
                      <li>  <strong> Category D: </strong> Commercial information </li>
                      <li>  <strong> Category E: </strong> Internet or other similar network activity </li>
                    </ul>
                  <p>
                      Please note that this does not mean that all examples of that category of personal information were in fact 
                      sold. Rather, it reflects our good faith belief to the best of our knowledge that some of that information 
                      from the applicable category may be and may have been shared for value in return.
                  </p>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="not-sale-of-minors-data">
              <AccordionTrigger>Sale of Personal Information of Minors Under 16 Years of Age</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    We do not knowingly collect personal information from minors under the age of 16 through our
                    Service, although certain third party websites that we link to may do so. These third-party websites
                    have their own terms of use and privacy policies and We encourage parents and legal guardians to
                    monitor their children's Internet usage and instruct their children to never provide information on
                    other websites without their permission.
                  </p>
                  <p>
                    We do not sell the personal information of Consumers We actually know are less than 16 years of age,
                    unless We receive affirmative authorization (the "right to opt-in") from either:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The Consumer who is between 13 and 16 years of age</li>
                    <li>The parent or guardian of a Consumer less than 13 years of age.</li>
                  </ul>
                  <p>
                    Consumers who opt-in to the sale of personal information may opt-out of future sales at any time. To
                    exercise the right to opt-out, You (or Your authorized representative) may submit a request to Us by
                    contacting Us.
                  </p>
                  <p>
                    If You have reason to believe that a child under the age of 13 (or 16) has provided Us with personal
                    information, please contact Us with sufficient detail to enable Us to delete that information.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value="ccpa-cpra-rights">
              <AccordionTrigger> Your Rights Under CCPA/CPRA</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>As a California resident, you have the following rights regarding your personal information:</p>

                  <div className="space-y-2">
                    <h4 className="font-large font-bold"> Right to Notice</h4>
                    <p>
                      You have the right to be notified which categories of Personal Data are being collected and the
                      purposes for which the Personal Data is being used.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-large font-bold"> Right to Know/Access</h4>
                    <p>
                      You have the right to request that we disclose information to you about our collection, use, sale,
                      disclosure for business purposes, and sharing of personal information. Once we receive and confirm
                      your request, we will disclose to you:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>The categories of personal information we collected about you</li>
                      <li>The categories of sources for the personal information we collected about you</li>
                      <li>Our business or commercial purposes for collecting or selling that personal information</li>
                      <li>The categories of third parties with whom we share that personal information</li>
                      <li>The specific pieces of personal information we collected about you</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-large font-bold">Right to Opt-Out of Sale or Sharing of Personal Data</h4>
                    <p>
                      You have the right to direct us to not sell your personal information. To submit an opt-out
                      request, please see the "Do Not Sell My Personal Information" section or contact us.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-large font-bold"> Right to Correct Personal Data</h4>
                    <p>
                      You have the right to correct or rectify any inaccurate personal information about you that we
                      collected. Once we receive and confirm your request, we will use commercially reasonable efforts
                      to correct (and direct our Service Providers to correct) your personal information, unless an
                      exception applies.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-large font-bold"> Right to Limit Use and Disclosure of Sensitive Personal Data</h4>
                    <p>
                      You have the right to request to limit the use or disclosure of certain sensitive personal
                      information we collected about you, unless an exception applies. To submit, please see the "Limit
                      the Use or Disclosure of My Sensitive Personal Information" section or contact us.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-large font-bold"> Right to Delete Personal Data</h4>
                    <p>
                      You have the right to request the deletion of your Personal Data under certain circumstances,
                      subject to certain exceptions. Once we receive and confirm your request, we will delete (and
                      direct our Service Providers to delete) your personal information from our records, unless an
                      exception applies.
                    </p>

                    <h5 className="font-medium text-sm mt-2">Exceptions to Deletion Request</h5>
                    <p>
                      We may deny your deletion request if retaining the information is necessary for us or our Service
                      Providers to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Complete the transaction for which we collected the personal information</li>
                      <li>Provide a good or service that you requested</li>
                      <li>
                        Take actions reasonably anticipated within the context of our ongoing business relationship with
                        you
                      </li>
                      <li>
                        Detect security incidents, protect against malicious activity, or prosecute those responsible
                      </li>
                      <li>Debug products to identify and repair errors</li>
                      <li>
                        Exercise free speech or ensure the right of another consumer to exercise their free speech
                        rights
                      </li>
                      <li>Comply with the California Electronic Communications Privacy Act</li>
                      <li>Engage in public or peer-reviewed scientific research</li>
                      <li>Enable solely internal uses that are reasonably aligned with consumer expectations</li>
                      <li>Comply with a legal obligation</li>
                      <li>
                        Make other internal and lawful uses of that information that are compatible with the context in
                        which you provided it
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-large font-bold"> Right Not to Be Discriminated Against</h4>
                    <p>
                      You have the right not to be discriminated against for exercising any of your consumer's rights,
                      including by:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Denying goods or services to you</li>
                      <li>Charging different prices or rates for goods or services</li>
                      <li>Providing a different level or quality of goods or services to you</li>
                      <li>
                        Suggesting that you will receive a different price or rate for goods or services or a different
                        level or quality of goods or services
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
                        
            <AccordionItem value="exercising-CCPA-CPRA-rights">
              <AccordionTrigger>Exercising Your CCPA/CPRA Data Protection Rights  </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <h3 className="font-large font-bold"> Opting Out and Limiting the Use of Sensitive Information</h3>
                    <span>
                      Please see the "Do Not Sell My Personal Information" section and the "Limit the Use or Disclosure of
                      My Sensitive Personal Information" section for more information on how to opt out and limit the use 
                      of sensitive information collected.
                    </span>
                  <h3 className="font-large font-bold"> Exercising Your Rights under the CCPA/CPRA </h3>
                    <p>
                      If you are a California resident, you can contact us to exercise any of your rights under the CCPA/CPRA.
                      You can reach us by email at admin@flealyst.com.
                    </p>
                  <h3 className="font-large font-bold"> Making a Verifiable Request </h3>
                    <p>
                      Only you, or a person registered with the California Secretary of State that you authorize to act on your 
                      behalf, may make a verifiable request related to your personal information. Your request to us must:
                    </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li> Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.</li>
                        <li> Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
                      </ul>
                  <h3 className="font-large font-bold"> Responding to Your Request  </h3>
                    <span>
                      We cannot respond to your request or provide you with the required information if we cannot:
                    </span>
                      <ul className="list-disc pl-6 space-y-2">
                        <li> Verify your identity or authority to make the request. </li>
                        <li> Confirm that the personal information relates to you.  </li>
                      </ul>
                 <h3 className="font-large font-bold">Disclosure and Delivery of Information </h3>
                    <p>
                      We will disclose and deliver the required information free of charge within 45 days of 
                      your verifiable request. The time period to provide the required information may be extended 
                      once by an additional 45 days when reasonably necessary and with prior notice. Any disclosures
                      we provide will only cover the 12-month period preceding the verifiable request's receipt.
                    </p>
                  <h3 className="font-large font-bold"> Data Portability Requests </h3>
                    <p>
                      For data portability requests, we will select a format to provide your personal information that
                      is readily usable and should allow you to transmit the information from one entity to another 
                      entity without hindrance.
                    </p>
                
               </ul>
              </AccordionContent>
            </AccordionItem>
            

            <AccordionItem value="Dont-sell-my-info">
              <AccordionTrigger>Do Not Sell my Personal Information </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <h3 className="font-large font-bold"> Definition of "Sell" and "Sale" </h3>
                  <p>
                    As defined in the CCPA/CPRA, "sell" and "sale" mean selling, renting, releasing, disclosing, disseminating,
                    making available, transferring, or otherwise communicating orally, in writing, or by electronic or other 
                    means, a Consumer's personal information by the Business to a third party for valuable consideration.
                  </p>
                  <h3 className="font-large font-bold"> Our Practices </h3>
                  <p>
                    We do not sell personal information as the term sell is commonly understood. However, we do allow Service
                    Providers to use Your personal information for business purposes, such as advertising, marketing,
                    and analytics, which may be deemed a sale under CCPA/CPRA.
                  </p>
                  <h3 className="font-large font-bold">Your Rights</h3>
                  <p>
                    You have the right to opt-out of the sale of Your personal information. Once We receive and confirm a
                    verifiable consumer request from You, we will stop selling Your personal information.
                  </p>
                 <h3 className="font-large font-bold">Opting Out</h3>
                  <p>
                    To exercise Your right to opt-out, please contact Us. Please note that any opt-out is specific to
                    the browser You use, and You may need to opt out on every browser that You use.
                  </p>
                 <h3 className="font-large font-bold">Service Providers</h3>
                  <p>
                    The Service Providers we partner with (for example, our analytics or advertising partners) may use
                    technology on the Service that sells personal information as defined by the CCPA/CPRA law. If you
                    wish to opt out of the use of Your personal information for interest-based advertising purposes
                    and these potential sales as defined under CCPA/CPRA law, you may do so by following the instructions below.
                  </p>
               </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="website">
              <AccordionTrigger>Website</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
              <p>
                If applicable, click "Privacy Preferences", "Update Privacy Preferences" or "Do Not Sell My Personal Information" buttons 
                listed on the service to review your privacy preferences and opt out of cookies and other technologies that we may use. 
                Please note that you will need to opt out from each browser that you use to access the Service. Additionally, you can opt 
                out of receiving ads that are personalized as served by our Service Providers by following our instructions presented on 
                the service:
              </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>  <strong> The NAI's opt-out platform: </strong>  http://www.networkadvertising.org/choices/ </li>
                  <li>  <strong> The EDAA's opt-out platform </strong>  http://www.youronlinechoices.com/ </li>
                  <li>  <strong> The DAA's opt-out platform: </strong>  http://optout.aboutads.info/?c=2&lang=EN </li>
                </ul>
                <p>
                The opt out will place a cookie on Your computer that is unique to the browser you use to opt out. If you change browsers 
                or delete the cookies saved by Your browser, you will need to opt out again.
                </p>
               </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mobile-devices">
              <AccordionTrigger>Mobile Devices</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                Your mobile device may give you the ability to opt out of the use of information about the apps you use in order to serve 
                you ads that are targeted to your interests: "Opt out of Interest-Based Ads" or "Opt out of Ads Personalization" on Android devices
                "Limit Ad Tracking" on iOS devices you can also stop the collection of location information from your mobile device by changing
                 the preferences on your mobile device.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="limit-use-disclosure-SPI">
              <AccordionTrigger>Limit the Use or Disclosure of my Sensitive Personal Information</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                If you are a California resident, you have the right to limit the use and disclosure of your sensitive personal information 
                to that use which is necessary to perform the services or provide the goods reasonably expected by an average consumer who 
                requests such services or goods. We collect, use and disclose sensitive personal information in ways that are necessary 
                to provide the Service. For more information on how we use your personal information, please see the "Use of Your Personal Data"
                section or contact us.
                </p>
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value="do-not-track-policy-per-CalOPPA">
              <AccordionTrigger>"Do Not Track" Policy as required by California Online Privacy Protection Act (CalOPPA)</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                Our service does not respond to Do Not Track signals. However, some third party websites do keep track of Your browsing activities. 
                If you are visiting such websites, You can set your preferences in your web browser to inform websites that you do not want to be 
                tracked. You can enable or disable DNT by visiting the preferences or settings page of your web browser.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="your-ca-privacy-rights">
              <AccordionTrigger>Your California Privacy Rights (California's Shine the Light Law)</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                Under California Civil Code Section 1798 (California's Shine the Light Law), California residents with an established business 
                relationship with us can request information once a year about sharing their personal data with third parties for the third parties' 
                direct marketing purposes. If you'd like to request more information under the California Shine the Light Law, and if you are a 
                California resident, you can contact us using the contact information provided below.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ca-privacy-rights-for-minor-users">
              <AccordionTrigger>California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Our service does not address anyone under the age of 13. We do not knowingly collect personally
                  identifiable information from anyone under the age of 13. If you are a parent or guardian and you are
                  aware that your child has provided us with personal data, please contact us.
                </p>
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

            <AccordionItem value="links">
              <AccordionTrigger>Links to Other Websites</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                Our service may contain links to other websites that are not operated by us. If you click on a third party link, you
                will be directed to that third party's site. We strongly advise you to review the privacy policy of every site you visit.
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites 
                or services.
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
                  If you have any questions about this Privacy Policy, you can contact us by email
                  at admin@aios.agency
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}