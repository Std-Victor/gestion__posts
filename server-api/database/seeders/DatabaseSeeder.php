<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
      $categories = Category::factory(4)->create();
      User::factory(5)->create()->each(function($user) use($categories){
        $user->posts()->saveMany(
          Post::factory(3)->make([
            'user_id' => $user->id,
          ])
        )->each(function($post) use($categories){
          $post->categories()->attach(
            $categories->random(rand(1,4))->pluck('id')->toArray(),
            ['created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
          );
        });
      });
    }
}
