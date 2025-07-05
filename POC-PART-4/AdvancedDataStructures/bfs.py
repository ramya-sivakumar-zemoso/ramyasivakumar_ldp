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


graph = Graph()
graph.add_edge('A', 'B')
graph.add_edge('A', 'C')
graph.add_edge('B', 'D')
graph.add_edge('C', 'E')
graph.add_edge('D', 'F')
graph.add_edge('E', 'F')

graph.bfs('A')   
graph.bfs('Z')   
