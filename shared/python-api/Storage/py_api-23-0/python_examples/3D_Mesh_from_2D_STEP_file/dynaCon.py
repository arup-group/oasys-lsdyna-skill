import Oasys.PRIMER

import os
from dotenv import main
main.load_dotenv()

def connect2Primer():
    p = 3000
    for i in range(10):
        p+=1
        try:
            print(f"Trying connection on port {p}")
            connection = Oasys.PRIMER.start(abspath=os.getenv('PRIMERCON'),port=p)
            # connection = Oasys.PRIMER.start(abspath="C:\\Users\\camp.seats\\AppData\\Roaming\\Ove Arup\\v21.0_x64\\primer21_x64.exe",batch=True,port=p)
            print(f'Connection Success!!')
            m = Oasys.PRIMER.Model()
            return [m,connection]
        except:
            print(f'Connection failed on port {p}')
    raise Exception("WERE NOT ABLE TO CONNECT")

def endDyna(connection): #Terminate dyna window based on user input
    inpt = input("Press enter to terminate dyna window: ")
    while inpt != "":
        inpt = input("Press enter to terminate dyna window: ")
    
    try:
        Oasys.PRIMER.terminate(connection)
        print('>Connection terminated')
    except:
        print(">Window already terminated")
        
        
        
def saveModel(savePath,m,):
    print(f'>Saving model to {savePath}')
    output = {
        "version": "R13.0",
        "compress": False,
    }
    
    m.Write(savePath,output)
    print('>Model Saved.')