<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('project_tools')->insert([
            // WEB - Galseid
            ['projectId' => 1, 'toolId' => 1],
            ['projectId' => 1, 'toolId' => 2],
            ['projectId' => 1, 'toolId' => 3],
            ['projectId' => 1, 'toolId' => 6],
            ['projectId' => 1, 'toolId' => 7],
            ['projectId' => 1, 'toolId' => 8],
            ['projectId' => 1, 'toolId' => 9],
            ['projectId' => 1, 'toolId' => 10],
            ['projectId' => 1, 'toolId' => 11],
            ['projectId' => 1, 'toolId' => 12],
            ['projectId' => 1, 'toolId' => 13],
            ['projectId' => 1, 'toolId' => 14],
            ['projectId' => 1, 'toolId' => 15],
            ['projectId' => 1, 'toolId' => 18],

            // UI - AthletSense Mobile
            ['projectId' => 2, 'toolId' => 16],
            ['projectId' => 2, 'toolId' => 17],
            ['projectId' => 2, 'toolId' => 18],
            ['projectId' => 2, 'toolId' => 20],
            
            // Design - TLC Podcast
            ['projectId' => 3, 'toolId' => 16],
            ['projectId' => 3, 'toolId' => 17],

            // WEB - Makanz
            ['projectId' => 4, 'toolId' => 1],
            ['projectId' => 4, 'toolId' => 2],
            ['projectId' => 4, 'toolId' => 3],
            ['projectId' => 4, 'toolId' => 10],
            ['projectId' => 4, 'toolId' => 12],
            ['projectId' => 4, 'toolId' => 13],
            ['projectId' => 4, 'toolId' => 14],
            ['projectId' => 4, 'toolId' => 15],
            ['projectId' => 4, 'toolId' => 18],

            // WEB - Luxify
            ['projectId' => 5, 'toolId' => 1],
            ['projectId' => 5, 'toolId' => 2],
            ['projectId' => 5, 'toolId' => 3],
            ['projectId' => 5, 'toolId' => 5],
            ['projectId' => 5, 'toolId' => 7],
            ['projectId' => 5, 'toolId' => 8],
            ['projectId' => 5, 'toolId' => 14],
            ['projectId' => 5, 'toolId' => 15],
            ['projectId' => 5, 'toolId' => 18],

            // WEB - Kopeey
            ['projectId' => 6, 'toolId' => 1],
            ['projectId' => 6, 'toolId' => 2],
            ['projectId' => 6, 'toolId' => 3],
            ['projectId' => 6, 'toolId' => 5],
            ['projectId' => 6, 'toolId' => 7],
            ['projectId' => 6, 'toolId' => 8],
            ['projectId' => 6, 'toolId' => 14],
            ['projectId' => 6, 'toolId' => 15],
            ['projectId' => 6, 'toolId' => 18],

            // WEB - Wisata Kendal
            ['projectId' => 7, 'toolId' => 1],
            ['projectId' => 7, 'toolId' => 2],
            ['projectId' => 7, 'toolId' => 3],
            ['projectId' => 7, 'toolId' => 5],
            ['projectId' => 7, 'toolId' => 14],
            ['projectId' => 7, 'toolId' => 15],
            ['projectId' => 7, 'toolId' => 18],

            // UI - Niagahoster
            ['projectId' => 8, 'toolId' => 16],
            ['projectId' => 8, 'toolId' => 17],
            ['projectId' => 8, 'toolId' => 18],
            ['projectId' => 8, 'toolId' => 20],

            // UI - Unisbank Stopwatch
            ['projectId' => 9, 'toolId' => 16],
            ['projectId' => 9, 'toolId' => 17],
            ['projectId' => 9, 'toolId' => 18],
            ['projectId' => 9, 'toolId' => 20],

            // UI - Galseid
            ['projectId' => 10, 'toolId' => 16],
            ['projectId' => 10, 'toolId' => 17],
            ['projectId' => 10, 'toolId' => 18],
            ['projectId' => 10, 'toolId' => 20],

            // UI - Makanz
            ['projectId' => 11, 'toolId' => 16],
            ['projectId' => 11, 'toolId' => 17],
            ['projectId' => 11, 'toolId' => 18],
            ['projectId' => 11, 'toolId' => 20],

            // UI - Luxify
            ['projectId' => 12, 'toolId' => 16],
            ['projectId' => 12, 'toolId' => 17],
            ['projectId' => 12, 'toolId' => 18],
            ['projectId' => 12, 'toolId' => 20],

            // UI - Kopeey
            ['projectId' => 13, 'toolId' => 16],
            ['projectId' => 13, 'toolId' => 17],
            ['projectId' => 13, 'toolId' => 18],
            ['projectId' => 13, 'toolId' => 20],

            // UI - Wisata Kendal
            ['projectId' => 14, 'toolId' => 16],
            ['projectId' => 14, 'toolId' => 17],
            ['projectId' => 14, 'toolId' => 18],
            ['projectId' => 14, 'toolId' => 20],
        ]);
    }
}
