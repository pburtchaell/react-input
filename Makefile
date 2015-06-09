bin = ./node_modules/.bin

SRC_JS = $(shell find src -name "*.js")
DIST_JS = $(patsubst src/%.js, dist/%.js, $(SRC_JS))

js: $(DIST_JS)

$(DIST_JS): dist/%.js: src/%.js
	mkdir -p $(dir $@)
	$(bin)/babel $< -o $@

build:
	rm -rf _gh_pages
	NODE_END=production $(bin)/webpack --config webpack.production.config.js

.PHONY: build js
