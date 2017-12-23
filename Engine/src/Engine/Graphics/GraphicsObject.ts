// © 2017 Joseph Cameron - All Rights Reserved
// Project: HTML53DRenderer
// Created on 2017-12-21.

import Debug from "Engine/Debug"
import Exceptions from "Engine/Debug/Exceptions"
import Vector3 from "Engine/Math/Vector3"

const TAG: string = "GraphicsObject";

class GraphicsObject
{
    private readonly m_RootDivHandle : HTMLDivElement = document.createElement("div");

    public Update(aPosition: Vector3, aRotation: Vector3, aScale: Vector3): void
    {
        this.m_RootDivHandle.style.transform = 
            "translate3d(" + aPosition.x + "px," +          aPosition.y + "px," +          aPosition.z + "px)" + 
            "rotateX(" +     aRotation.x + "deg)rotateY(" + aRotation.y + "deg)rotateZ(" + aRotation.z + "deg)" +
            "scale3d(" +     aScale.x +    "," +            aScale.y +    "," +            aScale.z + ")"
        ;
    }

    public toString(): string
    {
        throw new Exceptions.Unimplemented();
    }

    public equalTo(aOther: GraphicsObject): boolean
    {
        throw new Exceptions.Unimplemented();
    }

    constructor(aDiv: HTMLDivElement)
    constructor(aDiv: HTMLDivElement[])
    constructor(aDiv: HTMLDivElement  , aPosition: Vector3, aRotation: Vector3)
    constructor(aDiv: HTMLDivElement[], aPosition: Vector3, aRotation: Vector3)
    constructor(aDiv: HTMLDivElement  , aPosition: Vector3, aRotation: Vector3, aScale: Vector3)
    constructor(aDiv: HTMLDivElement[], aPosition: Vector3, aRotation: Vector3, aScale: Vector3)
    constructor(a1?: any, a2?: any, a3?: any, a4?: any)
    {
        if (!(this instanceof GraphicsObject)) throw new Exceptions.Sealed();

        this.m_RootDivHandle.style.position       = "absolute";
        this.m_RootDivHandle.style.transformStyle = "preserve-3d";

        document.getElementById("MyHardcodedSceneGraph").appendChild(this.m_RootDivHandle);

        if (a1 instanceof HTMLDivElement)
        {
            this.m_RootDivHandle.appendChild(a1);
        }
        else if (a1 instanceof Array)
        {
            for (const div of a1)
            {
                this.m_RootDivHandle.appendChild(div);
            }
        }

        if (arguments.length === 1)
        {
            this.Update(new Vector3(), new Vector3(), new Vector3(1, 1, 1));
        }
        else if (arguments.length === 3)
        {
            this.Update(a2, a3, new Vector3(1, 1, 1));
        }
        else if (arguments.length === 4)
        {
            this.Update(a2, a3, a4);
        }
    }
};

export default GraphicsObject;