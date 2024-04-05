/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("articles").del();
    await knex("articles").insert([
        {
          articleTitle: "How to Set Up: Boulder vs Mountain",
          author: "Megan M",
          imageURL: "article_HowToSetUp.png",
          markDownURL: "https://example.com/climbing_shoes_article.md",
          product_id: 1, // Link to Climbing Shoes (id: 1)
          column1: "",
          column2: ""
        },
        {
          articleTitle: "Making Sure Everything's Right",
          author: "Ashley P",
          imageURL: "article_MakeThingsRight.png",
          markDownURL: "https://example.com/climbing_harness_article.md",
          product_id: 1, // Link to Climbing Harness (id: 2)
          column1: "",
          column2: ""
        },
        {
          articleTitle: "Adjusting Your Harness",
          author: "Christopher B",
          imageURL: "article_AdjustHarness.png",
          markDownURL: "https://example.com/climbing_harness_article.md",
          product_id: 1, // Link to Climbing Harness (id: 2)
          column1: "",
          column2: ""
        },
        // Add more mock articles as needed
      ]);
};
