import type { ApodData } from "./apod.type";

function dateToISOString(date: Date): string {
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
        .toISOString()
        .split("T")[0]
}

export default async function fetchApod(date?: Date): Promise<ApodData> {
    let requestUrl: URL = new URL("https://apodapi.herokuapp.com/api/")

    if (date !== undefined) {
        requestUrl.searchParams.set('date', dateToISOString(date))
    }

    const request = await fetch(requestUrl.toString())
    const apodData: ApodData = await request.json()

    return apodData;
}