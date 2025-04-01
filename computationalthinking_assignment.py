n = int(input("Enter the number of elements in the sequence: ")) 

while True:
    a = list(map(int, input(f"Enter {n} numbers separated by space: ").split()))
    
    if len(a) == n:
        break
    
    print(f"Invalid input! Please enter exactly {n} numbers.")

alice_numbers = []
bob_numbers = []

alice_turn = True  

while a:
    picked_number = int(input(f"{'Alice' if alice_turn else 'Bob'}, pick a number from the sequence {a}: "))
    
    if picked_number in a:
        a.remove(picked_number)
        
        if alice_turn:
            alice_numbers.append(picked_number)
        else:
            bob_numbers.append(picked_number)
        
        alice_turn = not alice_turn
    else:
        print("Invalid choice! Pick a number from the sequence.")

alice_sum = sum(alice_numbers)

if alice_sum % 2 == 0:
    print("Alice")
else:
    print("Bob")

print("Alice's selected numbers:", alice_numbers)
print("Bob's selected numbers:", bob_numbers)
