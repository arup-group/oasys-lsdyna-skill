# XMLParser class

The XMLParser class enables reading data from XML files. [More...](d3plot-xmlparser-class.md#XMLParser_details)

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

## Member functions

* [Parse](d3plot-xmlparser-class.md#XMLParser::Parse)(filename*[string]*)

## XMLParser properties

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| characterDataHandler | function | Function to call when character data is found. The function will be called with 1 argument which is a string containing the character data |
| commentHandler | function | Function to call when a comment is found. The function will be called with 1 argument which is a string containing the text inside the comment |
| endCDATAHandler | function | Function to call at the end of a CDATA section. The function does not have any arguments. |
| endElementHandler | function | Function to call when an element end tag is found. The function will be called with 1 argument which is a string containing the name of the element |
| startCDATAHandler | function | Function to call at the start of a CDATA section. The function does not have any arguments. |
| startElementHandler | function | Function to call when an element start tag is found. The function will be called with 2 arguments. Argument 1 is a string containing the name of the element. Argument 2 is an object containing the element attributes |

| Detailed Description<br>The XMLParser class provides a stream-oriented parser to enable you to read XML files. You register callback (or handler) functions with the parser and then parse the document. As the parser recognizes parts of the document, it will call the appropriate handler for that part (if you've registered one.) The document is fed to the parser in pieces. This allows you to parse really huge documents that won't fit into memory.<br> There are currently 6 handlers which can be set: [XMLParser.startElementHandler](d3plot-xmlparser-class.md#startElementHandler), [XMLParser.endElementHandler](d3plot-xmlparser-class.md#endElementHandler), [XMLParser.characterDataHandler](d3plot-xmlparser-class.md#characterDataHandler), [XMLParser.commentHandler](d3plot-xmlparser-class.md#commentHandler), [XMLParser.startCDATAHandler](d3plot-xmlparser-class.md#startCDATAHandler) and [XMLParser.endCDATAHandler](d3plot-xmlparser-class.md#endCDATAHandler). <br>The following simple example shows how the parser could be used.<br> |
| --- |


```

// Create a new parser object
var p = new XMLParser();

// assign handlers
p.startElementHandler  = startElem;
p.endElementHandler    = endElem;
p.characterDataHandler = text;
p.commentHandler       = comment;

// parse the file
p.Parse("/data/test.xml");

////////////////////////////////////////////////////////////////////////////////

function startElem(name, attr)
{
// handler to be called when a start element is found
// Print element name
    Println("START: " + name);
// Print attributes
    for (n in attr)
    {
        Println(" attr: " + n + "=" + attr[n]);
    }
}

function endElem(name)
{
// handler to be called when an end element is found
// Print element name
    Println("END: " + name);
}

function text(str)
{
// handler to be called when text is found
// Print text
    Println("TEXT: '" + str + "'");
}

function comment(str)
{
// handler to be called when a comment is found
// Print comment
    Println("COMMENT: '" + str + "'");
}

```

See the documentation below for more details.

| Constructor
new XMLParser()

Description<br>Create a new [XMLParser](d3plot-xmlparser-class.md) object for reading XML files. |
| --- |

#### Arguments

No arguments

| Returns
<br>[XMLParser](d3plot-xmlparser-class.md) object<br>
Return type
<br>XMLParser |
| --- |

| Example
<br>To create a new XMLParser object<br>
```
var p = new XMLParser();
```
 |
| --- |

| Details of functions 
Parse(filename*[string]*)

Description<br>starts parsing an XML file |
| --- |

#### Arguments

* filename (string)
 
XML file to parse

| Returns
<br>No return value |
| --- |

| Example
<br>To parse XML file "/data/test.xml"<br>
```

var p = new XMLParser();
p.Parse("/data/test.xml");
      
```
 |
| --- |

* * *