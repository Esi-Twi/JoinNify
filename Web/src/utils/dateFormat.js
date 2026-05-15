



export const formatDate = (dateString) => {
    if (!dateString) return "Not available";

    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};
