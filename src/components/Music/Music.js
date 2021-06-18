import React from 'react';
import s from './Music.module.css';

const four = 4;
const one = 1;
const calculations = () => 'answer';

const Music = (props) => {
    return (
        <div className={s.content}>
            My MUSIC
            
           <h3>Two plus rwo is: {2 + 2}</h3>
            <h3>Minus on is: {four - one}</h3>
            <h1 title={calculations()}> {calculations()}</h1>

        </div>
    )
}

export default Music;
