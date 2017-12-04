// © 2017 Joseph Cameron - All Rights Reserved
// Project: CSS3DRenderer
// Created on 2017-12-01.
"use strict";

define(
[

], 
function() 
{
    const TAG = "Debug";

    let Debug = function(){}

    Debug.prototype.Log = Object.freeze(function(aTag)
    {
        if (typeof(aTag) !== 'string')
            throw "aTag must be a string!"

        let stringBuffer = "D/" + aTag + ": ";

        for (let i = 1, s = arguments.length; i < s; i++)
        {
            stringBuffer += arguments[i];
        }
    
        console.log(stringBuffer);
    });

    Debug.prototype.Error = Object.freeze(function(aTag)
    {
        if (typeof(aTag) !== 'string')
            throw "aTag must be a string!"

        let stringBuffer = "E/" + aTag + ": ";
    
        for (let i = 1, s = arguments.length; i < s; i++)
        {
            stringBuffer += arguments[i];
        }
        
        console.log(stringBuffer);
    });

    Debug = new Debug();

    return Debug;
});
