class Graph:
    def __init__(self):
        self.graph = {}  

    def add_vertex(self, vertex):
        if vertex not in self.graph:
            self.graph[vertex] = []

    def add_edge(self, u, v):
        if u not in self.graph:
            self.add_vertex(u)
        if v not in self.graph:
            self.add_vertex(v)
        self.graph[u].append(v)
        self.graph[v].append(u)

    def dfs(self, start):
        if start not in self.graph:
            print(f"Start vertex '{start}' does not exist in the graph.")
            return

        visited = set()
        print("DFS Traversal:", end=" ")
        self._dfs_helper(start, visited)

    def _dfs_helper(self, vertex, visited):
        visited.append(vertex)
        print(vertex, end=' ')

        for neighbor in self.graph[vertex]:
            if neighbor not in visited:
                self._dfs_helper(neighbor, visited)


g = Graph()
g.add_edge('A', 'B')
g.add_edge('A', 'C')
g.add_edge('B', 'D')
g.add_edge('C', 'E')
g.add_edge('D', 'F')

print("DFS traversal starting from vertex A:")
g.dfs('A') 
print("\nDFS traversal starting from vertex Z:")
g.dfs('Z') 
