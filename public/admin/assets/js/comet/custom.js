(function($){
    $(document).ready(function(){

        // Load CK Editors
        CKEDITOR.replace('post_editor');

        // Select 2
        $('.post_tag_select').select2();


        // Logout Features
        $(document).on('click', '#logout_btn',  function(e){
            e.preventDefault();
            $('#logout_form').submit();
        });



        // Category Status
        $(document).on('click', 'input.cat_check', function(){

            let checked = $(this).attr('checked');
            let status_id = $(this).attr('status_id');

            if( checked == 'checked' ){
                $.ajax({
                    url : 'category/status-inactive/' + status_id,
                    success : function(data){
                        swal('Status Inactive successful');
                    }
                });
            }else {
                $.ajax({
                    url : 'category/status-active/' + status_id,
                    success : function(data){
                        swal('Status Active successful');
                    }
                });
            }

        });


        // Delete btn fix
        $( '.delete-btn' ).click(function(){

            let conf = confirm('Are  you sure ?');

            if( conf == true ){
                return true;
            }else {
                return false;
            }

        });


        // Category Edit
        $('.edit_cat').click(function(e){
            e.preventDefault();

            let id = $(this).attr('edit_id');

            $.ajax({
                url : 'category/' +id+ '/edit',
                success : function(data){
                    $('#edit_category_modal form input[name="name"]').val(data.name);
                    $('#edit_category_modal form input[name="edit_id"]').val(data.id);
                    $('#edit_category_modal').modal('show');
                }
            });



        });


        // Post img load
        $('#post_img_select').change(function (e) {

            let img_url =  URL.createObjectURL(e.target.files[0]);
            $('.post_img_load').attr('src', img_url);

        });

        // Post img load
        $('#post_img_select_g').change(function (e) {

            let img_gall = '';
            for(let i = 0; i < e.target.files.length ; i++){
                let file_url = URL.createObjectURL(e.target.files[i]);
                img_gall += '<img class="shadow" src="'+file_url+'">';
            }

            $('.post-gallery-img').html(img_gall);


        });






        // Select Post Format
        $('#post_format').change(function () {

            let format = $(this).val();

            if( format == 'Image' ){
                $('.post-image').show();
            }else {
                $('.post-image').hide();
            }

            if( format == 'Gallery' ){
                $('.post-gallery').show();
            }else {
                $('.post-gallery').hide();
            }

            if( format == 'Video' ){
                $('.post-video').show();
            }else {
                $('.post-video').hide();
            }

            if( format == 'Audio' ){
                $('.post-audio').show();
            }else {
                $('.post-audio').hide();
            }

        });



        // Admin dash menu manage
        $('#sidebar-menu ul li ul li.ok').parent('ul').slideDown();
        $('#sidebar-menu ul li ul li.ok a').css('color', '#5ae8ff');
        $('#sidebar-menu ul li ul li.ok').parent('ul').parent('li').children('a').css('background-color', '#19c1dc');
        $('#sidebar-menu ul li ul li.ok').parent('ul').parent('li').children('a').addClass('subdrop');


    });
})(jQuery)
