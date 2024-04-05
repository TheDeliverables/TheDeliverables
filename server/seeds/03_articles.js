/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("articles").del();
    await knex("articles").insert([
        {
          articleTitle: "Choosing the Right Climbing Shoes",
          author: "John Smith",
          imageURL: "https://example.com/climbing_shoes_article.jpg",
          markDownURL: "https://example.com/climbing_shoes_article.md",
          product_id: 1, // Link to Climbing Shoes (id: 1)
          column1: "",
          column2: ""
        },
        {
          articleTitle: "Essential Tips for Climbing Harness Safety",
          author: "Emily Johnson",
          imageURL: "https://example.com/climbing_harness_article.jpg",
          markDownURL: "https://example.com/climbing_harness_article.md",
          product_id: 2, // Link to Climbing Harness (id: 2)
          column1: "",
          column2: ""
        },
        {
          articleTitle: "Maximizing Grip with Chalk Bags",
          author: "Alex Williams",
          imageURL: "https://example.com/chalk_bag_article.jpg",
          markDownURL: "https://example.com/chalk_bag_article.md",
          product_id: 3, // Link to Chalk Bag (id: 3)
          column1: "",
          column2: ""
        },
        {
          articleTitle: "Understanding Climbing Rope Standards",
          author: "Sarah Thompson",
          imageURL: "https://example.com/climbing_rope_article.jpg",
          markDownURL: "https://example.com/climbing_rope_article.md",
          product_id: 4, // Link to Climbing Rope (id: 4)
          column1: "",
          column2: ""
        },
        // Add more mock articles as needed
      ]);
};
