import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google";
import localFont from 'next/font/local';
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: "Evoware Technology - The Ultimate Tecnology Solution",
  description: "Tudo que você precisa para marcar presença no mundo digital",
  keywords: [
    'Technology',
    'SEO',
    'Digital',
    'Marketing',
    'Automation',
    'Evoware',
    'React.js',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Full-Stack',
    'Tailwind CSS'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
