(function($){
    $(document).ready(function(){
        // Logout Features
        $(document).on('click', '#logout_btn',  function(e){
            e.preventDefault();
            $('#logout_form').submit();
        });
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


})(jQuery)
