$(function() {

	//登录
		$(".login").click(function(){
			window.location.href='my_investigation.html'
		});
	//头部栏目点击效果
	//select点击效果
    $("select").focus(function(){
            $(this).parent().find('span').css({'transform': 'rotate(180deg)','-ms-transform': 'rotate(180deg)','-moz-transform': 'rotate(180deg)','-webkit-transform': 'rotate(180deg)'});
    });

    $("select").blur(function(){
        $(this).parent().find('span').css({'transform': 'rotate(0deg)','-ms-transform': 'rotate(0deg)','-moz-transform': 'rotate(0deg)','-webkit-transform': 'rotate(0deg)'});

        console.log(456)



    });

	// var selectnum = 1;
	// $(".select-box").click(function() {
     //    $(this).siblings().find('span').css('transform', 'rotate(0)');
	// 	if(selectnum == 1) {
	// 		$(this).find('span').css({'transform': 'rotate(180deg)','-ms-transform': 'rotate(180deg)','-moz-transform': 'rotate(180deg)','-webkit-transform': 'rotate(180deg)'});
	// 		selectnum = 2;
	// 	} else {
	// 		$(this).find('span').css({'transform': 'rotate(0deg)','-ms-transform': 'rotate(0deg)','-moz-transform': 'rotate(0deg)','-webkit-transform': 'rotate(0deg)'});
	// 		selectnum = 1;
	// 	}
	// });
	$(function() {
		$(document).bind("click", function(e) {
			if($(e.target).closest(".select-box").length > 0) {

			} else {
				$('.down').css({'transform': 'rotate(0deg)','-ms-transform': 'rotate(0deg)','-moz-transform': 'rotate(0deg)','-webkit-transform': 'rotate(0deg)'});
			}
		});
	});
	var unSelected = "#999";
    var selected = "#333";
	$("select").change(function () {
            var selItem = $(this).val();
            if (selItem == $(this).find('option:first').val()) {
                $(this).css("color", unSelected);
            } else {
                $(this).css("color", selected);
            }
        });
	//我的调查窗体事件
	$(".next").click(function() {
		$(".my-infwindow").hide();
		$(".my-infwindow1").show();
	});
	$(".finish").click(function() {
		$(".my-infwindow1").hide();
		$(".layer").hide();
	});
	$(".jump").click(function() {
		$(".my-infwindow1").hide();
		$(".layer").hide();
	});
	//	个人信息提示文字的出现和隐藏
	$(".alipay").click(function() {
		$(".withdrawal").show();
		$(".bound-wrap").show();
		$(".alipay-bound").show();
		$(".bank-bound").hide();
		$(".bd").val('已绑定的支付宝');
	});
	$(".bank_card").click(function() {
		$(".withdrawal").show();
		$(".bound-wrap").show();
		$(".bank-bound").show();
		$(".alipay-bound").hide();
		$(".bd").val('已绑定的银行卡');
	});
	$(".box-top .icon-qm").mouseover(function() {
		$(".jfprompt-words").show();
	});
	$(".box-top .icon-qm").mouseout(function() {
		$(".jfprompt-words").hide();
	});

	$(".email .icon-qm").mouseover(function() {
		$(".email-pw").show();
	});
	$(".email .icon-qm").mouseout(function() {
		$(".email-pw").hide();
	});

	$(".mobile .icon-qm").mouseover(function() {
		$(".mobile-pw").show();
	});
	$(".mobile .icon-qm").mouseout(function() {
		$(".mobile-pw").hide();
	});

	$(".number1 .icon-qm").mouseover(function() {
		$(".number-pw1").show();
	});
	$(".number1 .icon-qm").mouseout(function() {
		$(".number-pw1").hide();
	});
	$(".number2 .icon-qm").mouseover(function() {
		$(".number-pw2").show();
	});
	$(".number2 .icon-qm").mouseout(function() {
		$(".number-pw2").hide();
	});
	//积分详情
	var num = 1;
	$(".redgo").click(function() {
		if(num == 1) {
			$(".spending").css('padding-bottom', '570px');
		} else {
			window.location.hash = "#anb";
		}
	});
	//	公益之路提示文字和捐赠数量弹窗的出现和隐藏
	$(".article-but .yellow").click(function() {
		$(".layer").show();
		$(".donation-widow").show();
	});
	$(".donation-but .gray").click(function() {
		$(".layer").hide();
		$(".donation-widow").hide();
	});
	$(".donation-but .red").click(function() {
		$(".layer").hide();
		$(".donation-widow").hide();
	});

	$(".pw-top .icon-qm").mouseover(function() {
		$(".pub-pw").show();
	});
	$(".pw-top .icon-qm").mouseout(function() {
		$(".pub-pw").hide();
	});

	$(".pw-top .icon-qm").mouseover(function() {
		$(".details-pw").show();
	});
	$(".pw-top .icon-qm").mouseout(function() {
		$(".details-pw").hide();
	});

	$(".article-but .icon-qm").mouseover(function() {
		$(".article-pw").show();
	});
	$(".article-but .icon-qm").mouseout(function() {
		$(".article-pw").hide();
	});

	$(".way-top .icon-qm").mouseover(function() {
		$(".way-pw").show();
	});
	$(".way-top .icon-qm").mouseout(function() {
		$(".way-pw").hide();
	});

	$(".wx-but .icon-qm").mouseover(function() {
		$(".wx-pw").show();
	});
	$(".wx-but .icon-qm").mouseout(function() {
		$(".wx-pw").hide();
	});

	//问卷提示文字的出现及隐藏
	$(".que-jf .icon-qm").mouseover(function() {
		$(".que-pw").show();
	});
	$(".que-jf .icon-qm").mouseout(function() {
		$(".que-pw").hide();
	});

	$(".fail-title .icon-qm").mouseover(function() {
		$(".fail-title-pw").show();
	});
	$(".fail-title .icon-qm").mouseout(function() {
		$(".fail-title-pw").hide();
	});
	//移动端菜单事件
	$(".meana").click(function() {
		$(this).hide();
		$(".status").hide();
		$(".close").show();
		$(".layer").show().css('top', '1.4rem');
		$(".box").css('top', '1.4rem');
		$(".header-message").show();
	});
	$(".close").click(function() {
		$(this).hide();
		$(".meana").show();
		$(".status").show();
		$(".layer").hide().css('top', '0');
		$(".box").css('top', '.7rem');
		$(".header-message").hide();
	});
	$("#captcha").mouseover(function() {
		$("canvas").show();
		$(".refreshIcon").show();
	});
	$("#captcha").mouseout(function() {
		$("canvas").hide();
		$(".refreshIcon").hide();
	});
	//积分兑换
	$(".change").click(function() {
		$(".pay-way").show();
	});
	$(".cancel").click(function() {
		$(".pay-way").hide();
	});

	$(".cut").click(function() {
		var num = $("#number").val();
		if(num == 0) {
			$("#number").val(0)
		} else {
			num = num - 10;
			$("#number").val(num)
		}
	});
	$(".add").click(function() {
		var num = parseInt($("#number").val());
		num = num + 10;
		$("#number").val(num)
	});
// 验证手机号
function checkPhone(){ 
    var phone = document.getElementById('phone').value;
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){ 
//      alert("手机号码有误，请重填"); 
		$(".mobile").removeClass('bound');
        $(".red-text").show();
        return false; 
    }
    else{
    	$(".mobile").addClass('bound');
    	$(".red-text").hide();
    }
}
$('#save').on('click', function() {
 	checkPhone();
});
//站内信点击效果
	var dic = new Array();
	window.onload=function(){
		var led=$("#let").children().length;
		for(i=0;i<led;i++){
			dic[i]=false;
		}
		// console.log(dic);
	}
	
	$(".letter-top").click(function() {
		var idx=$('#let>div').index($(this).parent());
		if(dic[idx] == false) {
			$(this).find('span:last-of-type').css({'transform': 'rotate(180deg)','-ms-transform': 'rotate(180deg)','-moz-transform': 'rotate(180deg)','-webkit-transform': 'rotate(180deg)'});
			$(this).parent().find('div:last-of-type').css('display','block')
			$(this).addClass('letter-top-unread')
			dic[idx] = true
		} else {
			$(this).find('span:last-of-type').css({'transform': 'rotate(0deg)','-ms-transform': 'rotate(0deg)','-moz-transform': 'rotate(0deg)','-webkit-transform': 'rotate(0deg)'});
			$(this).parent().find('div:last-of-type').css('display','none')
			dic[idx] = false
		}
		console.log(dic);
	});
	
});

(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth >= 414 && clientWidth <= 750) {
				docEl.style.fontSize = '100px';
			} else if(clientWidth > 750) {
				docEl.style.fontSize = '14px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 414) + 'px';
			}
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//动态设置rem

if($('.bank-bound select').val() == false){
	$('.bank-bound select').css('color','#999');
}
