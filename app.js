// Configure manual scroll restoration for SPA history management
if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
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
        "longDescription": "La Birra Bar brings a gourmet twist to the classic burger experience, blending Argentinian culinary craftsmanship with a sleek, modern atmosphere that feels right at home in Weston. Originating in Buenos Aires, the restaurant has earned international recognition for its award‑winning burgers, each crafted with house‑made cloud buns and proprietary beef blends designed to melt in your mouth. The attention to detail is evident in every bite, from the texture of the bun to the balance of flavors in each specialty creation.\n\nWhat sets La Birra Bar apart in South Florida’s dining scene is its ability to elevate comfort food into something truly memorable. The chic lounge‑inspired interior creates a refined yet approachable vibe, making it a great choice for date nights, casual celebrations, or simply treating yourself to a high‑quality meal. Guests can expect a menu that feels both familiar and innovative, with options ranging from classic favorites to bold, chef‑driven combinations.\n\nLa Birra Bar is ideal for diners who appreciate premium ingredients, modern presentation, and a restaurant that transforms everyday dining into a gourmet experience. It’s a must‑visit for burger lovers seeking something beyond the ordinary.",
        "hours": {
            "Monday - Thursday": "11:00 AM - 11:00 PM",
            "Friday": "11:00 AM - 12:00 AM",
            "Saturday": "12:00 PM - 12:00 AM",
            "Sunday": "11:00 AM - 11:00 PM"
        },
        "image": "images/la-birra-bar-golden-burger-sweet-potato-fries-weston.jpg",
        "imageAlt": "Award-winning gourmet burger with crispy bacon and melted cheese served alongside sweet potato fries at La Birra Bar in Weston, Florida",
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
        ],
        "images": [
            {
                "path": "images/la-birra-bar-golden-burger-sweet-potato-fries-weston.jpg",
                "alt": "Award-winning gourmet burger with crispy bacon and melted cheese served alongside sweet potato fries at La Birra Bar in Weston, Florida"
            },
            {
                "path": "images/la-birra-bar-dining-interior-weston.jpg",
                "alt": "Modern, upscale industrial dining room interior of La Birra Bar in Weston, Florida"
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
        "longDescription": "Embarcadero 41 brings the vibrant flavors of Peru to Pembroke Pines with an upscale dining experience centered around fresh seafood, bold spices, and beautifully plated traditional dishes. Known for its highly rated ceviches, tender anticucho skewers, and classic lomo saltado, the restaurant blends authenticity with modern presentation in a sleek, contemporary dining room. Each dish highlights the bright, citrus‑forward flavors and meticulous techniques that define Peruvian cuisine.\n\nThe atmosphere at Embarcadero 41 is polished yet welcoming, making it a great choice for both casual dinners and special occasions. Guests can expect attentive service, a well‑curated menu, and a dining experience that feels thoughtfully crafted from start to finish. Whether you’re a longtime fan of Peruvian food or exploring the cuisine for the first time, the restaurant offers a balanced mix of familiar favorites and exciting new flavors.\n\nEmbarcadero 41 is perfect for diners who appreciate fresh seafood, bold seasonings, and a refined take on traditional dishes. It’s a standout option in South Florida for anyone seeking high‑quality Peruvian cuisine in a stylish setting.",
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
        ],
        "images": [
            {
                "path": "images/embarcadero-41-peruvian-cuisine-pembroke-pines.jpg",
                "alt": "Fresh Peruvian ceviche at Embarcadero 41 in Pembroke Pines, Florida"
            },
            {
                "path": "images/embarcadero-41-exterior-pembroke-pines.jpg",
                "alt": "Modern exterior building of Embarcadero 41 in Pembroke Pines, Florida"
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
        "longDescription": "Bistro 821 is a beloved staple on Naples’ iconic 5th Avenue South, offering an upscale yet approachable dining experience that blends Mediterranean influences with coastal Florida flavors. Known for its fresh seafood, premium steaks, and beautifully crafted pastas, the restaurant has earned a loyal following for its consistent quality and vibrant atmosphere. The art‑filled dining room provides an elegant backdrop for a night out, while the outdoor patio offers prime people‑watching along one of Naples’ most popular streets.\n\nWhat makes Bistro 821 stand out is its ability to balance sophistication with warmth. The menu features a thoughtful mix of classic dishes and creative chef‑driven options, all prepared with fresh ingredients and attention to detail. Whether you’re enjoying a leisurely dinner, celebrating a special occasion, or simply exploring Naples’ dining scene, the restaurant delivers a polished experience without feeling overly formal.\n\nBistro 821 is ideal for guests who appreciate refined flavors, a lively setting, and a restaurant that captures the charm of 5th Avenue South. It’s a must‑visit for anyone seeking a memorable meal in the heart of Naples.",
        "hours": {
            "Monday": "Closed",
            "Tuesday - Thursday": "5:00 PM - 9:30 PM",
            "Friday - Saturday": "5:00 PM - 10:00 PM",
            "Sunday": "5:00 PM - 9:30 PM"
        },
        "image": "images/bistro-821-chilean-sea-bass-naples.jpg",
        "imageAlt": "Pan-seared Chilean Sea Bass served over fresh green asparagus and mashed potatoes at Bistro 821 in Naples, Florida",
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
        "longDescription": "Ra Sushi Bar brings a high‑energy, modern dining experience to the Shops at Pembroke Gardens, blending inventive sushi creations with a vibrant, lounge‑style atmosphere. Known for its specialty rolls, fresh sashimi platters, and popular late‑night happy hours, the restaurant has become a favorite among local foodies, groups, and anyone looking for a fun night out. The colorful interior, upbeat music, and sleek design create a lively environment that feels more like a social destination than a traditional sushi spot.\n\nThe menu at Ra Sushi Bar offers a wide range of options, from classic rolls to bold, fusion‑inspired combinations that showcase creativity and fresh ingredients. Guests can enjoy dining indoors in the stylish, club‑like space or relax on the bustling outdoor patio with drinks and shared plates. The restaurant’s energetic vibe makes it a great choice for celebrations, casual meetups, or evenings when you want a meal that feels exciting and social.\n\nRa Sushi Bar is perfect for diners who enjoy modern Japanese cuisine, inventive flavors, and a lively atmosphere. It’s a standout option in Pembroke Pines for sushi lovers seeking a fun, contemporary dining experience.",
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
        "longDescription": "Caffe Milano brings modern Italian dining to the heart of Naples’ 5th Avenue South, offering a vibrant blend of rustic flavors, fresh ingredients, and contemporary presentation. Known for its handmade pastas, wood‑fired pizzas, and classic seafood dishes, the restaurant delivers a refined yet approachable take on Italian cuisine. The open‑air, stylish dining space creates a lively atmosphere that feels both sophisticated and relaxed, making it a popular choice for locals and visitors alike.\n\nWhat sets Caffe Milano apart is its commitment to quality and authenticity. Each dish is crafted with care, highlighting traditional Italian techniques while embracing modern culinary trends. Guests can enjoy a menu that ranges from comforting classics to innovative seasonal specials, all served with warm hospitality and attention to detail. The location on 5th Avenue South adds to the experience, offering a perfect setting for a leisurely lunch, romantic dinner, or evening out in Naples’ bustling downtown.\n\nCaffe Milano is ideal for diners who appreciate fresh ingredients, flavorful dishes, and a stylish environment. It’s a must‑visit for anyone seeking a memorable Italian meal in Naples.",
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
        "longDescription": "Ethos Greek Bistro brings a fresh, modern take on Mediterranean dining to Coconut Creek, blending authentic Greek flavors with a bright, contemporary atmosphere. The restaurant’s light‑filled interior and charming outdoor patio create a welcoming environment perfect for casual lunches, relaxed dinners, or evenings out with friends. With lush plants, umbrellas, fans, and ambient lighting, the patio offers one of the most inviting outdoor dining experiences in the area.\n\nThe menu at Ethos focuses on clean, flavorful dishes made with high‑quality ingredients. Guests can expect fresh seafood, marinated skewers, organic plates, and classic Greek favorites prepared with a modern twist. The curated selection of Greek wines adds to the experience, offering thoughtful pairings that complement the restaurant’s vibrant flavors. Ethos is known for its consistency, friendly service, and ability to deliver a meal that feels both wholesome and indulgent.\n\nEthos Greek Bistro is perfect for diners who appreciate Mediterranean cuisine, fresh ingredients, and a stylish yet relaxed setting. It’s a standout choice in Coconut Creek for anyone seeking delicious Greek food in a beautiful environment.",
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
        "longDescription": "Tacu Taku Peruvian Kitchen offers a cozy, homestyle dining experience in Pembroke Pines, serving classic Peruvian comfort dishes with warmth and consistency. Known for its flavorful lomo saltado, creamy tallarín verde, and satisfying chaufa fried rice, the restaurant focuses on traditional recipes prepared with care. The intimate dining room and friendly service create a welcoming environment that feels like a neighborhood favorite.\n\nWhat makes Tacu Taku special is its commitment to authentic flavors and approachable dishes. The menu highlights the bold seasonings and hearty textures that define Peruvian cuisine, offering a mix of familiar favorites and regional specialties. Whether you’re stopping in for a casual lunch or enjoying a relaxed dinner, the restaurant delivers a meal that feels comforting and thoughtfully prepared.\n\nTacu Taku is ideal for diners who enjoy homestyle cooking, generous portions, and a laid‑back atmosphere. It’s a great option in Pembroke Pines for anyone seeking delicious Peruvian food without the formality of upscale dining.",
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
        "longDescription": "Citrus Grillhouse offers one of the most scenic dining experiences in Vero Beach, combining oceanfront views with a menu centered on fresh seafood, grilled meats, and citrus‑inspired flavors. The restaurant’s upscale yet relaxed atmosphere makes it a popular choice for romantic dinners, sunset meals, and special occasions. With its breezy coastal setting and scratch‑made recipes, Citrus Grillhouse captures the essence of Florida’s seaside dining.\n\nThe menu highlights high‑quality ingredients and thoughtful preparation, offering dishes that feel both refined and approachable. Guests can enjoy fresh local catches, flavorful grilled entrees, and seasonal specials that showcase the restaurant’s commitment to freshness. The oceanfront location enhances the experience, providing a beautiful backdrop that elevates every meal.\n\nCitrus Grillhouse is perfect for diners who appreciate coastal cuisine, stunning views, and a polished dining environment. It’s a must‑visit in Vero Beach for anyone seeking an elegant yet relaxed meal by the water.",
        "hours": {
            "Monday - Saturday": "11:30 AM - 1:30 PM, 5:00 PM - 8:30 PM",
            "Sunday": "Closed"
        },
        "image": "images/citrus-grillhouse-food-plates-vero-beach.jpg",
        "imageAlt": "Three gourmet seafood and pasta dishes including shrimp risotto, grilled fish with orzo, and orecchiette pasta at Citrus Grillhouse in Vero Beach, Florida",
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
        ],
        "images": [
            {
                "path": "images/citrus-grillhouse-food-plates-vero-beach.jpg",
                "alt": "Three gourmet seafood and pasta dishes including shrimp risotto, grilled fish with orzo, and orecchiette pasta at Citrus Grillhouse in Vero Beach, Florida"
            },
            {
                "path": "images/citrus-grillhouse-storefront-exterior-vero-beach.jpg",
                "alt": "Grand stucco building exterior and palm trees of Citrus Grillhouse in Vero Beach, Florida"
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
        "longDescription": "Sweet Tomatoes returns to Fort Myers with its beloved all‑you‑care‑to‑eat salad bar concept, offering a fresh, family‑friendly dining experience centered around wholesome ingredients and customizable meals. Known for its expansive 50‑foot salad and soup bar, baked potatoes, sourdough focaccia, and soft‑serve ice cream, the restaurant provides a casual environment perfect for quick lunches, relaxed dinners, and healthy dining options.\n\nWhat makes Sweet Tomatoes stand out is its focus on variety and freshness. Guests can build their own salads, explore rotating soup selections, and enjoy a range of comfort‑food sides that cater to different tastes and dietary preferences. The bright, welcoming atmosphere makes it a great choice for families, groups, and anyone seeking a satisfying meal without the heaviness of traditional dining.\n\nSweet Tomatoes is ideal for diners who appreciate simple, fresh ingredients and a relaxed, buffet‑style experience. It’s a reliable favorite in Fort Myers for healthy, customizable meals.",
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
        "longDescription": "El Sid Taqueria brings a cheerful, beachfront dining experience to Vero Beach, offering fresh tacos, chips, and refreshing soft‑serve ice cream just steps from the ocean. The vibrant, casual atmosphere makes it a popular spot for quick lunches, relaxed dinners, and family outings. With outdoor seating right on Ocean Drive, guests can enjoy coastal breezes and lively street views while savoring flavorful Mexican‑inspired dishes.\n\nThe menu focuses on simple, fresh ingredients prepared with care. Guests can expect a variety of tacos, house‑made salsas, and satisfying sides that pair perfectly with the restaurant’s laid‑back vibe. The soft‑serve ice cream adds a fun touch, making El Sid a great stop for both meals and sweet treats.\n\nEl Sid Taqueria is perfect for diners who enjoy casual coastal dining, fresh flavors, and a lively outdoor setting. It’s a standout option in Vero Beach for anyone seeking a fun, relaxed meal by the ocean.",
        "hours": {
            "Sunday - Thursday": "11:00 AM - 8:00 PM",
            "Friday - Saturday": "11:00 AM - 9:00 PM"
        },
        "image": "images/el-sid-taqueria-truck-interior-vero-beach.jpg",
        "imageAlt": "Rustic yellow Ford pickup truck turned service counter inside the colorful interior of El Sid Taqueria in Vero Beach, Florida",
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
        ],
        "images": [
            {
                "path": "images/el-sid-taqueria-truck-interior-vero-beach.jpg",
                "alt": "Rustic yellow Ford pickup truck turned service counter inside the colorful interior of El Sid Taqueria in Vero Beach, Florida"
            },
            {
                "path": "images/el-sid-taqueria-storefront-vero-beach.jpg",
                "alt": "Peach-colored stucco storefront exterior of El Sid Taqueria in Vero Beach, Florida, showing steps, a wooden bench, and palm trees"
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
        "longDescription": "Cotoa is one of North Miami’s most exciting culinary destinations, offering a refined and deeply personal interpretation of Ecuadorian cuisine. Led by Chef Alejandra Espinoza, the restaurant blends ancestral South American ingredients with modern cooking techniques, resulting in dishes that feel both rooted in tradition and elevated for contemporary dining. As a Michelin‑guided establishment, Cotoa emphasizes craftsmanship, storytelling, and artistic presentation, making every plate feel like part of a larger cultural narrative.\nThe intimate, sleek dining room enhances the experience, creating a space where guests can fully appreciate the creativity and detail behind each dish. From vibrant ceviches to rich, comforting mains inspired by Ecuador’s diverse regions, the menu showcases bold flavors and thoughtful composition. Cotoa is ideal for diners who enjoy globally inspired cuisine, chef‑driven menus, and restaurants that offer more than just a meal — they offer an experience.\nWhether you’re exploring Ecuadorian food for the first time or seeking a standout fine‑casual restaurant in North Miami, Cotoa delivers a memorable, story‑driven dining journey.",
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
        "longDescription": "Squid Lips is a beloved waterfront staple in Sebastian, offering a laid‑back tropical dining experience right on the Indian River. Known for its sandy beach seating area, oak‑grilled seafood specials, and lively coastal atmosphere, the restaurant captures the essence of Florida’s relaxed riverfront lifestyle. Guests can enjoy fresh seafood while watching boats drift by, spotting marine wildlife, and soaking in the breezy, open‑air environment.\nThe menu highlights grilled favorites, casual coastal bites, and tropical cocktails that pair perfectly with the restaurant’s beachy vibe. Squid Lips is a great choice for families, groups, and anyone looking for a fun, casual meal with a scenic backdrop. The sandy dining area adds a unique touch, allowing guests to literally bury their toes in the sand while enjoying lunch or dinner.\nSquid Lips is ideal for diners who appreciate unfussy, flavorful seafood and a lively waterfront setting. It’s a must‑visit in Sebastian for anyone seeking a relaxed, tropical dining experience by the water.",
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
        "longDescription": "Wind & Waves Grill offers a warm, coastal dining experience inside Disney’s Vero Beach Resort & Spa, blending fresh local ingredients with a relaxed, family‑friendly atmosphere. The restaurant features an airy dining room, open kitchen design, and a menu centered around fresh seafood, hand‑crafted pizzas, and signature flatbreads. Whether you’re enjoying breakfast before a day at the beach or settling in for a casual dinner, the restaurant delivers a comforting, beachside vibe that feels quintessentially Florida.\nGuests can expect friendly service, approachable dishes, and a setting that appeals to both resort visitors and locals. The menu balances classic coastal flavors with Disney’s signature attention to detail, making it a reliable choice for families, couples, and groups. The open kitchen adds a fun, interactive element, allowing diners to watch chefs prepare pizzas and flatbreads fresh to order.\nWind & Waves Grill is perfect for anyone seeking a relaxed, seaside meal with consistent quality and a welcoming atmosphere. It’s a standout option in Vero Beach for casual coastal dining.",
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
        ],
        "images": [
            {
                "path": "images/wind-and-waves-grill.jpg",
                "alt": "Blueberry Lemon Ricotta Pancakes served with bacon at Wind & Waves Grill"
            },
            {
                "path": "images/wind-and-waves-grill-dining-room-vero-beach.jpg",
                "alt": "Warmly lit interior dining room of Wind & Waves Grill at Disney's Vero Beach Resort, featuring high wooden ceilings and modern round light fixtures"
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
        "longDescription": "Blue Ginger offers a charming, contemporary Japanese dining experience in Southwest Ranches, centered around its iconic “sushi river” bar — a fun, interactive conveyor system that delivers fresh sushi plates directly to guests. The restaurant’s intimate, casual vibe makes it a great choice for laid‑back date nights, quick bites with friends, or family dinners where the dining experience becomes part of the entertainment.\nThe menu features a variety of sushi rolls, sashimi, and Japanese‑inspired small plates, all prepared with fresh ingredients and approachable flavors. The sushi river adds a playful twist, allowing guests to sample different dishes at their own pace. The relaxed atmosphere, friendly service, and unique dining format make Blue Ginger a local favorite for those seeking something different from traditional sushi restaurants.\nBlue Ginger is ideal for diners who enjoy casual Japanese cuisine, interactive dining, and a cozy neighborhood setting. It’s a standout spot in Southwest Ranches for fun, flavorful meals.",
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
        "longDescription": "Tacology brings a stylish, modern Mexican dining experience to Brickell City Centre, offering an open‑air restaurant design that blends rustic elements with neon accents and a lively bar scene. Located on the 4th floor, the restaurant feels vibrant and energetic, making it a popular destination for trendy date nights, group outings, and post‑work happy hours.\nThe menu focuses on artisanal street food, fresh tableside guacamole, and a curated selection of tequila and mezcal cocktails. Guests can enjoy beautifully plated tacos, flavorful small bites, and creative drinks in a setting that feels both upscale and approachable. The open layout and upbeat music contribute to the restaurant’s social atmosphere, making it a great choice for evenings when you want a meal that feels fun and immersive.\nTacology is perfect for diners who enjoy modern Mexican cuisine, stylish environments, and a lively Brickell vibe. It’s a standout option for anyone seeking bold flavors and a trendy dining experience.",
        "hours": {
            "Monday - Thursday": "11:30 AM - 11:00 PM",
            "Friday - Saturday": "11:30 AM - 12:00 AM",
            "Sunday": "11:30 AM - 11:00 PM",
            "Tuesday": "11:00 AM - 11:00 PM"
        },
        "image": "images/tacology-brickell-rooftop-terrace-miami.jpg",
        "imageAlt": "Lush garden terrace balcony under neon sign for Tacology at Brickell City Centre in Miami, Florida",
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
        ],
        "images": [
            {
                "path": "images/tacology-brickell-rooftop-terrace-miami.jpg",
                "alt": "Lush garden terrace balcony under neon sign for Tacology at Brickell City Centre in Miami, Florida"
            },
            {
                "path": "images/tacology-brickell-city-centre-exterior-miami.jpg",
                "alt": "Modern steel and glass exterior of Tacology fine quality tacos at Brickell City Centre in Miami, Florida"
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
        "longDescription": "Mulligan’s Beach House is a lively, family‑friendly beachfront restaurant in Vero Beach, offering sweeping ocean views, tropical cocktails, and a broad menu that caters to all ages. Open early for breakfast and staying open late, the restaurant is a go‑to spot for weekend brunches, casual lunches, and relaxed family dinners. The large outdoor patio provides a breezy, coastal setting perfect for enjoying seafood dishes, refreshing drinks, and Florida sunshine.\nThe menu features a mix of fresh seafood, comfort‑food classics, and kid‑friendly options, making it a reliable choice for groups and families. Mulligan’s energetic atmosphere, friendly service, and beachfront location create a fun, approachable dining experience that feels quintessentially Vero Beach.\nMulligan’s Beach House is ideal for diners who enjoy casual coastal dining, ocean views, and a lively environment. It’s a must‑visit for anyone seeking a relaxed meal by the water.",
        "hours": {
            "Sunday - Thursday": "7:00 AM - 10:00 PM",
            "Friday - Saturday": "7:00 AM - 12:00 AM"
        },
        "image": "images/mulligans-beach-house-storefront-vero-beach.jpg",
        "imageAlt": "Storefront exterior of Mulligan's Beach House Bar & Grill in Vero Beach, Florida, showing a blue awning, beach chairs, and a large sailfish statue",
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
        ],
        "images": [
            {
                "path": "images/mulligans-beach-house-storefront-vero-beach.jpg",
                "alt": "Storefront exterior of Mulligan's Beach House Bar & Grill in Vero Beach, Florida, showing a blue awning, beach chairs, and a large sailfish statue"
            },
            {
                "path": "images/mulligans-beach-house-lifeguard-chair-vero-beach.jpg",
                "alt": "Giant green wooden beach lifeguard chair with painted signs for Mulligan's Beach House Bar & Grill in Vero Beach, Florida"
            }
        ]
    },
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
        "longDescription": "Pizza Lovers offers a cozy, inviting Italian dining experience in Plantation, blending traditional flavors with a warm, home‑style atmosphere. Known for its freshly baked garlic rolls drenched in olive oil and minced garlic, stone‑baked pizzas, and homemade pastas, the restaurant delivers comforting Italian dishes prepared with care. The dining room features classic Italian décor, warm lighting, and a relaxed ambiance that makes guests feel right at home.\nWhat sets Pizza Lovers apart is its commitment to quality and consistency. Each dish highlights fresh ingredients and traditional cooking methods, resulting in meals that feel both familiar and satisfying. Whether you’re enjoying a casual dinner, celebrating with family, or craving authentic Italian comfort food, the restaurant offers a welcoming environment and flavors that evoke the warmth of home cooking.\nPizza Lovers is perfect for diners who appreciate hearty Italian dishes, cozy settings, and a relaxed dining experience. It’s a standout spot in Plantation for comforting, high‑quality Italian cuisine.",
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
        "longDescription": "Joe & The Juice brings a trendy, modern juice bar and café experience to Aventura Mall, offering fresh‑pressed juices, premium coffees, shakes, and signature flatbread sandwiches in a sleek, energetic environment. The Danish brand is known for its club‑like soundtrack, minimalist design, and health‑focused menu, making it a popular stop for shoppers seeking a quick, nutritious boost.\nThe menu features customizable juices, protein shakes, espresso drinks, and light bites that cater to a variety of dietary preferences. Guests can enjoy a vibrant atmosphere that feels both stylish and approachable, with friendly staff and fast service ideal for busy mall visitors. Joe & The Juice is perfect for anyone looking for a refreshing drink, a healthy snack, or a modern café experience during a day of shopping.\nIt’s a standout option in Aventura Mall for fresh, energizing drinks and quick, flavorful bites.",
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
        "longDescription": "Rosalia’s Kitchen offers a warm, family‑owned Italian dining experience in Miramar, known for its peach bellini meatballs, artisanal pizzas, rich lasagna, and homemade marinara. The cozy dining room and friendly service create an inviting environment perfect for family dinners, relaxed date nights, or casual evenings out.\nThe menu highlights classic Italian comfort dishes prepared with care and high‑quality ingredients. Guests can enjoy a wide selection of pastas, pizzas, and house specialties paired with an extensive wine list that complements the restaurant’s rich flavors. Rosalia’s Kitchen stands out for its consistency, welcoming atmosphere, and ability to deliver meals that feel both comforting and elevated.\nIt’s an excellent choice for diners seeking hearty Italian cuisine, warm hospitality, and a relaxed neighborhood setting in Miramar.",
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
        "longDescription": "Cantina La Veinte offers one of Brickell’s most luxurious Mexican dining experiences, featuring a stunning two‑story interior overlooking the water and a menu centered on high‑end traditional Mexican cuisine. The restaurant blends ornate décor, bold flavors, and a lively bar scene to create an atmosphere that feels both glamorous and vibrant.\nGuests can enjoy gourmet Mexican dishes, beautifully crafted cocktails, and an extensive mezcal and tequila selection. The terrace seating directly over the Miami River adds a dramatic touch, making it a popular choice for date nights, celebrations, and evenings when you want a meal that feels special.\nCantina La Veinte is ideal for diners who appreciate upscale Mexican cuisine, stylish environments, and waterfront views. It’s a standout destination in Brickell for a luxurious, flavorful dining experience.",
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
        "inkindUrl": "https://inkind.com/partners/cantina-la-veinte?utm_source=soflobites",
        "images": [
            {
                "path": "images/cantina-la-veinte-mexican-tostada-octopus-brickell.jpg",
                "alt": "High-end Mexican tostada de atun, pulpo a las brasas (grilled octopus), and short rib flautas at Cantina La Veinte overlooking the Brickell waterfront in Miami, Florida"
            },
            {
                "path": "images/cantina-la-veinte-interior-flags-brickell.jpg",
                "alt": "Vibrant indoor dining room decorated with international flags and hanging bougainvillea at Cantina La Veinte in Brickell, Miami, Florida"
            }
        ]
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
        "longDescription": "Mister 01 brings its award‑winning, Miami‑born pizza concept to Pembroke Pines with a chic, modern dining room and a menu centered around exceptional Italian ingredients. Best known for its iconic star‑shaped pizzas — each point filled with creamy ricotta — the restaurant blends creativity with tradition in a way that feels both playful and refined. The crisp, thin crusts are crafted using high‑quality flour and imported toppings, resulting in pizzas that are light, flavorful, and beautifully balanced.\nThe lively open kitchen and high ceilings add to the energetic atmosphere, making Mister 01 a great choice for casual dinners, date nights, or gatherings with friends. Guests can watch chefs stretch dough, assemble pizzas, and slide them into the oven, creating a fun, interactive dining experience. The menu also features fresh salads, artisanal appetizers, and specialty pies that highlight the restaurant’s commitment to quality.\nMister 01 is perfect for diners who appreciate inventive Italian cuisine, modern design, and a restaurant that transforms pizza into a gourmet experience. It’s a standout spot in Pembroke Pines for anyone seeking exceptional, handcrafted pies.",
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
        "longDescription": "The Pub brings a lively, British‑inspired tavern experience to the Shops at Pembroke Gardens, offering classic pub fare, international brews, and a warm, wood‑accented dining room that captures the charm of traditional British pubs. Known for its self‑pour draft beer wall, the restaurant allows guests to sample a variety of beers at their own pace, adding a fun, interactive element to the dining experience.\nThe menu features favorites like bangers & mash, fish and chips, shepherd’s pie, and hearty comfort dishes that pair perfectly with the extensive beer selection. The energetic outdoor patio and bustling indoor bar make The Pub a great choice for happy hours, casual dinners, and weekend gatherings. Whether you’re stopping in for a pint, enjoying a meal with friends, or catching a game, the atmosphere feels welcoming and lively.\nThe Pub is ideal for diners who enjoy classic British flavors, a wide beer selection, and a vibrant social setting. It’s a standout option in Pembroke Pines for relaxed, upscale‑casual dining.",
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
        "longDescription": "Cabana Bar offers a breezy, upscale poolside dining experience at Costa d’Este Beach Resort in Vero Beach, blending tropical cocktails, fresh ceviches, and casual coastal fare with stunning ocean views. Nestled among palm trees and a stylish pool deck, the bar provides a relaxed yet refined atmosphere perfect for resort guests and visitors seeking a laid‑back meal by the water.\nThe menu highlights fresh ingredients and beach‑friendly dishes, including seafood bites, refreshing salads, and tropical drinks crafted with house‑made mixers. Guests can enjoy the ocean breeze, comfortable lounge seating, and a setting that feels both luxurious and approachable. Cabana Bar is a great choice for afternoon cocktails, casual lunches, or sunset bites after a day at the beach or pool.\nIt’s ideal for diners who appreciate resort‑style dining, oceanfront views, and a relaxed tropical vibe. Cabana Bar is one of Vero Beach’s best spots for enjoying scratch‑made coastal fare in a beautiful outdoor setting.",
        "hours": {
            "Monday - Sunday": "7:30 AM - 11:00 AM, 11:00 AM - 3:00 PM, 5:00 PM - 10:00 PM"
        },
        "image": "images/cabana-bar-stuffed-appetizers-vero-beach.jpg",
        "imageAlt": "Gourmet stuffed appetizers topped with melted cheese, tomato sauce, chives, and a fresh lime wedge at Cabana Bar in Vero Beach, Florida",
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
        ],
        "images": [
            {
                "path": "images/cabana-bar-stuffed-appetizers-vero-beach.jpg",
                "alt": "Gourmet stuffed appetizers topped with melted cheese, tomato sauce, chives, and a fresh lime wedge at Cabana Bar in Vero Beach, Florida"
            },
            {
                "path": "images/cabana-bar-pool-deck-vero-beach.jpg",
                "alt": "Breezy pool deck at Costa d’Este Beach Resort with palm trees lit in red, lounge chairs, and ocean views in Vero Beach, Florida"
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
        "longDescription": "Brimstone Woodfire Grill delivers a polished American dining experience at the Shops at Pembroke Gardens, focusing on oak‑grilled steaks, fresh seafood, artisan flatbreads, and chef‑driven comfort dishes. The restaurant’s warm wood accents, massive brick fire hearth, and bustling open bar create an inviting atmosphere that feels both upscale and approachable.\nGuests can enjoy a menu centered around bold flavors and high‑quality ingredients, with dishes that highlight the restaurant’s woodfire cooking techniques. Whether you’re stopping in for a business lunch, enjoying a date night, or meeting friends for happy hour, Brimstone offers a versatile dining experience with attentive service and a lively ambiance. The breezy outdoor patio adds another layer of charm, making it a great spot for evening cocktails or weekend meals.\nBrimstone Woodfire Grill is perfect for diners who appreciate premium American cuisine, polished interiors, and a restaurant that balances sophistication with comfort. It’s a standout option in Pembroke Pines for elevated yet relaxed dining.",
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
        ],
        "images": [
            {
                "path": "images/brimstone-seafood-pasta-shrimp-pembroke-pines.jpg",
                "alt": "Creamy seafood scampi pasta with shrimp and artichoke hearts at Brimstone Woodfire Grill in Pembroke Pines, Florida"
            },
            {
                "path": "images/brimstone-woodfire-grill-exterior-pembroke-pines.jpg",
                "alt": "Brimstone Woodfire Grill building exterior at the Shops at Pembroke Gardens in Pembroke Pines, Florida"
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
        "longDescription": "The Bar is a beloved Coral Gables institution, offering classic pub fare, ice‑cold beers, and lively late‑night vibes on Giralda Avenue since 1946. With its historic wood paneling, vintage charm, and multiple screens for local sports, the pub has long served as a neighborhood gathering spot for friends, families, and longtime regulars.\nThe menu features approachable bar favorites, from wings and burgers to sandwiches and shareable appetizers, all served in a cozy, nostalgic setting. Daily happy hours and a welcoming staff contribute to the pub’s enduring popularity, making it a great choice for casual meetups, game nights, or relaxed evenings out. The Bar’s long history and consistent atmosphere give it a timeless appeal that resonates with locals and visitors alike.\nIt’s ideal for diners who enjoy classic pub environments, friendly service, and a piece of Coral Gables history. The Bar remains one of the area’s most iconic social spots.",
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
        "longDescription": "Chug’s Diner brings a MICHELIN Bib Gourmand‑recognized Cuban‑American dining experience to Coconut Grove, blending classic diner culture with homestyle Cuban flavors crafted by Chef Michael Beltran. The bright, retro‑inspired dining room features an open coffee counter, pastelito display, and spacious outdoor terrace, creating a welcoming environment perfect for breakfast, lunch, or dinner.\nThe menu highlights comforting dishes like Cuban‑style sandwiches, all‑day breakfast plates, fresh pastries, and inventive takes on traditional favorites. Chug’s is known for its legendary pastelitos, rich Cuban coffees, and dishes that balance nostalgia with modern culinary creativity. The diner’s approachable atmosphere and consistent quality make it a favorite among locals, families, and food enthusiasts exploring Miami’s vibrant dining scene.\nChug’s Diner is ideal for diners who appreciate hearty comfort food, Cuban flavors, and a relaxed, stylish setting. It’s a standout spot in Coconut Grove for delicious, thoughtfully crafted meals.",
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
        "longDescription": "JohnMartin’s Restaurant & Bar brings a newly renovated Irish pub experience to Miracle Mile, blending traditional Irish charm with modern design elements. Known for its draft beers, single malt whiskeys, and a menu that combines classic Irish fare with contemporary American pub dishes, the restaurant offers a warm, inviting environment perfect for casual dinners, date nights, or relaxed evenings out.\nThe interior features cozy Irish pub details — dark wood accents, warm lighting, and comfortable seating — paired with updated styling that gives the space a fresh, polished feel. Guests can enjoy shepherd’s pie, fish and chips, burgers, and creative small plates alongside a well‑curated drink selection. The lively bar scene and friendly service contribute to the restaurant’s welcoming atmosphere.\nJohnMartin’s is ideal for diners who enjoy hearty comfort food, quality drinks, and a blend of tradition and modernity. It’s a standout destination on Miracle Mile for relaxed, flavorful dining.",
        "hours": {
            "Monday - Wednesday": "4:00 PM - 12:00 AM",
            "Thursday - Friday": "4:00 PM - 2:00 AM",
            "Saturday": "11:30 AM - 2:00 AM",
            "Sunday": "11:00 AM - 12:00 AM"
        },
        "image": "images/johnmartins-irish-pub-storefront-coral-gables.jpg",
        "imageAlt": "Modern painted grey exterior storefront with large windows of Johnmartin's Restaurant & Bar on Miracle Mile in Coral Gables, Florida",
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
        "longDescription": "Tanuki River Landing offers one of Miami’s most visually striking Japanese dining experiences, featuring a monumental half‑man, half‑tanuki statue and scenic riverfront views. The restaurant blends modern Japanese design with pan‑Asian culinary influences, creating a premium dining environment perfect for trendy date nights, upscale gatherings, and weekend dinners by the water.\nThe menu highlights hot and cold Asian plates, fresh sushi river flows, and creative cocktails crafted with premium ingredients. Guests can enjoy beautifully plated dishes in a setting that feels immersive and artistic, with indoor and outdoor seating that showcases the restaurant’s waterfront location. The combination of bold flavors, stylish décor, and a vibrant atmosphere makes Tanuki River Landing a standout in Miami’s competitive dining scene.\nIt’s ideal for diners who appreciate modern Japanese cuisine, unique design, and elevated waterfront dining.",
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
        "longDescription": "Ohana offers a welcoming, family‑centric dining experience in Doral, blending Japanese‑Peruvian Nikkei flavors with Hawaiian influences. The sleek, contemporary dining room provides a comfortable setting for both casual family dinners and meals with friends, featuring creative signature rolls, fresh ceviches, and savory hot dishes like Hawaiian noodles.\nThe menu highlights bold, fusion‑driven flavors that showcase the restaurant’s diverse culinary inspiration. Guests can expect fresh ingredients, vibrant presentations, and dishes that balance Japanese technique with Peruvian spice and Hawaiian comfort. Ohana’s approachable atmosphere and consistent quality make it a favorite among local professionals and families seeking flavorful, modern cuisine.\nIt’s ideal for diners who enjoy fusion dishes, relaxed environments, and a menu that offers something for everyone. Ohana is a standout spot in Doral for creative, satisfying meals.",
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
        "longDescription": "Hillstone is a polished, upscale dining institution on Miracle Mile, known for its impeccable service, USDA Prime steaks, fresh sushi platters, and refined American dishes. The elegant, dim‑lit dining room creates a sophisticated atmosphere perfect for date nights, business dinners, and special occasions.\nThe menu features high‑quality ingredients prepared with precision, offering a mix of classic American favorites and elevated specialties. Guests can enjoy expertly crafted cocktails, attentive service, and a dining experience that feels consistently luxurious. Hillstone’s reputation for excellence makes it a popular choice among local professionals, celebrating couples, and anyone seeking a memorable meal in Coral Gables.\nIt’s ideal for diners who appreciate premium ingredients, polished interiors, and a restaurant that delivers exceptional service every time.",
        "hours": {
            "Monday - Saturday": "11:30 AM - 10:00 PM",
            "Sunday": "11:30 AM - 9:00 PM"
        },
        "image": "images/hillstone-american-restaurant-coral-gables.jpg",
        "imageAlt": "Modern brick storefront of Hillstone on Miracle Mile in Coral Gables, Florida",
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
        "longDescription": "Negroni Bistro & Sushi Bar brings a polished, globally inspired dining experience to Weston Town Center, offering a chic blend of international cuisine, modern mixology, and stylish ambiance. The restaurant features an elegant indoor dining room, a sleek sushi bar, and a leafy outdoor terrace that creates a relaxed yet upscale environment perfect for date nights, social gatherings, and leisurely weekend meals.\nThe menu highlights a unique fusion of flavors, ranging from artisanal pastas and premium steaks to Latin‑inspired sushi rolls crafted with fresh ingredients and thoughtful presentation. Guests can enjoy a diverse selection of dishes that reflect Negroni’s global culinary approach, along with expertly crafted cocktails that elevate the dining experience. The restaurant’s refined atmosphere and attentive service make it a standout destination for those seeking a sophisticated meal in Weston.\nNegroni Bistro & Sushi Bar is ideal for diners who appreciate international cuisine, stylish settings, and a menu that offers both comfort and creativity. It’s one of Weston’s most polished dining options.",
        "hours": {
            "Monday - Wednesday": "12:00 PM - 10:00 PM",
            "Thursday": "12:00 PM - 12:00 AM",
            "Friday": "12:00 PM - 11:00 AM, 12:00 PM - 12:00 AM",
            "Saturday": "12:00 PM - 12:00 AM",
            "Sunday": "11:00 AM - 10:00 PM"
        },
        "image": "images/negroni-bistro-sushi-bar-pergola-terrace-weston.jpg",
        "imageAlt": "Chic wooden pergola terrace and lush hanging ferns exterior at Negroni Bistro & Sushi Bar in Weston Town Center, Florida",
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
        ],
        "images": [
            {
                "path": "images/negroni-bistro-sushi-bar-pergola-terrace-weston.jpg",
                "alt": "Chic wooden pergola terrace and lush hanging ferns exterior at Negroni Bistro & Sushi Bar in Weston Town Center, Florida"
            },
            {
                "path": "images/negroni-bistro-sushi-bar-patio-dining-weston.jpg",
                "alt": "Sophisticated outdoor patio seating area with black and white striped sofas and wicker chairs under a canopy of ferns at Negroni in Weston, Florida"
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
        "longDescription": "Tap 42 Craft Kitchen & Bar brings a high‑energy gastropub experience to the upper level of Aventura Mall, offering creative American dishes, craft beers, and a lively social atmosphere. Known for its weekend bottomless brunch, the restaurant attracts a vibrant crowd of locals, young professionals, and mall visitors looking for a fun, flavorful meal.\nThe sprawling indoor space features rustic‑industrial décor, a massive draft beer selection, and an impressive 1,200‑square‑foot open‑air patio overlooking the mall’s bustling plaza. Guests can enjoy inventive burgers, shareable appetizers, fresh salads, and signature cocktails in a setting that feels both stylish and approachable. Tap 42 is a great choice for business lunches, happy hours, weekend catchups, and evenings when you want a meal that feels social and energetic.\nIt’s ideal for diners who enjoy modern American cuisine, craft drinks, and a lively atmosphere. Tap 42 stands out as one of Aventura’s most popular dining destinations.",
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
        "longDescription": "Paul Bakery brings authentic French café culture to Sawgrass Mills, offering freshly baked artisanal breads, delicate pastries, savory sandwiches, and classic Parisian desserts. The bakery’s warm, traditional décor creates a charming environment perfect for relaxed breakfasts, casual lunches, or afternoon coffee breaks.\nGuests can enjoy buttery croissants, flaky puff pastries, fruit tarts, baguette sandwiches, and rich espresso drinks crafted with European flair. Whether you’re stopping in for a quick bite or sitting down for a leisurely meal, Paul Bakery delivers a taste of France with consistent quality and attention to detail. The café’s inviting atmosphere and elegant presentation make it a favorite among shoppers seeking a refined break from the mall’s bustle.\nPaul Bakery is ideal for diners who appreciate French pastries, artisanal breads, and a cozy European café experience. It’s a standout spot in Sunrise for classic French baking.",
        "hours": {
            "Monday - Sunday": "10:00 AM - 9:00 PM"
        },
        "image": "images/paul-bakery-french-pastry-escargot-raisin-sunrise.jpg",
        "imageAlt": "Traditional French pain aux raisins pastry close-up on a display counter at Paul Bakery in Sunrise, Florida",
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
        ],
        "images": [
            {
                "path": "images/paul-bakery-french-pastry-escargot-raisin-sunrise.jpg",
                "alt": "Traditional French pain aux raisins pastry close-up on a display counter at Paul Bakery in Sunrise, Florida"
            },
            {
                "path": "images/paul-bakery-storefront-outdoor-patio-sunrise.jpg",
                "alt": "Outdoor patio dining area and facade of Paul Bakery & Restaurant in Sunrise, Florida"
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
            "Pasta",
            "Pizza"
        ],
        "mustTry": "Pesto Fettuccine",
        "description": "An exceptional fermentation-forward dining concept serving artisanal naturally leavened sourdough pizzas, house-made pastas, and natural wines.",
        "longDescription": "LB Eatery & Wine offers a fermentation‑forward dining experience at the Shops at Pembroke Gardens, specializing in sourdough pizzas, house‑made pastas, and fresh seasonal salads crafted with artisanal techniques. The chic, contemporary dining room provides a stylish backdrop for meals that highlight craftsmanship, creativity, and high‑quality ingredients.\nThe restaurant’s sourdough pizzas are baked crisp in custom ovens, delivering complex flavors and airy textures that showcase the artistry behind the dough. Guests can also enjoy silky pastas, vibrant salads, and a curated selection of natural and small‑production wines that pair beautifully with the menu. LB Eatery & Wine is a great choice for date nights, relaxed dinners, and evenings when you want a meal that feels both modern and thoughtfully prepared.\nIt’s ideal for diners who appreciate artisanal cooking, fermentation‑driven flavors, and a polished dining environment. LB Eatery & Wine is one of Pembroke Pines’ most unique culinary gems.",
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
        ],
        "images": [
            {
                "path": "images/lb-eatery-wine-french-toast-pembroke-pines.jpg",
                "alt": "Gourmet French toast with fresh fruits and a glass of red wine at LB Eatery in Pembroke Pines, Florida"
            },
            {
                "path": "images/lb-eatery-storefront-warm-lights-pembroke-pines.jpg",
                "alt": "Warmly lit storefront exterior of LB Eatery at night featuring string lights and comfortable window tables in Pembroke Pines, Florida"
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
            "American",
            "Brunch"
        ],
        "mustTry": "Drunken Shrimp",
        "description": "An upscale-casual American winery and restaurant in Pembroke Pines, offering contemporary dining, a full-service bar, and an interactive wine-tasting room.",
        "longDescription": "Cooper’s Hawk Winery & Restaurant offers a refined American dining experience designed to pair perfectly with the brand’s proprietary wines. The expansive venue features a modern dining room, a bustling full‑service bar, and a welcoming wine‑tasting room where guests can sample flights before their meal.\nThe menu highlights contemporary American dishes crafted with fresh ingredients and bold flavors, including signature entrees, shareable appetizers, and seasonal specials. Cooper’s Hawk is a popular choice for romantic date nights, corporate lunches, celebratory dinners, and gatherings with friends. The combination of polished service, consistent quality, and a unique wine‑driven concept makes it a standout dining destination in Pembroke Pines.\nIt’s ideal for diners who enjoy elevated American cuisine, curated wine pairings, and a sophisticated yet approachable atmosphere.",
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
        "longDescription": "Villagio brings classic Italian dining to the Colonnade Outlets at Sawgrass Mills, offering wood‑fired pizzas, hearty pastas, fresh seafood, and generous portions in a lively, upscale environment. The restaurant’s spacious patio seating and warm interior create a welcoming atmosphere perfect for shoppers seeking a high‑quality meal after a day at the outlets.\nThe menu features traditional Italian recipes prepared with care, from comforting pasta dishes to crisp pizzas baked in a wood‑fired oven. Villagio is known for its consistency, friendly service, and ability to deliver satisfying meals that feel both authentic and approachable. Whether you’re enjoying lunch with family or settling in for a relaxed dinner, the restaurant offers a reliable and flavorful Italian dining experience.\nVillagio is ideal for diners who appreciate classic Italian cooking, generous portions, and a lively atmosphere. It’s a favorite in Sunrise for quality Italian fare.",
        "hours": {
            "Monday - Saturday": "11:00 AM - 11:00 PM",
            "Sunday": "11:00 AM - 10:00 PM"
        },
        "image": "images/villagio-italian-restaurant-sunrise.jpg",
        "imageAlt": "Elegant stucco exterior and outdoor patio seating at Villagio in Sawgrass Mills Sunrise, Florida",
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
            "Hidden Gem",
            "Italian"
        ],
        "mustTry": "Moscow",
        "description": "A charming, European-style cafe in Plantation. Famous for their paper-thin, fresh-cooked sweet and savory crepes and artisan coffee in a warm, cozy setting.",
        "longDescription": "Saffrano Crepes & Coffee is a charming European‑style café tucked away in a quiet Plantation plaza, offering fresh sweet and savory crepes made to order. The cozy interior and casual outdoor seating create a warm, inviting environment perfect for quiet breakfasts, weekend brunches, or afternoon treats paired with custom lattes.\nThe menu features paper‑thin crepes filled with fresh ingredients, from fruit‑forward sweet options to savory combinations crafted with meats, cheeses, and vegetables. Guests can enjoy a relaxed café experience that feels both comforting and refined, with friendly service and a neighborhood atmosphere that makes Saffrano a local favorite.\nIt’s ideal for diners who enjoy European café culture, fresh crepes, and cozy settings. Saffrano Crepes & Coffee is one of Plantation’s best hidden gems.",
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
        "longDescription": "Ke‑uH offers an elegant Japanese dining experience at Weston Town Center, featuring sophisticated sushi rolls, raw plates, and tapas served in a sleek, high‑design dining room. Known for its spicy honey shrimp, fresh yellowtail jalapeño, and premium sushi selection, the restaurant delivers a refined yet approachable take on modern Japanese cuisine.\nThe stylish interior and polished service make Ke‑uH a popular choice for upscale date nights, business lunches, and special celebrations. Guests can enjoy beautifully plated dishes crafted with fresh ingredients and attention to detail, along with a menu that balances classic Japanese flavors with contemporary creativity.\nKe‑uH is ideal for diners who appreciate high‑quality sushi, elegant design, and a restaurant that consistently delivers a premium dining experience. It’s one of Weston’s top spots for modern Japanese cuisine.",
        "hours": {
            "Monday - Thursday": "12:00 PM - 3:30 PM, 5:00 PM - 10:00 PM",
            "Friday": "12:00 PM - 10:30 PM",
            "Saturday": "12:30 PM - 10:30 PM",
            "Sunday": "12:30 PM - 9:30 PM"
        },
        "image": "images/ke-uh-weston-restaurant-exterior.jpg",
        "imageAlt": "Sleek exterior storefront of Ke-uH Japanese restaurant in Weston, Florida",
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
        "longDescription": "Sushigami offers a fun, interactive conveyor‑belt sushi experience inside Sawgrass Mills Mall, where fresh sushi plates glide past guests for instant selection. The restaurant blends convenience with creativity, allowing diners to choose from a rotating assortment of rolls, sashimi, and small plates or order custom creations directly from the sushi chefs.\nThe lively atmosphere and fast service make Sushigami a great choice for quick lunches, casual dinners, or family outings. The conveyor belt adds an entertaining element that appeals to both adults and kids, making the dining experience feel dynamic and engaging.\nSushigami is ideal for diners who enjoy fresh sushi, interactive dining, and a casual mall‑friendly environment. It’s a standout option in Sunrise for fun, flavorful meals.",
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
        "longDescription": "Little Hen is a beautifully designed English‑style breakfast and brunch boutique tucked away in Weston Commons, offering a charming, flower‑draped dining experience. The restaurant features soft pastel décor, warm wood tables, and stunning floral installations that create a cozy, premium atmosphere perfect for trendy brunch gatherings and weekend family breakfasts.\nThe menu highlights organic egg plates, signature rose‑infused waffles, fresh pastries, and a luxury afternoon tea service that feels both indulgent and elegant. Guests can enjoy a breezy outdoor patio or settle into the intimate indoor dining room for a meal that balances comfort with sophistication.\nLittle Hen is ideal for diners who appreciate beautifully presented dishes, boutique café aesthetics, and a refined brunch experience. It’s one of Weston’s most Instagram‑worthy dining spots.",
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
        "longDescription": "Il Pastaio di Eataly brings authentic Italian pasta craftsmanship to Aventura Mall, offering guests a front‑row seat to watch chefs handcraft fresh pasta in a vibrant, market‑style setting. The restaurant highlights traditional Italian recipes prepared from scratch, including tagliatelle, cacio e pepe, and other regional classics.\nGuests can enjoy fine Italian wines alongside freshly made dishes that emphasize quality ingredients and time‑honored techniques. The lively atmosphere and open kitchen create an immersive dining experience perfect for pasta lovers, families, and shoppers seeking a high‑quality meal.\nIl Pastaio di Eataly is ideal for diners who appreciate authentic Italian cuisine, fresh pasta, and a bustling market environment. It’s one of Aventura’s top spots for true Italian cooking.",
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
        "description": "A hidden gem in Weston Commons serving up highly rated, authentic Mexican street food, bold tacos, and fresh salsas in a cozy, vibrant, and contemporary setting.",
        "longDescription": "El Gallo Taqueria is a hidden gem in Weston Commons, offering highly rated, authentic Mexican street food in a vibrant, contemporary setting. The cozy dining room blends modern design with an upbeat soundtrack, creating a welcoming environment perfect for casual date nights, quick lunches, or relaxed family dinners.\nThe menu highlights bold, flavorful tacos, fresh salsas, and traditional Mexican dishes prepared with care and high‑quality ingredients. Guests can enjoy a lively atmosphere and friendly service that make El Gallo feel like a neighborhood favorite.\nEl Gallo Taqueria is ideal for diners who appreciate authentic Mexican flavors, casual settings, and a restaurant that delivers big flavor in a small, stylish space. It’s one of Weston’s best spots for Mexican street food.",
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
    shouldRestoreScroll: false,
    savedBestOfScrollPosition: 0,
    shouldRestoreBestOfScroll: false,
    savedEditorialsScrollPosition: 0,
    shouldRestoreEditorialsScroll: false,
    bestOfQuery: "",
    bestOfShowAll: false,
    editorialsQuery: "",
    editorialsShowAll: false,
    currentPath: "/",
    scrollPositions: {},
    restaurantReferrer: null,
    shouldRestoreScrollForPath: null
};
window.STATE = STATE;
// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
    setupBackToTop();
    initFilters();
    renderRestaurants();
    injectSchemaMarkup();
    setupSuggestForm();
    setupModalEvents();
    
    // Render Best Of and Editorials directories immediately so search engines can crawl them on load
    renderBestOfView();
    renderEditorialsView();
    
    // History routing listener
    window.addEventListener("popstate", () => {
        handleRoute();
    });
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
window.resetAllFilters = resetAllFilters;

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
    const clearBtn = document.getElementById("clear-all-filters-btn");
    const mobileBadge = document.getElementById("mobile-filter-count-badge");
    if (activeCount > 0) {
        if (label) label.style.display = "inline-block";
        if (clearBtn) clearBtn.style.display = "inline-flex";
        if (mobileBadge) {
            mobileBadge.textContent = activeCount;
            mobileBadge.style.display = "inline-flex";
        }
    } else {
        if (label) label.style.display = "none";
        if (clearBtn) clearBtn.style.display = "none";
        if (mobileBadge) {
            mobileBadge.style.display = "none";
        }
    }
}

// Mobile Filter Window Handlers
function openMobileFilters() {
    const sidebar = document.getElementById("filter-sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (sidebar) sidebar.classList.add("active");
    if (backdrop) backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}
window.openMobileFilters = openMobileFilters;

function closeMobileFilters() {
    const sidebar = document.getElementById("filter-sidebar");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (sidebar) sidebar.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
}
window.closeMobileFilters = closeMobileFilters;

function getDirectoryScrollTarget() {
    const isMobile = window.innerWidth <= 768;
    const filterTrigger = document.getElementById("mobile-filter-trigger-bar") || document.querySelector(".mobile-filter-trigger-bar") || document.getElementById("mobile-filter-btn");
    const gridEl = document.getElementById("restaurant-grid");
    if (isMobile && filterTrigger && filterTrigger.offsetParent !== null) {
        return filterTrigger;
    }
    return gridEl;
}
window.getDirectoryScrollTarget = getDirectoryScrollTarget;

function applyMobileFilters() {
    closeMobileFilters();
    const targetEl = getDirectoryScrollTarget();
    if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
    }
}
window.applyMobileFilters = applyMobileFilters;

function toggleMobileAccordion(titleEl) {
    if (window.innerWidth > 768) return;
    const section = titleEl.closest(".filter-section");
    if (section) {
        section.classList.toggle("is-expanded");
    }
}
window.toggleMobileAccordion = toggleMobileAccordion;
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
        const imgs = rest.images || [{ path: rest.image, alt: rest.imageAlt }];
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${rest.image}" alt="${rest.imageAlt || (rest.name + ' food recommendations')}" class="card-img" loading="lazy" id="card-img-${rest.id}">
                ${imgs.length > 1 ? `
                    <button class="carousel-arrow prev" onclick="cycleCardImage(event, '${rest.id}', -1)" aria-label="Previous image">‹</button>
                    <button class="carousel-arrow next" onclick="cycleCardImage(event, '${rest.id}', 1)" aria-label="Next image">›</button>
                ` : ''}
                <span class="card-location-badge">${rest.location}</span>
                <span class="card-price-badge" title="Price Category: ${rest.priceRange}">${rest.priceRange}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title"><a href="/restaurants/${rest.id}" class="card-title-link">${rest.name}</a></h3>
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
                    <a href="/restaurants/${rest.id}" class="btn-secondary card-btn-details" style="width: 100%; margin-bottom: 0.5rem; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; box-sizing: border-box;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        Explore Restaurant
                    </a>
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
    navigateTo(`/restaurants/${id}`);
}
function closeDetailsModal() {
    navigateTo("/");
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

const BEST_OF_NEIGHBORHOODS = [
    {
        "id": "best-pembroke-pines",
        "name": "Best Restaurants in Pembroke Pines",
        "location": "Pembroke Pines",
        "description": "Explore Pembroke Pines' top dining spots, featuring oak-grilled steaks, gourmet burgers, artisan flatbreads, and authentic Irish pub fare.",
        "icon": "📍",
        "introParagraphs": [
            "Pembroke Pines is home to a thriving and diverse dining scene, offering everything from upscale-casual steakhouses to neighborhood family-friendly taverns.",
            "We curated this list by visiting local favorites at the Shops at Pembroke Gardens and along Pines Boulevard, evaluating them for quality, atmosphere, and service.",
            "Whether you're looking for a special date night or a casual weekend family dinner, these top Pembroke Pines restaurants deliver fantastic food and experiences. And if you are planning to stay in the area, check out <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> to find curated local accommodations and suites and local lodging."
        ],
        "experiences": [
            {
                "title": "2 Person Mini Powerboat Fort Lauderdale Self-Guided Boat Rental",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/1-Hour-Mini-Powerboat-Rental/d660-104840P10?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Everglades Airboat Tour from Fort Lauderdale with transportation",
                "location": "Fort Lauderdale",
                "description": "An exciting airboat ride across the Florida Everglades, spotting alligators and native birds in their natural habitat.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Florida-Everglades-Airboat-Tour-and-Show-from-Fort-Lauderdale-Group/d660-5865P8?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Fort Lauderdale: Millionaire's Row Cruise with Drinks",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://gyg.me/7zWSB15V"
            },
            {
                "title": "Jungle Queen Riverboat 90-Minute Narrated Sightseeing Cruise in Fort Lauderdale",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/90-Minute-Narrated-Sightseeing-Cruises/d660-3160P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "#1 VENICE OF AMERICA TOUR - Cold A/C 115' LARGEST IN LAUDERDALE!",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Venice-of-America-Fort-Lauderdale-Cruise/d660-57834P1?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-weston",
        "name": "Best Restaurants in Weston",
        "location": "Weston",
        "description": "Savor Weston's best restaurants, featuring award-winning burgers, upscale Japanese-Peruvian Nikkei fusion, and cozy boutique brunch spaces.",
        "icon": "📍",
        "introParagraphs": [
            "Weston is known for its beautiful neighborhoods and equally impressive, family-centric and upscale dining destinations.",
            "We evaluated Weston's top eateries based on culinary craftsmanship, ingredient freshness, and upscale-casual hospitality.",
            "From the award-winning burgers at La Birra Bar to the boutique floral brunch at Little Hen and raw Nikkei sushi at Ke-uH, Weston offers exceptional food. If you are planning a weekend staycation in this beautifully manicured suburb, explore <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> to discover the finest hotels, suites, and resorts."
        ],
        "experiences": [
            {
                "title": "Everglades Airboat Eco Tour: Small group & 2 Private Islands",
                "location": "Fort Lauderdale",
                "description": "An exciting airboat ride across the Florida Everglades, spotting alligators and native birds in their natural habitat.",
                "link": "https://gyg.me/ucvjoZHm"
            },
            {
                "title": "2 to 6 hours Private Yacht Cruise around Fort Lauderdale",
                "location": "Fort Lauderdale",
                "description": "A premium private yacht charter featuring a professional captain, custom route, and luxury amenities for your group.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Private-Yacht-Cruise-4-or-6-hours-around-Miami-Bay/d660-169162P11?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Fort Lauderdale Food & Drink Tour",
                "location": "Fort Lauderdale",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Craft-Food-Tour-Fort-Lauderdale/d660-46862P6?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Everglades: Semi-Private or Private Airboat Tour",
                "location": "Fort Lauderdale",
                "description": "An exciting airboat ride across the Florida Everglades, spotting alligators and native birds in their natural habitat.",
                "link": "https://gyg.me/CRWOtvZo"
            },
            {
                "title": "2 Person Mini Powerboat Fort Lauderdale Self-Guided Boat Rental",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/1-Hour-Mini-Powerboat-Rental/d660-104840P10?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-naples",
        "name": "Best Restaurants in Naples",
        "location": "Naples",
        "description": "Dine in Naples' premier waterfront and upscale destinations, featuring fresh local catches and sophisticated bistro fare.",
        "icon": "📍",
        "introParagraphs": [
            "Naples is a premier culinary hub on Florida’s paradise coast, showcasing refined waterfront dining, oceanfront grilles, and upscale bistros.",
            "Our selection process highlights Naples eateries that excel in fresh seafood execution, quality of ingredients, and beautiful coastal ambiance.",
            "Whether enjoying fresh local catches on a patio or a fine dining experience, these top Naples restaurants deliver memorable seaside meals. Complete your Gulf Coast getaway by visiting <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> to browse Naples' best luxury resorts and beachfront hotels."
        ],
        "experiences": [
            {
                "title": "Clear Kayak Guided Eco Tour in North Naples",
                "location": "Naples",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://www.viator.com/tours/Naples/Clear-Kayak-Tours-in-Bonita-Springs/d22381-277731P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Dolphin and Manatee Adventure Tour of Naples with Florida History",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Dolphin-and-Manatee-Adventure-Tour-of-Naples-with-Florida-History/d22381-39750P12?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Dolphin and Shelling Cruise for up to 12 people",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Ten-Thousand-Islands-Adventure-Boat-Tour/d22381-64741P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Manatee Sightseeing and Wildlife Boat Tour",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Manatee-Sightseeing-Eco-Tourism-Adventure/d22381-64829P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Sightseeing and Sunset Catamaran Sailing Excursion",
                "location": "Naples",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Naples/Sunset-and-Sightseeing-Day-Sail/d22381-188339P2?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-vero-beach",
        "name": "Best Restaurants in Vero Beach",
        "location": "Vero Beach",
        "description": "Discover Vero Beach's best local spots, featuring oceanfront grilles, breezy coastal taverns, and beachfront taco shacks.",
        "icon": "📍",
        "introParagraphs": [
            "Vero Beach offers a charming, laid-back coastal dining scene characterized by breezy seaside views, historic taverns, and friendly, local hospitality.",
            "We visited oceanfront grilles, beach resorts, and neighborhood taco shacks across Vero Beach to curate these top dining recommendations.",
            "Enjoy fresh, scratch-made coastal recipes and stunning beachfront vistas at these highly recommended Vero Beach dining favorites. Make it a perfect weekend beach retreat by exploring <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for the best local oceanfront resorts and hotels and accommodations."
        ],
        "experiences": [
            {
                "title": "Kickin' Kayaks Morning Wildlife Tour",
                "location": "Vero Beach",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://www.viator.com/tours/Vero-Beach/Morning-Kayak-Tour/d50900-5639510P3?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Clear Kayak Peanut Island Guided Tour Palm Beach Singer Island",
                "location": "Palm Beach",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://www.viator.com/tours/West-Palm-Beach/West-Palm-Beach-Peanut-Island-Clear-Kayak-Guided-Tour/d24204-5501364P4?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "West Palm Beach: Beginner Snorkel Tour with Turtles & Videos",
                "location": "Palm Beach",
                "description": "Dive into the crystal-clear waters of South Florida's reefs, swimming alongside sea turtles, rays, and vibrant tropical fish.",
                "link": "https://gyg.me/OIXCElkF"
            },
            {
                "title": "Sightseeing Hakuna Matata Catamaran Cruise in Palm Beach",
                "location": "Palm Beach",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/West-Palm-Beach/Sightseeing-Catamaran-Cruise/d24204-218537P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Manatee Sightseeing and Wildlife Boat Tour",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Manatee-Sightseeing-Eco-Tourism-Adventure/d22381-64829P1?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-brickell",
        "name": "Best Restaurants in Brickell",
        "location": "Brickell",
        "description": "Dine in Miami Brickell's top dining hotspots, featuring upscale waterfront dining, trendy rooftop Mexican concepts, and stylish bistros.",
        "icon": "📍",
        "introParagraphs": [
            "Miami's Brickell neighborhood is a high-energy financial hub with a world-class dining scene to match.",
            "We evaluated Brickell's top spots for menu innovation, waterfront scenery, and upscale culinary execution.",
            "From the waterfront sophistication of Cantina La Veinte to the rooftop vibes and tacos at Tacology, Brickell is a premier neighborhood for food lovers. If you're visiting this high-energy neighborhood, explore <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for top-rated luxury high-rise apartments and stylish design hotels."
        ],
        "experiences": [
            {
                "title": "The Escape Game at Brickell City Centre in Miami",
                "location": "Brickell",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/The-Escape-Game-in-Miami-60-Minute-Adventures/d662-472529P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Miami Biscayne Bay rich and famous Sightseeing Boat Tour",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Sightseeing-Cruise-of-Biscayne-Bay/d662-8836P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Little Havana Food and Walking Tour in Miami",
                "location": "Little Havana",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/Little-Havana-Food-and-Walking-Tour-in-Miami/d662-5304HAVANA?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Wynwood Graffiti Golf Cart Small-Group Tour",
                "location": "Wynwood",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Wynwood-Graffiti-Golf-Cart-Tour/d662-18774P7?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Jet ski Tour in Miami with Boat Ride",
                "location": "Miami",
                "description": "A high-speed jet ski adventure exploring the bays and coastlines, checking out sandbars and local sights.",
                "link": "https://www.viator.com/tours/Miami/Speed-and-Sun-Ultimate-Jetski-in-Miami/d662-118441P7?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-coral-gables",
        "name": "Best Restaurants in Coral Gables",
        "location": "Coral Gables",
        "description": "Savor Coral Gables' historic Miracle Mile gems, featuring legendary pubs, refined American grills, and cozy neighborhood hangouts.",
        "icon": "📍",
        "introParagraphs": [
            "Coral Gables offers a historic, canopy-shaded dining district along Miracle Mile and Giralda Avenue, filled with timeless local favorites.",
            "We evaluated Coral Gables favorites for their nostalgic charm, friendly neighborhood service, and consistent culinary quality.",
            "Explore Giralda Avenue's historic pub landmarks like The Bar, or Miracle Mile favorites like Hillstone and JohnMartin's. For those looking to explore more of the City Beautiful, check out <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for hotels and historic lodging options."
        ],
        "experiences": [
            {
                "title": "Miami: Little Havana Food and Culture Walking Tour",
                "location": "Little Havana",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/Little-Havana-Food-and-Culture-Walking-Tour-Food-Cigars-Mojitos-and-more/d662-381607P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Miami Biscayne Bay rich and famous Sightseeing Boat Tour",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Sightseeing-Cruise-of-Biscayne-Bay/d662-8836P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Private Luxury Yacht",
                "location": "Miami",
                "description": "A premium private yacht charter featuring a professional captain, custom route, and luxury amenities for your group.",
                "link": "+ 2 free Jet Skis"
            },
            {
                "title": "Miami City Tours - 5 Sites, 4 Stops, One Tour - 3.5 Hours of Fun",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Miami-City-Tour/d662-5493174P5?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Speedboat Sightseeing Adventure of Miami",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Speedboat-Sightseeing-Tour-in-Miami/d662-35834P1?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    }
];

const ARTICLES_DATA = [
    {
        "id": "how-we-curate",
        "title": "How We Curate SoFloBites Restaurant Lists",
        "excerpt": "A peek behind the curtain at our review process, evaluation standards, and how we keep our selections authentic, local, and honest.",
        "content": "<p>At SoFlo Bites, we believe that restaurant recommendations should be built on honesty, personal experience, and respect for our local community. Too many online food guides are compiled by remote editors scraping old Yelp reviews or algorithms tracking social media popularity. We do things differently: we walk through the doors, check out the atmosphere, and order from the menu just like any regular guest.</p><h2>Our Core Evaluation Criteria</h2><p>Our review process centers on four key pillars that determine whether a restaurant earns a spot in our directory:</p><ul><li><strong>Flavor & Culinary Execution:</strong> We look for dishes prepared with care and high-quality ingredients. Whether it is a slow-simmered ragu, a wood-fired pizza crust, or a simple street taco, the flavors must be balanced and memorable.</li><li><strong>Everyday Value:</strong> Extraordinary flavor shouldn't require a second mortgage. We focus on spots that offer great food at reasonable price levels, ensuring our guide is accessible to everyone.</li><li><strong>Ambiance & Seating Comfort:</strong> We evaluate noise levels, spacing between tables, and overall comfort. A great date-night spot needs warm, intimate lighting; a family-friendly spot needs stroller room and a welcoming, flexible vibe.</li><li><strong>Consistency:</strong> A restaurant must deliver a great experience every time, not just on opening night. We check on spots repeatedly and gather local feedback to ensure consistent quality.</li></ul><h2>Keeping it Local and Independent</h2><p>We are local food enthusiasts who live, work, and eat right here in South Florida. We pay for our own meals and do not accept free food or sponsored reviews in exchange for listings. This independence allows us to write honest reviews that you can trust. We also review and update our directory constantly, adding newly discovered gems and adjusting existing lists to reflect the current dining scene. Thank you for supporting our guide and joining us in celebrating South Florida's rich and diverse culinary community!</p><h2>Local Insight & Community Feedback</h2><p>While our team personally visits and evaluates every restaurant, we know that the best dining guides are collaborative. That is why we actively listen to local residents who eat at these spots every day, regularly revisit restaurants to ensure their standards haven't slipped, and incorporate direct community recommendations into our reviews. By combining our professional evaluation standards with real, on-the-ground community insights, we keep our directory honest, current, and genuinely reflective of South Florida's best dining.</p><p>Planning a trip to sample these curated spots? Browse <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> to find the best hotels, resorts, and local stays in South Florida.</p>"
    },
    {
        "id": "food-neighborhoods",
        "title": "Best Neighborhoods for Food Lovers in South Florida",
        "excerpt": "A culinary tour of South Florida’s most exciting dining neighborhoods, highlighting what makes each dining hub unique.",
        "content": "<p>South Florida's culinary landscape is a rich mosaic, with different neighborhoods showcasing distinct culinary identities. Whether you are looking for upscale waterfront dining, historic pub crawls, or family-centric suburban plazas, our neighborhood food guide highlights the best areas for food lovers to explore.</p><h2>Brickell: Upscale Waterfront & Trendy Dining</h2><p>Miami's Brickell neighborhood is a sleek financial district with a world-class dining scene. Overlooking the water, you can enjoy sophisticated Mexican seafood at <a href=\"/restaurants/cantina-la-veinte\" class=\"editorial-restaurant-link\">Cantina La Veinte</a>, or head to Brickell City Centre for the trendy, open-air Mexican concept <a href=\"/restaurants/tacology-brickell\" class=\"editorial-restaurant-link\">Tacology</a>. It is the perfect neighborhood for stylish dinners and vibrant city vibes.</p><h2>Coral Gables: Canopy-Shaded Historic Eateries</h2><p>Coral Gables offers a timeless charm, with canopy-shaded streets like Miracle Mile and Giralda Avenue hosting legendary dining spots. It's a neighborhood defined by history and consistency, home to Giralda Avenue's historic pub landmark <a href=\"/restaurants/the-bar-coral-gables\" class=\"editorial-restaurant-link\">The Bar</a> (serving Gables locals since 1946), <a href=\"/restaurants/hillstone-coral-gables\" class=\"editorial-restaurant-link\">Hillstone</a>, and the newly renovated <a href=\"/restaurants/johnmartins-irish-pub\" class=\"editorial-restaurant-link\">JohnMartin’s Restaurant & Bar</a>.</p><h2>Pembroke Pines: Suburban Gastropub Hub</h2><p>Pembroke Pines has transformed from a quiet suburb into one of the region's most vibrant dining hubs. Centered around the Shops at Pembroke Gardens, you can find a diverse selection of excellent spots, including oak-grilled specialties at <a href=\"/restaurants/brimstone-pines\" class=\"editorial-restaurant-link\">Brimstone Woodfire Grill</a>, craft beers and tavern fare at <a href=\"/restaurants/the-pub-pembroke\" class=\"editorial-restaurant-link\">The Pub</a>, and fermentation-forward sourdough pizzas at <a href=\"/restaurants/lb-eatery\" class=\"editorial-restaurant-link\">LB Eatery & Wine</a>.</p><h2>Vero Beach: Laid-Back Coastal Eats</h2><p>Vero Beach is the ultimate destination for relaxed, oceanfront dining. It offers a slower pace of life where the focus is on fresh local catches and seaside breezes. Recommended spots include the beachfront elegance of <a href=\"/restaurants/citrus-grillhouse\" class=\"editorial-restaurant-link\">Citrus Grillhouse</a>, the casual pooldeck bites at <a href=\"/restaurants/cabana-bar\" class=\"editorial-restaurant-link\">Cabana Bar</a>, and the breezy tropical tavern deck at <a href=\"/restaurants/mulligans-beach-house\" class=\"editorial-restaurant-link\">Mulligan's Beach House</a>.</p><h2>Weston: Suburban Culinary Hotspot</h2><p>Weston has quickly emerged as a premier dining destination in Broward County, offering a sophisticated mix of international cuisines and trendy boutique spaces. Highlights include the globally inspired dining room and raw bar at <a href=\"/restaurants/negroni-weston\" class=\"editorial-restaurant-link\">Negroni</a>, the boutique flower-draped garden vibe and organic eggs at <a href=\"/restaurants/little-hen-weston\" class=\"editorial-restaurant-link\">Little Hen</a>, and the mouth‑watering, award‑winning burgers at <a href=\"/restaurants/la-birra-bar\" class=\"editorial-restaurant-link\">La Birra Bar</a>. It is a perfect neighborhood for food lovers seeking premium quality in a relaxed, beautifully landscaped suburban setting.</p><p>If you're embarking on a food tour across these amazing neighborhoods, make it a perfect getaway by booking your accommodations with <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>, featuring hand-picked beach resorts and luxury stays.</p>"
    },
    {
        "id": "local-dishes",
        "title": "10 Local Dishes You Must Try in South Florida",
        "excerpt": "From award-winning gourmet burgers to star-shaped artisanal pizzas, these are the iconic local dishes you cannot miss.",
        "content": "<p>South Florida's dining scene is defined by standout signature creations that capture the creativity and passion of our local chefs. If you are exploring the region, make sure these 10 iconic, must-try dishes are on your radar:</p><ol><li><strong>Star-Shaped Ricotta Pizzas (<a href=\"/restaurants/mister-o1\" class=\"editorial-restaurant-link\">Mister 01</a>):</strong> A playful and award-winning creation where each point of the thin, crisp crust is folded and filled with creamy ricotta cheese.</li><li><strong>Drunken Shrimp (<a href=\"/restaurants/coopers-hawk-pines\" class=\"editorial-restaurant-link\">Cooper’s Hawk</a>):</strong> Premium shrimp wrapped in smoky bacon, cooked crisp, and served with a rich, tequila-infused lime butter sauce.</li><li><strong>Spinach Tagliolini (<a href=\"/restaurants/citrus-grillhouse\" class=\"editorial-restaurant-link\">Citrus Grillhouse</a>):</strong> Fine spinach-infused pasta tossed in roasted garlic butter, fresh spinach leaves, and finished with freshly grated Parmesan overlooking the ocean.</li><li><strong>Chicken & Pork Gyoza (<a href=\"/restaurants/tanuki-river-landing\" class=\"editorial-restaurant-link\">Tanuki</a>):</strong> Perfectly seared pan-Asian gyoza dumplings, packed with savory flavor and served with a custom dipping sauce.</li><li><strong>Eggs Benedict (<a href=\"/restaurants/little-hen-weston\" class=\"editorial-restaurant-link\">Little Hen</a>):</strong> Flawlessly poached organic eggs served on toasted muffins with rich hollandaise inside a gorgeous, flower-draped boutique dining room.</li><li><strong>The Bar Burger (<a href=\"/restaurants/the-bar-coral-gables\" class=\"editorial-restaurant-link\">The Bar</a>):</strong> A Coral Gables legend, featuring a perfectly grilled beef patty topped with classic pub fixings in a historic, cozy pub setting.</li><li><strong>Gourmet Skillet Pancakes (<a href=\"/restaurants/chugs-diner\" class=\"editorial-restaurant-link\">Chug’s Diner</a>):</strong> Thicker, fluffy diner-style skillet pancakes served with whipped butter and warm maple syrup.</li><li><strong>Award-Winning Burgers (<a href=\"/restaurants/la-birra-bar\" class=\"editorial-restaurant-link\">La Birra Bar</a>):</strong> Crafted with proprietary beef blends and house-baked cloud-like buns, designed to melt in your mouth.</li><li><strong>Charcoal-Grilled Carne Asada Tacos (<a href=\"/restaurants/el-sid-taqueria\" class=\"editorial-restaurant-link\">El Sid Taqueria</a>):</strong> Authentic, highly rated street tacos served on warm corn tortillas with fresh cilantro, chopped onions, and lime.</li><li><strong>Moscow Savory Crepe (<a href=\"/restaurants/saffrano-crepes\" class=\"editorial-restaurant-link\">Saffrano Crepes & Coffee</a>):</strong> Paper-thin, freshly cooked crepe filled with savory meats, cheese, and vegetables in Plantation.</li></ol><p>Ready to try these iconic local dishes? Turn your culinary crawl into a relaxing vacation by booking a local stay or seaside hotel or resort on <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>.</p>"
    },
    {
        "id": "pembroke-pines-guide",
        "title": "A Local’s Guide to Eating in Pembroke Pines",
        "excerpt": "How a family-friendly suburb became one of South Florida’s most vibrant and diverse dining destinations.",
        "content": "<p>For years, Pembroke Pines was known primarily as a quiet, family-friendly residential suburb. But over the last decade, a quiet culinary revolution has taken place. Today, Pembroke Pines boasts one of the most diverse, high-quality, and accessible dining scenes in South Florida, drawing food lovers from all over Broward and Miami-Dade counties.</p><h2>The Shops at Pembroke Gardens: The Dining Epicenter</h2><p>The majority of Pembroke Pines' top culinary destinations are clustered around the beautiful open-air Shops at Pembroke Gardens. This lifestyle center offers a walkable, beautifully landscaped setting that makes dining out feel like an event. Here are the spots you cannot miss:</p><ul><li><strong><a href=\"/restaurants/brimstone-pines\" class=\"editorial-restaurant-link\">Brimstone Woodfire Grill</a>:</strong> Known for its massive brick fire hearth, Brimstone delivers premium oak-grilled steaks, fresh seafood, and bold American comfort classics.</li><li><strong><a href=\"/restaurants/the-pub-pembroke\" class=\"editorial-restaurant-link\">The Pub</a>:</strong> A British-inspired tavern featuring a self-pour draft wall, bangers & mash, and a lively outdoor patio perfect for happy hour gatherings.</li><li><strong><a href=\"/restaurants/lb-eatery\" class=\"editorial-restaurant-link\">LB Eatery & Wine</a>:</strong> A unique, fermentation-forward dining concept specializing in hand-stretched sourdough pizzas, silky house-made pastas, and a curated natural wine selection.</li><li><strong><a href=\"/restaurants/coopers-hawk-pines\" class=\"editorial-restaurant-link\">Cooper's Hawk Winery & Restaurant</a>:</strong> A sophisticated American concept designed around wine pairings, complete with a full wine-tasting room.</li><li><strong><a href=\"/restaurants/ra-sushi-bar\" class=\"editorial-restaurant-link\">Ra Sushi Bar</a>:</strong> A high-energy sushi destination offering creative rolls, fresh sashimi, and custom cocktails in a modern setting.</li></ul><h2>Gourmet Gems Along Pines Boulevard</h2><p>Just outside the shopping complex, Pembroke Pines continues to deliver exceptional culinary options. Highlights include <strong><a href=\"/restaurants/mister-o1\" class=\"editorial-restaurant-link\">Mister 01</a></strong>, famous for its star-shaped artisanal Neapolitan pizzas, and <strong><a href=\"/restaurants/embarcadero-41\" class=\"editorial-restaurant-link\">Embarcadero 41</a></strong>, which offers a high-energy environment for authentic Peruvian ceviches, seafood, and custom pisco sours. Pembroke Pines' combination of easy parking, beautiful outdoor seating, and exceptional culinary variety makes it a must-visit dining destination for locals and visitors alike.</p><p>Visiting Pembroke Pines for a culinary adventure? Explore comfortable local lodging and suites nearby on <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>.</p>"
    }
];
const BEST_OF_CATEGORIES = [
    {
        "id": "best-italian",
        "name": "Best Italian Restaurants In South Florida",
        "tag": "Italian",
        "description": "Indulge in hand-rolled pastas, artisanal wood-fired pizzas, and classic family recipes crafted by top chefs.",
        "icon": "🍝",
        "introParagraphs": [
            "Italian dining in South Florida has evolved into a vibrant culinary landscape, offering everything from rustic, family-run trattorias to high-end contemporary pasta bars. The secret to great Italian food lies in respect for tradition, simplicity of ingredients, and the craftsmanship of making dough and slow-simmered sauces from scratch.",
            "To curate this list, we evaluated local spots for their culinary execution, consistency of flavors, and the warmth of their hospitality — because a great Italian dinner is as much about feeling like family as it is about the food. We paid close attention to house-made specialties, from the star-shaped pizzas at Mister 01 to the artisanal hand-crafted pasta dishes at Il Pastaio di Eataly.",
            "Whether you're looking for a romantic candlelit dinner or a lively family gathering, these Italian spots deliver unforgettable dining experiences. Explore our sister site <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for accommodations to round out your culinary road trip."
        ],
        "experiences": [
            {
                "title": "South Beach Cultural Food and Walking Tour",
                "location": "Miami Beach",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/South-Beach-Cultural-Food-and-Walking-Tour/d662-5304FOOD?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Little Havana Food and Walking Tour in Miami",
                "location": "Little Havana",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/Little-Havana-Food-and-Walking-Tour-in-Miami/d662-5304HAVANA?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Fort Lauderdale Food & Drink Tour",
                "location": "Fort Lauderdale",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Craft-Food-Tour-Fort-Lauderdale/d660-46862P6?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "#1 VENICE OF AMERICA TOUR - Cold A/C 115' LARGEST IN LAUDERDALE!",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Venice-of-America-Fort-Lauderdale-Cruise/d660-57834P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Classic Key West Schooner Sunset Sail with Full Open Bar",
                "location": "Key West",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Key-West/Classic-Key-West-Schooner-Sunset-Sail-with-Full-Open-Bar/d661-5508814P4?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-pizza",
        "name": "Best Pizza Spots In South Florida",
        "tag": "Pizza",
        "description": "Discover exceptional wood-fired Neapolitan pies, star-shaped signature crusts, and crisp sourdough slices.",
        "icon": "🍕",
        "introParagraphs": [
            "Finding the perfect slice of pizza is a universal quest, and South Florida offers an impressive array of artisanal pizza styles. From thin, crispy Neapolitan crusts baked in wood-burning ovens to innovative fermentation-forward sourdough crusts, local pizzaiolos are elevating simple dough into gourmet art.",
            "To curate this list, we evaluated local pizzerias for crust texture, quality of ingredients (like imported San Marzano tomatoes and fresh mozzarella), and consistency of bake. We featured inventive spots like Mister 01, famous for its ricotta-stuffed star-shaped crusts, and LB Eatery & Wine, celebrated for its unique sourdough crust pizzas.",
            "These pizza spots are perfect for casual family dinners, date nights, or quick weekend lunches. If you are planning a local staycation, browse <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for beachfront beachfront hotel escapes."
        ],
        "experiences": [
            {
                "title": "3 HR Peanut Island Sandbar & Swim Tour",
                "location": "Palm Beach",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://gyg.me/gsPJDfVr"
            },
            {
                "title": "2 Person Mini Powerboat Fort Lauderdale Self-Guided Boat Rental",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/1-Hour-Mini-Powerboat-Rental/d660-104840P10?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "The Escape Game at Brickell City Centre in Miami",
                "location": "Brickell",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/The-Escape-Game-in-Miami-60-Minute-Adventures/d662-472529P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Wynwood Graffiti Golf Cart Small-Group Tour",
                "location": "Wynwood",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Wynwood-Graffiti-Golf-Cart-Tour/d662-18774P7?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Raccoon Island Miami Boat Tour with Wildlife & Swimming",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Miami-Raccoon-Island-Adventure/d662-10150P16?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-seafood",
        "name": "Best Seafood Restaurants In South Florida",
        "tag": "Seafood",
        "description": "Enjoy the freshest catches of the day, premium raw bars, and scenic coastal dining overlooking South Florida's shores.",
        "icon": "🦐",
        "introParagraphs": [
            "With miles of coastline and a rich maritime history, South Florida is a seafood lover’s paradise. The best seafood dining combines absolute freshness, expert preparation that highlights natural flavors, and a welcoming coastal atmosphere.",
            "To curate this list, we visited beachfront grilles, marina-side taverns, and upscale dining rooms. We evaluated each restaurant on fish sourcing, consistency of preparation, and service. Standout selections include the oceanfront dining at Citrus Grillhouse and the breezy waterfront favorites like Mulligan’s Beach House and Tanuki River Landing.",
            "These seafood spots are perfect for scenic lunches, sunset dinners, and weekend outings. Make it a complete seaside escape by browsing curated coastal resorts on <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>."
        ],
        "experiences": [
            {
                "title": "Miami Biscayne Bay rich and famous Sightseeing Boat Tour",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Sightseeing-Cruise-of-Biscayne-Bay/d662-8836P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Dolphin and Shelling Cruise for up to 12 people",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Ten-Thousand-Islands-Adventure-Boat-Tour/d22381-64741P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Sightseeing and Sunset Catamaran Sailing Excursion",
                "location": "Naples",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Naples/Sunset-and-Sightseeing-Day-Sail/d22381-188339P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Sightseeing Hakuna Matata Catamaran Cruise in Palm Beach",
                "location": "Palm Beach",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/West-Palm-Beach/Sightseeing-Catamaran-Cruise/d24204-218537P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Beach Island Shelling Cruise to Keewaydin Island Tour",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Beach-Island-Shelling-Cruise-to-Keewaydin-Island/d22381-172638P3?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-brunch",
        "name": "Best Brunch Spots In South Florida",
        "tag": "Brunch",
        "description": "Indulge in sweet skillet pancakes, savory eggs benedict, and bottomless mimosas in gorgeous, relaxed dining spaces.",
        "icon": "🥞",
        "introParagraphs": [
            "Brunch is more than a meal — it’s a weekend ritual. It’s the perfect time to slow down, reconnect with friends, and indulge in sweet pancakes, savory eggs benedict, or classic brunch cocktails. South Florida’s brunch scene is diverse, ranging from garden cafés to chef‑driven bistros, but not all brunch spots deliver the relaxed, welcoming atmosphere that makes brunch special.",
            "To curate this list, we visited cafés and restaurants across the region, evaluating their morning classics, ingredient quality, and overall vibe. We looked for spots that offer both comfort and creativity, from the eggs benedicts at Little Hen to the gourmet skillet pancakes at Chug’s Diner. We also checked for patio seating, wait times, and menu variety — because brunch should feel effortless, not chaotic.",
            "These brunch favorites are perfect for weekend gatherings, celebratory mornings, or simply treating yourself to a slow, delicious start to the day. And if you’re planning a brunch‑themed staycation, explore <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for hotels and charming local accommodations."
        ],
        "experiences": [
            {
                "title": "Beach Yoga & Tea Experience on South Beach",
                "location": "Miami Beach",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Yoga-Experience-in-stunning-South-Pointe-Park/d662-250325P4?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Clear Kayak Peanut Island Guided Tour Palm Beach Singer Island",
                "location": "Palm Beach",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://www.viator.com/tours/West-Palm-Beach/West-Palm-Beach-Peanut-Island-Clear-Kayak-Guided-Tour/d24204-5501364P4?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Fort Lauderdale Beach Food Tour",
                "location": "Fort Lauderdale",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Craft-Food-Tour-in-Ft-Lauderdale-Beach/d660-46862P7?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Key West: 2-hour Mangrove Kayak Tour",
                "location": "Key West",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://gyg.me/9sp50XPv"
            },
            {
                "title": "Kickin' Kayaks Morning Wildlife Tour",
                "location": "Vero Beach",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://www.viator.com/tours/Vero-Beach/Morning-Kayak-Tour/d50900-5639510P3?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-mexican",
        "name": "Best Mexican Restaurants In South Florida",
        "tag": "Mexican",
        "description": "Savor authentic charcoal-grilled street tacos, fresh hand-mashed guacamole, and hand-crafted margaritas.",
        "icon": "🌮",
        "introParagraphs": [
            "The Mexican dining scene in South Florida ranges from vibrant, casual street taco stands to high-end rooftop dining lounges. The hallmark of great Mexican food lies in bold spices, house-made salsas, and fresh corn tortillas made to order.",
            "To curate this list, we visited local taquerias and dining rooms across the region. We evaluated them for their flavor authenticity, ingredient quality, and dining atmosphere. Standout spots include the highly rated street tacos at El Gallo Taqueria in Weston and the trendy waterfront dining experience at Tacology in Brickell.",
            "Whether you're seeking a casual lunch or a lively night out with friends, these Mexican restaurants deliver exceptional food and drinks. Planning a getaway? Check out <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for curated hotel recommendations."
        ],
        "experiences": [
            {
                "title": "A Taste of South Beach Food Tour",
                "location": "Miami Beach",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/South-Beach-Food-Tour/d662-18037P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Miami: Little Havana Food and Culture Walking Tour",
                "location": "Little Havana",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/Little-Havana-Food-and-Culture-Walking-Tour-Food-Cigars-Mojitos-and-more/d662-381607P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Miami Biscayne Bay Jet Ski Tour",
                "location": "Miami",
                "description": "A high-speed jet ski adventure exploring the bays and coastlines, checking out sandbars and local sights.",
                "link": "https://www.viator.com/tours/Miami/Biscayne-Bay-Jet-Ski-Tour/d662-7943P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Fort Lauderdale Food & Drink Tour",
                "location": "Fort Lauderdale",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Craft-Food-Tour-Fort-Lauderdale/d660-46862P6?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "The Original Key West Island Jet Ski Tour from Barefoot Billy's",
                "location": "Key West",
                "description": "A high-speed jet ski adventure exploring the bays and coastlines, checking out sandbars and local sights.",
                "link": "https://www.viator.com/tours/Key-West/The-Original-Key-West-Island-Jet-Ski-Tour-from-the-Casa-Marina/d661-287482P4?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-asian",
        "name": "Best Asian Restaurants In South Florida",
        "tag": "Asian",
        "description": "Experience premium pan-Asian plates, fresh hand-rolled sushi, and hot gyoza in stunning, high-design settings.",
        "icon": "🥢",
        "introParagraphs": [
            "South Florida's pan-Asian dining scene features an impressive range of regional specialties, including Japanese, Chinese, Thai, and Peruvian-Nikkei fusion. From high-energy waterfront lounges to cozy neighborhood strip-mall secrets, these spots emphasize fresh ingredients and bold, complex flavors.",
            "To curate this list, we evaluated local restaurants based on menu creativity, cooking technique, and atmosphere. We highlighted exceptional spots like Tanuki River Landing, known for its scenic riverfront setting and pan-Asian plates, and Ohana in Doral, celebrated for its unique Japanese-Peruvian Nikkei rolls.",
            "These Asian restaurants are ideal for trendy date nights, celebratory family dinners, or upscale weekend meals. Discover curated lodging nearby at <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>."
        ],
        "experiences": [
            {
                "title": "A Taste of South Beach Food Tour",
                "location": "Miami Beach",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/South-Beach-Food-Tour/d662-18037P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "South Beach Cultural Food and Walking Tour",
                "location": "Miami Beach",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/South-Beach-Cultural-Food-and-Walking-Tour/d662-5304FOOD?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Miami Biscayne Bay Jet Ski Tour",
                "location": "Miami",
                "description": "A high-speed jet ski adventure exploring the bays and coastlines, checking out sandbars and local sights.",
                "link": "https://www.viator.com/tours/Miami/Biscayne-Bay-Jet-Ski-Tour/d662-7943P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Fort Lauderdale Food & Drink Tour",
                "location": "Fort Lauderdale",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Craft-Food-Tour-Fort-Lauderdale/d660-46862P6?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Private Miami Boat Charter: Sightseeing, Sunset & Sandbar",
                "location": "Miami",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Miami/Private-Tour-Miami-Boat-Rental/d662-328105P2?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-pasta",
        "name": "Best Pasta Restaurants In South Florida",
        "tag": "Pasta",
        "description": "Enjoy silky house-made tagliatelle, authentic cacio e pepe, and hand-rolled ravioli prepared fresh daily.",
        "icon": "🍝",
        "introParagraphs": [
            "There is nothing quite like the comforting luxury of fresh, house-made pasta. South Florida has seen a renaissance of pasta-forward restaurants, where chefs handcraft dough using imported Italian flour and traditional slow-cooked sauces.",
            "To curate this list, we evaluated local eateries on pasta texture, sauce balance, and execution. We highlighted top locations like Il Pastaio di Eataly, which offers a front-row seat to watch pasta-making, and Caffe Milano in Miami Beach for its classic, comforting Italian specialties.",
            "These pasta spots are perfect for cozy dinners, family meals, and celebratory outings. Planning a culinary staycation? Check out <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for beachfront hotels and retreats."
        ],
        "experiences": [
            {
                "title": "South Beach Cultural Food and Walking Tour",
                "location": "Miami Beach",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/South-Beach-Cultural-Food-and-Walking-Tour/d662-5304FOOD?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Little Havana Food and Walking Tour in Miami",
                "location": "Little Havana",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Miami/Little-Havana-Food-and-Walking-Tour-in-Miami/d662-5304HAVANA?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Fort Lauderdale Food & Drink Tour",
                "location": "Fort Lauderdale",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Craft-Food-Tour-Fort-Lauderdale/d660-46862P6?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "#1 VENICE OF AMERICA TOUR - Cold A/C 115' LARGEST IN LAUDERDALE!",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Venice-of-America-Fort-Lauderdale-Cruise/d660-57834P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Classic Key West Schooner Sunset Sail with Full Open Bar",
                "location": "Key West",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Key-West/Classic-Key-West-Schooner-Sunset-Sail-with-Full-Open-Bar/d661-5508814P4?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-comfort-food",
        "name": "Best Comfort Food Spots In South Florida",
        "tag": "Comfort Food",
        "description": "Warm your soul with gourmet burgers, bangers & mash, crispy wings, and hearty Cuban-American diner classics.",
        "icon": "🍗",
        "introParagraphs": [
            "Comfort food is all about nostalgia, warmth, and satisfying flavors. In South Florida, comfort food takes many forms, from traditional British pub fare to homestyle Cuban diner plates and award-winning American smash burgers.",
            "To curate this list, we visited local neighborhood joints, diners, and pubs, evaluating their food quality, heartiness, and friendly hospitality. We selected standout favorites like Chug’s Diner for its Bib Gourmand Cuban-American comfort plates, and The Pub in Pembroke Pines for classic fish & chips and shepherd’s pie.",
            "These comfort food spots are perfect for casual dinners, weekend family lunches, or laid-back evenings out. Explore hotels and local stays across South Florida on <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>."
        ],
        "experiences": [
            {
                "title": "Everglades Airboat Tour from Fort Lauderdale with transportation",
                "location": "Fort Lauderdale",
                "description": "An exciting airboat ride across the Florida Everglades, spotting alligators and native birds in their natural habitat.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Florida-Everglades-Airboat-Tour-and-Show-from-Fort-Lauderdale-Group/d660-5865P8?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Jungle Queen Riverboat 90-Minute Narrated Sightseeing Cruise in Fort Lauderdale",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/90-Minute-Narrated-Sightseeing-Cruises/d660-3160P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Key West Hop-On Hop-Off Trolley Tour",
                "location": "Key West",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Key-West/Key-West-Hop-On-Hop-Off-Trolley-Tour/d661-5046KEY_OTT?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Key West Dolphin Watch and Snorkel Tour - Eco Adventure",
                "location": "Key West",
                "description": "Dive into the crystal-clear waters of South Florida's reefs, swimming alongside sea turtles, rays, and vibrant tropical fish.",
                "link": "https://www.viator.com/tours/Key-West/Key-West-Dolphin-Watch-and-Snorkel-Cruise/d661-5264DC?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Raccoon Island Miami Boat Tour with Wildlife & Swimming",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Miami-Raccoon-Island-Adventure/d662-10150P16?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-healthy-eats",
        "name": "Best Healthy Eats In South Florida",
        "tag": "Healthy Eats",
        "description": "Feed your body with organic juices, fresh grain bowls, and vibrant, nutrient-dense seasonal salads.",
        "icon": "🥗",
        "introParagraphs": [
            "Healthy eating doesn't have to mean sacrificing flavor or creativity. South Florida offers fantastic health-focused spots that prioritize organic, raw, and fermentation-forward ingredients to deliver vibrant, delicious meals that leave you feeling energized.",
            "To curate this list, we evaluated local juice bars, cafés, and clean-eating spots. We focused on ingredient quality, menu variety, and freshness. Standouts include the organic juices and fresh wraps at Joe & The Juice, and the seasonal, fermentation-forward plates at LB Eatery & Wine.",
            "These spots are perfect for nourishing breakfasts, energizing lunches, or light dinners. If you are exploring the coast, check out wellness-oriented hotels on <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>."
        ],
        "experiences": [
            {
                "title": "Beach Yoga & Tea Experience on South Beach",
                "location": "Miami Beach",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Yoga-Experience-in-stunning-South-Pointe-Park/d662-250325P4?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Clear Kayak Guided Eco Tour in North Naples",
                "location": "Naples",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://www.viator.com/tours/Naples/Clear-Kayak-Tours-in-Bonita-Springs/d22381-277731P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Dolphin and Manatee Adventure Tour of Naples with Florida History",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Dolphin-and-Manatee-Adventure-Tour-of-Naples-with-Florida-History/d22381-39750P12?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Key West: 2-hour Mangrove Kayak Tour",
                "location": "Key West",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://gyg.me/9sp50XPv"
            },
            {
                "title": "Kickin' Kayaks Morning Wildlife Tour",
                "location": "Vero Beach",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://www.viator.com/tours/Vero-Beach/Morning-Kayak-Tour/d50900-5639510P3?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-happy-hour",
        "name": "Best Happy Hour Spots In South Florida",
        "tag": "Happy Hour",
        "description": "Unwind with signature craft cocktails, premium draft beers, and delicious shareable small plates.",
        "icon": "🍹",
        "introParagraphs": [
            "A great happy hour is the perfect transition from a busy day to a relaxing evening. It requires the right combination of creative drinks, high-quality bar bites, friendly service, and a social, upbeat atmosphere.",
            "To curate this list, we evaluated local bars, pubs, and grills. We focused on pricing, menu selection, and vibe. We highlighted favorite destinations like the self-pour draft wall at The Pub, the woodfire grill happy hour at Brimstone, and the historic community atmosphere at The Bar in Coral Gables.",
            "These happy hour spots are perfect for catching up with colleagues, meeting friends, or starting a night out. Complete your evening out by booking a nearby hotel or resort stay through <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>."
        ],
        "experiences": [
            {
                "title": "Classic Key West Schooner Sunset Sail with Full Open Bar",
                "location": "Key West",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Key-West/Classic-Key-West-Schooner-Sunset-Sail-with-Full-Open-Bar/d661-5508814P4?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Fort Lauderdale Food & Drink Tour",
                "location": "Fort Lauderdale",
                "description": "A guided culinary walking tour sampling the neighborhood's best dishes and learning about its rich history.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Craft-Food-Tour-Fort-Lauderdale/d660-46862P6?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Key West Sunset Sail with Open Bar, Live Music and Hors D'oeuvres",
                "location": "Key West",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Key-West/Key-West-Sunset-Champagne-and-Appetizers-Cruise/d661-3800CAPSUNSAIL?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Key West Sunset Cruise: Dinner, Live Music & Drinks Included",
                "location": "Key West",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Key-West/Key-West-Sunset-Dinner-Cruise/d661-2642P6?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Fort Lauderdale: Millionaire's Row Cruise with Drinks",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://gyg.me/7zWSB15V"
            }
        ]
    },
    {
        "id": "best-trendy",
        "name": "Best Trendy Restaurants In South Florida",
        "tag": "Trendy",
        "description": "Experience South Florida's high-design hotspots, offering immersive atmospheres and chef-driven menus.",
        "icon": "✨",
        "introParagraphs": [
            "Trendy dining is about immersion — combining striking architecture, upbeat music, stylish crowds, and highly creative menus. These hotspots offer a multi-sensory dining experience that makes a simple night out feel like an event.",
            "To curate this list, we focused on venues that deliver exceptional flavor alongside their style. We highlighted top destinations like the plant-draped pergola terrace at Negroni, the high-design Nikkei sushi rolls at Ke-uH, and the energetic gastropub experience at Tap 42 in Aventura.",
            "These trendy spots are perfect for date nights, group gatherings, and weekend celebrations. Planning a stylish weekend? Browse curated design hotels on <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>."
        ],
        "experiences": [
            {
                "title": "Miami Beach: Private South Beach Airplane Tour with drinks",
                "location": "Miami Beach",
                "description": "Soar high above the coast on an unforgettable scenic flight, taking in aerial views of beaches and mansions.",
                "link": "https://www.viator.com/tours/Miami/40-Minutes-Private-Miami-Luxury-Airplane-Tour/d662-356283P4?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Private Miami Boat Charter: Sightseeing, Sunset & Sandbar",
                "location": "Miami",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Miami/Private-Tour-Miami-Boat-Rental/d662-328105P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "2 to 6 hours Private Yacht Cruise around Fort Lauderdale",
                "location": "Fort Lauderdale",
                "description": "A premium private yacht charter featuring a professional captain, custom route, and luxury amenities for your group.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Private-Yacht-Cruise-4-or-6-hours-around-Miami-Bay/d660-169162P11?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "South Beach Miami Aerial Tour : Beaches, Mansions and Skyline",
                "location": "Miami Beach",
                "description": "Soar high above the coast on an unforgettable scenic flight, taking in aerial views of beaches and mansions.",
                "link": "https://www.viator.com/tours/Miami/Private-South-Beach-Air-Tour-30-min/d662-305808P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Miami: 2 Hour Private Yacht Cruise",
                "location": "Miami",
                "description": "A premium private yacht charter featuring a professional captain, custom route, and luxury amenities for your group.",
                "link": "https://www.viator.com/tours/Miami/2-Hours-Tour-on-a-30-to-34-Ft-Boat-for-8-people/d662-169162P10?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-casual",
        "name": "Best Casual Dining In South Florida",
        "tag": "Casual",
        "description": "Relax and enjoy approachable American pub fare, fresh street tacos, and classic comfort food.",
        "icon": "🍔",
        "introParagraphs": [
            "Casual dining is the backbone of the local restaurant scene — offering welcoming environments, simple and delicious menus, and approachable service that makes you feel right at home without the need to dress up.",
            "To curate this list, we focused on spots that deliver big flavor in comfortable, everyday settings. We highlighted local neighborhood icons like Giralda Avenue's The Bar in Coral Gables, the beachside taco shacks of El Sid Taqueria, and the popular gastropub vibes at Tap 42 in Aventura.",
            "These casual spots are perfect for game nights, relaxed lunches, or spontaneous dinners. If you're planning a casual coastal road trip, explore charming accommodations on <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a>."
        ],
        "experiences": [
            {
                "title": "3 HR Peanut Island Sandbar & Swim Tour",
                "location": "Palm Beach",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://gyg.me/gsPJDfVr"
            },
            {
                "title": "2 Person Mini Powerboat Fort Lauderdale Self-Guided Boat Rental",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/1-Hour-Mini-Powerboat-Rental/d660-104840P10?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "The Escape Game at Brickell City Centre in Miami",
                "location": "Brickell",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/The-Escape-Game-in-Miami-60-Minute-Adventures/d662-472529P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Wynwood Graffiti Golf Cart Small-Group Tour",
                "location": "Wynwood",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Wynwood-Graffiti-Golf-Cart-Tour/d662-18774P7?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Raccoon Island Miami Boat Tour with Wildlife & Swimming",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Miami-Raccoon-Island-Adventure/d662-10150P16?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-family",
        "name": "Best Family-Friendly Restaurants In South Florida",
        "tag": "Family-friendly",
        "description": "Welcoming environments with generous portions, relaxed atmospheres, and crowds-pleasing menus. These eateries are perfect for large family dinners or weekend lunches.",
        "icon": "🍕",
        "introParagraphs": [
            "Dining out with family should feel joyful, not stressful — but finding a restaurant that satisfies toddlers, teens, and grandparents at the same time can be surprisingly difficult. Many “kid‑friendly” spots sacrifice food quality, while upscale restaurants often feel too formal or cramped for families. We believe family dining should offer both comfort and great food without compromise.",
            "To curate this list, we focused on restaurants that offer spacious seating, warm hospitality, and menus with broad appeal. We personally evaluated noise levels, stroller space, table comfort, and service speed — because families need environments that are forgiving, flexible, and welcoming. We also checked for delivery and takeout options for those nights when staying home is the better choice. From the great portions at Pizza Lovers to the gourmet burger varieties at La Birra Bar, these restaurants make dining out with a group feel like a treat rather than a chore.",
            "Whether you’re planning a weekend lunch, a birthday dinner, or a casual weeknight outing, these spots deliver quality food and a family‑friendly atmosphere. And if you’re planning a family getaway, explore <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for hotels with spacious rooms and kid‑friendly amenities."
        ],
        "experiences": [
            {
                "title": "Everglades Small-Group Tour from Miami with Transportation",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Everglades-Tour-from-Miami-with-Transportation/d662-21428P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Homestead: Everglades Alligator Farm Entry and Airboat Ride",
                "location": "Homestead",
                "description": "An exciting airboat ride across the Florida Everglades, spotting alligators and native birds in their natural habitat.",
                "link": "https://gyg.me/Hauj3X3o"
            },
            {
                "title": "The Escape Game at Brickell City Centre in Miami",
                "location": "Brickell",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/The-Escape-Game-in-Miami-60-Minute-Adventures/d662-472529P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Key West Hop-On Hop-Off Trolley Tour",
                "location": "Key West",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Key-West/Key-West-Hop-On-Hop-Off-Trolley-Tour/d661-5046KEY_OTT?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Dolphin and Manatee Adventure Tour of Naples with Florida History",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Dolphin-and-Manatee-Adventure-Tour-of-Naples-with-Florida-History/d22381-39750P12?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-hidden-gems",
        "name": "Best Hidden Gems In South Florida",
        "tag": "Hidden Gem",
        "description": "Unassuming strip-mall spots, cozy family-owned bistros, and places that focus entirely on scratch-made local flavors. These local secrets deserve to be on everyone's radar.",
        "icon": "💎",
        "introParagraphs": [
            "South Florida’s true culinary magic often hides in strip malls, industrial parks, and quiet neighborhood corners. These hidden gems don’t rely on flashy marketing or trendy décor — they rely on passion, authenticity, and unforgettable flavors. Discovering these places is one of the greatest joys of being a local food enthusiast, and it’s exactly why we created this list.",
            "We explored off‑the‑beaten‑path neighborhoods, listened to local recommendations, and visited family‑run kitchens that pour heart and soul into every dish. Each restaurant was evaluated for its scratch‑made recipes, unique flavors, and welcoming atmosphere. Spots like Tacu Taku Peruvian Kitchen and Rosalia’s Kitchen stood out for their dedication to quality and the warmth of their hospitality.",
            "Hidden gems are perfect for adventurous diners, comfort‑food lovers, and anyone seeking authentic local flavor. And if you love discovering under‑the‑radar hotels and hotel or resort stays, check out <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for curated lodging options across South Florida."
        ],
        "experiences": [
            {
                "title": "Wynwood Graffiti Golf Cart Small-Group Tour",
                "location": "Wynwood",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Wynwood-Graffiti-Golf-Cart-Tour/d662-18774P7?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Raccoon Island Miami Boat Tour with Wildlife & Swimming",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Miami-Raccoon-Island-Adventure/d662-10150P16?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Key West: 2-hour Mangrove Kayak Tour",
                "location": "Key West",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://gyg.me/9sp50XPv"
            },
            {
                "title": "Kickin' Kayaks Morning Wildlife Tour",
                "location": "Vero Beach",
                "description": "Paddle through tranquil mangrove tunnels and shallow waters, spotting marine life and local birds with an expert guide.",
                "link": "https://www.viator.com/tours/Vero-Beach/Morning-Kayak-Tour/d50900-5639510P3?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "4 Hour Private Ecotour and Snorkeling Boat Tour",
                "location": "Islamorada",
                "description": "Dive into the crystal-clear waters of South Florida's reefs, swimming alongside sea turtles, rays, and vibrant tropical fish.",
                "link": "https://www.viator.com/tours/Islamorada/Private-4-hour-Ecotour-and-Snorkeling-Boat-Tour/d23474-118084P3?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-date-night",
        "name": "Best Date Night Restaurants In South Florida",
        "tag": "Date Night",
        "description": "Intimate dining rooms, soft lighting, and attentive service. Create meaningful connections with our top-curated romantic dinner spots.",
        "icon": "💖",
        "introParagraphs": [
            "A great date night is about more than just choosing a restaurant — it’s about creating a moment. In a fast‑paced world, couples need spaces that feel intentional: warm lighting, comfortable seating, attentive service, and an atmosphere that encourages connection rather than distraction. South Florida has no shortage of dining options, but many “romantic” spots are either prohibitively expensive or too loud to enjoy a real conversation. We believe romance shouldn’t require shouting over music or paying luxury‑level prices for a simple dinner.",
            "To curate this list, we focused on restaurants that deliver a balanced combination of ambiance, quality, and comfort. We personally visited each location, noting details like lighting, noise levels, pacing of service, and the availability of reservations — because nothing kills a date night faster than a 45‑minute wait. We also sampled their recommended sharing dishes, from the elegant sushi rolls at Ke‑uH to the cozy Italian comfort plates at Pizza Lovers, ensuring each spot offers food that enhances the experience rather than distracts from it.",
            "Whether you’re planning a first date, celebrating an anniversary, or simply carving out time together, these restaurants offer the perfect backdrop for meaningful moments. And if you’re planning a romantic weekend getaway, you can explore our sister site <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for luxury hotels and beachfront escapes."
        ],
        "experiences": [
            {
                "title": "Miami Beach: Private South Beach Airplane Tour with drinks",
                "location": "Miami Beach",
                "description": "Soar high above the coast on an unforgettable scenic flight, taking in aerial views of beaches and mansions.",
                "link": "https://www.viator.com/tours/Miami/40-Minutes-Private-Miami-Luxury-Airplane-Tour/d662-356283P4?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "#1 VENICE OF AMERICA TOUR - Cold A/C 115' LARGEST IN LAUDERDALE!",
                "location": "Fort Lauderdale",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Fort-Lauderdale/Venice-of-America-Fort-Lauderdale-Cruise/d660-57834P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Classic Key West Schooner Sunset Sail with Full Open Bar",
                "location": "Key West",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Key-West/Classic-Key-West-Schooner-Sunset-Sail-with-Full-Open-Bar/d661-5508814P4?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Sightseeing and Sunset Catamaran Sailing Excursion",
                "location": "Naples",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Naples/Sunset-and-Sightseeing-Day-Sail/d22381-188339P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Private Miami Boat Charter: Sightseeing, Sunset & Sandbar",
                "location": "Miami",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Miami/Private-Tour-Miami-Boat-Rental/d662-328105P2?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        "id": "best-waterfront",
        "name": "Best Waterfront Restaurants In South Florida",
        "tag": "Waterfront",
        "description": "Take in gorgeous ocean, canal, or intracoastal water views. These recommendations combine excellent dining with scenic South Florida outdoor breeze.",
        "icon": "🌅",
        "introParagraphs": [
            "Dining by the water is one of South Florida’s greatest pleasures. Whether it’s watching yachts glide down a canal, listening to waves crash along the shoreline, or catching a golden sunset over the bay, waterfront dining captures the essence of our coastal lifestyle. But not all waterfront restaurants are created equal — many rely solely on their views, serving overpriced or mediocre food simply because of their location.",
            "Our selections highlight restaurants that excel in both scenery and culinary quality. We visited docks, canals, marinas, and beachfront patios across the region, evaluating each spot for food consistency, fair pricing, and the overall dining experience. We verified outdoor seating layouts, checked for shade and breeze comfort, and confirmed parking accessibility — because waterfront dining should feel relaxing, not stressful. From the oceanfront elegance of Citrus Grillhouse to the breezy tropical charm of Mulligan’s Beach House, each restaurant on this list offers memorable views paired with scratch‑made recipes.",
            "These spots are perfect for sunset dinners, celebratory meals, or weekend outings with family and friends. And if you’re planning a waterfront staycation, you can explore <a href=\"https://www.soflostays.co\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #0d9488; font-weight: 600; text-decoration: none; border-bottom: 1px dashed rgba(13, 148, 136, 0.4); padding-bottom: 1px;\">SoFlo Stays</a> for curated beachfront hotels and coastal resorts."
        ],
        "experiences": [
            {
                "title": "Miami Biscayne Bay rich and famous Sightseeing Boat Tour",
                "location": "Miami",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Miami/Sightseeing-Cruise-of-Biscayne-Bay/d662-8836P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Dolphin and Shelling Cruise for up to 12 people",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Ten-Thousand-Islands-Adventure-Boat-Tour/d22381-64741P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Sightseeing and Sunset Catamaran Sailing Excursion",
                "location": "Naples",
                "description": "Sail along the beautiful coastline at sunset, enjoying premium drinks, music, and breathtaking views of the horizon.",
                "link": "https://www.viator.com/tours/Naples/Sunset-and-Sightseeing-Day-Sail/d22381-188339P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Sightseeing Hakuna Matata Catamaran Cruise in Palm Beach",
                "location": "Palm Beach",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/West-Palm-Beach/Sightseeing-Catamaran-Cruise/d24204-218537P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                "title": "Beach Island Shelling Cruise to Keewaydin Island Tour",
                "location": "Naples",
                "description": "Discover the best sightseeing, wildlife, and natural beauty that South Florida has to offer on this guided tour.",
                "link": "https://www.viator.com/tours/Naples/Beach-Island-Shelling-Cruise-to-Keewaydin-Island/d22381-172638P3?pid=P00314010&mcid=42383&medium=link"
            }
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
    navigateTo("/#restaurant-grid");
}

// Back to Top Button logic
function setupBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });
    
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Redirect and pre-select feedback type
function goToFeedback(type) {
    const selectEl = document.getElementById("suggest-type");
    if (selectEl) {
        selectEl.value = type;
        selectEl.dispatchEvent(new Event('change'));
    }
    navigateTo("/#suggest-section");
}
window.goToFeedback = goToFeedback;

window.filterByTagAndGoHome = filterByTagAndGoHome;
function initBestOfSearch() {
    const input = document.getElementById("best-of-search-input");
    if (!input || input._hasSearchListener) return;
    input._hasSearchListener = true;
    input.addEventListener("input", (e) => {
        STATE.bestOfQuery = e.target.value.toLowerCase().trim();
        filterBestOfCards();
    });
}

function filterBestOfCards() {
    const query = STATE.bestOfQuery;
    const cards = document.querySelectorAll(".best-of-directory-card");
    const showMoreContainer = document.getElementById("best-of-show-more-container");
    const noResults = document.getElementById("best-of-no-results");
    const foodVibeSection = document.getElementById("best-of-food-vibe-section");
    const neighborhoodSection = document.getElementById("best-of-neighborhood-section");
    
    let visibleCount = 0;
    let foodVibeVisible = 0;
    let neighborhoodVisible = 0;
    
    cards.forEach(card => {
        const searchText = card.getAttribute("data-search-text") || "";
        const isFoodVibe = card.getAttribute("data-category-type") === "food-vibe";
        const isNeighborhood = card.getAttribute("data-category-type") === "neighborhood";
        const index = parseInt(card.getAttribute("data-card-index") || "0", 10);
        
        if (query) {
            if (searchText.includes(query)) {
                card.style.display = "block";
                card.classList.remove("best-of-collapsed-hidden");
                visibleCount++;
                if (isFoodVibe) foodVibeVisible++;
                if (isNeighborhood) neighborhoodVisible++;
            } else {
                card.style.display = "none";
            }
        } else {
            card.style.display = "block";
            const isHidden = !STATE.bestOfShowAll && ((isFoodVibe && index >= 6) || (isNeighborhood && index >= 4));
            if (isHidden) {
                card.classList.add("best-of-collapsed-hidden");
            } else {
                card.classList.remove("best-of-collapsed-hidden");
                visibleCount++;
                if (isFoodVibe) foodVibeVisible++;
                if (isNeighborhood) neighborhoodVisible++;
            }
        }
    });
    
    if (foodVibeSection) {
        foodVibeSection.style.display = (query && foodVibeVisible === 0) ? "none" : "block";
    }
    if (neighborhoodSection) {
        neighborhoodSection.style.display = (query && neighborhoodVisible === 0) ? "none" : "block";
    }
    if (showMoreContainer) {
        showMoreContainer.style.display = query ? "none" : "block";
    }
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
}

function toggleBestOfShowMore() {
    STATE.bestOfShowAll = !STATE.bestOfShowAll;
    const label = document.getElementById("best-of-show-more-label");
    if (label) {
        const hiddenCount = (BEST_OF_CATEGORIES.length - 6) + (BEST_OF_NEIGHBORHOODS.length - 4);
        label.textContent = STATE.bestOfShowAll ? "Show Fewer Lists ↑" : `Show All Lists (${hiddenCount} more) ↓`;
    }
    filterBestOfCards();
}
window.toggleBestOfShowMore = toggleBestOfShowMore;

function renderBestOfView() {
    const container = document.getElementById("best-of-categories-list");
    if (!container) return;
    
    const hiddenCount = (BEST_OF_CATEGORIES.length - 6) + (BEST_OF_NEIGHBORHOODS.length - 4);
    
    // Group 1: Food & Vibe Lists (all 16 items rendered into DOM)
    const foodVibeHtml = BEST_OF_CATEGORIES.map((cat, idx) => {
        const isHidden = !STATE.bestOfShowAll && idx >= 6;
        const searchText = `${cat.name} ${cat.description} ${cat.tag || ''} ${cat.location || ''}`.toLowerCase();
        return `
            <a href="/best-of/${cat.id}" class="best-of-category-card best-of-directory-card ${isHidden ? 'best-of-collapsed-hidden' : ''}" data-category-type="food-vibe" data-card-index="${idx}" data-search-text="${searchText.replace(/"/g, '&quot;')}" onclick="window.STATE.savedBestOfScrollPosition = window.scrollY;" style="display: block; text-decoration: none; color: inherit;">
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
            </a>
        `;
    }).join("");

    // Group 2: Neighborhood Lists (all 6 items rendered into DOM)
    const neighborhoodHtml = BEST_OF_NEIGHBORHOODS.map((cat, idx) => {
        const isHidden = !STATE.bestOfShowAll && idx >= 4;
        const searchText = `${cat.name} ${cat.description} ${cat.tag || ''} ${cat.location || ''}`.toLowerCase();
        return `
            <a href="/best-of/${cat.id}" class="best-of-category-card best-of-directory-card ${isHidden ? 'best-of-collapsed-hidden' : ''}" data-category-type="neighborhood" data-card-index="${idx}" data-search-text="${searchText.replace(/"/g, '&quot;')}" onclick="window.STATE.savedBestOfScrollPosition = window.scrollY;" style="display: block; text-decoration: none; color: inherit;">
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
            </a>
        `;
    }).join("");

    container.innerHTML = `
        <div id="best-of-no-results" class="no-directory-results" style="display: none;">
            No curated lists found matching your search. Try searching for terms like "pizza", "waterfront", or "Weston".
        </div>

        <div id="best-of-food-vibe-section">
            <h2 class="best-of-section-title" style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin-top: 1rem; margin-bottom: 1.25rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">🍽️ Curated Lists by Food & Vibe</h2>
            <div class="best-of-restaurants-list" style="padding: 0; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2.5rem;">
                ${foodVibeHtml}
            </div>
        </div>

        <div id="best-of-neighborhood-section">
            <h2 class="best-of-section-title" style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin-top: 1rem; margin-bottom: 1.25rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">📍 Curated Lists by Neighborhood</h2>
            <div class="best-of-restaurants-list" style="padding: 0; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem;">
                ${neighborhoodHtml}
            </div>
        </div>

        <div class="show-more-container" id="best-of-show-more-container" style="${STATE.bestOfQuery ? 'display: none;' : ''}">
            <button type="button" class="show-more-btn" onclick="toggleBestOfShowMore()">
                <span id="best-of-show-more-label">${STATE.bestOfShowAll ? 'Show Fewer Lists ↑' : `Show All Lists (${hiddenCount} more) ↓`}</span>
            </button>
        </div>
    `;
    
    initBestOfSearch();
    if (STATE.bestOfQuery) {
        filterBestOfCards();
    }
}
function renderBestOfListDetailView(catId) {
    const view = document.getElementById("best-of-list-detail-view");
    if (!view) return;
    const cat = BEST_OF_CATEGORIES.find(c => c.id === catId) || BEST_OF_NEIGHBORHOODS.find(c => c.id === catId);
    if (!cat) {
        view.innerHTML = `<div class="error-state">List not found</div>`;
        return;
    }
    // Find matching restaurants from RESTAURANT_DATA
    const matching = RESTAURANT_DATA.filter(rest => {
        if (cat.location) {
            return rest.location.toLowerCase() === cat.location.toLowerCase();
        }
        return rest.tags.some(rt => normalizeTag(rt) === normalizeTag(cat.tag));
    });
    // Format restaurant items list using the detailed longDescription
    const restListHtml = matching.map(rest => `
        <div class="best-of-restaurant-item">
            <img src="${rest.image}" alt="${rest.imageAlt || rest.name}" class="best-of-item-img" loading="lazy">
            <div class="best-of-item-info">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.5rem;">
                    <h4 class="best-of-item-name"><a href="/restaurants/${rest.id}" class="card-title-link">${rest.name}</a></h4>
                    <span class="best-of-item-location">${rest.location}</span>
                </div>
                <div class="best-of-item-desc">${rest.longDescription.split('\n').map(p => p.trim()).filter(Boolean).join('<br>')}</div>
                <div class="best-of-item-dish">
                    <strong>★ Must-Try:</strong> ${rest.mustTry}
                </div>
                <div class="best-of-item-actions">
                    <a href="/restaurants/${rest.id}" class="best-of-view-details-btn">
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
                <a href="/best-of" class="back-link" onclick="window.STATE.shouldRestoreBestOfScroll = true;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Best Of Lists
                </a>
            </div>
            <!-- Header -->
            <div class="best-of-header">
                <span class="best-of-tagline">Curated Selection</span>
                <h1 class="best-of-title">${cat.name}</h1>
                <div class="best-of-header-intro">
                    ${cat.introParagraphs.map((p, idx) => {
                        let html = '';
                        if (idx === 1) {
                            html += `<h3 class="best-of-intro-subheader" style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-top: 1.5rem; margin-bottom: 0.75rem;">Our Selection Process</h3>`;
                        }
                        html += `<p class="best-of-intro-p">${p}</p>`;
                        return html;
                    }).join("")}
                </div>
            </div>
            <!-- Restaurants Grid -->
            <div class="best-of-restaurants-list">
                ${restListHtml}
            </div>

            <!-- Explore More CTA -->
            <div class="best-of-explore-more" style="margin-top: 2rem; margin-bottom: 2rem; text-align: center;">
                <button class="btn-primary" onclick="filterByTagAndGoHome('${cat.tag}')" style="padding: 0.85rem 1.75rem;">
                    View & Filter All in Explore Directory
                </button>
            </div>
            
            <!-- Experiences Section -->
            ${cat.experiences && cat.experiences.length > 0 ? `
                <div class="best-of-experiences-section" style="margin-top: 2.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem; margin-bottom: 2.5rem;">
                    <div class="best-of-header" style="margin-bottom: 2rem; text-align: left; display: flex; align-items: flex-start; gap: 1.25rem;">
                        <div style="font-size: 2.2rem; line-height: 1; padding: 0.6rem; background: rgba(13, 148, 136, 0.08); border-radius: var(--border-radius-md); color: #0d9488; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(13, 148, 136, 0.18);">
                            🧭
                        </div>
                        <div style="flex: 1;">
                            <span class="best-of-tagline" style="color: #0d9488; font-size: 1.05rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Complete Your Outing</span>
                            <h2 class="best-of-section-title" style="font-family: var(--font-heading); font-size: 2.4rem; font-weight: 800; color: var(--text-primary); margin-top: 0.25rem; margin-bottom: 0.5rem; letter-spacing: -0.5px;">Great Experiences in South Florida</h2>
                            <p style="color: var(--text-secondary); font-size: 1.1rem; margin: 0; line-height: 1.4;">Pair your meal with one of these highly rated local activities and tours.</p>
                        </div>
                    </div>
                    <div class="experiences-list" style="display: flex; flex-direction: column; gap: 1.25rem;">
                        ${cat.experiences.map(exp => `
                            <a href="${exp.link}" target="_blank" rel="noopener noreferrer" class="experience-card horizontal">
                                <div class="experience-content" style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem; text-align: left;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                                        <div class="experience-badge" style="display: inline-block; background: rgba(13, 148, 136, 0.1); color: #0d9488; font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px;">
                                            ${exp.location}
                                        </div>
                                        <h3 class="experience-title" style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 750; color: var(--text-primary); margin: 0; line-height: 1.3;">${exp.title}</h3>
                                    </div>
                                    <p class="experience-desc" style="color: var(--text-secondary); font-size: 0.95rem; margin: 0; line-height: 1.4;">${exp.description || ''}</p>
                                </div>
                                <div class="experience-footer">
                                    <span>Book Now</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </a>
                        `).join("")}
                    </div>
                </div>
            ` : ""}
        </div>
    `;
}

// Helper to get cross-browser scroll position
function getScrollY() {
    if (typeof window === 'undefined') return 0;
    return window.scrollY || window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop) || 0;
}

// Helper to normalize path consistently
function normalizePath(rawPath) {
    if (!rawPath || rawPath === "" || rawPath === "/index.html" || rawPath === "index.html") {
        return "/";
    }
    let p = rawPath.replace(/\/$/, "");
    if (!p.startsWith("/")) p = "/" + p;
    return p || "/";
}

// Helper to get descriptive back navigation label
function getPageBackLabel(path) {
    const norm = normalizePath(path);
    if (norm === "/" || norm === "/#restaurant-grid") {
        return "Back to Explore Directory";
    }
    if (norm.startsWith("/best-of/")) {
        const catId = norm.replace("/best-of/", "");
        const cat = BEST_OF_CATEGORIES.find(c => c.id === catId) || BEST_OF_NEIGHBORHOODS.find(c => c.id === catId);
        if (cat) return `Back to ${cat.name}`;
        return "Back to Best Of List";
    }
    if (norm.startsWith("/article/")) {
        const articleId = norm.replace("/article/", "");
        const article = ARTICLES_DATA.find(a => a.id === articleId);
        if (article) return `Back to ${article.title}`;
        return "Back to Article";
    }
    if (norm === "/best-of") {
        return "Back to Best Of Lists";
    }
    if (norm === "/editorials") {
        return "Back to Editorials";
    }
    if (norm === "/about") {
        return "Back to About";
    }
    if (norm === "/privacy-terms") {
        return "Back to Privacy & Terms";
    }
    return "Back to Explore Directory";
}

function getRestaurantBackTarget() {
    if (STATE.restaurantReferrer && STATE.restaurantReferrer.path && !STATE.restaurantReferrer.path.startsWith('/restaurants/')) {
        return STATE.restaurantReferrer;
    }
    return {
        path: "/",
        label: "Back to Explore Directory",
        scrollY: STATE.savedScrollPosition || 0
    };
}

function goBackFromRestaurant(event) {
    if (event) event.preventDefault();
    const backTarget = getRestaurantBackTarget();
    STATE.shouldRestoreScroll = true;
    STATE.shouldRestoreScrollForPath = backTarget.path;
    navigateTo(backTarget.path);
}
window.goBackFromRestaurant = goBackFromRestaurant;

// Robust scroll restoration helper that handles DOM reflow across frames
function restoreScrollPosition(targetY) {
    if (typeof targetY !== 'number' || isNaN(targetY) || targetY <= 0) {
        if (targetY === 0 && typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
            window.scrollTo(0, 0);
        }
        return;
    }
    
    let attempts = 0;
    const maxAttempts = 15;
    
    const applyScroll = () => {
        attempts++;
        if (typeof window !== 'undefined') {
            if (typeof window.scrollTo === 'function') {
                window.scrollTo(0, targetY);
            }
            if (document.documentElement) document.documentElement.scrollTop = targetY;
            if (document.body) document.body.scrollTop = targetY;
        }
        
        const currentY = getScrollY();
        
        // If we haven't reached target yet and attempts remain, retry with progressive delay
        if (attempts < maxAttempts && Math.abs(currentY - targetY) > 5) {
            setTimeout(applyScroll, 40);
        }
    };
    
    applyScroll();
    if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(applyScroll);
    }
    setTimeout(applyScroll, 20);
    setTimeout(applyScroll, 60);
    setTimeout(applyScroll, 120);
    setTimeout(applyScroll, 250);
    setTimeout(applyScroll, 500);
}

function handleRoute() {
    let rawPath = (window.location.pathname || "/").replace(/\/$/, "");
    const hash = window.location.hash;

    // Support local file:/// protocol or static .html file paths
    if (window.location.protocol === 'file:' || rawPath.endsWith('.html') || (window.location.origin === "null")) {
        if (hash && (hash.startsWith('#/') || hash.startsWith('#best-of') || hash.startsWith('#editorials') || hash.startsWith('#about') || hash.startsWith('#privacy-terms') || hash.startsWith('#restaurants') || hash.startsWith('#article'))) {
            rawPath = hash.replace(/^#\/?/, '/');
            if (!rawPath.startsWith('/')) rawPath = '/' + rawPath;
        } else {
            rawPath = "/";
        }
    }

    const path = normalizePath(rawPath);
    const previousPath = STATE.currentPath || "/";
    const returningFromRestaurant = previousPath.startsWith('/restaurants/');

    if (previousPath !== path) {
        const currentScrollY = getScrollY();
        STATE.scrollPositions[previousPath] = currentScrollY;
        if (previousPath === "/") {
            STATE.savedScrollPosition = currentScrollY;
        }
        if (!previousPath.startsWith('/restaurants/') && path.startsWith('/restaurants/')) {
            STATE.restaurantReferrer = {
                path: previousPath,
                label: getPageBackLabel(previousPath),
                scrollY: currentScrollY
            };
        }
    }
    STATE.currentPath = path;

    const homeView = document.getElementById("home-view");
    const detailView = document.getElementById("restaurant-detail-view");
    const aboutView = document.getElementById("about-view");
    const privacyTermsView = document.getElementById("privacy-terms-view");
    const bestOfView = document.getElementById("best-of-view");
    const bestOfListDetailView = document.getElementById("best-of-list-detail-view");
    const bottomAdBanner = document.getElementById("bottom-ad-banner");
    const articleDetailView = document.getElementById("article-detail-view");
    const editorialsView = document.getElementById("editorials-view");

    // Save scroll position if currently on home view and moving away
    if (homeView && homeView.style.display !== "none" && path !== "/") {
        const currentScrollY = getScrollY();
        STATE.savedScrollPosition = currentScrollY;
        STATE.scrollPositions["/"] = currentScrollY;
    }
    
    // Reset active nav link highlighting
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => link.classList.remove("active"));
    const highlightNav = (pathVal) => {
        const matching = Array.from(navLinks).find(link => {
            const a = link.querySelector("a");
            if (!a) return false;
            const href = a.getAttribute("href");
            return href === pathVal || href.replace(/\/$/, "") === pathVal.replace(/\/$/, "");
        });
        if (matching) matching.classList.add("active");
    };
    
    if (path === "/about") {
        if (editorialsView) editorialsView.style.display = "none";
        if (homeView) homeView.style.display = "none";
        if (detailView) detailView.style.display = "none";
        if (privacyTermsView) privacyTermsView.style.display = "none";
        if (bestOfView) bestOfView.style.display = "none";
        if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
        if (articleDetailView) articleDetailView.style.display = "none";
        if (aboutView) {
            aboutView.style.display = "block";
            const targetY = STATE.scrollPositions["/about"] || 0;
            restoreScrollPosition(targetY);
        }
        highlightNav("/about");
        if (bottomAdBanner) bottomAdBanner.style.display = "none";
        updateMeta(
            "About Us | SoFlo Bites", 
            "Learn about SoFlo Bites, our mission to make local culinary discoveries accessible, our review process, and our South Florida coverage area."
        );
        return;
    }
    
    if (bottomAdBanner) bottomAdBanner.style.display = "block";
    
    if (path === "/privacy-terms") {
        if (editorialsView) editorialsView.style.display = "none";
        if (homeView) homeView.style.display = "none";
        if (detailView) detailView.style.display = "none";
        if (aboutView) {
            aboutView.style.display = "none";
            if (bestOfView) bestOfView.style.display = "none";
            if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
        }
        if (articleDetailView) articleDetailView.style.display = "none";
        if (privacyTermsView) {
            privacyTermsView.style.display = "block";
            const targetY = STATE.scrollPositions["/privacy-terms"] || 0;
            restoreScrollPosition(targetY);
        }
        updateMeta(
            "Privacy Policy & Terms | SoFlo Bites", 
            "Read the Privacy Policy and Terms of Service for SoFlo Bites restaurant directory."
        );
        return;
    }
    
    if (path === "/editorials") {
        if (homeView) homeView.style.display = "none";
        if (detailView) detailView.style.display = "none";
        if (aboutView) aboutView.style.display = "none";
        if (privacyTermsView) privacyTermsView.style.display = "none";
        if (bestOfView) bestOfView.style.display = "none";
        if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
        if (articleDetailView) articleDetailView.style.display = "none";
        if (editorialsView) {
            renderEditorialsView();
            editorialsView.style.display = "block";
            const targetY = STATE.scrollPositions["/editorials"] || STATE.savedEditorialsScrollPosition || 0;
            if (STATE.shouldRestoreEditorialsScroll || STATE.shouldRestoreScrollForPath === '/editorials' || returningFromRestaurant) {
                restoreScrollPosition(targetY);
                STATE.shouldRestoreEditorialsScroll = false;
                STATE.shouldRestoreScrollForPath = null;
            } else {
                restoreScrollPosition(0);
            }
        }
        highlightNav("/editorials");
        updateMeta(
            "Local Food Editorials & Guides | SoFlo Bites", 
            "Explore in-depth features, culinary guides, and neighborhood perspectives from the SoFlo Bites editorial team."
        );
        return;
    }
    
    if (path === "/best-of") {
        if (editorialsView) editorialsView.style.display = "none";
        if (homeView) homeView.style.display = "none";
        if (detailView) detailView.style.display = "none";
        if (aboutView) aboutView.style.display = "none";
        if (privacyTermsView) privacyTermsView.style.display = "none";
        if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
        if (articleDetailView) articleDetailView.style.display = "none";
        if (bestOfView) {
            renderBestOfView();
            bestOfView.style.display = "block";
            const targetY = STATE.scrollPositions["/best-of"] || STATE.savedBestOfScrollPosition || 0;
            if (STATE.shouldRestoreBestOfScroll || STATE.shouldRestoreScrollForPath === '/best-of' || returningFromRestaurant) {
                restoreScrollPosition(targetY);
                STATE.shouldRestoreBestOfScroll = false;
                STATE.shouldRestoreScrollForPath = null;
            } else {
                restoreScrollPosition(0);
            }
        }
        highlightNav("/best-of");
        updateMeta(
            "Best Local Lists & Selections | SoFlo Bites", 
            "Browse our curated Best Of lists for South Florida restaurants. Discover the best date night spots, waterfront dining, family-friendly eateries, and local secrets."
        );
        return;
    }
    
    if (path.startsWith("/best-of/")) {
        if (editorialsView) editorialsView.style.display = "none";
        const catId = path.substring("/best-of/".length);
        const cat = BEST_OF_CATEGORIES.find(c => c.id === catId) || BEST_OF_NEIGHBORHOODS.find(c => c.id === catId);
        
        if (cat) {
            if (homeView) homeView.style.display = "none";
            if (detailView) detailView.style.display = "none";
            if (aboutView) aboutView.style.display = "none";
            if (privacyTermsView) privacyTermsView.style.display = "none";
            if (bestOfView) bestOfView.style.display = "none";
            if (articleDetailView) articleDetailView.style.display = "none";
            if (bestOfListDetailView) {
                renderBestOfListDetailView(catId);
                bestOfListDetailView.style.display = "block";
                const savedY = STATE.scrollPositions[path] || (STATE.restaurantReferrer && STATE.restaurantReferrer.path === path ? STATE.restaurantReferrer.scrollY : 0) || 0;
                if (STATE.shouldRestoreScrollForPath === path || STATE.shouldRestoreScroll || returningFromRestaurant) {
                    restoreScrollPosition(savedY);
                    STATE.shouldRestoreScrollForPath = null;
                    STATE.shouldRestoreScroll = false;
                } else {
                    restoreScrollPosition(0);
                }
            }
            highlightNav("/best-of");
            updateMeta(
                `${cat.name} | SoFlo Bites`, 
                `${cat.description} Explore our hand-picked restaurant recommendations for this category.`
            );
            return;
        }
    }
    
    if (path.startsWith("/article/")) {
        if (editorialsView) editorialsView.style.display = "none";
        const articleId = path.substring("/article/".length);
        const article = ARTICLES_DATA.find(a => a.id === articleId);
        
        if (article) {
            if (homeView) homeView.style.display = "none";
            if (detailView) detailView.style.display = "none";
            if (aboutView) aboutView.style.display = "none";
            if (privacyTermsView) privacyTermsView.style.display = "none";
            if (bestOfView) bestOfView.style.display = "none";
            if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
            if (articleDetailView) {
                renderArticleDetailView(articleId);
                articleDetailView.style.display = "block";
                const savedY = STATE.scrollPositions[path] || (STATE.restaurantReferrer && STATE.restaurantReferrer.path === path ? STATE.restaurantReferrer.scrollY : 0) || 0;
                if (STATE.shouldRestoreScrollForPath === path || STATE.shouldRestoreScroll || returningFromRestaurant) {
                    restoreScrollPosition(savedY);
                    STATE.shouldRestoreScrollForPath = null;
                    STATE.shouldRestoreScroll = false;
                } else {
                    restoreScrollPosition(0);
                }
            }
            highlightNav("/editorials");
            updateMeta(
                `${article.title} | SoFlo Bites`, 
                `Read our local editorial article: ${article.title}.`
            );
            return;
        }
    }
    
    if (path.startsWith("/restaurants/")) {
        if (editorialsView) editorialsView.style.display = "none";
        const id = path.substring("/restaurants/".length);
        const rest = RESTAURANT_DATA.find(r => r.id === id);
        
        if (rest) {
            if (homeView) homeView.style.display = "none";
            if (aboutView) aboutView.style.display = "none";
            if (privacyTermsView) privacyTermsView.style.display = "none";
            if (bestOfView) bestOfView.style.display = "none";
            if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
            if (articleDetailView) articleDetailView.style.display = "none";
            if (detailView) {
                detailView.innerHTML = renderDetailedPageMarkup(rest);
                detailView.style.display = "block";
                restoreScrollPosition(0);
            }
            highlightNav("/");
            updateMeta(
                `${rest.name} — ${rest.location} | SoFlo Bites`,
                `Explore must-try dishes, phone numbers, hours, and directions for ${rest.name} in ${rest.location}. ${rest.description}`
            );
            return;
        }
    }
    
    // Default route: show homepage listing
    if (editorialsView) editorialsView.style.display = "none";
    if (articleDetailView) articleDetailView.style.display = "none";
    if (detailView) detailView.style.display = "none";
    if (aboutView) aboutView.style.display = "none";
    if (privacyTermsView) privacyTermsView.style.display = "none";
    if (bestOfView) bestOfView.style.display = "none";
    if (bestOfListDetailView) bestOfListDetailView.style.display = "none";
    if (homeView) homeView.style.display = "block";
    
    if (path === "/") {
        if (hash === "#restaurant-grid") {
            highlightNav("/#restaurant-grid");
        } else if (hash === "#suggest-section") {
            highlightNav("/#suggest-section");
        } else {
            highlightNav("/");
        }
    }
    
    updateMeta(
        "SoFlo Bites | Best Local Restaurants in South Florida", 
        "Explore the best local restaurants in South Florida. Browse curated picks by cuisine, vibe, and location, and discover must-try dishes, hidden gems, and neighborhood favorites."
    );
    
    // Restore scroll position or scroll to appropriate section
    const shouldRestore = STATE.shouldRestoreScroll || 
                          returningFromRestaurant ||
                          STATE.shouldRestoreScrollForPath === '/' || 
                          STATE.shouldRestoreScrollForPath === '/#restaurant-grid';

    const targetY = STATE.scrollPositions["/"] || STATE.savedScrollPosition || (STATE.restaurantReferrer ? STATE.restaurantReferrer.scrollY : 0) || 0;

    if (shouldRestore && targetY > 50) {
        STATE.shouldRestoreScroll = false;
        STATE.shouldRestoreScrollForPath = null;
        restoreScrollPosition(targetY);
    } else {
        STATE.shouldRestoreScroll = false;
        STATE.shouldRestoreScrollForPath = null;
        if (hash === "#restaurant-grid") {
            const targetEl = getDirectoryScrollTarget();
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: "smooth" });
            }
        } else if (hash === "#suggest-section") {
            const suggestEl = document.getElementById("suggest-section");
            if (suggestEl) {
                suggestEl.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
}
function renderDetailedPageMarkup(rest) {
    const backTarget = getRestaurantBackTarget();
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
                <a href="${backTarget.path}" class="back-link" onclick="goBackFromRestaurant(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    ${backTarget.label}
                </a>
            </div>
            <!-- Header Section -->
            <div class="detail-header-block">
                ${rest.images && rest.images.length > 1 ? `
                    <div class="detail-images-stack" style="display: flex; flex-direction: column; gap: 1.25rem; width: 100%;">
                        ${rest.images.map((img, idx) => `
                            <div class="detail-image-box" style="height: 300px; position: relative;">
                                <img src="${img.path}" alt="${img.alt || rest.name}" class="detail-main-img" style="object-fit: cover; width: 100%; height: 100%;">
                                ${idx === 0 ? `
                                    <span class="detail-location-badge">${rest.location}</span>
                                    <span class="detail-price-badge" title="Price Range: ${rest.priceRange}">${rest.priceRange}</span>
                                ` : ''}
                            </div>
                        `).join("")}
                    </div>
                ` : `
                    <div class="detail-image-box">
                        <img src="${rest.image}" alt="${rest.imageAlt || (rest.name + ' food recommendations')}" class="detail-main-img" id="detail-img-${rest.id}">
                        <span class="detail-location-badge">${rest.location}</span>
                        <span class="detail-price-badge" title="Price Range: ${rest.priceRange}">${rest.priceRange}</span>
                    </div>
                `}
                <div class="detail-title-info">
                    <h1 class="detail-title">${rest.name}</h1>
                    <div class="detail-tags-list">
                        ${rest.tags.map(t => `<span class="detail-tag">${t}</span>`).join("")}
                    </div>
                    
                    <div class="detail-long-desc">${rest.longDescription.split('\n').map(p => p.trim()).filter(Boolean).join('<br>')}</div>
                    
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
    STATE.shouldRestoreScrollForPath = "/";
    navigateTo("/#restaurant-grid");
}
window.goBackToDirectory = goBackToDirectory;
// Carousel Cycle Functions for Multiple Restaurant Images
window.cycleCardImage = function(event, id, direction) {
    if (event) event.stopPropagation();
    const img = document.getElementById(`card-img-${id}`);
    const rest = RESTAURANT_DATA.find(r => r.id === id);
    if (!img || !rest) return;
    const imgs = rest.images || [{ path: rest.image, alt: rest.imageAlt }];
    if (imgs.length <= 1) return;
    
    let currentIndex = parseInt(img.getAttribute("data-current-index") || "0", 10);
    currentIndex = (currentIndex + direction + imgs.length) % imgs.length;
    
    const nextImgObj = imgs[currentIndex];
    img.src = nextImgObj.path;
    img.alt = nextImgObj.alt;
    img.setAttribute("data-current-index", currentIndex);
};

window.cycleDetailImage = function(event, id, direction) {
    if (event) event.stopPropagation();
    const img = document.getElementById(`detail-img-${id}`);
    const rest = RESTAURANT_DATA.find(r => r.id === id);
    if (!img || !rest) return;
    const imgs = rest.images || [{ path: rest.image, alt: rest.imageAlt }];
    if (imgs.length <= 1) return;
    
    let currentIndex = parseInt(img.getAttribute("data-current-index") || "0", 10);
    currentIndex = (currentIndex + direction + imgs.length) % imgs.length;
    
    const nextImgObj = imgs[currentIndex];
    img.src = nextImgObj.path;
    img.alt = nextImgObj.alt;
    img.setAttribute("data-current-index", currentIndex);
};

function renderArticleDetailView(articleId) {
    const view = document.getElementById("article-detail-view");
    if (!view) return;
    const art = ARTICLES_DATA.find(a => a.id === articleId);
    if (!art) {
        view.innerHTML = `<div class="error-state">Article not found</div>`;
        return;
    }
    view.innerHTML = `
        <div class="article-detail-back-nav">
            <a href="/editorials" class="back-link" onclick="window.STATE.shouldRestoreEditorialsScroll = true;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Editorials
            </a>
        </div>
        <h1 class="article-detail-title">${art.title}</h1>
        <div class="article-detail-meta">Published by SoFlo Bites Editorial Team • Local Travel & Dining Guides</div>
        <div class="article-detail-body">
            ${art.content}
        </div>
    `;
}

function initEditorialsSearch() {
    const input = document.getElementById("editorials-search-input");
    if (!input || input._hasSearchListener) return;
    input._hasSearchListener = true;
    input.addEventListener("input", (e) => {
        STATE.editorialsQuery = e.target.value.toLowerCase().trim();
        filterEditorialsCards();
    });
}

function filterEditorialsCards() {
    const query = STATE.editorialsQuery;
    const cards = document.querySelectorAll(".editorial-directory-card");
    const showMoreContainer = document.getElementById("editorials-show-more-container");
    const noResults = document.getElementById("editorials-no-results");
    
    let visibleCount = 0;
    
    cards.forEach(card => {
        const searchText = card.getAttribute("data-search-text") || "";
        const index = parseInt(card.getAttribute("data-card-index") || "0", 10);
        
        if (query) {
            if (searchText.includes(query)) {
                card.style.display = "block";
                card.classList.remove("editorial-collapsed-hidden");
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        } else {
            card.style.display = "block";
            const isHidden = !STATE.editorialsShowAll && index >= 3;
            if (isHidden) {
                card.classList.add("editorial-collapsed-hidden");
            } else {
                card.classList.remove("editorial-collapsed-hidden");
                visibleCount++;
            }
        }
    });
    
    if (showMoreContainer) {
        showMoreContainer.style.display = query ? "none" : (ARTICLES_DATA.length > 3 ? "block" : "none");
    }
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
}

function toggleEditorialsShowMore() {
    STATE.editorialsShowAll = !STATE.editorialsShowAll;
    const label = document.getElementById("editorials-show-more-label");
    if (label) {
        const hiddenCount = ARTICLES_DATA.length - 3;
        label.textContent = STATE.editorialsShowAll ? "Show Fewer Articles ↑" : `Show All Articles (${hiddenCount} more) ↓`;
    }
    filterEditorialsCards();
}
window.toggleEditorialsShowMore = toggleEditorialsShowMore;

function renderEditorialsView() {
    const container = document.getElementById("editorials-list-container");
    if (!container) return;
    
    const hiddenCount = ARTICLES_DATA.length - 3;
    const articlesHtml = ARTICLES_DATA.map((art, idx) => {
        const isHidden = !STATE.editorialsShowAll && idx >= 3;
        const searchText = `${art.title} ${art.excerpt}`.toLowerCase();
        return `
            <a href="/article/${art.id}" class="best-of-category-card editorial-directory-card ${isHidden ? 'editorial-collapsed-hidden' : ''}" data-card-index="${idx}" data-search-text="${searchText.replace(/"/g, '&quot;')}" onclick="window.STATE.savedEditorialsScrollPosition = window.scrollY;" style="display: block; text-decoration: none; color: inherit; border-left: 4px solid var(--accent-primary);">
                <div class="best-of-card-header">
                    <div class="best-of-header-left">
                        <span class="best-of-cat-icon">📖</span>
                        <div>
                            <h2 class="best-of-cat-name">${art.title}</h2>
                            <p class="best-of-cat-desc">${art.excerpt}</p>
                        </div>
                    </div>
                    <div class="best-of-link-indicator">
                        <span>Read Article</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </a>
        `;
    }).join("");
    
    container.innerHTML = `
        <div id="editorials-no-results" class="no-directory-results" style="display: none;">
            No editorial articles found matching your search.
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${articlesHtml}
        </div>
        ${ARTICLES_DATA.length > 3 ? `
            <div class="show-more-container" id="editorials-show-more-container" style="${STATE.editorialsQuery ? 'display: none;' : ''}">
                <button type="button" class="show-more-btn" onclick="toggleEditorialsShowMore()">
                    <span id="editorials-show-more-label">${STATE.editorialsShowAll ? 'Show Fewer Articles ↑' : `Show All Articles (${hiddenCount} more) ↓`}</span>
                </button>
            </div>
        ` : ''}
    `;
    
    initEditorialsSearch();
    if (STATE.editorialsQuery) {
        filterEditorialsCards();
    }
}
// =========================================================================
// History API Path-Based Navigation Helpers
// =========================================================================
function navigateTo(path) {
    const normCurrent = normalizePath(STATE.currentPath || window.location.pathname);
    STATE.scrollPositions[normCurrent] = window.scrollY;
    if (normCurrent === "/") {
        STATE.savedScrollPosition = window.scrollY;
    }
    if (!normCurrent.startsWith('/restaurants/') && path.startsWith('/restaurants/')) {
        STATE.restaurantReferrer = {
            path: normCurrent,
            label: getPageBackLabel(normCurrent),
            scrollY: window.scrollY
        };
    }
    if (window.location.protocol === 'file:' || window.location.origin === 'null') {
        window.location.hash = path;
    } else {
        history.pushState(null, "", path);
    }
    handleRoute();
}
window.navigateTo = navigateTo;

// Global link interceptor for real paths
document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    
    if (link.target === "_blank") return;
    
    const href = link.getAttribute("href");
    if (!href) return;
    
    if (href.startsWith("http://") || href.startsWith("https://")) {
        try {
            const url = new URL(href);
            if (url.origin !== window.location.origin) return;
        } catch (err) {
            return;
        }
    }

    const currentNormPath = (window.location.pathname || "/").replace(/\/$/, "") || "/";
    const isHomePage = currentNormPath === "/" || currentNormPath === "/index.html" || currentNormPath === "";
    
    // Handle home-page anchor clicks when already on the home page
    if (isHomePage && (href === "/#restaurant-grid" || href === "#restaurant-grid" || href === "/#suggest-section" || href === "#suggest-section")) {
        e.preventDefault();
        const isSuggest = href.includes("suggest");
        const targetEl = isSuggest ? document.getElementById("suggest-section") : getDirectoryScrollTarget();
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
            const targetId = isSuggest ? "suggest-section" : "restaurant-grid";
            if (window.location.protocol !== 'file:') {
                history.pushState(null, "", "/" + "#" + targetId);
            } else {
                window.location.hash = "#" + targetId;
            }
        }
        return;
    }
    
    // Handle clicking Home link or Logo when already on the home page
    if (isHomePage && (href === "/" || href === "#" || href === "/index.html")) {
        e.preventDefault();
        STATE.shouldRestoreScroll = false;
        STATE.shouldRestoreScrollForPath = null;
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.protocol !== 'file:') {
            history.pushState(null, "", "/");
        } else {
            window.location.hash = "";
        }
        return;
    }
    
    // Handle standard relative hash links smoothly on the current page
    if (href.startsWith("#") && !href.startsWith("#/") && !href.startsWith("#restaurant") && !href.startsWith("#best-of") && !href.startsWith("#editorials") && !href.startsWith("#about") && !href.startsWith("#privacy-terms") && !href.startsWith("#article")) {
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: "smooth" });
            if (window.location.protocol !== 'file:') {
                history.pushState(null, "", window.location.pathname + href);
            }
        }
        return;
    }
    
    // Handle history routing for relative paths or converted hashes
    let targetPath = href;
    if (targetPath.startsWith("#/")) {
        targetPath = targetPath.substring(1);
    }
    if (targetPath.startsWith("#")) {
        targetPath = "/" + targetPath.substring(1);
    }
    
    if (targetPath.startsWith("/")) {
        e.preventDefault();
        // If navigating to a restaurant, immediately capture the current scroll
        if (targetPath.startsWith("/restaurants/")) {
            const currentNorm = normalizePath(window.location.pathname);
            const currentY = window.scrollY;
            STATE.scrollPositions[currentNorm] = currentY;
            if (currentNorm === "/") {
                STATE.savedScrollPosition = currentY;
            }
            STATE.restaurantReferrer = {
                path: currentNorm,
                label: getPageBackLabel(currentNorm),
                scrollY: currentY
            };
        }
        navigateTo(targetPath);
    }
});

// Passive scroll position tracker for accurate restoration
window.addEventListener("scroll", () => {
    const current = STATE.currentPath || normalizePath(window.location.pathname);
    if (!current.startsWith("/restaurants/")) {
        const currentY = getScrollY();
        STATE.scrollPositions[current] = currentY;
        if (current === "/" || current === "/#restaurant-grid") {
            STATE.savedScrollPosition = currentY;
        }
    }
}, { passive: true });
