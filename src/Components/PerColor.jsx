import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { notification } from 'antd';

function PerColor(props) {
    const [isMouseEnter, setMouseEnter] = useState(false)
    const [api, contextHolder] = notification.useNotification();

    const copyToClipboard = (color) => {
        navigator.clipboard.writeText(color)

        openNotification('bottom', color)
    }

    const openNotification = (placement, color) => {
        let message =
            <div>
                <span style={{
                    background: color,
                    padding: "5px",
                    borderRadius: "50px",
                    color: "white"
                }}>
                    {`${color}`}
                </span> copied to clipboard`
            </div>
            
        api.info({
            message: message,
            placement,
            style: {
                fontSize: "7px"
            },
            duration: 1.5
        });
    };

    return (
        <>
            <div id={`per-color-${props.i}`}
                className="per-color"
                key={props.i}
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
                style={{ background: props.colour.color, width: `calc(100vw / ${props.colours.length})` }}>
                {contextHolder}
                <div className="settings-area">
                    <p className={"colour-p"} onClick={() => copyToClipboard(props.colour.color.toUpperCase())}>{props.colour.color.toUpperCase()}</p>
                    <div className="settings" style={{ opacity: isMouseEnter ? 1 : 0, transition: ".7s" }}>
                        {props.colour.locked
                            ? <LockOutlined style={{ fontSize: "20px", color: "white" }} onClick={() => props.onChangeColourStatus(props.i, props.colour.locked)} />
                            : <UnlockOutlined style={{ fontSize: "20px", color: "white" }} onClick={() => props.onChangeColourStatus(props.i, props.colour.locked)} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PerColor;