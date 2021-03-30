<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class BlogPageController extends Controller
{
    //

    /**
     * Blog Page Show
     */
    public function showBlogPage(){
        $all_posts = Post::where('status', true) -> get();
        return view('comet.blog', [
            'all_posts'     => $all_posts
        ]);
    }
}
