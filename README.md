# PLS-Assignment
## 1. Primitive Data Types
Description:
Primitive data types in JavaScript represent the simplest types of data. They are immutable and serve as the foundation for more complex data structures.

Number: Represents both integers and floating-point numbers. JavaScript does not distinguish between integer and float types; both are handled as the same Number type.
String: Represents a sequence of characters (text), enclosed in single, double, or backtick (template literal) quotes.
Boolean: Represents a logical entity that can either be true or false.
Undefined: A variable that has been declared but has not been assigned a value. Its default value is undefined.
Null: Represents a deliberate non-value or the absence of any object value.

```js
let num1 = 42;               // Number (Integer)
let pi = 3.1416;             // Number (Floating-point)
let name = "John Doe";       // String
let isActive = true;         // Boolean
let someValue;               // Undefined (variable declared but not assigned)
let noValue = null;          // Null (explicitly set to no value)
```

- Output:<br>
![alt text](1one.png)
## 2. Design Issues of Character String Types, strings and their operations, string length options, evaluation and implementation with code.
Description:
In JavaScript, strings are considered a primitive data type, and they come with several design considerations when working with character sequences. This section will explore how strings are treated in JavaScript, their flexibility, and the operations you can perform on them.

Should strings be a special kind of character array or a primitive type?
Character Arrays: In some languages, strings are implemented as arrays of characters, giving the programmer direct control over each character and requiring manual memory management.

In JavaScript: Strings are not arrays; they are immutable, which means you cannot modify them directly after creation. However, strings in JavaScript are internally represented as arrays of characters for indexing and other operations, but with built-in memory management.
Primitive Type: In JavaScript, strings are treated as primitive types. This means they are automatically managed in terms of memory and offer easy-to-use operations, but they may not provide the fine-grained control available with character arrays.

In JavaScript: You can perform many operations on strings directly, like concatenation, trimming, or splitting, without worrying about memory allocation or indexing manually.
Should strings have static or dynamic length?
Static Length: Some languages require strings to have a fixed length, which is determined at compile-time. This can be more memory-efficient but less flexible.

In JavaScript: Strings have a dynamic length. The length of a string can change during runtime, and there is no need to define a maximum size when creating a string.
Dynamic Length: Strings in JavaScript are dynamic, meaning their size can change during runtime. This flexibility allows you to work with strings of any length, but the performance could be impacted by large or constantly changing strings.

String Operations and Length Options
Operations: JavaScript strings come with many built-in methods to handle common operations like:

Concatenation: Combining multiple strings into one.
Substring Extraction: Extracting parts of a string using methods like slice(), substring(), or substr().
Length Calculation: Getting the number of characters in a string with the .length property.
Comparison: Checking if two strings are equal using === or .localeCompare().
```js
let str1 = "Hello";
let str2 = "World";

// Concatenation
let greeting = str1 + " " + str2;
console.log(greeting); // Output: Hello World

// Substring Extraction
let subStr = greeting.substring(0, 5);
console.log(subStr); // Output: Hello

// Length Calculation
console.log(greeting.length); // Output: 11

// Comparison
console.log(str1 === str2); // Output: false
```
- Output: <br>
![alt text](2two.png)

## 3.Answer the design issues of enumeration, implement enum with code and evaluation.
Description:
In JavaScript, while there is no built-in enum keyword like in languages such as C, C++, or Python, enums can be mimicked using objects or the Object.freeze() method. This section will explore design considerations for using enums in JavaScript, how they are implemented, and the evaluation of those implementations.

Can an enumeration constant appear in more than one type definition?
In JavaScript: Since JavaScript doesn't have a native enum type, you typically use an object to simulate enums. When you define an "enum" as an object, the constants can be reused across different objects or modules, but there is no built-in restriction. You need to manually handle and avoid conflicts if reusing the same constants across different type definitions or modules.
Are enumeration values coerced to integer?
In JavaScript: Enumeration values are not coerced into integers automatically. However, if you use numbers as values in the "enum" object, they are just regular numbers and are not treated as special integer values. You can access enum values using their symbolic names (keys), but they do not have to be integers unless you explicitly assign them as such.
Are other types coerced to an enumeration type?
In JavaScript: JavaScript does not have strict type enforcement like C++ or Java. If you use an object to mimic an enum, JavaScript will not coerce other types (such as integers or strings) into the enum type automatically. You must manually check and handle the conversion or validation if you expect a certain type to match an enum.

```js
// Simulating an enum using an object
const Color = Object.freeze({
    RED: 1,
    GREEN: 2,
    BLUE: 3
});

// Accessing Enum values
console.log(Color.RED); // Output: 1
console.log(Color.GREEN); // Output: 2

// Checking if a value exists in the enum
function isValidColor(value) {
    return Object.values(Color).includes(value);
}

console.log(isValidColor(1)); // Output: true (Valid)
console.log(isValidColor(4)); // Output: false (Invalid)

// Attempting to modify an enum (won't work due to Object.freeze)
Color.RED = 99;
console.log(Color.RED); // Output: 1 (still unchanged)
```

- Output:<br>
![alt text](3three.png)

