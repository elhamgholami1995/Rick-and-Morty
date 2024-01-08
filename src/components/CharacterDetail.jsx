import { Character } from "../../data/data";

function CharacterDetail() {
  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img
          src={Character.image}
          alt={Character.name}
          className="character-detail__img"
        />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{Character.gender === "Male" ? "👨" : "👩"}</span>
            <span> {Character.name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${Character.status === "Dead" ? "red" : ""}`}
            ></span>
            <span> {Character.status} </span>
            <span>- {Character.species}</span>
          </div>
          <div className="location">
            <p>Last Known location :</p>
            <p>{Character.location.name}</p>
          </div>
          <div className="actions">
            <button className="btn btn--primary">Add to Favorite</button>
          </div>
        </div>
      </div>
      <div className="character-episodes"></div>
    </div>
  );
}

export default CharacterDetail;
