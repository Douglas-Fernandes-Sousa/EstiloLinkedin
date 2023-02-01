import './Banner.css'

const Banner = () => {

    return (

        <div className="banner">
            <img className='imgprincipal' src="/images/banner.jpeg" alt="Foto Principal" />
            <h2 className='principal'>Douglas Sousa</h2>
            <div className='sites'>
                <h2>Github</h2>
                <img className='produtos' src="/images/download.png"></img>
            </div>
            <div className='sites'>
                <h2>Linkedin</h2>
                <img className='produtos' src="/images/git.png"></img>
            </div>
            <div className='sites'>
                <h2>Whatsapp</h2>
                <img className='produtosw' src="/images/whats.jpeg"></img>
            </div>
            <link href='https://github.com/Douglas-Fernandes-Sousa'></link>
            <link href='https://www.linkedin.com/in/douglas-fernandes-de-sousa-897376208/'></link>
        </div>
    )
}

export default Banner
