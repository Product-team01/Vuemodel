import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function CommunitySection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
           
            <h3 className="my-3">About VueModel</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
            
            </p>
            <Link
              href=""
              className="text-primary dark:text-primary-100"
            >
              Coming soon &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
          
            <h3 className="my-3">Clothing & Accessories Guide</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
             
            </p>
            <Link
              href=""
              className="text-primary dark:text-primary-100"
            >
                 Coming soon &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            
            <h3 className="my-3">Previews & Tests</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
             
            </p>
            {/* <Link href="/faq" className="text-primary dark:text-primary-100">
            Take me There &rarr;
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

