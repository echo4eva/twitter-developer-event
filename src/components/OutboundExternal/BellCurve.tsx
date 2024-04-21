/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WGNquMzlgWV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ResponsiveLine } from "@nivo/line";
import type { LineProps } from "@nivo/line";
import Link from "next/link";
import data from "../../../public/data/bell.json";
import visualizeText from "../../../public/data/visualizeText.json";

interface CurvedLineChartProps extends React.HTMLAttributes<HTMLDivElement> {}

interface ResponsiveLineProps extends LineProps {
  useMesh?: boolean;
  gridYValues?: number;
}

function CurvedLineChart(props: CurvedLineChartProps) {
  const lineChartProps: ResponsiveLineProps = {
    data,
    margin: { top: 10, right: 10, bottom: 40, left: 40 },
    xScale: {
      type: "point",
    },
    yScale: {
      type: "linear",
      min: 0,
      max: "auto",
    },
    curve: "monotoneX",
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 0,
      tickPadding: 16,
    },
    axisLeft: {
      tickSize: 0,
      tickValues: 5,
      tickPadding: 16,
    },
    colors: ["#2563eb", "#e11d48"],
    pointSize: 6,
    useMesh: true,
    gridYValues: 6,
    theme: {
      tooltip: {
        chip: {
          borderRadius: "9999px",
        },
        container: {
          fontSize: "12px",
          textTransform: "capitalize",
          borderRadius: "6px",
        },
      },
      grid: {
        line: {
          stroke: "#f3f4f6",
        },
      },
    },
  };

  return (
    <div {...props}>
      <ResponsiveLine {...lineChartProps} />
    </div>
  );
}

export default function Component() {
  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            IQ Bell Curve
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {visualizeText.visualizeText} {visualizeText.learnMore}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <CurvedLineChart className="aspect-[2/1] w-full" />
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {visualizeText.bellCurveText} population.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
            href="#"
          >
            {visualizeText.learnMore}
          </Link>
        </div>
      </div>
    </div>
  );
}

// i want to layer a background image