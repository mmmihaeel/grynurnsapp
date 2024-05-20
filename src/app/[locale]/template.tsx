"use client";
import OrderModal from "@/components/OrderModal/OrderModal";
import { LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function LayoutTemplate({ children }: { children: React.ReactNode }) {
    return <LazyMotion features={domAnimation}>
        <Header />
        <main className="content">
            {children}
            <OrderModal />
        </main>
        <Footer />
    </LazyMotion>;
}