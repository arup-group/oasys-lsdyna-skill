# Ssh class

The Ssh class allows you to connect to a remote computer using ssh, scp and sftp commands. [More...](primer-ssh-class.md#Ssh_details)

The PRIMER JavaScript API provides many class constants, properties and methods. For Arup to
be able to extend and enhance the API in the future any constant, property or method names beginning with a lowercase
or uppercase letter are reserved.

If you need to add your own properties or methods to one of the existing classes then to avoid any potential future conflict you
should ensure that the name begins with either an underscore (\_) or a dollar sign ($) or the name is prefixed with your
own unique identifier.

For example if company 'ABC' need to add a property called 'example' then to avoid any potential future conflict use one of:

* \_example
* $example
* ABC\_example

## Member functions

* [AuthenticateWithPassword](primer-ssh-class.md#Ssh::AuthenticateWithPassword)(password*[string]*)
* [AuthenticateWithPublicKey](primer-ssh-class.md#Ssh::AuthenticateWithPublicKey)(passphrase (optional)*[string]*)
* [Execute](primer-ssh-class.md#Ssh::Execute)(data*[object]*)
* [Get](primer-ssh-class.md#Ssh::Get)(remote*[string]*, local*[string]*)
* [Put](primer-ssh-class.md#Ssh::Put)(remote*[string]*, local*[string]*)
* [SftpGet](primer-ssh-class.md#Ssh::SftpGet)(remote*[string]*, local*[string]*)
* [SftpList](primer-ssh-class.md#Ssh::SftpList)(remote*[string]*)
* [SftpMkdir](primer-ssh-class.md#Ssh::SftpMkdir)(remote*[string]*, mode*[constant]*)
* [SftpPut](primer-ssh-class.md#Ssh::SftpPut)(remote*[string]*, local*[string]*)
* [SftpRmdir](primer-ssh-class.md#Ssh::SftpRmdir)(remote*[string]*)

## Ssh constants

### Constants for file bits

| **Name** | **Description** |
| --- | --- |
| Ssh.SETGROUP\_BIT | Set group bit |
| Ssh.SETUID\_BIT | Set uid bit |
| Ssh.STICKY\_BIT | sticky bit |

### Constants for file types

| **Name** | **Description** |
| --- | --- |
| Ssh.DIRECTORY | Directory |
| Ssh.FILE | Regular file |
| Ssh.SOCKET | Socket |
| Ssh.SYMBOLIC\_LINK | Symbolic link |

### Constants for permissions

| **Name** | **Description** |
| --- | --- |
| Ssh.GROUP\_EXECUTE | Group has execute permission |
| Ssh.GROUP\_READ | Group has read permission |
| Ssh.GROUP\_WRITE | Group has write permission |
| Ssh.OTHER\_EXECUTE | Others have execute permission |
| Ssh.OTHER\_READ | Others have read permission |
| Ssh.OTHER\_WRITE | Others have write permission |
| Ssh.OWNER\_EXECUTE | Owner has execute permission |
| Ssh.OWNER\_READ | Owner has read permission |
| Ssh.OWNER\_WRITE | Owner has write permission |

| Detailed Description<br>The Ssh class gives you simple functions to do secure connections to a remote computer using ssh. Oasys LS-DYNA Environment software is built with the OpenSSH library to support the ssh, scp and sftp protocols. The basic workflow is to create a connection using the [Ssh constructor](primer-ssh-class.md#Ssh::constructor), authenticate the connection either by using a password and [AuthenticateWithPassword](primer-ssh-class.md#Ssh::AuthenticateWithPassword) or with a public key and [AuthenticateWithPublicKey](primer-ssh-class.md#Ssh::AuthenticateWithPublicKey) then the method [Execute](primer-ssh-class.md#Ssh::Execute) can be used to execute commands on the remote machine, the methods [Get](primer-ssh-class.md#Ssh::Get) and [Put](primer-ssh-class.md#Ssh::Put) can be used to copy files to and from the remote machine using scp, and the commands [SftpGet](primer-ssh-class.md#Ssh::SftpGet), [SftpList](primer-ssh-class.md#Ssh::SftpList), [SftpMkdir](primer-ssh-class.md#Ssh::SftpMkdir), [SftpPut](primer-ssh-class.md#Ssh::SftpPut) and [SftpRmdir](primer-ssh-class.md#Ssh::SftpRmdir) can be used to perform secure file transfer commands.<br><br>ssh uses a public and private key pair to do communication. The software uses RSA for the private and public keys and stores them in the files id\_rsa and id\_rsa.pub in the .oasys\_ssh directory of your home<br>directory (C:\Users\your.name\.oasys\_ssh on Windows by default). A key length of 2048 bits is recommended.<br>You keep your private key secure in your .oasys\_ssh directory but the public key can be copied to the authorized\_keys file on remote machines<br>so that authentication can be done etc.<br>The software also maintains fingerprints for the machines you connect to to ensure that you are connecting to the machine that you<br>think you are. The first time you connect to a machine you are asked to confirm the remote machine is correct and the software stores the fingerprint<br>for it in the known\_hosts file in your .oasys\_ssh directory. For second and subsequent connections the software checks the fingerprint of the remote machine<br>against the one it has stored and will only connect if it matches.<br><br>When creating a new ssh connection to a remote machine and transferring files a small 'buffer' is required to transfer the data. The size of this buffer can be controlled using the [Options.ssh_buffer_size](primer-options-class.md#ssh_buffer_size) property **before** the Ssh object is created.<br> |
| --- |

| Constructor
new Ssh(hostname*[string]*, username*[string]*)

Description<br>Create a new [Ssh](primer-ssh-class.md) object for secure communication to a remote computer. |
| --- |

#### Arguments

* hostname (string)
 
The hostname of the machine that you want to connect to

* username (string)
 
The username on the machine that you want to connect to

| Returns
<br>[Ssh](primer-ssh-class.md) object<br>
Return type
<br>Ssh |
| --- |

| Example
<br>To create a connection to machine "example" as user "username"<br>
```
var s = new Ssh("example", "username");
```
 |
| --- |

| Details of functions 
AuthenticateWithPassword(password*[string]*)

Description<br>Authenticate the connection using password. |
| --- |

#### Arguments

* password (string)
 
The password for the username on the remote machine

| Returns
<br>no return value |
| --- |

| Example
<br>To prompt the user for a password and authenticate using it in SSH connection s:<br>
```
var password = Window.GetPassword("Enter Password to connect", "Password");
s.AuthenticateWithPassword(password);
```
 |
| --- |

* * *

| AuthenticateWithPublicKey(passphrase (optional)*[string]*)

Description<br>Authenticate the connection using your public key. Your public key from the file .oasys\_ssh/id\_rsa.pub must be<br>in the file .oasys\_ssh/authorized\_keys on the remote machine. |
| --- |

#### Arguments

* passphrase (optional) (string)
 
The passphrase for authentication on the remote machine if required

| Returns
<br>no return value |
| --- |

| Example
<br>Authenticate using your public key in SSH connection s:<br>
```
s.AuthenticateWithPublicKey();
```
 |
| --- |

* * *

| Execute(data*[object]*)

Description<br>Execute a command in the ssh session and get the standard output and error streams. |
| --- |

#### Arguments

* data (object)

Execute data 
Object has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| arguments (optional) | Array of strings | The arguments to pass to the command |
| command | string | The command you want to run |

| Returns |
| --- |

Object with the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| status | integer | The exit code from the command |
| stderr | string | The standard error output from the command |
| stdout | string | The standard output from the command |

#### Return type

object

| Example
<br>To run command "example.bat" with arguments "foo" and "bar" in SSH connection s:<br>
```
var output = s.Execute( { command: 'example.bat', arguments: [ 'foo', 'bar' ]} );
var text   = output.stdout;
var errors = output.stderr;
var ecode  = output.status;
```
 |
| --- |

* * *

| Get(remote*[string]*, local*[string]*)

Description<br>Gets a file from the ssh connection using scp. |
| --- |

#### Arguments

* remote (string)
 
The path of the remote file to get

* local (string)
 
The path of the local file to write

| Returns
<br>no return value |
| --- |

| Example
<br>To get the remote file "/path/to/file.txt", creating local file "C:\path\to\file.txt" in SSH connection s:<br>
```
s.Get("/path/to/file.txt", "C:\\path\\to\\file.txt");
```
 |
| --- |

* * *

| Put(remote*[string]*, local*[string]*)

Description<br>Puts a file on the remote ssh connection using scp. |
| --- |

#### Arguments

* remote (string)
 
The path of the remote file to put

* local (string)
 
The path of the local file to read

| Returns
<br>no return value |
| --- |

| Example
<br>To put the local file "C:\path\to\file.txt" to remote file "/path/to/file.txt" in SSH connection s:<br>
```
s.Put("/path/to/file.txt", "C:\\path\\to\\file.txt");
```
 |
| --- |

* * *

| SftpGet(remote*[string]*, local*[string]*)

Description<br>Gets a file from the ssh connection using sftp. |
| --- |

#### Arguments

* remote (string)
 
The path of the remote file to get

* local (string)
 
The path of the local file to write

| Returns
<br>no return value |
| --- |

| Example
<br>To get the remote file "file.txt", creating local file "C:\path\to\file.txt" in SSH connection s using sftp:<br>
```
s.SftpGet("file.txt", "C:\\path\\to\\file.txt");
```
 |
| --- |

* * *

| SftpList(remote*[string]*)

Description<br>Gets a listing from the ssh connection using sftp. |
| --- |

#### Arguments

* remote (string)
 
The remote path to get the listing from

| Returns |
| --- |

Array of objects. Each object contains the following information for a file/directory:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| atime | integer | Access time for the file (seconds since epoch) |
| gid | integer | The group ID |
| info | constant | Bitwise information for the file/directory. See the [permissions](primer-ssh-class.md#Ssh_permissions_constants), [file types](primer-ssh-class.md#Ssh_file_types_constants) and [file bits](primer-ssh-class.md#Ssh_file_bits_constants) constants |
| mtime | integer | Modification time for the file (seconds since epoch) |
| name | string | The name of the file/directory |
| size | integer | The size of the file |
| uid | integer | The user ID |

#### Return type

object

| Example
<br>To get listing from the the remote path "temp" in SSH connection s using sftp:<br>
```
var listing = s.SftpList("temp");
for (l=0; l<listing.length; l++)
{
    Message(listing[l].name + ":" + listing[l].size;
}
```
 |
| --- |

* * *

| SftpMkdir(remote*[string]*, mode*[constant]*)

Description<br>Creates a directory in the remote ssh connection using sftp. |
| --- |

#### Arguments

* remote (string)
 
The remote directory to create

* mode (constant)
 
The mode/permissions for the directory. See the [permissions](primer-ssh-class.md#Ssh_permissions_constants) constants for details.
Note that the user's file-creation mask (umask) value will also be taken into account when creating the directory.

| Returns
<br>true if successful, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To create the remote path "temp" with, create, write and execute permissions for only the owner, in SSH connection s using sftp:<br>
```
var success = s.SftpMkdir("temp", Ssh.OWNER_READ|Ssh.OWNER_WRITE|Ssh.OWNER_EXECUTE);
```
 |
| --- |

* * *

| SftpPut(remote*[string]*, local*[string]*)

Description<br>Puts a file on the remote ssh connection using sftp. |
| --- |

#### Arguments

* remote (string)
 
The path of the remote file to put

* local (string)
 
The path of the local file to read

| Returns
<br>no return value |
| --- |

| Example
<br>To put the local file "C:\path\to\file.txt" to remote file "file.txt" in SSH connection s:<br>
```
s.SftpPut("file.txt", "C:\\path\\to\\file.txt");
```
 |
| --- |

* * *

| SftpRmdir(remote*[string]*)

Description<br>Deletes a directory in the remote ssh connection using sftp. If this fails it is probably because the directory is not empty. |
| --- |

#### Arguments

* remote (string)
 
The remote directory to delete

| Returns
<br>true if successful, false if not<br>
Return type
<br>Boolean |
| --- |

| Example
<br>To delete the remote path "temp" in SSH connection s using sftp:<br>
```
var success = s.SftpRmdir("temp");
```
 |
| --- |

* * *