##  Appendix K: Target and Position "Tree" File Example


```
*TARGET_POINT_START
$  <label><posn>    <title>
         1AP2       Example target point
$
$ Target point coordinates
$      <x>       <y>       <z>
     500.0     500.0       0.0
$
$ Horizontal angles
$    <min>     <max>
      25.0      90.0
$
$ Velocity, contact part set and current position
$
$    <Vel><Cont set><head_pos>
   5364.48         2         1
$
*HEAD_POSITION
$  <label><name>
         1max h= 90.0
$
$ H-point position, headform angles and relation to target point
$      <x>       <y>       <z>   <horiz>    <vert>  <maxmin>
     500.0     500.0       0.0      90.0       0.0       max
$
*TARGET_POINT_END
```


[Previous](j-headform-tree-file-example.md)  |  [Next](l-dialogue-typed-in-command-syntax.md)