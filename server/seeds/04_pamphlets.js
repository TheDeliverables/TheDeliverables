/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex("pamphlets").del();
    await knex("pamphlets").insert([
        {
          pamphletTitle: "Beginner's Guide to Climbing Shoes",
          category: "Beginner",
          imageURL: "https://example.com/climbing_shoes_pamphlet.jpg",
          docURL: "https://example.com/climbing_shoes_pamphlet.pdf",
          product_id: 1, // Link to Climbing Shoes (id: 1)
          column1: "",
          column2: ""
        },
        {
          pamphletTitle: "Safety Tips for Climbing Harnesses",
          category: "Safety",
          imageURL: "https://example.com/climbing_harness_pamphlet.jpg",
          docURL: "https://example.com/climbing_harness_pamphlet.pdf",
          product_id: 2, // Link to Climbing Harness (id: 2)
          column1: "",
          column2: ""
        },
        {
          pamphletTitle: "Chalk Bag Usage Guidelines",
          category: "Accessories",
          imageURL: "https://example.com/chalk_bag_pamphlet.jpg",
          docURL: "https://example.com/chalk_bag_pamphlet.pdf",
          product_id: 3, // Link to Chalk Bag (id: 3)
          column1: "",
          column2: ""
        },
        {
          pamphletTitle: "Proper Care and Maintenance of Climbing Ropes",
          category: "Maintenance",
          imageURL: "https://example.com/climbing_rope_pamphlet.jpg",
          docURL: "https://example.com/climbing_rope_pamphlet.pdf",
          product_id: 4, // Link to Climbing Rope (id: 4)
          column1: "",
          column2: ""
        },
        // Add more mock pamphlets as needed
      ]);
};
