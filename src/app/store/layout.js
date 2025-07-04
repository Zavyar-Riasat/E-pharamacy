'use client';
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsProvider } from "@/app/Context/ProductsContext";

export default function ArticlesLayout({ children }) {
    useEffect(() => {
        const existingScript = document.getElementById("DK8xTLKXP8uEjQajwYI3w");
        if (existingScript) return;

        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "DK8xTLKXP8uEjQajwYI3w";
        script.domain = "www.chatbase.co";
        document.body.appendChild(script);
    }, []);
    return (
        <div>
            <ProductsProvider>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </ProductsProvider>
        </div>
    );
}