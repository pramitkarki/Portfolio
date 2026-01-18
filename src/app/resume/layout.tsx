import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Pramit Karki",
  description:
    "View and download Pramit Karki's professional resume. Software Developer Engineer with 2 years of experience.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        rel="preload"
        href="/docs/Pramit_Karki_Resume.pdf"
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
