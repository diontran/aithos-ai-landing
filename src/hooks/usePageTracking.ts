
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

export const usePageTracking = (): void => {
  // Use try-catch to prevent errors if used outside Router context
  try {
    const location = useLocation();
    
    useEffect(() => {
      trackPageView(location.pathname);
    }, [location]);
  } catch (error) {
    console.warn('usePageTracking must be used within a Router context');
    // Gracefully handle the error without breaking the app
  }
};
