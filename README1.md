# WebDevCapstone Project 
My Bakery Delight - E-Commerce Website
A beautiful, responsive bakery website built with vanilla HTML, CSS, and JavaScript. Customers can browse delicious baked goods across multiple categories, add items to a shopping cart, and place orders through an intuitive order form. Features smooth carousels, local storage persistence, and a warm, inviting aesthetic.

Live link : https://my-work-ten-eta.vercel.app/
✨ Features
Core Functionality

Responsive Design - Works perfectly on desktop, tablet, and mobile
Smooth Carousels - Auto-scrolling product showcases with hover pause
Shopping Cart - Add/remove items, quantity controls, running totals
Persistent Storage - Cart items saved across sessions using localStorage
Order Form - Complete customer information collection
Search Functionality - Quick recipe/item discovery

Product Categories

Cakes - Premium layer cakes, bundt cakes, and specialty desserts
Cupcakes & Muffins - Classic and creative flavors for every occasion
Cookies - Chewy, crispy, and everything in between
Savory Bakes - Breads, pastries, and savory treats
Seasonal Specials - Holiday and occasion-specific baked goods

Interactive Elements

Hamburger Navigation - Mobile-friendly menu system
Add to Cart Notifications - Visual feedback with toast messages
Slide-out Cart Modal - View and manage cart contents
Hover Animations - Subtle lift effects and micro-interactions
Glassmorphism Design - Modern, premium aesthetic with backdrop blur

📁 Project Structure
textmy-bakery-delight/
├── index.html                 # Homepage with all categories
├── cakes.html                 # Dedicated cakes page
├── cupcakes.html              # Cupcakes & muffins page
├── cookies.html               # Cookies page
├── savory.html                # Savory bakes page
├── assets/
│   ├── images/
│   │   ├── index/            # Homepage images
│   │   ├── cakes/            # Cakes category images
│   │   ├── cupcakes-muffins/ # Cupcakes & muffins images
│   │   └── savory-baked/     # Savory bakes images
│   └── js/
│       └── main.js           # Carousel and navigation scripts
└── styles.css                 # Main stylesheet with all styling
🛠️ Technologies Used 
TechnologyPurposeVersionHTML5Semantic markup & structure5CSS3Styling & animations3Vanilla JavaScriptInteractivity & functionalityES6+Font AwesomeIcons6.5.0Google FontsTypographyMerriweather, Marck ScriptlocalStorageCart persistenceBrowser API
🎨 Design Features
Color Palette

Primary: #e07b39 (Warm Orange) - Buttons, accents
Secondary: #4a3728 (Rich Brown) - Text, headers
Accent: #d0692e (Burnt Orange) - Hovers, gradients
Background: #f9f3e8 (Cream) - Main background
Neutral: #6b5a4a (Warm Gray) - Secondary text

Typography

Headings: Merriweather - Elegant serif for titles
Body: Merriweather - Readable serif for content
Quotes: Marck Script - Handwritten style for captions
Responsive: Scales beautifully across devices

Visual Effects

Glassmorphism: Backdrop blur and translucent elements
Gradients: Subtle background and button gradients
Micro-interactions: Hover lifts, button shines, smooth transitions
Shadows: Multi-layered for depth and dimension
Animations: Cubic-bezier curves for premium feel

🚀 Getting Started
Local Development

Clone/Download the project files
Open index.html in your web browser
Navigate through categories using the hamburger menu
Test cart functionality by adding items
Submit test orders through the form

File Structure Setup
text📁 my-bakery-delight/
  📄 index.html
  📄 cakes.html
  📄 cupcakes.html
  📄 cookies.html
  📄 savory.html
  📁 assets/
    📁 images/ (all your product images)
    📁 js/
      📄 main.js
  📄 styles.css
Image Requirements

Format: JPEG/PNG
Size: 400x300px recommended
Naming: Consistent with HTML src attributes
Organization: By category in appropriate folders

🛒 Shopping Cart Features
Core Functionality

✅ Add to Cart - Single-click item addition
✅ Visual Feedback - Button animation + success toast
✅ Quantity Control - +/- buttons in cart modal
✅ Remove Items - Individual item deletion
✅ Running Total - Real-time price calculation
✅ Persistence - Items saved across page reloads

Cart Interface

Counter Badge - Top-right notification bubble
Slide-out Modal - Right-side cart drawer
Empty State - Friendly message when no items
Mobile Optimized - Full-width modal on phones

📝 Order Form
Fields Collected

Customer Name - Full name
Delivery Address - Complete shipping address
Email Address - Order confirmation
Phone Number - Contact for delivery
Order Details - Custom order specifications
Allergies - Dietary restrictions
Special Requests - Customization notes

Form Features

Validation Ready - HTML5 validation attributes
Responsive Design - Mobile-friendly inputs
Premium Styling - Glassmorphism with smooth focus
Accessibility - Proper labels and focus states

🎯 Usage Instructions
For Customers

Browse products in any category
Click "Add to Cart" on desired items
View Cart by clicking the orange counter
Adjust Quantities using +/- buttons
Fill Order Form with delivery details
Submit Order for processing

For Bakery Owner

Update Prices by editing data-price attributes
Add New Products by copying card structure
Change Images by updating src paths
Modify Categories by editing HTML sections
Customize Styling through styles.css
