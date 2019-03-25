> ### 中文文档请见 [README.md](https://gitee.com/TDoraX/CMS/blob/master/README.md)
> ### For Chinese: Please refer to [README.md](https://gitee.com/TDoraX/CMS/blob/master/README.md)

# Content Management System - Development Norms

> ### Attention for Developers:
> #### All of the files' end of per line excluded the file named README **MUST** take the Linux system as the standard, LF mode. If you use Windows or OS X with the low version, you should change the Line Separator to the mode LF(\n) in the text editor or IDE.

## Development Expires
- ### 4 Days (one module per day)

## Developers
- ### Leader: [Zhe Zhang](https://github.com/TDoraX)
- ### Members: [Bin Chen](https://github.com/wza62692371) (The best contributor), [Zepeng Liu](https://gitee.com/liuzepeng0814)## Technical Selection
- ### Environment (Back-end)
  - Node.JS
    - Express
      - session
      - multiparty
  - Database：MongoDB
    - mongoose
    - mongoose-pagination
    - mongoose-materialized
  - API Norms
    - RESTful API

- ### Environment (Front-end)
  - Frame
    - jQuery
  - Routers (Discard)
    - ~~sm-route~~
  - Templates (Discard)
    - ~~art-template~~
  - UI Frame
    - jQuery-EasyUI
  - Debug Tools
    - puer
    
- ### Common 
  - Operating System
    - Windows 10 Pro
    - Ubuntu 18.04
  - Git
    - For developers, you must use Git shell command pushing code to the branch of yours
  - Debug
    - Postman
  - Node.JS
    - Package Manager: Yarn
    
- ### Project Deployment
  - Deploying the project to the VPS on Tencent Cloud
  - Server operating system should use Linux Kernel
    - Recommend System: RHEL 7+/CentOS 7.0+
    - Sub operating system(not recommend): Ubuntu Server 18.04+/Debian
    > If you use Windows Server operating system, you should buy a VPS with the better hardware.
## API
- ### User management module (users) [Administrator]
  - username
  - password
  - gender
  - phone
  - name
  - email
  - age
  - access
  - job
  - level
  - avatar


- ### News management module (news)
  - time
  - category
  - title
  - content
  - source
  - place


- ### Categories management module (cates)

- ### Comments management module (Comments) [Developing...]
  - username
  - content
  - time

- ### Products management module (product)
  -  name
  -  price
  -  place
  -  producer
  - 图片 image

# Content Management System - Project Introduction (For users and developers)

- ### Main Function
- #### The main modules
  - Administrator can access to the module by clicking the category.
  - With accessing to the module, you can get (Method: POST) the sources of the module. The system can transfer API automatically. The page's sources will be listed.
  - Next, you can operate the module's sources. (Transferring API and operating data)
 > - Functions and operations of the main module
 >  - Users module: This module provides GUI for administrators. All of the fields have the function of adding contents, deleting contents, modifying contents. The function of searching only takes effect to the field of users.
 >  - Products module: This module provides GUI for administrators. All of the fields have the function of adding contents, deleting contents, modifying contents.
 >  - News module: This module provides GUI for administrators. All of the fields have the function of adding contents, deleting contents, modifying contents.<br/>
 > The fields that has checkbox could be deleted batch data by checking the box.<br/>
 > (Only for developers) All of the deleting & modifying functions above here which have own buttons should added to the last field. You can adjusting it by your development condition.
 
 - #### The sub modules
   - The module of categories has a tree structure, you can access to the module by clicking it. 
   - The main modules also have tree structure on the left. It will be used by managing module's children contents.
   - **Attention: The sub modules can modify the sources of collections but display the sources.**
   
 
### (Only for Developers bottom here)
- #### The difficulties of the project
  1. Searching function
  2. Modifying function
  3. The tree structure of the categories
  4. Displaying or deleting the categories' contents
  
- #### Solutions
  1. By using the dynamic routers to get the params Object in the URL that can be searched 
  2. For single data. Using the \<input type='hidden'\> tag to get the value of the '_id' fields which is in the database. The function of adding and modifying can be separated.
  3. Re-transfer self many times to get children by using recursion
  4. Finding and deleting data by using the function 'find()' and '$in' selector of MongoDB but recursion.



