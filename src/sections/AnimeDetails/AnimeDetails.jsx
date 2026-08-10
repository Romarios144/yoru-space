import './AnimeDetails.scss'
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import PersonCard from "@/components/PersonCard";
import Button from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import Icon from "@/components/Icon";
import Tags from "@/components/Tags";
import Ratings from "@/components/Ratings";

const AnimeDetails = (props) => {
  const {
    seasons,
  } = props

  const titleId = 'anime-details-title'
  const castSliderNavigationId = 'anime-cast-slider-navigation'

  const castItems = [
    { imgSrc: 'src/assets/images/personage/cast1.jpg', imgAlt: 'Light Yagami', },
    { imgSrc: 'src/assets/images/personage/cast2.jpg', imgAlt: 'L Lawliet', },
    { imgSrc: 'src/assets/images/personage/cast3.jpg', imgAlt: 'Ryuk', },
    { imgSrc: 'src/assets/images/personage/cast4.jpg', imgAlt: 'Misa Amane', },
    { imgSrc: 'src/assets/images/personage/cast5.jpg', imgAlt: 'Rem', },
    { imgSrc: 'src/assets/images/personage/cast6.jpg', imgAlt: 'Near', },
    { imgSrc: 'src/assets/images/personage/cast7.jpg', imgAlt: 'Mello', },
    { imgSrc: 'src/assets/images/personage/cast8.jpg', imgAlt: 'Soichiro Yagami', },
    { imgSrc: 'src/assets/images/personage/cast9.jpg', imgAlt: 'Touta Matsuda', },
    { imgSrc: 'src/assets/images/personage/cast10.jpg', imgAlt: 'Watari', },
  ]

  const reviewItems = [
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'Still rewatching the mind games between Light and L! The climax of their battle gives me goosebumps every single time. A timeless masterpiece, it\'s so hard to find another anime this smart.',
      ratingValue: 4.5,
    },
    {
      name: 'Swaraj',
      subtitle: 'From Canada',
      description: 'Still waiting for Ryuk to drop a Death Note for me because this work to-do list won\'t delete itself 😂 Seriously though, the plot changes a bit after episode 25, but the first half is an absolute 10/10.',
      ratingValue: 5,
    },
    {
      name: 'Victor',
      subtitle: 'From Iran',
      description: 'Still rewatching the mind games between Light and L! The climax of their battle gives me goosebumps every single time. A timeless masterpiece, it\'s so hard to find another anime this smart.',
      ratingValue: 4.5,
    },
    {
      name: 'Vasya',
      subtitle: 'From Rasha',
      description: 'Still waiting for Ryuk to drop a Death Note for me because this work to-do list won\'t delete itself 😂 Seriously though, the plot changes a bit after episode 25, but the first half is an absolute 10/10.',
      ratingValue: 5,
    },
    {
      name: 'Aniket Den',
      subtitle: 'From Ukraine',
      description: 'Still rewatching the mind games between Light and L! The climax of their battle gives me goosebumps every single time. A timeless masterpiece, it\'s so hard to find another anime this smart.',
      ratingValue: 4.5,
    },
    {
      name: 'Leo',
      subtitle: 'From Britannia',
      description: 'Still waiting for Ryuk to drop a Death Note for me because this work to-do list won\'t delete itself 😂 Seriously though, the plot changes a bit after episode 25, but the first half is an absolute 10/10.',
      ratingValue: 5,
    },
    {
      name: 'Aniket Mykola',
      subtitle: 'From Francia',
      description: 'Still rewatching the mind games between Light and L! The climax of their battle gives me goosebumps every single time. A timeless masterpiece, it\'s so hard to find another anime this smart.',
      ratingValue: 4.5,
    },
    {
      name: 'Halya',
      subtitle: 'From Georgia',
      description: 'Still waiting for Ryuk to drop a Death Note for me because this work to-do list won\'t delete itself 😂 Seriously though, the plot changes a bit after episode 25, but the first half is an absolute 10/10.',
      ratingValue: 5,
    },
  ]

  return (
    <section
      className="anime-details container"
      aria-labelledby={titleId}
    >
      <h2 className="visually-hidden" id={titleId}>
        Detailed anime information
      </h2>
      <div className="anime-details__main">
        {seasons && (
          <div className="anime-details__panel anime-details__panel--seasons">
            <div className="anime-details__group anime-details__group--big-gap-y">
              <h3 className="h4">Seasons and Episodes</h3>
              {seasons}
            </div>
          </div>
        )}
        <div className="anime-details__panel anime-details__panel--description">
          <div className="anime-details__group">
            <h3 className="anime-details__title">
              Description
            </h3>
            <div className="anime-details__description">
              <p>"Death Note" is a cult psychological thriller about a battle of wits between brilliant high school student Light Yagami and the genius detective L. Light finds a mystical notebook dropped by the Shinigami (god of death) Ryuk, which kills anyone whose name is written in it. Light decides to rid the world of criminals to become a god of justice named Kira, but the police launch a massive manhunt to stop him.</p>
            </div>
          </div>
        </div>
        <div className="anime-details__panel">
          <header className="anime-details__panel-header">
            <h3 className="anime-details__title">
              Cast
            </h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              mode="rounded"
              buttonMode="black-08"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard {...castItem} key={index} />
            ))}
          </Slider>
        </div>
        <div className="anime-details__panel anime-details__panel--large-gap-y">
          <header className="anime-details__panel-header">
            <h3 className="anime-details__title">
              Reviews
            </h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add Your Review"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {reviewItems.map((reviewItem, index) => (
              <ReviewCard {...reviewItem} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="anime-details__info">
        <div className="anime-details__panel">
          <div className="anime-details__groups">
            <div className="anime-details__group">
              <h3 className="anime-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="anime-details__description">
                <time className="h6" dateTime="2006">2006</time>
              </div>
            </div>
            <div className="anime-details__group">
              <h3 className="anime-details__title">
                <Icon name="translate" />
                <span>Available Languages</span>
              </h3>
              <Tags
                items={['English', 'Hindi', 'Tamil', 'Telegu', 'Telegu']}
              />
            </div>
            <div className="anime-details__group">
              <h3 className="anime-details__title">
                <Icon name="star" />
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  { title: 'IMDb', ratingValue: 4.5},
                  { title: 'YoruSpace', ratingValue: 5},
                ]}
              />
            </div>
            <div className="anime-details__group">
              <h3 className="anime-details__title">
                <Icon name="gernes" />
                <span>Gernes</span>
              </h3>
              <Tags
                items={['Psychological thriller', 'Detective', 'Drama']}
              />
            </div>
            <div className="anime-details__group">
              <h3 className="anime-details__title">
                Mangaka
              </h3>
              <PersonCard
                name="Tsugumi Oba"
                subtitile="From Japan"
                imgSrc="src/assets/images/personage/mangaka.JPG"
              />
            </div>
            <div className="anime-details__group">
              <h3 className="anime-details__title">
                Music
              </h3>
              <PersonCard
                name="Hideki Taniuchi"
                subtitile="From Japan"
                imgSrc="src/assets/images/personage/music.jpg"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default AnimeDetails