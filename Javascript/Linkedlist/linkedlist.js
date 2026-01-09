/**
 * LINKED LIST DATA STRUCTURE - Complete Implementation
 * Linked List ke saare operations with Hinglish explanations
 */

// Node class - Linked List ka basic building block
class Node {
    constructor(data) {
        this.data = data; // Node mein data store hoga
        this.next = null; // Agle node ka reference
    }
}

// Singly Linked List Implementation
class LinkedList {
    constructor() {
        this.head = null; // List ka pehla node
        this.size = 0; // List ki length
    }

    // 1. Insert at Beginning - Shuru mein node add karna
    insertAtBeginning(data) {
        // Explanation: Naya node banao aur use head bana do
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // 2. Insert at End - End mein node add karna
    insertAtEnd(data) {
        // Explanation: Last node tak jao aur naya node add karo
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // 3. Insert at Position - Specific position pe node add karna
    insertAtPosition(data, position) {
        // Explanation: Given position pe naya node insert karna
        if (position < 0 || position > this.size) {
            console.log('Invalid position!');
            return;
        }

        if (position === 0) {
            this.insertAtBeginning(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        let prev = null;
        let index = 0;

        while (index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        newNode.next = current;
        prev.next = newNode;
        this.size++;
    }

    // 4. Delete from Beginning - Pehla node delete karna
    deleteFromBeginning() {
        // Explanation: Head ko agle node se replace kar do
        if (!this.head) {
            console.log('List is empty!');
            return null;
        }

        const deletedData = this.head.data;
        this.head = this.head.next;
        this.size--;
        return deletedData;
    }

    // 5. Delete from End - Last node delete karna
    deleteFromEnd() {
        // Explanation: Second last node tak jao aur uska next null kar do
        if (!this.head) {
            console.log('List is empty!');
            return null;
        }

        if (!this.head.next) {
            const deletedData = this.head.data;
            this.head = null;
            this.size--;
            return deletedData;
        }

        let current = this.head;
        let prev = null;

        while (current.next) {
            prev = current;
            current = current.next;
        }

        const deletedData = current.data;
        prev.next = null;
        this.size--;
        return deletedData;
    }

    // 6. Delete at Position - Specific position se node delete karna
    deleteAtPosition(position) {
        // Explanation: Given position ka node remove karna
        if (position < 0 || position >= this.size) {
            console.log('Invalid position!');
            return null;
        }

        if (position === 0) {
            return this.deleteFromBeginning();
        }

        let current = this.head;
        let prev = null;
        let index = 0;

        while (index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        prev.next = current.next;
        this.size--;
        return current.data;
    }

    // 7. Search - Element ko dhundhna
    search(data) {
        // Explanation: List mein element ko search karna
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // 8. Get Element at Index - Index pe element get karna
    getAt(index) {
        // Explanation: Specific index ka data return karna
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        return current.data;
    }

    // 9. Reverse List - List ko reverse karna
    reverse() {
        // Explanation: List ke nodes ko ulti direction mein point karana
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    // 10. Find Middle - List ka middle element dhundhna
    findMiddle() {
        // Explanation: Slow aur fast pointer use karke middle find karna
        if (!this.head) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.data;
    }

    // 11. Detect Cycle - List mein cycle hai ya nahi
    hasCycle() {
        // Explanation: Floyd's cycle detection algorithm
        if (!this.head) return false;

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }

        return false;
    }

    // 12. Remove Duplicates - Duplicate nodes hatana
    removeDuplicates() {
        // Explanation: Sorted list se duplicate values remove karna
        if (!this.head) return;

        let current = this.head;

        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
                this.size--;
            } else {
                current = current.next;
            }
        }
    }

    // 13. Print List - List ko print karna
    printList() {
        // Explanation: Saare nodes ko console mein print karna
        if (!this.head) {
            console.log('List is empty');
            return;
        }

        let current = this.head;
        const elements = [];

        while (current) {
            elements.push(current.data);
            current = current.next;
        }

        console.log(elements.join(' -> '));
    }

    // 14. Get Size - List ki length
    getSize() {
        return this.size;
    }

    // 15. Is Empty - List khali hai ya nahi
    isEmpty() {
        return this.size === 0;
    }

    // 16. Clear List - Puri list ko clear karna
    clear() {
        this.head = null;
        this.size = 0;
    }

    // 17. To Array - List ko array mein convert karna
    toArray() {
        const arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.data);
            current = current.next;
        }

        return arr;
    }

    // 18. From Array - Array se list banana
    static fromArray(arr) {
        const list = new LinkedList();
        arr.forEach(item => list.insertAtEnd(item));
        return list;
    }

    // 19. Nth Node from End - End se nth node dhundhna
    getNthFromEnd(n) {
        // Explanation: End se nth position ka node find karna
        if (n <= 0 || n > this.size) return null;

        let first = this.head;
        let second = this.head;

        // First pointer ko n steps aage le jao
        for (let i = 0; i < n; i++) {
            if (!first) return null;
            first = first.next;
        }

        // Dono pointers ko saath move karo
        while (first) {
            first = first.next;
            second = second.next;
        }

        return second.data;
    }

    // 20. Merge Two Sorted Lists - Do sorted lists ko merge karna
    static mergeSorted(list1, list2) {
        // Explanation: Do sorted linked lists ko ek sorted list mein merge karna
        const mergedList = new LinkedList();
        let p1 = list1.head;
        let p2 = list2.head;

        while (p1 && p2) {
            if (p1.data <= p2.data) {
                mergedList.insertAtEnd(p1.data);
                p1 = p1.next;
            } else {
                mergedList.insertAtEnd(p2.data);
                p2 = p2.next;
            }
        }

        while (p1) {
            mergedList.insertAtEnd(p1.data);
            p1 = p1.next;
        }

        while (p2) {
            mergedList.insertAtEnd(p2.data);
            p2 = p2.next;
        }

        return mergedList;
    }
}

// Doubly Linked List Node
class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null; // Previous node ka reference
    }
}

// Doubly Linked List Implementation
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // 21. Insert at Beginning (Doubly)
    insertAtBeginning(data) {
        const newNode = new DoublyNode(data);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // 22. Insert at End (Doubly)
    insertAtEnd(data) {
        const newNode = new DoublyNode(data);

        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // 23. Print Forward - Aage se print karna
    printForward() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }

        let current = this.head;
        const elements = [];

        while (current) {
            elements.push(current.data);
            current = current.next;
        }

        console.log(elements.join(' <-> '));
    }

