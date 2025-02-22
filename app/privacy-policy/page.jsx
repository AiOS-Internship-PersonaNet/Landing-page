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