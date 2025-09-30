// Temporarily disabling this script due to missing dependencies
console.log("Logo seeding script is temporarily disabled");

// import { connectToDatabase, Logo as LogoModel } from "../db";

// // Sample logos data
// const sampleLogos = [
//     {
//         name: "TechCorp Logo",
//         description: "Modern tech company logo with abstract design",
//         imageUrl: "https://placehold.co/400x400/6366f1/white?text=TC",
//         category: "Technology",
//         isFeatured: true,
//     },
//     {
//         name: "EcoGreen Brand",
//         description: "Environmentally focused company logo",
//         imageUrl: "https://placehold.co/400x400/10b981/white?text=EG",
//         category: "Environment",
//         isFeatured: true,
//     },
//     {
//         name: "Foodie Delight",
//         description: "Restaurant and food service logo",
//         imageUrl: "https://placehold.co/400x400/f97316/white?text=FD",
//         category: "Food & Beverage",
//         isFeatured: false,
//     },
//     {
//         name: "Fashion Forward",
//         description: "Trendy fashion brand logo",
//         imageUrl: "https://placehold.co/400x400/ec4899/white?text=FF",
//         category: "Fashion",
//         isFeatured: true,
//     },
//     {
//         name: "HealthPlus",
//         description: "Healthcare and wellness logo",
//         imageUrl: "https://placehold.co/400x400/0ea5e9/white?text=HP",
//         category: "Healthcare",
//         isFeatured: false,
//     },
//     {
//         name: "EduSmart",
//         description: "Educational technology logo",
//         imageUrl: "https://placehold.co/400x400/8b5cf6/white?text=ES",
//         category: "Education",
//         isFeatured: true,
//     },
//     {
//         name: "AutoMax",
//         description: "Automotive industry logo",
//         imageUrl: "https://placehold.co/400x400/ef4444/white?text=AM",
//         category: "Automotive",
//         isFeatured: false,
//     },
//     {
//         name: "FinancePro",
//         description: "Financial services logo",
//         imageUrl: "https://placehold.co/400x400/f59e0b/white?text=FP",
//         category: "Finance",
//         isFeatured: true,
//     },
// ];

// async function seedLogos() {
//     try {
//         console.log("Connecting to MongoDB...");
//         await connectToDatabase();

//         console.log("Seeding logos...");

//         // Insert sample logos
//         for (const logo of sampleLogos) {
//             const newLogo = new LogoModel(logo);
//             await newLogo.save();
//             console.log(`Inserted logo: ${logo.name}`);
//         }

//         console.log("Logo seeding completed!");
//     } catch (error) {
//         console.error("Error seeding logos:", error);
//     } finally {
//         process.exit(0);
//     }
// }

// // Run the seed function
// seedLogos();