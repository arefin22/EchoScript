import Article from "../Article/Article";
const recomendation = async () => {
  const userFav = ["Books", "Weather", "Technology", "Coding"];
  const res = await fetch("https://api.publicapis.org/entries");
  const article = await res.json();
  const data = article.entries;
  const fav = data.filter((art) => userFav.includes(art.Category));
  const ranDom = fav.sort(() => Math.random() - 0.5);
  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold mt-5">For you</h1>
      {ranDom.slice(1, 4).map((art) => (
        <Article
          category={art.Category}
          authorName={"Shawal Ahmed S.k"}
          authorImage={"https://i.ibb.co/nnZwqDB/download-1.jpg"}
          title={art.API}
          article={art.article}
          postedDate={"24-01-24"}
          view={"200"}
          date={"26-01-24"}
          image={"https://i.ibb.co/1dWtPt3/download.jpg"}
        />
      ))}
    </div>
  );
};

export default recomendation;
