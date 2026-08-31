import { useState } from "react";
import { Settings, Star } from "lucide-react";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const faqs = [
    {
      question: "What is Koshpal?",
      answer:
        "Koshpal is a personal finance app that helps you track your UPI and cash payments, set budgets, get real time alerts, and understand your spending through easy-to-read visual insights.",
    },
    {
      question: "Do I need to link my bank account to use Koshpal?",
      answer:
        "No. Koshpal works without linking your bank account. We use privacy first methods like SMS  parsing to track transactions securely.",
    },
    {
      question: "Is Koshpal safe to use?",
      answer:
        "Yes! Koshpal prioritises your privacy and security. We never store any personal details or sensitive financial information. The app only processes UPI notifications to give you insights into your transaction history.",
    },
    {
      question: "Do I need to provide any personal information to use Koshpal?",
      answer:
        "No, Koshpal doesn’t require any personal information. It only needs access to your UPI notification history to track and display your payment details.",
    },
    {
      question: "Can I track payments from multiple UPI accounts?",
      answer:
        "Yes! Koshpal supports tracking payments across all your UPI accounts in one place, making it easy to manage and view transactions from different sources.",
    },
    {
      question: "Will Koshpal remind me if I am about to overspend?",
      answer:
        "Yes. Koshpal sends smart alerts when you are close to or exceed your set budgets, helping you stay in control of your spending.",
    },
    {
      question: "Will Koshpal sync with my bank or payment apps?",
      answer:
        "Koshpal does not sync with your bank or payment apps. It only reads UPI notifications that you receive on your phone, ensuring that your financial data remains secure",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4 md:mb-6">
            <img src="/Vector.png" alt="" />
            <span className="font-medium text-sm md:text-base">FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101828] mb-3 md:mb-4 px-4">
            Commonly asked <span className="text-[#17A2B8]">questions</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg px-4">
            Find quick answers to common questions
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Questions Column */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              FAQs.
            </h3>
            <div className="space-y-2 md:space-y-3">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedQuestion(index)}
                  className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-500 ease-in-out flex items-center justify-between gap-3 group shadow-md transform ${
                    selectedQuestion === index
                      ? "bg-[#334EAC] shadow-lg scale-[1.02]"
                      : "bg-white hover:bg-gray-100 hover:shadow-lg hover:scale-[1.01]"
                  }`}
                >
                  <span
                    className="font-medium text-sm sm:text-base transition-colors duration-500"
                    style={{
                      color: selectedQuestion === index ? "#ffffff" : "#1f2937",
                    }}
                  >
                    {faq.question}
                  </span>
                  <Star
                    className={`flex-shrink-0 transition-all duration-500 w-5 h-5 sm:w-6 sm:h-6 ${
                      selectedQuestion === index
                        ? "opacity-100 rotate-0 scale-100 text-[#17A2B8] fill-[#17A2B8]"
                        : "opacity-0 rotate-90 scale-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Answer Column */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ans.
            </h3>
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 min-h-[300px] md:min-h-[400px] relative overflow-hidden">
              <Star
                className="w-6 h-6 sm:w-8 sm:h-8 mb-4 md:mb-6 transition-transform duration-500 hover:rotate-180 text-[#17A2B8] fill-[#17A2B8]"
              />
              <p
                key={selectedQuestion}
                className="text-gray-800 text-base sm:text-lg leading-relaxed animate-fadeIn"
              >
                {faqs[selectedQuestion].answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
