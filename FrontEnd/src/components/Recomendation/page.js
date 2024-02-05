import Article from "../Article/Article";
import Card from "../Card/Card";
import Title from "../shared/ReusableComponents/Title";
const Recomendation = async () => {
  const userFav = ["Books", "Weather", "Technology", "Coding"];
  const res = await fetch("https://api.publicapis.org/entries");
  const article = await res.json();
  const data = article.entries;
  const fav = data.filter((art) => userFav.includes(art.Category));
  const ranDom = fav.sort(() => Math.random() - 0.5);
  return (
    <div>
      <div>
         <Title title="For you"></Title>
      </div>
      <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      {ranDom.slice(1, 4).map((art) => (
        <Card
          key={Math.random()}
          tags={art}
          category={art.Category}
          authorName={"Shawal Ahmed S.k"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          title={art.API}
          article={art.article}
          likes={"20k"}
          comments={"Comments"}
          date={"26-01-24"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
      ))}
      </div>
    </div>
  );
};

export default Recomendation;
