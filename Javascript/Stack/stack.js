/**
 * STACK DATA STRUCTURE - Complete Implementation
 * Stack ke saare operations with Hinglish explanations
 * LIFO - Last In First Out principle
 */

// Stack Implementation using Array
class Stack {
    constructor() {
        this.items = []; // Stack ke elements store honge
        this.top = -1; // Top element ka index
    }

    // 1. Push - Element add karna (top pe)
    push(element) {
        // Explanation: Stack ke top pe naya element add karna
        this.items.push(element);
        this.top++;
        return true;
    }

    // 2. Pop - Element remove karna (top se)
    pop() {
        // Explanation: Stack ke top element ko remove aur return karna
        if (this.isEmpty()) {
            return 'Stack is empty!';
        }
        this.top--;
        return this.items.pop();
    }

    // 3. Peek/Top - Top element dekhna (remove nahi karna)
    peek() {
        // Explanation: Top element ko dekhna without removing
        if (this.isEmpty()) {
            return 'Stack is empty!';
        }
        return this.items[this.top];
    }

    // 4. isEmpty - Stack khali hai ya nahi check karna
    isEmpty() {
        // Explanation: Stack mein koi element hai ya nahi
        return this.top === -1;
    }

    // 5. Size - Stack mein kitne elements hain
    size() {
        // Explanation: Stack ki length return karna
        return this.top + 1;
    }

    // 6. Clear - Saare elements remove karna
    clear() {
        // Explanation: Stack ko completely empty karna
        this.items = [];
        this.top = -1;
    }

    // 7. Print - Stack ko print karna
    print() {
        // Explanation: Stack ke saare elements dikhana
        console.log(this.items.join(' <- '));
    }

    // 8. Contains - Element hai ya nahi check karna
    contains(element) {
        // Explanation: Stack mein specific element hai ya nahi
        return this.items.includes(element);
    }

    // 9. To Array - Stack ko array mein convert karna
    toArray() {
        return [...this.items];
    }

    // 10. Get Min - Stack mein minimum element (O(1) time)
    getMin() {
        if (this.isEmpty()) return null;
        return Math.min(...this.items);
    }
}

// ==================== STACK APPLICATIONS ====================

// 11. Valid Parentheses - Brackets ko validate karna
function isValidParentheses(str) {
    // Explanation: Opening aur closing brackets properly matched hain ya nahi
    const stack = new Stack();
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of str) {
        if (pairs[char]) {
            stack.push(char); // Opening bracket push karo
        } else if (Object.values(pairs).includes(char)) {
            if (stack.isEmpty() || pairs[stack.pop()] !== char) {
                return false; // Mismatch hai
            }
        }
    }

    return stack.isEmpty(); // Saare brackets matched hone chahiye
}

// 12. Reverse String using Stack
function reverseString(str) {
    // Explanation: Stack use karke string ko reverse karna
    const stack = new Stack();

    // Saare characters push karo
    for (const char of str) {
        stack.push(char);
    }

    // Pop karke reverse string banao
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }

    return reversed;
}

// 13. Infix to Postfix Conversion
function infixToPostfix(expression) {
    // Explanation: Infix expression ko postfix mein convert karna
    const stack = new Stack();
    let postfix = '';

    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    const isOperator = (char) => '+-*/^'.includes(char);

    for (const char of expression) {
        if (/[a-zA-Z0-9]/.test(char)) {
            postfix += char; // Operand ko directly add karo
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (!stack.isEmpty() && stack.peek() !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // '(' ko remove karo
        } else if (isOperator(char)) {
            while (!stack.isEmpty() &&
                precedence[stack.peek()] >= precedence[char]) {
                postfix += stack.pop();
            }
            stack.push(char);
        }
    }

    while (!stack.isEmpty()) {
        postfix += stack.pop();
    }

    return postfix;
}

// 14. Evaluate Postfix Expression
function evaluatePostfix(expression) {
    // Explanation: Postfix expression ko evaluate karna
    const stack = new Stack();

    for (const char of expression) {
        if (/\d/.test(char)) {
            stack.push(parseInt(char));
        } else {
            const b = stack.pop();
            const a = stack.pop();

            switch (char) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(Math.floor(a / b)); break;
            }
        }
    }

    return stack.pop();
}

// 15. Next Greater Element
function nextGreaterElement(arr) {
    // Explanation: Har element ke liye next greater element find karna
    const stack = new Stack();
    const result = new Array(arr.length).fill(-1);

    for (let i = arr.length - 1; i >= 0; i--) {
        while (!stack.isEmpty() && stack.peek() <= arr[i]) {
            stack.pop();
        }

        if (!stack.isEmpty()) {
            result[i] = stack.peek();
        }

        stack.push(arr[i]);
    }

    return result;
}

// Min Stack - O(1) time mein minimum element
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = []; // Minimum elements track karne ke liye
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop() {
        const popped = this.stack.pop();
        if (popped === this.getMin()) {
            this.minStack.pop();
        }
        return popped;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Export
module.exports = {
    Stack,
    MinStack,
    isValidParentheses,
    reverseString,
    infixToPostfix,
    evaluatePostfix,
    nextGreaterElement
};

// Test examples
if (require.main === module) {
    console.log('=== Stack Demo ===\n');

    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    console.log('Stack:');
    stack.print();

    console.log('\nTop element:', stack.peek());
    console.log('Popped:', stack.pop());
    console.log('Size:', stack.size());

    console.log('\n=== Valid Parentheses ===');
    console.log('({[]}): ', isValidParentheses('({[]})'));
    console.log('({[}): ', isValidParentheses('({[})'));

    console.log('\n=== Reverse String ===');
    console.log('hello:', reverseString('hello'));

    console.log('\n=== Infix to Postfix ===');
    console.log('a+b*c:', infixToPostfix('a+b*c'));

    console.log('\n=== Next Greater Element ===');
    console.log('[4,5,2,10,8]:', nextGreaterElement([4, 5, 2, 10, 8]));
}
