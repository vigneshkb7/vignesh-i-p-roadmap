### CSS

# Types of selectors

- simple selector based name , id, class
- pseudo selectors -> based on the event happends on the element like hover
- pseudo element selectors -> applied to the particular part of the element
- attribut selector -> applied to the attributes of the element

* is a universal selector

# way to insert css

- external css
- internal css
- inline css

# css colors

- css color can be specified in RGB,HEX,HLA

# css background

```
div {
  background-color: green;
  opacity: 0.3;  --> adds the transperancy to the background
}

```

background image

```
body {
  background-image: url("paper.gif");
}
```

background repeat & position -> property repeats an image both horizontally and vertically.

```
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

```
The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page):


body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
```

shorthand

When using the shorthand property the order of the property values is:

background-color
background-image
background-repeat
background-attachment
background-position

# css-borders

border-style specifies the style of the border

```
dotted - Defines a dotted border
dashed - Defines a dashed border
solid - Defines a solid border
double - Defines a double border
groove - Defines a 3D grooved border. The effect depends on the border-color value
ridge - Defines a 3D ridged border. The effect depends on the border-color value
inset - Defines a 3D inset border. The effect depends on the border-color value
outset - Defines a 3D outset border. The effect depends on the border-color value
none - Defines no border
hidden - Defines a hidden border
```

border-width property specifies the width of the four borders.

border-color property is used to set the color of the four borders.

border-radius: 5px; roundex corners

# css-margin margin is transparent

The CSS margin properties are used to create space around elements, outside of any defined borders.

```
margin-top
margin-right
margin-bottom
margin-left
```

# css-padding padding is transparent

The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

```
padding-top
padding-right
padding-bottom
padding-left
```

# css height/width

height/width properties are used to set the width and height of the elements

The height and width properties may have the following values:

auto - This is default. The browser calculates the height and width
length - Defines the height/width in px, cm etc.
% - Defines the height/width in percent of the containing block
initial - Sets the height/width to its default value
inherit - The height/width will be inherited from its parent value

```
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```

_!important cannot override the max-width_

The max-width property is used to set the maximum width of an element.

min-width

max-height
min-height

# css outline

An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".

outline-style: solid dotted

outline-width property specifies the width of the outline, and can have one of the following values:

thin (typically 1px)
medium (typically 3px)
thick (typically 5px)
A specific size (in px, pt, cm, em, etc)

```
p.ex3 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thick;
}
```

outline-offset property adds space between an outline and the edge/border of an element.

outline-offset: 15px;

# css text

color of the text

- color: blue;

- The text-align property is used to set the horizontal alignment of a text.

- text-align: left (or) right (or) center

- The vertical-align property sets the vertical alignment of an element.

- text-decoration property is used to set or remove decorations from text.

- text-transform property is used to specify uppercase and lowercase letters in a text.

- text-indent property is used to specify the indentation of the first line of a text. example starting of a paragraph with 50px

- letter-spacing property is used to specify the space between the characters in a text.

- line-height property is used to specify the space between lines:

- word-spacing property is used to specify the space between the words in a text.

- white-space property specifies how white-space inside an element is handled.

- text-shadow property adds shadow to text.

# css font

-font family of a text is set with the font-family property.

-font-style property is mostly used to specify italic text.

    This property has three values:

    normal - The text is shown normally
    italic - The text is shown in italics
    oblique - The text is "leaning" (oblique is very similar to italic, but less supported)

# css links

```
a {
  color: hotpink;
}
```

The four links states are:

a:link - a normal, unvisited link
a:visited - a link the user has visited
a:hover - a link when the user mouses over it
a:active - a link the moment it is clicked

# css lists

list-style-type property specifies the type of list item marker.

- circle
- square
- upper-roman
- lower-alpha

list-style-image property specifies an image as the list item marker:

```
list-style-image: url('sqpurple.gif');
```

list-style-position has outside and inside

# css display

display specifies how element to be displayed

display: block, inline

_visibility:hidden; also hides an element. but will take up the space_

# css specificity

Inline styles - An inline style is attached directly to the element to be styled. Example: <h1 style="color: #ffffff;">.

IDs - An ID is a unique identifier for the page elements, such as #navbar.

Classes, attributes and pseudo-classes - This category includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.

Elements and pseudo-elements - This category includes element names and pseudo-elements, such as h1, div, :before and :after.
