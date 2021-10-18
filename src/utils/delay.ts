export default function delay(ms: number): Promise<undefined> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}