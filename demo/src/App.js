import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import { useState } from 'react';

function App() {
  const [movie, setMovie] = useState(
    [
        {
            Name: 'salar',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb00Wglg0VH0njRhwZSoeBb9LfKXlO_URnXQqr2_GmmeiAdmnFcKeRNe2MbepEUJY1G_4&usqp=CAU",
            Category: 'Action',
            Status: 'Upcoming'
        },
        {
            Name: 'Lionking',
            img: "https://w0.peakpx.com/wallpaper/523/928/HD-wallpaper-the-lion-king-2019-animation-land-lions-movie-sunset.jpg",
            Category: 'Animation',
            Status: 'Favorites'
        },
        {
            Name: 'Venom',
            img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13937884_p_v8_ab.jpg",
            Category: 'Science Fiction',
            Status: 'Trending'
        },
        {
            Name: 'Hi papa',
            img: "https://www.indradevcinema.com/Modules/CineUploadFiles/Movie/image/HiPapa_310x390_716103_417279.jpg",
            Category: 'Romance',
            Status: 'Upcoming'
        },
        {
            Name: 'Barffi',
            img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2012/09/Box-Office-Barfi.jpg",
            Category: 'Romance',
            Status: 'Upcoming'
        },
        {
            Name: 'When Marnie Was There',
            img: "https://images.seattletimes.com/wp-content/uploads/2015/07/37882f94-1b89-11e5-9d62-632ca8d14885.jpg?d=780x542",
            Category: 'Fantacy',
            Status: 'Favorites'
        },
        {
            Name: 'RA-One',
            img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2011/10/Ra-One-Review.jpg",
            Category: 'Science Fiction',
            Status: 'Trending',
        },
        {
            Name: 'Kabhi khushi kabhi Gham',
            img: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/17/Pictures/_cbf7f818-9829-11ea-a968-2ed746e9a968.jpg",
            Category: 'Family',
            Status: 'Upcoming'
        },
        {
            Name: 'Whisper of the Heart',
            img: "https://i.redd.it/ahs31iv6m5091.jpg",
            Category: 'Anime',
            Status: 'Favorites'
        },
        {
            Name: 'The Forest',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWKXNP_3_i5eNxSIqInLCuKZtBGMPbe-nhFR0856_lldj3kMfqGXb1A_ckbkjnHup2dY&usqp=CAU",
            Category: 'horror',
            Status: 'Upcoming'
        },
        {
            Name: 'Darlings',
            img: "https://stat4.bollywoodhungama.in/wp-content/uploads/2021/02/Darlings-17.jpg",
            Category: 'Comedy',
            Status: 'Upcoming'
        },
        {
            Name: 'XO,kitty',
            img: "https://www.koimoi.com/wp-content/new-galleries/2023/05/netflixs-xo-kitty-did-not-portray-south-korean-culture-right-from-couples-kissing-in-a-public-library-to-school-lunches-a-netizen-found-these-points-unrelatable-001.jpg ",
            Category: 'Comedy',
            Status: 'Favorites'
        },
        {
            Name: 'journey 2',
            img: "https://parentpreviews.com/images/made/legacy-pics/journey-2-mysterious-island_668_330_80_int_s_c1.jpg",
            Category: 'Adventure',
            Status: 'Trending'
        },
        {
            Name: 'Zero',
            img: "https://www.koimoi.com/wp-content/new-galleries/2020/03/zero-box-office-heres-the-daily-breakdown-of-shah-rukh-khan-anushka-sharma-katrina-kaif-starrer-2018-romantic-drama-001.jpg",
            Category: 'Comedy',
            Status: 'Upcoming'
        },
        {
            Name: 'Roohi',
            img: "https://sm.mashable.com/t/mashable_in/photo/default/roohi-review_vy3r.h960.jpg",
            Category: 'Horror',
            Status: 'Trending'
        },
        {
            Name: 'Queen',
            img: "https://drprem.com/wp-content/uploads/2014/03/Kangna_in_UEEN-NEW-POSTER_0_0_0_0-600x321.jpg",
            Category: 'Drama',
            Status: 'Trending'
        },
        {
            Name: 'GoodBye',
            img: "https://stat4.bollywoodhungama.in/wp-content/uploads/2021/04/Goodbye-1-2-306x393.jpg",
            Category: 'Family',
            Status: 'Upcoming'
        },
        {
            Name: 'Robot',
            img: "https://watchmoviesonline.in/wp-content/uploads/2019/09/Robot-2.0-Full-Movie-Review.jpg",
            Category: 'Science Fiction',
            Status: 'Trending'
        },
    ])
  return (
    <Movie movie={movie} setMovie={setMovie}/>
  );
}

export default App;
