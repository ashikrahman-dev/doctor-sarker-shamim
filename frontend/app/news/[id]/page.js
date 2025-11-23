import Gallery from "@/components/Gallery/Gallery";
import SingleBlogBanner from "@/components/SingleBlogBanner/SingleBlogBanner";
import { latestArticleData } from "@/utils/data";
import Image from "next/image";

export default async function SingleNews({ params }) {
    const { id } = await params;

    // Convert id to number if your AllServicesData ids are numbers
    const news = latestArticleData.find(
        (news) => String(news?.id) === String(id)
    );

    if (!news) {
        return <h1>News not found</h1>;
    }

    const {
        img,
        title,
        excerpt,
        date,
        category,
        author,
        designation,
        authorImg,
    } = news;

    console.log("News Data:", news);

    const subBannerContent = {
        sub_title: date,
        title: title,
        category,
        description: excerpt,
        buttonLabel: "Make An Appointment",
        cta_text: "Get in Touch",
    };

    return (
        <>
            <SingleBlogBanner data={subBannerContent} />
            <div className="container">
                {/* Featured Image */}
                {/* <div className=" -mt-[130px] relative">
                    <Image
                        src={img}
                        alt={title}
                        width={1220}
                        height={650}
                        className="rounded-2xl w-full  object-cover aspect-16/8"
                    />
                </div>
                <h2>{title}</h2>
                <p>{excerpt}</p> */}
            </div>
            <Gallery />
        </>
    );
}
