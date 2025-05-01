export const paverOptions = [
    {
        id: 1,
        name: "Running Bond Pattern",
        type: "Rectangular pavers",
        img: "running-bond.png",
        pattern: "Running bond (offset rows)",
        use: "Common in walkways, patios, and driveways. It's one of the simplest and most cost-effective patterns.",
        price: "$12.00",
        colorOptions: [
            { color: "Charcoal Gray", price: 1 },
            { color: "Earth Brown", price: 2 },
            { color: "Sandstone", price: 3 },
            { color: "Tan", price: 4 },
            { color: "Pewter", price: 5 }
        ]
    },
    {
        id: 2,
        name: "Interlocking Pavers",
        type: "\"I\" or \"S\" shaped interlocking pavers",
        img: "interlocking.png",
        pattern: "Continuous interlock",
        use: "Designed for structural stability—commonly used in driveways, parking lots, and heavy-duty spaces.",
        price: "$13.25",
        colorOptions: [
            { color: "Light Gray", price: 1 },
            { color: "Chestnut", price: 2 },
            { color: "Cocoa", price: 3 },
            { color: "Ash", price: 4 },
            { color: "Multicolor Blend", price: 5 }
        ]
    },
    {
        id: 3,
        name: "Herringbone Pattern",
        type: "Rectangular pavers",
        img: "herringbone.png",
        pattern: "45-degree herringbone",
        use: "Great for high-traffic areas due to strong interlock—used in driveways and commercial spaces.",
        price: "$14.50",
        colorOptions: [
            { color: "Rustic Red", price: 1 },
            { color: "Slate Gray", price: 2 },
            { color: "Buff", price: 3 },
            { color: "Mocha", price: 4 },
            { color: "Dark Walnut", price: 5 }
        ]
    },
    {
        id: 4,
        name: "Cobblestone Pavers",
        type: "Square or irregular-shaped",
        img: "cobblestone.png",
        pattern: "Grid-like but rustic and random spacing",
        use: "Decorative, ideal for old-world or European-style designs. Works well in garden paths or accent areas.",
        price: "$16.75",
        colorOptions: [
            { color: "Granite Gray", price: 1 },
            { color: "Antique White", price: 2 },
            { color: "Blue Stone", price: 3 },
            { color: "Moss Green", price: 4 },
            { color: "Terra Cotta", price: 5 }
        ]
    }
];

export const borderOptions = [
    { id: 1, style: "Single Row Soldier", price: 2 },
    { id: 2, style: "Double Row Sailor", price: 3 },
    { id: 3, style: "Contrasting Color Accent", price: 4 },
    { id: 4, style: "Inlaid Decorative Edge", price: 5 }
];

export const sizeOptions = [
    { id: 1, size: "4x8 inches", price: 0 },
    { id: 2, size: "6x6 inches", price: 1 },
    { id: 3, size: "6x9 inches", price: 2 },
    { id: 4, size: "12x12 inches", price: 3 },
    { id: 5, size: "12x24 inches", price: 4 },
    { id: 6, size: "Custom Size", price: 5 }
];
