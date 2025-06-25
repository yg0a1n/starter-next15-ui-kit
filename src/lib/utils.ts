import { env } from '@/env';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const getDomain = (url: string) => {
  try {
    // Add https:// protocol if not present
    const urlWithProtocol = url.startsWith('http') ? url : `https://${url}`;
    const domain = new URL(urlWithProtocol).hostname;
    // Remove 'www.' prefix if exists
    return domain.replace(/^www\./, '');
  } catch {
    // Return original input if URL parsing fails
    return url;
  }
};
