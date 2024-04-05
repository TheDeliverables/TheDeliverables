/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("videos").del();
    await knex("videos").insert([
        {
          title: "Your First Climb",
          shortDescription: "What to expect",
          fullDescription: "In this video, we introduce our high-performance climbing shoes and discuss their design and features.",
          videoURL: "video_YourFirstClimb.png",
          product_id: 1, // Link to Climbing Shoes (id: 1)
          column1: "",
          column2: ""
        },
        {
          title: "What not to do with your harness",
          shortDescription: "Stay Safe",
          fullDescription: "This video provides an overview of our comfortable and durable climbing harness, perfect for rock climbing and mountaineering.",
          videoURL: "video_HowToUseHarness.png",
          product_id: 1, // Link to Climbing Harness (id: 2)
          column1: "",
          column2: ""
        },
        {
          title: "Safety Measures",
          shortDescription: "Always remember these 10 tips",
          fullDescription: "This video provides an overview of our comfortable and durable climbing harness, perfect for rock climbing and mountaineering.",
          videoURL: "video_SafetyMeasures.png",
          product_id: 1, // Link to Climbing Harness (id: 2)
          column1: "",
          column2: ""
        },
        // Add more mock videos as needed
      ]);
};
