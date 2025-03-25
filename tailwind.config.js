/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Add the paths to your components
  ],
  theme: {
    extend: {
      fontFamily: {
        'lancelot': ['Lancelot', 'cursive'],
        'serif': ['serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      
    
    }
    
  },
  
  plugins: []
};