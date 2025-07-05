#pickling
import pickle

data = {'name': 'Ramya', 'age': 22, 'city': 'Pune'}

with open('data.pkl', 'wb') as f:
    pickle.dump(data, f)

#unpickling

with open('data.pkl', 'rb') as f:
    loaded_data = pickle.load(f)

print(loaded_data)
