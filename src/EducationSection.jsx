import React from 'react'
import { Address } from './Address'
import Section from './Section'
import SectionDiv from './SectionDiv'

export default function EducationSection({ items }) {
    return (
        <Section>
            <h2>Education</h2>
            {items.map((ed, index) => <SectionDiv key={index}>
                <div className='split'>
                    <span><strong>{ed.school.name}</strong>, <Address {...ed.school.address} /></span>
                    <span>{ed.qualification.completion}</span>
                </div>
                <div>
                    {ed.qualification.degree}, {ed.qualification.field}
                </div>
            </SectionDiv>)}
        </Section>
    )
}
