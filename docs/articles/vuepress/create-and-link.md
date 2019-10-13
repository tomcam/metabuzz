# Create and link to more pages

A VuePress documentation site consists of one or more directories.
Each directory requires at least a single file named `README.md`.
Files ending in `.md` use a simplified formatting scheme called
[Markdown](https://guides.github.com/features/mastering-markdown/).
These files are translated by VuePress into HTML.

Normally there will be other files in the directory, of course.

Here's a minimal Markdown file that links to another one.
You can append this text to bottom the `README.md` file in the
root (in this case, `/docs/`) directory of your
VuePress project if you like, because the `/guide/`
directory has already been created for demonstration purposes.

```markdown
# Markdown demo page

If you want specifics, try the 
[using vue](/guide/using-vue.md) section. 
Otherwise, get an overview by visiting 
the [guide](/guide/).
```

This shows pretty much everything you need to link to
pages or directories. `# Markdown demo page` will
be converted to an `<h1>` tag in HTML. VuePress
automatically creates an anchor to that part of the
page.

The text `[using vue](/guide/using-vue.md)`
will be rendered into an HTML link to a document called `using-vue.html`
in the `/guide` directory, with `using vue` as the anchor text.
The plain text surrounding it becomes a standard `<p>` paragraph.

You can learn more about how this works where the
VuePress [directory structure](https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing)
is documented.

How about images? That's discussed in [Handling graphic assets](graphic-assets.md)
