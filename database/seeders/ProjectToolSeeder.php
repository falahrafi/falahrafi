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
            ['projectId' => 2, 'toolId' => 17],
            ['projectId' => 2, 'toolId' => 18],
            ['projectId' => 2, 'toolId' => 20],
            ['projectId' => 3, 'toolId' => 16],
            ['projectId' => 3, 'toolId' => 17],
        ]);
    }
}
