
/// <reference types="vite/client" />

interface Window {
  voiceflow: {
    chat: {
      load: (config: any) => void;
    };
  };
}

// Add declaration for ElevenLabs custom element
declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'agent-id'?: string;
    }, HTMLElement>;
  }
}
