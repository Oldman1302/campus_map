The following document contains information about the “campus map” project.



Goal: Build an interactive campus map for Beijing Institute of Technology, Zhuhai



Technology stack: HTML, JavaScript, Node.js, React...



\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



Data structure:

1\. Node - information about a specific location on the university campus.

attributes:

&nbsp;  1.1.1. name (string) - the name of the building (e.g. Hongyi building)

&nbsp;  1.1.2. coordinates (list) - the coordinates x, y on the map (e.g. (58.42345, 124.61112))

&nbsp;  1.1.3. subgraph (Graph) - personal data structure Graph

&nbsp;  1.1.4. is\_building (boolean) - if the location is part of the building we should't use it as a point in a route

&nbsp;  1.1.5. edges (dictionary) - keeps the distances between the node and its neighbour. Key - neigbour's name (????maybe I should integrate "ID" parameter, because maybe there are locations with the same title????), value - the distance (e.g. {"East gate" : 10.1})



functions:

&nbsp;  1.2.1. add\_edge(neighbor: str, distance: float) - adds new edge between nodes





2\. Graph - collection of nodes (class Node).

attributes:

&nbsp;  2.1.1. name (string) - the name of the graph. It is necessary in the future, as the project deployment involves the task of embedded graphs.

&nbsp;  2.1.2. nodes (dictionary) - keeps the info about nodes. Key - the name of the location, value - object of class Node



functions:

&nbsp;  2.2.1. add\_node(name: str, coordinates: tuple\[float, float], subgraph=None, is\_building: bool = False) - adds the node to in the graph

&nbsp;  2.2.2. add\_edge(name1: str, name2: str, distance: float, bidirectional: bool = True) - adds the edge between nodes. In the case of further deployment, the attribute "bidirectional" can be very useful, since the distance (or time) from point A to point B will not always be the same as the distance from point B to point A (for example, traffic jams can affect the choice of route).

