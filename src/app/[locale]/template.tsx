"use client";
import { LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('../components/Header'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });

export default function LayoutTemplate({ children }: { children: React.ReactNode }) {
    return <LazyMotion features={domAnimation}>
        <Header />
        <main className="content">{children}</main>
        <Footer />
    </LazyMotion>;
}