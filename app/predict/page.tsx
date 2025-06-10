import type { Metadata } from 'next';

// Metadata for the Predict page (for SEO and browser tab title)
// This is correctly placed in a Server Component.
export const metadata: Metadata = {
  title: 'Prediction - HealthPredict AI',
  description: 'Your health prediction results will appear here.',
};

// This is a Server Component by default in the App Router,
// as it does NOT have the 'use client' directive at the top.
// It renders on the server, ensuring quick initial load and stability.
export default function PredictPage() {
  return (
    <div className="container mx-auto p-8 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Your Prediction Insights
      </h1>
      <p className="text-lg text-center mb-8">
        This page is currently under development. Please check back soon for your personalized health predictions!
      </p>

      {/* Placeholder content for the prediction results area */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          What to Expect
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Detailed risk assessment based on your input.</li>
          <li>Insights into key health indicators.</li>
          <li>Recommendations for prevention and management.</li>
          <li>Educational resources on diabetes.</li>
        </ul>
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        Thank you for your patience as we refine our AI models.
      </p>
    </div>
  );
}