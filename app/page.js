import Achievements from "@/components/Achievements/Achievements";
import Awards from "@/components/Awards/Awards";
import CallToAction from "@/components/CallToAction/CallToAction";
import ChiefConsultant from "@/components/ChiefConsultant/ChiefConsultant";
import Conference from "@/components/Conference/Conference";
import CurrentPosition from "@/components/CurrentPosition/CurrentPosition";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import LatestArticles from "@/components/LatestArticles/LatestArticles";
import LatestVideos from "@/components/LatestVideos/LatestVideos";
import MyAchievements from "@/components/MyAchievements/MyAchievements";
import NewsFilter from "@/components/NewsFilter/NewsFilter";
import Presentation from "@/components/Presentation/Presentation";
import Socials from "@/components/Socials/Socials";
import Training from "@/components/Training/Training";
import { latestArticleData } from "@/utils/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeBanner />
      <ChiefConsultant />
      <MyAchievements />
      <CurrentPosition />
      <LatestArticles />
      <Achievements />
      <NewsFilter data={latestArticleData} />
      <Presentation />
      <Training />
      <Conference />

      <LatestVideos />
      <Awards />
      <Socials />
      <CallToAction />
    </main>
  );
}
