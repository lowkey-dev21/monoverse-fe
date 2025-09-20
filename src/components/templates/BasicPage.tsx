import React from "react";
import HeadersClient from "@/components/common/HeadersClient";
import Footer from "@/components/common/footer";

interface BasicPageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const BasicPage: React.FC<BasicPageProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      {/* Header is client-only (interactive); use client wrapper */}
      <HeadersClient />
      <div className="bg-background mt-[5rem]  flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-4 font-dmsans">{title}</h1>
          {description && (
            <p className="text-xl text-gray-600 mb-8">{description}</p>
          )}
          <div className="prose max-w-none">{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default BasicPage;
