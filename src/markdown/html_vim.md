# HTML VIM blogpost

## Introduction

This is not a beginner post, if you are not aware of anything related to this, then you should check out my Introduction to VSCode vim here: [Link to Introduction post](./introduction_to_VSCode_VIM.md)

## Basic VIM Navigation

- Movement keys: "h", "j", "k", "l"

```plaintext
        k(up)

h(left)        l(right)

        j(down)
```

- Word navigation: "w", "b", "e"

```plaintext
w(word) b(back one word) e(end of a word)
```

- Line navigation: "0" beginning of line, "$" end of line

```plaintext
0(beginning of line) $(end of line)
```

- Paragraph navigation: "{" previous paragraph, "}" next paragraph.

```plaintext
{(previous paragraph) }(next paragraph)
```

## cit and cat

cit works for changing(c) inside(i) tags(t). It deletes stuff inside of the tags and then puts you inside of insert mode.

```plaintext
cit
```

cat works for changing(c) around(a) tags(t). It deletes stuff inside and including the tags and puts you inside of insert mode.
So now I think you can guess what dit and dat does. or yit and yat.

## ci, di, yi

The previous example was for tags specifically, but you can use what you have learned about ci, di and yi for other stuff. In HTML specific it will be convenient to use ci" and di", or ca" and da" when dealing with classnames in HTML. Or ci' if you use single quotes.

## Surround

V to visual a line, then S for surround, press t to write in the tag, then do li and enter:
VStli, to surround with li, or VSth1 for example

For single words do visual on that, with viw then S and t + tagname.

This one is really handy, and there are multiple ways of doing it.
VS + t + tagname is really good.

## EasyMotion

This is where it gets a bit tricky, you will se it in the screenshot I provide underneath. By pressing "<leader><leader>w" it will open EasyMotion, and then you can just press the character associated with the place you want to go. At a first glance it might look a bit confusing and chaotic. But when you have your eyes set at the specific point you want to go to, it gets intuitive quite fast.

## Advanced navigation

Search: "/" to search for text, "n" to move to next occurance of the search, "N" for previous occurance.
Jump to line: ":linenumber" to move to specific line, "gg" to go to beginning, "G" to go to the end

## Macros (advanced)

Recording macro: "q" followed by a letter (naming the recording) to start recording, perform the actions, then q to stop. replay with "@" followed by the letter. If wanting to the macro at x number of times, do 50@+ letter, or x@letter. I personally just use qq when recording, and then the macro will be named q, so doing it 50 times will be 50@q. Its also possible to just replay the last macro doing @@, so you can do 50@@ as i did in the example video below.

Repeating last command: "." to repeat a change. In the following example we will change a word, then wanting to do that at the next occurance as well, doing "n" for next occurance, and then "." to repeat the change.

I am going to show you how to first turn a document that has an animal name on each line, into a oneliner that seperates each with a comma. Then I'm going to use that list that has commas to make them into list elements. Its quite a nice show:

### The power of macros:

### While writing this I figured out a better way, using the surround we learned earlier:

## J = 5j and K = 5k

I have remapped "J" and "K" to be equivilant of 5j and 5k to easier go up and down a document by 5 lines at a time. This is just a personal preference, but that way I can skim through a file and use "j" and "k" for more precise line changes.

## Other shortcuts I use in my workflow

I often use different shortcuts to navigate around in VSCode, having it in combination with my VIM configurations makes everything working like a charm.

First of all I have made a more minimalistic look in VSCode because I dont like distractions while working, so the left sidebar that you probably have, I have removed that completely. And then I use command + b to open/close the explorer. If I want to change it to be the source control I press "< LEADER > + p" to open the command palette, and then search for source control, or whatever you want to look up. When I'm done with it I press command + b to close it so that I can just have my files opened.

I also use command + w to close files I'm done with.

I use "< LEADER > + tn" to switch to the next tab, change the n with p for previous tab. If I have multiple tabs open I can use control + h/j/k/l to change to the different tabs in splits.

When making a new file inside of the folder I'm currently in I do ":e" and then the filename. This will open that file, if it doesnt exist it will make it.

I also use command + p to search inside of files in the document. The explorer is nice visual to understand the structure of the repository, but apart from that its not necessarely useful when navigating around. So I rarely use that.

If I want to make a new folder and something inside of it, I just do ":e folder/folder.txt".

## Change tags

This one is quite easy and really useful when it comes to changing tags in HTML. when you are inside of a tag, just to cstt and what you want to change it to.

### Video:

In this video i first use cstt + li, and then i use "j" and the "." operator to repeat last changes.

## Increment and decrement values

Be at the start of the line or on the number, then do CTRL + A to increment by 1. If you want to increment more then write the number first and then do CTRL + A. For example: want to increment by 50: 50CTRL+A.

Be at the start of the line or on the number, then do CTRL + X to decrement by 1. If you want to decrement more then write the number first and then do CTRL + X. For example: want to decrement by 50: 50CTRL+A.

```javascript
var add2 = function (number) {
  return number + 2;
};
```

```javascript
console.log("hello world");
```
