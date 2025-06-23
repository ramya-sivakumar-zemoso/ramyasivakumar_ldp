"""Task - 1 : You are given a list of integers where each number appears twice, except for one unique number that appears only once. 
Example : 
Input: [4, 1, 2, 1, 2]  
Output: 4  
"""


#Time complexity --> O(n^2) 
input=[4,1,2,1,2,3,6,1,6,7,7]
for value in input:
  if(input.count(value))==1:
    print("Value with frequency one is:",value)
    break

#Efficient approach --> O(n)
input = [4, 1, 2, 1, 2]

unique_value = 0
for num in input:
    unique_value ^= num 

print("Value with frequency one is:", unique_value)