# Greenden

A modern, responsive e-commerce website template for an online plant store, built purely with HTML and Tailwind CSS.

## Features

- ✅ **Fully Responsive Design**: Optimized for desktop, tablet, and mobile screens with a custom bottom navigation dock for mobile devices.
- ✅ **JavaScript-Free UI**: Interactive components such as dropdown menus, filter selections, and form toggle switches function entirely without JavaScript, utilizing pure CSS (`:checked` state tricks).
- ✅ **Tailwind CSS**: Styled using Tailwind CSS v2.2.19 via CDN, ensuring rapid and consistent UI development.
- ✅ **No Build Step Required**: This is a pure static site. There is no need to install Node modules or run a build pipeline.
- ✅ **Modern Aesthetics**: Clean, vibrant, green-themed design specifically tailored for an online plant, seed, and gardening store.

## Included Pages

- `index.html` - The home landing page featuring a hero banner, best sellers grid, about section, and newsletter signup.
- `product.html` - The product catalog page, equipped with functional CSS-only category filters and sorting dropdowns.
- `contact.html` - The contact page featuring a responsive layout, interactive form, and custom CSS toggle switches.

## Getting Started

Since this project is completely static and uses a CDN for Tailwind CSS, there are no dependencies to install.

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd greenden-tailwind
   ```

2. **Run the project:**
   Simply open `index.html` directly in your favorite web browser, or use a local development server like the "Live Server" extension in VS Code.

## Project Structure

```text
greenden-tailwind/
├── index.html           # Home page
├── product.html         # Products listing page
├── contact.html         # Contact Us page
├── images/              # Local image assets
└── README.md            # Project documentation
```

## Technical Highlights

- **Pure CSS Dropdowns**: The filter and sort dropdowns on the product page use the hidden checkbox trick (`peer-checked`) to toggle visibility seamlessly without JavaScript.
- **Mobile Dock**: A bottom navigation dock appears on mobile devices when scrolling down, offering quick, app-like access to primary navigation links.
- **Custom Search Input**: Designed with a custom `-webkit-search-cancel-button` in CSS to align with the overarching aesthetic.

## License

This project is open-source and free to use.