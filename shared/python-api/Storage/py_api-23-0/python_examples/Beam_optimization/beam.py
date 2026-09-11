import Oasys.PRIMER
import time
import math
import os

def startPRIMER(f):

    def wrapper(*args, **kwargs):
        print("Started in wrapper")
        connection = Oasys.PRIMER.start(abspath="C:\\Users\\camp.seats\\AppData\\Roaming\\Ove Arup\\v21.0_x64\\primer21_x64.exe") # optional: port=1234, memory=100) default 25Mb and port 50051
        print("begin function")
        f(*args, **kwargs)
        print("end function")        
        # time.sleep(60)
        Oasys.PRIMER.terminate(connection)
        print('ended')
    
    return wrapper
    # return wrap
   
    
# @startPRIMER
def beam(m,f,hF):
    # m = Oasys.PRIMER.Model()
    
    W = .25 # Width
    wF = 2 #number of width elements
    
    H = .75 # height
    # hF = 6# number of elements high
    
    L = 1.5 # length
    # f = 12      # number of elements long
    
    cnt = 0
    for j in range(wF+1):
        y = j*W/wF
        for k in range(hF+1):
            z = k*H/hF
            for i in range(f+1): # x
                x = i*L/f
                cnt += 1
                Oasys.PRIMER.Node(m,cnt,x,y,z,0)
    
    scnt = 0
    for w in range(wF):
        addW = w*(f+1)*(hF+1)
        for h in range(hF):
            add = h*(f+1)
            for n in range(1,f+1):
                scnt +=1
                
                if scnt == 13:
                    print("lucky 13")
                n1 = n + add + addW
                n2 = f + n + add  + addW +1
                n3 = f + n + 1 + add + addW+1
                n4 = n + 1 + add + addW
                
                n5 = n + (f+1)*(hF+1) + add + addW
                n6 = n + (f+1)*(hF+2) + add + addW
                n7 = n + (f+1)*(hF+2) + add + addW + 1
                n8 = n + (f+1)*(hF+1) + add + addW + 1
                Oasys.PRIMER.Solid(m,{'eid':scnt,'pid':1,'nodes':[n1,n2,n3,n4,n5,n6,n7,n8]})
            
    applySPC(1,"pin",m)
    applySPC(f+1,"pin",m)
    
    applySPC((f+1)*(hF+1)+1,"pin",m)
    applySPC((f+1)*(hF+1)+1+f,"pin",m)
    
    applySPC((f+1)*(hF+1)*2+1,"pin",m)
    applySPC((f+1)*(hF+1)*2+1+f,"pin",m)
    # applySPC(2*f,"pin",m)
    
    midNode = int((hF+1)*(f+1)+(hF)*(f+1)+math.floor((f)/2)+1)
    applyLoad(midNode,-100,3,m)
        
    #apply
            



def applySPC(node,cond,m):
    
    spcDict = {
        #           x  y  z  rx  ry  rz
        'roller' : [0, 1, 1, 0,  0,  0],
        "pin"    : [1, 1, 1, 0,  0,  0],
        'fixed'  : [1, 1, 1, 1,  1,  1]
    }
    
    Oasys.PRIMER.Spc(m, node, 0,*spcDict[cond], 1)
    
    # Oasys.PRIMER.Spc(m,node,0,1,1,1,0,0,0,1)
    
    
def applyLoad(node,mag,dir,m):
    defineLoadCurve(m)
    Oasys.PRIMER.LoadNode(m,1,node,dir,1,mag)


def definePart(m,L,H):
    
    defineMat(m)
    defineSection(m)
    
    Oasys.PRIMER.Part(m,1,1,1)
    
    beam(m,L,H)
    
        
    # pass

def defineSection(m):
    
    # print(Oasys.PRIMER.Section.Create())
    s1 = Oasys.PRIMER.Section(m,1,Oasys.PRIMER.Section.SOLID)
    
    s1.elform = 1
    
def defineMat(m):
            
        mat = {
            "steel":{
                "E":2.0E11,
                "RO":7850,
                "PR":0.3,
                
                
            }
        }
        mat1 = Oasys.PRIMER.Material(m,1,"ELASTIC")
        for n,p in mat['steel'].items():
            print(n)
            print(p)
            mat1.SetPropertyByName(n,p)
        return m
        
def defineLoadCurve(m):
    
    curveP = [[0,0],
             [.1,1],
             [2,1]]
    # print(dir(Oasys.PRIMER.Curve.__init__()))
    # l = Oasys.PRIMER.Curve(m, {type:Curve.CURVE, lcid:200});
    print(dir(Oasys.PRIMER.Curve.CURVE))
    curType = Oasys.PRIMER.Curve.CURVE
    print(f'This is curType {curType}')
    l = Oasys.PRIMER.Curve( m, {'type': Oasys.PRIMER.Curve.CURVE,"lcid":1})
    
    for i,p in enumerate(curveP):
        print(f'Setting point {i,p[0],p[0]}')
        l.AddPoint(p[0],p[1])
    
    l.dattyp = 0
    l.sidr = 0
    l.sfa = 0
    l.sfo = 0
    l.offo = 0
    l.lcint = 0
    
    
    

def defineControl(m):
    
    print(dir(m.control))
    # print(m.control.keys())
    # print('\n')
    # print(m.control['termination'])
    # print('\n')
    
    m.control['termination'].exists = True
    m.control['termination'].endtim = 1
    
    m.database['binary']['d3thdt'].exists = True
    m.database['binary']['d3thdt'].dt = 0.001
    
    s = Oasys.PRIMER.Set(m, 1, Oasys.PRIMER.Set.SOLID)
    
    elems = Oasys.PRIMER.Solid.GetAll(m)
    for e in elems:
        print(e)
        s.Add(e.eid)
    
    s = Oasys.PRIMER.History(m,Oasys.PRIMER.History.SOLID_SET,1)
    print(dir(s))
def writeModel(m,savePath):
    
    output = {
        "version": "R13.0",
        "compress": False,
    }
    

    
    m.Write(savePath,output)
# beam()
@startPRIMER  
def main(savePath,L,H):
    
    m = Oasys.PRIMER.Model()
    
    definePart(m,L,H)
    
    defineControl(m)
    
    writeModel(m,savePath)

# path = os.getcwd()
# savePath = os.path.join(path,"beam100_200",'beam.key')  
# main(savePath,200,100)