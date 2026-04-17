import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'
import EmailMock from '../../components/EmailMock'

export default function Emails() {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Transactional Email Templates</h1>
        <p className="text-slate-500">
          These are the automated emails the platform would send to users at key moments in their journey.
        </p>
      </div>

      {/* Infrastructure DevNote */}
      <DevNote title="Email Infrastructure (Agreed)">
        Simple SMTP service for automated platform messages only (registration confirmation, draw entry
        confirmation). Entirely separate from NLWA's Campaign Monitor account which handles marketing
        and promotional emails. DKIM/SPF/DMARC authentication required for deliverability. Platform
        will sit on a subdomain of nlwa.gov.uk - NLWA IT team (Nick) handles DNS configuration.
      </DevNote>

      {/* ============================================================ */}
      {/* C1 - Welcome Email */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-slate-700 mb-1">C1. Welcome / Registration Confirmation</h2>
        <p className="text-sm text-slate-400 mb-4">Sent immediately after a user completes registration</p>

        <EmailMock subject="Welcome to NLWA Learning!" from="NLWA Learning <noreply@recycle.nlwa.gov.uk>">
          <p className="mb-4">Hi Sarah,</p>

          <p className="mb-4">
            Welcome to the NLWA Learning &amp; Incentive Scheme! We're delighted to have you on board.
          </p>

          <p className="mb-4">Here's what to expect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
            <li><strong>Monthly learning modules</strong> - short videos and articles about waste and recycling in North London</li>
            <li><strong>Quick quizzes</strong> - test your knowledge after each module</li>
            <li><strong>Prize draws</strong> - pass the quiz to enter a monthly draw for a &pound;250 grocery voucher</li>
          </ul>

          <p className="mb-4">This month's module is ready and waiting for you:</p>

          {/* Mock CTA */}
          <div className="text-center my-6">
            <span className="inline-block bg-teal-600 text-white font-bold px-8 py-3 rounded-lg cursor-default">
              Start This Month's Module
            </span>
          </div>

          <p className="mb-4">Happy learning!</p>
          <p className="mb-6">The NLWA Learning Team</p>

          <div className="border-t border-slate-200 pt-4 text-xs text-slate-400">
            North London Waste Authority | Unit 1b, Berol House, 25 Ashley Road, London N17 9LJ
            <br />
            <span className="underline cursor-default">Unsubscribe</span> from these emails
          </div>
        </EmailMock>
      </section>

      {/* ============================================================ */}
      {/* C2 - Monthly Module Reminder */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-slate-700 mb-1">C2. Monthly Module Reminder</h2>
        <p className="text-sm text-slate-400 mb-4">Sent when a new monthly module is published</p>

        <EmailMock subject="April's learning module is live - Food Waste: From Kitchen to Compost" from="NLWA Learning <noreply@recycle.nlwa.gov.uk>">
          <p className="mb-4">Hi Sarah,</p>

          <p className="mb-4">
            This month's learning module is ready for you!
          </p>

          <p className="mb-4">
            <strong>Food Waste: From Kitchen to Compost</strong> - Learn how your food waste is collected,
            processed and turned into compost and clean energy. It takes about 5 minutes.
          </p>

          {/* Mock CTA */}
          <div className="text-center my-6">
            <span className="inline-block bg-teal-600 text-white font-bold px-8 py-3 rounded-lg cursor-default">
              Start Learning
            </span>
          </div>

          <p className="text-sm text-slate-500 mb-4">Prize draw closes: 30 April 2026</p>

          <p className="mb-6">The NLWA Learning Team</p>

          <div className="border-t border-slate-200 pt-4 text-xs text-slate-400">
            North London Waste Authority | Unit 1b, Berol House, 25 Ashley Road, London N17 9LJ
            <br />
            <span className="underline cursor-default">Unsubscribe</span> from these emails
          </div>
        </EmailMock>

        <Annotation title="Reminders via Campaign Monitor (Agreed)">
          Monthly reminders and re-engagement emails will be handled through NLWA's existing Campaign
          Monitor account, not through the platform's transactional email system. The platform only
          sends automated system messages (registration, draw entry confirmation). Campaign Monitor
          sequences should also prompt new sign-ups about the back-catalogue and grand prize eligibility.
        </Annotation>
      </section>

      {/* ============================================================ */}
      {/* C3 - Quiz Pass + Prize Draw Entry */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-slate-700 mb-1">C3. Quiz Pass &amp; Prize Draw Confirmation</h2>
        <p className="text-sm text-slate-400 mb-4">Sent immediately after a user passes a quiz</p>

        <EmailMock subject="Well done! You've been entered into the April prize draw" from="NLWA Learning <noreply@recycle.nlwa.gov.uk>">
          <p className="mb-4">Hi Sarah,</p>

          <p className="mb-4">
            Congratulations - you passed the <strong>Food Waste</strong> quiz with a score of <strong>4 out of 5</strong>!
          </p>

          <p className="mb-4">
            You've been automatically entered into the <strong>April 2026 prize draw</strong>.
          </p>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4 text-sm">
            <p><strong>Prize:</strong> &pound;250 grocery voucher</p>
            <p><strong>Draw date:</strong> 5 May 2026</p>
            <p>We'll email you if you're selected as the winner.</p>
          </div>

          <p className="mb-4">Keep an eye out for next month's module!</p>

          <p className="mb-6">The NLWA Learning Team</p>

          <div className="border-t border-slate-200 pt-4 text-xs text-slate-400">
            North London Waste Authority | Unit 1b, Berol House, 25 Ashley Road, London N17 9LJ
            <br />
            <span className="underline cursor-default">Unsubscribe</span> from these emails
          </div>
        </EmailMock>
      </section>

      {/* ============================================================ */}
      {/* C4 - Quiz Fail + Encouragement */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-slate-700 mb-1">C4. Quiz Fail &amp; Encouragement</h2>
        <p className="text-sm text-slate-400 mb-4">Sent if a user fails a quiz (if this email is used at all - see annotation)</p>

        <EmailMock subject="Almost there - try the Food Waste quiz again" from="NLWA Learning <noreply@recycle.nlwa.gov.uk>">
          <p className="mb-4">Hi Sarah,</p>

          <p className="mb-4">
            You scored <strong>2 out of 5</strong> on the Food Waste quiz - not quite a pass this time, but you're close!
          </p>

          <p className="mb-4">
            Why not review the learning material and have another go? The more you know, the better your
            chances of entering the prize draw.
          </p>

          {/* Mock CTA */}
          <div className="text-center my-6">
            <span className="inline-block bg-teal-600 text-white font-bold px-8 py-3 rounded-lg cursor-default">
              Review &amp; Retry
            </span>
          </div>

          <p className="text-sm text-slate-500 mb-4">Prize draw closes: 30 April 2026</p>

          <p className="mb-6">The NLWA Learning Team</p>

          <div className="border-t border-slate-200 pt-4 text-xs text-slate-400">
            North London Waste Authority | Unit 1b, Berol House, 25 Ashley Road, London N17 9LJ
            <br />
            <span className="underline cursor-default">Unsubscribe</span> from these emails
          </div>
        </EmailMock>

        <Annotation title="Email on Failure - Not Needed (Agreed)">
          No email sent on quiz failure. Retry options shown on-screen instead. The platform only sends
          automated emails for: registration confirmation and quiz pass/draw entry confirmation. Winner
          notification is handled manually by NLWA, and reminders/re-engagement go through Campaign Monitor.
        </Annotation>
      </section>

      {/* ============================================================ */}
      {/* C5 - Prize Winner */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-slate-700 mb-1">C5. Prize Winner Notification</h2>
        <p className="text-sm text-amber-600 mb-4 font-medium">Not a platform email - handled manually by NLWA staff</p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-sm text-amber-800">
          Winner notification and verification is handled personally by NLWA, not through the platform.
          NLWA will email the winner directly, verify their Hackney postcode, and arrange prize fulfilment
          offline. This keeps the build simpler and creates an opportunity for in-person engagement and PR.
        </div>
      </section>

      {/* ============================================================ */}
      {/* C6 - Re-engagement */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-slate-700 mb-1">C6. Re-engagement / Missed Module</h2>
        <p className="text-sm text-amber-600 mb-4 font-medium">Not a platform email - handled via NLWA's Campaign Monitor</p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-sm text-amber-800">
          Monthly reminders and re-engagement emails will be handled through NLWA's existing Campaign
          Monitor account. Campaign Monitor sequences should prompt new sign-ups about the back-catalogue
          of modules and grand prize draw eligibility. The platform provides the user data (via CSV
          export) but does not send marketing or re-engagement emails.
        </div>
      </section>

      {/* ============================================================ */}
      {/* Overall Email Annotations */}
      {/* ============================================================ */}
      <Annotation title="Platform vs Campaign Monitor Emails (Agreed)">
        The platform sends only transactional system messages: registration confirmation and quiz
        pass/draw entry confirmation. These are exempt from unsubscribe requirements. All
        marketing/promotional emails (monthly reminders, re-engagement, winner announcements) go
        through NLWA's Campaign Monitor account and must include unsubscribe links.
      </Annotation>

      <Annotation title="Winner Notification (Agreed)">
        Winner notification is handled manually by NLWA staff, not as an automated platform email.
        The C5 template above is for reference only - NLWA will send this personally. The C6
        re-engagement email is also a Campaign Monitor task, not a platform feature.
      </Annotation>

      <Annotation title="User Feedback (Agreed - Session 2)">
        A lightweight "report a problem" button on the video and quiz pages was agreed in Session 2.
        Not a full satisfaction survey - just a way to surface technical issues, ambiguous questions
        or confusing content. Only build if development effort is modest; defer if complex.
      </Annotation>
    </div>
  )
}
