<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

class BlogPageController extends Controller
{

    /**
     * Blog Page Show
     */
    public function showBlogPage(){
        $all_posts = Post::where('status', true) -> where('trash', false)  -> latest() -> paginate(2);
        return view('comet.blog', [
            'all_posts'     => $all_posts
        ]);
    }

    /**
     * Blog search by search box
     */
    public function blogSearch(Request $request){

        if(empty($request -> search)){
            $search = '';
        }else{
            $search = $request -> search;
        }


        $posts = Post::where('title','LIKE','%'. $search .'%') -> orWhere('content','LIKE','%'. $search .'%') -> orWhere('created_at','LIKE','%'. $search .'%') ->   latest() -> paginate();

        return view('comet.blog-search', [
            'all_posts'     => $posts
        ]);

    }


    /**
     * Blog search by category
     */
    public function blogSearchByCat($slug){


        $cats =  Category::where('slug', $slug) -> first();

        return view('comet.category-blog', [
            'all_posts'     => $cats -> posts
        ]);



    }





}
