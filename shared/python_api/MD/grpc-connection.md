[gRPC](https://grpc.io/) is the framework that enables the communication between Python and the Oasys LS-DYNA Environment programs.

If a Python script starts an instance of a Oasys LS-DYNA Environment program, for example PRIMER, Python will connect to the program automatically.

But for a Python script to connect to an already running instance of a program, the program must be in a special mode telling it to listen on a port for gRPC messages. There are two possible methods to do so:

* Use the -grpc command line argument when starting the program, e.g:

    
Bash (Unix Shell)

```
C:\\path_to_your_executable\\primerXX_x64.exe' -grpc=50051
```


* Start the program in the usual way, and then under **Options &gt; gRPC/Python** click on "**Start**":

![](../Storage/py_api-22-1/grpc-connection/grpc-connection-2024-04-07.png)

Note: 50051 is the default gRPC port for PRIMER, but a different port can be used.

In an analogous mode gRPC can be started for **D3PLOT** and **T/HIS** (the default port numbers are 50054 and 50052 respectively).

For **REPORTER** the start gRPC panel is under **Script &gt; gRPC/Python** (the default port number is 50053):

![](../Storage/py_api-22-1/grpc-connection/grpc-connection-2024-04-07-1.png)