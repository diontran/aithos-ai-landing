
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
      if (metaDesc && metaDesc.parentNode) {
        metaDesc.parentNode.removeChild(metaDesc);
      }
    };
  }, []);

  return null; // No UI needed since it's a floating widget
};

export default Chatbot;
