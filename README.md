# Welcome to [chaScript](https://github.com/sifatMoonjerin/chaScript)

A ***not so useful, but fun to build*** programming language that has a syntax similar to **LISP** and inspired by [dropbear](https://github.com/stevekinney/dropbear). 
It has some of the basic functionalities like variable declaration, math operations, conditional statement, and loop. The whole language is written in typescript.

## Table of contents
* [Getting started](#getting-started)
* [Language overview](#language-overview)
   * [Number](#number)
   * [String](#string)
   * [Boolean](#boolean)
   * [Function](#function)
   * [Keyword](#keyword)
* [License](#license)

## Getting started

To install all the dependencies run: 
```
npm install
```
To start the REPL:
```
npm start
```
To test:
```
npm test
```

To create a symlink in the global folder:
```
npm link
```

Now, you will be able to start the REPL from anywhere using:
```
chascript
```

To execute a specific file(.chascript):
```
chascript run filename.chascript
```

## Language overview

### Number

Only positive integers can be used directly in chaScript.
```
(display 123)
```

For negative integers:
```
(display (subtract 0 123))
```

For fractions: 
```
(display (divide 1 2))
```

### String

In chaScript, strings are defined with `"`. `'` quote is not valid.
```
(display "hello")
```

### Boolean

In chaScript, TRUE and FALSE are built-in booleans.

### Function

Everything is a function in chaScript world. A function starts with `(` followed by its name. Rest of the statement before the closing `)` are arguments of the function. 
Arguments are separated with spaces.
```
( display "Hello World" )
```
* `(` marks the start of the function
* `display` is the name of the function
* `"Hello World"` is an argument of the function
* `)` marks the end of the function

```
( add 2 4 6 )
```
* `(` marks the start of the function
* `add` is the name of the function
* `2`, `4`, and `6` are the arguments of the function
* `)` marks the end of the function


### Keyword
There are **24** default keywords in chaScript.

#### Function keywords (18)

| Name        | Argument type  | Argument No. | Return type | Example                                      |
|-------------|----------------|--------------|-------------|----------------------------------------------|
| void        | any            | any          | undefined   | (void (display "hello") (display (add 1 2))) |
| display     | any            | 1            | undefined   | (display "hello")                            |
| toNumber    | any            | 1            | number      | (toNumber "4")                               |
| toString    | any            | 1            | string      | (toString 4)                                 |
| concat      | string         | any          | string      | (concat "a " "b " "c")                       |
| eq          | any            | 2            | boolean     | (eq 5 5)                                     |
| neq         | any            | 2            | boolean     | (neq 5 5)                                    |
| gt          | number         | 2            | boolean     | (gt 5 5)                                     |
| gte         | number         | 2            | boolean     | (gte 5 5)                                    |
| lt          | number         | 2            | boolean     | (lt 5 5)                                     |
| lte         | number         | 2            | boolean     | (lte 5 5)                                    |
| add         | number         | any          | number      | (add 4 5 6)                                  |
| subtract    | number         | any          | number      | (subtract 6 1 4)                             |
| multiply    | number         | any          | number      | (multiply 2 3 4)                             |
| divide      | number         | any          | number      | (divide 8 4)                                 |
| remainder   | number         | any          | number      | (remainder 6 3)                              |
| max         | number         | any          | number      | (max 6 3)                                    |
| min         | number         | any          | number      | (min 6 3)                                    |


#### Special keywords (3)

| Name        | Details                      | Argument No.   | First argument                 | Second argument            |
|-------------|------------------------------|----------------|--------------------------------|----------------------------|
| set         | variable declaration         | 2              | variable name (eg. FIRSTNAME ) | variable value (eg. "ABC") |
| if          | conditional operation        | 2              | boolean                        | function                   |
| loop        | similar to while loop        | 2              | boolean                        | function                   |

Examples are listed in [examples](https://github.com/sifatMoonjerin/chaScript/tree/master/examples) folder.

#### Constant keywords (3)

| Name        | Return value      | Example         |
|-------------|-------------------|-----------------|
| TRUE        | true              | (display TRUE)  |
| FALSE       | false             | (display FALSE) |
| PI          | 3.141592653589793 | (display PI)    |

## License
MIT

