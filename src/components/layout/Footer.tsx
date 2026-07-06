export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background px-6 py-8">
      <div className="mx-auto flex max-w-content flex-col items-center gap-2 text-center font-mono text-xs text-text-muted sm:flex-row sm:justify-between">
        <span>
          &copy; {new Date().getFullYear()} Oguzhan Durace &middot; this site
          is a system. try the console up top.
        </span>
        <a
          href="https://github.com/dureys/dureys.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          view source &rarr;
        </a>
      </div>
    </footer>
  );
}
