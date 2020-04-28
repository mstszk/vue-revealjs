---
title: Vue-reveal.js
subtitle: Sample slides
author: Masato Suzuki
institute: Tokyo institute of Technology
aspect: "4:3"
---

## Section

### Subsection

Text

#### Subsubsection

日本語のテキスト

### Emphasis

**Bold text**

*Italic text*

~~Strikethrough~~

_Underlined text_

==Marked text==

### Lists, Horizontal rules

- List item
    - Nested list item
        - Nested list item

---

1. Ordered list item
1. Ordered list item

---

- List item
    1. Nested ordered list item

---

1. Ordered list item
    - Nested list item

### Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

### Math

#### Inline

$F = ma + \hoge$

#### Display

$$
\begin{aligned}
E &= mc^2 \\
e^{i \pi} + 1 &= 0

\end{aligned}
$$

#### Macros

$$
A \Ra B
$$

- `A \Ra B`

### Images

![](./imgs/logo.png)

#### Resize

![](./imgs/logo.png =400x80)

![](./imgs/logo.png) {{ .R }}

#### Floated

### Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

#### Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

### Blockquote

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Codes

#### Inline

`code`

#### Block code

```
Sample text here...
```

#### Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

### Others

#### emoji

- :thinking:

#### sub / sup

- H~2~O
- 19^th^

#### colors

- [Red]{{.red}}, [Orange]{{.orange}}, [yellow]{{.yellow}}, [green]{{.green}}, [purple]{{.purple}}

#### container

::: header
content
:::

::: [Theorem 0.0]{{.red}} (Pythagoras)
$c^2 = a^2 + b^2$
:::

## Thank you
