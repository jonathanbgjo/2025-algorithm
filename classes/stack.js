class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }


    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the number of elements
    size() {
        return this.items.length;
    }
}