import './Contact.css';

export const Contact = () => {
    return (
        <section id={'contact'} className={'contact container'}>
            <p className={'header'}>
                Let's craft something <span className={'contact-highlight'}>truly shareworthy</span>
            </p>
            <a href={'mailto:mohammedsifankp@gmail.com'}><p className={'email'}>mohammedsifankp@gmail.com</p></a>
        </section>
    );
};