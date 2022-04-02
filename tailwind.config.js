module.exports = {
    content: ["./src/**/*.{html,js}"],

      theme: {
        extend: {
            screens: {
              sm: '480px',
              md: '768px',
            //   lg: '976px',
              lg: '1254px',
              xl: '1440px',
            },
            colors: {
            //   'blue': '#1fb6ff',
            //   'purple': '#7e5bef',
              'pink': '#ff49db',
            //   'orange': '#ff7849',
            //   'green': '#13ce66',
            //   'yellow': '#ffc82c',
              'gray-dark': '#273444',
            //   'gray': '#8492a6',
              'gray-light': '#d3dce6',
              'blue-light': '#f6f8fa',
              'card': '#3c3e44',
              'hover': '#FF9800'
            },
            fontFamily: {
              sans: ['Graphik', 'sans-serif'],
              serif: ['Merriweather', 'serif'],
            },
            spacing: {
              '55': '13.75rem',
              '64': '16rem',
              '128': '32rem',
              '144': '36rem',
              '150': '37.5rem',
              '304': '76rem',
            },
            borderRadius: {
              '4xl': '2rem',
            }
        }
      }
    }
