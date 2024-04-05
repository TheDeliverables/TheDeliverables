/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("videos").del();
    await knex("videos").insert([
        {
          title: "Climbing Shoes Introduction",
          shortDescription: "Learn about the features and benefits of our climbing shoes.",
          fullDescription: "In this video, we introduce our high-performance climbing shoes and discuss their design and features.",
          videoURL: "https://example.com/climbing_shoes_video.mp4",
          product_id: 1, // Link to Climbing Shoes (id: 1)
          column1: "",
          column2: ""
        },
        {
          title: "Climbing Harness Overview",
          shortDescription: "Discover the comfort and durability of our climbing harness.",
          fullDescription: "This video provides an overview of our comfortable and durable climbing harness, perfect for rock climbing and mountaineering.",
          videoURL: "https://example.com/climbing_harness_video.mp4",
          product_id: 2, // Link to Climbing Harness (id: 2)
          column1: "",
          column2: ""
        },
        {
          title: "Chalk Bag Demonstration",
          shortDescription: "See how our chalk bag keeps your hands dry and improves grip.",
          fullDescription: "Watch this video to see a demonstration of our chalk bag in action, keeping your hands dry and improving grip while climbing.",
          videoURL: "https://example.com/chalk_bag_video.mp4",
          product_id: 3, // Link to Chalk Bag (id: 3)
          column1: "",
          column2: ""
        },
        {
          title: "Climbing Rope Guide",
          shortDescription: "Learn about the features of our dynamic climbing rope.",
          fullDescription: "This informative video serves as a guide to our dynamic climbing rope, highlighting its high strength and durability.",
          videoURL: "https://example.com/climbing_rope_video.mp4",
          product_id: 4, // Link to Climbing Rope (id: 4)
          column1: "",
          column2: ""
        },
        // Add more mock videos as needed
      ]);
};
