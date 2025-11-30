import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const achievementData = qs.stringify({
    populate: {
        image: {
            fields: ["alternativeText", "url"],
        },
    },
});

export async function getAchievementData() {
    const path = "/api/achievements";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);

    url.search = achievementData;

    return await fetchAPI(url.href, { method: "GET" });
}
