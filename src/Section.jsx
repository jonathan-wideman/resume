import React from 'react'
import { useInView } from 'react-intersection-observer';
import { spaceText } from './util';

export default function Section({ children, className, ...others }) {

    // const { ref, inView, entry } = useInView({
    //     /* Optional options */
    //     threshold: 0.2,
    // })

    return (
        // <section ref={ref} className={spaceText([className, inView ? 'visible' : undefined])} {...others}>
        <section className={className} {...others}>
            {children}
        </section>
    )
}
