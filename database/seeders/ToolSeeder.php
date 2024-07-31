<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tools')->insert([
            [
                'name' => 'HTML',
                'logo' => 'icon-html.svg',
                'link' => 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            ],
            [
                'name' => 'CSS',
                'logo' => 'icon-css.svg',
                'link' => 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            ],
            [
                'name' => 'JavaScript',
                'logo' => 'icon-js.svg',
                'link' => 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            ],
            [
                'name' => 'React',
                'logo' => 'icon-react.svg',
                'link' => 'https://react.dev/',
            ],
            [
                'name' => 'Bootstrap',
                'logo' => 'icon-bootstrap.svg',
                'link' => 'https://getbootstrap.com/',
            ],
            [
                'name' => 'Tailwind',
                'logo' => 'icon-tailwind.svg',
                'link' => 'https://tailwindcss.com/',
            ],
            [
                'name' => 'PHP',
                'logo' => 'icon-php.svg',
                'link' => 'https://www.php.net/',
            ],
            [
                'name' => 'MySQL',
                'logo' => 'icon-mysql.svg',
                'link' => 'https://www.mysql.com/',
            ],
            [
                'name' => 'Laravel',
                'logo' => 'icon-laravel.svg',
                'link' => 'https://laravel.com/',
            ],
            [
                'name' => 'Node.js',
                'logo' => 'icon-nodejs.svg',
                'link' => 'https://nodejs.org/',
            ],
            [
                'name' => 'Vite',
                'logo' => 'icon-vite.svg',
                'link' => 'https://vitejs.dev/',
            ],
            [
                'name' => 'Postman',
                'logo' => 'icon-postman.svg',
                'link' => 'https://www.postman.com/',
            ],
            [
                'name' => 'ESLint',
                'logo' => 'icon-eslint.svg',
                'link' => 'https://eslint.org/',
            ],
            [
                'name' => 'Git',
                'logo' => 'icon-git.svg',
                'link' => 'https://git-scm.com/',
            ],
            [
                'name' => 'GitHub',
                'logo' => 'icon-github.svg',
                'link' => 'https://github.com/falahrafi',
            ],
            [
                'name' => 'Adobe Illustrator',
                'logo' => 'icon-ai.svg',
                'link' => 'https://www.adobe.com/products/illustrator',
            ],
            [
                'name' => 'Adobe Photoshop',
                'logo' => 'icon-ps.svg',
                'link' => 'https://www.adobe.com/products/photoshop.html',
            ],
            [
                'name' => 'Figma',
                'logo' => 'icon-figma.svg',
                'link' => 'https://www.figma.com/',
            ],
            [
                'name' => 'Canva',
                'logo' => 'icon-canva.svg',
                'link' => 'https://www.canva.com/',
            ],
            [
                'name' => 'Maze',
                'logo' => 'icon-maze.png',
                'link' => 'https://maze.co/',
            ],

        ]);
    }
}
