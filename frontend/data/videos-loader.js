import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const videosData = qs.stringify({
    populate: {
        poster: {
            fields: ["alternativeText", "url"],
        },
    },
});

export async function getVideosData() {
    const path = "/api/videos";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);

    url.search = videosData;

    return await fetchAPI(url.href, { method: "GET" });
}
