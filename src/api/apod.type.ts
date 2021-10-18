enum MediaType {
    video = "video",
    image = "image",
}

export interface ApodData {
    copyright?: string;
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: MediaType;
    title: string;
    url: string;
}