// components/ReCaptchaProviderWrapper.jsx
"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ReCaptchaProviderWrapper({ children }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lf1rOErAAAAAA_5sX-yniN5vbKlsrphbkgj7dkN">
      {children}
    </GoogleReCaptchaProvider>
  );
}
