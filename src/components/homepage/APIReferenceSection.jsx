import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight } from 'react-feather';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';

export default function APIReferenceSection() {
  return (
    <section>
      <Head>
        
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-20 text-center text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:text-left">
        <Link
          href="/api"
          aria-label="API Reference"
          target="_blank"
          className="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
        >
          <ArrowUpRight className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">VueModel</h2>
          <p className="text-zinc-400">
          VueModel is Vue.ai’s AI-powered on-model imagery solution that transforms product photos into on-model product imagery. Whether you’re aiming to improve efficiency and reduce operational costs or to enhance inclusivity and representation, VueModel empowers retailers to build and customize on-model product imagery. By displaying products on models that brands and shoppers connect with and relate to the most, VueModel often improves conversion rates and sales while lowering returns. This AI-powered on-model imagery solution can analyze the size and shape of a product, identify its attributes, and then use a single set of inputs to show the same product on a variety of models of different sizes and ethnicities, depending on your usage needs and customer base. The images delivered by VueModel are created “eCommerce ready” with the right background, resolution, and image format to fit your requirements!
          </p>
          <Link
            href="/api"
            className="font-medium text-primary-100 dark:text-primary"
          >
            Get started with Dyte REST APIs &rarr;
          </Link>
          <ul className="mt-10 flex list-none flex-col gap-4 text-left lg:pl-0">
            <li className="flex flex-col gap-1">
              <Link
                href="/api/#/operations/createMeeting"
                className="group font-jakarta font-semibold text-current"
              >
                Create a meeting
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Create a meeting for your organization
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <Link
                href="/api/#/operations/addPreset"
                className="group font-jakarta font-semibold text-current"
              >
                Add a preset
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Add a preset for the given organization ID
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <Link
                href="/api/#/operations/deleteParticipant"
                className="group font-jakarta font-semibold text-current"
              >
                Delete a participant
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Delete a participant from the meeting
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
          <ThemedImage
            sources={{
            
            }}
            alt="API Reference Preview"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
