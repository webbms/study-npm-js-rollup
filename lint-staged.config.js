module.exports = {
  '{src,server}/**/!(*.min).js': ['eslint --fix', 'prettier --write'],
  '{src,server}/**/*.{ts,vue}': ['eslint --fix', 'prettier --write'],
  'src/**/*.{html,css,scss,sass,less,stylus}': ['prettier --write']
}
