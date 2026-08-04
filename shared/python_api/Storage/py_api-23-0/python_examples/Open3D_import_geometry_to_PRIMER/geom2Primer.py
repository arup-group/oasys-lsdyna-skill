import open3d  as o3d
import numpy as np

import Oasys.PRIMER
import time
import math
import os
import dynaCon


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
    
    try:
        Oasys.PRIMER.terminate(connection)
        print('>Connection terminated')
    except:
        print(">Window already terminated")


def getOpen3DGeom(model): #Get Geom from Open3D
    print("..........................................................")
    print("--------------------STARTING GEOM GEN---------------------")
    print("..........................................................")
    
    if model == "armadillo":
        knot_mesh = o3d.data.ArmadilloMesh()
    elif model == "monkey":
        knot_mesh = o3d.data.MonkeyModel()
    elif model == "avocado":
        knot_mesh = o3d.data.AvocadoModel()
    elif model == "sword":
        knot_mesh = o3d.data.SwordModel() 
    elif model == "bunny":
        knot_mesh = o3d.data.BunnyMesh() 
        
    mesh = o3d.io.read_triangle_mesh(knot_mesh.path)
    print(">Geometry Completed\n")
    return mesh
    
def createGeom(nodes, elements,m): #Create Dyna nodes and elements
    print("..........................................................")
    print("-------------------STARTING LS-DYNA GEN-------------------")
    print("..........................................................\n")
    
    print("> Making Nodes")
    for id,xyz in enumerate(nodes): 
        Oasys.PRIMER.Node(m,id+1,*xyz,0)
    print("> Making Elements")
    for id,nod in enumerate(elements):
        a = int(nod[0]+1)
        b = int(nod[1]+1)
        c = int(nod[2]+1)
        Oasys.PRIMER.Shell(m,id+1,1,a,b,c)
    
    print(">PRIMER Model Completed\n")

def main():
    model = 'avocado'
    modelName = f'{model}.key'
    folder = "01"
    cwd = os.getcwd()
    savePath = os.path.join(cwd,'outputs',folder,modelName)
    
    mesh = getOpen3DGeom(model)
    
    nodes = np.asarray(mesh.vertices)
    elements = np.asarray(mesh.triangles)
    
    m,connection = dynaCon.connect2Primer()
    
    createGeom(nodes,elements,m)
    
    saveModel(savePath,m,)
    
    Oasys.PRIMER.View.Ac()
    
    endDyna(connection)
    print("..........................................................")
    print("------------------------COMPLETED-------------------------")
    print("..........................................................")


if __name__ == "__main__":
    main()