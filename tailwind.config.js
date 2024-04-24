module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
      theme: {
        extend: {
          screens: {
            dark: { raw: '(prefers-color-scheme: dark)' },
          },
        },
      },
    },
    plugins: []
  }