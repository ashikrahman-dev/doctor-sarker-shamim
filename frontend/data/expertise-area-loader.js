import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const expertiseAreasData = qs.stringify({
    populate: {
        image: {
            fields: ["alternativeText", "url"],
        },
    },
});

export async function getExpertiseAreasData() {
    const path = "/api/expertise-areas";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);

    url.search = expertiseAreasData;

    return await fetchAPI(url.href, { method: "GET" });
}
