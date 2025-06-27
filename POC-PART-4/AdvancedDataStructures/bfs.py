class Graph:
    def __init__(self):
        self.adj_list = {}

    def add_edge(self, u, v):
        if u not in self.adj_list:
            self.adj_list[u] = []
        if v not in self.adj_list:
            self.adj_list[v] = []
        self.adj_list[u].append(v)
        self.adj_list[v].append(u)

    def bfs(self, start):
        if start not in self.adj_list:
            print(f"Start vertex '{start}' does not exist in the graph.")
            return

        visited = set()          
        queue = [start]          

        print("BFS Traversal:", end=" ")

        while len(queue) > 0:
            vertex = queue[0] 
            queue = queue[1:]

            if vertex not in visited:
                print(vertex, end=" ")
                visited.add(vertex)
                for neighbor in self.adj_list[vertex]:
                    if neighbor not in visited and neighbor not in queue:
                        queue.append(neighbor)


g = Graph()
g.add_edge('A', 'B')
g.add_edge('A', 'C')
g.add_edge('B', 'D')
g.add_edge('C', 'E')
g.add_edge('D', 'F')
g.add_edge('E', 'F')

g.bfs('A')   
g.bfs('Z')   
