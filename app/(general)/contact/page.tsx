import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Page",
    description: "SEO DESCRIPTION",
    keywords: "SEO KEYWORDS", 
    robots: "index, follow",

   
    openGraph: {
        
        url: "https://hernan.es",
        title: "Hernan's Home Page",
        description: "SEO DESCRIPTION", 
       

    }
  };


export default function Contact() {
    return (
        <>
            <span className="text-7xl">Contact Page</span> 
        </>
    );
}