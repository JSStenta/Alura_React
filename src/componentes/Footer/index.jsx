import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/JSStenta'>
                <img src="" alt='GitHub' />
            </a>
            <a href='https://www.linkedin.com/in/jsstenta/'>
                <img src="" alt='LinkedIn' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Juan Sebastian Stenta</strong>
    </footer>
}

export default Footer