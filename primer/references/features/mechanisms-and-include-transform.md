###  Mechanisms and *INCLUDE_TRANSFORM

It is sometimes useful to place mechanism assemblies inside include files which use \*INCLUDE\_TRANSFORM plus \*DEFINE\_TRANSFORMATION to define their orientation and position.

PRIMER detects this automatically, and when such mechanisms are positioned an extra 4 lines are added to the relevant \*DEFINE\_TRANSFORMATION keywords which are equivalent to the change in each assembly's position.

| | Lines added by PRIMER to  <br>\*DEFINE\_TRANSFORMATION |<br>| --- |<br>| TRANSL dx dy dz <br>ROTATE 1 0 0 cx cy cz tx <br>ROTATE 0 1 0 cx cy cz ty <br>ROTATE 0 0 1 cx cy cz tz | | &lt;cx cy cz&gt; is the centre of rotation, tx/y/z the angle in degrees.<br> <br>Note that all four lines are always written, even when a given transformation is in fact zero.<br> <br>This is to enable PRIMER to "know" what is there and overwrite it if the assembly is re-positioned during a session, thus avoiding a build-up of many lines. |
| --- | --- |
| A consequence of this is that you must not mix mechanism positioning and manual editing of these \*DEFINE\_TRANSFORMATION definitions within a single session, otherwise you may confuse the logic which updates these lines. |

The effect on output from PRIMER is that such assemblies will revert to their untransformed position, and on subsequent reading into Ansys LS-DYNA (or back into PRIMER ) will revert to their "as positioned" state when the transforms are applied.

Within a single PRIMER session these transformations are overwritten if the assembly is repositioned, so that a session will only ever add an extra 4 lines. However if you exit and restart PRIMER (or reread or copy the model) then any subsequent positioning will create a new block of 4 lines.

Therefore if a mechanism is to be generated in several different positions these should be created within a single PRIMER session or, which would be better because it would also reduce the build-up of small residual errors, by starting each time from the original (untransformed) file.

####  Rules when using *INCLUDE_TRANSFORM with mechanisms:

* PRIMER only peforms these modifications if an assembly is in one or more \*INCLUDE\_TRANSFORM files  ***and***  these each refer to an existing \*DEFINE\_TRANSFORMATION definition.
* PRIMER assumes that a given \*DEFINE\_TRANSFORMATION definition is used  ***only***  by the \*INCLUDE\_TRANSFORM file(s) that contains this assembly. (But see the change for 9.3.1 described [below](mechanisms-and-include-transform.md#mech_change_931).)
* PRIMER permits an assembly to be spread over several \*INCLUDE\_TRANSFORM files (although this is not recommended) and each such file must either refer to the same \*DEFINE\_TRANSFORMATION definition, or to separate definitions that are used only by these files.
* PRIMER will create a new block of the four \*DEFINE\_TRANSFORMATION lines described above when an assembly in such an include file is first positioned, and it assumes that it "owns" these last four definitions for the duration of the session. If you edit these cards manually in a session in which you have performed mechanism positioning the results may go wrong.

####  Recommended modelling practice when using *INCLUDE_TRANSFORM with mechanisms:

It is  ***strongly***  recommended that if \*INCLUDE\_TRANSFORM files positioned by \*DEFINE\_TRANSFORMATION s are to be used with mechanisms (and dummies) then the following practice be adopted:

1. **Use a "one include file per assembly" policy.**  
 
Put the nodes, parts, elements, sets etc that make up an assembly into a single file, do not split them over multiple include files.
2. **Also use a "one assembly per include file" policy.**  
 
Do not put multiple assemblies in an include file, as a single \*DEFINE\_TRANSFORMATION cannot then be applied to them.
3. **Do not mix "assembly" and "non-assembly" data in include files.**  
 
This will avoid transformations being applied to "non-assembly" structure that should not be moved. 
   ****
4. **Use a unique transformation for each such include file.**  
 
Create a single \*DEFINE\_TRANSFORMATION for each such include file, and use it only for that file. This will avoid possible conflicts.

If this practice is adopted then it is highly unlikely that things will get confused.

Rule (1) above is not strictly necessary but it is good practice, and it should avoid problems arising from small dimensional errors where part of an assembly is moved en-bloc by a \*DEFINE\_TRANSFORMATION and part by explicit updates of nodal coordinates. Remember that joints in particular are sensitive to even very small initial misalignments!

| Change of behaviour in release 9.3.1 to handle multiple assemblies in *INCLUDE_TRANSFORM file  <br>In the original release 9.3 software it was assumed that users would adhere to the rule that " \*INCLUDE\_TRANSFORM could only apply to a single assembly" as described above.<br> <br>However experience showed that some users would import a complete mechanism or dummy (containing multiple assemblies) in a single include file subject to a single transform. This caused problems because every assembly added its own 4 lines of transforms, leading to a ridiculous result.<br> <br>Therefore from release 9.3.1 onwards a check has been added as follows:<br> <br>Each assembly is checked for membership of \*INCLUDE\_TRANSFORM s and the extra positioning lines are only added to the associated \*DEFINE\_TRANSFORMATION card if the following criteria are satisfied:<br><ol> <li>The <span class="courierbold">*INCLUDE_TRANSFORM </span>file <i> <b>must </b> </i>contain <i> <b>only </b> </i>items in that assembly. It may contain the whole assembly, or only a subset of it, but it may not refer to anything else in a different assembly or to unrelated structure not in the mechanism/dummy definition. <br> <br> </li> <li>An assembly may be made up of components from multiple include files (although this would be unusual), and transformations will only be applied to those include files which satisfy rule #1 above. </li> </ol> <br>This means that - for example - a dummy may be imported in an \*INCLUDE\_TRANSFORM file and located in the model using a \*DEFINE\_TRANSFORMATION associated with this. Any subsequent mechanism or dummy positioning will work normally, but extra transformation lines will no longer be added to the \*DEFINE\_TRANSFORMATION , meaning that the nodal coordinates will be updated when that include file is written out.<br>  Extension of the above logic in release 10.0  <br>It turned out that the check added above, which was based only on which nodes were in which include files, was defeated by a case where a modeller placed nodes for all assemblies in include file A, then parts and elements for all assemblies in include file B, and subjected both files to the same transform. Since the test above assumed implicitly that nodes and elements would be in the same include file PRIMER wrongly created multiple transformations for the second file B.<br> <br>Therefore the check for multiple assemblies in an include file has been extended to look at parts, elements and nodes. This is still bad practice, and the [modelling practice](mechanisms-and-include-transform.md#rec_prct_incl)described above is recommended for all cases where mechanism and dummy assemblies are placed in include files subject to transformations. |
| --- |

|  |
| --- |

[Previous](importing-mechanisms-and-dummies.md)  |  [Next](editing-and-moving-mechanisms-and-dummies-outside-primer.md)