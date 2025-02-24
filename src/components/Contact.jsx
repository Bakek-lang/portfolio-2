export default function Contact() {
  return (
    <div>
      {" "}
      <h3 className="text-3xl text-center">Contact</h3>
      <div className="flex justify-center flex-col ">
        <div className="flex justify-center items-center gap-2 ">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="Linkedin"
            className="w-12 h-12"
          />
          <span>LinkedIn:</span>
          <p>
            <a href="https://www.linkedin.com/in/henrik-bakke-76b716294/">
              Henrik Bakke
            </a>
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 mt-2 mr-5">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
            alt="Linkedin"
            className="w-12 h-12"
          />
          <span>Github:</span>
          <p>
            <a href="https://github.com/Bakek-lang">Bakek-Lang</a>
          </p>
        </div>
      </div>
    </div>
  );
}
