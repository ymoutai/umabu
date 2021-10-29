<?php

use Illuminate\Database\Seeder;

class BlogsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('blogs')->insert([
            [
                'title' => 'title1',
                'text' => 'text1'
            ],
            [
                'title' => 'title2',
                'text' => 'text2'
            ],
            [
                'title' => 'title3',
                'text' => 'text3'
            ],
        ]);
    }
}
