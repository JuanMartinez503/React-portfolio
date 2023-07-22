export default function Home() {
  return (
    <div>
      <div className="intro d-flex flex-wrap">
        <img
          id="headshot"
          src="./src/images/headshot.jpg"
          alt="A picture of myself smiling with my arms crossed"
        />
        <div id="home-intro" className="text-center p-1 flex-wrap">
          <h2>
            {" "}
            Hi there, I'm <span id="j">J</span>uan!
          </h2>
          <p>
            As a Full Stack Developer, I turn ideas into captivating web
            experiences. I'm passionate about crafting clean code, designing
            intuitive user interfaces, and bringing innovation to life.
          </p>
          <p>
            Throughout my journey as a developer, I've been fascinated by the
            endless possibilities of web development, and I'm always eager to
            learn new technologies to stay at the forefront of this
            ever-evolving field.
          </p>
          <p>
            Feel free to explore my projects and get in touch if you have any
            questions or exciting opportunities to collaborate!
          </p>
        </div>
      </div>
    </div>
  );
}
