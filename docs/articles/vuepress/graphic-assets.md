# Handling graphic assets

Images and CSS assets go into the `public` directory, which in this example would be in `docs/.vuepress/public`.
Assuming you have a file `docs/.vuepress/public/kitten.jpg`, you would refer to it in your Markdown like this:

```markdown

## It's all about the...  

![Federally required Kitten picture](kitten.jpg)

### Cat pictures
```

## It's all about the...  

![Federally required Kitten picture](/assets/img/kitten.jpg)

###  Cat pictures

VuePress will add the necessary path informaion to make it work when the site is built.

## Image link format

The template `![](image.ext)` works like this. The `!` followed without spaces by the pair of square brackets
is a markdown convention for image links. The text in the square brackets is a description for 
sight-impaired users, and the `(image.ext)` is the image filename.

Next: Learn about [formatting characters in Markdown](formatting-characters.md)
