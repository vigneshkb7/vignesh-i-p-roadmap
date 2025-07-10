1. Method parameter validation for function

```
const isRequired = () => { throw new Error('param is required');};

const print = (num = isRequired()) =>{}
```

2. format JSON `JSON.stringify`

3. getUnique values inarray

```
let unique = [...new Set([1,2,3,4,4,5,"school","ball","ball"])]

```

4. filter falsy values from array

```
[undefined,1,0,false,null,'vignesh'].filter(Boolean)

```

5. Disable right click

```
<body oncontextmenu="return false"><div></div></body>

```

6. getting last items in array

```
array.slice(-1)

```

7. How to check the online status of the browser ?

window.navigator object contains info about the visitors browser

navigator.online ===> gives wether we are online of not
navigator.language ===> returns the language property
navigator.platform ==> returns the operating system

8. where browser cookies are stored.

A cookie information stores on your compouter by a website you visit.

9. how to maintain state in http as http is a stateless protocol ?

10. Default exports ==> default exports are useful to export only a single object, function,variables. we can use any name to import.

11. Named exports ==> named exports are useful to export several values.

12. using named and default exports at same time

export { fun as default,x,y,square}

## 🧠 CSS **Specificity** – Answers

---

### 1. **What is CSS specificity and why does it matter?**

> Specificity is a set of rules browsers use to determine **which CSS rule takes precedence** when multiple rules match the same element.
> It ensures more **specific** selectors override more **general** ones.

---

### 2. **Which rule applies and why?**

```css
p {
  color: red;
}

.text {
  color: blue;
}

#main {
  color: green;
}
```

```html
<p id="main" class="text">Hello!</p>
```

> ✅ `#main` (green) applies because it has the **highest specificity**:

- `p` → 0-0-0-1
- `.text` → 0-0-1-0
- `#main` → 0-1-0-0

---

### 3. **Which has higher specificity?**

- `.card .title` → 0-0-2-0
- `#header h1` → 0-1-0-1

> ✅ `#header h1` has **higher specificity** due to the `id`.

---

### 4. **Specificity of `ul#menu li.active a:hover`**

Breakdown:

- `ul` → element → 1
- `#menu` → id → 1
- `li` → element → 1
- `.active` → class → 1
- `a` → element → 1
- `:hover` → pseudo-class → 1

> Specificity: **0-1-2-3**

---

### 5. **What if two rules have same specificity?**

> The **later** rule in the CSS (i.e., declared later in the stylesheet) takes precedence due to the **cascade**.

---

### 6. **Inline vs `!important` — which wins?**

> ✅ `!important` wins over **everything**, even inline styles — **unless** the inline style also uses `!important`.

---

## 📦 CSS **Box Model** – Answers

---

### 7. **What is the CSS Box Model?**

> Every HTML element is treated as a **box** consisting of:

- **Content**: the text or image
- **Padding**: space inside the box, around content
- **Border**: wraps the padding
- **Margin**: space outside the box, separating it from other elements

---

### 8. **Effect of `box-sizing: border-box`**

> It changes box calculation:

- Default (`content-box`):
  `width = content only` (padding + border adds to total size)
- `border-box`:
  `width = content + padding + border` (does **not** expand box size)

---

### 9. **Rendered width of this `div`**

```css
width: 200px;
padding: 10px;
border: 5px solid black;
margin: 20px;
```

- If **`box-sizing: content-box`** (default):
  `200 + 10*2 + 5*2 = 230px`

- If **`box-sizing: border-box`**:
  `width stays 200px`, and padding/border are **inside** it.

---

### 10. **What is margin collapse?**

> When two **vertical margins** meet (like between a parent and first child), they **collapse** into the **larger one**.

**Example:**

```css
.parent {
  margin-top: 30px;
}
.child {
  margin-top: 20px;
}
```

> Total top margin = **30px**, not 50px.

---

### 11. **Difference: inline, block, inline-block**

| Type           | Width/Height? | Margin/Padding? | Breaks Line? |
| -------------- | ------------- | --------------- | ------------ |
| `inline`       | ❌ Cannot set | Only horizontal | ❌ No        |
| `block`        | ✅ Yes        | ✅ All sides    | ✅ Yes       |
| `inline-block` | ✅ Yes        | ✅ All sides    | ❌ No        |

---

Let me know if you'd like flashcards, a cheat sheet, or want to practice some **real-world CSS problem-solving**!
