##Installing

####Initial npm install

`npm install`

####Update [Sass_framework](https://github.com/mittelgrau/sass_framework) submodule

`git submodule update --recursive --remote`

#### Serve Jekyll

`jekyll serve --livereload`

####Add local Proxy for projectname.code

`hotel add http://127.0.0.1:4000 --name PROJECTNAME`

#### Run webpack 

`npm run watchmin ` 

##sass Framework

```
.
├── _core
|
├── _lib
|   └──breakpoint
|   └── modularScale
|   
├── _pages
|   ├── _about.scss
|   └── _home.scss
|  
├── _sections
|   ├── _footer.scss
|   └── _header.scss
|   └── _nav.scss
| 
├── _config.scss
└── main.scss
```


