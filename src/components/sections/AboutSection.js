import myPhoto from '../../assets/images/Konstantin-photo.jpeg'
function AboutSection() {
    return (
        <section className="about-section" id="about">
            <div className="container about-container">
                <h1 id="about-title">About me</h1>
                <section className="split left-side">
                    <p>
                        Hello, my name is Konstantin Natev I am a juinor front-end developer.
                        I am motivated, an ambitious person, who wants something new everyday
                        and develop himself.
                    </p>
                </section>

                <section className="split rigth-side">
                    <img src={myPhoto} alt="Image is not avaliable" id="my-photo"></img>
                </section>

            </div>
        </section>
    );
}

export default AboutSection