
import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Add schema.org markup for Melbourne AI agency and voice bot specialization
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Melbourne AI Agency Voice Bot Development",
      "serviceType": "Voice Bot Development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Aithos AI",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Melbourne",
          "addressRegion": "VIC",
          "addressCountry": "Australia"
        }
      },
      "description": "Premier voice bot development services from Melbourne's leading AI agency."
    });
    document.head.appendChild(schema);

    // Add pricing schema for both chatbot and voice bot options
    const pricingSchema = document.createElement("script");
    pricingSchema.type = "application/ld+json";
    pricingSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "AI Bots by Melbourne's Top AI Agency",
      "description": "AI chatbots and voice bots for businesses in Melbourne",
      "brand": {
        "@type": "Brand",
        "name": "Aithos AI"
      },
      "keywords": "ai agency melbourne, voice bot, chatbot, melbourne ai",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "AUD",
        "lowPrice": "299",
        "highPrice": "499",
        "offerCount": "4",
        "offers": [
          {
            "@type": "Offer",
            "name": "Starter Chatbot",
            "price": "299",
            "priceCurrency": "AUD",
            "availability": "https://schema.org/InStock",
            "url": "https://aithos.ai/#pricing"
          },
          {
            "@type": "Offer",
            "name": "Pro Chatbot",
            "price": "399",
            "priceCurrency": "AUD",
            "availability": "https://schema.org/InStock",
            "url": "https://aithos.ai/#pricing"
          },
          {
            "@type": "Offer",
            "name": "Starter Voice Bot",
            "price": "399",
            "priceCurrency": "AUD",
            "availability": "https://schema.org/InStock",
            "url": "https://aithos.ai/#pricing"
          },
          {
            "@type": "Offer",
            "name": "Pro Voice Bot",
            "price": "499",
            "priceCurrency": "AUD",
            "availability": "https://schema.org/InStock",
            "url": "https://aithos.ai/#pricing"
          }
        ]
      }
    });
    document.head.appendChild(pricingSchema);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.async = true;
    script.onload = () => {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: "65a00fe835519ead2d924adf" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: { url: "https://runtime-api.voiceflow.com" },
        });
      }
    };
    document.body.appendChild(script);

    // Add meta description specific to Melbourne AI agency voice bot
    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = "Experience advanced voice bot technology from Melbourne's premier AI agency. Try our demo and transform your business today.";
    document.head.appendChild(metaDesc);

    // Add additional SEO-focused meta tags for voice bot and ai agency melbourne
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content = "ai agency melbourne, voice bot, chatbot, ai solutions, melbourne ai experts, voice assistant";
    document.head.appendChild(metaKeywords);

    return () => {
      // Cleanup function to remove the script when component unmounts
      const scriptElement = document.querySelector('script[src="https://cdn.voiceflow.com/widget-next/bundle.mjs"]');
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
      
      // Remove the schema and meta tags
      if (schema && schema.parentNode) {
        schema.parentNode.removeChild(schema);
      }
      if (pricingSchema && pricingSchema.parentNode) {
        pricingSchema.parentNode.removeChild(pricingSchema);
      }
      if (metaDesc && metaDesc.parentNode) {
        metaDesc.parentNode.removeChild(metaDesc);
      }
      if (metaKeywords && metaKeywords.parentNode) {
        metaKeywords.parentNode.removeChild(metaKeywords);
      }
    };
  }, []);

  return null; // No UI needed since it's a floating widget
};

export default Chatbot;
