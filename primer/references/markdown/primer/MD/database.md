###  DATABASE

DATABASE 
Database, vehicle.dba  
$ 
$ following 2 lines are optional 
$ tag to specify root directory for output files 
 Rootdir, /data/DEMO  
$ tag for reporter summary template 
 Reporter\_summary, /data/reporter/summary.opt  
$ 
$ the following loadcases consist of 
$ directory to be created for output, template mask, output filename, optional reporter individual template 
 ODB, odb.tpl, odb\_model.key, reporter\_odb.opt 
SIDE, side.tpl, side\_impact.key, reporter\_side.opt  
Etc

PRIMER will build the models for each load case and write dyna keyword master files to /&lt;rootdir&gt;/ODB/odb\_model.key, /&lt;rootdir&gt;/SIDE/side\_impact.key, etc. Component files will be referenced by \*INCLUDE or \*INCLUDE\_TRANSFORM (see below)

Also in /data/DEMO a job submission file (.lst) will be written, which can be read by the submission shell. The shell will submit each job to a node on the processing cluster, where on the completion of each the individual reporter template will be run. When the last job is finished the summary template will be run.

*Note on automatic positioning using database/template method.*

See also [orienting include files](creating-and-editing-database-entries.md#orientincld)for model database.

As some component files (e.g. barriers) are unlikely to be in exactly the correct position, PRIMER provides an automated method for positioning them on a per build basis.

This positioning is achieved by matching named tracked and reference orient points which are contained within the database and templates. Typically a reference point is kept in a template (associated with a loadcase) but may also reside in the database. A tracked point must reside in the database as it is associated with a component file to be oriented.

Suppose, for example, the template odb.tpl contains a reference orient point named "od\_barrier" with an associated node id (reference origin node) and a part name/id (e.g. "bumper skin") to be used for contact purposes. Similarly in the database, on the entry where the odb barrier is kept, a tracked orient point of the same name exists, which refers to two nodes (origin and O-X nodes) and a part name/id (e.g. "barrier null shells").

On completion of the build PRIMER will associate the matching reference and tracked points. The odb barrier will be translated such that the tracked point origin node is moved to the position of the reference node. A temporary contact will then be created between the reference part(s) and the tracked part(s) and the odb barrier will be translated into position using the tracked vector (defined by the tracked part origin and O-X nodes). If the initial position gives contact penetration the barrier will be translated against the direction of the vector until just out of contact, otherwise it will be moved along the vector until just about to contact.

[Previous](n-automated-model-build-from-command-line.md)  |  [Next](interior-head-impact.md)