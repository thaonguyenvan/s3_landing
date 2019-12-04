// $(".re-close-popup2").click(function () {
//     $('.popup-re-call2').hide();
//     $('.input-content2').show();
//     $('.success-conten2').hide();

//     $('.request_phone2').val('');
//     $('.request_name2').val('');
//     $('.request_email2').val('');

//     $('.request_phone2').css('background', 'none');
//     $('.request_name2').css('background', 'none');
//     $('.request_email2').css('background', 'none');

//     $('.phone_error2').hide().html('');
//     $('.name_error2').hide().html('');
//     $('.email_error2').hide().html('');
// });

$('.re-call').click(function () {
    $('.popup-re-call').show();
});

$(document).on('click', '.re-close-popup', function () {
    $('.request_phone1').val('');
    $('.request_name1').val('');
    $('.request_email1').val('');

    $('.popup-re-call').hide();
    $('.input-content').show();
    $('.success-conten').hide();

    $('.request_phone').val('');
    $('.request_name').val('');
    $('.request_email').val('');
    $('.request_content').val('');


    $('.request_phone').css('background', 'none');
    $('.request_name').css('background', 'none');
    $('.request_email').css('background', 'none');

    $('.phone_error').hide().html('');
    $('.name_error').hide().html('');
    $('.email_error').hide().html('');
});
$(document).on('click', '.re-close', function () {
    $('.cus-re-call').hide();
});
$(document).on('click', '.send-go', function () {
    var request_phone = $('.request_phone').val();
    var request_content = $('.request_content').val();
    var request_location = $("input:radio[name ='request_locationx']:checked").val();
    $('.request_phone').css('background', 'none');
    $('.request_content').css('background', 'none');
    $('.phone_error').hide().html('');
    $('.content_error').hide().html('');
    if (request_phone == '' || request_phone == undefined) {
        $('.request_phone').focus();
        $('.request_phone').css('background', '#eeccce');
        $('.phone_error').show().html('Mời nhập số điện thoại.');
        return false;
    }
    if (!check_phone(request_phone)) {
        $('.request_phone').focus();
        $('.request_phone').css('background', '#eeccce');
        $('.phone_error').show().html('Số điện thoại nhập vào không hợp lệ.');
        return false;
    }
    if (request_content == '' || request_content == undefined) {
        $('.request_content').focus();
        $('.request_content').css('background', '#eeccce');
        $('.content_error').show().html('Mời nhập nội dung mà bạn cần tư vấn.');
        return false;
    }

    $.ajax({
        type: "POST",
        //url: "http://localhost/php/send_noti.php",
        url: "https://cloud365.vn/php/send_noti_storage.php",
        data: {
            phone: request_phone,
            req_location: request_location,
            content: request_content,
            cloudcall: "Yêu cầu gọi lại Cloud Storage",
            url_regist: "smartstorage.cloud",
        },

        beforeSend: function (xhr) {
            $('.error_send').show().html('<img src="https://nhanhoa.com/templates/images/icon/icon-loading-bar1.gif"/>');
            $('.js_submit').hide();
        },
        success: function (resource) {
            console.log(resource)
            if (resource == 1) {
                $('.input-content').hide();
                $('.success-conten').show();
                $('.error_send').hide();
                $('.js_submit').show();
                setTimeout(function () {
                    $('.re-close-popup').trigger('click');
                }, 5000);
            } else {
                $('.error_send').show().html('<span style="color:red">Gửi yêu cầu thất bại, vui lòng gửi lại!</span>');
                $('.js_submit').show();
                setTimeout(function () {
                    $('.error_send').hide();
                }, 3000);
            }
        },
        error: function() { 
            $('.error_send').show().html('<span style="color:red">Gửi yêu cầu thất bại, vui lòng gửi lại!</span>');
            $('.js_submit').show();
            setTimeout(function () {
                $('.error_send').hide();
            }, 3000);
        }
        });
        

    // $.ajax({
    //     type: "POST",
    //     url: "https://nhanhoa.com/?site=board&view=add_request",
    //     data: {
    //         phone: request_phone,
    //         content: request_content,
    //         req_location: request_location,
    //     },
    //     beforeSend: function (xhr) {
    //         $('.error_send').show().html('<img src="' + site_root_domain + '/templates/images/icon/icon-loading-bar1.gif"/>');
    //         $('.js_submit').hide();
    //     },
    //     success: function (resource) {
    //         if (resource == 1) {
    //             $('.input-content').hide();
    //             $('.success-conten').show();
    //             $('.error_send').hide();
    //             $('.js_submit').show();
    //             setTimeout(function () {
    //                 $('.re-close-popup').trigger('click');
    //             }, 5000);
    //         } else {
    //             $('.error_send').show().html('<span style="color:red">Gửi yêu cầu thất bại, vui lòng gửi lại!</span>');
    //             $('.js_submit').show();
    //             setTimeout(function () {
    //                 $('.error_send').hide();
    //             }, 3000);
    //         }
    //     }
    // });
});
// $(".send-go2").click(function () {
//     var m = new Date();
//     var dateString = m.getUTCFullYear() +"/"+ (m.getUTCMonth()+1) +"/"+ m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds();

