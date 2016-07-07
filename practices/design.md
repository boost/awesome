# FRONT-END DESIGN GUIDE

Use BEM for naming conventions:

http://getbem.com/

Use SCSS for your CSS goodness:

http://sass-lang.com/

# Folder Structure:

Note that files that are to be included in app.scss should be prefixed with an '_'. This prevents the file from being compiled individually.

blocks/
  - _header.scss
mixins/
  - _bem.scss
modules/
  - _colors.scss
  - _utility.scss
partials/
  - _base.scss
  - _typography.scss
vendor/

# app.scss

// Third-party
@import 'vendor/normalize';
@import 'vendor/foundation';

// Mixins

@import 'mixins/bem';

// Modules and Variables
@import 'modules/colors';
@import 'modules/utility';

// Partials
@import 'partials/typography';
@import 'partials/base';

// blocks
@import 'blocks/header';

# BEM Mixin

/*------------------------------------*\
    #BEM
\*------------------------------------*/

/// Block Element
/// @access public
/// @param {String} $element - Element's name
@mixin element($element) {
    &__#{$element} {
        @content;
    }
}

/// Block Modifier
/// @access public
/// @param {String} $modifier - Modifier's name
@mixin modifier($modifier) {
    &--#{$modifier} {
        @content;
    }
}
# Front-end coding guidelines

*The idea of this note will*

* Make it easier to peer review
* Create a better workflow
* Create a shared vocabulary
* Be a useful reference

##Contents

* [NAMING CONVENTIONS](#naming-conventions)
  * [BEM](#bem)
  * [USE SCSS FOR YOUR CSS GOODNESS](#scss-goodness)
  * [NAMING APPROACH](#naming-approach)
* [CSS and SASS](#css-and-sass)  
 * [Make CSS manageable](#make-css-manageable)
 * [Make CSS consistent](#make-css-consistent)
* [Accessibility][#accessibility]


## NAMING CONVENTIONS

### BEM for naming conventions:  
  http://getbem.com

  **1. Folder Structure:**

  Note that files that are to be included in app.scss should be prefixed with an '_'. This prevents the file from being compiled individually.

  blocks/
    - _header.scss
  mixins/
    - _bem.scss
  modules/
    - _colors.scss
    - _utility.scss
  partials/
    - _base.scss
    - _typography.scss
  vendor/

  # app.scss

  // Third-party
  @import 'vendor/normalize';
  @import 'vendor/foundation';

  // Mixins

  @import 'mixins/bem';

  // Modules and Variables
  @import 'modules/colors';
  @import 'modules/utility';

  // Partials
  @import 'partials/typography';
  @import 'partials/base';

  // blocks
  @import 'blocks/header';

  # BEM Mixin

  /*------------------------------------*\
      #BEM
  \*------------------------------------*/

  /// Block Element
  /// @access public
  /// @param {String} $element - Element's name
  @mixin element($element) {
      &__#{$element} {
          @content;
      }
  }

  /// Block Modifier
  /// @access public
  /// @param {String} $modifier - Modifier's name
  @mixin modifier($modifier) {
      &--#{$modifier} {
          @content;
      }
  }


### SCSS goodness
  http://sass-lang.com

## Naming Approach

Ideally what we should be doing when we are doing our front end is looking at the whole design and cutting sections into reusable modular blocks. We can then reference elements and modifiers within the block. This then should eliminate problems with inheritance and specificity.

An element being an element within a block, name these with __

IE a header with a nav inside of it would be .header__nav

A modifier is an existing element that has a modified state, ie a button element block could have a red modifier.
Modifiers should be named with --

IE. .button, .button--red

### Example

**HTML**
```
<div class='header'>
  <img src='' class='header__logo' />
  <div class='header__content'>
    <p class='header__content__description'></p>
    <ul class='header__content__list'>
      <li class='header__content__list__item header__content__list__item--active'>Item</li>
      <li class='header__content__list__item'>Item</li>
      <li class='header__content__list__item'>Item</li>
    </ul>
  </div>
</div>
```

**SCSS**
```
$red: #FF0000;
$grey: #ccc;

.header {
  height: 200px;

  @include element('logo') {
    width: 100%;
  }

  @include element('content') {
    color: $red;

    @include element('list') {
      display: inline-block;

      @include element('item') {
        color: $grey;

        @include modifier('active') {
          color: $red;
        }
      }
    }
  }
}
```
**This will generate the folliwng CSS**
```
.header {
  height: 200px;
}

.header__logo {
  width: 100%;
}

.header__content {
  color: #FF0000;
}

.header__content__list {
  display: inline-block;
}

.header__content__list__item {
  color: #ccc;
}

.header__content__list__item--active {
  color: #FF0000;
}
```

## CSS and SASS

THREE GUIDING PRINCIPLES FOR CSS

1. Make it manageable
3. Make it consistent

### Make CSS manageable

**1. Don’t use !important or IDs in your CSS**

IDs are fine for javascript and html. They are not for styling. Overriding IDs with classes is almost impossible (256 to override in most browsers), which severely limits the use of modular components and modular design philosophy.

Never use !important.  If you do need to use !important (eg: for a javascript override where there is no other option), comment it well and make sure the path is specific to just the place you need it.

If the html does not have the classes you require, add them.


**2. CSS should not rely on page structure**

Never write css that looks like this: or should not be more than 3 levels of page structure

    section {
      section {
        article {
          .item { }
        }
      }
    }


The number of surrounding base tags should not matter, and without extensive commenting no one will understand your reasoning for this (including yourself in two years’ time). Any change to the html of a page will break the design. Use classes on tags instead, and only nest to a level that is needed.

**3. Keep media queries with context**

Where possible, keep media queries inline with the component code. This acknowledges that each break-point is as important as any other, and makes it easier to build a complete design across the various supported breakpoints.

SASS:

    .block {
      	// Regular styles
      	@media (some-size){
      		// media specific overrides for .feature
        }
    }


**4. Pages or page types are not blocks.**

Do not put classes on the body element or similar in order to style a page. This approach should only be used in rare circumstances.

If a block looks different on a certain page type, create a modifier for that block.

Good:

    .block .block--larger

Bad:

    .home-page .block

The typography file should only be used for typography. If specificity is needed, use a layout based class name (eg .content, .main, or .layout) and leave a comment explaining why the class is there. If possible, only give the specific overrides to the rules that need it (pull them out of any nested sass). This will make it easier to deal with overriding the other styles later, and often prevents an unneeded sass nesting level.

**4. Make CSS contained**

Styles that are reused across multiple block should be defined outside a block. These are called "global styles". Everything else should be contained within a block.

Nesting blocks will happen so we need to make sure that the outer block doesn't needlessly effect the inner block's style.

### Make CSS consistent

Having consistent rules which each developer abides by means that teams can quickly scale without introducing confusion about how a block works.

**1) Use Mixins sparingly - know when to use @extends or blocks.**

Remember that @extends can not be used within media queries.

**2) Use nesting sparingly.**

If using a css preprocessor don't nest more the 3 times if possible (max 5!). This simplifies resulting css rules and makes specificity easier. It also makes it easier to reuse the parts of a block, or restructure the html of a block at a later stage.

If you wouldn’t write it in css, don’t let it output that way when using a preprocessor.

**3) Follow the style guidelines used in the project**

If you are using a css framework, mimic the framework where possible. (DRY)


## Accessibility
**soon**
