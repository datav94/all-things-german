module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        beach: '0 20px 60px rgba(16, 81, 62, 0.12)'
      },
      colors: {
        sky: {
          light: '#E1F5FD',
          soft: '#C8F3FF',
          deep: '#3CA6F2'
        },
        sand: {
          light: '#FFF8EA',
          warm: '#FFE9B8'
        }
      }
    }
  },
  plugins: []
};
