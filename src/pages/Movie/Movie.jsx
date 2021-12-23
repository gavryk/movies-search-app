import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieInfo, getMovieVideo } from "../../redux/actions/movie";
import style from "./Movie.module.scss";
import noPoster from "../../assets/img/no-poster.jpg";
import { Loader } from "../../components";
// import ReactPlayer from "react-player/youtube";

const urlPoster = "https://image.tmdb.org/t/p/w500";

const Movie = () => {
  const dispatch = useDispatch();
  const { id, type } = useParams();
  const movie = useSelector(({ movie }) => movie.item);
  const {isLoading} = useSelector(({ movie }) => movie);
  const releaseDate = new Date(movie.release_date);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    dispatch(fetchMovieInfo(id, type));
    dispatch(getMovieVideo(id, type));
  }, [dispatch, id, type]);


  return (
    <>
      {!isLoading ? (
        <div className={style.moviePage}>
          <div className={style.pageTitle}>
            <div>
              <h1>{movie.name ? movie.name : movie.title}</h1>
              <span>{movie.tagline && movie.tagline}</span>
            </div>
            <span className={style.rate}>Rate: {movie.vote_average}</span>
          </div>

          <div className={style.info}>
            <div className={style.poster}>
              {movie.adult && <span class={style.adult}>18+</span>}
              <img
                src={
                  movie.poster_path
                    ? `${urlPoster}${movie.poster_path}`
                    : noPoster
                }
                alt="Poster"
              />
              <div className={style.buttons}>
                {movie.homepage && (
                  <a
                    href={movie.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className={style.btn}
                  >
                    Homepage
                  </a>
                )}
                {movie.imdb_id && (
                  <a
                    href={`http://imdb.com/title/${movie.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                    className={style.btn}
                  >
                    IMDb
                  </a>
                )}
              </div>
            </div>

            <div className={style.about}>
              <p>{movie.overview}</p>
              {movie.genres && (
                <ul className={style.genres}>
                  <h3>Genres:</h3>
                  {movie.genres.map((gen, index) => (
                    <li key={`${gen.name}_${index}`}>"{gen.name}"</li>
                  ))}
                </ul>
              )}
              {movie.release_date && (
                <h4>
                  Date:{" "}
                  {`${releaseDate.getDate()} ${
                    monthNames[releaseDate.getMonth()]
                  } ${releaseDate.getFullYear()}`}
                </h4>
              )}
            </div>

            {/* <div className={style.videosWrapper}>
              {videos &&
                videos.map((video) => {
                  let videoUrl = `https://youtube.com/watch?v=${video.key}`;
                  return (
                    <div key={video.key} className={style.videoBlock}>
                      <ReactPlayer
                        url={
                          videoUrl.includes("/watch?v=")
                            ? videoUrl.replace("/watch?v=", "/embed/")
                            : videoUrl
                        }
                        controls={true}
                        playsinline
                        config={{
                          youtube: {
                            playerVars: { origin: "https://www.youtube.com" },
                          },
                        }}
                      />
                      <div className={style.videoTitle}>
                        <h4>
                          {video.name}({video.type})
                        </h4>
                      </div>
                    </div>
                  );
                })}
            </div> */}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Movie;
