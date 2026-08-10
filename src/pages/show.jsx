import ShowBanner from "@/components/ShowBanner";
import AnimeDetails from "@/sections/AnimeDetails";
import Seasons from "@/components/Seasons";


export const metadata = {
  title: 'Show - Sword Art Online',
}

export default () => {
  return (
    <>
      <ShowBanner />
      <AnimeDetails
        seasons={<Seasons />}
      />
    </>
  )
}
