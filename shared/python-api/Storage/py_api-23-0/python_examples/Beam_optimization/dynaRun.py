import subprocess
import os
from dotenv import main
main.load_dotenv()

def main(pathInit,folder):
    # run = f"C:\\Users\\camp.seats\\AppData\\Roaming\\LS-Dyna\\ls-dyna_smp_d_R13.1_138-g8429c8a10f_winx64_ifort190.exe I=beam.key G=beam.ptf F=beam.thf B=beam.rlf o=beam.otf s=beam.ctf W={os.path.join(pathInit,folder)} MEMORY=1000000000 NCPU=7 "
    run = f"{os.getenv('DYNARUNEXE')} I=beam.key G=beam.ptf F=beam.thf B=beam.rlf o=beam.otf s=beam.ctf W={os.path.join(pathInit,folder)} MEMORY=1000000000 NCPU=7 "

    # subprocess.run('set LSTC_LICENSE=network')
    # # subprocess.run('set LSTC_LICENSE_SERVER=L-ALM01')
    print('-------------------------------------------')
    print(folder)
    print('-------------------------------------------')
    os.chdir(os.path.join(pathInit,folder))

    subprocess.run(run) 
    print("--------------------------------------------")
    print("                COMPLETED                 ")             
    print("--------------------------------------------")


# set LSTC_LICENSE=network
# set LSTC_LICENSE=ANSYS
# set ANSYSLMD_LICENSE_FILE=1055@azdynalsuksp101;1055@azdynalsncusp101;1055@azdynalsseap101