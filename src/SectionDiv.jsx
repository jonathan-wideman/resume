import React from 'react'
import { useInView } from 'react-intersection-observer';
import { spaceText } from './util';

export default function SectionDiv({ children, className, ...others }) {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.2,
    })

    return (
        <div ref={ref} className={spaceText('section-div', className, inView ? 'visible' : undefined)} {...others}>
            {children}
        </div>
    )
}
