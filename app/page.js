import Achievements from "@/components/Achievements/Achievements";
import Awards from "@/components/Awards/Awards";
import CallToAction from "@/components/CallToAction/CallToAction";
import Certification from "@/components/Certification/Certification";
import ChiefConsultant from "@/components/ChiefConsultant/ChiefConsultant";
import Conference from "@/components/Conference/Conference";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import LatestArticles from "@/components/LatestArticles/LatestArticles";
import LatestVideos from "@/components/LatestVideos/LatestVideos";
import MyAchievements from "@/components/MyAchievements/MyAchievements";
import Presentation from "@/components/Presentation/Presentation";
import Socials from "@/components/Socials/Socials";
import Training from "@/components/Training/Training";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HomeBanner />
            <ChiefConsultant />
            <MyAchievements />
            <Certification />
            <Achievements />
            <Presentation />
            <Training />

            <Conference />
            <LatestArticles />

            <LatestVideos />
            <Awards />
            <Socials />
            <CallToAction />
        </main>
    );
}
