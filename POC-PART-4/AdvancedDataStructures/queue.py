class Queue:
    def __init__(self):
        self.items = []

    # Add item to the rear of the queue
    def enqueue(self, item):
        self.items.append(item)

    # Remove item from the front of the queue
    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        return "Queue is empty"

    # Peek at the front item
    def peek(self):
        if not self.is_empty():
            return self.items[0]
        return "Queue is empty"

    # Check if the queue is empty
    def is_empty(self):
        return len(self.items) == 0

    # Get the size of the queue
    def size(self):
        return len(self.items)

    # Print the queue
    def display(self):
        print("Queue:", self.items)


# Using the Queue class
queue = Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.display()         

print("Dequeued:", queue.dequeue())  
queue.display()        
print("Front item:", queue.peek())  
print("Queue is empty:", queue.is_empty())  
print("Queue size:", queue.size())  
