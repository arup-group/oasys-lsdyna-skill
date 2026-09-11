# ------------------------------------------------------------------------------
#
#  Example based on Gmsh Python tutorial 1
#
#  Geometry basics, elementary entities, physical groups
#
# ------------------------------------------------------------------------------

import gmsh
import Oasys.PRIMER
import dynaCon
import os

def saveModel(savePath,m,): #Save model
    print(f'>Saving model to {savePath}')
    output = {
        "version": "R13.0",
        "compress": False,
    }
    
    m.Write(savePath,output)
    print('>Model Saved.')

def endDyna(connection): #Terminate dyna window based on user input
    inpt = input("Press enter to terminate dyna window: ")
    while inpt != "":
        inpt = input("Press enter to terminate dyna window: ")
    
    print('>Connection Terminated')
    Oasys.PRIMER.terminate(connection)

def createGeom(nodes, elements): #Create dyna geometry
    m,connection = dynaCon.connect2Primer()
    print("..........................................................")
    print("-------------------STARTING LS-DYNA GEN-------------------")
    print("..........................................................")
    
    print("> Making Nodes")
    for id,xyz in enumerate(nodes): 
        Oasys.PRIMER.Node(m,int(id)+1,*list(xyz),0)
    
    print("> Making Elements")
    for id,nod in enumerate(elements):
        if nod.all():
            a = int(nod[0])
            b = int(nod[1])
            c = int(nod[2])
            d = int(nod[3])
            Oasys.PRIMER.Shell(m,int(id)+1,1,a,b,c,d)
    return [m,connection]


    
def getNodes(): #Get nodes and reshape data to be formatted for Dyna
    nodeTags, coord, parametricCoord = gmsh.model.mesh.getNodes(dim = -1, tag=-1,includeBoundary = False)#,returnParametricCoord=True)
    nodes = coord.reshape(-1,3)
    return nodes

def getElements(): #Get elements and reshape data to be formatted for Dyna
    elementTypes, elementTags, nodeTags = gmsh.model.mesh.getElements(dim=2,tag=-1) #returns all quad elements
    elems = nodeTags[0].reshape(-1,4) #if there were other element types, like tri, this would have to be modified
    return elems


def createRectangleShell(l,w,lc,showGUI,dynaGen, savePath,alg): #generate geometry based on inputs, mesh, then call GUI and dyna if wanted
    print("..........................................................")
    print("--------------------STARTING GEOM GEN---------------------")
    print("..........................................................")
    
    gmsh.initialize()

    #Add geometry points defining perimeter
    gmsh.model.geo.addPoint(0, 0, 0, lc, 1)
    gmsh.model.geo.addPoint(w, 0, 0, lc, 2)
    gmsh.model.geo.addPoint(w, l, 0, lc, 3)
    gmsh.model.geo.addPoint(0, l, 0, lc, 4)
    
    #Add lines defined by points
    gmsh.model.geo.addLine(1, 2, 1)
    gmsh.model.geo.addLine(2, 3, 2)
    gmsh.model.geo.addLine(3, 4, 3)
    gmsh.model.geo.addLine(4, 1, 4)
    
    #Create curve loop that collects lines
    gmsh.model.geo.addCurveLoop([4, 1, 2, 3], 1)
    
    #Create surface from curve loop
    gmsh.model.geo.addPlaneSurface([1], 1)
    
    
    #modifies mesh so that tris are turned into quads, original mesh is in triangles
    gmsh.model.geo.mesh.setRecombine(2, 1) 
    
    #From gmsh documentation:
    # Before they can be meshed (and, more generally, before they can be used by API
    # functions outside of the built-in CAD kernel functions), the CAD entities must
    # be synchronized with the Gmsh model, which will create the relevant Gmsh data
    # structures. This is achieved by the gmsh.model.geo.synchronize() API call for
    # the built-in CAD kernel. Synchronizations can be called at any time, but they
    # involve a non trivial amount of processing; so while you could synchronize the
    # internal CAD data after every CAD command, it is usually better to minimize
    # the number of synchronization points.
    gmsh.model.geo.synchronize()
    
    gmsh.model.mesh.setAlgorithm(2,1,alg) #Sets Meshing Algo -> 8: Frontal-Delaunay for quads
    # 2D mesh algorithm (1: MeshAdapt, 2: Automatic, 3: Initial mesh only, 5: Delaunay, 6: Frontal-Delaunay,  8: Frontal-Delaunay for Quads, 9: Packing of Parallelograms, 11: Quasi-structured Quad)
    # Default value: 6
    
    gmsh.model.mesh.generate()
    
    if showGUI:
        gmsh.fltk.run()
        
    if dynaGen:
    
        nodes = getNodes()
        
        elems = getElements()
        
        m,connection = createGeom(nodes, elems)
        
        saveModel(savePath,m,)
        
        Oasys.PRIMER.View.Ac()
        
        endDyna(connection)
        
    gmsh.finalize()
    
    return "Completed"


def main():
    
    saveFolder = "01"
    keyName = "rectangle.key"
    cwd = os.getcwd()
    savePath = os.path.join(cwd,"outputs",saveFolder,keyName)
    
    showGUI = False 
    dynaGen = True
    
    l = 20
    w = 10
    lc = 1
    alg = 8  #Sets Meshing Algo -> 8: Frontal-Delaunay for quads
    # 2D mesh algorithm (1: MeshAdapt, 2: Automatic, 3: Initial mesh only, 5: Delaunay, 6: Frontal-Delaunay,  8: Frontal-Delaunay for Quads, 9: Packing of Parallelograms, 11: Quasi-structured Quad)
    # Default value: 6
    
    createRectangleShell(l,w,lc,showGUI,dynaGen, savePath, alg)
    
    print("..........................................................")
    print("------------------------COMPLETED-------------------------")
    print("..........................................................")
    
if __name__ == "__main__":
    main()