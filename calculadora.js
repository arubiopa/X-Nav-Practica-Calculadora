jQuery(document).ready(function(){
    num = "";
    op = "";
    $('.numero').click(function(){
        valor = $(this).html();
        if ($('#textoPantalla').html()!=0){
           $('#textoPantalla').html($('#textoPantalla').html() + valor);
        }else{
            $('#textoPantalla').html(valor);
        }
    })
    $('.oper').click(function(){
        num = $('#textoPantalla').html();
        op = $(this).html()
        if(op=='*')
            op='*';
        $('#textoPantalla').html(0);
    })
    $('.igual').click(function(){
        $('#textoPantalla').html(eval(num + op + $('#textoPantalla').html()));
    })

    $('.c').click(function(){
        $('#textoPantalla').html(0);
    })
});
