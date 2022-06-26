import React from 'react'
import Section from './Section'
import SectionDiv from './SectionDiv'

export default function TechnicalExperienceSection({ items }) {
    return (
        <Section>
            <h2>Selected Technical Experience</h2>
            <SectionDiv>
                {items.map((exp, index) => <div key={index}>
                    <div className='split'>
                        <span>{exp.name}</span>
                        <span>{exp.time}</span>
                    </div>
                </div>)}
            </SectionDiv>
        </Section>
    )
}
