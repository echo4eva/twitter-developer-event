import React from 'react';

const ElevatePresence: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Twitter Presence</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our robot service agency offers a suite of powerful tools to help you dominate the Twitter landscape.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Automated Engagement</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our AI-powered bots will automatically like, comment, and retweet on your behalf, helping you
                    build a stronger presence.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Targeted Campaigns</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Leverage our data-driven strategies to launch hyper-targeted campaigns and reach your ideal
                    audience.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Analytics and Reporting</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monitor your Twitter performance with our comprehensive analytics and reporting tools.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <img
            alt="Features"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/image-assets/landing/a-dramatic-portrayal-of-the-twitter-bird-with-its--TIfnrbxARWOMfVCiAo0Esg-GGX1ATF-SSiyRcIsEVcIhQ.jpeg"
            width="550"
          />
        </div>
      </div>
    </section>
  );
};

export default ElevatePresence;