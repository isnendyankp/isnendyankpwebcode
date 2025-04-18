import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div>
                <h2 className="text-4xl font-bold text-white">
                    About Me
                </h2>
                <p>
                    Hello, I'm Isnendyan, a web developer with a passion for creating beautiful and functional websites. With a strong foundation in HTML, CSS, and JavaScript, I have experience in both front-end and back-end development. I am also proficient in various frameworks and libraries, allowing me to build scalable and maintainable applications. I am always looking for new challenges and opportunities to grow as a developer, and I am excited to see where my skills can take me.
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutSection