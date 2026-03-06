export default function Footer() {
  return (
    <footer className="py-8 border-t border-dark-border bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/maxilogo.png" alt="MAXI AI" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-bold tracking-tight text-white">
              MAXI <span className="text-primary">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-dark-muted">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <p className="text-sm text-dark-muted/60">
            &copy; 2026 MAXI AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
