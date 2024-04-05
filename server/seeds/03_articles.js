/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("articles").del();
    await knex("articles").insert([
        {
            articleTitle: "10 Essential Rock Climbing Tips for Beginners",
            author: "John Smith",
            imageURL: "https://www.example.com/article1_image.jpg",
            markDownURL: "https://www.example.com/article1_markdown",
            column1: "",
            column2: ""
        },
        {
            articleTitle: "Advanced Climbing Techniques: Smearing and Edging",
            author: "Sarah Johnson",
            imageURL: "https://www.example.com/article2_image.jpg",
            markDownURL: "https://www.example.com/article2_markdown",
            column1: "",
            column2: ""
        },
        {
            articleTitle: "Choosing the Right Climbing Rope: A Comprehensive Guide",
            author: "Michael Davis",
            imageURL: "https://www.example.com/article3_image.jpg",
            markDownURL: "https://www.example.com/article3_markdown",
            column1: "",
            column2: ""
        },
    ]);
};
