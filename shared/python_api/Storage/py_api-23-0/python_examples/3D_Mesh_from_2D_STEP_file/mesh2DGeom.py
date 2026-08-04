import gmsh
import os
import Oasys.PRIMER
import dynaCon


def createGMSHGeom(file,h,meshSize,L,extrdDir,fileExt,showGMSH=False):
    if fileExt.lower() == '.stp' or fileExt.lower() == '.stp':
        gmsh.option.setString('Geometry.OCCTargetUnit', 'M')
        
    gmsh.model.occ.importShapes(file)
    gmsh.model.occ.synchronize()
    extSurfs = []
    for s in gmsh.model.getEntities(2):
        gmsh.model.mesh.setAlgorithm(s[0],s[1],8)
        gmsh.model.mesh.setRecombine(s[0], s[1])
        extSurfs.append((s[0],s[1]))
        
    for p in gmsh.model.getEntities(0):
        gmsh.model.mesh.setSize([(0,p[1])], meshSize)
        
        
    
    if extrdDir == 'x':
        gmsh.model.occ.extrude(extSurfs, h, 0, 0, [L], [ 1], recombine=True)
        
    elif extrdDir == 'y':
        gmsh.model.occ.extrude(extSurfs, 0, h, 0, [L], [ 1], recombine=True)
        
    elif extrdDir == 'z':
        gmsh.model.occ.extrude(extSurfs, 0, 0, h, [L], [ 1], recombine=True)
        
    gmsh.model.mesh.refine()
    gmsh.model.mesh.recombine()
    gmsh.model.occ.synchronize()
    
    gmsh.model.mesh.generate(3)
    if showGMSH:
        gmsh.fltk.run()
        
    nodes = getNodes()    
    elementTypes,*_ = gmsh.model.mesh.getElements(dim=3,tag=-1)

    if 5 in elementTypes:
        qElems = getQuadElements(elementTypes.tolist().index(5))
    if 6 in elementTypes: 
        tElems = getTriElements(elementTypes.tolist().index(6))
    
    return [nodes,qElems,tElems]

def getNodes(): #Get nodes and reshape data to be formatted for Dyna
    nodeTags, coord, parametricCoord = gmsh.model.mesh.getNodes(dim = -1, tag=-1,includeBoundary = False)#,returnParametricCoord=True)
    nodes = coord.reshape(-1,3)
    return nodes

def getQuadElements(ind): #Get elements and reshape data to be formatted for Dyna
    _,_, nodeTags = gmsh.model.mesh.getElements(dim=3,tag=-1) #returns all quad elements
    elems = nodeTags[ind].reshape(-1,8) #if there were other element types, like tri, this would have to be modified
    return elems

def getTriElements(ind): #Get elements and reshape data to be formatted for Dyna
    _,_, nodeTags = gmsh.model.mesh.getElements(dim=3,tag=-1) #returns all quad elements
    elems = nodeTags[ind].reshape(-1,6) #if there were other element types, like tri, this would have to be modified
    return elems

def makeSolids(nodes,elems,eid,m,makeNodes,tri=False):
    
    if makeNodes:
        for id,xyz in enumerate(nodes):
            Oasys.PRIMER.Node(m,id+1,*xyz,0)
    if tri:
        for id,elem in enumerate(elems):                                    #1               2           3               4           5           6
            Oasys.PRIMER.Solid(m, {'eid': id+eid, 'pid': 1, 'nodes': [int(elem[1]), int(elem[0]), int(elem[3]), int(elem[4]), int(elem[2]), int(elem[5]),]})
    else:
        for id,elem in enumerate(elems):
            Oasys.PRIMER.Solid(m, {'eid': id+eid, 'pid': 1, 'nodes': elem.tolist()})
            
    return eid+id

def main():

    curPath = os.path.abspath(os.path.dirname(__file__))
    fileName = '2dmesh'
    fileExt = '.step'
    stepFile = os.path.join(curPath,f'{fileName}{fileExt}')
    dynaFile = os.path.join(curPath,'outputs',f'{fileName}.key')
    
    h = 200 #extrude length
    extrdDir = 'y'
    meshSize = 50 
    numExtrdElems = 4
    
    gmsh.initialize()
    
    nodes, qElems, tElems = createGMSHGeom(stepFile,h,meshSize,numExtrdElems,extrdDir,fileExt)
    eid = 1
    
    m, connection = dynaCon.connect2Primer()
    eid = makeSolids(nodes,qElems,eid,m,makeNodes=True,tri=False)
    makeSolids(nodes,tElems,eid+1,m,makeNodes=False,tri=True)
    
    Oasys.PRIMER.View.Ac()
    
    if dynaFile:
        dynaCon.saveModel(dynaFile,m)
        
    dynaCon.endDyna(connection)
    gmsh.finalize()


if __name__=='__main__':
    main()