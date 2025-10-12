import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div class="hero-center">
        <div class="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Drinking vinegar post-ironic intelligentsia tumeric irony. Shabby
            chic squid shaman gastropub narwhal viral. Keffiyeh try-hard VHS
            enamel pin. Marfa marxism chillwave semiotics live-edge. Sartorial
            banh mi next level kogi. Single-origin coffee +1 90's jianbing
            gorpcore.
          </p>
        </div>
        <div class="img-container">
        <img src={heroImg} alt="woman and the browser" className='img'/>
        </div>
      </div>
    </section>
  )
};
export default Hero;
