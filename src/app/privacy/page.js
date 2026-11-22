export const metadata = {
  title: "Privacy Policy – Kungfu Federation of India",
  description:
    "Privacy policy for the Kungfu Federation of India mobile app. Learn what data we collect, how we use it, and your rights.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 text-zinc-800 dark:text-zinc-200">
        <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: August 10, 2026
        </p>

        <p className="mt-6 leading-relaxed">
          <strong>Kungfu Federation of India</strong> (&ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the Kungfu Federation
          of India mobile application (the &ldquo;App&rdquo;) with Android
          package name <code>com.neerajkk01.kungfuapp</code>. This page explains
          what data we collect, how we use it, and the choices you have.
        </p>

        <hr className="my-8 border-zinc-200 dark:border-zinc-700" />

        {/* App Purpose */}
        <Section title="What the App Does">
          <p>
            The App is a martial arts training platform where students can:
          </p>
          <ul>
            <li>Enroll in courses and track progress.</li>
            <li>Register for events and tournaments.</li>
            <li>
              Take live-streamed practical exams, performing techniques in front
              of a coach in real time.
            </li>
            <li>Purchase equipment and merchandise from the in-app shop.</li>
          </ul>
        </Section>

        <Section title="Data We Collect">
          <h3 className="font-semibold mt-4 mb-1">Account Information</h3>
          <p>
            When you sign in via <strong>Clerk</strong>, we receive your email
            address, full name, and profile picture. We use this to identify you
            and personalize your experience.
          </p>

          <h3 className="font-semibold mt-4 mb-1">Payment Information</h3>
          <p>
            All payments are processed by <strong>Razorpay</strong>. We do{" "}
            <em>not</em> store your full credit/debit card details, UPI IDs, or
            net banking credentials on our servers. Razorpay may share a
            transaction ID and the last four digits of your card with us for
            record-keeping.
          </p>

          <h3 className="font-semibold mt-4 mb-1">
            Camera &amp; Microphone Access
          </h3>
          <p>
            The App requests camera and microphone permission{" "}
            <strong>only</strong> during live-streamed practical exams where you
            perform for a coach over video. We do not access the camera or
            microphone at any other time.
          </p>

          <h3 className="font-semibold mt-4 mb-1">
            Push Notification Token
          </h3>
          <p>
            We collect an Expo push notification token (via{" "}
            <strong>Expo / Firebase Cloud Messaging</strong>) to send you
            notifications about course enrollments, event reminders, and exam
            results. You can disable notifications in your device settings at
            any time.
          </p>

          <h3 className="font-semibold mt-4 mb-1">
            Images &amp; Videos You Upload
          </h3>
          <p>
            Profile photos and exam-submission media you choose to upload are
            stored on <strong>Cloudinary</strong> and/or{" "}
            <strong>Cloudflare R2</strong>. You control what you upload.
          </p>

          <h3 className="font-semibold mt-4 mb-1">App Usage Analytics</h3>
          <p>
            We collect standard, anonymized usage data (screens visited,
            features used, crash reports) to improve the App. This data does not
            identify you personally.
          </p>
        </Section>

        <Section title="Data We Do NOT Collect">
          <p>We do <strong>not</strong> collect or access:</p>
          <ul>
            <li>Your precise or coarse location (GPS / IP-based).</li>
            <li>Your contacts or address book.</li>
            <li>SMS messages or call logs.</li>
            <li>
              Device identifiers beyond what is strictly necessary for push
              notifications (the Expo push token).
            </li>
          </ul>
        </Section>

        <Section title="Third-Party Services We Use">
          <p>
            We share only the minimum data required for each service to
            function:
          </p>
          <ul>
            <li>
              <strong>Clerk</strong> – Authentication and user management
              (email, name, profile picture).
            </li>
            <li>
              <strong>Razorpay</strong> – Payment processing (transaction
              details; we never see full card numbers).
            </li>
            <li>
              <strong>Cloudinary</strong> – Media hosting (profile photos,
              exam-submission images/videos).
            </li>
            <li>
              <strong>Cloudflare R2</strong> – File storage (user-uploaded
              content).
            </li>
            <li>
              <strong>LiveKit</strong> – Video streaming infrastructure for
              live-streamed practical exams.
            </li>
            <li>
              <strong>Expo / Firebase Cloud Messaging</strong> – Push
              notification delivery.
            </li>
          </ul>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            Each of these services has its own privacy policy. We encourage you
            to review them.
          </p>
        </Section>

        <Section title="Data Retention &amp; Deletion">
          <p>
            We keep your data only as long as your account is active or as
            needed to provide the App&apos;s services. If you wish to delete your
            account and all associated data, email us at{" "}
            <a
              href="mailto:tckfiind@gmail.com"
              className="text-blue-600 underline dark:text-blue-400"
            >
              tckfiind@gmail.com
            </a>
            . We will process your request and delete your data within{" "}
            <strong>30 days</strong>.
          </p>
        </Section>

        <Section title="Children&rsquo;s Privacy">
          <p>
            The App is not directed at children under 13 years of age. We do not
            knowingly collect personal information from children under 13. If
            you are a parent or guardian and believe your child has provided us
            with personal data, please contact us so we can delete it.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this policy from time to time. When we do, we will
            revise the &ldquo;Last updated&rdquo; date at the top of this page.
            We encourage you to review this policy periodically.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have any questions about this privacy policy, please reach
            out:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:tckfiind@gmail.com"
                className="text-blue-600 underline dark:text-blue-400"
              >
                tckfiind@gmail.com
              </a>
            </li>
          </ul>
        </Section>

        <footer className="mt-12 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Kungfu Federation of India. All
          rights reserved. &mdash;{" "}
          <a
            href="/privacy"
            className="text-blue-600 underline dark:text-blue-400"
          >
            Privacy Policy
          </a>
        </footer>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-black dark:text-white">
        {title}
      </h2>
      <div className="mt-3 leading-relaxed space-y-2 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}
