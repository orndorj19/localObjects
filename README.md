# localObjects
A simple wrapper for localStorage to facilitate storage of json objects

Example use:

```javascript

localObjects.set("user", { name: "William", age: 25, interests: [ "music", "reading", "hiking" ] });
var currentUser = localObjects.get("user");
    
```
