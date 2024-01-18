# Lighthouse Labs | Promises

* [X] The Async Problem
* [X] Callbacks
* [ ] Promises

## The Async Problem

* What is an async operation in JS?
    * The order of operations is not one-after-another, there is code we want to schedule for later
    * Timer/delay
    * Reading a file
    * Make an HTTP request to a server
    * Event-driven programming
* What is our solution so far...
    * Callbacks are functions we can pass around, so that functionality we write can be run at the appropriate time
    * How, or even can, Promises do the same?
