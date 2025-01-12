
import { Geist, Geist_Mono } from "next/font/google";
import ResumeBuilderInterface from "@/components/ResumeBuilderInterface";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resume Builder",
  description: "Create a resume in minutes.",
};

export default function Home() {
  return (
    <ResumeBuilderInterface />
  );
}
