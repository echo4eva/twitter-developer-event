// component.tsx
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/c6ruz2GoKAn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { ShareIcon } from "@/components/icons";

interface DownloadIconProps extends React.SVGProps<SVGSVGElement> {}

const DownloadIcon: FC<DownloadIconProps> = (props) => {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
};



const Component: FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
            Generate and Share QR Codes
          </h1>
          <p className="text-gray-500 text-center text-base md:text-lg">
            Input any text or URL to create a QR code that you can download or
            share.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="input"
              >
                Text or URL
              </label>
              <div className="mt-1">
                <textarea
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                  id="input"
                  placeholder="Enter text or URL"
                  rows={3}
                />
              </div>
            </div>
            <Button className="w-full">Generate QR Code</Button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center">
          <div className="w-full max-w-[300px] mx-auto">
            <img
              alt="QR Code"
              className="w-full h-auto"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button size="sm" variant="outline">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button size="sm" variant="outline">
              <ShareIcon className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;