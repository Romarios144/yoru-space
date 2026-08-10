import MovieBannerCard from "@/components/MovieBannerCard";

const AnimeBanner = () => {
  const titleId = 'anime-banner-title'

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title="Death Note"
        titleId={titleId}
        TitleTag="h1"
        decription="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
        imgSrc="src/assets/images/anime-banner/2.png"
        isSmallPaddingY
      />
    </section>
  )
}

export default AnimeBanner