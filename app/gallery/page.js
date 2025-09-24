import CallToAction from "@/components/CallToAction/CallToAction";
import MyAchievements from "@/components/MyAchievements/MyAchievements";
import Socials from "@/components/Socials/Socials";
import SubpageBanner from "@/components/SubpageBanner/SubpageBanner";
import TreatmentResult from "@/components/TreatmentResult/TreatmentResult";

export default function Gallery() {
    return (
        <>
            <SubpageBanner />
            <MyAchievements />
            <TreatmentResult />
            <Socials />
            <CallToAction />
        </>
    );
}
