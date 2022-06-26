import React from 'react'
import Section from './Section'
import SectionDiv from './SectionDiv'

export default function SummarySection({ items }) {
    return (
        <Section>
            <h2>Summary</h2>
            <SectionDiv>
                <ul>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </SectionDiv>
        </Section>
    )
}
