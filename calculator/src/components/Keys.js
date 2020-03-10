import React from 'react';
import Button from './Button';
import './Keys.css';

function Keys() {
    return (
        <div className="Calculator__keys">
            <Button name="button0" title="0" />
            <Button name="button1" title="1" />
            <Button name="button2" title="2"/>
            <Button name="button3" title="3"/>
            <Button name="button4" title="4"/>
            <Button name="button5" title="5"/>
            <Button name="button6" title="6"/>
            <Button name="button7" title="7"/>
            <Button name="button8" title="8"/>
            <Button name="button9" title="9"/>
            <Button name="buttonDiv" title="/"/>
            <Button name="buttonMul" title="&times;"/>
            <Button name="buttonSub" title="-"/>
            <Button name="buttonAdd" title="+"/>
            <Button name="buttonDec" title="."/>
            <Button name="buttonReset" title="AC"/>
            <Button name="buttonSum" title="="/>
        </div>
    );
}

export default Keys;