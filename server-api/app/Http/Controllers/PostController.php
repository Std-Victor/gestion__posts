<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
      return response(Post::all('id', 'title'));
    }

    public function show(Post $post){
      return response($post->load('categories', 'user'));
    }

    public function store(PostRequest $request){
      $data = $request->validated();
      $user = Auth()->user();
      $post = Post::create([
        'title' => $data['title'], "content" => $data['content'], 'user_id' => $user->id
      ]);
      $post->categories()->attach($request->post_categories);
      return response([
        "message" => "the post has been stored."
      ]);
    }

    public function update(PostRequest $request, Post $post){
      $this->authorize('update', $post);
      $data = $request->validated();
      Post::where("id",$post->id)->update(['title' => $data['title'], "content" => $data['content']]);
      $post->categories()->sync($data["post_categories"]);
      return response([
        "message" => "the post has been updated."
      ]);
    }

    public function destroy(Post $post){
      $this->authorize('delete', $post);
      $post = Post::findOrFail($post->id);
      $post->delete();
      return response([
        "message" => "the post has been deleted."
      ]);
    }
}
