// SoFlo Bites - Core JavaScript Logic and Restaurant Database
// 1. Configuration constants for Affiliate and AdSense integrations
// Update these IDs with your active accounts to enable monetization
const MONETIZATION_CONFIG = {
    googleAdSensePublisherId: "ca-pub-XXXXXXXXXXXXXXXX", // Insert your Google AdSense Publisher ID here
    googleAdSenseSlotId: "1234567890",              // Insert your Ad Unit Slot ID here
    affiliates: {
        openTableId: "aff-opentable-placeholder",     // Your OpenTable partner/affiliate reference ID
        resyId: "aff-resy-placeholder",               // Your Resy affiliate ID
        uberEatsId: "aff-ubereats-placeholder",       // Your UberEats affiliate/partner ID
        doorDashId: "aff-doordash-placeholder"        // Your DoorDash affiliate ID
    }
};
// 2. Restaurant Database
const RESTAURANT_DATA = [
    {
        "id": "pizza-lovers",
        "name": "Pizza Lovers",
        "location": "Plantation",
        "address": "1860 N Nob Hill Rd, Plantation, FL 33322",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Italian",
            "Pizza",
            "Pasta",
            "Family-friendly",
            "Comfort Food",
            "Casual"
        ],
        "mustTry": "Homemade Spaguetti & Meatballs",
        "description": "A nice, cozy and relaxed restaurant decorated to look like Italy. Famous for their freshly baked garlic rolls, stone-baked pizzas, and fresh homemade pastas, it's the perfect spot for a relaxed dinner with great Italian cooking.",
        "longDescription": "A nice, cozy and relaxed restaurant decorated to look like Italy. Famous for their freshly baked garlic rolls drenched in olive oil and minced garlic, stone-baked pizzas, and fresh homemade pastas, it's the perfect spot for a relaxed dinner. The warm, inviting dining room features traditional Italian decor, warm lighting, and a relaxed atmosphere. While it doesn't feel like a grandmother's house, the exceptional Italian cooking certainly tastes like it, bringing you comfort and quality in every single bite.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 10:00 PM",
            "Friday - Saturday": "11:30 AM - 10:00 PM",
            "Sunday": "12:30 PM - 10:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Photo coming soon for Pizza Lovers in Plantation, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 306-3297",
        "reserveUrl": {
            "resy": "https://resy.com/",
            "phone": "tel:+19543063297"
        },
        "orderUrl": {
            "toast": "https://www.toasttab.com/",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "phone": "tel:+19543063297"
        },
        "mapsUrl": "https://maps.google.com/?q=Pizza+Lovers+1860+N+Nob+Hill+Rd+Plantation+FL+33322",
        "otherLocations": [
            "Weston"
        ],
        "greatDishes": [
            {
                "name": "Homemade Spaguetti & Meatballs",
                "description": "Fresh house-made spaghetti tossed in a rich San Marzano tomato pulp sauce, served with tender beef and veal meatballs and finished with shaved Parmigiano cheese."
            },
            {
                "name": "Amalfi Pizza",
                "description": "An authentic stone-baked pizza topped with rich San Marzano tomato sauce, fresh mozzarella, and creamy buffalo mozzarella cheese."
            },
            {
                "name": "Margherita Italian Pizza",
                "description": "Traditional Italian-style crust layered with premium San Marzano tomato sauce, melted mozzarella, and fresh aromatic basil leaves."
            }
        ]
    },
    {
        "id": "embarcadero-41",
        "name": "Embarcadero 41",
        "location": "Pembroke Pines",
        "address": "10350 Pines Blvd D112, Pembroke Pines, FL 33025",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Peruvian",
            "Seafood",
            "Casual",
            "Date Night"
        ],
        "mustTry": "Acevichado Roll",
        "description": "A wonderful, upscale Peruvian eatery in Pembroke Pines, serving highly rated ceviches, seafood plates, and tender anticucho meats in a sleek contemporary dining room.",
        "longDescription": "A wonderful, upscale Peruvian eatery in Pembroke Pines, serving highly rated ceviches, seafood plates, and tender anticucho meats in a sleek contemporary dining room. Standard menu highlights include fresh raw fish ceviches, lomo saltado, and beautifully grilled anticucho skewers, making it an excellent stop for Peruvian food lovers.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 9:30 PM",
            "Friday - Saturday": "11:30 AM - 10:30 PM",
            "Sunday": "11:30 AM - 9:30 PM"
        },
        "image": "images/embarcadero-41-peruvian-cuisine-pembroke-pines.jpg",
        "imageAlt": "Fresh Peruvian ceviche at Embarcadero 41 in Pembroke Pines, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 342-9577",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "google": "https://www.google.com/maps/reserve/v/dine/c/embarcadero-41-pembroke-pines"
        },
        "orderUrl": {
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "grubhub": "https://www.grubhub.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Embarcadero+41+10350+Pines+Blvd+Pembroke+Pines+FL+33025",
        "otherLocations": [
            "Coral Springs",
            "Boca Raton",
            "Sunrise",
            "Las Olas Fort Lauderdale",
            "Brickell"
        ],
        "greatDishes": [
            {
                "name": "Acevichado Roll",
                "description": "A delicious fusion roll with crispy panko-breaded shrimp and fresh avocado, topped with fresh slices of local corvina (sea bass) and our signature homemade creamy acevichada sauce."
            },
            {
                "name": "Causa De Atun",
                "description": "Delicate yellow potato cake seasoned with lime and aji amarillo chili pepper, layered with savory tuna salad, and crowned with avocado, crispy fried fish, and zesty salsa criolla."
            },
            {
                "name": "Pulpo Anticuchero",
                "description": "Tender seared octopus marinated in our legendary house 'anticuchera' sauce, served with traditional Peruvian toasted crispy corn and golden yellow potatoes."
            }
        ]
    },
    {
        "id": "bistro-821",
        "name": "Bistro 821",
        "location": "Naples",
        "address": "821 5th Ave S, Naples, FL 34102",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "tags": [
            "Asian",
            "Casual",
            "Comfort Food",
            "Date Night",
            "Happy Hour",
            "Healthy Eats",
            "Italian",
            "Mediterranean",
            "Pasta",
            "Seafood",
            "Trendy"
        ],
        "mustTry": "Chilean Sea Bass",
        "description": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting.",
        "longDescription": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting. Guests can enjoy dining in the sophisticated art-filled dining room or sit on the bustling outdoor patio for prime people-watching on 5th Avenue.",
        "hours": {
            "Monday": "Closed",
            "Tuesday - Thursday": "5:00 PM - 9:30 PM",
            "Friday - Saturday": "5:00 PM - 10:00 PM",
            "Sunday": "5:00 PM - 9:30 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Uptown dining at Bistro 821 on 5th Ave South in Naples, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(239) 261-5821",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "phone": "tel:+12392615821"
        },
        "orderUrl": {
            "doordash": "https://www.doordash.com/",
            "phone": "tel:+12392615821"
        },
        "mapsUrl": "https://maps.google.com/?q=Bistro+821+821+5th+Ave+S+Naples+FL+34102",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Chilean Sea Bass",
                "description": "Tender, flaky Chilean sea bass marinated in a rich miso-sake blend, pan-roasted to perfection, and served alongside our signature Bistro 821 mashed potatoes and asparagus, finished with a velvety lemon beurre blanc."
            },
            {
                "name": "Goat Cheese Vodka Penne",
                "description": "Al dente penne rigate pasta tossed in a rich, creamy sauce of house-made marinara, fresh cream, and a splash of vodka, topped with melted goat cheese."
            },
            {
                "name": "Nut & Berry Salad",
                "description": "Fresh mixed greens tossed with assorted dried fruits, seasonal berries, and toasted nuts, finished with a sweet raspberry maple vinaigrette."
            }
        ]
    },
    {
        "id": "ra-sushi-bar",
        "name": "Ra Sushi Bar",
        "location": "Pembroke Pines",
        "address": "201 SW 145th Terrace, Pembroke Pines, FL 33027",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Asian",
            "Casual",
            "Happy Hour",
            "Trendy",
            "Date Night"
        ],
        "mustTry": "Pork Gyoza",
        "description": "A chic, energetic sushi bar and lounge at the Shops at Pembroke Gardens, serving creative signature sushi rolls, hot Japanese appetizers, and bold specialty cocktails.",
        "longDescription": "Ra Sushi Bar brings a high-energy dining experience with a vibrant, club-like sushi lounge environment at the Shops at Pembroke Gardens. Famous for its inventive specialty rolls, fresh sashimi platters, and popular late-night happy hours, the venue is a favorite for local foodies and groups. Guests can dine in the sleek, colorful dining room or enjoy drinks and bites on the bustling outdoor patio.",
        "hours": {
            "Monday - Sunday": "11:00 AM - 12:00 AM"
        },
        "image": "images/ra-sushi-bar-dumplings-pembroke-pines.jpg",
        "imageAlt": "Gyoza dumplings and sushi at Ra Sushi Bar in Pembroke Pines, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 379-2429",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "phone": "tel:+19543792429"
        },
        "orderUrl": {
            "website": "https://www.rasushi.com/",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "phone": "tel:+19543792429"
        },
        "mapsUrl": "https://maps.google.com/?q=Ra+Sushi+Pembroke+Pines+FL",
        "otherLocations": [
            "Plantation"
        ],
        "greatDishes": [
            {
                "name": "Pork Gyoza",
                "description": "Lightly pan-seared pork dumplings served with a zesty citrus-soy ponzu dipping sauce."
            },
            {
                "name": "Spicy Tuna Roll & Handroll",
                "description": "Fresh spicy yellowfin tuna mix and crisp cucumber, available as a classic cut roll or hand-rolled in premium seaweed."
            },
            {
                "name": "Shrimp Tempura Roll",
                "description": "Crispy shrimp tempura, crab mix, fresh avocado, and cucumber, rolled in sesame seeds and finished with sweet eel sauce."
            }
        ]
    },
    {
        "id": "caffe-milano",
        "name": "Caffe Milano",
        "location": "Naples",
        "address": "800 5th Ave S, Naples, FL 34102",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Casual",
            "Comfort Food",
            "Date Night",
            "Family-friendly",
            "Happy Hour",
            "Brunch",
            "Healthy Eats",
            "Italian",
            "Pasta",
            "Pizza",
            "Seafood",
            "Trendy"
        ],
        "mustTry": "Chicken Parmigiana",
        "description": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space.",
        "longDescription": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space. With a focus on fresh ingredients and modern presentation, Caffe Milano brings a vibrant dining atmosphere and classic Italian hospitality to the heart of Naples.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 10:30 PM",
            "Friday - Saturday": "11:30 AM - 11:00 PM",
            "Sunday": "11:30 AM - 10:30 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Authentic Italian pasta at Caffe Milano in Naples, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(239) 692-8480",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "phone": "tel:+12396928480"
        },
        "orderUrl": {
            "doordash": "https://www.doordash.com/",
            "ubereats": "https://www.ubereats.com/",
            "postmates": "https://www.postmates.com/",
            "phone": "tel:+12396928480"
        },
        "mapsUrl": "https://maps.google.com/?q=Caffe+Milano+800+5th+Ave+S+Naples+FL+34102",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Chicken Parmigiana",
                "description": "Crispy breaded chicken breast baked with rich house tomato sauce and melted mozzarella cheese, served with spaghetti in tomato sauce."
            },
            {
                "name": "Octopus",
                "description": "Succulent 8 oz grilled octopus cooked to tender perfection, served with golden roasted potatoes and a sweet chili sun-dried tomato sauce."
            },
            {
                "name": "Meatballs Antipasti",
                "description": "Flavorful house-made Italian meatballs simmered in tomato marinara and finished with a generous shaving of sharp pecorino cheese."
            }
        ]
    },
    {
        "id": "ethos-greek-bistro",
        "name": "Ethos Greek Bistro",
        "location": "Coconut Creek",
        "address": "4437 Lyons Rd #104, Coconut Creek, FL 33073",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Mediterranean",
            "Healthy Eats",
            "Date Night",
            "Casual",
            "Family-friendly"
        ],
        "mustTry": "Grilled Octopus Appetizer",
        "description": "A trendy, light-filled bistro blending authentic Greek culinary traditions with a vibrant, modern atmosphere. Their outdoor patio features a lovely setting with plants, umbrellas, and fans to beat the heat, plus beautiful lights at night.",
        "longDescription": "A trendy, light-filled bistro blending authentic Greek culinary traditions with a vibrant, modern atmosphere in Coconut Creek. Their outdoor patio features a lovely setting with plants, umbrellas, and fans to beat the heat, plus beautiful ambient lights at night. The kitchen features fresh Mediterranean seafood, marinated skewers, and healthy organic plates, all paired with a curated selection of Greek wines. It's clean, modern, and consistently delicious.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 10:00 PM",
            "Friday - Saturday": "11:30 AM - 11:00 PM",
            "Sunday": "11:30 AM - 10:00 PM"
        },
        "image": "images/ethos-greek-bistro-grilled-octopus-coconut-creek.jpg",
        "imageAlt": "Grilled octopus at Ethos Greek Bistro in Coconut Creek, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "754-999-0050",
        "reserveUrl": null,
        "orderUrl": {
            "website": "https://www.ethosbistro.com/",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Ethos+Greek+Bistro+Coconut+Creek+FL",
        "inkindUrl": "https://inkind.com/partners/ethos-greek-bistro?utm_source=soflobites",
        "otherLocations": [
            "Fort Lauderdale",
            "Wilton Manors"
        ],
        "greatDishes": [
            {
                "name": "Grilled Octopus Appetizer",
                "description": "Charcoal-grilled tender octopus served over a colorful bed of sliced red cabbage and leeks, drizzled with premium extra virgin olive oil, fresh oregano, and capers."
            },
            {
                "name": "Hummus Served With Warm Pita",
                "description": "Creamy puréed chickpeas blended with roasted garlic and rich olive oil, accompanied by warm, pillowy pita bread."
            },
            {
                "name": "Grilled Chicken Platter",
                "description": "Tender seasoned grilled chicken breast served alongside spinach rice, roasted rosemary lemon potatoes, a side of cool tzatziki spread, and a crisp side Greek salad."
            }
        ]
    },
    {
        "id": "tacu-taku",
        "name": "Tacu Taku Peruvian Kitchen",
        "location": "Pembroke Pines",
        "address": "911 NW 209th Ave #115, Pembroke Pines, FL 33029",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Peruvian",
            "Casual",
            "Comfort Food",
            "Hidden Gem"
        ],
        "mustTry": "Lomo Saltado",
        "description": "A cozy neighborhood dining room serving homestyle Peruvian specialties like Chaufa rice, tallarin verde, and lomo saltado.",
        "longDescription": "A cozy neighborhood dining room serving homestyle Peruvian specialties in Pembroke Pines. Famous for its lomo saltado, creamy green tallarin noodles, and chaufa fried rice, it offers friendly service and incredibly consistent quality.",
        "hours": {
            "Monday - Thursday": "12:00 PM - 9:00 PM",
            "Friday - Saturday": "12:00 PM - 10:00 PM",
            "Sunday": "12:00 PM - 9:00 PM"
        },
        "image": "images/tacu-taku-peruvian-lomo-saltado-pembroke-pines.jpg",
        "imageAlt": "Traditional Peruvian lomo saltado steak stir-fry with french fries, causa de atun potato cake, and acevichado rolls at Tacu Taku Peruvian Kitchen in Pembroke Pines, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(954) 802-6778",
        "reserveUrl": null,
        "orderUrl": {
            "website": "https://tacutakuperuvian.com/",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Tacu+Taku+911+NW+209th+Ave+Pembroke+Pines+FL+33029",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Lomo Saltado",
                "description": "Juicy, fire-wok-tossed strips of prime beef, red onions, and tomatoes, served with crisp French fries and garlic white rice."
            },
            {
                "name": "Three Sushi Rolls (secret menu)",
                "description": "A local insider favorite from their secret menu featuring three custom, beautifully rolled fusion sushi rolls incorporating Peruvian and Japanese flavors."
            },
            {
                "name": "Passion Fruit Mousse",
                "description": "A light, airy, and refreshing Peruvian dessert mousse made with fresh, tangy passion fruit juice and sweet condensed milk."
            }
        ]
    },
    {
        "id": "citrus-grillhouse",
        "name": "Citrus Grillhouse",
        "location": "Vero Beach",
        "address": "1050 Easter Lily Ln, Vero Beach, FL 32963",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "tags": [
            "Date Night",
            "Family-friendly",
            "Happy Hour",
            "Mediterranean",
            "Seafood",
            "Trendy",
            "Waterfront"
        ],
        "mustTry": "Spinach Tagliolini",
        "description": "An oceanfront bistro offering spectacular seaside views and a menu centered on fresh local seafood, grilled meats, and citrus-infused flavors in an upscale yet relaxed setting.",
        "longDescription": "An oceanfront bistro offering spectacular seaside views and a menu centered on fresh local seafood, grilled meats, and citrus-infused flavors in an upscale yet relaxed setting. Perfect for a romantic dinner or sunset dining, Citrus Grillhouse is a local favorite for its coastal breezes and scratch-made recipes.",
        "hours": {
            "Monday - Saturday": "11:30 AM - 1:30 PM, 5:00 PM - 8:30 PM",
            "Sunday": "Closed"
        },
        "image": "images/citrus-grillhouse-spinach-tagliolini-vero-beach.jpg",
        "imageAlt": "Spinach Tagliolini pasta served at Citrus Grillhouse in Vero Beach, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": false,
        "phone": "(772) 234-4114",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "phone": "tel:+17722344114"
        },
        "orderUrl": {},
        "mapsUrl": "https://maps.google.com/?q=Citrus+Grillhouse+1050+Easter+Lily+Ln+Vero+Beach+FL+32963",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Spinach Tagliolini",
                "description": "Cipriani spinach-infused tagliolini tossed in rich roasted garlic butter, mixed with fresh spinach leaves and finished with freshly grated Parmesan."
            },
            {
                "name": "Burrata",
                "description": "Sliced ripe tomatoes, fresh arugula, segments of blood orange, grapefruit, and sweet orange, paired with shaved fennel and tossed in a bright honey-lemon vinaigrette."
            },
            {
                "name": "Endive Salad",
                "description": "Chopped Belgian endive tossed with sharp blue cheese crumbles, sweet candied pecans, and fresh chives, dressed in a zesty sherry-dijon vinaigrette."
            }
        ]
    },
    {
        "id": "sweet-tomatoes",
        "name": "Sweet Tomatoes",
        "location": "Fort Myers",
        "address": "14080 S Tamiami Trail, Fort Myers, FL 33912",
        "priceRange": "$",
        "priceLevel": 1,
        "tags": [
            "Buffet",
            "Healthy Eats",
            "Casual",
            "Family-friendly"
        ],
        "mustTry": "Mac & Cheese",
        "description": "A beloved all-you-care-to-eat salad bar restaurant returning to Fort Myers. Offers a 50-foot salad bar, hot soups, fresh focaccia, and house-made bakery items.",
        "longDescription": "A beloved all-you-care-to-eat salad bar restaurant returning to Fort Myers. Famous for its 50-foot soup and salad bar, baked potatoes, sourdough focaccia, and soft-serve ice cream, this casual spot is perfect for healthy family-friendly dining.",
        "hours": {
            "Monday - Saturday": "10:30 AM - 9:00 PM",
            "Sunday": "10:30 AM - 8:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Photo coming soon for Sweet Tomatoes in Fort Myers, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": false,
        "phone": "(239) 329-8183",
        "reserveUrl": null,
        "orderUrl": null,
        "mapsUrl": "https://maps.google.com/?q=Sweet+Tomatoes+14080+S+Tamiami+Trail+Fort+Myers+FL+33912",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Mac & Cheese",
                "description": "Rich, creamy, and cheesy macaroni baked fresh and served hot from the buffet line—a comforting guest favorite."
            },
            {
                "name": "Homemade Pizza Squares",
                "description": "Focaccia-style thick crust pizza squares topped with sweet tomato sauce and melted mozzarella, baked fresh hourly."
            },
            {
                "name": "50-Foot Fresh Salad Bar",
                "description": "Create your own salad masterpiece with over 50 fresh ingredients, signature dressings, and crunchy seeds."
            }
        ]
    },
    {
        "id": "el-sid-taqueria",
        "name": "El Sid Taqueria",
        "location": "Vero Beach",
        "address": "3300 Ocean Dr, Vero Beach, FL 32963",
        "priceRange": "$",
        "priceLevel": 1,
        "tags": [
            "Mexican",
            "Casual",
            "Family-friendly",
            "Trendy"
        ],
        "mustTry": "Carne Asada Tacos",
        "description": "A vibrant, casual beachfront taco joint in Vero Beach, serving up fresh tacos, chips, and refreshing soft-serve ice cream just steps from the ocean.",
        "longDescription": "A vibrant, casual beachfront taco joint in Vero Beach, serving up fresh tacos, chips, and refreshing soft-serve ice cream just steps from the ocean. Popular for quick lunch stops and family dinners, El Sid Taqueria offers a cheerful atmosphere with outdoor seating right on Ocean Drive.",
        "hours": {
            "Sunday - Thursday": "11:00 AM - 8:00 PM",
            "Friday - Saturday": "11:00 AM - 9:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Fresh fish tacos at El Sid Taqueria in Vero Beach, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(772) 234-8299",
        "reserveUrl": {},
        "orderUrl": {
            "clover": "https://www.clover.com/",
            "phone": "tel:+17722348299"
        },
        "mapsUrl": "https://maps.google.com/?q=El+Sid+Taqueria+3300+Ocean+Dr+Vero+Beach+FL+32963",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Carne Asada Tacos",
                "description": "Tender seared steak marinated in house seasoning, served in 100% corn tortillas (gluten-free) topped with shredded cabbage, cotija cheese, radish, onions, fresh cilantro, and sweet julienned peppers."
            },
            {
                "name": "Mexican Street Corn",
                "description": "Flame-roasted sweet corn kernels mixed with diced green chiles, crema fresca, and a sprinkle of zesty tajin seasoning."
            },
            {
                "name": "House-Made Tortilla Chips",
                "description": "Crispy, fresh-fried tortilla chips served salted and warm, perfect for pairing with our house salsas or guacamole."
            }
        ]
    },
    {
        "id": "cotoa",
        "name": "Cotoa",
        "location": "North Miami",
        "address": "12475 NE 6th Ct, North Miami, FL 33161",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "tags": [
            "Ecuadorian",
            "Date Night",
            "Casual",
            "Hidden Gem"
        ],
        "mustTry": "Cangrejada con Patacón",
        "description": "Helmed by Chef Alejandra Espinoza, this Michelin-guided culinary gem in North Miami masterfully elevates traditional Ecuadorian flavors into an upscale, globally inspired dining experience in a sleek, intimate space.",
        "longDescription": "Tucked away in North Miami, Cotoa is a culinary gem that masterfully elevates traditional Ecuadorian flavors into an upscale, globally inspired dining experience. Helmed by Chef Alejandra Espinoza, this Michelin-guided restaurant offers a sophisticated menu where ancestral South American ingredients meet modern cooking techniques. The sleek, intimate space matches the artistry on the plate, making it a standout destination for food enthusiasts seeking a vibrant, story-driven meal. From beautifully plated ceviches to rich, comforting mains, Cotoa delivers an unforgettable journey through the diverse landscapes of Ecuador.",
        "hours": {
            "Monday - Tuesday": "Closed",
            "Wednesday - Thursday": "5:30 PM - 9:00 PM",
            "Friday": "5:30 PM - 9:30 PM",
            "Saturday": "1:00 PM - 9:30 PM",
            "Sunday": "1:00 PM - 8:30 PM"
        },
        "image": "images/cotoa-fish-tiradito-north-miami.jpg",
        "imageAlt": "Ecuadorian fish tiradito with yellow pepper sauce and plantain chips at Cotoa in North Miami, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(786) 328-1460",
        "reserveUrl": {
            "sevenrooms": "https://sevenrooms.com/",
            "doordash": "https://www.doordash.com/"
        },
        "orderUrl": {
            "doordash": "https://www.doordash.com/",
            "sevenrooms": "https://sevenrooms.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Cotoa+North+Miami+FL+12475+NE+6th+Ct",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Cangrejada con Patacón",
                "description": "A tribute to Sunday family gatherings, featuring tender blue crab prepared ceviche-style in a flavorful tomato base, accompanied by crispy cocolón (crunchy rice), sweet fried plantains, and a hint of preserved black lemon."
            },
            {
                "name": "Crudo Salsero",
                "description": "Freshly sliced wahoo delicately dressed in a sweet yet spicy passion fruit sauce, garnished with toasted black sesame seeds and fragrant cilantro oil."
            },
            {
                "name": "El Pincho - Hanger Steak",
                "description": "Street-food inspired grilled hanger steak served with a smoky chimichurri made from charred Andean peppers, accompanied by tender potato (papa chaucha) and refreshing crisp cucumber."
            }
        ]
    },
    {
        "id": "squid-lips-sebastian",
        "name": "Squid Lips",
        "location": "Sebastian",
        "address": "1660 N Indian River Dr, Sebastian, FL 32958",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Waterfront",
            "Seafood",
            "Casual",
            "Comfort Food",
            "Family-friendly"
        ],
        "mustTry": "Lobster-N-Crab Cake",
        "description": "A popular waterfront spot in Sebastian right on the Indian River, featuring a sandy beach dining area, grilled seafood specials, and an energetic, laid-back tropical vibe.",
        "longDescription": "A popular waterfront spot in Sebastian right on the Indian River, featuring a sandy beach dining area, grilled seafood specials, and an energetic, laid-back tropical vibe. Known for its oak-grilled cooking methods, diners can bury their toes in the sand while enjoying views of the passing boats and marine wildlife.",
        "hours": {
            "Monday - Sunday": "11:00 AM - 9:00 PM"
        },
        "image": "images/squid-lips-sebastian.jpg",
        "imageAlt": "Squid Lips waterfront pier and restaurant exterior in Sebastian, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(772) 589-3828",
        "reserveUrl": {},
        "orderUrl": {
            "doordash": "https://www.doordash.com/",
            "grubhub": "https://www.grubhub.com/",
            "phone": "tel:+17725893828"
        },
        "mapsUrl": "https://maps.google.com/?q=Squid+Lips+1660+N+Indian+River+Dr+Sebastian+FL+32958",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Lobster-N-Crab Cake",
                "description": "A premium blend of sweet lobster and tender blue crab meats prepared either sautéed or golden-fried, offering an unforgettable seafood experience."
            },
            {
                "name": "Seafood Scampi",
                "description": "Jumbo scallops and plump shrimp sautéed in a rich garlic butter white wine sauce, served over a bed of al dente fettuccine."
            },
            {
                "name": "Ahi Tuna Tartar",
                "description": "Sashimi-grade yellowfin tuna diced and tossed with sweet Thai chili and sriracha, garnished with fresh green onions and drizzled with a wasabi cream sauce, served over crispy chips."
            }
        ]
    },
    {
        "id": "wind-and-waves-grill",
        "name": "Wind & Waves Grill",
        "location": "Vero Beach",
        "address": "9250 Island Grove Terrace, Vero Beach, FL 32963",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "American",
            "Casual",
            "Family-friendly",
            "Seafood",
            "Burgers",
            "Brunch",
            "Pizza"
        ],
        "mustTry": "Blue Crab and Sweet Corn Fritters",
        "description": "A casual, family-friendly coastal tavern located at Disney's Vero Beach Resort, serving up American favorites and fresh seafood in a relaxed beachside setting.",
        "longDescription": "A warm, inviting coastal tavern located right inside Disney's Vero Beach Resort & Spa, Wind & Waves Grill highlights fresh local seafood, hand-crafted pizzas, and signature flatbreads. With its airy dining room and open kitchen design, it's the perfect spot for resort guests and visitors alike to enjoy a relaxed beachside breakfast or dinner.",
        "hours": {
            "Breakfast": "8:00 AM - 11:00 AM Daily",
            "Dinner": "5:00 PM - 9:00 PM Daily"
        },
        "image": "images/wind-and-waves-grill.jpg",
        "imageAlt": "Blueberry Lemon Ricotta Pancakes served with bacon at Wind & Waves Grill",
        "offersReservations": true,
        "offersDeliveryTakeout": false,
        "phone": "(407) 939-5277",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "website": "https://verobeach.disney.go.com/dining/wind-and-waves-grill/"
        },
        "orderUrl": {},
        "mapsUrl": "https://maps.google.com/?q=Wind+and+Waves+Grill+9250+Island+Grove+Terrace+Vero+Beach+FL+32963",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Blue Crab and Sweet Corn Fritters",
                "description": "Tender cornmeal fritters packed with sweet crab meat and corn, served with a sweet chili aioli."
            },
            {
                "name": "Blueberry-Lemon-Ricotta Pancakes",
                "description": "Three lemon-ricotta pancakes studded with fresh blueberries, served with creamy lemon syrup and choice of bacon or sausage."
            },
            {
                "name": "Wood-Fired Pizza",
                "description": "Freshly prepared hand-tossed flatbread pizzas baked in our signature wood-fired oven."
            }
        ]
    },
    {
        "id": "blue-ginger",
        "name": "Blue Ginger",
        "location": "Southwest Ranches",
        "address": "15791 Sheridan St, Southwest Ranches, FL 33331",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Asian",
            "Casual",
            "Family-friendly"
        ],
        "mustTry": "Pan-Fried Gyoza",
        "description": "A relaxed, contemporary Japanese restaurant centered entirely around its iconic 'sushi river' bar, offering an interactive, casual dining experience.",
        "longDescription": "Blue Ginger offers a relaxed, contemporary Japanese dining experience centered entirely around its iconic 'sushi river' bar and table seating. Featuring an intimate, casual vibe, it is a fantastic local spot for a laid-back date night, a quick bite with friends, or a fun, interactive family dinner where you can watch the sushi plates glide by.",
        "hours": {
            "Monday - Thursday": "3:00 PM - 10:00 PM",
            "Friday": "3:00 PM - 11:00 PM",
            "Saturday": "12:00 PM - 11:00 PM",
            "Sunday": "12:00 PM - 10:00 PM"
        },
        "image": "images/blue-ginger-sushi-platters-pembroke-pines.jpg",
        "imageAlt": "Chef special sushi platters, gyoza, and spring rolls at Blue Ginger in Pembroke Pines, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 680-9998",
        "reserveUrl": {
            "phone": "tel:+19546809998"
        },
        "orderUrl": {
            "website": "https://www.ezordernow.com/blueginger",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Blue+Ginger+15791+Sheridan+St+Southwest+Ranches+FL+33331",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Pan-Fried Gyoza",
                "description": "Delicious Japanese pan-fried dumplings filled with seasoned pork and vegetables, served with a savory soy-vinegar dipping sauce."
            },
            {
                "name": "Crispy Spicy Tuna",
                "description": "Crispy, golden-fried flattened sushi rice topped with spicy tuna tartare, fresh avocado slices, tempura flakes, orange masago, spicy mayonnaise, and sweet eel sauce."
            },
            {
                "name": "House Salad",
                "description": "A simple, refreshing blend of crisp green lettuce, shredded carrots, and cucumber slices, dressed with our signature house ginger dressing."
            }
        ]
    },
    {
        "id": "tacology-brickell",
        "name": "Tacology",
        "location": "Brickell",
        "address": "701 S Miami Ave, 4th Floor, Miami, FL 33131",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Mexican",
            "Trendy",
            "Casual",
            "Happy Hour"
        ],
        "mustTry": "Asada Steak Tacos",
        "description": "A vibrant, stylish rooftop Mexican restaurant at Brickell City Centre. Delivers creative tacos, fresh ceviches, and premium margaritas in an upbeat, contemporary environment.",
        "longDescription": "Located on the 4th floor of Brickell City Centre, Tacology is a stylish, open-air Mexican restaurant. The design blends rustic elements with neon lights and a lively bar, making it a fantastic destination for trendy date nights or post-work happy hours. The kitchen serves artisanal street food, fresh tableside guacamole, and a curated selection of tequila and mezcal cocktails.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 11:00 PM",
            "Friday - Saturday": "11:30 AM - 12:00 AM",
            "Sunday": "11:30 AM - 11:00 PM",
            "Tuesday": "11:00 AM - 11:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Photo coming soon for Tacology in Brickell, Miami, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(786) 347-5368",
        "reserveUrl": {
            "website": "https://tacology.us/"
        },
        "orderUrl": {
            "website": "https://tacology.us/",
            "ubereats": "https://www.ubereats.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Tacology+Brickell+City+Centre+Miami+FL",
        "inkindUrl": "https://inkind.com/partners/tacology?utm_source=soflobites",
        "otherLocations": [
            "Aventura"
        ],
        "greatDishes": [
            {
                "name": "Asada Steak Tacos",
                "description": "Tender grilled charbroiled steak served on hand-pressed corn tortillas with fresh onions, cilantro, and roasted salsa verde."
            },
            {
                "name": "Al Pastor Tacos",
                "description": "Marinated pork spit-roasted with pineapple, served with fresh cilantro and onions on warm corn tortillas."
            },
            {
                "name": "Queso Fundido",
                "description": "Melted artisanal Mexican cheeses baked bubbly-hot, served with warm corn tortillas for dipping (add chorizo optional)."
            }
        ]
    },
    {
        "id": "mulligans-beach-house",
        "name": "Mulligan's Beach House",
        "location": "Vero Beach",
        "address": "1025 Beachland Blvd, Vero Beach, FL 32963",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Waterfront",
            "Casual",
            "Seafood",
            "Family-friendly",
            "Brunch",
            "Comfort Food"
        ],
        "mustTry": "Firecracker Shrimp",
        "description": "A lively, family-friendly beachfront restaurant in Vero Beach, open early for breakfast and staying open late, famous for its tropical cocktails, fresh seafood, and sweeping ocean views.",
        "longDescription": "A lively, family-friendly beachfront restaurant in Vero Beach, open early for breakfast and staying open late, famous for its tropical cocktails, fresh seafood, and sweeping ocean views. Offering broad menu selections, a large outdoor patio, and a kids-friendly environment, it is the perfect spot for weekend brunch or family dinners.",
        "hours": {
            "Sunday - Thursday": "7:00 AM - 10:00 PM",
            "Friday - Saturday": "7:00 AM - 12:00 AM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Seaside dining at Mulligan's Beach House in Vero Beach, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(772) 492-6744",
        "reserveUrl": {
            "yelp": "https://www.yelp.com/",
            "phone": "tel:+17724926744"
        },
        "orderUrl": {
            "doordash": "https://www.doordash.com/",
            "phone": "tel:+17724926744"
        },
        "mapsUrl": "https://maps.google.com/?q=Mulligan's+Beach+House+1025+Beachland+Blvd+Vero+Beach+FL+32963",
        "otherLocations": [
            "Sebastian"
        ],
        "greatDishes": [
            {
                "name": "Firecracker Shrimp",
                "description": "Crispy, golden-breaded shrimp tossed in a creamy, sweet, and spicy signature firecracker sauce."
            },
            {
                "name": "Buttery Lobster Roll",
                "description": "Warm, savory lobster meat tossed in a decadent butter sauce, served on a toasted potato roll and paired with creamy macaroni and cheese."
            },
            {
                "name": "Best Burger On Beach",
                "description": "A juicy, seasoned beef patty grilled to order and served with fresh lettuce, tomato, onion, and pickles on a toasted bun."
            }
        ]
    },
    {
        "id": "la-birra-bar",
        "name": "La Birra Bar",
        "location": "Weston",
        "address": "1830 Main St, Weston, FL 33326",
        "priceRange": "$",
        "priceLevel": 1,
        "tags": [
            "Burgers",
            "Casual",
            "Family-friendly",
            "Comfort Food"
        ],
        "mustTry": "Crispy Onion Burger",
        "description": "An award-winning artisanal burger joint originating from Buenos Aires and now taking Weston by storm. Famous for their soft, house-made buns and proprietary beef blends that melt in your mouth.",
        "longDescription": "An award-winning artisanal burger joint originating from Buenos Aires and now taking Weston by storm. Famous for their soft, house-made cloud buns and proprietary beef blends that melt in your mouth. Featuring a modern, upscale restro ambiance with sleek, chic lounge elements, La Birra Bar makes everyday burger nights feel like a gourmet event.",
        "hours": {
            "Monday - Thursday": "11:00 AM - 11:00 PM",
            "Friday": "11:00 AM - 12:00 AM",
            "Saturday": "12:00 PM - 12:00 AM",
            "Sunday": "11:00 AM - 11:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Photo coming soon for La Birra Bar in Weston, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(786) 979-2693",
        "reserveUrl": null,
        "orderUrl": {
            "toast": "https://www.toasttab.com/",
            "ubereats": "https://www.ubereats.com/",
            "postmates": "https://postmates.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=La+Birra+Bar+1830+Main+St+Weston+FL+33326",
        "otherLocations": [
            "North Miami Beach",
            "Doral",
            "Coral Gables",
            "Wynwood",
            "Fort Lauderdale"
        ],
        "greatDishes": [
            {
                "name": "Crispy Onion Burger",
                "description": "Artisanal burger featuring a 4oz Black Angus Argentinian beef patty cooked to a perfect medium temperature, topped with American cheese, crispy bacon, a mountain of crunchy fried onions, and house secret mayo on freshly baked homemade bread."
            },
            {
                "name": "Crispy Dubai",
                "description": "The award-winning 2026 World Championship Dubai burger: a 4oz prime Black Angus Argentinian beef patty cooked medium by default, layered with melted white cheese, crispy golden onions, and luxurious truffle-infused chimichurri mayo on warm homemade bread."
            },
            {
                "name": "Chocolate Milkshake",
                "description": "Thick, creamy chocolate milkshake topped with fresh whipped cream and chocolate drizzle."
            }
        ]
    },
    {
        "id": "joe-and-the-juice-aventura",
        "name": "Joe & The Juice",
        "location": "Aventura",
        "address": "19501 Biscayne Blvd, Aventura, FL 33180",
        "priceRange": "$",
        "priceLevel": 1,
        "tags": [
            "Healthy Eats",
            "Casual",
            "Trendy",
            "Comfort Food",
            "Family-friendly"
        ],
        "mustTry": "JOEs Club",
        "description": "A trendy Danish juice bar and coffee shop located inside Aventura Mall, popular for its fresh-pressed custom juices, signature flatbread sandwiches, and energetic club-like soundtrack.",
        "longDescription": "A trendy Danish juice bar and coffee shop located inside Aventura Mall, popular for its fresh-pressed custom juices, signature flatbread sandwiches, and energetic club-like soundtrack. Popular with shoppers looking for a quick, healthy boost, it offers a distinct, modern atmosphere with premium coffees, shakes, and freshly prepared flatbread options.",
        "hours": {
            "Monday - Sunday": "9:00 AM - 10:00 PM"
        },
        "image": "images/joe-and-the-juice-aventura.jpg",
        "imageAlt": "Signature pink sandwich box in front of the Joe & The Juice store",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(646) 741-8640",
        "reserveUrl": {},
        "orderUrl": {
            "website": "https://www.joejuice.com/",
            "phone": "tel:+16467418640"
        },
        "mapsUrl": "https://maps.google.com/?q=Joe+and+The+Juice+Aventura+Mall+FL",
        "otherLocations": [
            "Miami Beach",
            "Brickell",
            "Wynwood",
            "Downtown Miami",
            "Sunny Isles Beach",
            "Coral Gables"
        ],
        "greatDishes": [
            {
                "name": "JOEs Club",
                "description": "Signature flatbread sandwich filled with tender chicken, fresh avocado, tomato, and vegan pesto, served on Joe's signature thin and crispy classic bread."
            },
            {
                "name": "Acai Bowl",
                "description": "A delicious, nutrient-rich bowl featuring organic acai topped with fresh banana slices, rich almond butter, and crunchy granola."
            },
            {
                "name": "Prosciutto Sandwich",
                "description": "Joe's classic crispy bread loaded with vegan pesto, sliced avocado, premium prosciutto, melted mozzarella, and fresh tomatoes."
            }
        ]
    },
    {
        "id": "rosalias-kitchen",
        "name": "Rosalia's Kitchen",
        "location": "Miramar",
        "address": "12130 Miramar Pkwy, Miramar, FL 33025",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Italian",
            "Date Night",
            "Casual",
            "Pasta",
            "Hidden Gem"
        ],
        "mustTry": "Peach Bellini Meatballs",
        "description": "A warm, family-owned Italian kitchen in Miramar. Famous for their peach bellini meatballs, artisanal pizzas, and rich lasagna in a cozy setting.",
        "longDescription": "A warm, family-owned Italian kitchen in Miramar. Famous for their peach bellini meatballs, artisanal pizzas, and rich lasagna in a cozy setting. They feature an extensive wine selection, homemade marinara, and a very popular pasta menu, making it an excellent stop for comfort dining with family or a relaxed date night.",
        "hours": {
            "Monday - Thursday": "11:00 AM - 10:00 PM",
            "Friday": "11:00 AM - 11:00 PM",
            "Saturday": "10:00 AM - 11:00 PM",
            "Sunday": "10:00 AM - 10:00 PM"
        },
        "image": "images/rosalias-kitchen-meatballs-miramar.jpg",
        "imageAlt": "Savory Italian meatballs in red marinara sauce with chives at Rosalia's Kitchen in Miramar, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 302-8878",
        "reserveUrl": {
            "sevenrooms": "https://sevenrooms.com/"
        },
        "orderUrl": {
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "grubhub": "https://www.grubhub.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Rosalias+Kitchen+12130+Miramar+Pkwy+Miramar+FL+33025",
        "inkindUrl": "https://inkind.com/partners/rosalias-kitchen?utm_source=soflobites",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Peach Bellini Meatballs",
                "description": "Rosalia's signature house-made pork and beef meatballs slow-simmered in a unique, sweet-and-savory peach bellini infused glaze."
            },
            {
                "name": "Gnocchi Alla Vucciria",
                "description": "Pillow-soft potato gnocchi tossed in a velvety, creamy house vodka sauce, served on top of a crispy chicken schnitzel—inspired by the famous La Vucciria market in Palermo, Sicily, which is also our family's place of origin."
            },
            {
                "name": "Raffinatezza Pizza",
                "description": "Fresh wood-fired crust topped with our signature house-made marinara sauce, melted mozzarella, sweet cherry tomatoes, savory sliced prosciutto, and peppery wild arugula, finished with a sweet balsamic glaze."
            }
        ]
    },
    {
        "id": "cantina-la-veinte",
        "name": "Cantina La Veinte",
        "location": "Brickell",
        "address": "495 Brickell Ave, Miami, FL 33131",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "tags": [
            "Mexican",
            "Waterfront",
            "Brunch",
            "Date Night",
            "Trendy",
            "Seafood"
        ],
        "mustTry": "Tostada De Atun",
        "description": "An ultra-chic, two-story Mexican cantina in Brickell overlooking the water, featuring a gorgeous dining room, high-end traditional Mexican specialties, and a lively bar scene.",
        "longDescription": "An ultra-chic, two-story Mexican cantina in Brickell overlooking the water, featuring a gorgeous dining room, high-end traditional Mexican specialties, and a lively bar scene. Diners can experience gourmet Mexican cuisine, standard legacy mezcal and tequila menus, and beautiful terrace seating directly over the Miami River.",
        "hours": {
            "Monday - Wednesday": "12:30 PM - 11:00 PM",
            "Thursday": "12:30 PM - 12:00 AM",
            "Friday": "12:30 PM - 1:00 AM",
            "Saturday": "12:00 PM - 1:00 AM",
            "Sunday": "11:00 AM - 11:00 PM"
        },
        "image": "images/cantina-la-veinte-mexican-tostada-octopus-brickell.jpg",
        "imageAlt": "High-end Mexican tostada de atun, pulpo a las brasas (grilled octopus), and short rib flautas at Cantina La Veinte overlooking the Brickell waterfront in Miami, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": false,
        "phone": "(305) 761-7187",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "phone": "tel:+13057617187"
        },
        "orderUrl": {},
        "mapsUrl": "https://maps.google.com/?q=Cantina+La+Veinte+495+Brickell+Ave+Miami+FL+33131",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Tostada De Atun",
                "description": "Fresh tuna marinated in yellow peppers, lime, and soy sauce, served on a crispy wonton shell with creamy guacamole and chipotle mayo."
            },
            {
                "name": "Pulpo A Las Brasas",
                "description": "Tender grilled octopus cooked over open flames, drizzled with olive oil and sprinkled with sea salt and paprika, served with confit potatoes."
            },
            {
                "name": "Short Rib Flautas",
                "description": "Crispy rolled tortillas filled with savory braised short rib, topped with a spicy house sauce, shredded lettuce, fresh cream, and crumbled queso fresco."
            }
        ],
        "inkindUrl": "https://inkind.com/partners/cantina-la-veinte?utm_source=soflobites"
    },
    {
        "id": "mister-o1",
        "name": "Mister O1 Extraordinary Pizza",
        "location": "Pembroke Pines",
        "address": "10640 Pines Blvd, Suite #F101, Pembroke Pines, FL 33026",
        "priceRange": "$",
        "priceLevel": 1,
        "tags": [
            "Italian",
            "Pizza",
            "Date Night",
            "Trendy",
            "Family-friendly"
        ],
        "mustTry": "Bella Margherita Pizza",
        "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting.",
        "longDescription": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points in Pembroke Pines. Originating in Miami Beach, it serves crisp, thin crusts in a chic modern setting. Features a lively open kitchen, high ceilings, and exceptional Italian ingredients.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 10:00 PM",
            "Friday - Saturday": "11:30 AM - 11:00 PM",
            "Sunday": "11:30 AM - 10:00 PM"
        },
        "image": "images/mister-o1-cheese-pizza-pembroke-pines.jpg",
        "imageAlt": "Cheese pizza cooked to golden brown at Mister O1 Extraordinary Pizza in Pembroke Pines, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(954) 248-2344",
        "reserveUrl": null,
        "orderUrl": {
            "website": "https://www.mistero1.com/order-online",
            "ubereats": "https://www.ubereats.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Mister+O1+10640+Pines+Blvd+Pembroke+Pines+FL+33026",
        "otherLocations": [
            "Aventura",
            "Bay Harbor",
            "Boynton Beach",
            "Brickell",
            "Coconut Grove",
            "Coral Gables",
            "Dania Pointe",
            "Doral",
            "Fort Lauderdale",
            "Miramar",
            "Mission Bay",
            "Mizner",
            "Naples - North",
            "Naples - Downtown",
            "South Beach"
        ],
        "greatDishes": [
            {
                "name": "Bella Margherita Pizza",
                "description": "A delicious thin-crust pizza topped with signature Italian tomato sauce, melted mozzarella, creamy fresh fior di latte cheese, and fresh basil."
            },
            {
                "name": "Star Luca Pizza",
                "description": "An iconic star-shaped pizza with pockets of soft ricotta cheese in the crust's points, topped with mozzarella, Italian tomato sauce, savory spicy salami calabrese, and fresh basil."
            },
            {
                "name": "Burrata",
                "description": "Creamy, fresh Italian burrata cheese served over a bed of fresh peppery arugula and ripe sliced tomatoes."
            }
        ]
    },
    {
        "id": "the-pub-pembroke",
        "name": "The Pub",
        "location": "Pembroke Pines",
        "address": "237 SW 145th Terrace, Pembroke Pines, FL 33027",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "British",
            "Casual",
            "Sports Bar",
            "Comfort Food",
            "Happy Hour",
            "Brunch"
        ],
        "mustTry": "Best Fish & Chips in the US",
        "description": "A lively, upscale British-inspired tavern at the Shops at Pembroke Gardens. Offers a self-pour draft beer wall, traditional pub fare, and an energetic outdoor patio.",
        "longDescription": "A lively, upscale British-inspired tavern at the Shops at Pembroke Gardens. Famous for its self-pour draft beer wall, traditional pub fare like bangers & mash, and an energetic outdoor patio, the venue serves a wide selection of international brews in a rich wood-accented dining room that captures classic British charm.",
        "hours": {
            "Monday - Wednesday": "12:00 PM - 11:00 PM",
            "Thursday": "12:00 PM - 12:00 AM",
            "Friday": "12:00 PM - 2:00 AM",
            "Saturday": "11:00 AM - 2:00 AM",
            "Sunday": "11:00 AM - 11:00 PM"
        },
        "image": "images/the-pub-sandwich-fries-pembroke-pines.jpg",
        "imageAlt": "Photo coming soon for The Pub in Pembroke Pines, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 430-4230",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "phone": "tel:+19544304230"
        },
        "orderUrl": {
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "postmates": "https://postmates.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=The+Pub+Pembroke+Pines+FL",
        "otherLocations": [
            "Naples"
        ],
        "greatDishes": [
            {
                "name": "Best Fish & Chips in the US",
                "description": "Award-winning crispy beer-battered haddock served alongside our signature house-made tartar sauce and cool, creamy coleslaw."
            },
            {
                "name": "Crispy Chicken Sandwhich",
                "description": "Buttermilk fried chicken breast topped with sweet maple pepper bacon, Swiss cheese, spicy dill pickle aioli, lettuce, and tomato, served on toasted focaccia bread."
            },
            {
                "name": "Chicken & Waffles",
                "description": "Crispy buttermilk fried chicken served over a warm waffle, customizable with either sweet traditional maple syrup or Nashville-style hot spice and spicy Tennessee syrup."
            }
        ]
    },
    {
        "id": "cabana-bar",
        "name": "Cabana Bar",
        "location": "Vero Beach",
        "address": "3244 Ocean Dr, Vero Beach, FL 32963",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Waterfront",
            "Seafood",
            "Casual",
            "Date Night",
            "Cuban"
        ],
        "mustTry": "Char Grilled Spanish Octopus & Chorizo",
        "description": "An upscale oceanfront pool bar and grill at the Costa d'Este Beach Resort, offering refreshing tropical cocktails, fresh ceviches, and casual beachside fare under the palm trees.",
        "longDescription": "An upscale oceanfront pool bar and grill at the Costa d'Este Beach Resort, offering refreshing tropical cocktails, fresh ceviches, and casual beachside fare under the palm trees. Nestled in a tropical pool deck layout, it is perfect for relaxing with ocean views and enjoying scratch-made resort dining.",
        "hours": {
            "Monday - Sunday": "7:30 AM - 11:00 AM, 11:00 AM - 3:00 PM, 5:00 PM - 10:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Beachside pool deck dining at Cabana Bar in Vero Beach, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": false,
        "phone": "(772) 562-9919",
        "reserveUrl": {},
        "orderUrl": {},
        "mapsUrl": "https://maps.google.com/?q=Cabana+Bar+Costa+d'Este+Vero+Beach+FL",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Char Grilled Spanish Octopus & Chorizo",
                "description": "Tender flame-grilled Spanish octopus served with smoky Spanish chorizo, herb-roasted potatoes, piquillo peppers, olives, and fresh lemon, drizzled with house chimichurri."
            },
            {
                "name": "Ahi Tuna & Salmon Tartare",
                "description": "Diced yellowfin tuna and salmon tossed with avocado, cucumber, fresh cilantro, red onions, scallions, masago, and seaweed, drizzled with wasabi aioli and yuzu-soy vinaigrette, served with crispy tropical chips."
            },
            {
                "name": "Cuban Style Skirt Steak",
                "description": "Classic Cuban-style skirt steak (churrasco) grilled to order, topped with grilled onions, fresh cilantro, and served with a flavorful chimichurri sauce."
            }
        ]
    },
    {
        "id": "brimstone-pines",
        "name": "Brimstone Woodfire Grill",
        "location": "Pembroke Pines",
        "address": "14575 SW 5th St, Pembroke Pines, FL 33027",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Date Night",
            "Casual",
            "Trendy",
            "American",
            "Happy Hour",
            "Brunch"
        ],
        "mustTry": "Shrimp Scampi",
        "description": "A premium, energetic woodfire grill serving exceptional steaks, flatbreads, and fresh seafood in a sophisticated atmosphere. Popular for its lively bar scene and outdoor patio dining.",
        "longDescription": "Located at the Shops at Pembroke Gardens, Brimstone Woodfire Grill delivers a premium American dining experience focused on oak-grilled steaks, local seafood, and artisan flatbreads. The interior features warm wood accents, a massive brick fire hearth, and a bustling open bar, making it an excellent option for upscale-casual date nights, business lunches, or happy hour gatherings on the breezy outdoor patio.",
        "hours": {
            "Monday": "11:30 AM - 9:00 PM",
            "Tuesday - Thursday": "11:30 AM - 10:00 PM",
            "Friday": "11:30 AM - 11:00 PM",
            "Saturday": "11:00 AM - 11:00 PM",
            "Sunday": "11:00 AM - 9:00 PM"
        },
        "image": "images/brimstone-seafood-pasta-shrimp-pembroke-pines.jpg",
        "imageAlt": "Creamy seafood scampi pasta with shrimp and artichoke hearts at Brimstone Woodfire Grill in Pembroke Pines, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 430-2333",
        "reserveUrl": {
            "sevenrooms": "https://sevenrooms.com/",
            "google": "https://www.google.com/maps/reserve/v/dine/c/brimstone-wood-fire-grill-pembroke-pines"
        },
        "orderUrl": {
            "toast": "https://www.toasttab.com/",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "postmates": "https://postmates.com/",
            "grubhub": "https://www.grubhub.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Brimstone+Woodfire+Grill+Pembroke+Pines+FL",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Shrimp Scampi",
                "description": "Succulent gulf shrimp sautéed with diced tomatoes, garlic, lemon butter, and fresh parsley, tossed with linguini pasta."
            },
            {
                "name": "Baby Back Ribs",
                "description": "Slow-roasted, wood-fire grilled baby back ribs basted in our flavorful house-made BBQ sauce."
            },
            {
                "name": "Nutella French Toast",
                "description": "Thick challah bread French toast layered with creamy Nutella, topped with fresh mixed berries and a dusting of powdered sugar."
            }
        ]
    },
    {
        "id": "the-bar-coral-gables",
        "name": "The Bar",
        "location": "Coral Gables",
        "address": "172 Giralda Ave, Coral Gables, FL 33134",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Casual",
            "Happy Hour",
            "Sports Bar",
            "Comfort Food",
            "Burgers",
            "American"
        ],
        "mustTry": "The Bar Burger",
        "description": "A legendary, historic pub and neighborhood staple in Coral Gables on Giralda Avenue, serving classic bar favorites, ice-cold beers, and late-night vibes since 1946.",
        "longDescription": "A legendary, historic pub and neighborhood staple in Coral Gables on Giralda Avenue, serving classic bar favorites, ice-cold beers, and late-night vibes since 1946. Featuring historic wood paneling, multiple screens for local sports, and daily happy hours, it remains one of the area's favorite social gathering spots.",
        "hours": {
            "Monday - Sunday": "3:00 PM - 3:00 AM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Classic pub exterior at The Bar in Coral Gables, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(305) 442-2730",
        "reserveUrl": {},
        "orderUrl": {
            "ubereats": "https://www.ubereats.com/",
            "postmates": "https://www.postmates.com/",
            "phone": "tel:+13054422730"
        },
        "mapsUrl": "https://maps.google.com/?q=The+Bar+172+Giralda+Ave+Coral+Gables+FL+33134",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "The Bar Burger",
                "description": "House-blended beef patty grilled to perfection and served with fresh lettuce, tomato, onions, and sliced pickles on a toasted sesame seed bun."
            },
            {
                "name": "Chicken Wings",
                "description": "Crispy chicken wings fried golden and tossed in your choice of buffalo sauce or sweet Thai chili sauce."
            },
            {
                "name": "Truffle Parmesan Fries",
                "description": "Golden fries tossed in truffle oil and shaved Parmesan cheese, served with creamy garlic aioli."
            }
        ]
    },
    {
        "id": "chugs-diner",
        "name": "Chug's Diner",
        "location": "Miami",
        "address": "3444 Main Hwy Ste 21, Miami, FL 33133",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Casual",
            "Family-friendly",
            "Hidden Gem",
            "Cuban",
            "Brunch"
        ],
        "mustTry": "Cast Iron Pancake",
        "description": "A MICHELIN Bib Gourmand-winning Cuban-American diner in Coconut Grove. Chef Michael Beltran blends classic American diner culture with homestyle Cuban specialties.",
        "longDescription": "A MICHELIN Bib Gourmand-winning Cuban-American diner in Coconut Grove. Chef Michael Beltran blends classic American diner culture with homestyle Cuban specialties. The diner features a bright, retro-inspired dining room, an open coffee counter, and a spacious outdoor terrace, serving breakfast all day, legendary pastelitos, and Cuban-style diner sandwiches.",
        "hours": {
            "Monday - Tuesday": "7:30 AM - 3:00 PM",
            "Wednesday - Saturday": "7:30 AM - 10:00 PM",
            "Sunday": "7:30 AM - 7:00 PM"
        },
        "image": "images/chugs-diner-pancakes-miami.jpg",
        "imageAlt": "A thick, fluffy pancake topped with whipped butter and maple syrup at Chug's Diner in Miami, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(305) 422-9453",
        "reserveUrl": {
            "google": "https://www.google.com/maps/reserve/v/dine/c/chugs-diner-miami"
        },
        "orderUrl": {
            "website": "https://chugsdiner.com/",
            "doordash": "https://www.doordash.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Chugs+Diner+3444+Main+Hwy+Ste+21+Miami+FL+33133",
        "inkindUrl": "https://inkind.com/partners/chugs-diner?utm_source=soflobites",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Cast Iron Pancake",
                "description": "Indulgent thick pancake slow-baked in rich clarified butter, served piping hot with sweet warm maple syrup."
            },
            {
                "name": "50/50 Croquetas",
                "description": "A delicious combination of ham and pork (lechón) croquetas served with a zesty mojo garlic aioli, crackers, and fresh lime."
            },
            {
                "name": "Mongolian Beef Pastelitos",
                "description": "Crispy, flaky puff pastry filled with tender shredded beef and toasted sesame seeds, offering a perfect Cuban-Asian flavor fusion."
            }
        ]
    },
    {
        "id": "johnmartins-irish-pub",
        "name": "Johnmartin's Restaurant & Bar",
        "location": "Coral Gables",
        "address": "253 Miracle Mile, Coral Gables, FL 33134",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Casual",
            "Date Night",
            "Comfort Food",
            "Happy Hour",
            "Sports Bar",
            "Brunch"
        ],
        "mustTry": "Fish & Chips",
        "description": "A newly renovated, beloved Irish pub on Miracle Mile, offering draft beers, single malt whiskeys, and a menu blending traditional Irish fare with contemporary American pub dishes.",
        "longDescription": "A newly renovated, beloved Irish pub on Miracle Mile, offering draft beers, single malt whiskeys, and a menu blending traditional Irish fare with contemporary American pub dishes. The warm interior blends cozy Irish pub details with modern styling, making it an excellent stop for a relaxed pint or date night dinner.",
        "hours": {
            "Monday - Wednesday": "4:00 PM - 12:00 AM",
            "Thursday - Friday": "4:00 PM - 2:00 AM",
            "Saturday": "11:30 AM - 2:00 AM",
            "Sunday": "11:00 AM - 12:00 AM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Irish pub interior at Johnmartin's Restaurant & Bar in Coral Gables, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(305) 209-0609",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "phone": "tel:+13052090609"
        },
        "orderUrl": {
            "doordash": "https://www.doordash.com/",
            "ubereats": "https://www.ubereats.com/",
            "postmates": "https://www.postmates.com/",
            "phone": "tel:+13052090609"
        },
        "mapsUrl": "https://maps.google.com/?q=Johnmartin's+Restaurant+and+Bar+Miracle+Mile+Coral+Gables+FL",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Fish & Chips",
                "description": "Crispy Guinness beer-battered cod fillets served with tangy tartar sauce and seasoned french fries."
            },
            {
                "name": "Bacon Smash Burger",
                "description": "Double smash patties, sweet caramelized onions, rich bacon jam, American cheese, and JohnMartin’s signature sauce on a soft potato bun, served with french fries."
            },
            {
                "name": "Johnmartin's Chicken Wings",
                "description": "Signature 24-hour brined chicken wings, served grilled or fried, tossed in your choice of sauce: naked, Irish BBQ, honey garlic, orange chili glaze, Irish whiskey, or buffalo."
            }
        ]
    },
    {
        "id": "tanuki-river-landing",
        "name": "Tanuki River Landing",
        "location": "Miami",
        "address": "1420 NW N River Dr, Miami, FL 33125",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Asian",
            "Trendy",
            "Waterfront",
            "Happy Hour"
        ],
        "mustTry": "Chicken & Pork Gyoza",
        "description": "A stunning, multi-sensory Japanese restaurant and lounge overlooking the Miami River, serving premium sushi, gyoza, and pan-Asian favorites in a high-design setting.",
        "longDescription": "Tanuki River Landing is a magnificent Japanese concept offering scenic riverfront dining in Miami. Known for its incredible design—featuring a monumental half-man, half-tanuki statue—the venue specializes in hot and cold pan-Asian plates, fresh sushi river flows, and custom cocktails. It is a premium destination for a trendy date night or an upscale weekend dining experience by the water.",
        "hours": {
            "Monday - Thursday, Sunday": "12:00 PM - 11:00 PM",
            "Friday - Saturday": "12:00 PM - 12:00 AM"
        },
        "image": "images/tanuki-river-landing-gyoza-sushi-miami.jpg",
        "imageAlt": "Fried gyoza dumplings and crispy rice sushi on black slate platters at Tanuki River Landing in Miami, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(305) 614-9408",
        "reserveUrl": {
            "google": "https://www.google.com/maps/reserve/v/dine/c/tanuki-river-landing-miami"
        },
        "orderUrl": {
            "website": "https://www.tanukimiami.com/",
            "ubereats": "https://www.ubereats.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Tanuki+River+Landing+1420+NW+N+River+Dr+Miami+FL+33125",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Chicken & Pork Gyoza",
                "description": "Perfectly pan-seared Japanese dumplings packed with minced chicken, tender pork, and seasoned cabbage, served with a savory dipping sauce."
            },
            {
                "name": "Tanuki Ceviche",
                "description": "Fresh mahi mahi cured in our signature house Tanuki leche de tigre marinade, served alongside crunchy rice crackers."
            },
            {
                "name": "Tuna Crispy Rice",
                "description": "Sautéed spicy tuna served on crispy pan-fried sushi rice cakes, finished with rich ponzu butter and sliced jalapeño."
            }
        ]
    },
    {
        "id": "ohana-sushi",
        "name": "Ohana",
        "location": "Doral",
        "address": "3887 NW 107th Ave #103, Doral, FL 33178",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Asian",
            "Casual",
            "Happy Hour",
            "Peruvian",
            "Hawaiian"
        ],
        "mustTry": "Ceviche Ball",
        "description": "A welcoming, family-centric spot specializing in Japanese-Peruvian Nikkei fusion with a touch of Hawaiian influence, serving creative rolls, fresh ceviches, and savory hot dishes.",
        "longDescription": "A welcoming, family-centric spot specializing in Japanese-Peruvian Nikkei fusion with a touch of Hawaiian influence. The sleek, contemporary dining room serves creative signature rolls, fresh ceviches, and savory hot dishes like Hawaiian noodles. It is a favorite for local professionals and casual family dinners.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 10:00 PM",
            "Friday": "11:30 AM - 11:00 PM",
            "Saturday": "12:00 PM - 11:00 PM",
            "Sunday": "12:00 PM - 10:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Photo coming soon for Ohana in Doral, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(786) 391-1323",
        "reserveUrl": null,
        "orderUrl": {
            "website": "https://www.ohanamiami.com/",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "postmates": "https://postmates.com/",
            "grubhub": "https://www.grubhub.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Ohana+3887+NW+107th+Ave+103+Doral+FL+33178",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Ceviche Ball",
                "description": "Delicate white fish cured in lime juice with sliced sweet peppers and red onions, wrapped in a crispy crunch tempura coating."
            },
            {
                "name": "Tiraditos",
                "description": "Sashimi-style raw fish slices served in a pool of yuzu ponzu, topped with fresh scallions, red onions, microgreens, and a flavorful kimchee or aji amarillo dressing."
            },
            {
                "name": "Spicy Tuna Delux Roll",
                "description": "Spicy chopped tuna tossed with masago, chili sauce, and sesame oil, rolled with cucumber and finished with avocado and kimchee sauce."
            }
        ]
    },
    {
        "id": "hillstone-coral-gables",
        "name": "Hillstone",
        "location": "Coral Gables",
        "address": "201 Miracle Mile, Coral Gables, FL 33134",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "tags": [
            "American",
            "Date Night",
            "Seafood",
            "Burgers"
        ],
        "mustTry": "Ding's Crispy Chicken Sandwich",
        "description": "An exceptionally polished, upscale dining institution on Miracle Mile in Coral Gables, renowned for its impeccable service, sushi platters, and USDA Prime steaks.",
        "longDescription": "An exceptionally polished, upscale dining institution on Miracle Mile in Coral Gables, renowned for its impeccable service, sushi platters, and USDA Prime steaks. Popular with local professionals and celebrating couples, it offers an elegant, dim-lit dining room and stellar American dining.",
        "hours": {
            "Monday - Saturday": "11:30 AM - 10:00 PM",
            "Sunday": "11:30 AM - 9:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Premium dining at Hillstone on Miracle Mile in Coral Gables, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": false,
        "phone": "(305) 529-0141",
        "reserveUrl": {
            "website": "https://www.hillstone.com/",
            "phone": "tel:+13055290141"
        },
        "orderUrl": {},
        "mapsUrl": "https://maps.google.com/?q=Hillstone+201+Miracle+Mile+Coral+Gables+FL+33134",
        "otherLocations": [
            "Bal Harbour"
        ],
        "greatDishes": [
            {
                "name": "Ding's Crispy Chicken Sandwich",
                "description": "Crispy buttermilk fried chicken breast, baby Swiss cheese, and spicy slaw on a toasted bun."
            },
            {
                "name": "USDA Prime Filet",
                "description": "Premium USDA Prime filet mignon served with today’s fresh green vegetable (accompanied by rich potatoes colcannon after 5:00 PM; limited availability)."
            },
            {
                "name": "Spicy Tuna Roll",
                "description": "#1 grade ahi tuna, fresh avocado, jalapeño, and crunchy jicama wrapped in seasoned sushi rice and nori."
            }
        ]
    },
    {
        "id": "negroni-weston",
        "name": "Negroni Bistro & Sushi Bar",
        "location": "Weston",
        "address": "1744 Main St, Weston, FL 33326",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Date Night",
            "Trendy",
            "Asian",
            "Brunch",
            "Italian",
            "Pasta"
        ],
        "mustTry": "Macaroni alla Vodka",
        "description": "An upscale-casual global bistro and sushi bar at Weston Town Center. Serves a unique fusion of international classics, Latin sushi rolls, and craft cocktails.",
        "longDescription": "Negroni Bistro & Sushi Bar at Weston Town Center brings a sophisticated dining experience with a global menu. The chic bistro features an elegant indoor dining room, a sleek sushi bar, and a leafy outdoor terrace. Diners can experience a unique combination of international dishes—ranging from artisanal pastas and steaks to Latin-inspired sushi rolls—paired with high-end mixology.",
        "hours": {
            "Monday - Wednesday": "12:00 PM - 10:00 PM",
            "Thursday": "12:00 PM - 12:00 AM",
            "Friday": "12:00 PM - 11:00 AM, 12:00 PM - 12:00 AM",
            "Saturday": "12:00 PM - 12:00 AM",
            "Sunday": "11:00 AM - 10:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Photo coming soon for Negroni Bistro & Sushi Bar in Weston, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 444-0096",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "google": "https://www.google.com/maps/reserve/v/dine/c/negroni-bistro-sushi-bar-weston"
        },
        "orderUrl": {
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Negroni+1744+Main+St+Weston+FL+33326",
        "inkindUrl": "https://inkind.com/partners/negroni-weston?utm_source=soflobites",
        "otherLocations": [
            "Midtown Miami",
            "Doral",
            "Brickell"
        ],
        "greatDishes": [
            {
                "name": "Macaroni alla Vodka",
                "description": "Freshly made pasta tossed in a rich, creamy tomato vodka sauce, topped with dollops of soft ricotta, vibrant basil pesto, and a drizzle of premium extra virgin olive oil."
            },
            {
                "name": "Tuna Tartare",
                "description": "Diced fresh tuna dressed in a bright citrus sauce with sesame, served alongside smooth avocado aioli, chipotle mayo, and crunchy crispy wontons."
            },
            {
                "name": "Ceviche",
                "description": "Traditional ceviche with fresh mahi mahi cured in zesty leche de tigre, tossed with red onions, red peppers, avocado, sweet potato chunks, Peruvian corn, and fresh cilantro."
            }
        ]
    },
    {
        "id": "tap42-aventura",
        "name": "Tap 42 Craft Kitchen & Bar",
        "location": "Aventura",
        "address": "19565 Biscayne Blvd, Aventura, FL 33180",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Casual",
            "Trendy",
            "Happy Hour",
            "American",
            "Brunch"
        ],
        "mustTry": "Cajun Spiced New York Strip",
        "description": "A popular, high-energy gastropub located on the upper level of the upscale Aventura Mall, offering creative American dishes, craft beers, and weekend bottomless brunches.",
        "longDescription": "A popular, high-energy gastropub offering creative American food, craft beers, and cocktails located on the upper level of the upscale Aventura Mall. Famous for its weekend bottomless brunch and highly social atmosphere, the venue draws a lively crowd of locals, mall shoppers, and young professionals. The sprawling indoor space features a distinctive rustic-industrial design, a massive draft beer selection, and an impressive 1,200-square-foot open-air patio overlooking the mall's vibrant plaza, making it perfect for business lunches, happy hours, and weekend catchups.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 11:00 PM",
            "Friday": "11:30 AM - 12:00 AM",
            "Saturday": "11:00 AM - 12:00 AM",
            "Sunday": "11:00 AM - 10:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Photo coming soon for Tap 42 Craft Kitchen & Bar in Aventura, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(786) 440-7270",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "google": "https://www.google.com/maps/reserve/v/dine/c/tap-42-aventura"
        },
        "orderUrl": {
            "website": "https://tap42.co/",
            "toast": "https://www.toasttab.com/",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "postmates": "https://postmates.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Tap+42+Aventura+FL+19565+Biscayne+Blvd",
        "otherLocations": [
            "Boca Raton",
            "Coral Gables",
            "Coral Springs",
            "Davie",
            "Doral",
            "Fort Myers",
            "Fort Lauderdale",
            "Kendall",
            "Midtown Miami",
            "Naples",
            "Palm Beach Gardens"
        ],
        "greatDishes": [
            {
                "name": "Cajun Spiced New York Strip",
                "description": "A 14oz flame-grilled Angus beef New York strip seasoned with bold Cajun spices, topped with rich garlic herb butter and served with creamy horseradish and indulgent truffle mac & cheese."
            },
            {
                "name": "The Prohibition Burger",
                "description": "Our signature Tap 42 burger blend cooked to perfection, topped with melted white cheddar, lettuce, tomato, onion, applewood bacon, secret sauce, and zesty dijonnaise."
            },
            {
                "name": "The Hangover Sandwhich",
                "description": "Thick-cut peppered bacon, egg, and melted cheese, layered with a crispy hash brown and truffle aioli on a toasted brioche bun."
            }
        ]
    },
    {
        "id": "paul-bakery-sunrise",
        "name": "Paul Bakery (Paul Maison de Qualité)",
        "location": "Sunrise",
        "address": "1800 Sawgrass Mills Cir #2500, Sunrise, FL 33323",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Casual",
            "Family-friendly",
            "Comfort Food",
            "Brunch"
        ],
        "mustTry": "1/2 Croque Monsieur & Tomato Soup",
        "description": "An authentic French bakery and cafe at Sawgrass Mills, offering freshly baked artisanal breads, puff pastries, tarts, and savory sandwiches with classic Parisian flair.",
        "longDescription": "An authentic French bakery and cafe at Sawgrass Mills, offering freshly baked artisanal breads, puff pastries, tarts, and savory sandwiches with classic Parisian flair. Guests can stop for a quick butter croissant or sit for a relaxed coffee and savory lunch in the traditional French cafe setting.",
        "hours": {
            "Monday - Sunday": "10:00 AM - 9:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Artisanal tarts and breads at Paul Bakery in Sunrise, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(954) 846-0344",
        "reserveUrl": {},
        "orderUrl": {
            "website": "https://www.paul-usa.com/",
            "phone": "tel:+19548460344"
        },
        "mapsUrl": "https://maps.google.com/?q=Paul+Bakery+Sawgrass+Mills+Sunrise+FL",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "1/2 Croque Monsieur & Tomato Soup",
                "description": "Half of a classic French grilled ham and cheese sandwich made with Paris ham, Swiss cheese, and creamy béchamel sauce between crispy toasted bread, served with a side of warm tomato soup."
            },
            {
                "name": "Fried Eggs",
                "description": "Two farm-fresh eggs fried to order, served alongside fresh mixed greens and a slice of freshly baked French baguette."
            },
            {
                "name": "1/2 Flute with Jam",
                "description": "Half of a freshly baked traditional French baguette, served with butter and fruit jam."
            }
        ]
    },
    {
        "id": "lb-eatery",
        "name": "LB Eatery & Wine",
        "location": "Pembroke Pines",
        "address": "14543 SW 5th St, Pembroke Pines, FL 33027",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Date Night",
            "Casual",
            "Trendy",
            "Italian",
            "Brunch",
            "Pasta"
        ],
        "mustTry": "Pesto Fettuccine",
        "description": "An exceptional fermentation-forward dining concept serving artisanal naturally leavened sourdough pizzas, house-made pastas, and natural wines.",
        "longDescription": "Located at the Shops at Pembroke Gardens, LB Eatery & Wine is a culinary gem specializing in a fermentation-forward menu. Under the direction of artisanal bakers, they serve magnificent sourdough pizzas baked crisp in their custom ovens, alongside silky house-made pastas and fresh seasonal salads. Guests can enjoy their food paired with a curated selection of natural and small-production wines in a chic, contemporary dining room.",
        "hours": {
            "Monday - Tuesday": "9:00 AM - 2:00 PM",
            "Wednesday - Thursday": "9:00 AM - 2:00 PM, 6:00 PM - 9:00 PM",
            "Friday": "9:00 AM - 2:00 PM, 6:00 PM - 9:30 PM",
            "Saturday": "10:00 AM - 2:00 PM, 6:00 PM - 9:30 PM",
            "Sunday": "9:30 AM - 3:00 PM"
        },
        "image": "images/lb-eatery-wine-french-toast-pembroke-pines.jpg",
        "imageAlt": "French toast topped with berry compote, powdered sugar, and vanilla sauce next to toasted bread at LB Eatery & Wine in Pembroke Pines, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 589-1944",
        "reserveUrl": {
            "website": "https://lbeatery.com/",
            "toast": "https://www.toasttab.com/",
            "google": "https://www.google.com/maps/reserve/v/dine/c/lb-eatery-wine-pembroke-pines"
        },
        "orderUrl": {
            "website": "https://lbeatery.com/",
            "toast": "https://www.toasttab.com/",
            "ubereats": "https://www.ubereats.com/",
            "postmates": "https://postmates.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=LB+Eatery+and+Wine+Pembroke+Pines+FL",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Pesto Fettuccine",
                "description": "Silky house-made fettuccine tossed in a rich zucchini and pistachio pesto, topped with freshly grated parmesan and toasted signature LB breadcrumbs."
            },
            {
                "name": "Bread & Butter Experience",
                "description": "A signature starter showcasing freshly baked, naturally leavened warm sourdough served with rich house-whipped butter."
            },
            {
                "name": "Challah French Toast",
                "description": "Indulgent thick-cut challah bread French toast topped with cinnamon sour cream, delicate cardamom cream, sweet blueberry coulis, and toasted walnuts."
            }
        ]
    },
    {
        "id": "coopers-hawk-pines",
        "name": "Cooper's Hawk Winery & Restaurant",
        "location": "Pembroke Pines",
        "address": "10310 Pines Blvd, Pembroke Pines, FL 33026",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Date Night",
            "Trendy",
            "American"
        ],
        "mustTry": "Drunken Shrimp",
        "description": "An upscale-casual American winery and restaurant at the Shops at Pembroke Gardens, offering modern dining, a full-service bar, and an interactive wine-tasting room.",
        "longDescription": "Located at the Shops at Pembroke Gardens, Cooper's Hawk Winery & Restaurant offers a sophisticated American menu designed to pair perfectly with their own proprietary wines. The expansive venue features a modern, upscale dining room, a busy full-service bar, and a welcoming wine-tasting room where guests can sample flights before their meal. It is a fantastic destination for romantic date nights, corporate lunches, or celebratory family dinners.",
        "hours": {
            "Monday - Thursday": "11:00 AM - 9:00 PM",
            "Friday": "11:00 AM - 10:00 PM",
            "Saturday": "10:00 AM - 10:00 PM",
            "Sunday": "10:00 AM - 9:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Photo coming soon for Cooper's Hawk Winery & Restaurant in Pembroke Pines, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 582-9463",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "google": "https://www.google.com/maps/reserve/v/dine/c/coopers-hawk-winery-restaurant-pembroke-pines"
        },
        "orderUrl": {
            "website": "https://chwinery.com/",
            "ubereats": "https://www.ubereats.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Coopers+Hawk+10310+Pines+Blvd+Pembroke+Pines+FL+33026",
        "otherLocations": [
            "Doral",
            "Dania Beach",
            "Coconut Creek",
            "Delray Beach",
            "Wellington",
            "Palm Beach Gardens",
            "Naples",
            "Fort Myers"
        ],
        "greatDishes": [
            {
                "name": "Drunken Shrimp",
                "description": "Bacon-wrapped jumbo shrimp fried crisp, served over fresh guacamole with a sweet tequila lime butter drizzle."
            },
            {
                "name": "Gnocchi With Roasted Butternut Squash",
                "description": "Pillow-soft potato gnocchi sautéed with sweet roasted butternut squash, brown butter, fresh sage, and topped with shaved parmesan."
            },
            {
                "name": "Thai Lettuce Wraps",
                "description": "Crisp butter lettuce leaves served with sweet-and-savory sesame chicken, shredded carrots, cucumber, and spicy peanut dipping sauces."
            }
        ]
    },
    {
        "id": "villagio-sunrise",
        "name": "Villagio",
        "location": "Sunrise",
        "address": "1760 Sawgrass Mills Cir, Sunrise, FL 33323",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Italian",
            "Pasta",
            "Pizza",
            "Seafood",
            "Comfort Food",
            "Family-friendly",
            "Happy Hour"
        ],
        "mustTry": "Spaghetti Meatballs",
        "description": "A bustling, upscale Italian restaurant at the Colonnade Outlets at Sawgrass Mills, serving traditional wood-fired pizzas, hearty pasta dishes, and fresh seafood under patio awnings.",
        "longDescription": "A bustling, upscale Italian restaurant at the Colonnade Outlets at Sawgrass Mills, serving traditional wood-fired pizzas, hearty pasta dishes, and fresh seafood under patio awnings. Known for its generous portions and authentic recipes, it is a favorite for shoppers looking for quality Italian cooking.",
        "hours": {
            "Monday - Saturday": "11:00 AM - 11:00 PM",
            "Sunday": "11:00 AM - 10:00 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Italian wood-fired pizza at Villagio in Sunrise, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": false,
        "phone": "(954) 846-2176",
        "reserveUrl": {
            "website": "https://villagiorestaurant.com/",
            "phone": "tel:+19548462176"
        },
        "orderUrl": {},
        "mapsUrl": "https://maps.google.com/?q=Villagio+1760+Sawgrass+Mills+Cir+Sunrise+FL+33323",
        "otherLocations": [
            "Mizner Park Boca",
            "Village of Merrick Park"
        ],
        "greatDishes": [
            {
                "name": "Spaghetti Meatballs",
                "description": "Classic spaghetti tossed in our rich homemade tomato sauce, topped with our traditional recipe Italian meatballs."
            },
            {
                "name": "Pollo Parmigiana",
                "description": "Lightly breaded chicken breast pan-fried and baked under rich marinara sauce and melted mozzarella cheese."
            },
            {
                "name": "Creme Brulee",
                "description": "Creamy, smooth vanilla custard baked and finished with a caramelized brown sugar crust, garnished with a fresh strawberry."
            }
        ]
    },
    {
        "id": "saffrano-crepes",
        "name": "Saffrano Crepes & Coffee",
        "location": "Plantation",
        "address": "1831 N Pine Island Rd, Plantation, FL 33322",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Casual",
            "Comfort Food",
            "Hidden Gem"
        ],
        "mustTry": "Moscow",
        "description": "A charming, European-style cafe in Plantation. Famous for their paper-thin, fresh-cooked sweet and savory crepes and artisan coffee in a warm, cozy setting.",
        "longDescription": "Tucked away in a quiet Plantation shopping plaza, Saffrano Crepes & Coffee is a charming European-style cafe that has become a neighborhood secret. Specializing in paper-thin, fresh-cooked sweet and savory crepes, the cafe offers a warm, cozy interior and casual outdoor tables. It is a fantastic spot for a quiet breakfast, weekend brunch with family, or a sweet afternoon pick-me-up paired with a custom latte.",
        "hours": {
            "Monday - Thursday": "8:30 AM - 9:00 PM",
            "Friday - Saturday": "8:30 AM - 10:00 PM",
            "Sunday": "8:30 AM - 9:00 PM"
        },
        "image": "images/saffrano-crepes-coffee-crepe-plantation.jpg",
        "imageAlt": "Savory crepe filled with steak, rich cream sauce, and fresh arugula at Saffrano Crepes & Coffee in Plantation, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(954) 533-5278",
        "reserveUrl": null,
        "orderUrl": {
            "website": "https://saffranocrepes.com/",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "postmates": "https://postmates.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Saffrano+Crepes+1831+N+Pine+Island+Rd+Plantation+FL+33322",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Moscow",
                "description": "A savory crepe filled with tender sliced strip loin and sautéed mushrooms cooked in a rich, creamy sauce."
            },
            {
                "name": "Monte Carlo",
                "description": "A classic sweet crepe served Suzette-style with melted butter, orange, a sweet wine sauce, and a scoop of vanilla ice cream."
            },
            {
                "name": "Farigliano",
                "description": "Your choice of a warm waffle or crepe loaded with Nutella, fresh strawberries, sliced bananas, roasted pistachios, and a scoop of homemade ice cream."
            }
        ]
    },
    {
        "id": "ke-uh-weston",
        "name": "Ke-uH",
        "location": "Weston",
        "address": "2278 Weston Rd, Weston, FL 33326",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Asian",
            "Date Night",
            "Trendy",
            "Waterfront"
        ],
        "mustTry": "Pork Gyozas",
        "description": "An elegant, contemporary Japanese restaurant at Weston Town Center. Serves sophisticated sushi, raw plates, and tapas in a sleek, high-design dining room.",
        "longDescription": "An elegant, contemporary Japanese restaurant at Weston Town Center. Serves sophisticated sushi rolls, raw plates, and tapas in a sleek, high-design dining room. Famous for their spicy honey shrimp, fresh yellowtail jalapeño, and high-quality sushi selection, it is a favorite for upscale date nights, special celebrations, and business lunches.",
        "hours": {
            "Monday - Thursday": "12:00 PM - 3:30 PM, 5:00 PM - 10:00 PM",
            "Friday": "12:00 PM - 10:30 PM",
            "Saturday": "12:30 PM - 10:30 PM",
            "Sunday": "12:30 PM - 9:30 PM"
        },
        "image": "images/photo-coming-soon.jpg",
        "imageAlt": "Photo coming soon for Ke-uH in Weston, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(954) 900-2278",
        "reserveUrl": {
            "website": "https://keuhrestaurant.com/locations/weston-florida/",
            "opentable": "https://www.opentable.com/"
        },
        "orderUrl": {
            "website": "https://keuhrestaurant.com/locations/weston-florida/",
            "ubereats": "https://www.ubereats.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Ke-uH+2278+Weston+Rd+Weston+FL+33326",
        "otherLocations": [
            "Boca Raton"
        ],
        "greatDishes": [
            {
                "name": "Pork Gyozas",
                "description": "Deliciously pan-seared dumplings stuffed with seasoned ground pork and cabbage, served with a savory soy dipping sauce."
            },
            {
                "name": "Grilled Octopus",
                "description": "Tender grilled octopus leg served over a bed of baby potatoes, seasoned with dynamic olive oil and sea salt."
            },
            {
                "name": "Nutella Spring Rolls",
                "description": "Decadent dessert featuring crispy-fried spring rolls filled with warm, rich Nutella hazelnut chocolate spread."
            }
        ]
    },
    {
        "id": "sushigami-sunrise",
        "name": "Sushigami",
        "location": "Sunrise",
        "address": "12801 W Sunrise Blvd, Sunrise, FL 33323",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Asian",
            "Casual",
            "Family-friendly"
        ],
        "mustTry": "Tuna Tacos",
        "description": "An exciting, interactive conveyor belt sushi dining experience at Sawgrass Mills Mall, where fresh sushi plates glide right by your table for instant enjoyment.",
        "longDescription": "An exciting, interactive conveyor belt sushi dining experience at Sawgrass Mills Mall, where fresh sushi plates glide right by your table for instant enjoyment. Diners can select their favorite rolls and hot appetizers directly from the rotating belt or order fresh custom creations directly from the sushi chefs.",
        "hours": {
            "Monday - Saturday": "10:00 AM - 9:00 PM",
            "Sunday": "10:00 AM - 8:00 PM"
        },
        "image": "images/sushigami-tuna-tacos-sunrise.jpg",
        "imageAlt": "Crispy mini tuna tacos with guacamole, scallions, and spicy mayo served on a lemon wedge at Sushigami in Sawgrass Mills Sunrise, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(954) 835-9070",
        "reserveUrl": {},
        "orderUrl": {
            "doordash": "https://www.doordash.com/",
            "ubereats": "https://www.ubereats.com/",
            "postmates": "https://www.postmates.com/",
            "grubhub": "https://www.grubhub.com/",
            "phone": "tel:+19548359070"
        },
        "mapsUrl": "https://maps.google.com/?q=Sushigami+Sawgrass+Mills+Sunrise+FL",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Tuna Tacos",
                "description": "Crispy mini taco shells filled with fresh diced tuna, creamy guacamole, scallions, and a drizzle of spicy mayo."
            },
            {
                "name": "Shrimp Tempura Maki",
                "description": "Crispy shrimp tempura, avocado, and masago rolled with sesame seeds and drizzled with spicy mayo."
            },
            {
                "name": "Spicy Tuna Sandwich Maki",
                "description": "A fun, unique sandwich-style sushi roll layered with spicy tuna, fresh avocado, and crispy tempura flakes."
            }
        ]
    },
    {
        "id": "little-hen-weston",
        "name": "Little Hen",
        "location": "Weston",
        "address": "4579 Weston Road, Weston, FL 33331",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Brunch",
            "Trendy"
        ],
        "mustTry": "Eggs Benedicts",
        "description": "An incredibly beautiful, flower-draped English-style breakfast and brunch boutique eatery. Serves creative egg dishes, fluffy pancakes, and luxury afternoon tea service.",
        "longDescription": "Tucked away in the Weston Commons strip mall, Little Hen is an incredibly beautiful, flower-draped English-style breakfast and brunch boutique eatery. Decorated in soft pastel blues, warm wood tables, and gorgeous floral installations, this chic spot features a cozy, premium dining room and a breezy outdoor patio. Known for their organic egg plates, signature rose-infused waffles, and luxury afternoon tea service, it is a favorite for trendy brunch get-togethers and weekend family breakfast.",
        "hours": {
            "Monday - Friday": "8:00 AM - 3:00 PM",
            "Saturday - Sunday": "8:00 AM - 4:00 PM"
        },
        "image": "images/little-hen-fried-eggs-weston.jpg",
        "imageAlt": "Gourmet tea service and rose-petal waffles at Little Hen in Weston, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": false,
        "phone": "(954) 626-0855",
        "reserveUrl": {
            "website": "https://thelittlehen.com/",
            "resy": "https://resy.com/"
        },
        "orderUrl": null,
        "mapsUrl": "https://maps.google.com/?q=Little+Hen+4579+Weston+Road+Weston+FL+33331",
        "inkindUrl": "https://inkind.com/partners/the-little-hen?utm_source=soflobites",
        "otherLocations": [
            "Fort Lauderdale",
            "Miami"
        ],
        "greatDishes": [
            {
                "name": "Eggs Benedicts",
                "description": "Perfectly poached organic eggs, honey-cured ham, and rich hollandaise sauce served over toasted English muffins."
            },
            {
                "name": "Little Hen Rancheros",
                "description": "Sunny-side-up organic eggs served over warm corn tortillas, refried black beans, avocado slices, and fresh salsa."
            },
            {
                "name": "French Toasts",
                "description": "Thick-cut brioche French toast soaked in vanilla custard, griddled golden-brown and topped with powdered sugar and fresh fruit."
            }
        ]
    },
    {
        "id": "il-pastaio-di-eataly",
        "name": "Il Pastaio di Eataly",
        "location": "Aventura",
        "address": "19501 Biscayne Blvd, Aventura, FL 33180",
        "priceRange": "$$$",
        "priceLevel": 3,
        "tags": [
            "Italian",
            "Pasta",
            "Casual",
            "Date Night",
            "Family-friendly"
        ],
        "mustTry": "Malloreddus Alla Campidanese",
        "description": "A premium house-made fresh pasta kitchen by Eataly inside Aventura Mall, offering guests a front-row seat to watch chefs handcraft and cook authentic Italian pasta recipes.",
        "longDescription": "A premium house-made fresh pasta kitchen by Eataly inside Aventura Mall, offering guests a front-row seat to watch chefs handcraft and cook authentic Italian pasta recipes. Guests can enjoy fine Italian wines alongside fresh tagliatelle, cacio e pepe, and other culinary classics prepared from scratch in a vibrant market-style setting.",
        "hours": {
            "Monday - Sunday": "12:00 PM - 9:00 PM"
        },
        "image": "images/il-pastaio-di-eataly-malloreddus-campidanese-aventura.jpg",
        "imageAlt": "Sardinian malloreddus pasta with Mutti tomato, sausage ragù, saffron, and pecorino romano cheese at Il Pastaio di Eataly in Aventura Mall, Florida",
        "offersReservations": true,
        "offersDeliveryTakeout": true,
        "phone": "(305) 760-8111",
        "reserveUrl": {
            "opentable": "https://www.opentable.com/",
            "phone": "tel:+13057608111"
        },
        "orderUrl": {
            "doordash": "https://www.doordash.com/",
            "ubereats": "https://www.ubereats.com/",
            "phone": "tel:+13057608111"
        },
        "mapsUrl": "https://maps.google.com/?q=Il+Pastaio+di+Eataly+Aventura+Mall+FL",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Malloreddus Alla Campidanese",
                "description": "Traditional Sardinian pasta tossed with Mutti tomatoes, savory sausage ragù, fragrant saffron, and finished with grated Granarolo Pecorino Romano DOP."
            },
            {
                "name": "Giro D'Italia",
                "description": "A pasta sampler flight featuring three of Italy's most loved regional pastas, taking your palate on a trip from North to South."
            },
            {
                "name": "Focaccia Bianca",
                "description": "Freshly baked classic Italian focaccia seasoned with aromatic rosemary and drizzled with premium Olitalia extra virgin olive oil."
            }
        ]
    },
    {
        "id": "el-gallo-pinto",
        "name": "El Gallo Taqueria",
        "location": "Weston",
        "address": "4533 Weston Rd, Weston, FL 33331",
        "priceRange": "$$",
        "priceLevel": 2,
        "tags": [
            "Mexican",
            "Family-friendly",
            "Hidden Gem"
        ],
        "mustTry": "Carne Asada Tacos",
        "description": "El Gallo Taqueria, is a hidden culinary gem that delivers highly rated, authentic Mexican street food in a vibrant setting. Tucked away in the Weston Commons strip mall, this boutique eatery packs massive flavor into a cozy, contemporary space. The restaurant sets an upbeat, welcoming mood by blending modern design with a nice soundtrack, making it an excellent stop for a casual date night, quick lunch, or family dinner.",
        "longDescription": "El Gallo Taqueria, is a hidden culinary gem that delivers highly rated, authentic Mexican street food in a vibrant setting. Tucked away in the Weston Commons strip mall, this boutique eatery packs massive flavor into a cozy, contemporary space. The restaurant sets an upbeat, welcoming mood by blending modern design with a nice soundtrack, making it an excellent stop for a casual date night, quick lunch, or family dinner.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 9:00 PM",
            "Friday - Saturday": "11:30 AM - 9:30 PM",
            "Sunday": "11:30 AM - 9:00 PM"
        },
        "image": "images/el-gallo-tacos-weston.jpg",
        "imageAlt": "Authentic Mexican tacos at El Gallo Taqueria in Weston, Florida",
        "offersReservations": false,
        "offersDeliveryTakeout": true,
        "phone": "(954) 440-4348",
        "reserveUrl": null,
        "orderUrl": {
            "website": "https://elgallotaqueria.com/",
            "ubereats": "https://www.ubereats.com/",
            "doordash": "https://www.doordash.com/",
            "postmates": "https://postmates.com/",
            "grubhub": "https://www.grubhub.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=El+Gallo+Taqueria+4533+Weston+Rd+Weston+FL+33331",
        "inkindUrl": "https://inkind.com/partners/el-gallo-taqueria?utm_source=soflobites",
        "otherLocations": [],
        "greatDishes": [
            {
                "name": "Carne Asada Tacos",
                "description": "Premium charcoal-grilled steak served on warm corn tortillas, topped with fresh chopped cilantro, onions, lime, and house salsa."
            },
            {
                "name": "Al Pastor Tacos",
                "description": "Tender, thinly sliced spit-roasted pork marinated in guajillo chilies and spices, served with fresh pineapple, cilantro, and onions."
            },
            {
                "name": "Chips & Pico",
                "description": "Crispy, fresh house-fried tortilla chips served with a side of freshly diced, zesty pico de gallo salsa."
            }
        ]
    }
];// 3. Application State
const STATE = {
    searchQuery: "",
    selectedLocations: [], // multi-select locations
    selectedPrice: "all",
    selectedTags: [], // multi-select tags
    inkindOnly: false, // inKind Rewards filter toggle
    savedScrollPosition: 0,
    shouldRestoreScroll: false
};
// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
    initFilters();
    renderRestaurants();
    injectSchemaMarkup();
    setupSuggestForm();
    setupModalEvents();
    
    // Hash routing listeners
    window.addEventListener("hashchange", handleRoute);
    handleRoute();
});
// 5. Handle and Render Dynamic Filters
function initFilters() {
    // Search input handler
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            STATE.searchQuery = e.target.value.toLowerCase().trim();
            renderRestaurants();
            updateActiveFilterBadges();
        });
    }
    // Location buttons (Multi-select support)
    const locationButtons = document.querySelectorAll("[data-location]");
    locationButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const loc = btn.getAttribute("data-location");
            
            if (loc === "all") {
                // Clear all selected specific locations
                STATE.selectedLocations = [];
                locationButtons.forEach(b => {
                    if (b.getAttribute("data-location") === "all") b.classList.add("active");
                    else b.classList.remove("active");
                });
            } else {
                // Specific location clicked
                const normalizedLoc = loc.toLowerCase();
                
                // Toggle location
                if (STATE.selectedLocations.includes(normalizedLoc)) {
                    STATE.selectedLocations = STATE.selectedLocations.filter(l => l !== normalizedLoc);
                    btn.classList.remove("active");
                } else {
                    STATE.selectedLocations.push(normalizedLoc);
                    btn.classList.add("active");
                }
                // If any specific location is selected, deactivate "All Locations"
                const allBtn = document.querySelector('[data-location="all"]');
                if (STATE.selectedLocations.length > 0) {
                    if (allBtn) allBtn.classList.remove("active");
                } else {
                    if (allBtn) allBtn.classList.add("active");
                }
            }
            
            renderRestaurants();
            updateActiveFilterBadges();
        });
    });
    // Tag buttons (Multi-select)
    const tagButtons = document.querySelectorAll("[data-tag]");
    tagButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tag = btn.getAttribute("data-tag");
            
            if (STATE.selectedTags.includes(tag)) {
                STATE.selectedTags = STATE.selectedTags.filter(t => t !== tag);
                btn.classList.remove("active");
            } else {
                STATE.selectedTags.push(tag);
                btn.classList.add("active");
            }
            renderRestaurants();
            updateActiveFilterBadges();
        });
    });
    // inKind Rewards selector
    const inkindButton = document.querySelector("[data-inkind]");
    if (inkindButton) {
        inkindButton.addEventListener("click", () => {
            STATE.inkindOnly = !STATE.inkindOnly;
            if (STATE.inkindOnly) {
                inkindButton.classList.add("active");
            } else {
                inkindButton.classList.remove("active");
            }
            renderRestaurants();
            updateActiveFilterBadges();
        });
    }
    // Price selectors
    const priceButtons = document.querySelectorAll("[data-price]");
    priceButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const price = btn.getAttribute("data-price");
            
            if (STATE.selectedPrice === price) {
                STATE.selectedPrice = "all";
                btn.classList.remove("active");
            } else {
                priceButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                STATE.selectedPrice = price;
            }
            renderRestaurants();
            updateActiveFilterBadges();
        });
    });
    // Reset button
    const resetBtn = document.getElementById("reset-filters");
    if (resetBtn) {
        resetBtn.addEventListener("click", resetAllFilters);
    }
}
function resetAllFilters() {
    STATE.searchQuery = "";
    STATE.selectedLocations = [];
    STATE.selectedPrice = "all";
    STATE.selectedTags = [];
    STATE.inkindOnly = false;
    // Reset inKind styling
    const inkindBtn = document.querySelector("[data-inkind]");
    if (inkindBtn) inkindBtn.classList.remove("active");
    // Reset inputs
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
    
    // Reset location styling (All Locations becomes active)
    const locationButtons = document.querySelectorAll("[data-location]");
    locationButtons.forEach(b => {
        if (b.getAttribute("data-location") === "all") {
            b.classList.add("active");
        } else {
            b.classList.remove("active");
        }
    });
    // Reset tag styling
    const tagButtons = document.querySelectorAll("[data-tag]");
    tagButtons.forEach(b => b.classList.remove("active"));
    // Reset price styling
    const priceButtons = document.querySelectorAll("[data-price]");
    priceButtons.forEach(b => b.classList.remove("active"));
    renderRestaurants();
    updateActiveFilterBadges();
}
// 6. Active Filter Badges Layout
function updateActiveFilterBadges() {
    const container = document.getElementById("active-filters-badges");
    if (!container) return;
    container.innerHTML = "";
    
    let activeCount = 0;
    // Search query badge
    if (STATE.searchQuery) {
        activeCount++;
        createBadge(container, `Search: "${STATE.searchQuery}"`, () => {
            STATE.searchQuery = "";
            const searchInput = document.getElementById("search-input");
            if (searchInput) searchInput.value = "";
            renderRestaurants();
            updateActiveFilterBadges();
        });
    }
    // Location badges (Multi-select loop)
    STATE.selectedLocations.forEach(loc => {
        activeCount++;
        // Find human readable title matching loc value case-insensitively
        const locBtn = Array.from(document.querySelectorAll("[data-location]"))
            .find(b => b.getAttribute("data-location").toLowerCase() === loc);
        const name = locBtn ? locBtn.querySelector(".filter-name").innerText : loc;
        
        createBadge(container, `Location: ${name}`, () => {
            STATE.selectedLocations = STATE.selectedLocations.filter(l => l !== loc);
            
            // Deactivate button
            if (locBtn) locBtn.classList.remove("active");
            
            // If no specific locations left, activate "All Locations"
            if (STATE.selectedLocations.length === 0) {
                const allBtn = document.querySelector('[data-location="all"]');
                if (allBtn) allBtn.classList.add("active");
            }
            
            renderRestaurants();
            updateActiveFilterBadges();
        });
    });
    // Price badge
    if (STATE.selectedPrice !== "all") {
        activeCount++;
        createBadge(container, `Price: ${STATE.selectedPrice}`, () => {
            STATE.selectedPrice = "all";
            const priceButtons = document.querySelectorAll("[data-price]");
            priceButtons.forEach(b => b.classList.remove("active"));
            renderRestaurants();
            updateActiveFilterBadges();
        });
    }
    // Tag badges
    STATE.selectedTags.forEach(tag => {
        activeCount++;
        // Find human readable
        const tagBtn = document.querySelector(`[data-tag="${tag}"]`);
        const name = tagBtn ? tagBtn.querySelector(".filter-name").innerText : tag;
        createBadge(container, name, () => {
            STATE.selectedTags = STATE.selectedTags.filter(t => t !== tag);
            const btn = document.querySelector(`[data-tag="${tag}"]`);
            if (btn) btn.classList.remove("active");
            renderRestaurants();
            updateActiveFilterBadges();
        });
    });
    // inKind badge
    if (STATE.inkindOnly) {
        activeCount++;
        createBadge(container, "Perk: inKind Rewards", () => {
            STATE.inkindOnly = false;
            const btn = document.querySelector("[data-inkind]");
            if (btn) btn.classList.remove("active");
            renderRestaurants();
            updateActiveFilterBadges();
        });
    }
    const label = document.getElementById("active-filters-label");
    if (activeCount > 0) {
        label.style.display = "block";
    } else {
        label.style.display = "none";
    }
}
function createBadge(parent, text, removeCallback) {
    const badge = document.createElement("div");
    badge.className = "active-badge";
    badge.innerHTML = `
        <span>${text}</span>
        <button class="active-badge-remove" aria-label="Remove filter">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
    `;
    badge.querySelector(".active-badge-remove").addEventListener("click", removeCallback);
    parent.appendChild(badge);
}
// Helper to normalize tags (resolves hyphen vs space differences, e.g., "date-night" vs "date night")
const normalizeTag = t => t.toLowerCase().replace(/[-\s]+/g, " ");
// 8. Main Render Function
function renderRestaurants() {
    const grid = document.getElementById("restaurant-grid");
    if (!grid) return;
    grid.innerHTML = "";
    // Apply filtering algorithms
    const filtered = RESTAURANT_DATA.filter(rest => {
        // Search text check
        const matchesSearch = !STATE.searchQuery || 
            rest.name.toLowerCase().includes(STATE.searchQuery) ||
            rest.description.toLowerCase().includes(STATE.searchQuery) ||
            rest.mustTry.toLowerCase().includes(STATE.searchQuery) ||
            rest.location.toLowerCase().includes(STATE.searchQuery);
        // Location check (Multi-select OR union)
        const matchesLoc = STATE.selectedLocations.length === 0 || 
            STATE.selectedLocations.includes(rest.location.toLowerCase());
        // Price range check
        const matchesPrice = STATE.selectedPrice === "all" || 
            rest.priceRange === STATE.selectedPrice;
        // Tags check (shows restaurant if it matches at least one of the selected tags)
        const matchesTags = STATE.selectedTags.length === 0 || 
            STATE.selectedTags.some(t => 
                rest.tags.some(rt => normalizeTag(rt) === normalizeTag(t))
            );
        // inKind check
        const matchesInkind = !STATE.inkindOnly || !!rest.inkindUrl;
        return matchesSearch && matchesLoc && matchesPrice && matchesTags && matchesInkind;
    });
    // Display count stats
    const statsNum = document.getElementById("stats-number");
    if (statsNum) {
        statsNum.innerText = filtered.length;
    }
    if (filtered.length === 0) {
        grid.style.display = "block"; // Full width for empty state
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3 class="empty-state-title">No Restaurants Match Your Filters</h3>
                <p class="empty-state-desc">Try clearing some tags or broadening your search criteria.</p>
            </div>
        `;
        return;
    }
    grid.style.display = "grid"; // Restore responsive grid layout
    filtered.forEach((rest, idx) => {
        // Inject Google AdSense placeholder at index 3 (4th item) if list is long enough
        // This simulates a native inline card ad placement matching the site design
        if (idx === 3) {
            const adCard = document.createElement("div");
            adCard.className = "adsense-card";
            adCard.innerHTML = `
                <div class="adsense-placeholder-inner">
                    <h4 class="adsense-title">Google AdSense Partner</h4>
                    <p class="adsense-desc">Ad unit slot configured for responsive display banners.</p>
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="${MONETIZATION_CONFIG.googleAdSensePublisherId}"
                         data-ad-slot="${MONETIZATION_CONFIG.googleAdSenseSlotId}"
                         data-ad-format="auto"
                         data-full-width-responsive="true"></ins>
                </div>
            `;
            grid.appendChild(adCard);
        }
        const card = document.createElement("article");
        card.className = "restaurant-card";
        card.setAttribute("id", `restaurant-${rest.id}`);
        
        // Build tags html
        const tagsHtml = rest.tags.map(t => `<span class="card-tag">${t}</span>`).join("");
        const inkindIndicatorHtml = rest.inkindUrl ? `
            <span class="feature-indicator active">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                inKind
            </span>
        ` : "";
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${rest.image}" alt="${rest.imageAlt || (rest.name + ' food recommendations')}" class="card-img" loading="lazy">
                <span class="card-location-badge">${rest.location}</span>
                <span class="card-price-badge" title="Price Category: ${rest.priceRange}">${rest.priceRange}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${rest.name}</h3>
                <div class="card-tags">${tagsHtml}</div>
                <p class="card-description">${rest.description}</p>
                
                <div class="must-try-box">
                    <div class="must-try-label">★ Recommended Dish</div>
                    <div class="must-try-dish">${rest.mustTry}</div>
                </div>
                <div class="card-features-box">
                    <span class="feature-indicator ${rest.offersReservations ? 'active' : 'inactive'}">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        ${rest.offersReservations ? 'Reservations Accepted' : 'Walk-ins Only'}
                    </span>
                    <span class="feature-indicator ${rest.offersDeliveryTakeout ? 'active' : 'inactive'}">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        ${rest.offersDeliveryTakeout ? 'Delivery & Takeout' : 'Dine-in Only'}
                    </span>
                    ${inkindIndicatorHtml}
                </div>
                <div class="card-actions-wrapper">
                    <button class="btn-secondary card-btn-details" onclick="openDetailsModal('${rest.id}')" style="width: 100%; margin-bottom: 0.5rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        Details & Info
                    </button>
                    <div class="card-actions">
                        ${(() => {
                            const hasOrder = !!rest.orderUrl;
                            const hasReserve = !!rest.reserveUrl;
                            if (hasOrder && hasReserve) {
                                return `
                                    <button class="btn-outline" onclick="openOptionSelector('${rest.id}', 'order')">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                        <span>Order</span>
                                    </button>
                                    <button class="btn-primary" onclick="openOptionSelector('${rest.id}', 'reserve')">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                        <span>Book</span>
                                    </button>
                                `;
                            } else if (hasOrder) {
                                return `
                                    <button class="btn-primary" onclick="openOptionSelector('${rest.id}', 'order')" style="grid-column: span 2;">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                        <span>Order Online</span>
                                    </button>
                                `;
                            } else if (hasReserve) {
                                return `
                                    <button class="btn-primary" onclick="openOptionSelector('${rest.id}', 'reserve')" style="grid-column: span 2;">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                        <span>Book a Table</span>
                                    </button>
                                `;
                            } else {
                                return `<div style="grid-column: span 2; height: 1px;"></div>`;
                            }
                        })()}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}
// 9. Local SEO - Auto-generate and Inject Schema.org JSON-LD structured metadata
function injectSchemaMarkup() {
    // Delete any existing dynamic scripts to prevent duplication
    const oldScript = document.getElementById("structured-data-jsonld");
    if (oldScript) oldScript.remove();
    // Map each database entry to a valid Schema.org Restaurant entry
    const itemListElement = RESTAURANT_DATA.map((rest, index) => {
        return {
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Restaurant",
                "@id": `https://soflobites.com/restaurants/${rest.id}`,
                "name": rest.name,
                "image": rest.image,
                "priceRange": rest.priceRange,
                "telephone": "", 
                "servesCuisine": rest.tags.filter(t => ["Italian", "Peruvian", "Japanese", "Asian", "Mediterranean", "Cuban", "Ecuadorian", "Hawaiian", "American", "Mexican"].includes(t)),
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": rest.address.split(',')[0].trim(),
                    "addressLocality": rest.location,
                    "addressRegion": "FL",
                    "postalCode": rest.address.match(/\b\d{5}\b/)?.[0] || "",
                    "addressCountry": "US"
                },
                "description": rest.description,
                "menu": `https://soflobites.com/restaurants/${rest.id}#menu`,
                "hasMenuItem": [
                    {
                        "@type": "MenuItem",
                        "name": rest.mustTry,
                        "description": "Top-recommended dish by South Florida food guide reviewers"
                    }
                ]
            }
        };
    });
    // Create container list graph schema
    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ItemList",
                "@id": "https://soflobites.com/#restaurantlist",
                "name": "Top Local Restaurants in South Florida",
                "description": "Curated list of premium, family-friendly, date-night and waterfront dining recommendations in Miramar, Pembroke Pines, Weston, Boca Raton, and Miami.",
                "numberOfItems": RESTAURANT_DATA.length,
                "itemListElement": itemListElement
            },
            {
                "@type": "WebSite",
                "@id": "https://soflobites.com/#website",
                "url": "https://soflobites.com/",
                "name": "SoFlo Bites",
                "description": "South Florida's local food directory sharing excellent dining recommendations that are accessible to everyone."
            }
        ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "structured-data-jsonld";
    script.text = JSON.stringify(schemaGraph);
    document.head.appendChild(script);
}
// 10. Detail Modals logic
function openDetailsModal(id) {
    window.location.hash = `#restaurant/${id}`;
}
function closeDetailsModal() {
    window.location.hash = "";
}
function setupModalEvents() {
    // Modal events not needed for full page view
}
// 11. Suggestion Form Simulation
function setupSuggestForm() {
    const form = document.getElementById("restaurant-suggest-form");
    if (!form) return;
    const typeSelect = document.getElementById("suggest-type");
    const restFields = document.getElementById("restaurant-fields-group");
    const labelDesc = document.getElementById("label-suggest-desc");
    const textDesc = document.getElementById("suggest-desc");
    // Dynamic field toggle based on feedback type
    if (typeSelect) {
        typeSelect.addEventListener("change", (e) => {
            const val = e.target.value;
            if (val === "website") {
                if (restFields) restFields.style.display = "none";
                document.getElementById("suggest-name").removeAttribute("required");
                document.getElementById("suggest-location").removeAttribute("required");
                document.getElementById("suggest-dishes").removeAttribute("required");
                if (labelDesc) labelDesc.innerText = "Website Feedback / Feature Suggestion *";
                textDesc.placeholder = "Let us know how we can make SoFlo Bites better (e.g., layout tweaks, feature ideas, bug reports)...";
                textDesc.setAttribute("required", "true");
            } else {
                if (restFields) restFields.style.display = "contents";
                document.getElementById("suggest-name").setAttribute("required", "true");
                document.getElementById("suggest-location").setAttribute("required", "true");
                document.getElementById("suggest-dishes").setAttribute("required", "true");
                if (labelDesc) labelDesc.innerText = "Your Comments / Suggestions";
                textDesc.placeholder = "Tell us about the restaurant vibes or what makes it special...";
                textDesc.removeAttribute("required");
            }
        });
    }
}
// 12. Routing & Detailed Page Renderer
function updateMeta(title, description) {
    document.title = title;
    
    // Update description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
        descMeta = document.createElement('meta');
        descMeta.setAttribute('name', 'description');
        document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', description);
    // Update OpenGraph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
}
// Curated Categories for "Best Of" Page
const BEST_OF_CATEGORIES = [
    {
        id: "best-date-night",
        name: "Best Date Night Restaurants",
        tag: "date-night",
        description: "Intimate dining rooms, mood-setting lighting, and stellar menus. These local spots are perfect for romantic evenings, anniversaries, or memorable double dates.",
        icon: "🍷",
        introParagraphs: [
            "A great date night is about more than just grabbing a bite; it’s about connection. In a busy world, finding a spot with the right lighting, comfortable booths, and a relaxed pace allows couples to escape the daily grind and focus on each other. South Florida has no shortage of dining options, but many date-night spots are either hyper-expensive or too loud for a real conversation. We believe romance shouldn't require a second mortgage or screaming over loud music.",
            "To choose these date-night favorites, we looked for places that offer a distinct, inviting atmosphere—whether it’s the quiet candlelit tables of Mister O1 or the scenic outdoor patio at Ethos Greek Bistro. We personally visited each spot, tasting their recommended sharing dishes, assessing the attentiveness of the service, and verifying that they offer reservations so your evening starts smoothly without long waits."
        ]
    },
    {
        id: "best-waterfront",
        name: "Best Waterfront Dining",
        tag: "waterfront",
        description: "Take in gorgeous ocean, canal, or intracoastal water views. These recommendations combine excellent dining with scenic South Florida outdoor breeze.",
        icon: "🌅",
        introParagraphs: [
            "South Florida's coastal beauty is one of our greatest treasures, and there is nothing quite like dining with a view of the water. Whether it's watching yachts cruise down a canal or catching a golden sunset over the bay, waterfront dining captures the true essence of the Florida lifestyle. However, many waterfront spots trade scenery for food quality, serving overpriced, mediocre dishes simply because of their location.",
            "Our waterfront selections were chosen because they deliver on both fronts: exceptional views and equally exceptional food. We visited docks, canals, and baysides across the region to find spots like the Rusty Pelican and Ethos Greek Bistro, where you can feel the ocean breeze while enjoying scratch-made recipes. We verified their outdoor seating configurations, checked that their pricing remains fair for the quality of food, and confirmed directions and parking accessibility."
        ]
    },
    {
        id: "best-family",
        name: "Best Family-Friendly Spots",
        tag: "family-friendly",
        description: "Welcoming environments with generous portions, relaxed atmospheres, and crowds-pleasing menus. These eateries are perfect for large family dinners or weekend lunches.",
        icon: "🍕",
        introParagraphs: [
            "Dining out with family should be a joyful experience, but finding a place that satisfies toddlers, teens, and grandparents alike can be a logistical challenge. The ideal family-friendly restaurant needs to be welcoming and forgiving of noise, while still serving high-quality, delicious meals. Too often, 'kid-friendly' spots mean compromising on food quality and sitting in uninspired, brightly lit chains.",
            "We chose these family-friendly standouts by focusing on local eateries that offer spacious seating, warm hospitality, and menus with broad appeal. From the massive portions at Pizza Lovers to the gourmet burger varieties at La Birra Bar, these spots make dining out with a group feel like a special treat. We personally verified their noise levels, space for strollers, quick service times, and delivery options for those nights when you'd rather eat at home."
        ]
    },
    {
        id: "best-hidden-gems",
        name: "Best Hidden Gems",
        tag: "hidden gem",
        description: "Unassuming strip-mall spots, cozy family-owned bistros, and places that focus entirely on scratch-made local flavors. These local secrets deserve to be on everyone's radar.",
        icon: "💎",
        introParagraphs: [
            "The true culinary heart of South Florida lies in its neighborhood strip malls, industrial parks, and quiet side streets. These hidden gems are often family-operated spots that don't have massive marketing budgets, relying instead on word-of-mouth and the sheer quality of their food. Discovering these places is one of the greatest pleasures of being a local food enthusiast.",
            "These selections were chosen for their authenticity, scratch-made recipes, and exceptional value. We discovered spots like Tacu Taku Peruvian Kitchen and Rosalia's Kitchen by exploring off-the-beaten-path neighborhoods and listening to recommendations from locals. Each gem was evaluated on the passion of its kitchen, the uniqueness of its flavors, and its dedication to providing a warm, friendly atmosphere that makes you feel like family."
        ]
    },
    {
        id: "best-brunch",
        name: "Best Brunch Spots",
        tag: "brunch",
        description: "Indulgent breakfast classics, bottomless mimosas, and relaxing mid-day vibes. These local spots serve up the ultimate weekend brunch experiences.",
        icon: "🥞",
        introParagraphs: [
            "Brunch is more than just a meal; it's a weekend ritual. It's the perfect opportunity to slow down, catch up with friends, and indulge in sweet pancakes, savory eggs benedict, or classic brunch cocktails. South Florida's dining scene features a wide array of brunch options, from charming garden cafes to chef-driven bistros.",
            "We chose these brunch favorites because they deliver incredible morning classics, fresh ingredients, and a relaxed, welcoming atmosphere. From the elegant French-style garden seating of Little Hen to the gourmet skillet pancakes at Chug's Diner, these local spots are perfect for wrapping up your week or starting your weekend right."
        ]
    }
];
function filterByTagAndGoHome(tag) {
    // 1. Reset all filters
    resetAllFilters();
    // 2. Set the selected tag
    STATE.selectedTags = [tag];
    // 3. Highlight the tag button in the sidebar
    const tagButtons = document.querySelectorAll("[data-tag]");
    tagButtons.forEach(btn => {
        if (btn.getAttribute("data-tag") === tag) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    // 4. Update the active filters display
    renderRestaurants();
    updateActiveFilterBadges();
    // 5. Navigate to the explore grid section
    window.location.hash = "#restaurant-grid";
}
window.filterByTagAndGoHome = filterByTagAndGoHome;
function renderBestOfView() {
    const container = document.getElementById("best-of-categories-list");
    if (!container) return;
    container.innerHTML = BEST_OF_CATEGORIES.map(cat => {
        return `
            <div class="best-of-category-card" onclick="window.location.hash = '#best-of/${cat.id}'" style="cursor: pointer;">
                <div class="best-of-card-header">
                    <div class="best-of-header-left">
                        <span class="best-of-cat-icon">${cat.icon}</span>
                        <div>
                            <h2 class="best-of-cat-name">${cat.name}</h2>
                            <p class="best-of-cat-desc">${cat.description}</p>
                        </div>
                    </div>
                    <div class="best-of-link-indicator">
                        <span>View List</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}
function renderBestOfListDetailView(catId) {
    const view = document.getElementById("best-of-list-detail-view");
    if (!view) return;
    const cat = BEST_OF_CATEGORIES.find(c => c.id === catId);
    if (!cat) {
        view.innerHTML = `<div class="error-state">List not found</div>`;
        return;
    }
    // Find matching restaurants from RESTAURANT_DATA
    const matching = RESTAURANT_DATA.filter(rest => 
        rest.tags.some(rt => normalizeTag(rt) === normalizeTag(cat.tag))
    );
    // Format restaurant items list using the detailed longDescription
    const restListHtml = matching.map(rest => `
        <div class="best-of-restaurant-item">
            <img src="${rest.image}" alt="${rest.imageAlt || rest.name}" class="best-of-item-img" loading="lazy">
            <div class="best-of-item-info">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.5rem;">
                    <h4 class="best-of-item-name">${rest.name}</h4>
                    <span class="best-of-item-location">${rest.location}</span>
                </div>
                <p class="best-of-item-desc">${rest.longDescription}</p>
                <div class="best-of-item-dish">
                    <strong>★ Must-Try:</strong> ${rest.mustTry}
                </div>
                <div class="best-of-item-actions">
                    <a href="#restaurant/${rest.id}" class="best-of-view-details-btn">
                        View Full Details Page
                    </a>
                </div>
            </div>
        </div>
    `).join("");
    view.innerHTML = `
        <div class="best-of-wrapper">
            <!-- Back Navigation to Lists Directory -->
            <div class="best-of-back-nav">
                <a href="#best-of" class="back-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Best Of Lists
                </a>
            </div>
            <!-- Header -->
            <div class="best-of-header">
                <span class="best-of-tagline">Curated Selection</span>
                <h1 class="best-of-title">${cat.name}</h1>
                <div class="best-of-header-intro">
                    <p class="best-of-intro-p">${cat.introParagraphs[0]}</p>
                    <p class="best-of-intro-p">${cat.introParagraphs[1]}</p>
                </div>
            </div>
            <!-- Restaurants Grid -->
            <div class="best-of-restaurants-list">
                ${restListHtml}
            </div>
            <!-- Explore More CTA -->
            <div class="best-of-explore-more" style="margin-top: 3rem;">
                <button class="btn-primary" onclick="filterByTagAndGoHome('${cat.tag}')" style="padding: 0.85rem 1.75rem;">
                    View & Filter All in Explore Directory
                </button>
            </div>
        </div>
    `;
}
function handleRoute() {
    const hash = window.location.hash;
    const homeView = document.getElementById("home-view");
    const detailView = document.getElementById("restaurant-detail-view");
    const aboutView = document.getElementById("about-view");
    const privacyTermsView = document.getElementById("privacy-terms-view");
    const bestOfView = document.getElementById("best-of-view");
    const bestOfListDetailView = document.getElementById("best-of-list-detail-view");
    const bottomAdBanner = document.getElementById("bottom-ad-banner");
    
    // Save scroll position if we are currently on the home view and moving away from it
    if (homeView && homeView.style.display !== "none" && hash !== "" && hash !== "#" && hash !== "#restaurant-grid" && hash !== "#suggest-section") {
        STATE.savedScrollPosition = window.scrollY;
    }
    
    // Reset active nav link highlighting
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => link.classList.remove("active"));
    // Helper to highlight a navigation link by href substring
    const highlightNav = (hrefVal) => {
        const matching = Array.from(navLinks).find(link => {
            const a = link.querySelector("a");
            return a && a.getAttribute("href") === hrefVal;
        });
        if (matching) matching.classList.add("active");
    };
    if (hash === "#about") {
        if (homeView) homeView.style.display = "none";
        if (detailView) detailView.style.display = "none";
        if (privacyTermsView) privacyTermsView.style.display = "none";
        if (bestOfView) bestOfView.style.display = "none";
        if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
        if (aboutView) {
            aboutView.style.display = "block";
            window.scrollTo(0, 0);
        }
        highlightNav("#about");
        if (bottomAdBanner) bottomAdBanner.style.display = "none";
        updateMeta(
            "About Us | SoFlo Bites", 
            "Learn about SoFlo Bites, our mission to make local culinary discoveries accessible, our review process, and our South Florida coverage area."
        );
        return;
    }
    // For all other routes, make sure the bottom ad banner is visible
    if (bottomAdBanner) bottomAdBanner.style.display = "block";
    if (hash === "#privacy-terms") {
        if (homeView) homeView.style.display = "none";
        if (detailView) detailView.style.display = "none";
        if (aboutView) {
            aboutView.style.display = "none";
            if (bestOfView) bestOfView.style.display = "none";
            if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
        }
        if (privacyTermsView) {
            privacyTermsView.style.display = "block";
            window.scrollTo(0, 0);
        }
        updateMeta(
            "Privacy Policy & Terms | SoFlo Bites", 
            "Read the Privacy Policy and Terms of Service for SoFlo Bites restaurant directory."
        );
        return;
    }
    if (hash === "#best-of") {
        if (homeView) homeView.style.display = "none";
        if (detailView) detailView.style.display = "none";
        if (aboutView) aboutView.style.display = "none";
        if (privacyTermsView) privacyTermsView.style.display = "none";
        if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
        if (bestOfView) {
            renderBestOfView();
            bestOfView.style.display = "block";
            window.scrollTo(0, 0);
        }
        highlightNav("#best-of");
        updateMeta(
            "Best Local Lists & Selections | SoFlo Bites", 
            "Browse our curated Best Of lists for South Florida restaurants. Discover the best date night spots, waterfront dining, family-friendly eateries, and local secrets."
        );
        return;
    }
    if (hash.startsWith("#best-of/")) {
        const catId = hash.replace("#best-of/", "");
        const cat = BEST_OF_CATEGORIES.find(c => c.id === catId);
        
        if (cat) {
            if (homeView) homeView.style.display = "none";
            if (detailView) detailView.style.display = "none";
            if (aboutView) aboutView.style.display = "none";
            if (privacyTermsView) privacyTermsView.style.display = "none";
            if (bestOfView) bestOfView.style.display = "none";
            if (bestOfListDetailView) {
                renderBestOfListDetailView(catId);
                bestOfListDetailView.style.display = "block";
                window.scrollTo(0, 0);
            }
            highlightNav("#best-of");
            updateMeta(
                `${cat.name} | SoFlo Bites`, 
                `${cat.description} Explore our hand-picked restaurant recommendations for this category.`
            );
            return;
        }
    }
    if (hash.startsWith("#restaurant/")) {
        const id = hash.replace("#restaurant/", "");
        const rest = RESTAURANT_DATA.find(r => r.id === id);
        
        if (rest) {
            if (homeView) homeView.style.display = "none";
            if (aboutView) aboutView.style.display = "none";
            if (privacyTermsView) privacyTermsView.style.display = "none";
            if (bestOfView) bestOfView.style.display = "none";
            if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
            if (detailView) {
                detailView.innerHTML = renderDetailedPageMarkup(rest);
                detailView.style.display = "block";
                window.scrollTo(0, 0);
            }
            highlightNav("#restaurant-grid");
            updateMeta(
                `${rest.name} — ${rest.location} | SoFlo Bites`,
                `Explore must-try dishes, phone numbers, hours, and directions for ${rest.name} in ${rest.location}. ${rest.description}`
            );
            return;
        }
    }
    
    // Default route: show homepage listing
    if (detailView) detailView.style.display = "none";
    if (aboutView) aboutView.style.display = "none";
    if (privacyTermsView) privacyTermsView.style.display = "none";
    if (bestOfView) bestOfView.style.display = "none";
    if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
    if (homeView) homeView.style.display = "block";
    
    // Highlight home vs explore directory vs suggest form
    if (hash === "" || hash === "#") {
        highlightNav("#");
    } else if (hash === "#restaurant-grid") {
        highlightNav("#restaurant-grid");
    } else if (hash === "#suggest-section") {
        highlightNav("#suggest-section");
    }
    
    updateMeta(
        "SoFlo Bites | Best Local Restaurants in South Florida", 
        "Explore the best local restaurants in South Florida. Browse curated picks by cuisine, vibe, and location, and discover must-try dishes, hidden gems, and neighborhood favorites."
    );
    // Restore scroll position or scroll to appropriate section
    if (STATE.shouldRestoreScroll) {
        window.scrollTo(0, STATE.savedScrollPosition);
        STATE.shouldRestoreScroll = false;
    } else {
        if (hash === "#restaurant-grid") {
            const gridEl = document.getElementById("restaurant-grid");
            if (gridEl) {
                gridEl.scrollIntoView({ behavior: "smooth" });
            }
        } else if (hash === "#suggest-section") {
            const suggestEl = document.getElementById("suggest-section");
            if (suggestEl) {
                suggestEl.scrollIntoView({ behavior: "smooth" });
            }
        } else if (hash === "" || hash === "#") {
            window.scrollTo(0, 0);
        }
    }
}
function renderDetailedPageMarkup(rest) {
    // Format dishes HTML
    const dishesHtml = rest.greatDishes.map((dish, i) => `
        <div class="detail-dish-card">
            <div class="detail-dish-number">0${i + 1}</div>
            <div class="detail-dish-content">
                <h3 class="detail-dish-name">${dish.name}</h3>
                <p class="detail-dish-desc">${dish.description}</p>
            </div>
        </div>
    `).join("");
    // Format hours table
    const hoursHtml = Object.entries(rest.hours).map(([day, time]) => `
        <div class="detail-hours-day">${day}</div>
        <div class="detail-hours-time">${time}</div>
    `).join("");
    // Setup action buttons
    const reservationBtnHtml = rest.reserveUrl ? `
        <button onclick="openOptionSelector('${rest.id}', 'reserve')" class="detail-action-btn reservation-btn active-btn" style="border: none; cursor: pointer; width: 100%; text-align: center; display: inline-flex; justify-content: center; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Book a Table (Reserve)
        </button>
    ` : `
        <div class="detail-action-btn reservation-btn disabled" title="Walk-ins only">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Reservations: Walk-ins Only
        </div>
    `;
    const deliveryBtnHtml = rest.orderUrl ? `
        <button onclick="openOptionSelector('${rest.id}', 'order')" class="detail-action-btn delivery-btn active-btn" style="border: none; cursor: pointer; width: 100%; text-align: center; display: inline-flex; justify-content: center; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            Order Delivery / Takeout
        </button>
    ` : `
        <div class="detail-action-btn delivery-btn disabled" title="Dine-in only">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            Delivery: Dine-in Only
        </div>
    `;
    const inkindBtnHtml = rest.inkindUrl ? `
        <a href="${rest.inkindUrl}" target="_blank" rel="noopener noreferrer" class="detail-action-btn active-btn inkind-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            Pay with inKind (Earn Rewards)
        </a>
    ` : "";
    const detailInkindIndicatorHtml = rest.inkindUrl ? `
        <span class="feature-indicator active">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            inKind Accepted
        </span>
    ` : "";
    // Filter tags to only those that exist in the sidebar and match display names
    const SIDEBAR_TAGS = [
        "american", "asian", "british", "brunch", "buffet", "burgers", "casual", "comfort food", 
        "cuban", "date-night", "ecuadorian", "family-friendly", "happy hour", "hawaiian", 
        "healthy eats", "hidden gem", "italian", "mediterranean", "mexican", "pasta", 
        "peruvian", "pizza", "seafood", "sports bar", "trendy", "waterfront"
    ];
    const TAG_DISPLAY_NAMES = {
        "american": "American",
        "asian": "Asian",
        "british": "British",
        "brunch": "Brunch",
        "buffet": "Buffet Dining",
        "burgers": "Burgers",
        "casual": "Casual Dining",
        "comfort food": "Comfort Food",
        "cuban": "Cuban",
        "date-night": "Date Night",
        "ecuadorian": "Ecuadorian",
        "family-friendly": "Family-Friendly",
        "happy hour": "Happy Hour",
        "hawaiian": "Hawaiian",
        "healthy eats": "Healthy Eats",
        "hidden gem": "Hidden Gems",
        "italian": "Italian",
        "mediterranean": "Mediterranean",
        "mexican": "Mexican",
        "pasta": "Pasta",
        "peruvian": "Peruvian",
        "pizza": "Pizza",
        "seafood": "Seafood",
        "sports bar": "Sports Bar",
        "trendy": "Trendy Spots",
        "waterfront": "Waterfront Dining"
    };
    const matchingTags = rest.tags.filter(t => SIDEBAR_TAGS.includes(normalizeTag(t)));
    const relatedButtonsHtml = matchingTags.map(t => {
        const norm = normalizeTag(t);
        const displayName = TAG_DISPLAY_NAMES[norm] || t;
        return `
            <button class="detail-related-btn" onclick="filterByTagAndGoHome('${norm}')">
                See more ${displayName} spots
            </button>
        `;
    }).join("");
    return `
        <div class="detail-page-wrapper">
            <!-- Back Navigation -->
            <div class="detail-back-nav">
                <a href="#" class="back-link" onclick="goBackToDirectory(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Explore Directory
                </a>
            </div>
            <!-- Header Section -->
            <div class="detail-header-block">
                <div class="detail-image-box">
                    <img src="${rest.image}" alt="${rest.imageAlt || (rest.name + ' food recommendations')}" class="detail-main-img">
                    <span class="detail-location-badge">${rest.location}</span>
                    <span class="detail-price-badge" title="Price Range: ${rest.priceRange}">${rest.priceRange}</span>
                </div>
                <div class="detail-title-info">
                    <h1 class="detail-title">${rest.name}</h1>
                    <div class="detail-tags-list">
                        ${rest.tags.map(t => `<span class="detail-tag">${t}</span>`).join("")}
                    </div>
                    
                    <p class="detail-long-desc">${rest.longDescription}</p>
                    
                    <!-- Dining Features Indicators -->
                    <div class="detail-features-row">
                        <span class="feature-indicator ${rest.offersReservations ? 'active' : 'inactive'}">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            ${rest.offersReservations ? 'Reservations Accepted' : 'Walk-ins Only'}
                        </span>
                        <span class="feature-indicator ${rest.offersDeliveryTakeout ? 'active' : 'inactive'}">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            ${rest.offersDeliveryTakeout ? 'Delivery & Takeout' : 'Dine-in Only'}
                        </span>
                        ${detailInkindIndicatorHtml}
                    </div>
                </div>
            </div>
            <!-- Grid: Menu recommendations & Contact/Hours -->
            <div class="detail-grid">
                <!-- Left: Great Dishes Recommendation -->
                <div class="detail-left-column">
                    <h2 class="detail-section-title">Must-Try Food Recommendations</h2>
                    <div class="detail-dishes-list" style="display: flex; flex-direction: column; gap: 1rem;">
                        ${dishesHtml}
                    </div>
                </div>
                <!-- Right: Location, Contact & Hours -->
                <div class="detail-right-column">
                    <!-- Contact Box -->
                    <div class="detail-contact-box">
                        <h3 class="detail-box-title">Location & Contact</h3>
                        <div class="detail-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>${rest.address}</span>
                        </div>
                        <div class="detail-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span>Phone (${rest.location}): <a href="tel:${rest.phone.replace(/[-\s()]+/g, '')}" class="detail-phone-link">${rest.phone}</a></span>
                        </div>
                        
                        <div class="detail-map-btn-wrapper">
                            <a href="${rest.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary detail-map-btn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6v14l7-4 7 4 7-4V2l-7 4-7-4L1 6z"></path><line x1="8" y1="2" x2="8" y2="18"></line><line x1="15" y1="6" x2="15" y2="22"></line></svg>
                                Get Directions (Google Maps)
                            </a>
                        </div>
                    </div>
                    <!-- Other Locations -->
                    ${rest.otherLocations && rest.otherLocations.length > 0 ? `
                    <div class="detail-contact-box" style="margin-top: 1rem;">
                        <h3 class="detail-box-title">Other Locations</h3>
                        <div class="detail-other-locations-list" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
                            ${rest.otherLocations.map(loc => `<span class="detail-tag" style="margin: 0; background: rgba(var(--primary-rgb), 0.08); color: var(--primary-color); border: 1px solid rgba(var(--primary-rgb), 0.15);">${loc}</span>`).join("")}
                        </div>
                    </div>
                    ` : ""}
                    <!-- Hours Box -->
                    <div class="detail-hours-box">
                        <h3 class="detail-box-title">Opening Hours</h3>
                        <div class="detail-hours-grid">
                            ${hoursHtml}
                        </div>
                    </div>
                    <!-- Action Buttons (Order / Book) -->
                    <div class="detail-actions-box">
                        <h3 class="detail-box-title">Dining & Ordering Actions</h3>
                        <div class="detail-action-buttons">
                            ${reservationBtnHtml}
                            ${deliveryBtnHtml}
                            ${inkindBtnHtml}
                        </div>
                    </div>
                </div>
            </div>
            <!-- Related Cuisines & Vibes Exploration -->
            <div class="detail-related-section">
                <h3 class="detail-related-title">Explore Similar Dining</h3>
                <div class="detail-related-buttons">
                    ${relatedButtonsHtml}
                </div>
            </div>
        </div>
    `;
}
// 12. Dynamic Option Selection Modal (for multiple reservation / ordering channels)
function openOptionSelector(id, action) {
    const rest = RESTAURANT_DATA.find(r => r.id === id);
    if (!rest) return;
    let options = {};
    let title = "";
    if (action === "order") {
        options = typeof rest.orderUrl === "string" ? { "Order Online": rest.orderUrl } : (rest.orderUrl || {});
        title = `Order Takeout & Delivery from ${rest.name}`;
    } else if (action === "reserve") {
        options = typeof rest.reserveUrl === "string" ? { "Book a Table": rest.reserveUrl } : (rest.reserveUrl || {});
        title = `Reserve a Table at ${rest.name}`;
    }
    const optionKeys = Object.keys(options);
    if (optionKeys.length === 0) return;
    // If there is only one option, and it's not a phone call, open it directly
    if (optionKeys.length === 1 && !optionKeys[0].toLowerCase().includes("phone") && !options[optionKeys[0]].startsWith("tel:")) {
        window.open(options[optionKeys[0]], "_blank", "noopener,noreferrer");
        return;
    }
    // Create the overlay elements
    const overlay = document.createElement("div");
    overlay.className = "options-modal-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    let buttonsHtml = "";
    for (const [key, value] of Object.entries(options)) {
        let labelText = key;
        let iconHtml = "🔗";
        let isPhone = false;
        const normalizedKey = key.toLowerCase();
        if (normalizedKey.includes("ubereats") || normalizedKey.includes("uber eats")) {
            labelText = "Order on Uber Eats";
            iconHtml = "🚗";
        } else if (normalizedKey.includes("doordash")) {
            labelText = "Order on DoorDash";
            iconHtml = "🛵";
        } else if (normalizedKey.includes("toast")) {
            labelText = "Order on ToastTab";
            iconHtml = "🍞";
        } else if (normalizedKey.includes("phone") || value.startsWith("tel:")) {
            labelText = action === "order" ? "Call to Order Pickup" : "Call to Reserve";
            iconHtml = "📞";
            isPhone = true;
        } else if (normalizedKey.includes("resy")) {
            labelText = "Book on Resy";
            iconHtml = "🎟️";
        } else if (normalizedKey.includes("opentable")) {
            labelText = "Book on OpenTable";
            iconHtml = "📅";
        }
        buttonsHtml += `
            <a href="${value}" ${isPhone ? "" : 'target="_blank"'} rel="noopener noreferrer" class="option-btn-link" onclick="closeOptionsModal()">
                <span class="option-btn-icon">${iconHtml}</span>
                <span class="option-btn-label">${labelText}</span>
            </a>
        `;
    }
    overlay.innerHTML = `
        <div class="options-modal-card">
            <button class="options-modal-close" onclick="closeOptionsModal()" aria-label="Close options dialog">✖</button>
            <h3 class="options-modal-title">${title}</h3>
            <p class="options-modal-subtitle">Select your preferred service:</p>
            <div class="options-modal-buttons">
                ${buttonsHtml}
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    // Trigger CSS transitions
    setTimeout(() => {
        overlay.classList.add("active");
    }, 10);
}
function closeOptionsModal() {
    const overlay = document.querySelector(".options-modal-overlay");
    if (overlay) {
        overlay.classList.remove("active");
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}
// Bind to window for HTML onclick attributes
window.openOptionSelector = openOptionSelector;
window.closeOptionsModal = closeOptionsModal;
function goBackToDirectory(event) {
    if (event) event.preventDefault();
    STATE.shouldRestoreScroll = true;
    window.location.hash = "#restaurant-grid";
}
window.goBackToDirectory = goBackToDirectory;

