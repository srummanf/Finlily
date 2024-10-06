import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Finlily | Practical Trading Education & Learning Platform",
  description: "Earn With Every Call. Unlock the Secrets of Successful Financial Planning with Finlily. Gain practical trading insights, real-time analysis, and access to a community of experienced traders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Finlily | Practical Trading Education & Learning Platform" />
        <meta name="description" content="Earn With Every Call. Unlock the Secrets of Successful Financial Planning with Finlily. Gain practical trading insights, real-time analysis, and access to a community of experienced traders." />
        <meta name="keywords" content="trading, finance, trading education, trading platform, financial planning, trade learning, stock market, investment, real-time trading, technical analysis, fundamental analysis, risk management, trading psychology" />
        <meta name="author" content="Finlily" />
        <meta name="robots" content="index, follow" />

        {/* Why Choose Finlily Meta Tags */}
        <meta name="practical-learning" content="At Finlily, we believe in learning by doing. Our platform provides students with real-time insights into the world of trading through daily trade uploads by experienced traders." />
        <meta name="diverse-perspectives" content="Finlily offers students a wide range of perspectives and trading strategies, whether you're interested in technical analysis, fundamental analysis, risk management, or trading psychology." />
        <meta name="interactive-community" content="Finlily fosters an interactive learning community where students can engage with traders, ask questions, and participate in discussions to refine their trading strategies and techniques." />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.finlily.com/" />
        <meta property="og:title" content="Finlily | Practical Trading Education & Learning Platform" />
        <meta property="og:description" content="Join Finlily to gain practical trading insights, real-time analysis, and access to a community of experienced traders. Start your journey to financial independence today!" />
        <meta property="og:image" content="https://www.finlily.com/finlily-og-image.png" />

        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.finlily.com/" />
        <meta property="twitter:title" content="Finlily | Practical Trading Education & Learning Platform" />
        <meta property="twitter:description" content="Earn With Every Call. Unlock the Secrets of Successful Financial Planning with Finlily." />
        <meta property="twitter:image" content="https://www.finlily.com/finlily-twitter-image.png" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="target-audience" content="Traders, Financial Enthusiasts, Investors" />
        <meta name="subject" content="Trading Education, Financial Planning, Stock Market Learning" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="canonical" href="https://www.finlily.com/" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
