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
      <DevNote title="Email Infrastructure">
        All transactional emails sent via SendGrid, Postmark, or Mailgun (to be decided in discovery).
        Emails must be tested across Gmail, Outlook, Apple Mail, and mobile clients. DKIM/SPF/DMARC
        authentication required for deliverability. Templates designed responsive (HTML email, not just
        plain text).
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

        <Annotation title="Reminder Timing and Frequency">
          When does this go out? Day 1 of the month? How many reminders - one initial, plus a follow-up
          if they haven't started? A "last chance" reminder near the draw deadline? Balance engagement
          against inbox fatigue.
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

        <Annotation title="Email on Failure?">
          Should the platform email users when they fail a quiz? Could be seen as encouraging ("have
          another go!") or as nagging. Recommendation: only email on pass. Show retry options on-screen
          instead.
        </Annotation>
      </section>

      {/* ============================================================ */}
      {/* C5 - Prize Winner */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-slate-700 mb-1">C5. Prize Winner Notification</h2>
        <p className="text-sm text-slate-400 mb-4">Sent to the selected prize draw winner</p>

        <EmailMock subject="You've won the NLWA April Prize Draw!" from="NLWA Learning <noreply@recycle.nlwa.gov.uk>">
          <p className="mb-4">Dear Sarah,</p>

          <p className="mb-4">
            Congratulations! You've been selected as the winner of the April 2026 NLWA Learning Prize Draw!
          </p>

          <p className="mb-4">
            <strong>Your prize:</strong> &pound;250 grocery voucher
          </p>

          <p className="mb-4">
            To claim your prize, we need to verify your address is within the NLWA area. Please reply to
            this email with your full address, or click the button below:
          </p>

          {/* Mock CTA */}
          <div className="text-center my-6">
            <span className="inline-block bg-teal-600 text-white font-bold px-8 py-3 rounded-lg cursor-default">
              Verify My Address
            </span>
          </div>

          <p className="mb-4">
            Please respond within 14 days. If we don't hear from you, an alternative winner will be selected.
          </p>

          <p className="mb-4">
            Thank you for taking part in the NLWA Learning scheme. Your engagement helps improve recycling
            across North London.
          </p>

          <p className="mb-6">NLWA Learning Team</p>

          <div className="border-t border-slate-200 pt-4 text-xs text-slate-400">
            North London Waste Authority | Unit 1b, Berol House, 25 Ashley Road, London N17 9LJ
          </div>
        </EmailMock>
      </section>

      {/* ============================================================ */}
      {/* C6 - Re-engagement */}
      {/* ============================================================ */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-slate-700 mb-1">C6. Re-engagement / Missed Module</h2>
        <p className="text-sm text-slate-400 mb-4">Sent to users who haven't engaged recently</p>

        <EmailMock subject="You missed March's module - it's still available" from="NLWA Learning <noreply@recycle.nlwa.gov.uk>">
          <p className="mb-4">Hi Sarah,</p>

          <p className="mb-4">
            We noticed you haven't completed March's learning module yet - <strong>Recycling Right: What
            Goes Where</strong>.
          </p>

          <p className="mb-4">
            The good news: past modules are still available, so you can catch up any time.
          </p>

          {/* Mock CTA */}
          <div className="text-center my-6">
            <span className="inline-block bg-teal-600 text-white font-bold px-8 py-3 rounded-lg cursor-default">
              Catch Up Now
            </span>
          </div>

          <p className="mb-4">
            And don't forget - April's module is live too. Pass the quiz before 30 April to enter this
            month's prize draw!
          </p>

          <p className="mb-6">The NLWA Learning Team</p>

          <div className="border-t border-slate-200 pt-4 text-xs text-slate-400">
            North London Waste Authority | Unit 1b, Berol House, 25 Ashley Road, London N17 9LJ
            <br />
            <span className="underline cursor-default">Unsubscribe</span> from these emails
          </div>
        </EmailMock>

        <Annotation title="Re-engagement Strategy">
          How aggressive should re-engagement be? One missed-module email per month? After how many months
          of inactivity do we stop emailing? Is there a "win-back" campaign for completely lapsed users?
          Consider: GDPR soft opt-in rules for marketing-style emails.
        </Annotation>
      </section>

      {/* ============================================================ */}
      {/* Overall Email Annotations */}
      {/* ============================================================ */}
      <Annotation title="Email Branding">
        Should emails carry NLWA branding (logo, colours) or be plain text for better deliverability?
        HTML emails with images are more engaging but more work to maintain and test.
      </Annotation>

      <Annotation title="Unsubscribe Handling">
        Legal requirement: every marketing/promotional email needs an unsubscribe link. Transactional
        emails (registration, winner notification) are exempt. Which of these emails count as
        promotional?
      </Annotation>
    </div>
  )
}
