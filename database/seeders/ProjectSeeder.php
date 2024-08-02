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
        DB::table('projects')->insert([[
                'name' => 'Galseid Website',
                'about' => '<h2>About</h2>Galseid is a web application that provides a collection of paintings, information on prominent painters, art event agenda, and a stunning merchandise catalog. Through Galseid, we strive to bridge traditional art with modern technology, overcoming the challenge of lack of accessibility and information on Indonesian art and culture.<h2>Background</h2>Indonesia has various types of arts and culture spread throughout the archipelago, but the lack of accessibility and information about Indonesian cultural arts, plus the impact of globalization that shifts local culture makes people less familiar with and understand Indonesian cultural arts.<br/><br/>Therefore, our team chose this project because we want to promote Indonesian cultural arts to be better known by the public and not to be displaced by globalization while applying the learning paths that we have learned such as Front-End, API (Back-End), and DevOps development to this web application. We also apply Artificial Intelligence (AI) through the painting recommendation feature with the Content-Based Filtering method.',
                'image' => 'https://api.falahrafi.com/images/preview-image.jpg',
                'video' => 'https://www.youtube.com/watch?v=Qthag7Tk7YQ',
                'website' => 'https://galseid.falahrafi.com/',
                'sourceCode' => 'https://github.com/galeri-seni-digital-indonesia/galeri-seni',
                'categoryId' => 2,
            ],
            [
                'name' => 'AthletSense Mobile',
                'about' => '<h2>About</h2>Welcome to AthletSense, where we make your sport activities easier. Explore our platform to discover a wide selection of top-notch sports fields, available at your fingertips. With our seamless booking process, you can quickly secure your desired venue. Whether you\'re a casual player or a seasoned athlete, AthletSense is your gateway to an exciting sports adventure.',
                'image' => 'https://cdn.dribbble.com/userupload/12204571/file/original-0e2b7803e8b6e5779e1b3d8c6e304887.png?resize=1024x768',
                'video' => 'https://www.youtube.com/watch?v=Qthag7Tk7YQ',
                'website' => 'https://athletsense.falahrafi.com/',
                'sourceCode' => '',
                'categoryId' => 1,
            ],
            [
                'name' => 'The Late Challenge Podcast',
                'about' => '<h2>About</h2>A podcast and video show that challenges news, views and hot topics in the world of current affairs, football and sport in a no-nonsense manner.',
                'image' => 'https://cdn.dribbble.com/userupload/8070220/file/original-bf087dec892b909cc8f467aa5d037dbf.png?resize=752x564',
                'video' => 'https://www.youtube.com/watch?v=Qthag7Tk7YQ',
                'website' => 'https://www.youtube.com/@thelatechallengepodcast',
                'sourceCode' => '',
                'categoryId' => 3,
            ],
        ]);
    }
}
