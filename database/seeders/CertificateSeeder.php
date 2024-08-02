<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CertificateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('certificates')->insert([
            [
                'name' => 'Front-End Web Developer Expert',
                'provider' => 'Dicoding Indonesia',
                'link' => 'https://www.dicoding.com/certificates/07Z68NDEMXQR',
                'image' => 'front-end-web-developer-expert.webp',
            ],
            [
                'name' => 'Intro to Product Management',
                'provider' => 'RevoU',
                'link' => 'https://certificates.revou.co/muhammad-falah-certificate-completion-pmmc23.pdf',
                'image' => 'intro-product-management.webp',
            ],
            [
                'name' => 'React Web Developer Beginner',
                'provider' => 'Dicoding Indonesia',
                'link' => 'https://www.dicoding.com/certificates/81P2V3GNJPOY',
                'image' => 'react-web-developer-beginner.webp',
            ],
            [
                'name' => 'Back-End Web Developer Beginner',
                'provider' => 'Dicoding Indonesia',
                'link' => 'https://www.dicoding.com/certificates/QLZ9484V2P5D',
                'image' => 'back-end-web-developer-beginner.webp',
            ],
            [
                'name' => 'The Founder',
                'provider' => 'Startup Campus',
                'link' => 'https://startupcampus.id/certificate/KM4-3C8362',
                'image' => 'the-founder.webp',
            ],
            [
                'name' => 'Git and GitHub Basic',
                'provider' => 'Dicoding Indonesia',
                'link' => 'https://www.dicoding.com/certificates/L4PQG0Y7VZO1',
                'image' => 'git-github-basic.webp',
            ],
            [
                'name' => 'Programming Logic 101',
                'provider' => 'Dicoding Indonesia',
                'link' => 'https://www.dicoding.com/certificates/07Z6V1DEMXQR',
                'image' => 'programming-logic-101.webp',
            ],
            [
                'name' => 'Web Programming Basic',
                'provider' => 'Dicoding Indonesia',
                'link' => 'https://www.dicoding.com/certificates/4EXGNMDNDZRL',
                'image' => 'web-programming-basic.webp',
            ],
            [
                'name' => 'JavaScript Programming Basic',
                'provider' => 'Dicoding Indonesia',
                'link' => 'https://www.dicoding.com/certificates/QLZ9RDE89P5D',
                'image' => 'javascript-programming-basic.webp',
            ],
            [
                'name' => 'Front-End Web Developer Beginner',
                'provider' => 'Dicoding Indonesia',
                'link' => 'https://www.dicoding.com/certificates/N9ZO547V0PG5',
                'image' => 'front-end-web-developer-beginner.webp',
            ],
            [
                'name' => 'Fundamental of Front-End Web Development',
                'provider' => 'Dicoding Indonesia',
                'link' => 'https://www.dicoding.com/certificates/MRZMLE1VRXYQ',
                'image' => 'front-end-web-development-fundamental.webp',
            ],
            [
                'name' => 'Best Team of Capstone Project',
                'provider' => 'SIB Dicoding x Kampus Merdeka',
                'link' => '',
                'image' => 'best-capstone-team-febe.webp',
            ],
            [
                'name' => 'Best Participant',
                'provider' => 'SIB Dicoding x Kampus Merdeka',
                'link' => '',
                'image' => 'best-participant-febe.webp',
            ],
        ]);
    }
}
