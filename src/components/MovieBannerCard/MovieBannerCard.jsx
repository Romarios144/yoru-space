import './MovieBannerCard.scss'
import {Image} from "minista";
import Button from "@/components/Button";
import classNames from "classnames";

const MovieBannerCard = (props) => {
  const {
    title,
    titleId,
    TitleTag = "h2",
    description,
    imgSrc,
    isSmallPaddingY = false,
  } = props

  return(
    <div className="movies-banner-card">
      <Image
        className="movies-banner-card__image"
        src={imgSrc}
      />
      <div
        className={classNames('movies-banner-card__inner', {
          'movies-banner-card__inner--small-padding-y': isSmallPaddingY,
        })}
      >
        <div className="movies-banner-card__body">
          <TitleTag
            className="movies-banner-card__title h3"
            id={titleId}
          >
            {title}
          </TitleTag>
          <div className="movies-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movies-banner-card__footer">
          <Button
            className="movies-banner-card__play-button"
            iconName="play"
            label="Play Now"
            hasFillIcon
          />
          <div className="movies-banner-card__actions">
            <Button
              mode="black-06"
              iconName="plus"
              label="Add to playlist"
              isLabelHidden
            />
            <Button
              mode="black-06"
              iconName="like"
              label="Like"
              isLabelHidden
            />
            <Button
              mode="black-06"
              iconName="volum"
              label="Mute"
              isLabelHidden
            />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard