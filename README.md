# @andrewjh271/menu v1.0.0

A responsive dropdown menu. View example usage [here](https://andrewjh271.github.io/dropdown-menu/).

### Installation

Using npm:

```
$ npm install @andrewjh271/menu
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
    <h1 class="title"><a href="https:www.lichess.org">lichess.org</a></h1>    
        <div class="dropdown-container hide-mobile">
            <li class="dropdown">
                <div class="dropdown-header">Play</div>
                <ul>
                  <li><a href="https://lichess.org/">Create a game</a></li>
                  <li><a href="https://lichess.org/">Arena tournaments</a></li>
                  <li><a href="https://lichess.org/">Swiss tournaments</a></li>
                  <li><a href="https://lichess.org/">Simultaneous exhibitions</a></li>
                </ul>    
            </li>
            <li class="dropdown">
                <div class="dropdown-header">Puzzles</div>
                <ul>
                    <li><a href="https://lichess.org/">Puzzles</a></li>
                    <li><a href="https://lichess.org/">Puzzle Dashboard</a></li>
                    <li><a href="https://lichess.org/">Puzzle Streak</a></li>
                    <li><a href="https://lichess.org/">Puzzle Storm</a></li>
                </ul>
            </li>
        </div>    
</ul> 
```

Comment out unused Hamburger types in `node_modules/hamburgers/_sass/hamburgers/hamburgers.scss`

### Customization

Variables in sass/menu.scss:

```sass
$menu-color-main: #475480;
$dropdown-color: #f0e7ff;
$dropdown-highlight: #629cf3;
$spacing-base: 9px;
$max-height: 700px;

$hamburger-padding-x: 18px !default;
$hamburger-padding-y: 5px !default;
$hamburger-layer-width: 25px !default; // default = 40px
$hamburger-layer-height: 2.5px !default; // default = 4px
$hamburger-layer-color: $menu-color-main !default;
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
