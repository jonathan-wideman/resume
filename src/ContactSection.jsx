import React from "react";
import { Address } from "./Address";
import Section from "./Section";
import SectionDiv from "./SectionDiv";
import { spaceText } from "./util";

export function ContactSection({ name, email, sites }) {
    return (
        <Section className='contact'>
            <h1>
                {spaceText(
                    name.first,
                    name.middle,
                    name.last
                )}
            </h1>
            <SectionDiv>
                <div>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
                {sites.map((site, index) => (
                    <div key={index}>{site.name && <>{site.name}: </>}<a href={site.url}>{site.url}</a></div>
                ))}
            </SectionDiv>
        </Section>
    );
}
