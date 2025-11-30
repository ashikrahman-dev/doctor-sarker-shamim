import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const awardsData = qs.stringify({
    populate: {
        logo: {
            fields: ["alternativeText", "url"],
        },
    },
});

export async function getAwardsData() {
    const path = "/api/awards";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);

    url.search = awardsData;

    return await fetchAPI(url.href, { method: "GET" });
}
