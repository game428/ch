var formData ={
	"version":[{
		"code":"version","name":"201712111618"
	}],
	"status": [
		{"code":"1", "name": "激活状态"},
		{"code":"2", "name": "未激活"},
		{"code":"3", "name": "禁用"},
		{"code":"4", "name": "删除"}
	],
	"vision":[
		{"code":"1","name":"0.1"},
		{"code":"2","name":"0.12"},
		{"code":"3","name":"0.15"},
		{"code":"4","name":"0.2"},
		{"code":"5","name":"0.25"},
		{"code":"6","name":"0.3"},
		{"code":"7","name":"0.4"},
		{"code":"8","name":"0.5"},
		{"code":"9","name":"0.6"},
		{"code":"10","name":"0.8"},
		{"code":"11","name":"1.0"},
		{"code":"12","name":"1.2"},
		{"code":"13","name":"1.5"},
		{"code":"14","name":"2.0"}
	],
	"resumeQaTime":[
		{"code":"min","name":"15"},
		{"code":"max","name":"120"}
	],
	"launchImage":[
		{"code":"0","name":"无"},
		{"code":"1","name":"内链接"},
		{"code":"2","name":"外链接"},
		{"code":"3","name":"职位"},
		{"code":"4","name":"公司"},
		{"code":"5","name":"文本"}
	],
	"live_room_resume_status":[
		{"code":"1","name":"等待面试"},
		{"code":"2","name":"面试完成"},
		{"code":"3","name":"连接失败"},
		{"code":"4","name":"取消面试"}
	],
	"live_room_status":[
		{"code":"1","name":"未开始"},
		{"code":"2","name":"正在进行"},
		{"code":"3","name":"提前结束"},
		{"code":"4","name":"已结束"},
		{"code":"5","name":"已取消"}
	],
	"work_area":[
		{"code":"1","name":"头等舱"},
		{"code":"2","name":"商务舱"},
		{"code":"3","name":"经济舱"},
		{"code":"4","name":"无"}
	],
	"height_job2":[
		{"code":"1","name":"乘务员"},
		{"code":"2","name":"乘务长"},
		{"code":"3","name":"无"}
	],
	"height_job":[
		{"code":"1","name":"学员"},
		{"code":"2","name":"副驾驶"},
		{"code":"3","name":"机长"},
		{"code":"4","name":"无"}
	],
	"default_yes_no":[
		{"code":"0","name":"无"},
		{"code":"1","name":"有"}
	],
	"icao":[
		{"code":"1","name":"2级"},
		{"code":"2","name":"3级"},
		{"code":"3","name":"4级"},
		{"code":"4","name":"5级"},
		{"code":"5","name":"6级"},
		{"code":"6","name":"无"}
	],
	"atpl":[
		{"code":"0","name":"0次"},
		{"code":"1","name":"1次"},
		{"code":"2","name":"2次"},
		{"code":"3","name":"3次"},
		{"code":"4","name":"4次"},
		{"code":"5","name":"4次以上"}
	],
	"atpl_condition":[
		{"code":"0","name":"0次"},
		{"code":"1","name":"1次及以内"},
		{"code":"2","name":"2次及以内"},
		{"code":"3","name":"3次及以内"},
		{"code":"4","name":"4次及以内"},
		{"code":"5","name":"4次以上"}
	],
	"news_type":[
		{"code":"1","name":"左文右图"},
		{"code":"2","name":"大图"},
		{"code":"3","name":"多图"},
		{"code":"4","name":"视频"}
	],
	"news_theme":[
		{"code":"1","name":"文本"},
		{"code":"2","name":"图片"},
		{"code":"3","name":"视频"}
	],
	"receive_type":[
		{"code":"3","name":"CA 用户"},
		{"code":"4","name":"HR 用户"}
	],
	"banner":[
		{"code":"1","name":"内链接"},
		{"code":"2","name":"外链接"},
		{"code":"3","name":"职位"},
		{"code":"4","name":"公司"},
		{"code":"5","name":"文本"}
	],
	"wages":[
		{"code":"1","name":"2-5K"},
		{"code":"2","name":"5-10K"},
		{"code":"3","name":"10-20K"},
		{"code":"4","name":"20K以上"},
		{"code":"5","name":"行业水平"}
	],
	"overVoteStatusEnum":[
		{"code":"1","name":"未查看"},
		{"code":"2","name":"已查看"},
		{"code":"3","name":"邀请面试"},
		{"code":"4","name":"不合适"},
		{"code":"5","name":"待评审"},
		{"code":"6","name":"所有"}
	],
	"userDeliveryState":[
		{"code":"1","name":"已投递"},
		{"code":"2","name":"已查看"},
		{"code":"3","name":"邀请面试"},
		{"code":"4","name":"不合适"},
		{"code":"5","name":"待评审"},
		{"code":"6","name":"所有"}
	],
  "reservationState":[
    {"code":"0","name":"未确认"},
    {"code":"1","name":"已接受"},
    {"code":"2","name":"已拒绝"},
    {"code":"3","name":"所有"}
  ],
	"userIdentityEnum":[
		{"code":"1","name":"管理员"},
		{"code":"2","name":"主账号"},
		{"code":"3","name":"子账号"},
		{"code":"4","name":"用户"}
	],
	"userStatus":[
		{"code":"1","name":"已激活"},
		{"code":"2","name":"未激活"},
		{"code":"3","name":"禁用"}
	],
	"favoriteType":[
		{"code":"1","name":"工作"},
		{"code":"2","name":"公司"},
		{"code":"3","name":"资讯"},
		{"code":"4","name":"简历"}
	],
	"fleet_size":[
		{"code":"1","name":"1-30架"},
		{"code":"2","name":"30-99架"},
		{"code":"3","name":"100架以上"}
	],
	"character":[
		{"code":"1","name":"央企"},
		{"code":"2","name":"国企"},
		{"code":"3","name":"民企"},
		{"code":"4","name":"外企"}
	],
	"english":[
		{"code":"1201","name":"一般"},
		{"code":"1202","name":"CET-4"},
		{"code":"1203","name":"CET-6"},
		{"code":"1204","name":"专四"},
		{"code":"1205","name":"专八"}
	],
	"mandarin":[
		{"code":"1101","name":"一般"},
		{"code":"1102","name":"流利"}
	],
	"language":[
		{"code":"1100","name":"普通话","level":[
			{"code":"1101","name":"一般"},
			{"code":"1102","name":"流利"}
		]},
		{"code":"1200","name":"英语","level":[
			{"code":"1201","name":"一般"},
			{"code":"1202","name":"CET-4"},
			{"code":"1203","name":"CET-6"},
			{"code":"1204","name":"专四"},
			{"code":"1205","name":"专八"}
		]}
	],
    "userCert":[
      {"code":"1","name":"登记中"},
      {"code":"4","name":"已登记"},
      {"code":"8","name":"登记失败"}
    ],
	"gender":[
		{"code":"1","name":"男"},
		{"code":"2","name":"女"}
	],
	"wedding":[
		{"code":"1","name":"已婚"},
		{"code":"2","name":"未婚"},
		{"code":"3","name":"离异"},
		{"code":"4","name":"丧偶"}
	],
	"cartype":[
		{"code":"1","name":"身份证"}
	],
	"education":[
		{"code":"1","name":"小学及以下"},
		{"code":"2","name":"初中"},
		{"code":"3","name":"高中"},
		{"code":"4","name":"中专"},
		{"code":"5","name":"专科"},
		{"code":"6","name":"本科"},
		{"code":"7","name":"硕士研究生"},
		{"code":"8","name":"博士研究生"},
		{"code":"9","name":"其他"}
	],
	"political":[
		{"code":"1","name":"中共党员"},
		{"code":"2","name":"中共预备党员"},
		{"code":"3","name":"共青团员"},
		{"code":"4","name":"民革党员"},
		{"code":"5","name":"民盟盟员"},
		{"code":"6","name":"民建会员"},
		{"code":"7","name":"民进会员"},
		{"code":"8","name":"农工党党员"},
		{"code":"9","name":"致公党党员"},
		{"code":"10","name":"九三学社社员"},
		{"code":"11","name":"台盟盟员"},
		{"code":"12","name":"无党派人士"},
		{"code":"13","name":"群众"}
	],
	"offerState":[
		{"code":"1","name":"在职"},
		{"code":"2","name":"离职"}
	],
	"offerExperience":[
		{"code":"1","name":"有经验"},
		{"code":"2","name":"无经验"}
	],
	"jobExperience":[
		{"code":"1","name":"需要经验"},
		{"code":"2","name":"无需经验"}
	],
	"ethnicity":[
		{"code":"1","name":"汉族"},{"code":"2","name":"蒙古族"},{"code":"3","name":"回族"},
		{"code":"4","name":"藏族"},{"code":"5","name":"维吾尔族"},{"code":"6","name":"苗族"},
		{"code":"7","name":"彝族"},{"code":"8","name":"壮族"},{"code":"9","name":"布依族"},
		{"code":"10","name":"朝鲜族"},{"code":"11","name":"满族"},{"code":"12","name":"侗族"},
		{"code":"13","name":"瑶族"},{"code":"14","name":"白族"},{"code":"15","name":"土家族"},
		{"code":"16","name":"哈尼族"},{"code":"17","name":"哈萨克族"},{"code":"18","name":"傣族"},
		{"code":"19","name":"黎族"},{"code":"20","name":"傈僳族"},{"code":"21","name":"佤族"},
		{"code":"22","name":"畲族"},{"code":"23","name":"高山族"},{"code":"24","name":"拉祜族"},
		{"code":"25","name":"水族"},{"code":"26","name":"东乡族"},{"code":"27","name":"纳西族"},
		{"code":"28","name":"景颇族"},{"code":"29","name":"柯尔克孜族"},{"code":"30","name":"土族"},
		{"code":"31","name":"达斡尔族"},{"code":"32","name":"仫佬族"},{"code":"33","name":"羌族"},
		{"code":"34","name":"布朗族"},{"code":"35","name":"撒拉族"},{"code":"36","name":"毛难族"},
		{"code":"37","name":"仡佬族"},{"code":"38","name":"锡伯族"},{"code":"39","name":"阿昌族"},
		{"code":"40","name":"普米族"},{"code":"41","name":"塔吉克族"},{"code":"42","name":"怒族"},
		{"code":"43","name":"乌孜别克族"},{"code":"44","name":"俄罗斯族"},{"code":"45","name":"鄂温克族"},
		{"code":"46","name":"崩龙族"},{"code":"47","name":"保安族"},{"code":"48","name":"裕固族"},
		{"code":"49","name":"京族"},{"code":"50","name":"塔塔尔族"},{"code":"51","name":"独龙族"},
		{"code":"52","name":"鄂伦春族"},{"code":"53","name":"赫哲族"},{"code":"54","name":"门巴族"},
		{"code":"55","name":"珞巴族"},{"code":"56","name":"基诺族"}
	],
	"year":[
		{"code":"1","name":"1971"},
		{"code":"2","name":"1972"},
		{"code":"3","name":"1973"},
		{"code":"4","name":"1974"},
		{"code":"5","name":"1975"},
		{"code":"6","name":"1976"},
		{"code":"7","name":"1977"},
		{"code":"8","name":"1978"},
		{"code":"9","name":"1979"},
		{"code":"10","name":"1980"},
		{"code":"11","name":"1981"},
		{"code":"12","name":"1982"},
		{"code":"13","name":"1983"},
		{"code":"14","name":"1984"},
		{"code":"15","name":"1985"},
		{"code":"16","name":"1986"},
		{"code":"17","name":"1987"},
		{"code":"18","name":"1988"},
		{"code":"19","name":"1989"},
		{"code":"20","name":"1990"},
		{"code":"21","name":"1991"},
		{"code":"22","name":"1992"},
		{"code":"23","name":"1993"},
		{"code":"24","name":"1994"},
		{"code":"25","name":"1995"},
		{"code":"26","name":"1996"},
		{"code":"27","name":"1997"},
		{"code":"28","name":"1998"},
		{"code":"29","name":"1999"},
		{"code":"30","name":"2000"},
		{"code":"31","name":"2001"},
		{"code":"32","name":"2002"},
		{"code":"33","name":"2003"},
		{"code":"34","name":"2004"},
		{"code":"35","name":"2005"},
		{"code":"36","name":"2006"},
		{"code":"37","name":"2007"},
		{"code":"38","name":"2008"},
		{"code":"39","name":"2009"},
		{"code":"40","name":"2010"},
		{"code":"41","name":"2011"},
		{"code":"42","name":"2012"},
		{"code":"43","name":"2013"},
		{"code":"44","name":"2014"},
		{"code":"45","name":"2015"},
		{"code":"46","name":"2016"},
		{"code":"47","name":"2017"},
		{"code":"48","name":"2018"}
	],
	month:[
		{"code":"1","name":"1"},
		{"code":"2","name":"2"},
		{"code":"3","name":"3"},
		{"code":"4","name":"4"},
		{"code":"5","name":"5"},
		{"code":"6","name":"6"},
		{"code":"7","name":"7"},
		{"code":"8","name":"8"},
		{"code":"9","name":"9"},
		{"code":"10","name":"10"},
		{"code":"11","name":"11"},
		{"code":"12","name":"12"}
	],
	date:[
		{"code":"1","name":"1"},
		{"code":"2","name":"2"},
		{"code":"3","name":"3"},
		{"code":"4","name":"4"},
		{"code":"5","name":"5"},
		{"code":"6","name":"6"},
		{"code":"7","name":"7"},
		{"code":"8","name":"8"},
		{"code":"9","name":"9"},
		{"code":"10","name":"10"},
		{"code":"11","name":"11"},
		{"code":"12","name":"12"},
		{"code":"13","name":"13"},
		{"code":"14","name":"14"},
		{"code":"15","name":"15"},
		{"code":"16","name":"16"},
		{"code":"17","name":"17"},
		{"code":"18","name":"18"},
		{"code":"19","name":"19"},
		{"code":"20","name":"20"},
		{"code":"21","name":"21"},
		{"code":"22","name":"22"},
		{"code":"23","name":"23"},
		{"code":"24","name":"24"},
		{"code":"25","name":"25"},
		{"code":"26","name":"26"},
		{"code":"27","name":"27"},
		{"code":"28","name":"28"},
		{"code":"29","name":"29"},
		{"code":"30","name":"30"},
		{"code":"31","name":"31"}
	]
}
