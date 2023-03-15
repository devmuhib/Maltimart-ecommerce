import React from 'react'
import { Container } from 'reactstrap'
import '../Style/common_section.css'

const CommonSection = ({title}) => {
    return (
        <>
        <section className='common_section'>
            <Container className='text-center'>
                <h1>{title}</h1>
            </Container>
        </section>
        </>
    )
}

export default CommonSection