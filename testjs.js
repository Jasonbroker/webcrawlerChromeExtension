var loginModule={
	init:function(){this.initState(),
					this.bindEvent()},
	initState:function(){
		Login_NS.loginTimeout(),Login_NS.winResize();
		var e=new lufax.ui.DetectCapsLock($("#pwd"));
		e.init(),Login_NS.getLoginSwitchValue("loginswitch"),
		window.loginSwitchPrompt="用户名"==$("#loginSwitchValue").val()?"请填写用户名":"请填写手机号码";
		try{IframeCrossDomain_NS.checkRequestFrom(),IframeCrossDomain_NS.isFromIframe&&$("#registerFromLoginDiv").attr("href","register?type=iframe&fromDomain="+encodeURIComponent(IframeCrossDomain_NS.fromDomain))}catch(i){console.log("cross domain callback status error..."),console.log(i)
	}
	this.initForm(),Login_NS.changeCaptcha(!1,!0),$("#errorMessageInfo").val()&&$(".errorTips").css("display","block");var a=Math.floor(3*Math.random())+1,o=$("#background_img"+a).val();$(".login-wrap").css("background-image",'url("'+o+'")');var n=$("#userNameLogin").val();n.length>0?$(".place-holder").addClass("hidden"):$(".place-holder").removeClass("hidden")},
	initForm:function(){
			jQuery.validator.addMethod("checkCaptcha",Login_NS.checkCaptcha,Login_NS.checkCaptchaErrorMsg),$("#loginForm").validate({onfocusout:!1,focusInvalid:!1,onkeyup:!1,submitHandler:function(e){$(e).submit()},rules:{userName:{required:!0},pwd:{required:!0},validNum:{required:!0,checkCaptcha:!0},loginagree:{required:!0}},ignore:".hidden",messages:{userName:{required:loginSwitchPrompt},pwd:{required:"请填写登录密码"},validNum:{required:"请填写验证码"},loginagree:{required:"请勾选协议"}},unhighlight:function(e,i){this.errorList&&0!=this.errorList.length||Login_NS.removeErrors(e.id)},highlight:function(e,i,a){var o=this.errorList[0];Login_NS.showErrors(o.message,o.element.id)},invalidHandler:function(e,i){var a=i.numberOfInvalids();if(a){var o=i.errorList[0];Login_NS.showErrors(o.message,o.element.id)}},errorPlacement:function(e,i){}});var e=lufax.util.getUnameFromCookie,i=lufax.util.getMobileFromCookie;i?($("#userNameLogin").val(i),Login_NS.isMobileNo(i)?(Login_NS.changeTab("mobile"),$("#loginSwitchValue").val("手机号"),$("#loginForm").validate().settings.messages.userName.required="请填写手机号码"):(Login_NS.changeTab("userName"),$("#loginSwitchValue").val("用户名"),$("#loginForm").validate().settings.messages.userName.required="请填写用户名"),Login_NS.doCheckUser(),$("#pwd").focus()):e?($("#userNameLogin").val(e),Login_NS.isMobileNo(e)?(Login_NS.changeTab("mobile"),$("#loginSwitchValue").val("手机号"),$("#loginForm").validate().settings.messages.userName.required="请填写手机号码"):(Login_NS.changeTab("userName"),$("#loginSwitchValue").val("用户名"),$("#loginForm").validate().settings.messages.userName.required="请填写用户名"),Login_NS.doCheckUser(),$("#pwd").focus()):$("#userNameLogin").focus()},bindEvent:function(){Login_NS.login(),Login_NS.blurUserName(),$("#validNum").bind("keyup",function(e){return 13!=e.keyCode&&void($(this).val().length>=4&&(Login_NS.isCheckAjaxVCodeOk=!1,$(this).valid()))}),$("#userNameLoginOnlyButton").live("click",function(){$("#loginSwitchValue").val("用户名"),$("#loginFlagValue").val("")}),$(".form_checkbox").click(function(){var e=$(this).find("a").hasClass("checked");e?($("#loginBtn").addClass("disabled"),$("#loginBtn").unbind()):($("#loginBtn").removeClass("disabled"),Login_NS.login())}),$("#userNameLogin,#pwd,#validNum").blur(function(){var e=$.trim($(this).val());""!==e&&e!==$(this).attr("data-placeholder")&&$(this).valid()}).keydown(function(e){13==e.keyCode&&$("#loginBtn").click()}),$("#validNum").focus(function(){Login_NS.isCheckAjaxVCodeOk=!1,$("#validNum").siblings(".icon").removeClass("correctCircleIcon").removeClass("failureCircleIcon"),$(".errorTips").slideUp("fast")}),$("#changeCaptchaLink, #validateImg").click(function(){Login_NS.changeCaptcha(!0)}),$(window).resize(function(){Login_NS.winResize()}),$("#userNameLogin").bind("keyup",function(){var e=$("#userNameLogin").val();e.length>0&&e.trim()!=$("#loginSwitchValue").val()?$(".place-holder").addClass("hidden"):$(".place-holder").removeClass("hidden")}),$(".place-holder").click(function(){$("#userNameLogin").focus()}),$(".login-tab").click(function(){var e=$(this).attr("data-role");"mobile"==e?($("#loginForm").validate().settings.messages.userName.required="请填写手机号码",$("#userNameLogin").attr("data-placeholder","手机号"),$(".place-holder").html("手机号"),$('.login-tab[data-role="userName"]').removeClass("active"),$("#forgetUserName").length>0&&$("#forgetUserName").css("display","none"),$(this).addClass("active"),$("#loginSwitchValue").val("手机号"),$("#loginFlagValue").val("2"),$("#iconView").removeClass("user").addClass("mobile")):"userName"==e&&($("#loginForm").validate().settings.messages.userName.required="请填写用户名",$("#userNameLogin").attr("data-placeholder","用户名"),$(".place-holder").html("用户名"),$("#forgetUserName").length>0&&$("#forgetUserName").css("display",""),$('.login-tab[data-role="mobile"]').removeClass("active"),$("#loginSwitchValue").val("用户名"),$(this).addClass("active"),$("#loginFlagValue").val(""),$("#iconView").removeClass("mobile").addClass("user"))})}};$(function(){loginModule.init()})var loginModule = {
    init: function() {
        this.initState(),
        this.bindEvent()
    },
    initState: function() {
        Login_NS.loginTimeout(),
        Login_NS.winResize();
        var e = new lufax.ui.DetectCapsLock($("#pwd"));
        e.init(),
        Login_NS.getLoginSwitchValue("loginswitch"),
        window.loginSwitchPrompt = "用户名" == $("#loginSwitchValue").val() ? "请填写用户名": "请填写手机号码";
        try {
            IframeCrossDomain_NS.checkRequestFrom(),
            IframeCrossDomain_NS.isFromIframe && $("#registerFromLoginDiv").attr("href", "register?type=iframe&fromDomain=" + encodeURIComponent(IframeCrossDomain_NS.fromDomain))
        } catch(i) {
            console.log("cross domain callback status error..."),
            console.log(i)
        }
        this.initForm(),
        Login_NS.changeCaptcha(!1, !0),
        $("#errorMessageInfo").val() && $(".errorTips").css("display", "block");
        var a = Math.floor(3 * Math.random()) + 1,
        o = $("#background_img" + a).val();
        $(".login-wrap").css("background-image", 'url("' + o + '")');
        var n = $("#userNameLogin").val();
        n.length > 0 ? $(".place-holder").addClass("hidden") : $(".place-holder").removeClass("hidden")
    },
    initForm: function() {
        jQuery.validator.addMethod("checkCaptcha", Login_NS.checkCaptcha, Login_NS.checkCaptchaErrorMsg),
        $("#loginForm").validate({
            onfocusout: !1,
            focusInvalid: !1,
            onkeyup: !1,
            submitHandler: function(e) {
                $(e).submit()
            },
            rules: {
                userName: {
                    required: !0
                },
                pwd: {
                    required: !0
                },
                validNum: {
                    required: !0,
                    checkCaptcha: !0
                },
                loginagree: {
                    required: !0
                }
            },
            ignore: ".hidden",
            messages: {
                userName: {
                    required: loginSwitchPrompt
                },
                pwd: {
                    required: "请填写登录密码"
                },
                validNum: {
                    required: "请填写验证码"
                },
                loginagree: {
                    required: "请勾选协议"
                }
            },
            unhighlight: function(e, i) {
                this.errorList && 0 != this.errorList.length || Login_NS.removeErrors(e.id)
            },
            highlight: function(e, i, a) {
                var o = this.errorList[0];
                Login_NS.showErrors(o.message, o.element.id)
            },
            invalidHandler: function(e, i) {
                var a = i.numberOfInvalids();
                if (a) {
                    var o = i.errorList[0];
                    Login_NS.showErrors(o.message, o.element.id)
                }
            },
            errorPlacement: function(e, i) {}
        });
        var e = lufax.util.getUnameFromCookie,
        i = lufax.util.getMobileFromCookie;
        i ? ($("#userNameLogin").val(i), Login_NS.isMobileNo(i) ? (Login_NS.changeTab("mobile"), $("#loginSwitchValue").val("手机号"), $("#loginForm").validate().settings.messages.userName.required = "请填写手机号码") : (Login_NS.changeTab("userName"), $("#loginSwitchValue").val("用户名"), $("#loginForm").validate().settings.messages.userName.required = "请填写用户名"), Login_NS.doCheckUser(), $("#pwd").focus()) : e ? ($("#userNameLogin").val(e), Login_NS.isMobileNo(e) ? (Login_NS.changeTab("mobile"), $("#loginSwitchValue").val("手机号"), $("#loginForm").validate().settings.messages.userName.required = "请填写手机号码") : (Login_NS.changeTab("userName"), $("#loginSwitchValue").val("用户名"), $("#loginForm").validate().settings.messages.userName.required = "请填写用户名"), Login_NS.doCheckUser(), $("#pwd").focus()) : $("#userNameLogin").focus()
    },
    bindEvent: function() {
        Login_NS.login(),
        Login_NS.blurUserName(),
        $("#validNum").bind("keyup",
        function(e) {
            return 13 != e.keyCode && void($(this).val().length >= 4 && (Login_NS.isCheckAjaxVCodeOk = !1, $(this).valid()))
        }),
        $("#userNameLoginOnlyButton").live("click",
        function() {
            $("#loginSwitchValue").val("用户名"),
            $("#loginFlagValue").val("")
        }),
        $(".form_checkbox").click(function() {
            var e = $(this).find("a").hasClass("checked");
            e ? ($("#loginBtn").addClass("disabled"), $("#loginBtn").unbind()) : ($("#loginBtn").removeClass("disabled"), Login_NS.login())
        }),
        $("#userNameLogin,#pwd,#validNum").blur(function() {
            var e = $.trim($(this).val());
            "" !== e && e !== $(this).attr("data-placeholder") && $(this).valid()
        }).keydown(function(e) {
            13 == e.keyCode && $("#loginBtn").click()
        }),
        $("#validNum").focus(function() {
            Login_NS.isCheckAjaxVCodeOk = !1,
            $("#validNum").siblings(".icon").removeClass("correctCircleIcon").removeClass("failureCircleIcon"),
            $(".errorTips").slideUp("fast")
        }),
        $("#changeCaptchaLink, #validateImg").click(function() {
            Login_NS.changeCaptcha(!0)
        }),
        $(window).resize(function() {
            Login_NS.winResize()
        }),
        $("#userNameLogin").bind("keyup",
        function() {
            var e = $("#userNameLogin").val();
            e.length > 0 && e.trim() != $("#loginSwitchValue").val() ? $(".place-holder").addClass("hidden") : $(".place-holder").removeClass("hidden")
        }),
        $(".place-holder").click(function() {
            $("#userNameLogin").focus()
        }),
        $(".login-tab").click(function() {
            var e = $(this).attr("data-role");
            "mobile" == e ? ($("#loginForm").validate().settings.messages.userName.required = "请填写手机号码", $("#userNameLogin").attr("data-placeholder", "手机号"), $(".place-holder").html("手机号"), $('.login-tab[data-role="userName"]').removeClass("active"), $("#forgetUserName").length > 0 && $("#forgetUserName").css("display", "none"), $(this).addClass("active"), $("#loginSwitchValue").val("手机号"), $("#loginFlagValue").val("2"), $("#iconView").removeClass("user").addClass("mobile")) : "userName" == e && ($("#loginForm").validate().settings.messages.userName.required = "请填写用户名", $("#userNameLogin").attr("data-placeholder", "用户名"), $(".place-holder").html("用户名"), $("#forgetUserName").length > 0 && $("#forgetUserName").css("display", ""), $('.login-tab[data-role="mobile"]').removeClass("active"), $("#loginSwitchValue").val("用户名"), $(this).addClass("active"), $("#loginFlagValue").val(""), $("#iconView").removeClass("mobile").addClass("user"))
        })
    }
};
$(function() {
    loginModule.init()
});