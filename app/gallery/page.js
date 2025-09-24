import CallToAction from "@/components/CallToAction/CallToAction";
import MyAchievements from "@/components/MyAchievements/MyAchievements";
import Socials from "@/components/Socials/Socials";
import SubpageBanner from "@/components/SubpageBanner/SubpageBanner";
import TreatmentResult from "@/components/TreatmentResult/TreatmentResult";

const subBannerContent = {
    sub_title: "Gallery",
    title: "Gallery",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cta_url: "/contact",
    cta_text: "Get in Touch",
};

export default function Gallery() {
    return (
        <>
            <SubpageBanner data={subBannerContent} />
            <MyAchievements />
            <TreatmentResult />
            <Socials />
            <CallToAction />
        </>
    );
}
