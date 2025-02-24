export default function Contact() {
  return (
    <div className="mt-6 ">
      {" "}
      <h3 className="text-3xl text-center mb-2">Contact</h3>
      <div className="flex justify-center flex-col ">
        <div className="flex justify-center items-center gap-2 ">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="Linkedin"
            className="w-12 h-12"
          />
          <span>LinkedIn:</span>
          <p className="underline">
            <a
              href="https://www.linkedin.com/in/henrik-bakke-76b716294/"
              target="_blank"
            >
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
          <p className="underline">
            <a href="https://github.com/Bakek-lang" target="_blank">
              Bakek-Lang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
