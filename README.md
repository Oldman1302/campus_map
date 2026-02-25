The following document contains information about the “campus map” project.

Goal: Build an interactive campus map for Beijing Institute of Technology, Zhuhai

Technology stack: HTML, JavaScript, Node.js, React…

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Deployment:

This instruction explains how to set up and run the Campus Map backend project on a new device from scratch.

1. Check if Node.js is installed:
`node -v`
If installed, you should see something like `v25.6.1`;
2. Check if npm (Node Package Manager) is installed:
`npm -v`
If installed, you should see something like `10.7.0`;
3. If either node or npm is not installed then download LTS (Long Term Support) version Node.js from official website https://nodejs.org/ and restart terminal after all and repeat steps 1 and 2;
4. Check if Git is installed:
`git --version`
If Git is installed, you should see something like `git version 2.45.1.windows.1`;
5. If Git is not installed: https://git-scm.com/downloads and restart terminal after all and repeat step 4;
6. Clone the repository:
`git clone https://github.com/Oldman1302/campus_map.git`;
7. Open terminal in the project;
8. (Optional) Fetch all remote branches:
`git fetch --all --prune`;
9. Open backend folder:
`cd backend`;
10. Install Project Dependencies:
`npm install`;
11. In the file backend\.env you can choose the port on which you want to use application or leave it by default (5001);
12. Run the server:
`npm run start`
If everything works - you’ll get following result in console:
>Loading campus graph...
>Precomputing shortest paths (distance)...
>Precomputing shortest paths (time)...
>Precomputation complete (0.0179s).
>
>Server running on port 5001
>I'm alive on port 5001
13. Test locally. Open browser and test:
    http://localhost:5001/route?from=East%20gate&to=Dormitory%20%E2%84%9620%20Entrance%201&strategy=distance
IMPORTANT: port must be different if you changed it in backend\.env. If everything works - you’ll get JSON response:
`{"strategy":"distance","distance":735,"time":625,"path":"East gate -> 22.367268, 113.544894 -> 22.366176, 113.544281 -> 22.366066, 113.544259 -> 22.365812, 113.544095 -> 22.365489, 113.543882 -> 22.365159, 113.543665 -> 22.365163, 113.543197 -> 22.365135, 113.542967 -> 22.365145, 113.542593 -> 22.365147, 113.542328 -> 22.365123, 113.542061 -> 22.365130, 113.541675 -> 22.365130, 113.541179 -> 22.365168, 113.540755 -> 22.365144, 113.540375 -> 22.365162, 113.540256 -> 22.365175, 113.540113 -> 22.365165, 113.540014 -> 22.365164, 113.539925 -> 22.365189, 113.539670 -> Dormitory №20 Entrance 1"}`;
14. (Optional) if you want external access you can use ngrok:
`npx ngrok http 5001`
IMPORTANT: port must be different if you changed it in backend\.env.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Requests:

This section explains how to make requests to server.

1. GET / - GET-request to obtain user's IP and approximate location;
2. GET /route?from=${fromPosition}&to=${toPosition}&strategy={strategy} - GET-request to obtain path from starting position (parameter fromPosition) to terminal position (parameter toPosition). The path can be the shortest (if parameter strategy = "distance") or the fastest (if parameter strategy = "time")
e.g. `/route?from=East%20gate&to=Dormitory%20%E2%84%9620%20Entrance%201&strategy=distance`.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Data structure:

1\. Node - information about a specific location on the university campus.

attributes:

   1.1.1. name (string) - the name of the building (e.g. Hongyi building);

   1.1.2. coordinates (list) - the coordinates x, y on the map (e.g. (58.42345, 124.61112));

   1.1.3. subgraph (Graph) - personal data structure Graph;

   1.1.4. isBuilding (boolean) - if the location is part of the building we should't use it as a point in a route;

   1.1.5. edges (dictionary) - keeps the distances between the node and its neighbour. Key - neigbour's name (????maybe I should integrate "ID" parameter, because maybe there are locations with the same title????), value - the distance (e.g. {"East gate" : 10.1}).



functions:

   1.2.1. addEdge(neighbor: str, distance: float, time: float) - adds new edge between nodes;

   1.2.2. deleteEdge(neighbor: str|Node) - removes outgoing edge "neighbor" from this node and returns true if edge existed and was removed;

   1.2.3. toString - converts Node to the format {Node(node name, coordinates=node coordinates, isBuilding=true/false)}.





