import React from 'react'
import DateRange from './DateRange'
import Section from './Section'
import SectionDiv from './SectionDiv'

export default function SupplementalExperienceSection({ items }) {
    return (
        <Section>
            <h2>Supplemental Experience</h2>
            <SectionDiv>
                {items.map((exp, index) => <div key={index}>
                    <div className='split'>
                        <span>{exp.position && <em>{exp.position}, </em>}{exp.organization} {exp.description}</span>
                        <DateRange {...exp.tenure} />
                    </div>
                </div>)}
            </SectionDiv>
        </Section>
    )
}
