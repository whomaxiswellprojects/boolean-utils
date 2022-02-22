# Boolean Utils
A Boolean Utils for Booleams that equals, compares, parses, etc

# example

Parsing a String to Find Booleans
```js
const booleanutils = require("boolean-utils"); // To require the boolean-utils package
const str = "this is what we gonna parse if it includes boolean";

booleanutils.parseBoolean(str); // This will return null cause this string we sat in the param doesn't include a boolean

const str2 = "this string has true";

booleanutils.parseBoolean(str2); // This should return true cause this string includes true

const str3 = "this string has false";

booleanutils.parseBoolean(str3); // this should return false cause its included in the string

```

Other stuff isn't completed yet, im tryin to complete it later.

# Credits
Whomaxiswell-Projects (R) Copy-right claimed
Author of Whomaxiswell-Projects: Whomaxiswell