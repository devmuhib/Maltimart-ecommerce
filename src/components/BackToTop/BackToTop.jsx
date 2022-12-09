import React, { useRef } from 'react';
import { useEffect } from 'react';



function BackToTop() {
    const backTopRef = useRef();

    const handelBackTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const backTopButton = () => {
        window.addEventListener('scroll', () => {
            if(document.scrollTop < 80 || document.documentElement.scrollTop < 80) {
                backTopRef.current.classList.add('hidden__button')
            } else {
                backTopRef.current.classList.remove('hidden__button')
            }
        })
    }

    useEffect(() => {
        backTopButton();

        return () => window.removeEventListener('scroll', backTopButton)
    }, [])
    return (
        <div className='back__top' ref={backTopRef} onClick={() => handelBackTop()}>
            <i class="ri-arrow-up-s-line"></i>
        </div>
    );
}

export default BackToTop;