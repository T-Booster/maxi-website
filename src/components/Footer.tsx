export default function Footer() {
  return (
    <footer className="py-10 border-t border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src="/maxilogo.png" alt="MAXI AI" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-bold tracking-tight">
              MAXI <span className="text-primary">AI</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a href="#waitlist" className="hover:text-white transition-colors">
              Join Waitlist
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted/50">
            &copy; {new Date().getFullYear()} MAXI AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
