const SUPPORT_SITE = "https://funfit-support.vercel.app";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-dark-border bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/funfitlogo.png" alt="FunFit" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-bold tracking-tight text-white">FunFit</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-dark-muted">
            <a href="/#features" className="hover:text-white transition-colors">Features</a>
            <a href="/#crew" className="hover:text-white transition-colors">Crew</a>
            <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="mailto:support@funfit.ai" className="hover:text-white transition-colors">Support</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href={`${SUPPORT_SITE}/delete-account`} className="hover:text-white transition-colors">
              Delete account
            </a>
          </nav>
        </div>

        <p className="mt-8 text-center md:text-left text-xs text-dark-muted/60">
          &copy; 2026 INFLUOGEN LLC. FunFit is not a medical device; its numbers are estimates.
        </p>
      </div>
    </footer>
  );
}
