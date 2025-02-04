// app/terms-and-conditions/page.jsx
// this is Terms & Conditions file

//import "termsconds.css" file from term-and-conditions file
import Link from "next/link";
import "./termsconds.css";
import { Button } from "@/components/ui/button";

export default function Termsandcond() {
  return (
    <div className="pb-6">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              <img src="/images/logo.svg" width={120} alt="SuperIntro" />
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 px-4">
            <Link
              href="/#how-it-works"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Success Stories
            </Link>
            {/* <Link
              href="#pricing"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Pricing
            </Link> */}
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
      <div className="container">
        {/* Terms and Conditions */}
        <h1>Terms and Conditions</h1>
        <p>
          Last updated: Dec 23, 2024 Please read these terms and conditions
          carefully before using Our Service.
        </p>
        {/* Interpretation and Definitions */}
        <h1>Interpretation and Definitions</h1>
        <p>
          Interpretation The words of which the initial letter is capitalized
          have meanings defined under the following conditions. The following
          definitions shall have the same meaning regardless of whether they
          appear in singular or in plural. Definitions For the purposes of these
          Terms and Conditions: Affiliate means an entity that controls, is
          controlled by or is under common control with a party, where "control"
          means ownership of 50% or more of the shares, equity interest or other
          securities entitled to vote for election of directors or other
          managing authority. Account means a unique account created for You to
          access our Service or parts of our Service. Country refers to:
          California, United States Company (referred to as either "the
          Company", "We", "Us" or "Our" in this Agreement) refers to SuperINTRO,
          Inc, 528 Larkin St Ste 300. Content refers to content such as text,
          images, or other information that can be posted, uploaded, linked to
          or otherwise made available by You, regardless of the form of that
          content. Device means any device that can access the Service such as a
          computer, a cellphone or a digital tablet. Feedback means feedback,
          innovations or suggestions sent by You regarding the attributes,
          performance or features of our Service. Free Trial refers to a limited
          period of time that may be free when purchasing a Subscription. Goods
          refer to the items offered for sale on the Service. Orders mean a
          request by You to purchase Goods from Us. Promotions refer to
          contests, sweepstakes or other promotions offered through the Service.
          Service refers to the Website. Subscriptions refer to the services or
          access to the Service offered on a subscription basis by the Company
          to You. Terms and Conditions (also referred as "Terms") mean these
          Terms and Conditions that form the entire agreement between You and
          the Company regarding the use of the Service. Third-party Social Media
          Service means any services or content (including data). Website refers
          to SuperINTRO, accessible from https://www.SuperINTRO.com You means
          the individual accessing or using the Service, or the company, or
          other legal entity on behalf of which such individual is accessing or
          using the Service, as applicable.
        </p>
        {/* Collecting and Using Your Personal Data */}
        <h1>Collecting and Using Your Personal Data</h1>
        <p>
          Types of Data Collected Personal Data While using Our Service, We may
          ask You to provide Us with certain personally identifiable information
          that can be used to contact or identify You. Personally identifiable
          information may include, but is not limited to: Email address First
          name and last name Usage Data Usage Data Usage Data is collected
          automatically when using the Service. Usage Data may include
          information such as Your Device's Internet Protocol address (e.g. IP
          address), browser type, browser version, the pages of our Service that
          You visit, the time and date of Your visit, the time spent on those
          pages, unique device identifiers and other diagnostic data. When You
          access the Service by or through a mobile device, We may collect
          certain information automatically, including, but not limited to, the
          type of mobile device You use, Your mobile device unique ID, the IP
          address of Your mobile device, Your mobile operating system, the type
          of mobile Internet browser You use, unique device identifiers and
          other diagnostic data. We may also collect information that Your
          browser sends whenever You visit our Service or when You access the
          Service by or through a mobile device. Information from Third-Party
          Social Media Services The Company allows You to create an account and
          log in to use the Service through the following Third-party Social
          Media Services: Google Facebook Twitter LinkedIn If You decide to
          register through or otherwise grant us access to a Third-Party Social
          Media Service, We may collect Personal data that is already associated
          with Your Third-Party Social Media Service's account, such as Your
          name, Your email address, Your activities or Your contact list
          associated with that account. You may also have the option of sharing
          additional information with the Company through Your Third-Party
          Social Media Service's account. If You choose to provide such
          information and Personal Data, during registration or otherwise, You
          are giving the Company permission to use, share, and store it in a
          manner consistent with this Privacy Policy. Tracking Technologies and
          Cookies We use Cookies and similar tracking technologies to track the
          activity on Our Service and store certain information. Tracking
          technologies used are beacons, tags, and scripts to collect and track
          information and to improve and analyze Our Service. The technologies
          We use may include: Cookies or Browser Cookies. A cookie is a small
          file placed on Your Device. You can instruct Your browser to refuse
          all Cookies or to indicate when a Cookie is being sent. However, if
          You do not accept Cookies, You may not be able to use some parts of
          our Service. Unless you have adjusted Your browser setting so that it
          will refuse Cookies, our Service may use Cookies. Web Beacons. Certain
          sections of our Service and our emails may contain small electronic
          files known as web beacons (also referred to as clear gifs, pixel
          tags, and single-pixel gifs) that permit the Company, for example, to
          count users who have visited those pages or opened an email and for
          other related website statistics (for example, recording the
          popularity of a certain section and verifying system and server
          integrity). Cookies can be "Persistent" or "Session" Cookies.
          Persistent Cookies remain on Your personal computer or mobile device
          when You go offline, while Session Cookies are deleted as soon as You
          close Your web browser. You can learn more about cookies on TermsFeed
          website article. We use both Session and Persistent Cookies for the
          purposes set out below: Necessary / Essential Cookies Type: Session
          Cookies Administered by: Us Purpose: These Cookies are essential to
          provide You with services available through the Website and to enable
          You to use some of its features. They help to authenticate users and
          prevent fraudulent use of user accounts. Without these Cookies, the
          services that You have asked for cannot be provided, and We only use
          these Cookies to provide You with those services. Cookies Policy /
          Notice Acceptance Cookies Type: Persistent Cookies Administered by: Us
          Purpose: These Cookies identify if users have accepted the use of
          cookies on the Website. Functionality Cookies Type: Persistent Cookies
          Administered by: Us Purpose: These Cookies allow us to remember
          choices You make when You use the Website, such as remembering your
          login details or language preference. The purpose of these Cookies is
          to provide You with a more personal experience and to avoid You having
          to re-enter your preferences every time You use the Website. Tracking
          and Performance Cookies Type: Persistent Cookies Administered by:
          Third-Parties Purpose: These Cookies are used to track information
          about traffic to the Website and how users use the Website. The
          information gathered via these Cookies may directly or indirectly
          identify you as an individual visitor. This is because the information
          collected is typically linked to a pseudonymous identifier associated
          with the device you use to access the Website. We may also use these
          Cookies to test new pages, features or new functionality of the
          Website to see how our users react to them. For more information about
          the cookies we use and your choices regarding cookies, please visit
          our Cookies Policy or the Cookies section of our Privacy Policy.
        </p>
        {/* Acknowledgment */}
        <h1>Acknowledgment</h1>
        <p>
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service. Your access to and use of the
          Service is conditioned on Your acceptance of and compliance with these
          Terms and Conditions. These Terms and Conditions apply to all
          visitors, users and others who access or use the Service. By accessing
          or using the Service You agree to be bound by these Terms and
          Conditions. If You disagree with any part of these Terms and
          Conditions then You may not access the Service. You represent that you
          are over the age of 18. The Company does not permit those under 18 to
          use the Service. Your access to and use of the Service is also
          conditioned on Your acceptance of and compliance with the Privacy
          Policy of the Company. Our Privacy Policy describes Our policies and
          procedures on the collection, use and disclosure of Your personal
          information when You use the Application or the Website and tells You
          about Your privacy rights and how the law protects You. Please read
          Our Privacy Policy carefully before using Our Service.
        </p>
        {/* Placing Orders for Goods*/}
        <h1>Placing Orders for Goods</h1>
        <p>
          By placing an Order for Goods through the Service, You warrant that
          You are legally capable of entering into binding contracts.
        </p>
        {/* Your Information */}
        <h1>Your Information</h1>
        <p>
          If You wish to place an Order for Goods available on the Service, You
          may be asked to supply certain information relevant to Your Order
          including, without limitation, Your name, Your email, Your phone
          number, Your credit card number, the expiration date of Your credit
          card, Your billing address, and Your shipping information. You
          represent and warrant that: (i) You have the legal right to use any
          credit or debit card(s) or other payment method(s) in connection with
          any Order; and that (ii) the information You supply to us is true,
          correct and complete. By submitting such information, You grant us the
          right to provide the information to payment processing third parties
          for purposes of facilitating the completion of Your Order.
        </p>
        {/* Order Cancellation */}
        <h1>Order Cancellation</h1>
        <p>
          We reserve the right to refuse or cancel Your Order at any time for
          certain reasons including but not limited to: Goods availability
          Errors in the description or prices for Goods Errors in Your Order We
          reserve the right to refuse or cancel Your Order if fraud or an
          unauthorized or illegal transaction is suspected. Your Order
          Cancellation Rights Any Goods you purchase can only be returned in
          accordance with these Terms and Conditions and Our Returns Policy. Our
          Returns Policy forms a part of these Terms and Conditions. Please read
          our Returns Policy to learn more about your right to cancel Your
          Order. Your right to cancel an Order only applies to Goods that are
          returned in the same condition as You received them. You should also
          include all of the product's instructions, documents and wrappings.
          Goods that are damaged or not in the same condition as You received
          them or which are worn simply beyond opening the original packaging
          will not be refunded. You should therefore take reasonable care of the
          purchased Goods while they are in Your possession. We will reimburse
          You no later than 14 days from the day on which We receive the
          returned Goods. We will use the same means of payment as You used for
          the Order, and You will not incur any fees for such reimbursement. You
          will not have any right to cancel an Order for the supply of any of
          the following Goods: The supply of Goods made to Your specifications
          or clearly personalized. The supply of Goods which according to their
          nature are not suitable to be returned, deteriorate rapidly or where
          the date of expiry is over. The supply of Goods which are not suitable
          for return due to health protection or hygiene reasons and were
          unsealed after delivery. The supply of Goods which are, after
          delivery, according to their nature, inseparably mixed with other
          items. The supply of digital content which is not supplied on a
          tangible medium if the performance has begun with Your prior express
          consent and You have acknowledged Your loss of cancellation right.
        </p>
        {/* Availability, Errors and Inaccuracies */}
        <h1>Availability, Errors and Inaccuracies</h1>
        <p>
          We are constantly updating Our offerings of Goods on the Service. The
          Goods available on Our Service may be mispriced, described
          inaccurately, or unavailable, and We may experience delays in updating
          information regarding our Goods on the Service and in Our advertising
          on other websites. We cannot and do not guarantee the accuracy or
          completeness of any information, including prices, product images,
          specifications, availability, and services. We reserve the right to
          change or update information and to correct errors, inaccuracies, or
          omissions at any time without prior notice.
        </p>
        {/* Prices Policy */}
        <h1>Prices Policy</h1>
        <p>
          The Company reserves the right to revise its prices at any time prior
          to accepting an Order. The prices quoted may be revised by the Company
          subsequent to accepting an Order in the event of any occurrence
          affecting delivery caused by government action, variation in customs
          duties, increased shipping charges, higher foreign exchange costs and
          any other matter beyond the control of the Company. In that event, You
          will have the right to cancel Your Order.
        </p>
        {/* Payments */}
        <h1>Payments</h1>
        <p>
          All Goods purchased are subject to a one-time payment. Payment can be
          made through various payment methods we have available, such as Visa,
          MasterCard, Affinity Card, American Express cards or online payment
          methods (PayPal, for example). Payment cards (credit cards or debit
          cards) are subject to validation checks and authorization by Your card
          issuer. If we do not receive the required authorization, We will not
          be liable for any delay or non-delivery of Your Order.
        </p>
        {/* Subscriptions */}
        <h1>Subscriptions</h1>
        <p>
          Subscription period The Service or some parts of the Service are
          available only with a paid Subscription. You will be billed in advance
          on a recurring and periodic basis (such as daily, weekly, monthly or
          annually), depending on the type of Subscription plan you select when
          purchasing the Subscription. At the end of each period, Your
          Subscription will automatically renew under the exact same conditions
          unless You cancel it or the Company cancels it. Subscription
          cancellations You may cancel Your Subscription renewal either through
          Your Account settings page or by contacting the Company. You will not
          receive a refund for the fees You already paid for Your current
          Subscription period and You will be able to access the Service until
          the end of Your current Subscription period.
        </p>
        {/* Billing */}
        <h1>Billing</h1>
        <p>
          You shall provide the Company with accurate and complete billing
          information including full name, address, state, zip code, telephone
          number, and a valid payment method information. Should automatic
          billing fail to occur for any reason, the Company will issue an
          electronic invoice indicating that you must proceed manually, within a
          certain deadline date, with the full payment corresponding to the
          billing period as indicated on the invoice.
        </p>
        {/* Fee Changes */}
        <h1>Fee Changes</h1>
        <p>
          The Company, in its sole discretion and at any time, may modify the
          Subscription fees. Any Subscription fee change will become effective
          at the end of the then- current Subscription period. The Company will
          provide You with reasonable prior notice of any change in Subscription
          fees to give You an opportunity to terminate Your Subscription before
          such change becomes effective. Your continued use of the Service after
          the Subscription fee change comes into effect constitutes Your
          agreement to pay the modified Subscription fee amount.
        </p>
        {/* Refunds */}
        <h1>Refunds</h1>
        <p>
          Except when required by law, paid Subscription fees are
          non-refundable. Certain refund requests for Subscriptions may be
          considered by the Company on a case-by-case basis and granted at the
          sole discretion of the Company. Free Trial The Company may, at its
          sole discretion, offer a Subscription with a Free Trial for a limited
          period of time. You may be required to enter Your billing information
          in order to sign up for the Free Trial. If You do enter Your billing
          information when signing up for a Free Trial, You will not be charged
          by the Company until the Free Trial has expired. On the last day of
          the Free Trial period, unless You canceled Your Subscription, You will
          be automatically charged the applicable Subscription fees for the type
          of Subscription You have selected. At any time and without notice, the
          Company reserves the right to (i) modify the terms and conditions of
          the Free Trial offer, or (ii) cancel such Free Trial offer.
        </p>
        {/* Promotions */}
        <h1>Promotions</h1>
        <p>
          Any Promotions made available through the Service may be governed by
          rules that are separate from these Terms. If You participate in any
          Promotions, please review the applicable rules as well as our Privacy
          policy. If the rules for a Promotion conflict with these Terms, the
          Promotion rules will apply.
        </p>
        {/* User Accounts */}
        <h1>User Accounts</h1>
        <p>
          When You create an account with Us, You must provide Us information
          that is accurate, complete, and current at all times. Failure to do so
          constitutes a breach of the Terms, which may result in immediate
          termination of Your account on Our Service. You are responsible for
          safeguarding the password that You use to access the Service and for
          any activities or actions under Your password, whether Your password
          is with Our Service or a Third-Party Social Media Service. You agree
          not to disclose Your password to any third party. You must notify Us
          immediately upon becoming aware of any breach of security or
          unauthorized use of Your account. You may not use as a username the
          name of another person or entity or that is not lawfully available for
          use, a name or trademark that is subject to any rights of another
          person or entity other than You without appropriate authorization, or
          a name that is otherwise offensive, vulgar or obscene.
        </p>
        {/* Content */}
        <h1>Content</h1>
        <p>
          Your Right to Post Content Our Service allows You to post Content. You
          are responsible for the Content that You post to the Service,
          including its legality, reliability, and appropriateness. By posting
          Content to the Service, You grant Us the right and license to use,
          modify, publicly perform, publicly display, reproduce, and distribute
          such Content on and through the Service. You retain any and all of
          Your rights to any Content You submit, post or display on or through
          the Service and You are responsible for protecting those rights. You
          agree that this license includes the right for Us to make Your Content
          available to other users of the Service, who may also use Your Content
          subject to these Terms. You represent and warrant that: (i) the
          Content is Yours (You own it) or You have the right to use it and
          grant Us the rights and license as provided in these Terms, and (ii)
          the posting of Your Content on or through the Service does not violate
          the privacy rights, publicity rights, copyrights, contract rights or
          any other rights of any person.
        </p>
        {/* Content Restrictions */}
        <h1>Content Restrictions</h1>
        <p>
          The Company is not responsible for the content of the Service's users.
          You expressly understand and agree that You are solely responsible for
          the Content and for all activity that occurs under your account,
          whether done so by You or any third person using Your account. You may
          not transmit any Content that is unlawful, offensive, upsetting,
          intended to disgust, threatening, libelous, defamatory, obscene or
          otherwise objectionable. Examples of such objectionable Content
          include, but are not limited to, the following: Unlawful or promoting
          unlawful activity. Defamatory, discriminatory, or mean-spirited
          content, including references or commentary about religion, race,
          sexual orientation, gender, national/ethnic origin, or other targeted
          groups. Spam, machine – or randomly – generated, constituting
          unauthorized or unsolicited advertising, chain letters, any other form
          of unauthorized solicitation, or any form of lottery or gambling.
          Containing or installing any viruses, worms, malware, trojan horses,
          or other content that is designed or intended to disrupt, damage, or
          limit the functioning of any software, hardware or telecommunications
          equipment or to damage or obtain unauthorized access to any data or
          other information of a third person. Infringing on any proprietary
          rights of any party, including patent, trademark, trade secret,
          copyright, right of publicity or other rights. Impersonating any
          person or entity including the Company and its employees or
          representatives. Violating the privacy of any third person. The
          company reserves the right too, but not the obligation, to, in its
          sole discretion, determine whether or not any Content is appropriate
          and complies with these Terms, refuse or remove this Content. The
          Company further reserves the right to make formatting and edits and
          change the manner of any Content. The Company can also limit or revoke
          the use of the Service if You post such objectionable Content. As the
          Company cannot control all content posted by users and/or third
          parties on the Service, you agree to use the Service at your own risk.
          You understand that by using the Service You may be exposed to content
          that You may find offensive, indecent, incorrect or objectionable, and
          You agree that under no circumstances will the Company be liable in
          any way for any content, including any errors or omissions in any
          content, or any loss or damage of any kind incurred as a result of
          your use of any content.
        </p>
        {/* Content Backups */}
        <h1>Content Backups</h1>
        <p>
          Although regular backups of Content are performed, the Company does
          not guarantee there will be no loss or corruption of data. Corrupt or
          invalid backup points may be caused by, without limitation, Content
          that is corrupted prior to being backed up or that changes during the
          time a backup is performe The Company will provide support and attempt
          to troubleshoot any known or discovered issues that may affect the
          backups of Content. But You acknowledge that the Company has no
          liability related to the integrity of Content or the failure to
          successfully restore Content to a usable state. You agree to maintain
          a complete and accurate copy of any Content in a location independent
          of the Service.
        </p>
        {/* Copyright Policy */}
        <h1>Copyright Policy</h1>
        <p>
          Intellectual Property Infringement We respect the intellectual
          property rights of others. It is Our policy to respond to any claim
          that Content posted on the Service infringes a copyright or other
          intellectual property infringement of any person. If You are a
          copyright owner, or authorized on behalf of one, and You believe that
          the copyrighted work has been copied in a way that constitutes
          copyright infringement that is taking place through the Service, You
          must submit Your notice in writing to the attention of our copyright
          agent via email at hello@SuperINTRO and include in Your notice a
          detailed description of the alleged infringement. You may be held
          accountable for damages (including costs and attorneys' fees) for
          misrepresenting that any Content is infringing Your copyright. DMCA
          Notice and DMCA Procedure for Copyright Infringement Claims You may
          submit a notification pursuant to the Digital Millennium Copyright Act
          (DMCA) by providing our Copyright Agent with the following information
          in writing (see 17 U.S.C 512(c)(3) for further detail): An electronic
          or physical signature of the person authorized to act on behalf of the
          owner of the copyright's interest. A description of the copyrighted
          work that You claim has been infringed, including the URL (i.e., web
          page address) of the location where the copyrighted work exists or a
          copy of the copyrighted work. Identification of the URL or other
          specific location on the Service where the material that You claim is
          infringing is located. Your address, telephone number, and email
          address. A statement by You that You have a good faith belief that the
          disputed use is not authorized by the copyright owner, its agent, or
          the law. A statement by You, made under penalty of perjury, that the
          above information in Your notice is accurate and that You are the
          copyright owner or authorized to act on the copyright owner's behalf.
          You can contact our copyright agent via email at Admin@SuperINTRO.
          Upon receipt of a notification, the Company will take whatever action,
          in its sole discretion, it deems appropriate, including removal of the
          challenged content from the Service.
        </p>
        {/* Intellectual Property */}
        <h1>Intellectual Property</h1>
        <p>
          The Service and its original content (excluding Content provided by
          You or other users), features and functionality are and will remain
          the exclusive property of the Company and its licensors. The Service
          is protected by copyright, trademark, and other laws of both the
          Country and foreign countries. Our trademarks and trade dress may not
          be used in connection with any product or service without the prior
          written consent of the Company.
        </p>
        {/* Your Feedback to Us */}
        <h1>Your Feedback to Us</h1>
        <p>
          You assign all rights, title and interest in any Feedback You provide
          the Company. If for any reason such assignment is ineffective, You
          agree to grant the Company a non-exclusive, perpetual, irrevocable,
          royalty free, worldwide right and license to use, reproduce, disclose,
          sub-license, distribute, modify and exploit such Feedback without
          restriction.
        </p>
        {/* Links to Other Websites */}
        <h1>Links to Other Websites</h1>
        <p>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by the Company. The Company has no
          control over, and assumes no responsibility for, the content, privacy
          policies, or practices of any third party web sites or services. You
          further acknowledge and agree that the Company shall not be
          responsible or liable, directly or indirectly, for any damage or loss
          caused or alleged to be caused by or in connection with the use of or
          reliance on any such content, goods or services available on or
          through any such web sites or services. We strongly advise You to read
          the terms and conditions and privacy policies of any third-party web
          sites or services that You visit.
        </p>
        {/* Termination */}
        <h1>Termination</h1>
        <p>
          We may terminate or suspend Your Account immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these Terms and Conditions. Upon termination,
          Your right to use the Service will cease immediately. If You wish to
          terminate Your Account, You may simply discontinue using the Service.
        </p>
        {/* Limitation of Liability */}
        <h1>Limitation of Liability</h1>
        <p>
          Notwithstanding any damages that You might incur, the entire liability
          of the Company and any of its suppliers under any provision of this
          Terms and Your exclusive remedy for all of the foregoing shall be
          limited to the amount actually paid by You through the Service or 100
          USD if You haven't purchased anything through the Service. To the
          maximum extent permitted by applicable law, in no event shall the
          Company or its suppliers be liable for any special, incidental,
          indirect, or consequential damages whatsoever (including, but not
          limited to, damages for loss of profits, loss of data or other
          information, for business interruption, for personal injury, loss of
          privacy arising out of or in any way related to the use of or
          inability to use the Service, third-party software and/or third-party
          hardware used with the Service, or otherwise in connection with any
          provision of this Terms), even if the Company or any supplier has been
          advised of the possibility of such damages and even if the remedy
          fails of its essential purpose. Some states do not allow the exclusion
          of implied warranties or limitation of liability for incidental or
          consequential damages, which means that some of the above limitations
          may not apply. In these states, each party's liability will be limited
          to the greatest extent permitted by law.
        </p>
        {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
        <h1>"AS IS" and "AS AVAILABLE" Disclaimer</h1>
        <p>
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all
          faults and defects without warranty of any kind. To the maximum extent
          permitted under applicable law, the Company, on its own behalf and on
          behalf of its Affiliates and its and their respective licensors and
          service providers, expressly disclaims all warranties, whether
          express, implied, statutory or otherwise, with respect to the Service,
          including all implied warranties of merchantability, fitness for a
          particular purpose, title and non-infringement, and warranties that
          may arise out of course of dealing, course of performance, usage or
          trade practice. Without limitation to the foregoing, the Company
          provides no warranty or undertaking, and makes no representation of
          any kind that the Service will meet Your requirements, achieve any
          intended results, be compatible or work with any other software,
          applications, systems or services, operate without interruption, meet
          any performance or reliability standards or be error free or that any
          errors or defects can or will be corrected. Without limiting the
          foregoing, neither the Company nor any of the company's provider makes
          any representation or warranty of any kind, express or implied: (i) as
          to the operation or availability of the Service, or the information,
          content, and materials or products included thereon; (ii) that the
          Service will be uninterrupted or error-free; (iii) as to the accuracy,
          reliability, or currency of any information or content provided
          through the Service; or (iv) that the Service, its servers, the
          content, or e-mails sent from or on behalf of the Company are free of
          viruses, scripts, trojan horses, worms, malware, timebombs or other
          harmful components. Some jurisdictions do not allow the exclusion of
          certain types of warranties or limitations on applicable statutory
          rights of a consumer, so some or all of the above exclusions and
          limitations may not apply to You. But in such a case the exclusions
          and limitations set forth in this section shall be applied to the
          greatest extent enforceable under applicable law.
        </p>
        {/* Governing Law */}
        <h1>Governing Law</h1>
        <p>
          The laws of the Country, excluding its conflicts of law rules, shall
          govern this Terms and Your use of the Service. Your use of the
          Application may also be subject to other local, state, national, or
          international laws.
        </p>
        {/* Disputes Resolution */}
        <h1>Disputes Resolution</h1>
        <p>
          If You have any concern or dispute about the Service, You agree to
          first try to resolve the dispute informally by contacting the Company.
        </p>
        {/* For European Union (EU) Users */}
        <h1>For European Union (EU) Users</h1>
        <p>
          If You are a European Union consumer, you will benefit from any
          mandatory provisions of the law of the country in which you are
          resident in.
        </p>
        {/* United States Federal Government End Use Provisions */}
        <h1>United States Federal Government End Use Provisions</h1>
        <p>
          If You are a U.S. federal government end user, our Service is a
          "Commercial Item" as that term is defined at 48 C.F.R. §2.101.
        </p>
        {/* United States Legal Compliance */}
        <h1>United States Legal Compliance</h1>
        <p>
          You represent and warrant that (i) You are not located in a country
          that is subject to the United States government embargo, or that has
          been designated by the United States government as a "terrorist
          supporting" country, and (ii) You are not listed on any United States
          government list of prohibited or restricted parties.
        </p>
      </div>
    </div>
  );
}
