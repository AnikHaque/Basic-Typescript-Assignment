# 📘 Blog


# QUESTION: What is type inference in TypeScript? Why is it helpful? 

### Definition: 
TypeScript can guess the type of a variable, even if we don’t write the type ourselves.

For example:
Innstead of writing: let name: string = "Alice" We can just write let name = "Alice" because TypeScript will automatically understand that name is a string. This is called type inference.

### Why is Type Inference Helpful?
Type inference helps us in many simple but powerful ways:

1. We don’t have to write the type every time. It saves time and keeps the code short.
2. The code looks neat and easy to read.
3. Even if we don’t write the type, TypeScript still checks for errors.
4. You don’t need to know all the types right away. TypeScript helps you while you learn.

### Real Example
Let’s say 

let age = 25;
let user = "Tom";
let isStudent = true;
In this code:

TypeScript sees 25 and sets age as a number

It sees "Tom" and sets user as a string

It sees true and sets isStudent as a boolean

We did not write any types — but TypeScript understood everything correctly.

Now, if we try to do this:
age = "twenty-five"; 
TypeScript will give an error, because "twenty-five" is a string, not a number.

Even though we didn’t write age: number, TypeScript already knows the type is number.
That’s the power of type inference!

### Use Case in Real Projects
In small or big projects, we often declare variables and give values immediately.
For example:
const products = ["Pen", "Book", "Phone"];
TypeScript will automatically understand that this is an array of strings.

We don’t need to write:
const products: string[] = ["Pen", "Book", "Phone"];
This makes the code easier to write and read.

#Final Thoughts
Type inference is a helpful tool in TypeScript.

It makes coding faster and easier.

It helps catch mistakes.

It’s perfect for beginners who don’t want to write types everywhere.

It keeps our code clean, short, and safe.

You don’t need to tell TypeScript everything — it already understands a lot!

<h1>Question: What are some differences between interfaces and types in TypeScript?</h1>

<h2> What are Interfaces and Types?</h2>
<p>
  In TypeScript, both <code>interface</code> and <code>type</code> are used to describe the shape of data (like objects). But there are some small differences between them.
</p>

<h2> 1. Basic Usage</h2>
<p>Both can define an object:</p>

<h3>Using <code>interface</code>:</h3>
<pre><code>interface Person {
  name: string;
  age: number;
}
</code></pre>

<h3>Using <code>type</code>:</h3>
<pre><code>type Person = {
  name: string;
  age: number;
};
</code></pre>

<p>Both are valid and do the same thing here.</p>

<h2> 2. Extending</h2>

<p><strong>Interfaces</strong> can be extended using <code>extends</code>:</p>
<pre><code>interface Student extends Person {
  grade: number;
}
</code></pre>

<p><strong>Types</strong> can also extend using <code>&</code> (intersection):</p>
<pre><code>type Student = Person & {
  grade: number;
};
</code></pre>

<h2> 3. Merging</h2>
<p><code>interface</code> can be declared more than once, and TypeScript merges them:</p>
<pre><code>interface Book {
  title: string;
}

interface Book {
  author: string;
}
</code></pre>

<p><code>type</code> cannot be re-declared. It will throw an error.</p>

<h2> 4. More Than Just Objects</h2>
<p><code>type</code> is more flexible. You can use it for:</p>

<ul>
  <li>Unions: <code>type ID = string | number;</code></li>
  <li>Tuples: <code>type Point = [number, number];</code></li>
  <li>Functions: <code>type Callback = () => void;</code></li>
</ul>

<h2>🧠 Summary Table</h2>
<table>
  <tr>
    <th>Feature</th>
    <th><code>interface</code></th>
    <th><code>type</code></th>
  </tr>
  <tr>
    <td>Define object shape</td>
    <td> Yes</td>
    <td> Yes</td>
  </tr>
  <tr>
    <td>Extendable</td>
    <td> With <code>extends</code></td>
    <td> With <code>&</code></td>
  </tr>
  <tr>
    <td>Can be merged</td>
    <td> Yes</td>
    <td> No</td>
  </tr>
  <tr>
    <td>Supports primitives, unions, tuples</td>
    <td> No</td>
    <td> Yes</td>
  </tr>
  <tr>
    <td>Best for classes</td>
    <td> Yes</td>
    <td> Sometimes</td>
  </tr>
</table>

<h2> Final Thoughts</h2>
<p>
  Use <code>interface</code> when you're working with objects or classes.<br/>
  Use <code>type</code> when you need to combine types, define functions, or handle unions.<br/>
  Both are powerful, and sometimes you can even use them together!
</p>

