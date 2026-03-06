export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background px-6 py-8">
      <div className="mx-auto max-w-content text-center text-xs text-text-muted">
        &copy; {new Date().getFullYear()} Oguzhan Durace. Built with Next.js
        &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
