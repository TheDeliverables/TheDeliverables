/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("videos").del();
    await knex("videos").insert([
        {
            videoURL: "https://www.example.com/video1",
            title: "Introduction to Climbing Shoes",
            quickDescription: "Learn about the different types of climbing shoes",
            description: "This video provides an introduction to climbing shoes, including the various types of shoes available for different climbing styles and techniques.",
            column1: "",
            column2: ""
        },
        {
            videoURL: "https://www.example.com/video2",
            title: "Climbing Harness Tutorial",
            quickDescription: "Tips for selecting and wearing a climbing harness",
            description: "In this tutorial, we cover everything you need to know about climbing harnesses, including how to select the right harness for your climbing needs and how to properly wear and adjust it for safety and comfort.",
            column1: "",
            column2: ""
        },
        {
            videoURL: "https://www.example.com/video3",
            title: "Chalk Bag Techniques",
            quickDescription: "Improve your grip with chalk bag techniques",
            description: "Watch this video to learn essential chalk bag techniques for improving grip and preventing sweaty hands while climbing. Discover different chalk bag styles and how to use them effectively.",
            column1: "",
            column2: ""
        }
    ]);
};
