(function($){
    $(document).ready(function(){
        // Logout Features
        $(document).on('click', '#logout_btn',  function(e){
            e.preventDefault();
            $('#logout_form').submit();
        });
    });
})(jQuery)
