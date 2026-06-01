export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Remote Team Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track async standups<br />across time zones
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically monitor when team members post standups in Slack, send reminders to late posters, and generate weekly participation reports — without any manual effort.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-150 text-base"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📡</div>
            <h3 className="font-semibold text-white mb-1">Slack Webhook Integration</h3>
            <p className="text-sm text-[#8b949e]">Connect your Slack workspace in minutes. Monitor any channel for standup messages automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⏰</div>
            <h3 className="font-semibold text-white mb-1">Smart Reminders</h3>
            <p className="text-sm text-[#8b949e]">Automatically DM team members who haven't posted by their local deadline — no manager intervention needed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Weekly Reports</h3>
            <p className="text-sm text-[#8b949e]">Get participation trends, streak data, and team health scores delivered to your inbox every Monday.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#8b949e] mb-6">per month · unlimited team members</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited Slack channels monitored',
              'Automated daily reminders',
              'Weekly participation reports',
              'Time zone–aware scheduling',
              'Email + Slack report delivery',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-150"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the Slack integration work?</h3>
            <p className="text-sm text-[#8b949e]">You add our app to your Slack workspace and designate standup channels. We listen for messages via Slack's Events API and log participation automatically — no bots to configure manually.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can it handle multiple time zones?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Each team member's deadline is calculated based on their local time zone pulled from their Slack profile, so reminders fire at the right moment for everyone.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens after the free trial?</h3>
            <p className="text-sm text-[#8b949e]">After 14 days you'll be prompted to enter a payment method. If you choose not to subscribe, monitoring pauses and your data is retained for 30 days so you can pick up where you left off.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} StandupTrack. Built for remote engineering teams.
      </footer>
    </main>
  )
}
