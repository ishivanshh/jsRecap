```
HTML
  ↓
Browser creates DOM Tree
  ↓
JavaScript
  ↓
Select → Read → Modify → Create → Delete → Events
```

## Selecting Elements 

1. getElementById() :  selects one element by its id.

> const title = document.getElementById("title");
> <h1 id="title">Hello</h1>

2. querySelector() : Selects the first matching element using a CSS selector.

> const title = document.querySelector("#title");
> const button = document.querySelector(".btn");
> const input = document.querySelector("input");

3.querySelectorAll() : Selects all matching elements. Returns a NodeList.

> const buttons = document.querySelectorAll(".btn");
- You can iterate:
```
buttons.forEach(button => {
    console.log(button);
});
```

4. getElementsByClassName() 
> const cards = document.getElementsByClassName("card");
> const paragraphs = document.getElementsByTagName("p");

## Reading / Changing Text

1. Reading / Changing Text => read or change the text

> const title = document.querySelector("h1");

> console.log(title.textContent);

> title.innerText = "Hello World";


```
textContent
    ↓
Gets all text content

innerText
    ↓
Gets rendered/visible text
```

- prefer textcontent 

## Attributes 

> <img id="profile" src="old.jpg" alt="Profile">


```
const img = document.querySelector("#profile");

console.log(img.getAttribute("src"));

```

- setAttribute() 

> img.setAttribute("src", "new.jpg");

- removeAttribute()
- hasAttribute() => return true and false


## Classes

1. classList - adds the classes to elements

```
<div id="box"></div>
const box = document.querySelector("#box");
box.classList.add("active");
```

2.also u can remove classes 

> box.classList.remove("active");

3. toggle classlist if exist remove and vice versa : commanly used in dark mode , mobile menu  , modals , dropdown , sidebar

> classList.toggle()

## Creating Elements 

1. createElement()

