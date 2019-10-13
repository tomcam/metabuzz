# Table syntax in Markdown

VuePress uses [GitHub-style table markdown](https://help.github.com/articles/organizing-information-with-tables).
Here are some examples.

### Simple table example

To get a table that looks like this:

##### Result:

| Header                |                            |
| --------------------- | -------------------------- |
| Row 1, Column 1       | Row 1, Column 2            |


You'd use the following markdown:

##### Markdown:

```markdown
| Header                |                            |
| --------------------- | -------------------------- |
| Row 1, Column 1       | Row 1, Column 2            |
```


### Typical table with several rows

Most tables have multiple columns and rows, for example:

| Column 1        | Column 2         |
| --------------- | ---------------- |
| Row 1, Column 1 | Row 1, Column 2  |
| Row 2, Column 1 | Row 2, Column 2  |
| Row 3, Column 1 | Row 3, Column 2  |
| Row 4, Column 1 | Row 4, Column 2  |

##### Markdown:

    | Column 1        | Column 2         |
    | --------------- | ---------------- |
    | Row 1, Column 1 | Row 1, Column 2  |
    | Row 2, Column 1 | Row 2, Column 2  |
    | Row 3, Column 1 | Row 3, Column 2  |
    | Row 4, Column 1 | Row 4, Column 2  |

### Aligning text within columns

Normally table text is left-aligned. You can change alignment by using colon characters
(`:`) in the second header row, which contains the dash characters (`-`). 

* **To left-align the column**, replace the leftmost dash with a colon
* **To right-align the column**, replace the rightmost dash with a colon
* **To center-align the column**, both the leftmost and rightmost dashes with a colon

Here's a table showing alignment:

| Alignment             | Column 2       | Column 3      |
| --------------------- |:--------------:| -------------:|
| Center align column 2 | *              |               |
| Right align column 3  |                | Boo           |
| Right align numbers   |                |   1           |
|                       |                | 123           |
|                       |                |     $456.67   |

Markdown:

    | Alignment             | Column 2       | Column 3      |
    | --------------------- |:--------------:| -------------:|
    | Center align column 2 | *              |               |
    | Right align column 3  |                | Boo           |
    | Right align numbers:  |                |   1           |
    |                       |                | 123           |
    |                       |                |     $456.67   |

For more details, see the 
[GitHub style documentation](https://help.github.com/articles/organizing-information-with-tables/).

Next: [Displaying code in Markdown](code.md)
