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
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
              <h3 className="my-3">Clothing & Accessories Guide</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Dyte&apos;s expert support team is always available to help. Connect for
                dedicated 1:1 support!
              </p>
              <Link
                href="https://dyte.io/contact"
                className="text-primary dark:text-primary-100"
              >
                Take me There &rarr;
              </Link>
            </div>

            <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
              <h3 className="my-3">Previews & Tests</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Browse through our FAQs to find answers to commonly asked
                questions.
              </p>
              {/* <Link href="/faq" className="text-primary dark:text-primary-100">
                Take me There &rarr;
              </Link> */}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-center">About Vue.ai and VueModel</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-center mx-auto max-w-3xl">
            Vue.ai is an AI Orchestration Platform, offering a composable data system and a system of intelligence customized to your organization’s needs. One of the use cases we address at Vue.ai is the creation of on-model product images for fashion companies, using ethical AI. Vue.ai’s on-model imagery solution, VueModel, provides on-model imagery for products not originally shot on models. The tool accepts product images shot on mannequins, ghost mannequins, or just 3D rendered files for the system to place those input fashion images on a variety of models of varying sizes and poses.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-center mx-auto max-w-3xl">
            VueModel utilizes a proprietary system trained on synthetic data to merge inputs of fashion models and clothing, creating on-model imagery. While the system is complex, it relies on a number of simple principles that are easy to follow. This documentation will serve as guidance on those principles and how best to adhere to them when shooting products.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-center mx-auto max-w-3xl">
            This documentation not only serves as a guide for making informed decisions during your product photography but also emphasizes that these guidelines are based on the most ideal inputs and outputs possible. If you can achieve results that are even somewhat close to what is outlined here, you significantly increase your potential for high-quality results.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-center mx-auto max-w-3xl">
            To accomplish this, two primary elements are needed:
          </p>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 mb-4 mx-auto max-w-3xl">
            <li>High-quality product photography, ideally shot on ghost mannequins.</li>
            <li>Clean, well-lit photos of models in neutral or nude underwear, shot in natural but limited poses that will work well when using VueModel‘s neural network.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
