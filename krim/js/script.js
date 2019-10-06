$(document).ready(function () {

    // под меню
    $('.menu__item').on('click', function (e) {
        e.preventDefault();
        $('.menu__item').removeClass('active'), $('.submenu__list').css('display', 'none');
        $(this).addClass('active');
        $(this).children('.submenu__list').slideDown();
    })

    // выбор между арендатором и арендодателем
    $('.chose a').on('click', function (e) {
        e.preventDefault();
        $('.chose a').removeClass('active');
        $(this).addClass('active');
    });
    //$('.button_stoimost').click(function(){
        //var n = $('.g-aside').css("left"); 
        //var n= $('.g-aside').hasClass('hide');
        //if($(this).hasClass('hide'))
            
       //     alert('sxsx');
        
        
        //$('.g-aside').toggleClass('hide');
        //alert (n);
     //  $('.button_stoimost h2').html("Скрыть форму");
   // });
    //$('#bg_layer').hide();
    $('.button_stoimost').click(function(){
       if($('.g-aside').hasClass('hidden')){
         $('.button_stoimost h2').html("Скрыть форму");
          }else{
           $('.button_stoimost h2').html("Узнать стоимость");
          }
         $('.g-aside').toggleClass('hidden');
         $('.bg_layer').toggleClass('hidden');
        // $('#bg_layer').show();
                  });
    
               $('.button-search2').click(function(){
       if($('.g-aside').hasClass('hidden')){
         $('.button-search2 ').html("Скрыть форму");
          }else{
           $('.button-search2').html("Узнать стоимость");
          }
         $('.g-aside').toggleClass('hidden');
         $('.bg_layer').toggleClass('hidden');
         });

            $('.button-search2').on('click', function (e) {
              e.preventDefault();
              $('.g-aside').toggleClass('active');
          });


         $('.button_stoimost').on('click', function (e) {
        e.preventDefault();
        $('.g-aside').toggleClass('active');
    });
         //кнопка расчитать стоимость
           $('.button-search3').on('click', function (e) {
              e.preventDefault();
              $('.custom_form').toggleClass('hidden');
          });

            $('.button-search3').click(function(){
       if($('.custom_form').hasClass('hidden')){
         $('.button-search3 ').html("Расчитать стоимость");
         $('.form_izbr').html("<span class='image'></span>Добавить в избранное");
          }else{
           $('.button-search3').html("Забронировать");
           $('.form_izbr').html("<span class='image'></span>удалить из избранного");
           //$('.form_izbr').innerhtml("<p>удалить из избранного</p>");
          }
         
         });
        //$('.button_stoimost').toggle(function() { 
        // Отображаем скрытый блок 
       // $('hide').fadeIn(); // fadeIn - плавное появление
       // return false; // не производить переход по ссылке
      //},  
     // function() { 
        // Скрываем блок 
     //   $('hide').fadeOut(); // fadeOut - плавное исчезновение 
      //  return false; // не производить переход по ссылке
      //}); // end of toggle() 


    // показать еще
    $('.reviews__show-more').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        // $(this).closest('.reviews__bottom').find('.reviews__show-more .active').toggleClass('active').toggleClass('disabled');
        // $(this).closest('.reviews__bottom').find('.reviews__show-more .disabled').toggleClass('disabled').toggleClass('active');
        $(this).closest('.reviews__bottom').find('.reviews__text').toggleClass('active');
    })

    // select
    $('.select').each(function () {
        var $this = $(this),
            selectOption = $this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            dur = 500;

        $this.hide();
        $this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'select__gap',
            text: 'Выберите'
        }).insertAfter($this);

        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        $('<ul>', {
            class: 'select__list'
        }).insertAfter(selectGap);

        var selectList = selectGap.next('.select__list');
        // Add li - option items
        for (var i = 0; i < selectOptionLength; i++) {
            $('<li>', {
                    class: 'select__item',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        var selectItem = selectList.find('li');

        selectList.slideUp(0);
        selectGap.on('click', function () {
            if (!$(this).hasClass('on')) {
                $('.select').removeClass('active');
                $('.select__gap').removeClass('on');
                $('.select__list').slideUp().removeClass('show');

                $(this).closest('.select').addClass('active');
                $(this).addClass('on');
                selectList.slideDown(dur).addClass('show');

                selectItem.on('click', function () {
                    var chooseItem = $(this).data('value');

                    $(this).closest('.select').find('select').val(chooseItem).attr('selected', 'selected');
                    selectGap.text($(this).find('span').text());

                    selectList.slideUp(dur).removeClass('show');
                    selectGap.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur).removeClass('show');
            }
        });
    });

    // Checkbox
    // Отслеживаем событие клика по диву с классом check
    $('.checkboxes').find('.check').click(function () {
        // Пишем условие: если вложенный в див чекбокс отмечен
        if ($(this).find('input').is(':checked')) {
            // то снимаем активность с дива
            $(this).removeClass('active');
            // и удаляем атрибут checked (делаем чекбокс не отмеченным)
            $(this).find('input').removeAttr('checked');

            // если же чекбокс не отмечен, то
        } else {
            // добавляем класс активности диву
            $(this).addClass('active');
            // добавляем атрибут checked чекбоксу
            $(this).find('input').attr('checked', true);
        }
    });

    // RadioButton
    $('.radioblock').find('.radio').click(function () {
        var valueRadio = $(this).html();
        $(this).parent().find('.radio').removeClass('active');
        $(this).addClass('active');
        $(this).parent().find('input').val(valueRadio);
    });

    // показ фильтра на странице "результаты поиска"
    $('.show-filters').on('click', function (e) {
        e.preventDefault();
        $('.g-aside').toggleClass('active');
    })

    // steps
    $('.rem').click(function(){
        $('div.rose-block3').remove();
    });
     $('.my_obj').click(function(){
        $('div.rose-block3').add();
    });
    $('.add-step-menu__item').on('click', function (e) {
        e.preventDefault();
        $('.add-step-menu__item').removeClass('active');
        $(this).addClass('active');

        if ($(this).children('a').attr('date-tab-link') == 'address') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="address"]').removeClass('tab-block--hide').addClass('tab-block--show');

        } else if ($(this).children('a').attr('date-tab-link') == 'description') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="description"]').removeClass('tab-block--hide').addClass('tab-block--show');
        } else if ($(this).children('a').attr('date-tab-link') == 'cost') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="cost"]').removeClass('tab-block--hide').addClass('tab-block--show');
        } else if ($(this).children('a').attr('date-tab-link') == 'photos') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="photos"]').removeClass('tab-block--hide').addClass('tab-block--show');
        } else if ($(this).children('a').attr('date-tab-link') == 'balance') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="balance"]').removeClass('tab-block--hide').addClass('tab-block--show');
        } else if ($(this).children('a').attr('date-tab-link') == 'payment-history') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="payment-history"]').removeClass('tab-block--hide').addClass('tab-block--show');
        } else if ($(this).children('a').attr('date-tab-link') == 'withdraw-funds') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="withdraw-funds"]').removeClass('tab-block--hide').addClass('tab-block--show');
        } else if ($(this).children('a').attr('date-tab-link') == 'my-objects') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="my-objects"]').removeClass('tab-block--hide').addClass('tab-block--show');
            $('.attention-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.attention-block[date-tab-block|="my-objects"]').removeClass('tab-block--hide').addClass('tab-block--show');
        } else if ($(this).children('a').attr('date-tab-link') == 'my-reservations') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="my-reservations"]').removeClass('tab-block--hide').addClass('tab-block--show');
            $('.attention-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.attention-block[date-tab-block|="favorite"]').removeClass('tab-block--hide').addClass('tab-block--show');
        } else if ($(this).children('a').attr('date-tab-link') == 'favorite') {
            $('.tab-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.tab-block[date-tab-block|="favorite"]').removeClass('tab-block--hide').addClass('tab-block--show');
            $('.attention-block.tab-block--show').removeClass('tab-block--show').addClass('tab-block--hide');
            $('.attention-block[date-tab-block|="favorite"]').removeClass('tab-block--hide').addClass('tab-block--show');
        }

        // var q1 = $(this).children('a').attr('date-tab-link');
        // var q2 = $('.tab-block').attr('date-tab-block');
        // console.log(q1);
        // console.log(q2);
    })



})