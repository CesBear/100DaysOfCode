# Markdown Useful tips and syntax


#### Flavors of Markdown

* Markdown (Original, John Gruber)

* Enhaced version:

# Markdown Extra
# Multi-Markdown
# GitHub Flavored Markdown
# Several More



# Why Markdown?

* Simple formatting
* Lighteeigth
* Widely Supported
* Cross-Platform / cross-device
* Online/Cloud Bases workflows


# Use Cases

Cloud Basesoutlining
Basesoutlining
Composition
Content for blog or website
GitHub / Bitbucket


# Online MD

stackEdit.io





Linebreake:  two blank spaces where I need to make a break.



HEADER 1
========

Header 2
------------

# header 1
## header 2
### header 3
#### header 4
##### header 5
###### header 6




# Text Attributes Example

In this first sentence , I will _really_ place  
*emphasis* on my words in two different ways.

Next, I will write_very_, **strong** or bold text, also in two different ways.




In this first sentence , I will _really_ place  
*emphasis* on my words in two different ways.

Next, I will write_very_, **strong** or bold text, also in two different ways.

This example will contain an _intra_word emphasis. This is a variable  
name var_example_int but MarkDown will render emphasis by default.



# Quote Example

> Always remmebr that you are absolutely unique.  
Just like everyone else.
#####_Margaret Mead_




# Code Examples

This `rm` command is used to delete files in bash.  
For example:

  cd ~
  ls -l
  rm myfile.txt
  # this is a comment
  var test  = `test`
The `rm` is for code commands


# List Examples
### Places to Shop
* Supermarket  
+ Mall  
- Gas station


# List Examples ( Multilevel List)
### Places to Shop
* Supermarket  
+ Mall  
- Gas station

### States by Population
1. California
2. Texas
3. Florida
4. New York
### Favorite Foods

* Fruit
  * Watermelon
  * Strawberry
* Veggies
  * Carrots


  # Horizontal Rule Example #

---
Paragraph 1  
3 or more "-" or "*" put a line in the paragraph
***
Paragraph 2

------

# Links Examples

One of the most popular search engine is [Google](https://google.com "Google Search").

_"See the difference when here is a space between the braces and parenthesis"_
###### _Cesar Ramirez_

One of the most popular search engine is [Google] (https://google.com "Google Search").

A distant send is Microsoft's [Bing][msb].
[msb]: http://bing.com "Bing Search Engine"


#Automatic Links

###Websites
<https://src.tips>

### Email
<jason@src.tips>

---

# Images Example

### Inline Images

This is an line images:  
![Demo](http://placehold.it/350x150)

### Referenced Images

Placehold.it is a nice place to get some placeholder graphics.  
![300x300 demo][Demo300]

[Demo300]: http://placehold.it/300 "300-pixel squared placeholder"

---


# Inline HTML Example

Sometimes you need to add some inline HTML.

<dl>
   <dt>Markdown</dt>
    <dd>An Awesome plain-text format</dd>
 </dl>

----


# Tables Examples

This is above the table.  

| Col head 1 | Col head 2 | Con head 3 |
| :--------- | :--------: | ---------: |
|R 1, C 1    | R 1, C 2   | R 1, C 3   |
|R 2, C 1    | R 2, C 2   | R 2, C 3   |
|R 3, C 1    | R 3, C 2   | R 3, C 3   |


This is below the table.

**Note:** To make column text alignment, you need to do insert ":" in the table above:  
1. :----   This will  _**Align left**_
2. :----:  This will _**Center**_
3. ----:   This will _**Align Right**_


---



# Fenced Code Blocks with Syntax Highlighting

This is code below.  


```
#! /usr/bin/env ruby
print "Hello Riby!\n"
print "Goodbye Ruby!\n"
```

Example with Java:

```java
import java.io*;

public class Foo {
public static void main(String[] args) {
  System.out.println("This is test");
  }
}
```
The code is above
