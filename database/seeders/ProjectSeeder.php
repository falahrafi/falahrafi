<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projects')->insert([
            [
                'name' => 'Galseid Website',
                'about' => '<h2>About</h2>Galseid is a web application that provides a collection of paintings, information on prominent painters, art event agenda, and a stunning merchandise catalog. Through Galseid, we strive to bridge traditional art with modern technology, overcoming the challenge of lack of accessibility and information on Indonesian art and culture.<h2>Background</h2>Indonesia has various types of arts and culture spread throughout the archipelago, but the lack of accessibility and information about Indonesian cultural arts, plus the impact of globalization that shifts local culture makes people less familiar with and understand Indonesian cultural arts.<br/><br/>Therefore, our team chose this project because we want to promote Indonesian cultural arts to be better known by the public and not to be displaced by globalization while applying the learning paths that we have learned such as Front-End, API (Back-End), and DevOps development to this web application. We also apply Artificial Intelligence (AI) through the painting recommendation feature with the Content-Based Filtering method.',
                'image' => 'https://api.falahrafi.com/images/preview-images/galseid-preview-min.png',
                'video' => 'https://www.youtube.com/embed/I4nI-8ycEGU?si=T6Ae7kn23mMXQf4V',
                'website' => 'https://galseid.falahrafi.com/',
                'sourceCode' => 'https://github.com/galeri-seni-digital-indonesia/galeri-seni',
                'categoryId' => 2,
            ],
            [
                'name' => 'AthletSense Mobile',
                'about' => '<h2>About</h2>Welcome to AthletSense, where we make your sport activities easier. Explore our platform to discover a wide selection of top-notch sports fields, available at your fingertips. With our seamless booking process, you can quickly secure your desired venue. Whether you\'re a casual player or a seasoned athlete, AthletSense is your gateway to an exciting sports adventure.',
                'image' => 'https://cdn.dribbble.com/userupload/12204571/file/original-0e2b7803e8b6e5779e1b3d8c6e304887.png?resize=1024x768',
                'video' => 'https://www.youtube.com/embed/zDm_hLvPNhQ?si=UD_Iik7V_ehFZlzR',
                'website' => 'https://athletsense.falahrafi.com/',
                'sourceCode' => '',
                'categoryId' => 1,
            ],
            [
                'name' => 'TLC Podcast Logo Design',
                'about' => '<h2>About</h2>A podcast and video show that challenges news, views and hot topics in the world of current affairs, football and sport in a no-nonsense manner.',
                'image' => 'https://cdn.dribbble.com/userupload/8070220/file/original-bf087dec892b909cc8f467aa5d037dbf.png?resize=752x564',
                'video' => '',
                'website' => 'https://www.youtube.com/@thelatechallengepodcast',
                'sourceCode' => '',
                'categoryId' => 3,
            ],
            [
                'name' => 'Makanz Website',
                'about' => '<h2>About</h2>Discover the best places to eat with Makanz. We curate a catalog of diverse restaurants, making it easy for you to explore their menus, read reviews, and get all the details you need to choose your next dining experience. Whether you are in the mood for local favorites or looking to try something new, Makanz helps you find the perfect spot. Your next meal is just a click away.',
                'image' => 'https://api.falahrafi.com/images/preview-images/makanz-preview-min.png',
                'video' => 'https://www.youtube.com/embed/V9CFqDNi-C8?si=TFMYepLG5zcZ_M6c',
                'website' => 'https://makanz.falahrafi.com/',
                'sourceCode' => 'https://github.com/falahrafi/restaurant-apps',
                'categoryId' => 2,
            ],
            [
                'name' => 'Luxify Website',
                'about' => '<h2>About</h2>Luxify is your destination for premium skincare and grooming essentials. We offer a curated selection of products for both men and women, including sunscreens, serums, face washes, pomades, and perfumes. Our mission is to provide high-quality solutions for your daily self-care routine, blending luxury with effectiveness. Whether you’re looking to protect your skin, enhance your glow, or perfect your grooming game, Luxify has the products you need.',
                'image' => 'https://api.falahrafi.com/images/preview-images/luxify-preview-min.png',
                'video' => 'https://www.youtube.com/embed/QYDqeaFLIMs?si=_sXFfg-EnDrKWXcy',
                'website' => 'https://luxify.falahrafi.com/',
                'sourceCode' => 'https://github.com/falahrafi/luxify',
                'categoryId' => 2,
            ],
            [
                'name' => 'Kopeey Website',
                'about' => '<h2>About</h2>Kopeey brings the rich flavors of Indonesia’s finest coffee to your doorstep. Specializing in robusta, arabica, and liberica varieties, we source high-quality beans from local farmers across the archipelago. Whether you’re a casual coffee drinker or a true aficionado, Kopeey offers a diverse selection that captures the unique taste of Indonesian coffee culture. Discover your perfect brew with us.',
                'image' => 'https://api.falahrafi.com/images/preview-images/kopeey-preview-min.png',
                'video' => 'https://www.youtube.com/embed/pzk3B3-Ygug?si=IPMDMboxzMK58SM9',
                'website' => 'https://kopeey.falahrafi.com/',
                'sourceCode' => 'https://github.com/falahrafi/kopeey',
                'categoryId' => 2,
            ],
            [
                'name' => 'Wisata Kendal Website',
                'about' => "<h2>About</h2>Explore the beauty and flavors of Kendal City with Wisata Kendal. Our platform showcases the most stunning destinations and the best local culinary experiences that the city has to offer. Whether you're seeking nature, culture, or delicious food, Wisata Kendal is your guide to discovering the hidden gems and vibrant tastes of this charming city. Start your adventure with us.",
                'image' => 'https://api.falahrafi.com/images/preview-images/wk-preview-min.png',
                'video' => 'https://www.youtube.com/embed/ZqzcM9GZXls?si=dImCGDMjf6L_j09L',
                'website' => 'https://wisata-kendal.falahrafi.com/',
                'sourceCode' => 'https://github.com/falahrafi/wisata-kendal',
                'categoryId' => 2,
            ],
            [
                'name' => 'Niagahoster Payment Flow',
                'about' => "<h2>About</h2>In this project, I focused on enhancing the payment flow for Niagahoster during my internship, aiming to create a more interactive and user-friendly experience. By simplifying the process and reducing visual clutter, I worked to ensure that users can navigate payments with ease and confidence. This design improvement not only enhances usability but also aligns with Niagahoster's commitment to customer satisfaction. Explore the transformation and see how thoughtful design can make a significant impact.",
                'image' => 'https://api.falahrafi.com/images/preview-images/niagahoster-preview-min.png',
                'video' => 'https://www.youtube.com/embed/rT9BD-40baI?si=JbMqAUwa6kJ9BTxt',
                'website' => '',
                'sourceCode' => '',
                'categoryId' => 1,
            ],
            [
                'name' => 'Unisbank Stopwatch',
                'about' => "<h2>About</h2>In this project, I explored creative visual design by integrating the Unisbank logo with the clock feature of a stopwatch mobile app. The goal was to create a unique and cohesive visual identity that reflects the essence of Unisbank while enhancing the user experience. Through thoughtful design, I aimed to merge functionality with branding, resulting in a stopwatch app that stands out and resonates with users.",
                'image' => 'https://api.falahrafi.com/images/preview-images/stopwatch-preview-min.png',
                'video' => 'https://www.youtube.com/embed/kSEwELnpTgk?si=X7mFqWpdmvdXCdwo',
                'website' => '',
                'sourceCode' => '',
                'categoryId' => 1,
            ],
            [
                'name' => 'Galseid UI Design',
                'about' => '<h2>About</h2>Galseid is a web application that provides a collection of paintings, information on prominent painters, art event agenda, and a stunning merchandise catalog. Through Galseid, we strive to bridge traditional art with modern technology, overcoming the challenge of lack of accessibility and information on Indonesian art and culture.<h2>Background</h2>Indonesia has various types of arts and culture spread throughout the archipelago, but the lack of accessibility and information about Indonesian cultural arts, plus the impact of globalization that shifts local culture makes people less familiar with and understand Indonesian cultural arts.<br/><br/>Therefore, our team chose this project because we want to promote Indonesian cultural arts to be better known by the public and not to be displaced by globalization while applying the learning paths that we have learned such as Front-End, API (Back-End), and DevOps development to this web application. We also apply Artificial Intelligence (AI) through the painting recommendation feature with the Content-Based Filtering method.',
                'image' => 'https://api.falahrafi.com/images/preview-images/galseid-preview-min.png',
                'video' => 'https://www.youtube.com/embed/I4nI-8ycEGU?si=T6Ae7kn23mMXQf4V',
                'website' => 'https://galseid.falahrafi.com/',
                'sourceCode' => 'https://github.com/galeri-seni-digital-indonesia/galeri-seni',
                'categoryId' => 1,
            ],
            [
                'name' => 'Makanz UI Design',
                'about' => '<h2>About</h2>Discover the best places to eat with Makanz. We curate a catalog of diverse restaurants, making it easy for you to explore their menus, read reviews, and get all the details you need to choose your next dining experience. Whether you are in the mood for local favorites or looking to try something new, Makanz helps you find the perfect spot. Your next meal is just a click away.',
                'image' => 'https://api.falahrafi.com/images/preview-images/makanz-preview-min.png',
                'video' => 'https://www.youtube.com/embed/V9CFqDNi-C8?si=TFMYepLG5zcZ_M6c',
                'website' => 'https://makanz.falahrafi.com/',
                'sourceCode' => 'https://github.com/falahrafi/restaurant-apps',
                'categoryId' => 1,
            ],
            [
                'name' => 'Luxify UI Design',
                'about' => '<h2>About</h2>Luxify is your destination for premium skincare and grooming essentials. We offer a curated selection of products for both men and women, including sunscreens, serums, face washes, pomades, and perfumes. Our mission is to provide high-quality solutions for your daily self-care routine, blending luxury with effectiveness. Whether you’re looking to protect your skin, enhance your glow, or perfect your grooming game, Luxify has the products you need.',
                'image' => 'https://api.falahrafi.com/images/preview-images/luxify-preview-min.png',
                'video' => 'https://www.youtube.com/embed/QYDqeaFLIMs?si=_sXFfg-EnDrKWXcy',
                'website' => 'https://luxify.falahrafi.com/',
                'sourceCode' => 'https://github.com/falahrafi/luxify',
                'categoryId' => 1,
            ],
            [
                'name' => 'Kopeey UI Design',
                'about' => '<h2>About</h2>Kopeey brings the rich flavors of Indonesia’s finest coffee to your doorstep. Specializing in robusta, arabica, and liberica varieties, we source high-quality beans from local farmers across the archipelago. Whether you’re a casual coffee drinker or a true aficionado, Kopeey offers a diverse selection that captures the unique taste of Indonesian coffee culture. Discover your perfect brew with us.',
                'image' => 'https://api.falahrafi.com/images/preview-images/kopeey-preview-min.png',
                'video' => 'https://www.youtube.com/embed/pzk3B3-Ygug?si=IPMDMboxzMK58SM9',
                'website' => 'https://kopeey.falahrafi.com/',
                'sourceCode' => 'https://github.com/falahrafi/kopeey',
                'categoryId' => 1,
            ],
            [
                'name' => 'Wisata Kendal UI Design',
                'about' => "<h2>About</h2>Explore the beauty and flavors of Kendal City with Wisata Kendal. Our platform showcases the most stunning destinations and the best local culinary experiences that the city has to offer. Whether you're seeking nature, culture, or delicious food, Wisata Kendal is your guide to discovering the hidden gems and vibrant tastes of this charming city. Start your adventure with us.",
                'image' => 'https://api.falahrafi.com/images/preview-images/wk-preview-min.png',
                'video' => 'https://www.youtube.com/embed/ZqzcM9GZXls?si=dImCGDMjf6L_j09L',
                'website' => 'https://wisata-kendal.falahrafi.com/',
                'sourceCode' => 'https://github.com/falahrafi/wisata-kendal',
                'categoryId' => 1,
            ],
        ]);
    }
}
