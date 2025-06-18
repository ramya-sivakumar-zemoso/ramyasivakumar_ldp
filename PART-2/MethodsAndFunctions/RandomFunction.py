import random

# Generate and print random float between 0.0 and 1.0
x = random.random()
print("Random float x (0.0 to 1.0):", x)

# Generate and print another random float
y = random.random()
print("Random float y (0.0 to 1.0):", y)

# Print a random float directly
print("Direct random float (0.0 to 1.0):", random.random())

# Generate and print a random integer between 0 and 9
print("Random integer (0 to 9):", random.randrange(0, 10))

# Generate and print a random float between 0 and 10
print("Random float (0.0 to 10.0):", random.uniform(0, 10))
