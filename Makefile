bin = ./node_modules/.bin

npm:
	rm -rf ./dist
	mkdir -p ./dist
	$(bin)/babel ./src/index.js -o ./dist/input.js

build:
	rm -rf ./_gh_pages
	NODE_END=production $(bin)/webpack --config webpack.production.config.js
