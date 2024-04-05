/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("products").del();
    await knex("products").insert([
      {
        id: 1,
        itemName: "Climbing Harness",
        description: "Climbing and Mountaineering Harness",
        price: 99.99,
        imageURL: "pamphlet_HarnessPDF.png",
        column1: "",
        column2: ""
      },
      {
        id: 2,
        itemName: "Backpack and Harness Combo",
        description: "Comfortable backpack paired with a durable harness.",
        price: 79.99,
        imageURL: "product_TWO_orders.png",
        column1: "",
        column2: ""
      },
    ]);
};
