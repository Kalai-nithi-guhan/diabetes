// app/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next'; // For page-specific metadata

export const metadata: Metadata = {
  title: 'Home - Diabetes Risk Predictor',
  description: 'Start your journey to understanding and managing diabetes risk with AI-powered insights.',
};

export default function HomePage() {
  return (
    // Centering content vertically and horizontally, ensuring non-scrollable
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center p-4"> {/* min-h adjusted for Navbar height */}
      <div className="max-w-3xl w-full mx-auto text-center bg-white rounded-lg shadow-xl p-8 transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-800 mb-4 tracking-tight leading-tight">
          <span className="block">Empower Your Health:</span>
          <span className="block text-green-600">Predict Your Diabetes Risk</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-md mx-auto">
          Utilize our advanced AI model to gain personalized insights into your diabetes risk factors and take control of your well-being.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/prediction" // Link to your prediction tool page
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Start Prediction Now! ✨
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 border border-green-600 text-base font-bold rounded-full text-green-800 bg-transparent hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Learn About Our Approach
          </Link>
        </div>
      </div>
    </div>
  );
}