/*
Browser contains the Web APIs. Below are the following Web APIs

1. setTimeout()
2. DOM APIs
3. fetch()
4. localStorage
5. console
6. location

The browser gives access to javascript engine to access the above Web APIs.

Lets suppose we want to access the setTimeout() so browser will give access to JS engine,
Similarly we want to access DOM Tree like "document.getElementById()" so browser will give access of DOM APIs to JS Engine.
Similarly fetch() gives us access to get connection from external servers.

So, these are the powers of browsers.
Now we get all these inside the call stack because of "global object".


What is Global Object?
The keyword "window" is called global object.

Browser gives javascript engine the facilty to use all the super powers (or) Web APIs through a keyword called "window".

So suppose you want to access the timer of browser inside your code, you have to do like window.setTimeOut().
similarly you want to access local storage in your code, you can do like window.localStorage.
similarly you do window.console.log() it will give access to log something inside the console.

Now the qusetion arises that we are using console.log(), setTimeout(), without the window keyword but still we are accessing it because
window is a global object and this console(), setTimeout are present in the global object or at the golbal scope. So, we can access it without the window keyword also. 

if you do window.console.log() or console.log() both are same.

It's like browser will wrap up all the WEB APIs into a global object(window) and give access of this "window"(Global Object) to call stack or JS Engine. 

*/

// Example 1

console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

/*

Explanation :  As we already knew whenever we execute the javascript code The Global Execution Context will be created and pushed inside the callstack.

So it will execute the code line by line, first line which is console.log("Start"). It basically calls the web API called console() to log inside the console.
It first print the "Start" in the console.

Next it will move to next line of code which is 
setTimeout(function cb() {
  console.log("Callback");
}, 5000);

so setTimeout will basically go and call the web API called setTimeout() and this gives us access to timer feature of the browser.
It takes a calback function and some delay.
(function cb() {
  console.log("Callback");
}, 5000)

when you pass the callback function to the setTimeout it basically registers a callback in the Web API environment. i.e function cb()
and because we pass the delay, it also starts the timer of 5000ms inside the timer.

Now the code will move to next line which is console.log("End") and it calls the web API called console() to log inside the console.
It will print "End" inside the console.

Now the timer is still running but all our code has been executed. so the Global Execution context will pop out of the stack.

Meanwhile all this is happening timer is still running, it is doing a countdown of 5000ms and as soon as the timer expires the callback
function needs to be executed. But as we know all the code in javascript is executed inside the callstack, so, we somehow need this callback function
inside the callstack. So, how it will be done?

Now here Event loop and callback queue comes into the picture.

Once the timer expires the callback function"(function cb())" will move into the callback queue.

Eventloop job is to check the callback queue and move the functions, present inside the callback queue into the call stack.
Now callstack will quickly execute the callback function.

So again the execution context will be created for callback function (function cb()).
Now it will move to next line which is console.log("Callback"). It calls the web API called console() to log inside the console.
It will print "Callback" inside the console.

So the Output of the code will be 
Start
End
Callback


*/

// Example 2
console.log("Starts");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Callback Button Clicked");
});

console.log("Ends");

/*
Explanation :  As we already knew whenever we execute the javascript code The Global Execution Context will be created and pushed inside the callstack.

So it will execute the code line by line, first line which is console.log("Starts"). It basically calls the web API called console() to log inside the console.
It first print the "Starts" in the console.

Now it will move to next line which is "document.getElementById("btn").addEventListener".

What is this addEventListener()?
It is another super power which is given by the browser to the javascript engine through the window object in form of a web API which is DOM API.
Whenever we do document.getElementById() it basically calling the DOM API which in turn fetches something from DOM(Document Object Model).

What is DOM?
DOM is like HTML source code. So, whenever you access this DOM API, it basically access the HTML code and try to find out a button with some id and returns it.

and if you put ".addEventListener()" it registers a callback function with an event. 

So here in Web API environment it registers a callback function "function cb()" along with an event called "click".

Note: In the Web API environment whenever you see the ".addEventListener()" it basically register the callback function and attaches the event
which is asociated with it.

Now it moves to next line which is "console.log("End")" and it calls the web API called console() to log inside the console.
It will print "End" inside the console.

Then we don't have anything to execute so, the Global Execution Context will pop out of the call stack.

Now the Event handler will stay in Web API environment until and unless we explicitly remove the eventListener() or we close the browser.

So when the user clicks on the Callback button, then the callback function "function cb()" will move into the callback queue and wait for its turn to get executed.

So as we knew that the job of Event loop is to continously monitor the callstack as well as callback queue. if the callstack is empty and event loop
sees that there is a function waiting to be executed in the callback queue, then it will move that function into the callstack and execute it.

Now it will move to next line which is console.log("Callback Button Clicked"). It calls the web API called console() to log inside the console.
It will print "Callback Button Clicked" inside the console.

So the Output of the code will be 
Starts
Ends
Callback Button Clicked

Now the question arises that why do we need callback queue? Why the event loop not taking the callback function directly from the WebAPI environment
and push it into the call stack?

Let's assume that the user clicked the button 7-8 times then the callback function will be pushed into the callback queue 7-8 times. So, there will be
7-8 call back functions waiting to be executed in the callback queue.

Now the Event loop will keep on monitoring the callback queue and whenever it sees that there is a function waiting to be executed in the callback queue
it will move that function into the callstack and execute it.

So this how the Event loop works.


*/

