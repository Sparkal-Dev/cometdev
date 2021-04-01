@extends('comet.layouts.app')


@section('main-content')


    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="blog-posts">






                        @foreach($all_posts as $post)
                            @php
                                $featured = json_decode($post -> featured );
                            @endphp
                        <!-- end of article-->
                        <article class="post-single">
                            <div class="post-info">
                                <h2><a href="#">{{ $post -> title }}</a></h2>
                                <h6 class="upper"><span>By</span><a href="#"> Admin</a><span class="dot"></span><span>{{ date('d F, Y', strtotime($post -> created_at) ) }}</span><span class="dot"></span><a href="#" class="post-tag">Startups</a></h6>
                            </div>


                            @if( $featured -> post_type == 'Image' )
                            <div class="post-media">
                                <a href="#">
                                    <img src="{{ URL::to('') }}/media/posts/{{ $featured -> post_image }}" alt="">
                                </a>
                            </div>
                            @endif

                            @if( $featured -> post_type == 'Gallery' )
                            <div class="post-media">
                                <div data-options="{&quot;animation&quot;: &quot;slide&quot;, &quot;controlNav&quot;: true" class="flexslider nav-outside">
                                    <ul class="slides">

                                        @foreach( $featured -> post_gallery as $gall )
                                        <li class="flex-active-slide" style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;">
                                            <img src="{{ URL::to('') }}/media/posts/{{ $gall }}" alt="" draggable="true">
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                            @endif

                            @if( $featured -> post_type == 'Video' )
                            <div class="post-media">
                                <div class="media-video">
                                    <iframe src="{{ $featured -> post_video }}" frameborder="0"></iframe>
                                </div>
                            </div>
                            @endif



                            <div class="post-body">
                                {!! Str::of(htmlspecialchars_decode($post -> content)) -> words(25) !!}
                                <p>
                                    <a href="#" class="btn btn-color btn-sm">Read More</a>
                                </p>
                            </div>
                        </article>
                        <!-- end of article-->
                        @endforeach









                        <!-- end of article-->
                    </div>


                    {{ $all_posts -> links() }}


                    <ul class="pagination">
                        <li><a href="#" aria-label="Previous"><span aria-hidden="true"><i class="ti-arrow-left"></i></span></a>
                        </li>
                        <li class="active"><a href="#">1</a>
                        </li>
                        <li><a href="#">2</a>
                        </li>
                        <li><a href="#">3</a>
                        </li>
                        <li><a href="#">4</a>
                        </li>
                        <li><a href="#">5</a>
                        </li>
                        <li><a href="#" aria-label="Next"><span aria-hidden="true"><i class="ti-arrow-right"></i></span></a>
                        </li>
                    </ul>
                    <!-- end of pagination-->





                </div>



                @include('comet.layouts.partials.sidebar');


            </div>
            <!-- end of row-->
        </div>
        <!-- end of container-->
    </section>



@endsection
