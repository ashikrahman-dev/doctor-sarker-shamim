import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

// Global data - [Discover Scuba]
const homePageData = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.banner": {
                    populate: {
                        doctor_image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                "section.chief-consultant": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        logos: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
    },
});

export async function getHomePageData() {
    const path = "/api/home";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);

    url.search = homePageData;

    return await fetchAPI(url.href, { method: "GET" });
}
