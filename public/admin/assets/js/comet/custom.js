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

            let img_url_1 =  URL.createObjectURL(e.target.files[0]);
            let img_url_2 =  URL.createObjectURL(e.target.files[1]);
            let img_url_3 =  URL.createObjectURL(e.target.files[2]);
            let img_url_4 =  URL.createObjectURL(e.target.files[3]);

            if( img_url_1 != '' ) {
                $('.post_img_load_1').attr('src', img_url_1);
            }


            if( img_url_2 != '' ){
                $('.post_img_load_2').attr('src', img_url_2);
            }

            if( img_url_3 != '' ){
                $('.post_img_load_3').attr('src', img_url_3);
            }


            if( img_url_4 != '' ){
                $('.post_img_load_4').attr('src', img_url_4);
            }



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

        });




    });
})(jQuery)
