This project fixes the broken URLs used in the examples in the [UIUC CIS API documentation](https://courses.illinois.edu/cisdocs/api). This project also holds the `cisapi.xsd` schema file([mirth.cc/fix-cisapi/cisapi.xsd](https://mirth.cc/fix-cisapi/cisapi.xsd)), which is a broken link in the documentation and cannot be found elsewhere as of 2023-03-22. 

The tool fixes two issues:
- Change “/cisapi” to “/cisapp/explorer”
- Add `.xml` before the parameters. For example, change “/courses” to “/courses.xml”

The tool can also enable cascade mode on a URL you give it. 

> ⚠️ NOTE: There may exist URLs in the documentation that have errors besides these. This tool does not and will not fix them. This tool *does*, however, fix the error on the schedule/courses page(missing ampersands before section symbols)