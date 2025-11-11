import Achievements from "@/components/Achievements/Achievements";
import Awards from "@/components/Awards/Awards";
import CallToAction from "@/components/CallToAction/CallToAction";
import ChiefConsultant from "@/components/ChiefConsultant/ChiefConsultant";
import CurrentPosition from "@/components/CurrentPosition/CurrentPosition";
import Experiences from "@/components/Experiences/Experiences";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import LatestVideos from "@/components/LatestVideos/LatestVideos";
import MyAchievements from "@/components/MyAchievements/MyAchievements";
import MyExpertise from "@/components/MyExpertise/MyExpertise";
import NewsFilter from "@/components/NewsFilter/NewsFilter";
import Publication from "@/components/Publication/Publication";
import Socials from "@/components/Socials/Socials";
import { latestArticleData } from "@/utils/data";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HomeBanner />
            <MyExpertise />
            <ChiefConsultant />
            <MyAchievements />
            <CurrentPosition />
            <NewsFilter data={latestArticleData} />
            <Achievements />
            <Experiences />
            <Publication />
            <LatestVideos />
            <Awards />
            <Socials />
            <CallToAction />
        </main>
    );
}
