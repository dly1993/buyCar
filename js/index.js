$(function(){

    $('.cartView').fullpage({
        navigation:true,
        sectionsColor: ['#f9dd67','#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#84d9ed'],

        afterLoad:function(a,index){

            //谁滚出来谁加animation这个类
            $('.section').removeClass('animation').eq(index-1).addClass('animation');

            //把用jQuery加的动画效果复原
            // $('.section2 img').attr('style','');

            //因为我们自己的写的html里面的div和img，绝对都没加过行内的样式，能加行内样式绝对是jQuery动画加的
            //所以只要去掉行内的样式，就代表复原了
            $('.section2 .search').attr('src','images/02/search01.png');

            $('.section>div div').attr('style','');
            $('.section>div img').attr('style','');

            if( index == 2 ){

                //如果是第二屏
                //移动搜索框
                $('.section2 .search').animate({

                    marginLeft:-100

                },1000,'easeOutBack',function(){
                    
                    // 注意：虽然现在在JS里，但是它用jQuery设置属性时，是设置在行内的，所以路径应该用html文件的相对路径
                    $('.section2 .search').attr('src','images/02/search02.png');

                    //然后把搜索框移动到右上角
                    $('.section2 .search').delay(500).animate({

                        marginLeft:130,
                        bottom:450,
                        width:148,
                        height:30
                    },1000);

                    //放大沙发
                    $('.section2 .sofas').delay(500).animate({

                        width:441,
                    },1000);

                });
            
            }else if(index == 4){

                //移动购物小车
                $('.section4 .carBox').animate({

                    marginLeft:1000,

                },2500,'easeInElastic',function(){

                    //当小车移动完毕就让键盘显示出来
                    $('.section4 .keyboard').animate({
                        opacity:1
                    },1000);
                });
            }else if(index == 6){

                //快递盒掉下来
                $('.section6 .bag').animate({

                    bottom:105

                },2000,function(){

                    //等盒子掉下来就让车开动
                    $('.section6 .street').animate({

                        backgroundPositionX: -1200

                    },2500,function(){

                        //当车停下来让人出来
                        $('.section6 .man').animate({

                            height:140

                        },1000,function(){

                            //人出来后往右走
                            $('.section .man').animate({
                                right:-130
                            },1000,function(){

                                //人出来后，门显示
                                $('.section6 .door').show();
                                
                                //延迟执行
                                setTimeout(function(){

                                    //小女孩显示
                                    $('.section6 .girl').show();
                                },500);
                             
                                
                            });
                        });

                    });

                });
                
            }


            //给第八屏加鼠标移入事件
            $('.section8').mousemove(function(e){

                var x = e.clientX - 65;
                var y = e.clientY - 10;

                // console.log(x,y);

                $('.section8 .hand').css('left',x);
                $('.section8 .hand').css('top',y);
                
            });


            $('.section8 .again').click(function(){

                // location.reload();
                // 固定写法，写几就代表回到第几屏
                $.fn.fullpage.moveTo(1);
            });
        }
    });
})