//     var request_phone = $('.request_phone2').val();
//     var request_name = $('.request_name2').val();
//     var request_email = $('.request_email2').val();

//     //dieupt09112016
//     var request_location = $("input:radio[name ='request_location2']:checked").val();
//     //
//     $('.request_phone2').css('background', 'none');
//     $('.request_content2').css('background', 'none');
//     $('.phone_error2').hide().html('');
//     $('.content_error2').hide().html('');

//     if (request_name == '' || request_name == undefined) {
//         $('.request_name2').focus();
//         $('.request_name2').css('background', '#eeccce');
//         $('.name_error2').show().html('Mời nhập Họ tên.');
//         return false;
//     }

//     if (request_email == '' || request_email == undefined) {
//         $('.request_email2').focus();
//         $('.request_email2').css('background', '#eeccce');
//         $('.email_error2').show().html('Mời nhập Email.');
//         return false;
//     }

//     if (!check_email(request_email)) {
//         $('.request_email2').focus();
//         $('.request_email2').css('background', '#eeccce');
//         $('.email_error2').show().html('Email nhập vào không hợp lệ.');
//         return false;
//     }

//     if (request_phone == '' || request_phone == undefined) {
//         $('.request_phone2').focus();
//         $('.request_phone2').css('background', '#eeccce');
//         $('.phone_error2').show().html('Mời nhập Số điện thoại.');
//         return false;
//     }
//     if (!check_phone(request_phone)) {
//         $('.request_phone2').focus();
//         $('.request_phone2').css('background', '#eeccce');
//         $('.phone_error2').show().html('Số điện thoại nhập vào không hợp lệ.');
//         return false;
//     }

//     var service = "Dùng thử VPS";
//     var url_regist = "https://cloud365.vn/";


//     $.ajax({
//         type: "POST",
//         url: "https://cloud365.vn/php/send_noti.php",
//         data: {
//             name: request_name,
//             phone: request_phone,
//             email: request_email,
//             req_location: request_location,
//             cloudcall: service,
//             url_regist: url_regist,
//         },

//         beforeSend: function (xhr) {
//             $('.error_send').show().html('<img src="https://nhanhoa.com/templates/images/icon/icon-loading-bar1.gif"/>');
//             $('.js_submit').hide();
//         },
//         success: function (resource) {
//             if (resource != 0) {
//                 $('.input-content2').hide();
//                 $('.success-conten2').show();
//                 $('.error_send2').hide();
//                 $('.js_submit2').show();
//                 setTimeout(function () {
//                     $('.re-close-popup2').trigger('click');
//                 }, 5000);

//             } else {
//                 $('.error_send2').show().html('<span style="color:red">Lỗi khi gửi yêu cầu!</span>');
//                 $('.js_submit2').show();
//                 setTimeout(function () {
//                     $('.error_send2').hide();
//                 }, 3000);

//             }
//         }
//     });

//     $.ajax({
//         url: "https://script.google.com/macros/s/AKfycbwbYRLUM0Fn8XCFW8O7gVVwGefACIkij3GkxYQlxD-Vsfzcwao/exec",
//         method: "GET",
//         dataType: "json",
//         data: {
//             time: dateString,
//             name: request_name,
//             phone: request_phone,
//             email: request_email,
//             req_location: request_location,
//             cloudcall: service,
//             url_regist: url_regist,
//         },
//       }).success(
//         console.log('success')
//       );
    

// });


// function check_email(str)
// {
// var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// return emailPattern.test(str);
// }

function check_phone(str)
{
var error = "";
var stripped = str.replace(/[\(\)\.\-\ ]/g, '');

if (str == "")
{
    return false;
} else if (str.length < 8)
{
    return false;
} else if (isNaN(stripped) == true)
{
    return false;
} else if (stripped.length > 12 && stripped.substr(0, 1) != "+")
{
    return false;
} else if (stripped.length > 13 && stripped.substr(0, 1) == "+")
{
    return false;
}

return true;
}
