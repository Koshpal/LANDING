import React from "react";
import {
  FileText,
  Scale,
  AlertCircle,
  Shield,
  CheckCircle,
  XCircle,
  Users,
  DollarSign,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16"></div>
      <Navbar />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h1>Terms of Service will be written here</h1>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
