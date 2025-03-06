import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.async = true;
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "65a00fe835519ead2d924adf" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: { url: "https://runtime-api.voiceflow.com" },
      });
    };
    document.body.appendChild(script);
  }, []);

  return null; // No UI needed since it's a floating widget
};

export default Chatbot;
