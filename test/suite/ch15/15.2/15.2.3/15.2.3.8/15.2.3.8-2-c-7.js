/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.8/15.2.3.8-2-c-7.js
 * @description Object.seal - 'O' is a RegExp object
 */


function testcase() {
        var regObj = new RegExp();
        var preCheck = Object.isExtensible(regObj);
        Object.seal(regObj);

        return preCheck && Object.isSealed(regObj);
    }
runTestCase(testcase);
