<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('category_tools')->insert([

            ['categoryId' => 1, 'toolId' => 16],
            ['categoryId' => 1, 'toolId' => 17],
            ['categoryId' => 1, 'toolId' => 18],
            ['categoryId' => 1, 'toolId' => 20],

            ['categoryId' => 2, 'toolId' => 1],
            ['categoryId' => 2, 'toolId' => 2],
            ['categoryId' => 2, 'toolId' => 3],
            ['categoryId' => 2, 'toolId' => 4],
            ['categoryId' => 2, 'toolId' => 5],
            ['categoryId' => 2, 'toolId' => 6],
            ['categoryId' => 2, 'toolId' => 7],
            ['categoryId' => 2, 'toolId' => 8],
            ['categoryId' => 2, 'toolId' => 9],
            ['categoryId' => 2, 'toolId' => 10],
            ['categoryId' => 2, 'toolId' => 11],
            ['categoryId' => 2, 'toolId' => 12],
            ['categoryId' => 2, 'toolId' => 13],
            ['categoryId' => 2, 'toolId' => 14],
            ['categoryId' => 2, 'toolId' => 15],
            
            ['categoryId' => 3, 'toolId' => 16],
            ['categoryId' => 3, 'toolId' => 17],
            ['categoryId' => 3, 'toolId' => 19],
        ]);
    }
}