## 4. Answer the design issues of the array types and briefly described subscript bindings and array categories
##### What types are legal for subscripts (indexes)?
In JavaScript: Array indexes (or subscripts) must be integers or values that can be converted to integers, like 0, 1, 2, etc. JavaScript arrays use numbers as indices, but you can also use strings for objects (key-value pairs) like a dictionary or map.
```js
let arr = [10, 20, 30];
console.log(arr[0]);  // Accessing element at index 0, Output: 10
```
##### Are subscripting expressions (array indexes) checked for range errors?
In JavaScript: JavaScript doesn't check if you go out of bounds when accessing an array. If you try to access an index that doesn’t exist, it will return undefined instead of throwing an error.
javascript
```js
console.log(arr[10]);  // Output: undefined (index 10 doesn't exist)
```
##### When are subscript ranges bound (fixed or dynamic)?
In JavaScript: Array sizes in JavaScript are dynamic. You can add or remove elements at runtime, so the size of an array can change during the program's execution.
javascript
```js
let dynamicArray = [1, 2, 3];
dynamicArray.push(4);  // Adding a new element at the end
console.log(dynamicArray);  // Output: [1, 2, 3, 4]
```
#### When does array allocation take place?
In JavaScript: Arrays are allocated at runtime. You can create an array at any point in your code and add elements as needed.
javascript
```js
let myArray = [];  // Array created at runtime
myArray.push(10);  // Add an element dynamically
console.log(myArray);  // Output: [10]
```
#### Are ragged or rectangular multidimensional arrays allowed?
In JavaScript: You can have both ragged (arrays of arrays with different sizes) and rectangular arrays (arrays with equal number of elements in each row). JavaScript arrays are flexible, so you can mix and match sizes.
javascript
```js
// Ragged Array
let raggedArray = [[1, 2, 3], [4, 5], [6]];
console.log(raggedArray);

// Rectangular Array
let rectangularArray = [[1, 2], [3, 4]];
console.log(rectangularArray);
```
#### Can arrays be initialized when they are created?
In JavaScript: Yes, you can initialize arrays with values at the time of creation, or they will have undefined as values if not initialized.
javascript
```js
let initializedArray = [1, 2, 3];  // Initialized with values
let emptyArray = [];  // Empty array
```
#### What kinds of slices are allowed?
In JavaScript: JavaScript allows slicing of arrays. You can extract a portion of an array using the .slice() method. The slice method does not modify the original array.
javascript
```js
let slicedArray = [1, 2, 3, 4, 5].slice(1, 3);  // Get elements from index 1 to 2
console.log(slicedArray);  // Output: [2, 3]
```
#### Subscript Bindings and Array Categories
Subscript Binding: Refers to the connection between an index (subscript) and the actual data stored in the array. In JavaScript, this is dynamic, meaning you can change the size of an array and add/remove elements anytime.

Static Arrays: These are arrays whose size is fixed when the program starts. JavaScript does not use static arrays, as array sizes are flexible and can change at runtime.

Dynamic Arrays: JavaScript uses dynamic arrays, where the size can grow or shrink during execution. You can add or remove elements as needed.

Array Categories:
One-Dimensional Arrays: These are simple arrays where each item is accessed by a single index. For example: [1, 2, 3].

Multidimensional Arrays: These are arrays that contain other arrays (arrays within arrays). For example, a 2D array (matrix) would look like this: [[1, 2], [3, 4]].

Ragged Arrays: Arrays where each sub-array can have a different size. For example: [[1, 2], [3], [4, 5, 6]].

Rectangular Arrays: Arrays where all sub-arrays have the same size. For example: [[1, 2], [3, 4]].

- Output:<br>
![alt text](4four.png)

## 5. Describe design issues and evaluation of record types.
* Storage: JavaScript handles memory management for objects automatically, using efficient data structures like hash tables for fast look-up.
* Field Names: Fields are scoped within objects, and you can't directly access them outside the object unless explicitly referenced.
* Efficiency: Accessing fields is generally fast in JavaScript, but performance may degrade with large objects or deeply nested structures. Optimizing object structure for frequent access can improve performance.

- Output:<br>
![alt text](5five.png)

## 6. Describe design issues, implement union with code and evaluation of union types.
* Storage:JavaScript does not provide low-level control over memory. Instead of a single memory location, objects simulate unions dynamically, increasing memory usage.
* Type Safety: JavaScript lacks strict type checking, making unions prone to runtime errors. TypeScript resolves this issue with compile-time checks, ensuring that only valid types are used.
* Size: The memory footprint in JavaScript is typically larger than traditional union types, as all fields may exist simultaneously unless explicitly managed.

- Output:<br>
![alt text](6six.png)

## 7. Describe design issues, implement pointers in c and c++ with code.
Design Issues:
* Scope and Lifetime of a Pointer:
 Scope: Pointers follow the same scoping rules as regular variables. A pointer declared in a function is local to that function and cannot be accessed outside of it.
Lifetime: A pointer’s lifetime depends on where it is declared. A local pointer’s lifetime ends when its enclosing scope ends. However, pointers pointing to dynamically allocated memory remain valid until the memory is explicitly freed.
* Lifetime of a Heap-Dynamic Variable:

Heap-dynamic variables exist until explicitly deallocated using free (C) or delete (C++). Even if the pointer to such memory goes out of scope, the allocated memory persists.
* Type Restrictions:

Pointers in C/C++ are type-specific. However, void* can store any type’s address but must be cast back before dereferencing.
This helps maintain type safety but allows flexibility.
* Usage:

Dynamic Storage Management: Pointers enable allocating memory dynamically during runtime.
Indirect Addressing: They allow accessing data indirectly by storing the address of a variable.
* Pointer vs. Reference:

Pointer Types: Provide low-level control over memory.
Reference Types (C++): Safer than pointers, used for aliasing variables, cannot be NULL, and are not reseatable.
- Output:<br>
![alt text](7seven.png)