2\. Graph - collection of nodes.

attributes:

   2.1.1. name (string) - the name of the graph. It is necessary in the future, as the project deployment involves the task of embedded graphs;

   2.1.2. nodes (dictionary) - keeps the info about nodes. Key - the name of the location, value - object of class Node.



functions:

   2.2.1. addNode(name: str, coordinates: tuple\[float, float], subgraph=None, isBuilding: bool = False) - adds the node to in the graph;

   2.2.2. addEdge(name1: str, name2: str, distance: float, time: number, bidirectional: bool = True) - adds the edge between nodes. In the case of further deployment, the attribute "bidirectional" can be very useful, since the distance (or time) from point A to point B will not always be the same as the distance from point B to point A (for example, traffic jams can affect the choice of route);

   2.2.3. getAllNodes() - returns all graph nodes. It's useful for sending nodes to client side;

   2.2.4. deleteEdge(from: str|node, to: str|Node) - delete an edge from the graph and returns true if edge existed and was removed;

   2.2.5. deleteNode(target: str|Node) - Delete a node from the graph by its name (and all edges connected to it) and returns true if node existed and was removed;

   2.2.6. dijkstra(start: string|Node, weightStrategy: str, customNodes = null:  Map<string, Node>) - finds the shortest paths from node Start to other nodes by Dijkstra's algorithm. We can calculate the best path by the shortest distance (weightStrategy = "distance") or by the fastest time (weightStrategy = "time");

   2.2.7. bellmanFordBase(start: str, weightStrategy: str, customNodes = null: Map<string, Node>) - Internal helper for Bellman–Ford algorithm base logic. Used by both Bellman–Ford and Johnson’s algorithms.

   2.2.8. bellmanFord(start: str|Node, weightStrategy: str) - finds the shortest paths from node Start to other nodes by Bellman–Ford's algorithm. We can calculate the best path by the shortest distance (weightStrategy = "distance") or by the fastest time (weightStrategy = "time");;

   2.2.9. dijkstraAll(weightStrategy: str) - computes the shortest paths from each node to others by Dijkstra's algorithm. We can calculate the best paths by the shortest distance (weightStrategy = "distance") or by the fastest time (weightStrategy = "time");

   2.2.10. bellmanFordAll(weightStrategy: str) - computes the shortest paths from each node to others by Bellman–Ford's algorithm. We can calculate the best paths by the shortest distance (weightStrategy = "distance") or by the fastest time (weightStrategy = "time");

   2.2.11. floydWarshall(weightStrategy: str) - computes the shortest paths from each node to others by Floyd–Warshall algorithm. We can calculate the best paths by the shortest distance (weightStrategy = "distance") or by the fastest time (weightStrategy = "time");

   2.2.12. johnson(weightStrategy: str) - computes the shortest paths from each node to others by Johnson algorithm. We can calculate the best paths by the shortest distance (weightStrategy = "distance") or by the fastest time (weightStrategy = "time");

   2.2.13. aStar(start: str|Node, goal: str|Node, weightStrategy: str) - finds the shortest paths from node Start to node Goal by A\* algorithm (the most efficient algorithm to find the shortest path from one point to another). We can calculate the best paths by the shortest distance (weightStrategy = "distance") or by the fastest time (weightStrategy = "time");

   2.2.14. aStarAll(weightStrategy: str) - computes the shortest paths from each node to others by A\* algorithm. We can calculate the best paths by the shortest distance (weightStrategy = "distance") or by the fastest time (weightStrategy = "time");

   2.2.15. findClosestNode(coordinates: array) - finds the closest node from our graph to the node which we use as a parameter. This function is needed if user's trying to find the path from (or to) the location which is not included to the nodes of our graph;

   2.2.16. \_euclideanDistance(coordinate1: number, coordinate2: number) - auxiliary inner function for findClosestNode. Here we calculate the distance between points coordinate1 and coordinate2 by Euclidean distance.



\*reference:
test №1. cities and distances between them (undirected weighted graph) https://www.kaggle.com/code/alexkhr/many-graph-algorithms/input (/backend/tests/mst/MST.csv)
