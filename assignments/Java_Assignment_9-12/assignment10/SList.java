package com.assignments.assignment10;
import java.util.NoSuchElementException;

public class SList<T> {

    private static class Link<T> {
        T element;
        Link<T> next;
        Link(T element, Link<T> next) {
            this.element = element;
            this.next = next;
        }
        @Override
        public String toString() {
            return String.valueOf(element);
        }
    }
    private Link<T> head;
    private int size;
    public SList() {
        head = null;
        size = 0;
    }
    public SListIterator<T> iterator() {
        return new SListIterator<>(this);
    }

    @Override
    public String toString() {
        if (head == null) {
            return "[]";
        }
        StringBuilder sb = new StringBuilder("[");
        Link<T> current = head;
        while (current != null) {
            sb.append(current.element);
            if (current.next != null) {
                sb.append(", ");
            }
            current = current.next;
        }
        sb.append("]");
        return sb.toString();
    }

    public static class SListIterator<T> {
        private SList<T> list;
        private Link<T> current;
        private Link<T> lastReturned;
        private Link<T> previous;

        SListIterator(SList<T> sList) {
            this.list = sList;
            this.current = sList.head;
            this.lastReturned = null;
            this.previous = null;
        }

        public boolean hasNext() {
            return current != null;
        }

        public T next() {
            if (!hasNext()) {
                throw new NoSuchElementException("No more elements in the list.");
            }
            previous = lastReturned;
            lastReturned = current;
            current = current.next;
            return lastReturned.element;
        }
        public void add(T element) {
            Link<T> newLink = new Link<>(element, null);

            if (list.head == null) {
                list.head = newLink;
            } else if (lastReturned == null) {
                newLink.next = list.head;
                list.head = newLink;
            } else {
                newLink.next = lastReturned.next;
                lastReturned.next = newLink;
            }
            list.size++;
        }

        public void remove() {
            if (lastReturned == null) {
                throw new IllegalStateException("next() has not been called, or element already removed.");
            }

            if (previous == null) {
                list.head = current;
            } else {
                previous.next = current;
            }
            lastReturned = null;
            list.size--;
        }
    }

    public static void main(String[] args) {
        SList<String> myStringList = new SList<>();
        System.out.println("Initial list: " + myStringList);
        SListIterator<String> stringIterator = myStringList.iterator();
        System.out.println("Inserting elements");
        stringIterator.add("Apple");
        System.out.println("After add Apple: " + myStringList);

        stringIterator.add("Banana");
        System.out.println("After add Banana: " + myStringList);

        stringIterator.add("Cherry");
        System.out.println("After add Cherry: " + myStringList);

        System.out.println("Iterating through the list ");
        SListIterator<String> printIterator = myStringList.iterator();
        while (printIterator.hasNext()) {
            System.out.println("Next element: " + printIterator.next());
        }
        System.out.println("List after iteration: " + myStringList);

        System.out.println(" Adding in the middle ");
        SListIterator<String> middleAddIterator = myStringList.iterator();
        middleAddIterator.next();
        middleAddIterator.add("Date");
        System.out.println("After add Date after Cherry: " + myStringList);

        middleAddIterator.next();
        middleAddIterator.next();
        middleAddIterator.add("Elderberry");
        System.out.println("After add Elderberry after Banana : " + myStringList);

        System.out.println(" Removing elements");
        SListIterator<String> removeIterator = myStringList.iterator();

        System.out.println("Current list: " + myStringList);

        removeIterator.next();
        removeIterator.remove();
        System.out.println("After removing Cherry: " + myStringList);

        removeIterator.next();
        removeIterator.next();
        removeIterator.remove();
        System.out.println("After removing Banana: " + myStringList);

        removeIterator.next();
        removeIterator.remove();
        System.out.println("After removing Apple: " + myStringList);

        System.out.println("Edge Cases");

        System.out.println("Attempting to remove without calling next() first:");
        try {
            SListIterator<String> errorRemoveIt = myStringList.iterator();
            errorRemoveIt.remove();
        } catch (IllegalStateException e) {
            System.out.println("Caught expected exception: " + e.getMessage());
        }

        System.out.println("Clearing remaining elements in the list:");
        while(removeIterator.hasNext()){
            removeIterator.next();
            removeIterator.remove();
        }
        System.out.println("List after clearing: " + myStringList);
        System.out.println("Attempting to call next() on an empty list:");
        try {
            SListIterator<String> emptyListIt = myStringList.iterator();
            emptyListIt.next();
        } catch (NoSuchElementException e) {
            System.out.println("Caught expected exception: " + e.getMessage());
        }
    }
}