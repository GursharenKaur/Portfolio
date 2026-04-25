import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Browse all projects by Gursharen Kaur Suri — full-stack applications, deep learning models, and more.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
