####  Master Connection File (MCF) Format

An MCF file is a connections file written in XML format. An example of an MCF file is given below:


```
<?xml version="1.0" encoding="UTF-8"?>
<xml_connection_file xmlns:xsi="http://www.w3.org/2000/10/XMLSchema-instance" xsi:noNamespaceSchemaLocation="mcf.xsd">
  <version> 1.0.0 </version>
  <connection_group>
    <id> 1 </id>
    <connected_to>
      <pid> 1 </pid>
      <pid> 2 </pid>
    </connected_to>
    <connection_list>
      <connection_0d>
        <id> 100001 </id>
        <type>spotweld</type>
        <loc> 42.39  83.91  1.94 </loc>
        <info>  dia  5. </info>
        <info>  comment This_Is_A_Comment </info>
      </connection_0d>
      <connection_0d>
        <id> 100002 </id>
        <type>spotweld</type>
        <loc> 74.29 49.12 1.94 </loc>
        <info>  dia  5. </info>
      </connection_0d>
      <connection_1d>
        <id> 100009 </id>
        <type>adhesive</type>
        <loc_list>
          <loc> 1.0  50.0  0.0 </loc>
          <loc> 2.0  50.0  0.0 </loc>
          <loc> 3.0  50.0  0.0 </loc>
          <loc> 4.0  50.0  0.0 </loc>
          <loc> 5.0  50.0  0.0 </loc>
          <loc> 6.0  50.0  0.0 </loc>
          <loc> 7.0  50.0  0.0 </loc>
        </loc_list>
        <info> width 7. </info>
      </connection_1d>
      <connection_2d>
        <id> 4429 </id>
        <type>adhesive</type>
        <loc_list>
          <loc>  2748.69 -349.67 1386.83 </loc>
          <loc>  2749.49 -359.62 1386.08 </loc>
          <loc>  2739.23 -350.69 1389.11 </loc>
          <loc>  2740.04 -360.63 1388.34 </loc>
          <loc>  2729.78 -351.71 1391.38 </loc>
          <loc>  2730.59 -361.65 1390.60 </loc>
          <loc>  2720.32 -352.73 1393.65 </loc>
          <loc>  2721.15 -362.67 1392.86 </loc>
          <loc>  2710.86 -353.75 1395.93 </loc>
          <loc>  2711.70 -363.69 1395.12 </loc>
        </loc_list>
        <face_list>
          <face> 1 2 4 3  </face>
          <face> 3 4 6 5  </face>
          <face> 5 6 8 7  </face>
          <face> 7 8 10 9 </face>
        </face_list>
        <info>  height  2.0 </info>
      </connection_2d>
    </connection_list>
  </connection_group>
</xml_connection_file>
```


The main tag of the file must be xml\_connection\_file . Each selection of parts that are to be connected then form a connection\_group and the part ids of the connected parts are listed in the connected\_to tag. 
Each connection is then given inside the connection\_list tag. There are currently three available types:

* connection\_0d . These are connections that can be represented by a single location in space. 
The spotweld and gumdrop type s can be read into PRIMER . 
The loc tag describes the x, y and z location of the connection in global coordinates.
* connection\_1d . These are connections that can be represented by a curve in space. 
The spotline and adhesive type s can be read into PRIMER . 
The loc\_list tag encompasses the x, y and z coordinates that make up the connection curve.
* connection\_2d . These are connections that can be represented by a surface in space. 
The adhesive type can be read into PRIMER . 
The loc\_list tag encompasses the x, y and z coordinates that make up the mesh used to define the connection plane. 
The face\_list tag then describes the tesselation that defines the mesh, where the numbers in the face tags are the indices of the nodal points in the loc\_list section.

In each of the above cases, the optional info tag can be used to define extra information e.g. dia is the diameter of a 0d connection and width is the width of a 1d connection. If the size of the connection (diameter, width) is not specified the PRIMER defaults will be applied.

[Previous](vip-spotweld-file-format.md)  |  [Next](primer-xml-connection-file.md)