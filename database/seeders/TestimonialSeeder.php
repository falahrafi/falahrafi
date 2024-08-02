<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('testimonials')->insert([
            [
                'image' => 'review-01.png'
            ],
            [
                'image' => 'review-02.png'
            ],
            [
                'image' => 'review-03.png'
            ],
            [
                'image' => 'review-04.png'
            ],
            [
                'image' => 'review-05.png'
            ],
            [
                'image' => 'review-06.png'
            ],
            [
                'image' => 'review-07.png'
            ],
        ]);
    }
}
