export default function Card({ project }) {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2>{project.title}</h2>
        <span>Description</span>
        <div>
          <button className="py-2 px-3 bg-orange-400">
            <a href="">Github</a>
          </button>
          <button>
            <a href="">Live demo</a>
          </button>
        </div>
      </div>
    </div>
  );
}
