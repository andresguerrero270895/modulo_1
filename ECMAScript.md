**Let - Var - Const**

Let and Var are ways to declare a variable inside the code.

VAR - allows to reasssign the value or access the variables from anywhere in the code.  

LET - allows declared variables with a limited access to the code block where they are defined, instead of full access Like VAR.

CONST - is used to declare variables that cannot mutate

**Scope**
Is the portion of the code where the variables were defined and can be accessed.

**Global Scope**
When a variable is declared outsite of any function or block of code, it becomes in a global variable and is available throughout the entire program.

**Local Scope**
When a variable is declared inside a function or block of code, is consider as a local variable and only can be accesible inside the function or block. That helps to encapsulate variables and avoid conflicts.

**Hoisting**
Is a default behavior in Javascript where declarations of variables, functions, and classes are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed.This allows you to use some elements before they appear in the source code.

Only declarations are hoisted, not the initializations or assignments.

**Object literals**
We have the option and posibility to create objects with their key-value pairs inside the curly braces.
In an object, you can create a property whose name can be changed and defined in real time

**Template literals**
They are a clean and expressive way to create strings within which it is possible to insert code expressions directly to concatenate their value.

1. To create a template string, you first need to use backticks (``). Just like single quotes (' ') and double quotes (" "), these new quotes exist.

2. On the other hand, to insert an element within a string, you'll need to enclose it in curly braces (${ }). This way, the string will know that this is a value you're adding.

**Escape Sequence**
An escape sequence is a combination of characters that represents a special character in a string, such as a line break or a tab, and begins with a backslash (\). For example, '\n' represents a line break and '\t' a tab, allowing these special characters to be easily included in text.

**Destructuring**
Is a way to extract multiples values or properties from arrays or objects

Spread Operator	
Purpose	Expands (unpacks) elements of an iterable (array, string, object properties) into individual parts. Used in array literals, object literals, or function calls (as arguments).

Rest Operator
Collects (gathers) multiple elements or properties into a single array or object. Used in function parameters or array/object destructuring assignments.


**Default Assigment and Nullish Coalescing**
Default assignment provides fallback values, while Nullish Coalescing (??) and its assignment variant (??=) offer a modern, precise way to assign defaults only for null or undefined