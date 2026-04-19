'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — will connect to email service later
    if (email) {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section className="bg-vice-card border border-vice-border rounded-xl p-8 my-12">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Stay in the <span className="text-vice-pink">Loop</span>
        </h3>
        <p className="text-vice-muted text-sm mb-6">
          Get GTA 6 news, leak breakdowns, and deep dives delivered to your inbox. No spam — only Vice City sentinel reports.
        </p>

        {status === 'success' ? (
          <p className="text-vice-teal font-medium">You&apos;re in! Watch your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-vice-darker border border-vice-border rounded-lg text-white placeholder-vice-muted focus:outline-none focus:border-vice-pink transition-colors text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-vice-pink hover:bg-vice-pink/80 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-vice-pink/25 text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
