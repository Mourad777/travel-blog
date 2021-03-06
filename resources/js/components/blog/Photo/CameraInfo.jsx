import React from 'react'
import {  Camera, Aperture, ShutterSpeed, Iso, Lens, FocalLength } from "../../../pages/blog/svgs";
const CameraInfo = ({ photo }) => (
    <div style={{
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'rgb(255, 255, 255)',
        background: 'rgb(36,36,36)',
        margin: 10,
        opacity: 0.6,
        borderRadius: 10,
        zIndex:1,
    }}>
        <div
            style={{ display: "flex", width: 200, padding: 5 }}
        >
            <Camera />
            <p style={{ marginLeft: 10 }}>
                Camera <span>{photo.camera}</span>
            </p>
        </div>
        <div
            style={{ display: "flex", width: 200, padding: 5 }}
        >
            <Lens />
            <p style={{ marginLeft: 10 }}>
                Lens <span>{(photo.lens || '').substring(0, 18)}</span>
            </p>
        </div>
        <div
            style={{ display: "flex", width: 200, padding: 5 }}
        >
            <FocalLength />
            <p style={{ marginLeft: 10 }}>
                Focal Length <span>{photo.focal_length}</span>
            </p>
        </div>
        <div
            style={{ display: "flex", width: 200, padding: 5 }}
        >
            <Aperture />
            <p style={{ marginLeft: 10 }}>
                Aperture <span>{photo.aperture}</span>
            </p>
        </div>
        <div
            style={{ display: "flex", width: 200, padding: 5 }}
        >
            <ShutterSpeed />
            <p style={{ marginLeft: 10 }}>
                Shutter <span>{photo.shutter_speed}</span>
            </p>
        </div>
        <div
            style={{ display: "flex", width: 200, padding: 5 }}
        >
            <Iso />
            <p style={{ marginLeft: 10 }}>
                Iso <span>{photo.iso}</span>
            </p>
        </div>
    </div>
)

export default CameraInfo;