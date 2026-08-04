###  Example Scripts

| Example 1: Make a 10x10 mesh of nodes and shells   Problem  <br>How can you make a grid of new nodes and create a mesh of shells? |
| --- |

#####  Solution


```
// Declare variables
var x, y, i, j;


// Create a new model using Model constructor
var m = new Model();


// Give message saying what we are doing
Message("Making nodes");

// Loop over y nodes
for (y=0; y<11; y++)
{
// Loop over x nodes
    for (x=0; x<11; x++)
    {
// make node in model m using Node constructor
        var n = new Node(m, 1+x+(y*11), x*10, y*10, 0);
    }
}

Message("Making shells");
for (i=1; i<=10; i++)
{
    for (j=1; j<=10; j++)
    {
// Make shell using Shell constructor
        var s = new Shell(m, i+(j*10), 1, ((i-1)*11)+j+0, ((i-1)*11)+j+1,
                                          ((i-0)*11)+j+1, ((i-0)*11)+j+0);
    }
}

// Update the graphics in model
m.UpdateGraphics();

// View XY plane
View.Show(View.XY);

// Autoscale view
View.Ac();

```


#####  Discussion

To make the nodes and shells we first need to choose the model that they will be made in. The Model class in PRIMER gives you access to any existing models and also allows you to make new models. The line


```
var m = new Model();
```


creates a new model in PRIMER and m is then a Model object which you can use. We then need to make a grid of nodes. To make a 10x10 mesh of shells we need to make 11 nodes in the x direction and 11 in the y direction so we use 2 'for' loops to make the nodes. Just as a model can be made using the Model constructor a node can be made with the Node constructor. The line


```
var n = new Node(m, 1+x+(y*11), x*10, y*10, 0);
```


makes a new node in model m. The other arguments are the x, y and z coordinates of the node. We can make the shells in the same way using the Shell constructor. The arguments required are the model, shell number (EID), the part to create the shell in (PID - in this case we are using part 1) and the 4 nodes (N1-N4).

Once we have made all of the nodes and shells we have to tell PRIMER that things have been made and so the graphics need updating. This is done with the UpdateGraphics method for the model. Once we have refreshed the graphics we select the view we want to see and autoscale the plot.

The source code for this example is available [here](../Scripts/project-primer/primer_links/sect_10/make_10x10_shell_mesh.js).

####  Example 2: Change the number of integration points on a *SECTION_SHELL card depending on thickness

#####  Problem

You want to loop over all of the sections in your model (model 1) giving more integration points to the thicker sections.

#####  Solution


```
// Get the model object for model 1
var m = Model.GetFromID(1);


// Get the first section card in the model
var s = Section.First(m);


// While there is a section card look at it
while (s)
{
// If this section card is a section shell type then look at it
    if (s.type == Section.SHELL)
    {
// If thickness is < 1 then assign 2 ipts, < 2 assign 3 ipts, otherwise 5 ipts
        if      (s.t1 < 1.0) s.nip = 2;
        else if (s.t1 < 2.0) s.nip = 3;
        else                 s.nip = 5;
    }

// Get the next section after this one
    s = s.Next();
}
```


#####  Discussion


```
var m = Model.GetFromID(1);
```


retrieves the model pointer for model 1. Once we have the model pointer we can then look at the contents of the model.


```
var s = Section.First(m);
```


will return the section object for the first section in the model (or null if there are no sections). Once we have a section object then it is simple to look at the properties of the object and change them as required. First we look to see if the section type is correct (i.e the section is a shell section). If it is we look at the thickness and set the number of integration points.


```
s = s.Next();
```


will return the next section after this one or null if one does not exist. The while loop will keep looping until s is not 'true' so when we get to the last section s.Next will return null and we will break out of the while loop.

Note that this is a very simple example and we have not done any error checking. For example it is possible that one (or more) of the section cards in the model has been referred to by a part card but has not actually been read in or created. In this case PRIMER creates a 'latent' definition. The example should check for this problem. This can easily be done by looking at the exists property of the section. The check on the section type could be extended by doing:


```
if (s.type == Section.SHELL && s.exists)
```


The source code for this example is available [here](../Scripts/project-primer/primer_links/sect_10/set_num_ip_versus_thickness.js).

[Previous](brief-tutorial-on-javascript-in-primer.md)  |  [Next](introduction-quick-find.md)