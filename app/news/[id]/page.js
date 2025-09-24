import { latestArticleData } from "@/app/utils/data";
import SingleBlogBanner from "@/components/SingleBlogBanner/SingleBlogBanner";
import Image from "next/image";

export default function SingleNews({ params }) {
    const { id } = params;

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

    const subBannerContent = {
        sub_title: date,
        title: title,
        description: excerpt,
        buttonLabel: "Make An Appointment",
        cta_text: "Get in Touch",
    };

    return (
        <>
            <SingleBlogBanner data={subBannerContent} />
            <div className="container">
                {/* Featured Image */}
                <div className=" -mt-[130px] relative">
                    <Image src={img} alt={title} width={1220} height={650} className="rounded-2xl w-full  object-cover" />
                </div>
                <h2>{title}</h2>
                <p>{excerpt}</p>
            </div>
        </>
    );
}
