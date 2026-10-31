import MovieBannerCard from '@/components/MovieBannerCard'
// import MovieBannerCard from '../MovieBannerCard'

const ShowBanner = () => {
  const titleId = 'show-banner-title'

  return (
    <section
      className="container"
      aria-labelledby={titleId}
     >
      <MovieBannerCard
        title="Sword Art Online"
        titleId={titleId}
        TitleTag = "h1"
        description="Players are trapped in a virtual reality blockbuster where the game creator has disabled the log-out option. Survival is the only goal, as dying in the game means dying in the real world. To escape, they must conquer all 100 floors of a massive floating castle."
        imgSrc="src/assets/images/anime-banner/3.jpg"
        isSmallPaddingY
      />
    </section>
  )
}

export default ShowBanner