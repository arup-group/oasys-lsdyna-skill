###  Reasons to Use Implicit Vs Explicit

Here are some situations for which an implicit or an explicit analysis might be best to use, along with the pros and cons of each:

| Implicit | Explicit |
| --- | --- |
| - Low rate dynamic analyses <br>- Linear and non-linear Static analysis <br>- Modal and vibration analysis <br>- Strength and buckling <br>- Springback <br>- Gravity loading & Pre-loading | - High rate dynamic analyses <br>- Car crash <br>- Impact / Penetration problems <br>- Explosives |

|  | Implicit | Explicit |
| --- | --- | --- |
| Pros | - Unconditionally stable (no timestep limit) <br>- Can be used for static analysis <br>- Relatively inexpensive for long duration analyses | - Computationally fast <br>- Robust even for strongly non-linear models <br>- Low core / RAM intensive |
| --- | --- | --- |
| Cons | - Often requires a large amount of memory <br>- Can have problems with strongly non-linear models | - Conditionally stable (timestep limit) <br>- Expensive to conduct long duration analyses |
| --- | --- | --- |

[Previous](implicit-setup-tool.md)  |  [Next](top-section-options.md)