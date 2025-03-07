// Google Analytics Event Tracking Utility
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config',
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export const trackEvent = (
  action: string,
  params: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  } = {}
) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
};

// Common event tracking functions
export const analytics = {
  // Page views
  trackPageView: (path: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-BQ46T7R007', {
        page_path: path,
      });
    }
  },

  // Button clicks
  trackButtonClick: (buttonName: string, category: string = 'engagement') => {
    trackEvent('button_click', {
      event_category: category,
      event_label: buttonName,
    });
  },

  // Form submissions
  trackFormSubmission: (formName: string) => {
    trackEvent('form_submission', {
      event_category: 'form',
      event_label: formName,
    });
  },

  // Link clicks
  trackLinkClick: (linkName: string, url: string) => {
    trackEvent('link_click', {
      event_category: 'navigation',
      event_label: linkName,
      link_url: url,
    });
  },

  // Social media clicks
  trackSocialClick: (platform: string, url: string) => {
    trackEvent('social_click', {
      event_category: 'social',
      event_label: platform,
      link_url: url,
    });
  },
}; 