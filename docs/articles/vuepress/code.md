# Displaying code in Markdown

If you're writing technical documentation you may want a way to delineate blocks of 
code, sometimes known as a *code fence*, also known as a *code block*.

### Creating a code block, aka code fence

The simplest way to show code is to wrap it between two lines consisting of 3 backticks in a row:
    
    ```
    title: Welcome to Example.com
    ```

And the result would be:

 ```
 title: Welcome to Example.com
 ```

You can get exactly the same effect by preceding each line of code with exactly 4 spaces.



### Keyword highlighting for computer languages

Suppose you're documenting YAML. You could follow the 3 backticks with the word `yaml`
to show it with keyword highlighting:

    ```yaml
    title: Welcome to Example.com
    ```
 The published result would show like this:
 
````yaml
 title: Welcome to Example.com
````
 
Many, many languages are supported. Here are a few examples:

#### Powershell

Markdown source:

    ```powershell
    echo hello, world.
    ```
Published result:

```powershell
 echo hello, world.
``` 
#### Javascript

Markdown source:

    ```js
    document.write('hello, world.)
    ```
    
Published result:

```js
  document.write('hello, world.)
```
  
A complete list can be found in the "languages" node of 
the PrismJS source file [components.json](https://github.com/PrismJS/prism/blob/master/components.json).

