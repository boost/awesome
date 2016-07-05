# Design

# Front End

Use BEM for naming conventions:

http://getbem.com/

Use SCSS for your CSS goodness:

http://sass-lang.com/

##Folder Structure:

Ideally what we should be doing when we are doing our front end is looking at the whole design and cutting sections into reusable modular blocks. We can then reference elements and modifiers within the block. This then should eliminate problems with inheritance and specificity.

An element being an element within a block, name these with __

IE a header with a nav inside of it would be .header__nav

A modifier is an existing element that has a modified state, ie a button element block could have a red modifier.
Modifiers should be named with --

IE. .button, .button--red

blocks/
  - _header.scss
mixins/
  - _bem.scss
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


# Example

<div class='header'>
  <img src='' class='header__logo' />
</div>
