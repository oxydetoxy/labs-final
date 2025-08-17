import Footer from "@/components/landingpage/footer";
import HeroCTA from "@/components/landingpage/hero-cta";
import Form from "@/components/third.tsx/form";
import ThirdPageHero from "@/components/third.tsx/hero";

export default function ThirdPage() {
    return (
        <div>
            <ThirdPageHero/>
            <Form />
            <HeroCTA/>
            <Footer/>
        </div>
    );
}