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
q = Queue()

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.display()         

print("Dequeued:", q.dequeue())  
q.display()        
print("Front item:", q.peek())  
print("Queue is empty:", q.is_empty())  
print("Queue size:", q.size())  
