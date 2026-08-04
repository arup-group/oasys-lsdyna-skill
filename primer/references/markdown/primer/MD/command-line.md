###  Command Line

The pedestrian markup tool can also be run from the command line:

>  
> *primer.exe* -js= *pedestrian\_impact\_marking\_program.js* -js\_arg= *arguments\_file*  *vehicle.key*
> 

Where:

| *primer.exe* | Is the full pathname of the PRIMER executable to run. |
| --- | --- |
| *pedestrian\_impact\_marking\_program.js* | Is the full pathname of the pedestrian markup script. This can be found in the primer\_library/scripts directory where the PRIMER executable has been installed. |
| *arguments\_file* | Is the full pathname to a file containing arguments for the script. The format is described below. |
| *vehicle.key* | Is the full pathname to the vehicle model to markup. |

The *arguments\_file* is a comma separated file of *variable name* , *variable value* pairs that pass the information required for the script to markup the vehicle and build models.

Below is a list of all the variables that can be passed to the script. Some of them have to be set for the script to do anything, but most of them do not in which case default values are used.

| **Name** | **Description** |
| --- | --- |
| adult\_head\_angle | Orientation angle for adult head impacts |
| adult\_head\_csv\_filename | CSV filename for ADULT Head impacts |
| adult\_head\_impactor | Filename of ADULT Head impactor to use in the model build. This will overwrite the impactor defined in the template file. |
| adult\_head\_template\_filename | Template filename for ADULT Head impacts |
| ble\_angle | Bonnet Leading Edge stick angle |
| ble\_beam\_length | Bonnet Leading Edge beam length |
| ble\_offset\_distance | Bonnet Leading Edge offset distance |
| ble\_offset\_line | Switch for Bonnet Leading Edge offset line (set to true or false) |
| ble\_line | Switch for Bonnet Leading Edge line (set to true or false) |
| bonnet\_parts | List of bonnet parts separated by commas, e.g. bonnet\_parts,100,200,300 |
| bonnet\_surfaces | List of bonnet surface for CAD input separated by commas, e.g. bonnet\_surfaces,100,200,300 |
| bumper\_beam\_length | Bumper lines beam length |
| bumper\_beam\_parts | List of bumper beam parts separated by commas, e.g. bumper\_beam\_parts,100,200,300 |
| bumper\_beam\_surfaces | List of bumper beam surfaces for CAD input separated by commas, e.g. bumper\_beam\_surfaces,100,200,300 |
| bumper\_corner\_point | Switch for Bumper Corner Point (set to true or false) |
| bumper\_head\_angle | Orientation angle for child head impacts on/in front of the bonnet leading edge |
| bumper\_lines | Switch for Bumper lines (set to true or false) |
| bumper\_lower\_line | Switch for Bumper Lower Line (set to true or false) |
| bumper\_upper\_line | Switch for Bumper Upper Line (set to true or false) |
| bumper\_parts | List of bumper parts separated by commas, e.g. bumper\_parts,100,200,300 |
| bumper\_surfaces | List of bumper surfaces for CAD input separated by commas, e.g. bumper\_surfaces,100,200,300 |
| child\_head\_angle | Orientation angle for child head impacts |
| child\_head\_csv\_filename | CSV filename for CHILD Head impacts |
| child\_head\_impactor | Filename of CHILD Head impactor to use in the model build. This will overwrite the impactor defined in the template file. |
| child\_head\_template\_filename | Template filename for CHILD Head impacts |
| corner\_bumper\_angle | Bumper Corner stick angle |
| cowl\_adult\_head\_angle | Orientation angle for COWL ADULT Head impacts |
| cowl\_adult\_head\_csv\_filename | CSV filename for COWL ADULT Head impacts |
| cowl\_child\_head\_angle | Orientation angle for COWL CHILD Head impacts |
| cowl\_child\_head\_csv\_filename | CSV filename for COWL CHILD Head impacts |
| cyclist\_head\_angle | Orientation angle for cyclist head impacts |
| cyclist\_head\_csv\_filename | CSV filename for CYCLIST Head impacts |
| cyclist\_head\_impactor | Filename of CYCLIST Head impactor to use in the model build. This will overwrite the impactor defined in the template file. |
| cyclist\_head\_template\_filename | Template filename for CYCLIST Head impacts |
| default\_green\_parts | List of default green parts separated by commas, e.g. default\_green\_parts,100,200,300 |
| distance\_between\_points | Distance between points |
| exit | Exit from the script if set to true |
| error\_filename | Filename for writing any errors |
| gm\_transform\_filename | Transform filename if using the "gm" head label style |
| gm\_transform\_title | Transform title if using the "gm" head label style |
| ground\_z | Ground z coordinate |
| head\_label\_style | style for head impacts (standard, coordinate, gm, or linelabels) |
| impact\_auto\_method | Automatic method for calculating impact points (N\_Points, NxM\_Points, Define\_Distance or Nothing) |
| impact\_m\_points | Number of 'm' points for automatic method NxM\_Points |
| impact\_m\_spacing | Spacing between 'm' points for automatic method NxM\_Points |
| impact\_n\_points | Number of 'n' points for automatic methods N\_Points and NxM\_Points |
| impact\_n\_spacing | Spacing between 'n' points for automatic methods N\_Points and NxM\_Points |
| impact\_type | Impact type (Head, Upper\_Leg\_Bonnet, Upper\_Leg\_Bumper or Lower\_Leg) |
| lower\_bumper\_angle | Lower Bumper stick angle |
| lower\_leg\_impactor | Filename of Lower Leg impactor to use in the model build. This will overwrite the impactor defined in the template file. |
| lower\_leg\_z | Lower Leg Z coordinate |
| lower\_leg\_csv\_filename | CSV filename for Lower Leg impacts |
| lower\_leg\_template\_filename | Template filename for Lower Leg impacts |
| master\_model | Filename of Vehicle model to use in the model build. This will overwrite the model defined in the template file. |
| outer\_parts | List of outer vehicle parts separated by commas, e.g. outer\_parts,100,200,300 |
| outer\_surfaces | List of outer vehicle surfaces for CAD input separated by commas, e.g. outer\_surfaces,100,200,300 |
| obscuration\_parts | List of windscreen obscuration parts separated by commas, e.g. obscuration\_parts,100,200,300 |
| obscuration\_surfaces | List of windscreen obscuration surfaces separated by commas, e.g. obscuration\_surfaces,100,200,300 |
| protocol | Protocol type (EuroNCAP\_8\_2, EuroNCAP\_9\_0, CNCAP\_2018, CNCAP\_2021, GTR\_2022 or GTR (for GTR pre 2022), GB\_24550\_202X) |
| roof\_head\_angle | Orientation angle for adult/cyclist head impacts on the roof (behind the windscreen rear reference line) |
| rootdir | Directory where models should be built. This will overwrite the directory defined in the template file |
| rrl\_beam\_length | Rear Reference Line beam length |
| rrl\_offset\_distance | Rear Reference Line offset distance |
| rrl\_offset\_line | Switch for Rear Reference offset line (set to true or false) |
| rrl\_line | Switch for Rear Reference Line (set to true or false) |
| srl\_angle | Side Reference Line stick angle |
| srl\_beam\_length | Side Reference Line beam length |
| srl\_offset\_distance | Side Reference Line offset distance |
| srl\_offset\_line | Switch for Side Reference offset line (set to true or false) |
| srl\_line | Switch for Side Reference Line (set to true or false) |
| upper\_bumper\_angle | Upper Bumper stick angle |
| upper\_leg\_angle | Angle for Upper Leg impacts (used if upper\_leg\_calculation is set to manual) |
| upper\_leg\_calculation | Angle, Velocity and Mass calculation method for Upper Leg impacts (auto or manual) |
| upper\_leg\_impactor\_filename | Filename of Upper Leg impactor to use for auto calculation of angle, velocity and mass. |
| upper\_leg\_mass\_value | Mass value for Upper Leg impacts (used if upper\_leg\_calculation is set to manual) |
| upper\_leg\_mass\_parameter | Mass parameter for Upper Leg impacts (used if upper\_leg\_calculation is set to manual) |
| upper\_leg\_csv\_filename | CSV filename for Upper Leg impacts |
| upper\_leg\_impactor | Filename of Upper Leg impactor to use in the model build. This will overwrite the impactor defined in the template file. |
| upper\_leg\_template\_filename | Template filename for Upper Leg impacts |
| upper\_leg\_units | Unit system for Upper Leg auto method calculation (S2 or S3) |
| upper\_leg\_velocity | Velocity value for Upper Leg impacts (used if upper\_leg\_calculation is set to manual) |
| wad\_lines | Switch for WAD Lines (set to true or false) |
| wad1 | 1st WAD value |
| wad2 | 2nd WAD value |
| wad3 | 3rd WAD value |
| wad4 | 4th WAD value |
| wad5 | 5th WAD value |
| wad6 | 6th WAD value |
| wad7 | 7th WAD value |
| windscreen\_parts | List of windscreen parts separated by commas, e.g. windscreen\_parts,100,200,300 |
| windscreen\_surfaces | List of windscreen surfaces for CAD separated by commas, e.g. windscreen\_surfaces,100,200,300 |
| windscreen\_adult\_head\_angle | Orientation angle for WINDSCREEN ADULT Head impacts |
| windscreen\_adult\_head\_csv\_filename | CSV filename for WINDSCREEN ADULT Head impacts |
| windscreen\_child\_head\_angle | Orientation angle for WINDSCREEN CHILD Head impacts |
| windscreen\_child\_head\_csv\_filename | CSV filename for WINDSCREEN CHILD Head impacts |
| windscreen\_zone | Switch for Windscreen Zone (set to true or false) |
| write\_boundary\_lines | Write boundary lines to file |
| write\_boundary\_zone | Write boundary zone (All, Head, Upper\_Leg\_Bonnet, Upper\_Leg\_Bumper or Lower\_Leg) |
| write\_boundary\_type | Write boundary type (All, Lines or Test\_Fields) |
| write\_boundary\_file\_type | Write boundary file type (Keyword, IGES or CSV) |
| write\_boundary\_directory | Write boundary directory |
| wrrl\_angle | Windscreen rear reference line stick angle when calculating the wrrl using the stick method |
| wrrl\_stick\_method | Use the stick method to calculate the windscreen rear reference line |
| wz\_beam\_length | Windscreen zone beam length |
| wz\_front\_offset | Windscreen zone front line offset distance |
| wz\_obsc\_offset | Windscreen zone pseudo obscuration width |
| wz\_rear\_offset | Windscreen zone rear line offset distance |
| wz\_side\_offset | Windscreen zone side line offset distance |
| wz\_use\_windscreen | Windscreen zone 'No obscuration part' option (set to true or false) |

To markup the vehicle the folllowing need to be defined:

* protocol
* outer\_parts
* bumper\_beam\_parts - not required for GTR / UN R127
* bonnet\_parts
* windscreen\_parts

e.g.

protocol,EuroNCAP\_8\_2

outer\_parts,100,200,300,400,500,600

bonnet\_parts,100

windscreen\_parts,200

bumper\_beam\_parts,300

If you want to write out CSV files of the impact points you also need to specify at least one of the following (depending on the impact type selected):

* adult\_head\_csv\_filename
* child\_head\_csv\_filename
* cyclist\_head\_csv\_filename
* lower\_leg\_csv\_filename
* upper\_leg\_csv\_filename

e.g.

impact\_type,Lower\_Leg

lower\_leg\_csv\_filename,C:\lower\_leg.csv

To build models you also need to specify at least one of the following (depending on the impact type selected):

* adult\_head\_template\_filename
* child\_head\_template\_filename
* cyclist\_head\_template\_filename
* lower\_leg\_template\_filename
* upper\_leg\_template\_filename

e.g.

impact\_type,Lower\_Leg

lower\_leg\_template\_filename,C:\lower\_leg\_template.csv

[Previous](output-lines-to-file.md)  |  [Next](introduction-pedestrian-run-builder.md)