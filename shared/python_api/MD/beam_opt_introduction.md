**Introduction and background**

Ansys LS-DYNA Von Mises Topology Optimization

The following is a description and overview of an implementation of a common topology optimization using Ansys LS-DYNA and the Python API.

The general idea of this optimization is to take a solid beam subject to boundary conditions and loading. The goal is to minimize the material needed to resist the load. This is done by analyzing the model, and removing elements that have a Von Mises stress multiplied by a calculated density factor under the user defined threshold. This is shown by Equation 1.

Equation 1:
![](../Storage/py_api-22-1/overview/overview-2024-04-11-5.jpg)

Where:

![](../Storage/py_api-22-1/overview/overview-2024-04-11-6.jpg)

![](../Storage/py_api-22-1/overview/overview-2024-04-11-7.jpg)

![](../Storage/py_api-22-1/overview/overview-2024-04-11-8.jpg)

![](../Storage/py_api-22-1/overview/overview-2024-04-11-9.jpg)

Figure 1 illustrates the density filter. This filter is a ratio ranging from 0-1 of active (red) elements to all the elements whose centroids are within the circle defined by radius r.

![](../Storage/py_api-22-1/overview/overview-2024-04-11-3.png)

Once the elements have been removed the model is run again, when there are no elements that are beneath the threshold, the threshold is increased by a user defined value and the process is repeated. The flow diagram is shown below in Figure 2.

![](../Storage/py_api-22-1/overview/overview-2024-04-11-4.png)

An example of the implemented algorithm is shown below in Figure 3, where the beam is supported at two points on the left of the beam at the top and the bottom. A point load is applied at mid height on the far right of the beam. In this example the final solution at iteration 39 has 50% less material than the initial beam. The initial model can be seen labeled as ‘0’:

![](../Storage/py_api-22-1/overview/overview-2024-04-11-5.png)