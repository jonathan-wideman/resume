import React from 'react'

export default function DateRange({ descriptor, start, end }) {
    return (
        <>{descriptor} {start}{end && <> - {end}</>}</>
    )
}
