import os

import beam
import dynaRun
import getResults
import optModel
import beamOPT




def main():

#INPUTS
    numInt = 15 #Number of iterations
    key = "beam.key"
    timeHis = 'beam.thf'
    pathInit = os.getcwd()
    L = 48 #number of elements in Length direction
    H = 24 #number of elements in height direction
    r = .05 #density filtration radius
    thresh =    .051 #initial threshold -> thresh < e_vms/max(vonMises Stress)?
    threshInc = .01
    elemDel = {}
    cnt = 450 # inital folder location for base model
    base = cnt
    fileF = open("LOG.txt", "w")
    prevRan = False
    
    prevDel = []
    for i in range(numInt):
        
        steadyS = True
        
        while steadyS:
            
                #for first iteration get coordinate information re elements in model
            if cnt == base:
                f = str(base)
                eleCords = beamOPT.getSolidLoc(os.path.join(pathInit,"initialM",f,key),r)
                subF = 'initialM'
                print(f'<<<<<<<<<<<<<<<<<<<<<<Starting threshold @ {thresh}>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

            else:
                f =  f'{cnt}'
                subF = 'outputs'
                
            pathRun = os.path.join(pathInit,subF)
            pathPrime = os.path.join(pathInit,subF,f,key)
            savePath = os.path.join(pathInit,"outputs",f"{cnt+1}",key)
            
            #Run Current Model, except if model has been run and threshold was just increased
            if not prevRan:
                dynaRun.main(pathRun,f)
                prevRan = False
            
            #Retrieve results from model run
            pathTHIS = os.path.join(pathRun,f,timeHis)
            elemResults = getResults.main(pathTHIS,prevDel)
            
            #Conduct optimization based on element results from model, returns dict of elements that are to be removed from model
            elemDel = optModel.main(elemResults, eleCords, L, H, thresh, r,prevDel)
            print(".....................................")
            print(f" We are deleteing these: {elemDel}")
            print(".....................................")
            fileF.write(f"ITERATION: {cnt} :: We are deleteing these: {elemDel}\n") #LOG
            
            #delete determined elements from model, write to new path (folder +1)
            beamOPT.main(pathPrime,savePath,elemDel)
            prevDel = prevDel + list(elemDel.keys())
            cnt+=1
            
            if not elemDel or elemDel in prevDel:
                steadyS = False
                prevRan = True
        
            #Increment the % of max deletion threshold
        thresh += threshInc
        print(f'<<<<<<<<<<<<<<<<<<<<<<Increasing threshold to {thresh}>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    
    fileF.close()


if __name__ == "__main__":
    main()