# DataComponents

Functions and constants relating to DataComponents

NOTE: LSDA-derived data are only available if both a ZTF file (which provides geometry and topology) and an LSDA file (which provides results) have been read. Also an attempt to extract a data component that does not match the element type, for example spring force for a spotweld, will return 0.0. These components and their names are configured dynamically from the "d3plot.components" file, which will be be in one or more of the $OA\_ADMIN, $OA\_INSTALL or $OA\_HOME directories. If this file is updated further components may become available.

The D3PLOT JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## DataComponents constants

### Constants for ALE Data Components

| **Name** | **Description** |
| --- | --- |
| ADENS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>ALE density. Use [Component.ADENS](d3plot-component-class.md#Component.ADENS) instead [deprecated] |
| ADOMF | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>ALE dominant fraction. Use [Component.ADOMF](d3plot-component-class.md#Component.ADOMF) instead [deprecated] |
| AMMG | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>ALE multi-material group id. Use [Component.AMMG](d3plot-component-class.md#Component.AMMG) instead [deprecated] |
| AMMS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>ALE multi-material group mass. Use [Component.AMMS](d3plot-component-class.md#Component.AMMS) instead [deprecated] |

### Constants for Basic and Integrated Beam Force/Moment Data Components

| **Name** | **Description** |
| --- | --- |
| BFMV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Force and moment vector [BFX, BFY, BFZ, BMXX, BMYY, BMZZ]. Use [Component.BFMV](d3plot-component-class.md#Component.BFMV) instead [deprecated] |
| BFR | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Force magnitude. Use [Component.BFR](d3plot-component-class.md#Component.BFR) instead [deprecated] |
| BFX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X axial force. Use [Component.BFX](d3plot-component-class.md#Component.BFX) instead [deprecated] |
| BFY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y axial force. Use [Component.BFY](d3plot-component-class.md#Component.BFY) instead [deprecated] |
| BFZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z axial force. Use [Component.BFZ](d3plot-component-class.md#Component.BFZ) instead [deprecated] |
| BMXX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XX torsional moment. Use [Component.BMXX](d3plot-component-class.md#Component.BMXX) instead [deprecated] |
| BMYY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>YY bending moment. Use [Component.BMYY](d3plot-component-class.md#Component.BMYY) instead [deprecated] |
| BMZZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>ZZ bending moment. Use [Component.BMZZ](d3plot-component-class.md#Component.BMZZ) instead [deprecated] |
| BRM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Moment magnitude. Use [Component.BRM](d3plot-component-class.md#Component.BRM) instead [deprecated] |

### Constants for Basic and Integrated Beam Strain Data Components

| **Name** | **Description** |
| --- | --- |
| BEAX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Axial strain. Use [Component.BEAX](d3plot-component-class.md#Component.BEAX) instead [deprecated] |
| BEP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Effective plastic strain. Use [Component.BEP](d3plot-component-class.md#Component.BEP) instead [deprecated] |

### Constants for Basic and Integrated Beam Stress Data Components

| **Name** | **Description** |
| --- | --- |
| BSXX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Axial stress. Use [Component.BSXX](d3plot-component-class.md#Component.BSXX) instead [deprecated] |
| BSYX or BSXY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XY shear stress. Use [Component.BSXY](d3plot-component-class.md#Component.BSXY) instead [deprecated] |
| BSZX or BSXZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XZ shear stress. Use [Component.BSZX](d3plot-component-class.md#Component.BSZX) instead [deprecated] |

### Constants for Belytschko-Schwer Resultant Beam Energy Data Components

| **Name** | **Description** |
| --- | --- |
| BAED | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Axial energy density. Use [Component.BAED](d3plot-component-class.md#Component.BAED) instead [deprecated] |
| BAEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Axial energy. Use [Component.BAEN](d3plot-component-class.md#Component.BAEN) instead [deprecated] |
| BBED | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Bending energy density. Use [Component.BBED](d3plot-component-class.md#Component.BBED) instead [deprecated] |
| BIE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Internal energy. Use [Component.BIE](d3plot-component-class.md#Component.BIE) instead [deprecated] |
| BIED | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Internal energy density. Use [Component.BIED](d3plot-component-class.md#Component.BIED) instead [deprecated] |

### Constants for Belytschko-Schwer Resultant Beam Moment Data Components

| **Name** | **Description** |
| --- | --- |
| BMY1 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y moment at end 1. Use [Component.BMY1](d3plot-component-class.md#Component.BMY1) instead [deprecated] |
| BMY2 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y moment at end 2. Use [Component.BMY2](d3plot-component-class.md#Component.BMY2) instead [deprecated] |
| BMZ1 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z moment at end 1. Use [Component.BMZ1](d3plot-component-class.md#Component.BMZ1) instead [deprecated] |
| BMZ2 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z moment at end 2. Use [Component.BMZ2](d3plot-component-class.md#Component.BMZ2) instead [deprecated] |

### Constants for Belytschko-Schwer Resultant Beam Rotation Data Components

| **Name** | **Description** |
| --- | --- |
| BRXX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Torsional rotation. Use [Component.BRXX](d3plot-component-class.md#Component.BRXX) instead [deprecated] |
| BRY1 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y rotation at end 1. Use [Component.BRY1](d3plot-component-class.md#Component.BRY1) instead [deprecated] |
| BRY2 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y rotation at end 2. Use [Component.BRY2](d3plot-component-class.md#Component.BRY2) instead [deprecated] |
| BRZ1 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z rotation at end 1. Use [Component.BRZ1](d3plot-component-class.md#Component.BRZ1) instead [deprecated] |
| BRZ2 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z rotation at end 2. Use [Component.BRZ2](d3plot-component-class.md#Component.BRZ2) instead [deprecated] |

### Constants for Belytschko-Schwer Resultant Beam Strain Data Components

| **Name** | **Description** |
| --- | --- |
| BPE1 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Plastic energy at end 1. Use [Component.BPE1](d3plot-component-class.md#Component.BPE1) instead [deprecated] |
| BPE2 | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Plastic energy at end 2. Use [Component.BPE2](d3plot-component-class.md#Component.BPE2) instead [deprecated] |
| BSAX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Total axial strain. Use [Component.BSAX](d3plot-component-class.md#Component.BSAX) instead [deprecated] |

### Constants for Contact Surface Data Components (if a .ctf file has been read)

| **Name** | **Description** |
| --- | --- |
| CAREA | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact segment area. Use [Component.CAREA](d3plot-component-class.md#Component.CAREA) instead [deprecated] |
| CFGX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact global X force. Use [Component.CFGX](d3plot-component-class.md#Component.CFGX) instead [deprecated] |
| CFGY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact global Y force. Use [Component.CFGY](d3plot-component-class.md#Component.CFGY) instead [deprecated] |
| CFGZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact global Z force. Use [Component.CFGZ](d3plot-component-class.md#Component.CFGZ) instead [deprecated] |
| CFLX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact local X force. Use [Component.CFLX](d3plot-component-class.md#Component.CFLX) instead [deprecated] |
| CFLY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact local Y force. Use [Component.CFLY](d3plot-component-class.md#Component.CFLY) instead [deprecated] |
| CFLZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact local Z force. Use [Component.CFLZ](d3plot-component-class.md#Component.CFLZ) instead [deprecated] |
| CFM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact force magnitude. Use [Component.CFM](d3plot-component-class.md#Component.CFM) instead [deprecated] |
| CSN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact normal stress. Use [Component.CSN](d3plot-component-class.md#Component.CSN) instead [deprecated] |
| CST | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact tangential stress. Use [Component.CST](d3plot-component-class.md#Component.CST) instead [deprecated] |
| CSX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact local X stress. Use [Component.CSX](d3plot-component-class.md#Component.CSX) instead [deprecated] |
| CSY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Contact local Y stress. Use [Component.CSY](d3plot-component-class.md#Component.CSY) instead [deprecated] |

### Constants for Element Plastic Strain Data Components

| **Name** | **Description** |
| --- | --- |
| EPL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Effective plastic strain. Use [Component.EPL](d3plot-component-class.md#Component.EPL) instead [deprecated] |
| ERATE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Strain rate. Use [Component.ERATE](d3plot-component-class.md#Component.ERATE) instead [deprecated] |
| PEMAG | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Plastic strain magnitude. Use [Component.PEMAG](d3plot-component-class.md#Component.PEMAG) instead [deprecated] |

### Constants for Element Plastic Strain Derived Data Components

| **Name** | **Description** |
| --- | --- |
| PEAV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Average plastic strain. Use [Component.PEAV](d3plot-component-class.md#Component.PEAV) instead [deprecated] |
| PEMAX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Max principal plastic strain. Use [Component.PEMAX](d3plot-component-class.md#Component.PEMAX) instead [deprecated] |
| PEMID | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Middle principal plastic strain. Use [Component.PEMID](d3plot-component-class.md#Component.PEMID) instead [deprecated] |
| PEMIN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Min principal plastic strain. Use [Component.PEMIN](d3plot-component-class.md#Component.PEMIN) instead [deprecated] |
| PEMS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Max plastic shear strain. Use [Component.PEMS](d3plot-component-class.md#Component.PEMS) instead [deprecated] |

### Constants for Element Plastic Strain Tensor Data Components

| **Name** | **Description** |
| --- | --- |
| PETEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Plastic strain tensor [EXX, EYY, EZZ, EXY, EYZ, EZX]. Use [Component.PETEN](d3plot-component-class.md#Component.PETEN) instead [deprecated] |
| PEXX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X Plastic strain. Use [Component.PEXX](d3plot-component-class.md#Component.PEXX) instead [deprecated] |
| PEXY or PEYX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XY Plastic shear strain. Use [Component.PEXY](d3plot-component-class.md#Component.PEXY) instead [deprecated] |
| PEYY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y Plastic strain. Use [Component.PEYY](d3plot-component-class.md#Component.PEYY) instead [deprecated] |
| PEYZ or PEZY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XY Plastic shear strain. Use [Component.PEYZ](d3plot-component-class.md#Component.PEYZ) instead [deprecated] |
| PEZX or PEXZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>ZX Plastic shear strain. Use [Component.PEZX](d3plot-component-class.md#Component.PEZX) instead [deprecated] |
| PEZZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z Plastic strain. Use [Component.PEZZ](d3plot-component-class.md#Component.PEZZ) instead [deprecated] |

### Constants for Element Strain Derived Data Components

| **Name** | **Description** |
| --- | --- |
| E2MAX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>2D (in-plane) max principal strain. Use [Component.E2MAX](d3plot-component-class.md#Component.E2MAX) instead [deprecated] |
| E2MIN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>2D (in-plane) min principal strain. Use [Component.E2MIN](d3plot-component-class.md#Component.E2MIN) instead [deprecated] |
| E2SHEAR | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>2D (in-plane) max shear strain. Use [Component.E2SHEAR](d3plot-component-class.md#Component.E2SHEAR) instead [deprecated] |
| EAV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Average strain. Use [Component.EAV](d3plot-component-class.md#Component.EAV) instead [deprecated] |
| EMAX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Max prinicipal strain. Use [Component.EMAX](d3plot-component-class.md#Component.EMAX) instead [deprecated] |
| EMID | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Middle prinicipal strain. Use [Component.EMID](d3plot-component-class.md#Component.EMID) instead [deprecated] |
| EMIN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Min prinicipal strain. Use [Component.EMIN](d3plot-component-class.md#Component.EMIN) instead [deprecated] |
| EMS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Max shear strain. Use [Component.EMS](d3plot-component-class.md#Component.EMS) instead [deprecated] |
| ENGMAJ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Engineering Major strain. Use [Component.ENGMAJ](d3plot-component-class.md#Component.ENGMAJ) instead [deprecated] |
| ENGMIN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Engineering Minor strain. Use [Component.ENGMIN](d3plot-component-class.md#Component.ENGMIN) instead [deprecated] |
| ENGTHK | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Engineering Thickness strain. Use [Component.ENGTHK](d3plot-component-class.md#Component.ENGTHK) instead [deprecated] |
| ERATIO | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>2D (in-plane) principal strain ratio. Use [Component.ERATIO](d3plot-component-class.md#Component.ERATIO) instead [deprecated] |
| EVON | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>von Mises strain. Use [Component.EVON](d3plot-component-class.md#Component.EVON) instead [deprecated] |

### Constants for Element Strain Tensor Data Components

| **Name** | **Description** |
| --- | --- |
| ETEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Strain tensor [EXX, EYY, EZZ, EXY, EYZ, EZX]. Use [Component.ETEN](d3plot-component-class.md#Component.ETEN) instead [deprecated] |
| EXX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X strain. Use [Component.EXX](d3plot-component-class.md#Component.EXX) instead [deprecated] |
| EXY or EYX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XY shear strain. Use [Component.EXY](d3plot-component-class.md#Component.EXY) instead [deprecated] |
| EYY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y strain. Use [Component.EYY](d3plot-component-class.md#Component.EYY) instead [deprecated] |
| EYZ or EZY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>YZ shear strain. Use [Component.EYZ](d3plot-component-class.md#Component.EYZ) instead [deprecated] |
| EZX or EXZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>ZX shear strain. Use [Component.EZX](d3plot-component-class.md#Component.EZX) instead [deprecated] |
| EZZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z strain. Use [Component.EZZ](d3plot-component-class.md#Component.EZZ) instead [deprecated] |

### Constants for Element Stress Derived Data Components

| **Name** | **Description** |
| --- | --- |
| LODE\_A | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Lode angle. Use [Component.LODE_A](d3plot-component-class.md#Component.LODE_A) instead [deprecated] |
| LODE\_P | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Lode parameter. Use [Component.LODE_P](d3plot-component-class.md#Component.LODE_P) instead [deprecated] |
| LODE\_PA | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Lode parameter alt. Use [Component.LODE_PA](d3plot-component-class.md#Component.LODE_PA) instead [deprecated] |
| S2MAX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>2D (in-plane) max principal stress. Use [Component.S2MAX](d3plot-component-class.md#Component.S2MAX) instead [deprecated] |
| S2MIN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>2D (in-plane) min principal stress. Use [Component.S2MIN](d3plot-component-class.md#Component.S2MIN) instead [deprecated] |
| S2SHEAR | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>2D (in-plane) max shear stress. Use [Component.S2SHEAR](d3plot-component-class.md#Component.S2SHEAR) instead [deprecated] |
| SAV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Average stress (pressure). Use [Component.SAV](d3plot-component-class.md#Component.SAV) instead [deprecated] |
| SMAX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Max principal stress. Use [Component.SMAX](d3plot-component-class.md#Component.SMAX) instead [deprecated] |
| SMID | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Middle principal stress. Use [Component.SMID](d3plot-component-class.md#Component.SMID) instead [deprecated] |
| SMIN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Min principal stress. Use [Component.SMIN](d3plot-component-class.md#Component.SMIN) instead [deprecated] |
| SMS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Max shear stress. Use [Component.SMS](d3plot-component-class.md#Component.SMS) instead [deprecated] |
| SVON | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>von Mises stress. Use [Component.SVON](d3plot-component-class.md#Component.SVON) instead [deprecated] |
| TRI | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Triaxiality. Use [Component.TRI](d3plot-component-class.md#Component.TRI) instead [deprecated] |
| YUTF | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Yield Utilisation Factor. Use [Component.YUTF](d3plot-component-class.md#Component.YUTF) instead [deprecated] |
| YUTP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Yield Utilisation Percentage. Use [Component.YUTP](d3plot-component-class.md#Component.YUTP) instead [deprecated] |

### Constants for Element Stress Tensor Data Components

| **Name** | **Description** |
| --- | --- |
| STEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Stress tensor [SXX, SYY, SZZ, SXY, SYZ, SZX]. Use [Component.STEN](d3plot-component-class.md#Component.STEN) instead [deprecated] |
| SXX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X stress. Use [Component.SXX](d3plot-component-class.md#Component.SXX) instead [deprecated] |
| SXY or SYX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XY stress. Use [Component.SXY](d3plot-component-class.md#Component.SXY) instead [deprecated] |
| SYY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y stress. Use [Component.SYY](d3plot-component-class.md#Component.SYY) instead [deprecated] |
| SYZ or SZY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>YZ stress. Use [Component.SYZ](d3plot-component-class.md#Component.SYZ) instead [deprecated] |
| SZX or SXZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>ZX stress. Use [Component.SZX](d3plot-component-class.md#Component.SZX) instead [deprecated] |
| SZZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z stress. Use [Component.SZZ](d3plot-component-class.md#Component.SZZ) instead [deprecated] |

### Constants for Element Thermal Strain Derived Data Components

| **Name** | **Description** |
| --- | --- |
| TEAV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Average thermal strain. Use [Component.TEAV](d3plot-component-class.md#Component.TEAV) instead [deprecated] |
| TEMAX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Max principal thermal strain. Use [Component.TEMAX](d3plot-component-class.md#Component.TEMAX) instead [deprecated] |
| TEMID | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Middle principal thermal strain. Use [Component.TEMID](d3plot-component-class.md#Component.TEMID) instead [deprecated] |
| TEMIN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Min principal thermal strain. Use [Component.TEMIN](d3plot-component-class.md#Component.TEMIN) instead [deprecated] |
| TEMS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Max thermal shear strain. Use [Component.TEMS](d3plot-component-class.md#Component.TEMS) instead [deprecated] |

### Constants for Element Thermal Strain Tensor Data Components

| **Name** | **Description** |
| --- | --- |
| TETEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Thermal strain tensor [EXX, EYY, EZZ, EXY, EYZ, EZX]. Use [Component.TETEN](d3plot-component-class.md#Component.TETEN) instead [deprecated] |
| TEXX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X Thermal strain. Use [Component.TEXX](d3plot-component-class.md#Component.TEXX) instead [deprecated] |
| TEXY or PEYX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XY Thermal shear strain. Use [Component.TEXY](d3plot-component-class.md#Component.TEXY) instead [deprecated] |
| TEYY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y Thermal strain. Use [Component.TEYY](d3plot-component-class.md#Component.TEYY) instead [deprecated] |
| TEYZ or TEZY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XY Thermal shear strain. Use [Component.TEYZ](d3plot-component-class.md#Component.TEYZ) instead [deprecated] |
| TEZX or TEXZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>ZX Thermal shear strain. Use [Component.TEZX](d3plot-component-class.md#Component.TEZX) instead [deprecated] |
| TEZZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z Thermal strain. Use [Component.TEZZ](d3plot-component-class.md#Component.TEZZ) instead [deprecated] |

### Constants for Extra Solid and Shell Data Components

| **Name** | **Description** |
| --- | --- |
| SHX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Extra shell and thick shell data. Use [Component.SHX](d3plot-component-class.md#Component.SHX) instead [deprecated] |
| SOX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Extra solid data. Use [Component.SOX](d3plot-component-class.md#Component.SOX) instead [deprecated] |

### Constants for Global Energy Data Components

| **Name** | **Description** |
| --- | --- |
| GIE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Internal energy. Use [Component.GIE](d3plot-component-class.md#Component.GIE) instead [deprecated] |
| GKE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Kinetic energy. Use [Component.GKE](d3plot-component-class.md#Component.GKE) instead [deprecated] |
| GTE | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Total energy. Use [Component.GTE](d3plot-component-class.md#Component.GTE) instead [deprecated] |

### Constants for Global Mass Data Components

| **Name** | **Description** |
| --- | --- |
| GMASS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Mass. Use [Component.GMASS](d3plot-component-class.md#Component.GMASS) instead [deprecated] |

### Constants for Global Momentum Data Components

| **Name** | **Description** |
| --- | --- |
| GMM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Momentum magnitude. Use [Component.GMM](d3plot-component-class.md#Component.GMM) instead [deprecated] |
| GMX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X Momentum. Use [Component.GMX](d3plot-component-class.md#Component.GMX) instead [deprecated] |
| GMY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y Momentum. Use [Component.GMY](d3plot-component-class.md#Component.GMY) instead [deprecated] |
| GMZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z Momentum. Use [Component.GMZ](d3plot-component-class.md#Component.GMZ) instead [deprecated] |

### Constants for Global Velocity Data Components

| **Name** | **Description** |
| --- | --- |
| GVM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Velocity magnitude. Use [Component.GVM](d3plot-component-class.md#Component.GVM) instead [deprecated] |
| GVX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X Velocity. Use [Component.GVX](d3plot-component-class.md#Component.GVX) instead [deprecated] |
| GVY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y Velocity. Use [Component.GVY](d3plot-component-class.md#Component.GVY) instead [deprecated] |
| GVZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z Velocity. Use [Component.GVZ](d3plot-component-class.md#Component.GVZ) instead [deprecated] |

### Constants for LSDA (binout) Database Cross Section Data Components

| **Name** | **Description** |
| --- | --- |
| XSEC\_A | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Database X-sect area. Use [Component.XSEC_A](d3plot-component-class.md#Component.XSEC_A) instead [deprecated] |
| XSEC\_F | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Database X-sect force (vector data). Use [Component.XSEC_F](d3plot-component-class.md#Component.XSEC_F) instead [deprecated] |
| XSEC\_M | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Database X-sect moment (vector data). Use [Component.XSEC_M](d3plot-component-class.md#Component.XSEC_M) instead [deprecated] |

### Constants for LSDA (binout) Retractor Data Components

| **Name** | **Description** |
| --- | --- |
| RT\_F | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Retractor force. Use [Component.RT_F](d3plot-component-class.md#Component.RT_F) instead [deprecated] |
| RT\_P | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Retractor pull-out. Use [Component.RT_P](d3plot-component-class.md#Component.RT_P) instead [deprecated] |

### Constants for LSDA (binout) SPC Data Components

| **Name** | **Description** |
| --- | --- |
| SPC\_F | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>SPC force (vector data at nodes). Use [Component.SPC_F](d3plot-component-class.md#Component.SPC_F) instead [deprecated] |
| SPC\_M | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>SPC moment (vector data at nodes). Use [Component.SPC_M](d3plot-component-class.md#Component.SPC_M) instead [deprecated] |

### Constants for LSDA (binout) Seatbelt Data Components

| **Name** | **Description** |
| --- | --- |
| SB\_F | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Seatbelt axial force. Use [Component.SB_F](d3plot-component-class.md#Component.SB_F) instead [deprecated] |
| SB\_L | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Seatbelt length. Use [Component.SB_L](d3plot-component-class.md#Component.SB_L) instead [deprecated] |

### Constants for LSDA (binout) Slipring Data Components

| **Name** | **Description** |
| --- | --- |
| SR\_P | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Slipring pull-through. Use [Component.SR_P](d3plot-component-class.md#Component.SR_P) instead [deprecated] |

### Constants for LSDA (binout) Spotweld Data Components

| **Name** | **Description** |
| --- | --- |
| SW\_F | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Spotweld axial force. Use [Component.SW_F](d3plot-component-class.md#Component.SW_F) instead [deprecated] |
| SW\_FAIL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Spotweld failure. Use [Component.SW_FAIL](d3plot-component-class.md#Component.SW_FAIL) instead [deprecated] |
| SW\_S | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Spotweld shear force. Use [Component.SW_S](d3plot-component-class.md#Component.SW_S) instead [deprecated] |
| SW\_TIME | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Spotweld failure time. Use [Component.SW_TIME](d3plot-component-class.md#Component.SW_TIME) instead [deprecated] |
| SW\_TRSN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Spotweld torsion moment. Use [Component.SW_TRSN](d3plot-component-class.md#Component.SW_TRSN) instead [deprecated] |

### Constants for LSDA (binout) Spring Data Components

| **Name** | **Description** |
| --- | --- |
| SP\_E | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Spring elongation. Use [Component.SP_E](d3plot-component-class.md#Component.SP_E) instead [deprecated] |
| SP\_F | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Spring axial force. Use [Component.SP_F](d3plot-component-class.md#Component.SP_F) instead [deprecated] |
| SP\_M | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Spring torsional moment. Use [Component.SP_M](d3plot-component-class.md#Component.SP_M) instead [deprecated] |
| SP\_R | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Spring rotation. Use [Component.SP_R](d3plot-component-class.md#Component.SP_R) instead [deprecated] |

### Constants for Material Data Components for PARTs and Part-based elems (needs .ZTF file)

| **Name** | **Description** |
| --- | --- |
| DENS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Material density. Use [Component.DENS](d3plot-component-class.md#Component.DENS) instead [deprecated] |
| FSTRN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Failure strain. Use [Component.FSTRN](d3plot-component-class.md#Component.FSTRN) instead [deprecated] |
| PRAT | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Poisson's ratio. Use [Component.PRAT](d3plot-component-class.md#Component.PRAT) instead [deprecated] |
| YMOD | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Young's modulus. Use [Component.YMOD](d3plot-component-class.md#Component.YMOD) instead [deprecated] |
| YSTRS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Yield stress. Use [Component.YSTRS](d3plot-component-class.md#Component.YSTRS) instead [deprecated] |

### Constants for Nastran OP2 Beam Data Components

| **Name** | **Description** |
| --- | --- |
| BENL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Energy loss. Use [Component.BENL](d3plot-component-class.md#Component.BENL) instead [deprecated] |
| BENLD | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Energy loss density. Use [Component.BENLD](d3plot-component-class.md#Component.BENLD) instead [deprecated] |
| BENLP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Energy loss percentage. Use [Component.BENLP](d3plot-component-class.md#Component.BENLP) instead [deprecated] |
| BKEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Kinetic energy. Use [Component.BKEN](d3plot-component-class.md#Component.BKEN) instead [deprecated] |
| BKEND | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Kinetic energy density. Use [Component.BKEND](d3plot-component-class.md#Component.BKEND) instead [deprecated] |
| BKENP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Kinetic energy percentage. Use [Component.BKENP](d3plot-component-class.md#Component.BKENP) instead [deprecated] |
| BSEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Strain energy. Use [Component.BSEN](d3plot-component-class.md#Component.BSEN) instead [deprecated] |
| BSEND | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Strain energy density. Use [Component.BSEND](d3plot-component-class.md#Component.BSEND) instead [deprecated] |
| BSENP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Strain energy percentage. Use [Component.BSENP](d3plot-component-class.md#Component.BSENP) instead [deprecated] |

### Constants for Nodal Data Components

| **Name** | **Description** |
| --- | --- |
| AM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Acceleration magnitude. Use [Component.AM](d3plot-component-class.md#Component.AM) instead [deprecated] |
| AV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Acceleration vector [AX, AY, AZ]. Use [Component.AV](d3plot-component-class.md#Component.AV) instead [deprecated] |
| AX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X acceleration. Use [Component.AX](d3plot-component-class.md#Component.AX) instead [deprecated] |
| AY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y acceleration. Use [Component.AY](d3plot-component-class.md#Component.AY) instead [deprecated] |
| AZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z acceleration. Use [Component.AZ](d3plot-component-class.md#Component.AZ) instead [deprecated] |
| BV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Basic (undeformed) vector [BX, BY, BZ]. Use [Component.BV](d3plot-component-class.md#Component.BV) instead [deprecated] |
| BX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Basic (undeformed) X coordinate. Use [Component.BX](d3plot-component-class.md#Component.BX) instead [deprecated] |
| BY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Basic (undeformed) Y coordinate. Use [Component.BY](d3plot-component-class.md#Component.BY) instead [deprecated] |
| BZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Basic (undeformed) Z coordinate. Use [Component.BZ](d3plot-component-class.md#Component.BZ) instead [deprecated] |
| CV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Current vector [CX, CY, CZ]. Use [Component.CV](d3plot-component-class.md#Component.CV) instead [deprecated] |
| CX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Current X coordinate. Use [Component.CX](d3plot-component-class.md#Component.CX) instead [deprecated] |
| CY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Current Y coordinate. Use [Component.CY](d3plot-component-class.md#Component.CY) instead [deprecated] |
| CZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Current Z coordinate. Use [Component.CZ](d3plot-component-class.md#Component.CZ) instead [deprecated] |
| DM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Displacement magnitude. Use [Component.DM](d3plot-component-class.md#Component.DM) instead [deprecated] |
| DV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Displacement vector [DX, DY, DZ]. Use [Component.DV](d3plot-component-class.md#Component.DV) instead [deprecated] |
| DX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X displacement. Use [Component.DX](d3plot-component-class.md#Component.DX) instead [deprecated] |
| DY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y displacement. Use [Component.DY](d3plot-component-class.md#Component.DY) instead [deprecated] |
| DZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z displacement. Use [Component.DZ](d3plot-component-class.md#Component.DZ) instead [deprecated] |
| RAM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Rotation acceleration magnitude. Use [Component.RAM](d3plot-component-class.md#Component.RAM) instead [deprecated] |
| RAV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Rotation acceleration vector [RAX, RAY, RAZ]. Use [Component.RAV](d3plot-component-class.md#Component.RAV) instead [deprecated] |
| RAX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X rotation acceleration. Use [Component.RAX](d3plot-component-class.md#Component.RAX) instead [deprecated] |
| RAY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y rotation acceleration. Use [Component.RAY](d3plot-component-class.md#Component.RAY) instead [deprecated] |
| RAZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z rotation acceleration. Use [Component.RAZ](d3plot-component-class.md#Component.RAZ) instead [deprecated] |
| RDM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Rotation displacement magnitude. Use [Component.RDM](d3plot-component-class.md#Component.RDM) instead [deprecated] |
| RDV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Rotation displacement vector [RDX, RDY, RDZ]. Use [Component.RDV](d3plot-component-class.md#Component.RDV) instead [deprecated] |
| RDX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X rotation displacement. Use [Component.RDX](d3plot-component-class.md#Component.RDX) instead [deprecated] |
| RDY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y rotation displacement. Use [Component.RDY](d3plot-component-class.md#Component.RDY) instead [deprecated] |
| RDZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z rotation displacement. Use [Component.RDZ](d3plot-component-class.md#Component.RDZ) instead [deprecated] |
| RVM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Rotation velocity magnitude. Use [Component.RVM](d3plot-component-class.md#Component.RVM) instead [deprecated] |
| RVV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Rotation velocity vector [RVX, RVY, RVZ]. Use [Component.RVV](d3plot-component-class.md#Component.RVV) instead [deprecated] |
| RVX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X rotation velocity. Use [Component.RVX](d3plot-component-class.md#Component.RVX) instead [deprecated] |
| RVY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y rotation velocity. Use [Component.RVY](d3plot-component-class.md#Component.RVY) instead [deprecated] |
| RVZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z rotation velocity. Use [Component.RVZ](d3plot-component-class.md#Component.RVZ) instead [deprecated] |
| VM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Velocity magnitude. Use [Component.VM](d3plot-component-class.md#Component.VM) instead [deprecated] |
| VV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Velocity vector [VX, VY, VZ]. Use [Component.VV](d3plot-component-class.md#Component.VV) instead [deprecated] |
| VX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X velocity. Use [Component.VX](d3plot-component-class.md#Component.VX) instead [deprecated] |
| VY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y velocity. Use [Component.VY](d3plot-component-class.md#Component.VY) instead [deprecated] |
| VZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z velocity. Use [Component.VZ](d3plot-component-class.md#Component.VZ) instead [deprecated] |

### Constants for Shell and Solid Data Components

| **Name** | **Description** |
| --- | --- |
| AREA | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Area. Use [Component.AREA](d3plot-component-class.md#Component.AREA) instead [deprecated] |
| DTDT | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>dTemp / dTime. Use [Component.DTDT](d3plot-component-class.md#Component.DTDT) instead [deprecated] |
| EDEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Internal energy density. Use [Component.EDEN](d3plot-component-class.md#Component.EDEN) instead [deprecated] |
| ENL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Energy loss (Nastran OP2 results only). Use [Component.ENL](d3plot-component-class.md#Component.ENL) instead [deprecated] |
| ENLD | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Energy loss density (Nastran OP2 results only). Use [Component.ENLD](d3plot-component-class.md#Component.ENLD) instead [deprecated] |
| ENLP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Energy loss percentage (Nastran OP2 results only). Use [Component.ENLP](d3plot-component-class.md#Component.ENLP) instead [deprecated] |
| HGEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Hourglass energy. Use [Component.HGEN](d3plot-component-class.md#Component.HGEN) instead [deprecated] |
| JS\_C\_MASS | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Mass. Use [Component.EMASS](d3plot-component-class.md#Component.EMASS) instead [deprecated] |
| KEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Kinetic energy (Nastran OP2 results only). Use [Component.KEN](d3plot-component-class.md#Component.KEN) instead [deprecated] |
| KEND | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Kinetic energy density (Nastran OP2 results only). Use [Component.KEND](d3plot-component-class.md#Component.KEND) instead [deprecated] |
| KENP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Kinetic energy percentage (Nastran OP2 results only). Use [Component.KENP](d3plot-component-class.md#Component.KENP) instead [deprecated] |
| MADD | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Added mass. Use [Component.MADD](d3plot-component-class.md#Component.MADD) instead [deprecated] |
| RFX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X force resultant. Use [Component.RFX](d3plot-component-class.md#Component.RFX) instead [deprecated] |
| RFXY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XY force resultant. Use [Component.RFXY](d3plot-component-class.md#Component.RFXY) instead [deprecated] |
| RFY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y force resultant. Use [Component.RFY](d3plot-component-class.md#Component.RFY) instead [deprecated] |
| RMX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>MX moment resultant. Use [Component.RMX](d3plot-component-class.md#Component.RMX) instead [deprecated] |
| RMXY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>MXY moment resultant. Use [Component.RMXY](d3plot-component-class.md#Component.RMXY) instead [deprecated] |
| RMY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>MY moment resultant. Use [Component.RMY](d3plot-component-class.md#Component.RMY) instead [deprecated] |
| RQX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>XZ shear force resultant. Use [Component.RQX](d3plot-component-class.md#Component.RQX) instead [deprecated] |
| RQY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>YZ shear force resultant. Use [Component.RQY](d3plot-component-class.md#Component.RQY) instead [deprecated] |
| RVOL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Relative volume (solid). Use [Component.RVOL](d3plot-component-class.md#Component.RVOL) instead [deprecated] |
| SEN | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Strain energy (Nastran OP2 results only). Use [Component.SEN](d3plot-component-class.md#Component.SEN) instead [deprecated] |
| SEND | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Strain energy density (Nastran OP2 results only). Use [Component.SEND](d3plot-component-class.md#Component.SEND) instead [deprecated] |
| SENP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Strain energy percentage (Nastran OP2 results only). Use [Component.SENP](d3plot-component-class.md#Component.SENP) instead [deprecated] |
| TBOT | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Nodal (shell) bottom surface temperature. Use [Component.TBOT](d3plot-component-class.md#Component.TBOT) instead [deprecated] |
| TEMP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Nodal temperature. Use [Component.TEMP](d3plot-component-class.md#Component.TEMP) instead [deprecated] |
| TFM | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Temperature magnitude. Use [Component.TFM](d3plot-component-class.md#Component.TFM) instead [deprecated] |
| TFV | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Temperature vector [TFX, TFY, TFZ]. Use [Component.TFV](d3plot-component-class.md#Component.TFV) instead [deprecated] |
| TFX | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>X temperature flux. Use [Component.TFX](d3plot-component-class.md#Component.TFX) instead [deprecated] |
| TFY | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Y temperature flux. Use [Component.TFY](d3plot-component-class.md#Component.TFY) instead [deprecated] |
| TFZ | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Z temperature flux. Use [Component.TFZ](d3plot-component-class.md#Component.TFZ) instead [deprecated] |
| THK | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Thickness. Use [Component.THK](d3plot-component-class.md#Component.THK) instead [deprecated] |
| TMID | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Nodal (shell) middle surface temperature. Use [Component.TMID](d3plot-component-class.md#Component.TMID) instead [deprecated] |
| TSTP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Timestep. Use [Component.TSTP](d3plot-component-class.md#Component.TSTP) instead [deprecated] |
| TTOP | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Nodal (shell) top surface temperature. Use [Component.TTOP](d3plot-component-class.md#Component.TTOP) instead [deprecated] |
| VOL | This constant is deprecated in version 21.0. It is only provided to keep old scripts working. We strongly advise against using it in new scripts. Support may be removed in future versions.<br>Volume (solid). Use [Component.VOL](d3plot-component-class.md#Component.VOL) instead [deprecated] |