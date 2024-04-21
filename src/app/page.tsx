import React from 'react';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface BotIconProps extends React.SVGProps<SVGSVGElement> {}

const BotIcon: React.FC<BotIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
};

const Component: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BotIcon className="h-6 w-6" />
          <span className="sr-only">Robot Twitter Agency</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unleash Your Twitter Potential with Our Robot Agency
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our team of AI experts and social media strategists will help you dominate the Twitter landscape.
                    From automated engagement to targeted campaigns, we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/a-striking-3d-rendering-of-a-futuristic-office-env-5TAjA_UtSSGp-BcgOV9upg-s9Ekd2gLQXWmGT63enEPgg.jpeg"
                width="550"
              />
            </div>
          </div>
        </section>
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
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="portfolio">
          <div className="container px-4 md:px-6">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Portfolio</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Successful Twitter Campaigns</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of our most successful Twitter campaigns for clients in various industries.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <img
                  alt="Portfolio 1"
                  className="mb-4 aspect-[4/3] w-full rounded-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="text-lg font-semibold">Fitness Influencer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Grew a fitness influencer's Twitter following by 50% in 3 months.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <img
                  alt="Portfolio 2"
                  className="mb-4 aspect-[4/3] w-full rounded-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="text-lg font-semibold">Tech Startup</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Helped a tech startup generate 1,000 qualified leads through a Twitter campaign.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <img
                  alt="Portfolio 3"
                  className="mb-4 aspect-[4/3] w-full rounded-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="text-lg font-semibold">E-commerce Brand</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Drove 25% of an e-commerce brand's total sales through a Twitter campaign.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <img
                  alt="Portfolio 4"
                  className="mb-4 aspect-[4/3] w-full rounded-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="text-lg font-semibold">Non-profit Organization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Helped a non-profit organization increase Twitter engagement by 75%.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="contact">
          <div className="container px-4 md:px-6">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Discuss Your Twitter Needs</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Fill out the form below and one of our experts will be in touch to discuss how we can help you dominate
                Twitter.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4 pt-12">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required type="text" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required rows={4} />
                </div>
                <Button className="justify-center" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Robot Twitter Agency. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Component;