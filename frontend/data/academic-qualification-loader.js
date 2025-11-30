import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const academicQualificationData = qs.stringify({
    populate: {
        image: {
            fields: ["alternativeText", "url"],
        },
    },
});

export async function getAcademicQualificationData() {
    const path = "/api/academic-qualifications";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);

    url.search = academicQualificationData;

    return await fetchAPI(url.href, { method: "GET" });
}
