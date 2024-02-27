"use client"
import React, { useState } from "react";
import "./style.css";

import FAQ from "./faq";

export default function App() {
  const [faqs, setFaqs] = useState([
    {
      question: " What is AICarz?",
      answer:
        "AICarz is an innovative mobile application designed to simplify your car buying process. By utilizing advanced artificial intelligence (AI) technology, AICarz provides personalized car recommendations based on your preferences, budget, lifestyle, and driving needs.",
      open: false,
    },
   
    {
      question:
        "Is there a fee to use AICarz?",
      answer:  "AICarz is free to download and use. We offer a basic plan that allows access to car recommendations and detailed analysis. For users looking for an enhanced experience, AICarz Pro provides additional features such as in-depth reviews, priority customer support, and a more personalized recommendation engine for a monthly subscription fee. (coming soon)",
      open: false,
    },
  
    {
      question:
        "Can I save, share and compare cars on AICarz?",
      answer:  "Yes! AICarz allows you to save your favorite cars, compare and even share them with friends and family ",
      open: false,
    },
   
   
   
    
  
    {
      question:
      "I'm experiencing technical issues with AICarz. What should I do?",
      answer:  <>If you encounter any issues or have suggestions for improvement, please reach out to our customer support team through the app's &quot;Support&quot; section or email us at <br />  <a href="www.aicarz.com">support@aicarz.com</a>. We are dedicated to providing a seamless user experience and value your input.</>
      , open: false,
    },
    
    {
      question:
        "How do I place an Advert?",
      answer:  <>- Enter your car registration  in the advert section, and your vehicle details will be uploaded automatically. <br />
      - Add your vehicle images manually. <br />
      - Submit your Advert for Approval. <br />
      Once approved, your advert will be up! Simple process!
      </>,
      open: false,
    },
    {
      question:
        "How can I scan for damages on the cars?",
      answer: <>- Go to the bottom right corner to &quot;Car Check.&quot;  <br />
      - Slide the slider option that appears on the center of the screen to AI Tire Check, or AI Car Check. <br />
      Follow the simple instructions! <br /> <br />
      We can indicate the following for your ease using our newly created World-first AI powered: - <br />
       a.Panel gap checker <br />
      b.Tyre Health checker</>, 
        open: false,
    },

  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="app  flex">
  <div className="faqh1">
  <h1>Frequently Asked Questions.</h1>
  </div>
      <div className="faqs flex ">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
