<?php
//////////////////////////////////////////////////////////////////////
//
//  index.php
//
//   概要  :      トップページ & 応募フォーム
//   作成日:      2024/07/14
//   改定日:      
//   備考  :      
//
//////////////////////////////////////////////////////////////////////

$_root_path = './';
$_this_path = './';		// ex) 'contact/' or './'

require_once($_root_path . 'phplib/common.inc.php');
require_once($_root_path . 'phplib/LibForm.class.php');
require_once($_root_path . 'phplib/BladeOne.php');
require_once($_root_path . 'phplib/entryform.inc.php');

//##### 設定項目
$_conf['mail_email_col'] = "email";						// 管理者メールfromと確認メールtoに利用するinput項目
$_conf['mail_admin'] = ["recruit@cleanup-int.com", "secretary@rc-group.co.jp"];	// 管理者メールto
$_conf['mail_sub'] = "株式会社クリーンアップ・インターナショナル：応募フォーム";		// 管理者メールsub
$_conf['mail_kakunin_from'] = "support@recruit-axis.jp";		// 確認メールfrom
$_conf['mail_kakunin_fromname'] = "株式会社クリーンアップ・インターナショナル";		// 確認メールfromname
$_conf['mail_kakunin_sub'] = "応募を受け付けました";	// 確認メールsub

// メール本文（管理者へのメール）
$_conf['mail_body_admin'] = <<<EOP
%sからの送信です。
ご対応をお願いいたします。
----------------------------------------------------------------
%s
----------------------------------------------------------------
送信時刻　　　　：%s
送信者情報　　　：%s

EOP;
// メール本文（管理者へのメール）ここまで

// メール本文（送信者への返信メール）
$_conf['mail_body_user'] = <<<EOP
この度はお問い合わせを誠にありがとうございます。

下記の内容にて承りました。
追って担当者よりご連絡させていただきます。

■入力内容
----------------------------------------------------------------
%s
----------------------------------------------------------------

※ご返答までにお時間をいただく場合がございます。
予めご了承ください。

=======================================
株式会社クリーンアップ・インターナショナル
〒150-6030
東京都渋谷区恵比寿4-20-3 恵比寿ガーデンプレイスタワー30F
TEL：03-5770-3382
=======================================

EOP;
// メール本文（送信者への返信メール）ここまで

//##### ページ項目設定
$_conf['use_page'] = ['status', 'job', 'age', 'name', 'contact'];
$_conf['page_datas']['job']['form_datas']['job']['check_vals'] = ['投資用付不動産販売', '退去立会い・施工管理'];

//##### recruit-axis 送信設定
if(true) {
	require_once($_root_path . 'phplib/recruitaxis.inc.php');
	$_conf['site_key'] = 'i0zospA41MCmNorE';
}

form_start();
