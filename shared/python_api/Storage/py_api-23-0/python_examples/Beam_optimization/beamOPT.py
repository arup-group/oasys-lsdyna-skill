import Oasys.PRIMER
import time
import math
import os
import dynaCon


def main(path,savePath,elems):
    
    connection = dynaCon.connect2Primer()
    print('-----------------------------------------')
    print(f'Reading path {path}')
    print('-----------------------------------------')
    m = Oasys.PRIMER.Model.Read(path)


    #Switch elements to be removed from part 1 to 2 (low density material)
    for ids,val in elems.items():
        s = Oasys.PRIMER.Solid.GetFromID(m,int(ids))
        s.pid = 2 
        
    output = {
        "version": "R13.0",
        "compress": False,
    }
    
    m.Write(savePath,output)
    
    Oasys.PRIMER.terminate(connection)



def getSolidLoc(path,r):
    
    connection = dynaCon.connect2Primer()
    print('-----------------------------------------')
    print(f'Reading path {path}')
    print('-----------------------------------------')
    m = Oasys.PRIMER.Model.Read(path)
    
    #Get all solid elements from the model
    elems = Oasys.PRIMER.Solid.GetAll(m)

    eCord = {}
    delF = Oasys.PRIMER.AllocateFlag()
    
    #Get all nodes that are associated with each solid and store in dict
    zMin = 1000
    zMax = -1000
    
    xMin = 1000
    xMax = -1000
    for s in elems:

        n1 = Oasys.PRIMER.Node.GetFromID(m,s.n1)
        n2 = Oasys.PRIMER.Node.GetFromID(m,s.n2)
        n3 = Oasys.PRIMER.Node.GetFromID(m,s.n3)
        n4 = Oasys.PRIMER.Node.GetFromID(m,s.n4)
        n5 = Oasys.PRIMER.Node.GetFromID(m,s.n5)
        n6 = Oasys.PRIMER.Node.GetFromID(m,s.n6)
        n7 = Oasys.PRIMER.Node.GetFromID(m,s.n7)
        n8 = Oasys.PRIMER.Node.GetFromID(m,s.n8)
        
        nodE = [n1, n2, n3, n4, n5, n6, n7, n8]
        
        x = 0
        y = 0
        z = 0
        
        for  n in nodE:
            x += n.x
            y += n.y
            z += n.z
            
        x = x/8
        y = y/8
        z = z/8
        
        if x<xMin:
            xMin = x
        if x>xMax:
            xMax = x
        
        if z<zMin:
            zMin = z
        if z>zMax:
            zMax = z
        
        eCord[s.eid] = {"cords":[x,y,z]}

    Oasys.PRIMER.terminate(connection)

    
    for eid1,i in eCord.items():
        print(f'This is eid1 {eid1}')
        print(f'This is i {i}')
        xi = i['cords'][0]
        zi = i['cords'][2]
        

        eCord[eid1]["edge"] = False
        if abs(xi-xMin)<.03 or abs(xi-xMax)<.03 or abs(zi-zMin)<.03 or abs(zi-zMax)<.03: #.03 is just a sensitivity related to mesh
            eCord[eid1]["edge"] = True
        
        n = []
        for eid2, j in eCord.items():
            
            xc = j['cords'][0]
            zc = j['cords'][2]
            
            rn = math.sqrt( (xi-xc)**2 + (zi -zc)**2)
            
            if rn<= r:
                n.append({eid2:rn})
        
        eCord[eid1]["neighbors"] = [*n]
            
    
    return eCord
