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
        \Illuminate\Support\Facades\DB::table('blogs')->truncate();
        \DB::table('blogs')->insert([
            [
                'title' => 'Reactはじめました。',
                'text' => 'Reactはじめた馬氏！<br>どうなるのか！？',
                'image' => 'test',
            ],
            [
                'title' => 'フックってなにゃ！！！',
                'text' => 'よくわからんにゃ！！！！！',
                'image' => 'test',
            ],
            [
                'title' => 'ぽりんき〜〜〜！！！！',
                'text' => 'ぽりんきてゃ🎀',
                'image' => 'test',
            ],
        ]);
    }
}
