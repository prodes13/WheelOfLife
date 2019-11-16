<?php

use Illuminate\Database\Seeder;

use App\Topic;

class TopicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Topic::create([
            'name' => 'Health'
        ]);
    }
}
