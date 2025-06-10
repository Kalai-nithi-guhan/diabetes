// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - HealthPredict AI',
  description: 'Discover the mission, vision, and technology behind our AI-powered diabetes prediction platform.',
};

export default function AboutPage() {
  return (
    // Centering content and ensuring non-scrollable, adjusting for Navbar height
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto px-4 py-8 bg-white rounded-lg shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-teal-800 sm:text-4xl mb-2">
            About HealthPredict AI
          </h1>
          <p className="text-lg text-gray-600">
            Empowering individuals with actionable health insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"> {/* Reduced font size and gap */}
          {/* Our Mission */}
          <div className="bg-blue-50 rounded-lg p-5 shadow-sm border border-blue-200">
            <h2 className="text-xl font-bold text-blue-800 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to democratize health insights by providing an easy-to-use, AI-powered tool for early diabetes risk assessment. We aim to empower individuals to make informed lifestyle choices, reducing the global burden of diabetes.
            </p>
          </div>

          {/* Our Technology */}
          <div className="bg-green-50 rounded-lg p-5 shadow-sm border border-green-200">
            <h2 className="text-xl font-bold text-green-800 mb-3">Our Technology</h2>
            <p className="text-gray-700 leading-relaxed">
              Built on cutting-edge machine learning, our model analyzes key health parameters to provide a personalized risk prediction. We prioritize data privacy and scientific accuracy to deliver reliable insights.
            </p>
          </div>

          {/* Why It Matters */}
          <div className="bg-purple-50 rounded-lg p-5 shadow-sm border border-purple-200">
            <h2 className="text-xl font-bold text-purple-800 mb-3">Why It Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Early detection and awareness are crucial in managing diabetes. Our tool helps individuals understand their potential risk, encouraging timely intervention and fostering proactive health management habits.
            </p>
          </div>

          {/* Data Privacy & Accuracy */}
          <div className="bg-yellow-50 rounded-lg p-5 shadow-sm border border-yellow-200">
            <h2 className="text-xl font-bold text-yellow-800 mb-3">Data & Accuracy</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to maintaining the highest standards of data security and model accuracy. Our algorithms are rigorously tested and continuously refined to provide the most reliable risk assessment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}