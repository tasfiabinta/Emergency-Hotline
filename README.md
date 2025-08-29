##

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer : **getElementById and getElementsByClassName** both are _HTML collection_, whereas **querySelector / querySelectorAll** are _NodeList_. **getElementById** finds only one element by its unique **id** and **getElementsByClassName** finds many elements by**classname**. On the other hand, **querySelector / querySelectorAll** find elements which are matched by CSS selector. Additionally, **querySelector** only returns the first element that matches CSS selector.

##

2. How do you **create and insert a new element into the DOM**?

Answer : Firstly, create a new element by using **document.createElement('element')** and keep it in a constant . Secondly, take another const variable which stores parent element by using **document.getElementById('id')** . Finally, insert the new element to the parent using **parentVariable.appendChild('new element variable')**

##

3. What is **Event Bubbling** and how does it work?

Answer : **Event Bubbling** is when an event happens at first it triggers the targeted element then it goes upwards like bubbles up and triggers on the targeted element's parent and then its parent and it's bubbling up until reaches to the root parent(document).

##

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer : **Event Delegation** is the most powerful and useful method in JS where set one single event listener to parent element can do the DOM manipulation successfully,rather than using event listener to multiple child element. It saves times, makes the code simpler ,allows to handle event efficiently, enhances browser performance, works for dynamically added element.

##

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer : On the one Hand, **preventDefault()** stops the browser actions that occurs automatically . For instance, when a submit button of a form is clicked , browser loads the page or does other actions and don't runs the event properly . If **preventDefault()** is used in the event handler, then it stops the automatic actions.
On the other hand, **stopPropagation()** stops the event to bubble up to the root parent so that the parent elements can't be triggered by the event handler. It doesn't stop browser default actions.

##