// Example 3

console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/todos/1").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");

/*
Explanation :  As we already knew whenever we execute the javascript code The Global Execution Context will be created and pushed inside the callstack.

So it will execute the code line by line, first line which is console.log("Starts"). It basically calls the web API called console() to log inside the console.
It first print the "Starts" in the console.

Now it will move to next line which is "setTimeout(function cbT()". It basically calls the web API called setTimeout() and this gives us access to timer feature of the browser.
It registers the callback function "function cbT()" along with some delay in Web API environment.


Now the javascript will move to next line which is fetch() and it basically calls the web API called fetch() and this gives us access to HTTP request feature of the browser.
It also registers the callback function "function cbF()" in Web API environment.

Now we have two functions register in web API environment. function cbT() and function cbF().

The function cbT() is waiting for the timer to get expire so that it can be move to the callback queue and wait for its turn to get executed.
Similarly, the function cbF() is waiting for the HTTP request to get completed so that it can be move to the "microtask queue" and wait for its turn to get executed.


What is Microtask Queue?
Microtask Queue gets the callback functions coming through Promises and Mutation Observer.
(or)
Microtask Queue is like the Callback Queue, but Microtask Queue has higher priority. All the callback functions coming through Promises and Mutation Observer will go inside the Microtask Queue. For example, in the case of .fetch(), the callback function gets to the Microtask Queue. Promise handling always has higher priority so the JavaScript engine executes all the tasks from Microtask Queue and then moves to the Callback Queue.

The microtask queue is first-in-first-out.

What are microtasks used for?
Microtasks are typically used for operations that need to be executed as soon as possible, such as promise callbacks and MutationObserver callbacks.
The microtask queue is used to schedule these operations to be executed as soon as possible, without blocking the main thread.

Now it moves to next line which is "console.log("End")" and it calls the web API called console() to log inside the console.
It will print "End" inside the console.

Let's assume a situation that we have a million lines of code in between the fetch() and console.log("End") line. It takes time to execute the code.

In the meantime the fetch() function gets the data from the servers and the function cbF() will be pushed into the Microtask Queue.
Meanwhile the timer also expires and the function cbT() will be pushed into the Callback Queue and waiting for its turn to get executed.

Now that million lines of code still executing, the job of the Event Loop is to continously monitor the callstack as well as callback and microtask queue. if the callstack is empty and event loop sees that there is a function waiting to be executed in the callback queue or microtask queue, then it will move that function into the callstack and execute it.

Now the million lines of code executed and it will move to next line which is console.log("End"). It calls the web API called console() to log inside the console.
It will print "End" inside the console.

Now the Global Execution context will be popped out of the callstack.

The Event loop sees that call stack is empty it will check the callback queue and microtask queue and sees that there is a function waiting to be executed in the both queue, As microtask has higher priority it will move the function from microtask queue into the callstack and execute it.

Now it will move to next line which is console.log("CB Netflix"). It calls the web API called console() to log inside the console.
It will print "CB Netflix" inside the console.

Now the Global Execution context will be popped out of the callstack.

Now the Event loop sees that call stack is empty it will check the callback queue and sees that there is a function waiting to be executed in the callback queue, it will move the function from callback queue into the callstack and execute it.

Now it will move to next line which is console.log("CB SetTimeout"). It calls the web API called console() to log inside the console.
It will print "CB SetTimeout" inside the console.

Now the Global Execution context will be popped out of the callstack.

So the Output of the code will be 
Start
End
CB Netflix
CB SetTimeout


Interview Question:

What can come inside the Microtask queue?
Answer: All the Callback functions which comes through promises and Mutation observer will go inside the Microtask Queue.
It has higher priority than Callback Queue.

What is Mutation Observer?
Answer: Mutation Observer is a feature of the browser that allows you to observe changes to the DOM.

Mutation Observer is basically keeps on checking whether there is any change/mutation in the DOM Tree or not. If there is any change in the DOM Tree it can execute a callback function.

What can come inside the Callback queue?
Answer: All the Callback functions which comes through setTimeout(), setInterval(), fetch(), XMLHttpRequest() will go inside the Callback Queue.

What is Callback Queue?
Answer: Callback Queue gets the ordinary callback functions coming from the setTimeout() API after the timer expires.
Callback Queue has lesser priority than Microtask Queue of fetching the callback functions to Event Loop.
Callback queue is also referred as Task Queue or Macrotask queue.


Case 1:
Suppose there are 3 tasks in microtask queue and 1 task in callback queue then the priority will be Microtask Queue > Callback Queue.
First it will execute the microtask queue and then it will execute the callback queue.

Case 2:
Suppose there are few tasks in microtask queue and 1 task in callback queue.
As the microtask queue has higher priority it will execute the microtask queue first but each task is creating a microtask in itself it goes on like that. So the task in callback queue will never get a chance to execute for a long time. So, this state is called as the "STARVATION of the task" inside the callback queue 

  
   */
