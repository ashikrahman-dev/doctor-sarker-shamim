import NewsFilter from "@/components/NewsFilter/NewsFilter";
import SubpageBanner from "@/components/SubpageBanner/SubpageBanner";
import { latestArticleData } from "@/utils/data";

const subBannerContent = {
  sub_title: "News",
  title: "News",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cta_url: "/contact",
  cta_text: "Get in Touch",
};

export default function News() {
  return (
    <main>
      <SubpageBanner data={subBannerContent} />

      <NewsFilter data={latestArticleData} />
    </main>
  );
}
