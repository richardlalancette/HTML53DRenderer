// © 2017 Joseph Cameron - All Rights Reserved
// Project: CSS3DRenderer
// Created on 2017-12-02.
"use strict";

define(
[
    "Engine/Debug",
    "Engine/Debug/Exceptions",
    "Engine/Input",
    "Engine/Math/Vector2",
    "Engine/Math/Vector3",
    "Engine/Graphics/Quad",
    "Engine/Graphics/Sprite"
], 
function(Debug, Exceptions, Input, Vector2, Vector3, Quad, Sprite)
{
    const TAG = "Player";

    let Player = function()
    {
        const c_TranslateSpeed = 1;
        const c_RotateSpeed    = 1;

        const m_Position = new Vector3(0,0,0);
        const m_Rotation = new Vector3();
        const m_Scale    = new Vector3(1, 1, 1);

        const m_Sprite = Sprite.createSprite();

        const m_GraphicsObject = new Quad(new Vector2(100, 100), m_Sprite);

        let m_Timer = 0;
        let m_U = 0;

        this.Update = Object.freeze(function()
        {
            //Translation
            if (Input.getKey(Input.KEY.A) || Input.getKey(Input.KEY.LeftArrow))
            {
                m_Position.x -= c_TranslateSpeed;
            }   
            
            if (Input.getKey(Input.KEY.D) || Input.getKey(Input.KEY.RightArrow))
            {
                m_Position.x += c_TranslateSpeed;
            }
            
            if (Input.getKey(Input.KEY.W) || Input.getKey(Input.KEY.UpArrow))
            {
                m_Position.z -= c_TranslateSpeed;
            }
            
            if (Input.getKey(Input.KEY.S) || Input.getKey(Input.KEY.DownArrow))
            {
                m_Position.z += c_TranslateSpeed;
            }
            
            if (Input.getKey(Input.KEY.Space))
            {
                m_Position.y -= c_TranslateSpeed;
            }
            
            if (Input.getKey(Input.KEY.C))
            {
                m_Position.y += c_TranslateSpeed;
            }
            
            //Rotation
            if (Input.getKey(Input.KEY.E))
            {
                m_Rotation.y += c_RotateSpeed;
            }
            
            if (Input.getKey(Input.KEY.Q))
            {
                m_Rotation.y -= c_RotateSpeed;  
            }

            if (Input.getKey(Input.KEY.R))
            {
                m_Rotation.z += c_RotateSpeed;
            }
            
            if (Input.getKey(Input.KEY.T))
            {
                m_Rotation.z -= c_RotateSpeed;  
            }

            if (Input.getKey(Input.KEY.F))
            {
                m_Rotation.x += c_RotateSpeed;
            }
            
            if (Input.getKey(Input.KEY.G))
            {
                m_Rotation.x -= c_RotateSpeed;  
            }

            if (m_Timer++ > 10)
            {
                m_Timer = 0;

                if (m_U++ > 2)
                    m_U = 0;
            }
            
            m_GraphicsObject.Update(m_Position, m_Rotation, m_Scale);
            m_Sprite.Update(m_U,0, 16, 17);
        });

        // Constructors
        if (arguments.length === 0)
        {
        }
        else
        {
            throw Exceptions.Constructor;
        }

        Player.prototype = Object.freeze(Object.prototype);
    };

    Player.prototype = Object.freeze(Object.prototype);

    return Player;
});
