import MoviesBanner from "../sections/MoviesBanner";
import Collections from "../sections/Collections";

export const metadata = {
  title: 'Anime',
}

export default () => {
  return (
    <>
      <MoviesBanner />
      <Collections />
    </>
  )
}
