
import math
import os
import dynaCon
import Oasys.THIS

def main(path,prevDel):
    connection = dynaCon.connect2THis()#Oasys.THIS.start(abspath="C:\\Users\\camp.seats\\AppData\\Roaming\\Ove Arup\\v21.0_x64\\this21_x64.exe",batch=True)

    #Flag all solids and get Von Mises Stress for all 
    m = Oasys.THIS.Model.Read(path)
    f = Oasys.THIS.AllocateFlag()
    m.FlagAll(f, Oasys.THIS.Entity.SOLID)
    arr = m.GetDataFlagged(f,Oasys.THIS.Component.SVON) # SZZ-ZDirect --get von mises stress for all elements
    filteredArr = filter(lambda x: not x.entity_id in prevDel,arr)
    elems = {}
    maxE = 0
    for i in filteredArr:
        
        elems[i.entity_id] = max(abs(i.ymax),abs(i.ymin)) #in case data type is negative
        
        if i.ymax>maxE:
            maxE = i.ymax
            maxID = i.entity_id
    
    Oasys.THIS.terminate(connection)
    return elems

