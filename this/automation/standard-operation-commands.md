###  Standard operation commands

| Description | keyword | operation command | following word #1 | following word #2 | additional words | notes |
| --- | --- | --- | --- | --- | --- | --- |
| Absolute value | oper | abs | curve #1 | - | - |  |
| Add Y | oper | add | curve #1 | curve #2 or constant | - |  |
| Add X | oper | adx | curve #1 | curve #2 or constant | - |  |
| Clip curve | oper | cli | curve #1 | x min value / "auto" | x max value / "auto" | Input requires all 4 values, "auto" sets the value automatically |
| y min value / "auto" |
| y max value / "auto" |
| Combine | oper | com | curve #1 | curve #2 | - |  |
| Concatenate | oper | cat | curve #1 | curve #2 | - |  |
| Derivative | oper | dif | curve #1 | - | - |  |
| db | oper | db | curve #1 | reference value |  | Convert a curve to dB |
| db(A) | oper | dba | curve #1 | narrow |  | Apply narrow band A weighting |
| octave |  | Apply octave band A weighting |
| Div Y | oper | div | curve #1 | curve #2 or constant | - |  |
| Div X | oper | dix | curve #1 | curve #2 or constant | - |  |
| Error calculation | oper | err | curve #1 | curve #2 | - | Value is stored with the output curve |
| Integral | oper | int | curve #1 | - | - |  |
| Least squares | oper | lsq | curve #1 | - | - |  |
| Map | oper | map | curve #1 | curve #2 | - |  |
| Mul Y | oper | mul | curve #1 | curve #2 or constant | - |  |
| Mul X | oper | mux | curve #1 | curve #2 or constant | - |  |
| Normalise | oper | nor | curve #1 | - | - |  |
| Octave | oper | oct | curve #1 | octave | rms | linear | Convert a curve from "narrow" band to either Octave or 1/3rd Octave bands. <br> <br>Value for each band can be calculated using either mean or RMS values, and the input can either be linear or in dB. |
| db |
| mean | linear |
| db |
| third | rms | linear |
| db |
| mean | linear |
| db |
| Order | oper | ord | curve #1 | - | - |  |
| Reciprocal | oper | rec | curve #1 | - | - |  |
| Reverse | oper | rev | curve #1 | - | - |  |
| Rolling average | oper | r-av | curve #1 | averaging window | - | If the averaging window is undefined or set to 0.0 then the y-values at each point are calculated by averaging all of the proceeding curve points.<br> <br>If the averaging window is set to T then the y-values at each point are calculated by averaging between -T/2 and +T/2. |
| Smooth | oper | smo | curve #1 | smoothing factor | - | Factor must be an integer |
| Stress | oper | str | curve #1 | "true" or "engineering" | - |  |
| Sub Y | oper | sub | curve #1 | curve #2 or constant | - |  |
| Sub X | oper | sux | curve #1 | curve #2 or constant | - |  |
| Translate | oper | tra | curve #1 | X value | Y value |  |
| Vector 2D | oper | v2d | curve #1 | curve #2 | - |  |
| Vector mag | oper | vec | curve #1 | curve #2 | curve #3 |  |
| Window | oper | win | curve #1 | "han", "cos", "exp" | lead in (only for "cos" option) | Writes out 2 curves |
| Zero curve (X and Y) | oper | zer | curve #1 | - | - | Shifts curve to 0,0 (X and Y values) |
| Zero curve (X only) | oper | zero\_x | curve #1 | - | - | Shift curve to 0,Y (X only) |
| Zero curve (Y only) | oper | zero\_y | curve #1 | - | - | Shift curve to X,0 (Y only) |

Previous: performing-fast-tcf-curve-operations  |  Next: maths-operation-commands