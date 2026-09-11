# States

Functions and constants relating to States

## Functions

* [GetTime](d3plot-states-class.md#States::GetTime)(state\_id (optional)*[integer]*)
* [LockState](d3plot-states-class.md#States::LockState)(state\_id*[integer]*)
* [SetCurrentState](d3plot-states-class.md#States::SetCurrentState)(state\_id*[integer]*)
* [UnlockState](d3plot-states-class.md#States::UnlockState)(state\_id*[integer]*)

| Details of functions 
GetTime(state\_id (optional)*[integer]*) [static]
Description<br>Returns the analysis time of the current state, or that of &lt;state\_id&gt; if defined |
| --- |

#### Arguments

* state\_id (optional) (integer)
 
State number to use

| Returns
<br>real<br>
Return type
<br>Number |
| --- |

| Example
<br><br><br>
```

// Get the time of the current state
var time = GetTime();

// Get the time of the first state
var time = GetTime(1);

```
<br><br> |
| --- |

* * *

| LockState(state\_id*[integer]*) [static]
Description<br><br><br><br>"Locks" any memory already allocated for data storage in &lt;state\_id&gt;, preventing it from being reused by other states looking for memory in which to store data.<br> <br>When dealing with large models it is normally the case that the amount of data to be processed far exceeds the amount of memory installed in the computer, meaning that it is not possible to store all data of interest in memory at the same time. Therefore D3PLOT tries to minimise the amount of data currently stored in memory by reusing the memory allocated previously for other states and/or data components. This process is called "scavenging" and the rules it uses when trying to decide from where to scavenge memory are, in order of descending preference:<br><ol> <li>Data from a different component in a different state</li> <li>Data from this component in a different state</li> <li>Data from an unused component in this state</li> <li>If none of the above are available then allocate some fresh memory from the operating system</li> </ol> <br>In most cases a Javascript will be working with one state at a time, so the problem of reusing memory in this state for purpose A when it is still required for purpose B will not arise. However if, for example, you are writing a script that compares data from this state and the previous one inside a loop it is possible that "churning" could arise from the sequence:<br> <br>.<br> <br>**For each state**<br> <br>**GetData in state N** Scavenges memory from state N-1 to store the data for state N<br> <br>**GetData in state N-1** Scavenges memory from state N to store data for state N-1<br> <br>.<br> <br>In this example the script would probably run incredibly slowly as each [GetData](d3plot-data-class.md#Data::GetData)() call would have to reread data from disk into the newly scavenged memory, so you would end up with &lt;#elements \* 2&gt; disk reads of all the data for this component and element type. The same would be true if [PutUbinData](d3plot-usercomponents-class.md#UserComponents::PutUbinData)() or [GetUbinData](d3plot-usercomponents-class.md#UserComponents::GetUbinData)() were used as both of these require the data to be "put" or "got" to exist in memory, requiring that memory to be obtained from somewhere.<br> <br>By "locking" states **N** and **N-1** in this example you would force D3PLOT to allocate enough memory to hold both data vectors in memory at the same time, and the script would run &lt;#elements \* 2&gt; times faster. For a model with 1,000,000 elements this might reduce the run-time from months to seconds!<br> <br>Clearly states should not be "locked" unnecessarily or, more importantly, left "locked" when there is no longer any need for the data they contain, since this will lead to a significant build-up of memory usage. Therefore states can be unlocked in three ways:<br><ul> <li>Explicitly by using the Javascript function <a href="d3plot-states-class.md#States::UnlockState">UnlockState()</a></li> <li>Implicitly by using the Javascript function <a href="d3plot-states-class.md#States::SetCurrentState">SetCurrentState()</a>, which unlocks all states except the current one</li> <li>Implicitly by exiting the Javascript, as normal (interactive or batch) D3PLOT usage will implicitly unlock all but the current state.</li> </ul> <br>To summarise: this function is likely to be needed only when you are performing repeated "gets" and/or "puts" of data to and from more than one state.<br> <br>Locking and unlocking states takes place in the current model only, and has no effect on states in any other model. |
| --- |

#### Arguments

* state\_id (integer)
 
State number to lock

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Lock data in state #13
LockState(13);

```
<br><br> |
| --- |

* * *

| SetCurrentState(state\_id*[integer]*) [static]
Description<br><br><br><br>Sets the current state for the JavaScript interface to state\_id<br>
<br>This is the state used for all the "get" and "put" functions which handle [model-related data](d3plot-data-class.md).<br>If the optional state\_id argument in a get/put function call is used then that state is used instead<br>for the duration of that call, but this current state is not changed.<br>
<br>***The current state is a property of the current model***, in other words each model<br>has its own, separate, current state. For all models this defaults to state #1 (if present).<br>
<br>Setting the current state in model i has no effect on the current state in any other model. |
| --- |

#### Arguments

* state\_id (integer)
 
State number to make current

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Make state #27 current
SetCurrentState(27);

```
<br><br> |
| --- |

* * *

| UnlockState(state\_id*[integer]*) [static]
Description<br><br><br><br>"Unlocks" this state for the purposes of memory scavenging, making any data vectors within it eligible for<br>reuse by other states looking for memory<br>
<br>Please see the documentation on [LockState()](d3plot-states-class.md#States::LockState) for a<br>description of what this function does and when it might be needed. |
| --- |

#### Arguments

* state\_id (integer)
 
State number to unlock

| Returns
<br>boolean<br>
Return type
<br>Boolean |
| --- |

| Example
<br><br><br>
```

// Unlock data in state #13
UnlockState(13);

```
<br><br> |
| --- |

* * *