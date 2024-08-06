# @andrewjh271/menu v2.0.0

A responsive dropdown menu. View example usage [here](https://andrewjh271.github.io/dropdown-menu/).

### Installation

Install package:

```shell
$ npm install @andrewjh271/menu
```

Import the `menu.scss` file in your Sass manifest file:

```sass
@import "path/to/menu.scss"
```

Alternatively, reference the `menu.css` file in your html:

```html
<link rel="stylesheet" href="path/to/menu.css" />
```

### Usage

```javascript
import '@andrewjh271/menu';
```

Follow markup structure:

```html
<ul class="menu">
    <button class="hamburger hamburger--spin-r" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
    <h1 class="title"><a href="">lichess.org</a></h1>    
        <div class="dropdown-container hide-mobile">
            <li class="dropdown">
                <div class="dropdown-header">Play</div>
                <ul>
                  <li><a href="">Create a game</a></li>
                  <li><a href="">Arena tournaments</a></li>
                  <li><a href="">Swiss tournaments</a></li>
                  <li><a href="">Simultaneous exhibitions</a></li>
                </ul>    
            </li>
            <li class="dropdown">
                <div class="dropdown-header">Puzzles</div>
                <ul>
                    <li><a href="">Puzzles</a></li>
                    <li><a href="">Puzzle Dashboard</a></li>
                    <li><a href="">Puzzle Streak</a></li>
                    <li><a href="">Puzzle Storm</a></li>
                </ul>
            </li>
        </div>    
</ul> 
```

### Customization

Variables in sass/menu.scss or stylesheets/menu.css

```scss
:root {
  --menu-color-main: #475480;
  --dropdown-color: #f0e7ff;
  --dropdown-highlight: #629cf3;
  --spacing-base: 9px;
  --max-height: 700px;
}
```

If  you are using Sass, these variables are customizable as well:

```sass
$hamburger-padding-x: 18px !default;
$hamburger-padding-y: 5px !default;
$hamburger-layer-width: 25px !default; // default = 40px
$hamburger-layer-height: 2.5px !default; // default = 4px
$hamburger-layer-color: var(--menu-color-main) !default;
```

Customize hamburger animation by changing the class name in the html. Read more [here](https://jonsuh.com/hamburgers/).

```html
<button class="hamburger hamburger--emphatic-r" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
```

## Author

[Andrew Hayhurst](https://github.com/andrewjh271)

## Acknowledgments

* [Hamburgers by Jonathan Suh](https://jonsuh.com/hamburgers/)
* https://webpack.js.org/
* Inspired by https://lichess.org/
