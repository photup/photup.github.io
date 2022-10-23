/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,cjs,vue}", "./index.html"],
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    screens: {
      sm: '481px',
      md: '800px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        tblack: '#222831',
        tdeep: '304A5E'
      },
      corePlugins: {
        preflight: false,
      },
      borderRadius: {
        'none': '0',
        DEFAULT: '3px',
      },
      boxShadow: {
        'itp': '1px 10px 30px 0 rgb(0 0 0 / 10%)',
      }
    }
  }
}
