module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.svelte'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Noto Sans KR', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  }
}
