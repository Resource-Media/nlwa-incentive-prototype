import { Link } from 'react-router-dom'
import Annotation from '../../components/Annotation'
import DevNote from '../../components/DevNote'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-teal-700 text-white -mx-4 -mt-8 px-4 py-16 mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Learn About Recycling. Win Prizes.</h1>
        <p className="text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Residents in the London Borough of Hackney can watch short monthly educational videos about
          waste and recycling, take a quick quiz, and be entered into a prize draw for a <strong className="text-white">£250 grocery voucher</strong>.
        </p>
      </div>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-3xl mb-3">📺</div>
            <h3 className="font-bold text-teal-700 mb-2">1. Watch</h3>
            <p className="text-sm text-slate-600">Watch a short educational video (3-5 minutes) about waste and recycling</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-bold text-teal-700 mb-2">2. Learn</h3>
            <p className="text-sm text-slate-600">Read along with the text alternative if you prefer</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-3xl mb-3">✏️</div>
            <h3 className="font-bold text-teal-700 mb-2">3. Quiz</h3>
            <p className="text-sm text-slate-600">Answer 5 quick questions to test your knowledge</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-3xl mb-3">🎉</div>
            <h3 className="font-bold text-teal-700 mb-2">4. Win</h3>
            <p className="text-sm text-slate-600">Pass the quiz to enter this month's £250 prize draw</p>
          </div>
        </div>
      </section>

      {/* Current Module Preview */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-sm border-2 border-teal-200 p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-teal-100 text-teal-700 text-xs font-bold px-2 py-1 rounded">April 2026</span>
            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">NEW</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Food Waste: From Kitchen to Compost</h3>
          <p className="text-slate-600 mb-6">
            Learn how your food waste is collected, processed and turned into compost and energy.
            Discover what you can and can't put in your food waste caddy.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/public/register"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Register to Start Learning
            </Link>
            <Link to="/public/register" className="text-teal-600 hover:text-teal-800 text-sm underline">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* NLWA Area Info */}
      <section className="mb-12">
        <div className="bg-slate-100 rounded-lg p-6 text-center">
          <p className="text-sm text-slate-600">
            <strong className="text-slate-700">This programme is for residents of the London Borough of Hackney.</strong>{' '}
            You will be asked to confirm your eligibility when you register.
          </p>
        </div>
      </section>

      {/* Annotations */}
      <Annotation title="Trial Scope (Agreed)">
        Year-long trial focused on the London Borough of Hackney, starting early October. NLWA will
        focus additional promotional effort on one specific collection round - mid-to-low performing,
        likely flat estates. Sophia has a call with Hackney council in early May to confirm the target round.
      </Annotation>

      <Annotation title="Promotion Approach (Agreed)">
        Borough-wide messaging through social media, leafleting, and Hackney council's own channels.
        The target collection round will receive additional door-to-door leafleting and more targeted
        social media ads. In-person roadshow or event in the target area is being considered.
      </Annotation>

      <Annotation title="Success Targets (Open)">
        Not yet defined. Sophia will revisit an earlier comms plan and set targets. Evaluation metrics
        agreed: recycling tonnage (borough-wide and for the target round), number of sign-ups, monthly
        participation and retention rates, and digital engagement metrics including social media and
        platform visits.
      </Annotation>

      <Annotation title="Campaign Naming (Open)">
        Working name "Bin Bonanza" will be replaced. NLWA is planning a naming session. The name needs
        to be memorable, versatile (not borough-specific), and capable of scaling to a North London-wide
        campaign if the trial succeeds. Tone: fun, colourful, relatable - similar to the existing
        "Together We Recycle" campaign branding.
      </Annotation>

      <DevNote title="SEO and Analytics">
        Plan is for the platform to sit on a subdomain of nlwa.gov.uk. DNS configuration will need
        to be arranged with the NLWA IT team. Google Analytics or similar to be integrated. Cookie
        consent banner needed for UK compliance.
      </DevNote>

      {/* Workshop walkthrough link */}
      <div className="mt-10 pt-6 border-t border-slate-200 text-right">
        <Link to="/public/register" className="text-sm text-slate-400 hover:text-teal-600 transition-colors">
          Next: Registration →
        </Link>
      </div>
    </div>
  )
}
