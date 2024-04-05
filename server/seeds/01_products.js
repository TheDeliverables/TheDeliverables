/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("products").del();
    await knex("products").insert([
        {
          itemName: "Climbing Shoes",
          description: "High-performance climbing shoes designed for all types of climbing.",
          price: 99.99
        },
        {
          itemName: "Climbing Harness",
          description: "Comfortable and durable harness for rock climbing and mountaineering.",
          price: 79.99
        },
        {
          itemName: "Chalk Bag",
          description: "Essential accessory for keeping hands dry and improving grip while climbing.",
          price: 24.99
        },
        {
          itemName: "Climbing Rope",
          description: "Dynamic climbing rope with high strength and durability.",
          price: 149.99
        },
        {
          itemName: "Belay Device",
          description: "Versatile belay device for smooth and controlled rope handling.",
          price: 39.99
        },
        {
          itemName: "Quickdraw Set",
          description: "Set of quickdraws for securing ropes while climbing.",
          price: 69.99
        }
      ]);
};