    // 24. Print Backward - Peeche se print karna
    printBackward() {
        if (!this.tail) {
            console.log('List is empty');
            return;
        }

        let current = this.tail;
        const elements = [];

        while (current) {
            elements.push(current.data);
            current = current.prev;
        }

        console.log(elements.join(' <-> '));
    }

    // 25. Delete from End (Doubly)
    deleteFromEnd() {
        if (!this.tail) return null;

        const deletedData = this.tail.data;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;
        return deletedData;
    }
}

// Export classes
module.exports = {
    Node,
    LinkedList,
    DoublyNode,
    DoublyLinkedList
};

// Test examples
if (require.main === module) {
    console.log('=== Linked List Demo ===\n');

    const list = new LinkedList();

    // Insert operations
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    list.insertAtBeginning(5);

    console.log('List after insertions:');
    list.printList();

    console.log('\nMiddle element:', list.findMiddle());
    console.log('Element at index 2:', list.getAt(2));
    console.log('Search for 20:', list.search(20));

    list.reverse();
    console.log('\nReversed list:');
    list.printList();

    console.log('\n=== Doubly Linked List Demo ===\n');

    const dList = new DoublyLinkedList();
    dList.insertAtEnd(1);
    dList.insertAtEnd(2);
    dList.insertAtEnd(3);

    console.log('Forward:');
    dList.printForward();

    console.log('Backward:');
    dList.printBackward();
}
