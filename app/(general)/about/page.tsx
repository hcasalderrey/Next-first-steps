import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "SEO DESCRIPTION",
    keywords: "SEO KEYWORDS", 
    robots: "index, follow",

   
    openGraph: {
        
        url: "https://hernan.es",
        title: "Hernan's Home Page",
        description: "SEO DESCRIPTION", 
       

    }
  };

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span> 
            
        </>
    );
}