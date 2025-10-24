The following document contains information about the “campus map” project.



Goal: Build an interactive campus map for Beijing Institute of Technology, Zhuhai



Technology stack: HTML, JavaScript, Node.js, React...





Data structure:

1\. Node - information about a specific location on the university campus.

attributes:

   1.1.1. name (string) - the name of the building (e.g. Hongyi building);

   1.1.2. coordinates (list) - the coordinates x, y on the map (e.g. (58.42345, 124.61112));

   1.1.3. subgraph (Graph) - personal data structure Graph;

   1.1.4. isBuilding (boolean) - if the location is part of the building we should't use it as a point in a route;

   1.1.5. edges (dictionary) - keeps the distances between the node and its neighbour. Key - neigbour's name (????maybe I should integrate "ID" parameter, because maybe there are locations with the same title????), value - the distance (e.g. {"East gate" : 10.1}).



functions:

   1.2.1. addEdge(neighbor: str, distance: float) - adds new edge between nodes;

   1.2.2. toString - converts Node to the format {Node(node name, coordinates=node coordinates, isBuilding=true/false)}.





2\. Graph - collection of nodes.

attributes:

   2.1.1. name (string) - the name of the graph. It is necessary in the future, as the project deployment involves the task of embedded graphs;

   2.1.2. nodes (dictionary) - keeps the info about nodes. Key - the name of the location, value - object of class Node.



functions:

   2.2.1. addNode(name: str, coordinates: tuple\[float, float], subgraph=None, isBuilding: bool = False) - adds the node to in the graph;

   2.2.2. addEdge(name1: str, name2: str, distance: float, bidirectional: bool = True) - adds the edge between nodes. In the case of further deployment, the attribute "bidirectional" can be very useful, since the distance (or time) from point A to point B will not always be the same as the distance from point B to point A (for example, traffic jams can affect the choice of route);

   2.2.3. dijkstra(start: string|Node) - finds the shortest paths from node Start to other nodes by Dijkstra's algorithm;

&nbsp;  2.2.4. dijkstraAll() - computes the shortest paths from each node to others by Dijkstra's algorithm.



\*reference:

test №1. cities and distances between them (undirected weighted graph) https://www.kaggle.com/code/alexkhr/many-graph-algorithms/input (/backend/tests/mst/MST.csv)

