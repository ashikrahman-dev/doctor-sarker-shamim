import ContactSection from "@/components/ContactSection/ContactSection";
import MyAchievements from "@/components/MyAchievements/MyAchievements";
import SubpageBanner from "@/components/SubpageBanner/SubpageBanner";

const subBannerContent = {
    sub_title: "Contact",
    title: "Contact",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cta_url: "/contact",
    cta_text: "Get in Touch",
}

export default function Contact() {
    return (
        <main>
            <SubpageBanner data={subBannerContent} />
            <MyAchievements />
            <ContactSection />
        </main>
    );
}
