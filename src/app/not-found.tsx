import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold text-text-primary">404</h1>
        <p className="mb-6 text-sm text-text-secondary">Page not found.</p>
        <Link
          href="/"
          className="text-sm text-accent transition-colors hover:text-blue-400"
        >
          Back to portfolio &rarr;
        </Link>
      </div>
    </div>
  );
}
