module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/bg-hero.jpeg')",
        'banner-pattern': "url('/src/coffee-shop.jpeg')"
      }
    },
  },
  plugins: [],
}