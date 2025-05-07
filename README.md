#  Blog

<h1>Q: What is type inference in TypeScript? Why is it helpful?</h1>

<h2> Definition</h2>
<p>
  TypeScript can guess the type of a variable, even if we don’t write the type ourselves.
</p>
<p>
  For example, instead of writing: <code>let name: string = "Alice"</code><br/>
  We can just write: <code>let name = "Alice"</code><br/>
  because TypeScript will automatically understand that <code>name</code> is a string. This is called <strong>type inference</strong>.
</p>

<h2> Why is Type Inference Helpful?</h2>
<p>Type inference helps us in many simple but powerful ways:</p>
<ol>
  <li>We don’t have to write the type every time. It saves time and keeps the code short.</li>
  <li>The code looks neat and easy to read.</li>
  <li>Even if we don’t write the type, TypeScript still checks for errors.</li>
  <li>You don’t need to know all the types right away. TypeScript helps you while you learn.</li>
</ol>

<h2> Real Example</h2>

<pre><code>let age = 25;
let user = "Tom";
let isStudent = true;
</code></pre>

<p>
  In this code:
  <ul>
    <li>TypeScript sees <code>25</code> and sets <code>age</code> as a number</li>
    <li>It sees <code>"Tom"</code> and sets <code>user</code> as a string</li>
    <li>It sees <code>true</code> and sets <code>isStudent</code> as a boolean</li>
  </ul>
</p>

<p>
  We did not write any types — but TypeScript understood everything correctly.
</p>

<pre><code>age = "twenty-five";
</code></pre>

<p>
  Even though we didn’t write <code>age: number</code>, TypeScript already knows the type is number. That’s the power of type inference!
</p>

<h2> Use Case in Real Projects</h2>
<p>In small or big projects, we often declare variables and give values immediately:</p>

<pre><code>const products = ["Pen", "Book", "Phone"];
</code></pre>

<p>TypeScript will automatically understand that this is an array of strings.</p>

<p>We don’t need to write:</p>

<pre><code>const products: string[] = ["Pen", "Book", "Phone"];
</code></pre>

<p>This makes the code easier to write and read.</p>

<h2> Final Thoughts</h2>
<ul>
  <li>Type inference is a helpful tool in TypeScript.</li>
  <li>It makes coding faster and easier.</li>
  <li>It helps catch mistakes.</li>
  <li>It’s perfect for beginners who don’t want to write types everywhere.</li>
  <li>It keeps our code clean, short, and safe.</li>
  <li>You don’t need to tell TypeScript everything — it already understands a lot!</li>
</ul>




<h1>Q: What are some differences between interfaces and types in TypeScript?</h1>

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

<h2> Summary Table</h2>
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

