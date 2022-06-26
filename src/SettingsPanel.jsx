import React, { useState } from 'react'
import { icons } from './icons'
import { spaceText } from './util'
import { useDarkMode } from './vendor/usehooks/useDarkMode'

export default function SettingsPanel({ email, links }) {

    const [open, setOpen] = useState(false)


    const [dark, setDark] = useDarkMode()

    const print = () => window.print()
    const pdf = () => { }

    return (
        <div className='settings'>
            {open && <div className='settings-body'>
                <span onClick={() => setDark(!dark)} className={spaceText('icon-button toggle', dark ? 'on' : 'off')}>{icons.bulb()} {dark ? 'dark' : 'light'}</span>
            </div>}

            <div className='settings-head'>
                <span onClick={() => setOpen(!open)} className='icon-button'>{icons.gear()}</span>
                {/* <span onClick={() => pdf()} className='icon-button'>{icons.pdf()}</span> */}
                <span onClick={() => print()} className='icon-button'>{icons.print()}</span>
                <a href={links.find(link => link.id === 'github')?.url} className='icon-button'>{icons.github()}</a>
                <a href={`mailto:${email}`} className='icon-button'>{icons.email()}</a>
            </div>
        </div>
    )
}
