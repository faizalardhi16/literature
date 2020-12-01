import React from 'react'

export default function LandingTitle(props) {
    return (
        <div style={{width:'65%'}}>
            <h1 style={{
                  fontFamily:'classic', 
                  fontWeight:'bold',
                  fontSize:80
            }}>
                  {props.titles}
                  <span style={{fontStyle:'italic'}}> {props.span} </span>
                  {props.titled}
            </h1>

            <p style={{fontSize:20, color:'#FFFFFF', width:'100%'}}>
                {props.content}
            </p>
        </div>
    )
}
