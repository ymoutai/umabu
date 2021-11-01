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
                'text' => 'Reactはじめた馬氏！<br>どうなるのか！？'
            ],
            [
                'title' => 'フックってなにゃ！！！',
                'text' => 'よくわからんにゃ！！！！！'
            ],
            [
                'title' => 'ぽりんき〜〜〜！！！！',
                'text' => 'ぽりんきてゃ🎀'
            ],
        ]);
    }
}
