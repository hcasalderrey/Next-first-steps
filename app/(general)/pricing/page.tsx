import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Page",
    description: "SEO DESCRIPTION Pricing",
    keywords: ["SEO KEYWORDS", "Pricing"], 
    robots: "index, follow",
    
   
    openGraph: {
        
        url: "https://hernan.es",
        title: "Hernan's Home Page",
        description: "SEO DESCRIPTION", 
       

    }
  };

export default function Pricing() {
    return (
        <>
            <h2 className="text-7xl">Pricing Page</h2>
        </>
    );
}