import heroStyle from "./Hero.module.css";

function Hero() {
  return (
    <>
      <section className={heroStyle.container}>
        <div className={heroStyle.description}>
          <h2 className={heroStyle.headline}>
            Website design and development Services
          </h2>
          <p className={heroStyle.paragraph}>
            We work with you to make all of your ideas come to life.
          </p>
          
        </div>
            <button className={heroStyle.btn}>
              <p>View our work</p><span></span>
            </button>
      </section>
    </>
  );
}

export default Hero;
