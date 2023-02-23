const getTimeline = async () => {
    const url = "https://pnvttk.github.io/api/portfolio/timelines.json";
    try {
        const response = await fetch(url);
        const timelines = await response.json();
        return timelines
    } catch (error) {
        console.log("error", error);
    }
};

export default await getTimeline()
