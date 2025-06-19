class Node:
    def __init__(self, data):
        self.data = data     
        self.next = None    
class LinkedList:
    def __init__(self):
        self.head = None      

    # Insert a node at the beginning of the list
    def insertAtBeginning(self, new_data):
        new_node = Node(new_data)     
        new_node.next = self.head   
        self.head = new_node          

    # Insert a node at the end of the list
    def insertAtEnd(self, new_data):
        new_node = Node(new_data)
        if self.head is None:
            self.head = new_node     
            return
        last = self.head
        while last.next:
            last = last.next         
        last.next = new_node         

    # Delete a node from the beginning of the list
    def deleteFromBeginning(self):
        if self.head is None:
            return "The list is empty"
        self.head = self.head.next    

    # Delete a node from the end of the list
    def deleteFromEnd(self):
        if self.head is None:
            return "The list is empty"
        if self.head.next is None:
            self.head = None           
            return
        temp = self.head
        while temp.next.next:
            temp = temp.next         
        temp.next = None               

    # Print the contents of the list
    def printList(self):
        temp = self.head
        while temp:
            print(temp.data, end=' ')
            temp = temp.next
        print()

if __name__ == '__main__':
    llist = LinkedList()
    # Insert words at the beginning
    llist.insertAtBeginning('1')
    llist.insertAtBeginning('2')
    llist.insertAtBeginning('3')
    llist.insertAtBeginning('4')

    # Insert a word at the end
    llist.insertAtEnd('5')

    # Print the list before deletion
    print("List before deletion:")
    llist.printList()

    # Delete nodes from beginning and end
    llist.deleteFromBeginning()
    llist.deleteFromEnd()

    # Print the list after deletion
    print("List after deletion:")
    llist.printList()
