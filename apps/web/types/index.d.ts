export {};

declare global {
  interface Window {
    GTM: any;
    dataLayer: any;
    grecaptcha: any;
  }
}
