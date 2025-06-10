import type { Metadata } from "next";

// Metadata for the Contact page (this remains a Server Component feature)
export const metadata: Metadata = {
  title: "Contact Us - HealthPredict AI",
  description: "Get in touch with the HealthPredict AI team for support, inquiries, or feedback.",
};

// This is a Server Component by default because there's no 'use client' directive
export default function ContactPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-foreground">Contact Us</h1>
      <p className="mb-6 text-foreground">
        We'd love to hear from you! For support, inquiries, or feedback, please use the contact details below:
      </p>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-700">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">General Inquiries</h2>
          <p>Email: <a href="mailto:info@healthpredictai.com" className="text-blue-600 hover:underline">info@healthpredictai.com</a></p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Technical Support</h2>
          <p>Email: <a href="mailto:support@healthpredictai.com" className="text-blue-600 hover:underline">support@healthpredictai.com</a></p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Our Address</h2>
          <p>HealthPredict AI Headquarters</p>
          <p>123 Wellness Avenue, Suite 400</p>
          <p>Innovation City, State 12345</p>
          <p>Country</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
          <p>Monday - Friday: 9:00 AM - 5:00 PM (Local Time)</p>
          <p>Closed on Weekends and Public Holidays</p>
        </div>
      </div>

      <p className="mt-8 text-foreground text-center">
        We strive to respond to all inquiries within 24-48 business hours.
      </p>
    </div>
  );
}