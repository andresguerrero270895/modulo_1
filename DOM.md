**RENDER**
1. DOM : Represents an structured web page. It's seem like a tree, where each HTML tag is a node, icnluding text and images.
2. CSSOM : Is a model that represents the styles  associated with the DOM. The CSSOM is similar to the DOM, but it focuses on the page's style.
3. RENDER TREE : This is a combination of the DOM ans CSSOM that focuses solely on the HTML document elements that are visible on the page. This tree represents all th visual elements of the page and their styles, and it's what the browser uses to render the page on the screen.
4. LAYAOUT : The layout of a page determines the size of the output device(viewport), thus providing context for styles that depend on it. This viewport can be configures within the <meta> tag, where we can modify its dimensions and the initial scale of the page. The layout is the calculation of the positions and sizes of the elments on the page. Before rendering the elements, the browser needs to know where and how large they should be.


- DOM : Document Object Model

- DOM API : The DOM API( Document Object Model Application Programming Interface) is a set of interfaces and methods provided by browsers to allow our code scripts to interact with the DOM 


**Selector**

all methods and properties that allow us to select specific elements from a web site without affecting the nature and behavior of other DOM elements. 

document.getElementById("id") : Selects an item by its unique ID 
document.getElementByClassName("class") : Select all the elements that have an specific class.
document.getSelector("selector") : Select the first element that matches with the specified CSS selector. 
element.childNodes : Get all the child nodes of the element, including tetxt nodes.
element.firstChild : Gets the first cild of the specified item 
document.querySelectorAll(selector) : Return all the DOM elements that matches with the specified CSS selector
element.textcontent :  Allow to access or modify the text content of an item 
element.appendChild(childElement) : add a new child to the end of  an item's chlid list.

**EvenListener**

Receives two arguments. First, the event ("click") and then a callback(login function)

