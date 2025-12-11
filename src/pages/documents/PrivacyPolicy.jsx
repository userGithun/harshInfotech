import React, { useRef } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const personalInfoRef = useRef(null);
  const infoProcessRef = useRef(null);
  const infoShareRef = useRef(null);
  const infoStoreRef = useRef(null);
  const infoSecurityRef = useRef(null);
  const privacyRightsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 mt-24 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <section className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-2">Privacy Policy</h1>
          <h3 className="text-sm text-gray-500 mb-6">
            Last Updated July 11, 2024
          </h3>
          <p className="text-gray-700 mb-4">
            This privacy notice for Logic Infotech Pvt. Ltd. (
            <strong>“we”</strong>, <strong>“us”</strong> or{" "}
            <strong>“our”</strong>) describes how and why we might collect,
            store, use, and/or share (<strong>“process”</strong>) your
            information when you use our services (<strong>“Services”</strong>),
            such as when you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              Visit our website at{" "}
              <a
                className="text-primary-red underline"
                href="https://suitstudionepal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                suitstudionepal.com
              </a>
            </li>
            <li>
              Engage with us in other related ways, including sales, marketing,
              or events
            </li>
          </ul>
          <p className="text-gray-700">
            <strong>Questions or concerns?</strong> Reading this privacy notice
            will help you understand your privacy rights. Contact us at{" "}
            <a
              className="text-primary-red underline"
              href="mailto:support@suitstudionepal.com"
            >
              support@suitstudionepal.com
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Summary of Key Points</h2>
          <ul className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <strong>What personal information do we process?</strong>{" "}
              Depending on your interaction with our Services, we may process
              personal information. Learn more about{" "}
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(personalInfoRef)}
              >
                personal information you disclose
              </button>
              .
            </li>
            <li>
              <strong>Sensitive information:</strong> We do not process
              sensitive personal information.
            </li>
            <li>
              <strong>How we process your information:</strong> Learn more{" "}
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(infoProcessRef)}
              >
                here
              </button>
              .
            </li>
            <li>
              <strong>Information sharing:</strong> Learn more{" "}
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(infoShareRef)}
              >
                here
              </button>
              .
            </li>
            <li>
              <strong>How we keep your information safe:</strong> Learn more{" "}
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(infoSecurityRef)}
              >
                here
              </button>
              .
            </li>
            <li>
              <strong>Your rights:</strong> Learn more{" "}
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(privacyRightsRef)}
              >
                here
              </button>
              .
            </li>
          </ul>
        </section>

        {/* Table of Contents */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(personalInfoRef)}
              >
                WHAT INFORMATION DO WE COLLECT?
              </button>
            </li>
            <li>
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(infoProcessRef)}
              >
                HOW DO WE PROCESS YOUR INFORMATION?
              </button>
            </li>
            <li>
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(infoShareRef)}
              >
                WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?
              </button>
            </li>
            <li>
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(infoStoreRef)}
              >
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </button>
            </li>
            <li>
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(infoSecurityRef)}
              >
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </button>
            </li>
            <li>
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(privacyRightsRef)}
              >
                WHAT ARE YOUR PRIVACY RIGHTS?
              </button>
            </li>
            <li>
              <button
                className="text-primary-red underline"
                onClick={() => scrollToSection(contactRef)}
              >
                HOW CAN YOU CONTACT US?
              </button>
            </li>
          </ol>
        </section>

        {/* Sections */}
        <section className="mb-12" ref={personalInfoRef}>
          <h2 className="text-2xl font-semibold mb-3">
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <h3 className="text-lg font-medium mb-2">
            Personal information you disclose to us
          </h3>
          <p className="text-gray-700 mb-2">
            <em>
              <strong>In Short:</strong> We collect personal information that
              you provide to us.
            </em>
          </p>
          <p className="text-gray-700 mb-2">
            We collect personal information voluntarily provided when you
            register, participate, or contact us.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Names</li>
            <li>Email addresses</li>
            <li>Phone numbers</li>
            <li>Billing addresses</li>
            <li>Passwords</li>
          </ul>
        </section>
        {/* New Section: HOW DO WE PROCESS YOUR INFORMATION */}
        <section className="mb-12" ref={infoProcessRef}>
          <h2 className="text-2xl font-semibold mb-3">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h2>
          <p className="text-gray-700 mb-2">
            <em>
              <strong>In Short:</strong> We process your information to provide,
              improve, and administer our Services, communicate with you, for
              security and fraud prevention, and to comply with law. We may also
              process your information for other purposes with your consent.
            </em>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </strong>
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </strong>{" "}
              We may process your information so you can create and log in to
              your account, as well as keep your account in working order.
            </li>
            <li>
              <strong>
                To deliver and facilitate delivery of services to the user.
              </strong>{" "}
              We may process your information to provide you with the requested
              service.
            </li>
            <li>
              <strong>
                To respond to user inquiries/offer support to users.
              </strong>{" "}
              We may process your information to respond to your inquiries and
              solve any potential issues you might have with the requested
              service.
            </li>
            <li>
              <strong>To fulfill and manage your orders.</strong> We may process
              your information to fulfill and manage your orders, payments,
              returns, and exchanges made through the Services.
            </li>
            <li>
              <strong>To comply with our legal obligations.</strong> We may
              process your information to comply with our legal obligations,
              respond to legal requests, and exercise, establish, or defend our
              legal rights.
            </li>
          </ul>
        </section>
        <section className="mb-12" ref={infoShareRef} id="policyInfoShare">
          <h2 className="text-2xl font-semibold mb-3">
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <p className="text-gray-700 mb-2">
            <em>
              <strong>In Short:</strong>&nbsp;We may share information in
              specific situations described in this section and/or with the
              following third parties.
            </em>
          </p>
          <p className="text-gray-700 mb-2">
            We may need to share your personal information in the following
            situations:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>Business Transfers.</strong>&nbsp;We may share or transfer
              your information in connection with, or during negotiations of,
              any merger, sale of company assets, financing, or acquisition of
              all or a portion of our business to another company.
            </li>
            <li>
              <strong>When we use Google Maps Platform APIs.</strong>&nbsp; We
              may share your information with certain Google Maps Platform APIs
              (e.g., Google Maps API, Places API). Google Maps uses GPS, Wi-Fi,
              and cell towers to estimate your location. GPS is accurate to
              about 20 meters, while Wi-Fi and cell towers help improve accuracy
              when GPS signals are weak, like indoors. This data helps Google
              Maps provide directions, but it is not always perfectly precise.
            </li>
            <li>
              <strong>Affiliates.</strong>&nbsp;We may share your information
              with our affiliates, in which case we will require those
              affiliates to honor this privacy notice. Affiliates include our
              parent company and any subsidiaries, joint venture partners, or
              other companies that we control or that are under common control
              with us.
            </li>
          </ul>
        </section>
        {/* New Section: DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES */}
        <section className="mb-12" ref={infoStoreRef}>
          <h2 className="text-2xl font-semibold mb-3">
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h2>
          <p className="text-gray-700 mb-2">
            <em>
              <strong>In Short:</strong> We may use cookies and other tracking
              technologies to collect and store your information.
            </em>
          </p>
          <p className="text-gray-700 mb-2">
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to gather information when you interact with our
            Services. Some online tracking technologies help us maintain the
            security of our Services and your account, prevent crashes, fix
            bugs, save your preferences, and assist with basic site functions.
          </p>
          <p className="text-gray-700 mb-2">
            We also permit third parties and service providers to use online
            tracking technologies on our Services for analytics and advertising,
            including to help manage and display advertisements, to tailor
            advertisements to your interests, or to send abandoned shopping cart
            reminders (depending on your communication preferences). The third
            parties and service providers use their technology to provide
            advertising about products and services tailored to your interests
            which may appear either on our Services or on other websites.
          </p>
          <p className="text-gray-700 mb-2">
            Specific information about how we use such technologies and how you
            can refuse certain cookies is set out in our Cookie Notice.
          </p>
        </section>
        <section
          className="mb-12"
          ref={infoSecurityRef}
          id="policyInfoSecurity"
        >
          <h2 className="text-2xl font-semibold mb-3">
            5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </h2>
          <p className="text-gray-700 mb-2">
            <em>
              <strong>In Short:</strong>&nbsp;If you choose to register or log
              in to our Services using a social media account, we may have
              access to certain information about you.
            </em>
          </p>
          <p className="text-gray-700 mb-2">
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or X
            logins). Where you choose to do this, we will receive certain
            profile information about you from your social media provider. The
            profile information we receive may vary depending on the social
            media provider concerned, but will often include your name, email
            address, friends list, and profile picture, as well as other
            information you choose to make public on such a social media
            platform.
          </p>
          <p className="text-gray-700 mb-2">
            We will use the information we receive only for the purposes that
            are described in this Privacy Notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control,and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </p>
        </section>
        <section className="mb-12" ref={privacyRightsRef} id="policyMinors">
          <h2 className="text-2xl font-semibold mb-3">
            6. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <p className="text-gray-700 mb-2">
            <em>
              <strong>In Short:</strong>&nbsp;We keep your information for as
              long as necessary to fulfill the purposes outlined in this Privacy
              Notice unless otherwise required by law.
            </em>
          </p>
          <p className="text-gray-700 mb-2">
            We do not knowingly collect, solicit data from, or We will only keep
            your personal information for as long as it is necessary for the
            purposes set out in this Privacy Notice, unless a longer retention
            period is required or permitted by law (such as tax, accounting, or
            other legal requirements). No purpose in this notice will require us
            keeping your personal information for longer than the period of time
            in which users have an account with us.
            <p className="text-gray-700 mb-2">
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </p>
        </section>
        <section className="mb-12" id="policyRights">
          <h2 className="text-2xl font-semibold mb-3">
            7. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h2>
          <p className="text-gray-700 mb-2">
            <em>
              <strong>In Short:</strong>&nbsp;We aim to protect your personal
              information through a system of organizational and technical
              security measures.
            </em>
          </p>
          <p className="text-gray-700 mb-2">
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.&nbsp; &nbsp;.
          </p>
          <p className="text-gray-700 mb-2">
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>
          <h3 className="text-gray-800 mb-2">Account Information</h3>
          <p className="text-gray-700 mb-2">
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Contact us using the contact information provided.</li>
          </ul>
          <p className="text-gray-700 mb-2">
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>
          <p className="text-gray-700 mb-2">
            If you have questions or comments about your privacy rights, you may
            email us at&nbsp;
            <Link href="mailto:support@suitstudionepal.com.">
              support@suitstudionepal.com.
            </Link>
            .
          </p>
        </section>
        <section className="mb-12" id="policyTracking">
          <h2 className="text-2xl font-semibold mb-3">
            8. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <p className="text-gray-700 mb-2">
            <em>
              <strong>In Short:</strong>&nbsp;You may review, change, or
              terminate your account at any time, depending on your country,
              province, or state of residence.
            </em>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Withdrawing your consent:</strong>&nbsp; If we are relying
            on your consent to process your personal information, which may be
            express and/or implied consent depending on the applicable law, you
            have the right to withdraw your consent at any time. You can
            withdraw your consent at any time by contacting us by using the
            contact details provided in the section&nbsp;
          </p>
          <p className="text-gray-700 mb-2">
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>
          <ul className="text-gray-800 mb-3">Account Information</ul>
          <p className="text-gray-700 mb-2">
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>
          <li className="text-gray-700 mb-2">
            Log in to your account settings and update your user account
          </li>
          <p className="text-gray-700 mb-2">
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>
          <p className="text-gray-700 mb-2">
            <strong> Cookies and similar technologies:</strong>&nbsp; Most Web
            browsers are set to accept cookies by default. If you prefer, you
            can usually choose to set your browser to remove cookies and to
            reject cookies. If you choose to remove cookies or reject cookies,
            this could affect certain features or services of our Services.
          </p>
          <p className="text-gray-700 mb-2">
            If you have questions or comments about your privacy rights, you may
            email us at&nbsp;
            <Link href="mailto:@suitstudionepal.com">
              {" "}
              @suitstudionepal.com.
            </Link>
          </p>
        </section>
        <section className="mb-12" id="policyUpdates">
          <h2 className="text-2xl font-semibold mb-3">
            9. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>

          <p className="text-gray-700 mb-2">
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (&quot;DNT&quot;) feature or
            setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. At this stage, no uniform technology standard for
            recognizing and implementing DNT signals has been finalized. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practice
            in a revised version of this Privacy Notice.
          </p>
        </section>
        <section className="mb-12" id="policyReview">
          <h2 className="text-2xl font-semibold mb-3">
            10. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>In Short:</strong>&nbsp; Yes, we will update this notice as
            necessary to stay compliant with relevant laws. We may update this
            Privacy Notice from time to time. The updated version will be
            indicated by an updated &quot;Revised&quot; date at the top of this
            Privacy Notice. If we make material changes to this Privacy Notice,
            we may notify you either by prominently posting a notice of such
            changes or by directly sending you a notification. We encourage you
            to review this Privacy Notice frequently to be informed of how we
            are protecting your information.
          </p>
        </section>

        <section className="mb-12" id="policyReview">
          <h2 className="text-2xl font-semibold mb-3">
            12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <p className="text-gray-700 mb-2">
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            details about how we have processed it, correct inaccuracies, or
            delete your personal information. You may also have the right to
            withdraw your consent to our processing of your personal
            information. These rights may be limited in some circumstances by
            applicable law. To request to review, update, or delete your
            personal information, please visit:&nbsp;
            <Link href="mailto:support@suitstudionepal.com">
              support@suitstudionepal.com.
            </Link>
          </p>
        </section>
        <section className="mb-12" ref={contactRef}>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-700">
            If you have questions or comments about this notice, email us at{" "}
            <a
              className="text-primary-red underline"
              href="mailto:support@suitstudionepal.com"
            >
              support@suitstudionepal.com
            </a>{" "}
            or contact us by post at:
            <br />
            The Suit Studio Pvt. Ltd., Gahana Pokhari Marg, Kathmandu 44600,
            Nepal
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
