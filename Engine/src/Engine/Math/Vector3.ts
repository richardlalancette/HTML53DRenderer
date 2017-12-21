// © 2017 Joseph Cameron - All Rights Reserved
// Project: HTML53DRenderer
// Created on 2017-12-20.

import Debug from "Engine/Debug"
import Exceptions from "Engine/Debug/Exceptions"

const TAG: string = "Vector3";

class Vector3
{
    public x: number = 0;
    public y: number = 0;
    public z: number = 0;

    public length(): number
    {
        return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2) );
    }

    public normalize(): Vector3
    {
        const magnitude: number = this.length();
                
        if (magnitude !== 0)
        {
            this.x /= magnitude;
            this.y /= magnitude;
            this.z /= magnitude;
        }
        
        return this;
    }

    public toString(): string
    {
        return "{" + 
                    this.x + ", " + 
                    this.y + ", " + 
                    this.z + 
                "}";
    }

    public equalTo(aOther: Vector3): boolean
    {
        return  this.x === aOther.x &&
                this.y === aOther.y && 
                this.z === aOther.z ? 
                true : false;
    }

    constructor()
    constructor(aVector3: Vector3)
    constructor(aX: number, aY: number, aZ: number)
    constructor(a1?: any, a2?: any, a3?: any)
    {   
        if (arguments.length === 1)
        {
            this.x = a1.x;
            this.y = a1.y;
            this.z = a1.z;
        }
        else if (arguments.length === 3)
        {
            this.x = a1;
            this.y = a2;
            this.z = a3;
        }
    }
};

export default Vector3;
