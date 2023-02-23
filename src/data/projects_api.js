const getProject = async () => {
    const url = "https://pnvttk.github.io/api/portfolio/projects.json";
    try {
        const response = await fetch(url);
        const projects = await response.json();
        return projects
    } catch (error) {
        console.log("error", error);
    }
};

export default await getProject()
