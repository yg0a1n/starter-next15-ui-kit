import {
  COOKIE_CONSENT_LOCAL_STORAGE_KEY,
  FIRST_VISIT_LOCAL_STORAGE_KEY_TEMPORARY
} from '@/config/app';
import { create } from 'zustand';

interface ConsentState {
  hasConsent: boolean;
  isHydrated: boolean;
  setConsent: (value: boolean) => void;
}

export const useConsentStore = create<ConsentState>((set) => ({
  hasConsent: false, // Default value to avoid SSR error
  isHydrated: false,
  setConsent: (value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_CONSENT_LOCAL_STORAGE_KEY, value.toString());
      set({ hasConsent: value });
    }
  }
}));

export function initializeConsent() {
  if (typeof window !== 'undefined') {
    const firstVisit = localStorage.getItem(FIRST_VISIT_LOCAL_STORAGE_KEY_TEMPORARY) === 'true';
    const consent = localStorage.getItem(COOKIE_CONSENT_LOCAL_STORAGE_KEY);

    if (firstVisit) {
      localStorage.setItem(COOKIE_CONSENT_LOCAL_STORAGE_KEY, 'false');
      localStorage.removeItem(FIRST_VISIT_LOCAL_STORAGE_KEY_TEMPORARY);
    }

    useConsentStore.setState({
      hasConsent: consent === 'true',
      isHydrated: true
    });
  }
}
