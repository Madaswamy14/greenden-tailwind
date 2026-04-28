# GreenDen Tailwind CSS

A modern, responsive website template for a nursery or plant shop, built with Tailwind CSS.

## Features

- ✅ Fully responsive design
- ✅ Dark mode support
- ✅ Modern UI with glassmorphism effects
- ✅ Built with Tailwind CSS v4
- ✅ Simple navigation and product cards

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd greenden-tailwind
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will start a local development server, usually at `http://localhost:3000`.

2. **Build for production:**
   ```bash
   npm run build
   ```
   This will create an optimized production build in the `dist/` folder.

### Project Structure

```
greenden-tailwind/
├── index.html           # Main entry point
├── input.css          # Tailwind CSS configuration
├── src/
│   ├── js/              # JavaScript files
│   │   ├── main.js      # Main script (dark mode toggle)
│   └── css/             # Additional CSS (empty, used for overrides)
├── dist/                # Production build output
├── package.json         # Project configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Customization

### Tailwind CSS Configuration

Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Breakpoints
- Plugin settings

### Dark Mode

Dark mode is enabled by default and can be toggled using the sun/moon icon in the navbar.

To change dark mode behavior, edit `src/css/main.css` or `input.css`.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with Tailwind CSS v4**