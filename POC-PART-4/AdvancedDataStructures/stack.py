stack = []

def getChoice():
    print("Menu: 1.PUSH\n2.POP\n3.DISPLAY\n4.EXIT")
    choice = int(input("Enter your choice: "))
    return choice

def push(item):
    stack.append(item)

def popitem():
    global stack
    item = stack[-1]
    del stack[-1]
    return item

def display():
    print("Elements of stack are:", stack)

print("Program starts")
choice = getChoice()

while choice != 4:
    match choice:
        case 1:
            item = (input("Enter value to push: "))
            push(item)
        case 2:
            if len(stack) > 0:
                item = popitem()
                print("Popped item:", item)
            else:
                print("Stack Underflow")
        case 3:
            if len(stack) > 0:
                display()
            else:
                print("Stack Underflow")
        case _:
            print("Wrong Choice")
    
    choice = getChoice()

print("Stack Operations are Over")


#using classes and objects

class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)
        print(f"Pushed {item} to stack")

    def pop(self):
        if not self.is_empty():
            removed = self.stack.pop()
            print(f"Popped {removed} from stack")
            return removed
        else:
            print("Stack is empty")
            return None

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            print("Stack is empty")
            return None

    def is_empty(self):
        return len(self.stack) == 0

    def display(self):
        print("Stack:", self.stack)

stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.display()

stack.pop()
stack.display()

print("Top element:", stack.peek())
