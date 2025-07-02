'use client';
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsProvider } from "@/app/Context/ProductsContext";

export default function ArticlesLayout({ children }) {
    useEffect(() => {
        const existingScript = document.getElementById("tvs6gtu4v52y91qpdmd14vhh82kv4iod");
        if (existingScript) return;

        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "tvs6gtu4v52y91qpdmd14vhh82kv4iod";
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