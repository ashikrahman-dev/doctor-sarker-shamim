import AcademicQualification from "@/components/AcademicQualification/AcademicQualification";
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
import { getAcademicQualificationData } from "@/data/academic-qualification-loader";
import { getAchievementData } from "@/data/achievement-loader";
import { getAwardsData } from "@/data/award-loader";
import { getExpertiseAreasData } from "@/data/expertise-area-loader";
import { getHomePageData } from "@/data/home-loader";
import { getVideosData } from "@/data/videos-loader";
import { latestArticleData } from "@/utils/data";

export default async function Home() {
    // Home page data
    const homePageData = await getHomePageData();

    // Academic Qualification Data
    const academicQualification = await getAcademicQualificationData();

    // Get Achievement Data
    const achievementData = await getAchievementData();

    // Get Awards Data
    const awardsData = await getAwardsData();

    // Get Expertise Areas Data
    const expertiseAreasData = await getExpertiseAreasData();

    // Videos
    const videosData = await getVideosData();

    return (
        <main className="min-h-screen">
            <HomeBanner data={homePageData?.data?.blocks[0]} />
            <MyExpertise data={expertiseAreasData?.data} />
            <ChiefConsultant data={homePageData?.data?.blocks[1]} />
            <MyAchievements data={achievementData?.data} />
            <CurrentPosition />
            <NewsFilter data={latestArticleData} />
            <AcademicQualification data={academicQualification?.data} />
            <Experiences />
            <Publication />
            <LatestVideos data={videosData?.data} />
            <Awards data={awardsData?.data} />
            <Socials />
            <CallToAction />
        </main>
    );
}
