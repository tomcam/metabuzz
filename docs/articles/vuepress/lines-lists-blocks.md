# Lines, lists, and blocks of text Markdown

Markdown has extensive coverage "blocks" of text, such as lists, block quotes, and horizontal rules.

## Markdown usually treats multiple blank lines as one

One thing that's a little hard to get use to is that in Markdown, multiple blank lines are
normally treated as one blank line. Take this markdown for example:

##### Markdown:

```markdown
Line 1

Line 3?



Line 7?
```

##### Result:

***

Line 1

Line 3?



Line 7?
***


## Markdown: two adjacent lines of text 

Like HTML, Markdown considers the end of a line of text to be 
equivalent to a space.
Let's take a look.

##### Markdown:

```markdown
who found you in the green forest
and were you very sorry to come away?
```

##### Result:

***
who found you in the green forest
and were you very sorry to come away?
***

This turns out to be very useful when you're writing large amounts of
documentation using tools like VuePress. Partly because it's the way HTML
behaves anyway, but also because it helps tools "pour" text into paragraphs
that adjust according to the size of your screen.

## Markdown Lists

HTML (and therefore Markdown) recognizes two kinds of lists: unordered (bullet lists),
and ordered (numbered lists).

### Markdown unordered list syntax

Unordered list items start the line with an asterisk and a space (`* `):

##### Markdown:


```markdown
* Try rebooting.
* In the likely event that doesn't work, smash it with a hammer.
```

##### Result:

***
* Try rebooting.
* In the likely event that doesn't work, smash it with a hammer.
***

### Markdown ordered list syntax

Ordered list items start the line with a number, a period and a space (`1. `):

##### Markdown:

```markdown
1. Eddie Van Halen
1. John Mayer
```

##### Result:

***
1. Eddie Van Halen
1. John Mayer
***

## Horizontal lines (aka horizontal rules)

You can get a horizontal rule by using `---` on a line by itself:


```markdown
---
```

##### Result:

---


Next: [Tables](tables.md)





