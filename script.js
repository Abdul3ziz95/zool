
const APP_LINK = 'https://abdul3ziz95.github.io/zol/';
const CURRENT_VERSION = '20251227'; // الإصدار المحدث

// ************** بيانات الدول (تمت إضافة name_en) **************
const COUNTRY_DATA = [
    { name_ar: 'السودان', name_en: 'Sudan', code: '249', iso: 'sd' }, 
    { name_ar: 'المملكة العربية السعودية', name_en: 'Saudi Arabia', code: '966', iso: 'sa' },
    { name_ar: 'الإمارات العربية المتحدة', name_en: 'United Arab Emirates', code: '971', iso: 'ae' }, 
    { name_ar: 'مصر', name_en: 'Egypt', code: '20', iso: 'eg' },
    { name_ar: 'الولايات المتحدة الأمريكية', name_en: 'United States of America', code: '1', iso: 'us' }, 
    { name_ar: 'المملكة المتحدة', name_en: 'United Kingdom', code: '44', iso: 'gb' },
    { name_ar: 'الجزائر', name_en: 'Algeria', code: '213', iso: 'dz' }, 
    { name_ar: 'الأردن', name_en: 'Jordan', code: '962', iso: 'jo' },
    { name_ar: 'الكويت', name_en: 'Kuwait', code: '965', iso: 'kw' }, 
    { name_ar: 'قطر', name_en: 'Qatar', code: '974', iso: 'qa' },
    { name_ar: 'عُمان', name_en: 'Oman', code: '968', iso: 'om' }, 
    { name_ar: 'اليمن', name_en: 'Yemen', code: '967', iso: 'ye' },
    { name_ar: 'ليبيا', name_en: 'Libya', code: '218', iso: 'ly' }, 
    { name_ar: 'المغرب', name_en: 'Morocco', code: '212', iso: 'ma' },
    { name_ar: 'تونس', name_en: 'Tunisia', code: '216', iso: 'tn' }, 
    { name_ar: 'فلسطين', name_en: 'Palestine', code: '970', iso: 'ps' },
    { name_ar: 'العراق', name_en: 'Iraq', code: '964', iso: 'iq' }, 
    { name_ar: 'لبنان', name_en: 'Lebanon', code: '961', iso: 'lb' },
    { name_ar: 'سوريا', name_en: 'Syria', code: '963', iso: 'sy' }, 
    { name_ar: 'البحرين', name_en: 'Bahrain', code: '973', iso: 'bh' },
    { name_ar: 'الصين', name_en: 'China', code: '86', iso: 'cn' }, 
    { name_ar: 'تركيا', name_en: 'Turkey', code: '90', iso: 'tr' },
    { name_ar: 'الهند', name_en: 'India', code: '91', iso: 'in' }, 
    { name_ar: 'أفغانستان', name_en: 'Afghanistan', code: '93', iso: 'af' },
    { name_ar: 'ألبانيا', name_en: 'Albania', code: '355', iso: 'al' }, 
    { name_ar: 'أندورا', name_en: 'Andorra', code: '376', iso: 'ad' },
    { name_ar: 'أنجولا', name_en: 'Angola', code: '244', iso: 'ao' }, 
    { name_ar: 'أنتيغوا وباربودا', name_en: 'Antigua and Barbuda', code: '1268', iso: 'ag' },
    { name_ar: 'الأرجنتين', name_en: 'Argentina', code: '54', iso: 'ar' }, 
    { name_ar: 'أرمينيا', name_en: 'Armenia', code: '374', iso: 'am' },
    { name_ar: 'أستراليا', name_en: 'Australia', code: '61', iso: 'au' }, 
    { name_ar: 'النمسا', name_en: 'Austria', code: '43', iso: 'at' },
    { name_ar: 'أذربيجان', name_en: 'Azerbaijan', code: '994', iso: 'az' }, 
    { name_ar: 'جزر البهاما', name_en: 'Bahamas', code: '1242', iso: 'bs' },
    { name_ar: 'بنغلاديش', name_en: 'Bangladesh', code: '880', iso: 'bd' }, 
    { name_ar: 'بربادوس', name_en: 'Barbados', code: '1246', iso: 'bb' },
    { name_ar: 'بيلاروسيا', name_en: 'Belarus', code: '375', iso: 'by' }, 
    { name_ar: 'بلجيكا', name_en: 'Belgium', code: '32', iso: 'be' },
    { name_ar: 'بليز', name_en: 'Belize', code: '501', iso: 'bz' }, 
    { name_ar: 'بنين', name_en: 'Benin', code: '229', iso: 'bj' },
    { name_ar: 'بوتان', name_en: 'Bhutan', code: '975', iso: 'bt' }, 
    { name_ar: 'بوليفيا', name_en: 'Bolivia', code: '591', iso: 'bo' },
    { name_ar: 'البوسنة والهرسك', name_en: 'Bosnia and Herzegovina', code: '387', iso: 'ba' }, 
    { name_ar: 'بوتسوانا', name_en: 'Botswana', code: '267', iso: 'bw' },
    { name_ar: 'البرازيل', name_en: 'Brazil', code: '55', iso: 'br' }, 
    { name_ar: 'بروناي', name_en: 'Brunei', code: '673', iso: 'bn' },
    { name_ar: 'بلغاريا', name_en: 'Bulgaria', code: '359', iso: 'bg' }, 
    { name_ar: 'بوركينا فاسو', name_en: 'Burkina Faso', code: '226', iso: 'bf' },
    { name_ar: 'بوروندي', name_en: 'Burundi', code: '257', iso: 'bi' }, 
    { name_ar: 'كمبوديا', name_en: 'Cambodia', code: '855', iso: 'kh' },
    { name_ar: 'الكاميرون', name_en: 'Cameroon', code: '237', iso: 'cm' }, 
    { name_ar: 'كندا', name_en: 'Canada', code: '1', iso: 'ca' },
    { name_ar: 'الرأس الأخضر', name_en: 'Cape Verde', code: '238', iso: 'cv' }, 
    { name_ar: 'جمهورية افريقيا الوسطى', name_en: 'Central African Republic', code: '236', iso: 'cf' },
    { name_ar: 'تشاد', name_en: 'Chad', code: '235', iso: 'td' }, 
    { name_ar: 'تشيلي', name_en: 'Chile', code: '56', iso: 'cl' },
    { name_ar: 'كولومبيا', name_en: 'Colombia', code: '57', iso: 'co' }, 
    { name_ar: 'جزر القمر', name_en: 'Comoros', code: '269', iso: 'km' },
    { name_ar: 'كوستاريكا', name_en: 'Costa Rica', code: '506', iso: 'cr' }, 
    { name_ar: 'كرواتيا', name_en: 'Croatia', code: '385', iso: 'hr' },
    { name_ar: 'كوبا', name_en: 'Cuba', code: '53', iso: 'cu' }, 
    { name_ar: 'قبرص', name_en: 'Cyprus', code: '357', iso: 'cy' },
    { name_ar: 'جمهورية التشيك', name_en: 'Czech Republic', code: '420', iso: 'cz' }, 
    { name_ar: 'جمهورية الكونغو الديمقراطية', name_en: 'Democratic Republic of the Congo', code: '243', iso: 'cd' },
    { name_ar: 'الدنمارك', name_en: 'Denmark', code: '45', iso: 'dk' }, 
    { name_ar: 'جيبوتي', name_en: 'Djibouti', code: '253', iso: 'dj' },
    { name_ar: 'دومينيكا', name_en: 'Dominica', code: '1767', iso: 'dm' }, 
    { name_ar: 'جمهورية الدومينيكان', name_en: 'Dominican Republic', code: '1809', iso: 'do' },
    { name_ar: 'الإكوادور', name_en: 'Ecuador', code: '593', iso: 'ec' }, 
    { name_ar: 'السلفادور', name_en: 'El Salvador', code: '503', iso: 'sv' },
    { name_ar: 'غينيا الاستوائية', name_en: 'Equatorial Guinea', code: '240', iso: 'gq' }, 
    { name_ar: 'إريتريا', name_en: 'Eritrea', code: '291', iso: 'er' },
    { name_ar: 'إستونيا', name_en: 'Estonia', code: '372', iso: 'ee' }, 
    { name_ar: 'إثيوبيا', name_en: 'Ethiopia', code: '251', iso: 'et' },
    { name_ar: 'فيجي', name_en: 'Fiji', code: '679', iso: 'fj' }, 
    { name_ar: 'فنلندا', name_en: 'Finland', code: '358', iso: 'fi' },
    { name_ar: 'فرنسا', name_en: 'France', code: '33', iso: 'fr' }, 
    { name_ar: 'الغابون', name_en: 'Gabon', code: '241', iso: 'ga' },
    { name_ar: 'غامبيا', name_en: 'Gambia', code: '220', iso: 'gm' }, 
    { name_ar: 'جورجيا', name_en: 'Georgia', code: '995', iso: 'ge' },
    { name_ar: 'ألمانيا', name_en: 'Germany', code: '49', iso: 'de' }, 
    { name_ar: 'غانا', name_en: 'Ghana', code: '233', iso: 'gh' },
    { name_ar: 'اليونان', name_en: 'Greece', code: '30', iso: 'gr' }, 
    { name_ar: 'غرينادا', name_en: 'Grenada', code: '1473', iso: 'gd' },
    { name_ar: 'غواتيمالا', name_en: 'Guatemala', code: '502', iso: 'gt' }, 
    { name_ar: 'غينيا', name_en: 'Guinea', code: '224', iso: 'gn' },
    { name_ar: 'غينيا بيساو', name_en: 'Guinea-Bissau', code: '245', iso: 'gw' }, 
    { name_ar: 'غيانا', name_en: 'Guyana', code: '592', iso: 'gy' },
    { name_ar: 'هايتي', name_en: 'Haiti', code: '509', iso: 'ht' }, 
    { name_ar: 'هندوراس', name_en: 'Honduras', code: '504', iso: 'hn' },
    { name_ar: 'المجر', name_en: 'Hungary', code: '36', iso: 'hu' }, 
    { name_ar: 'أيسلندا', name_en: 'Iceland', code: '354', iso: 'is' },
    { name_ar: 'الهند', name_en: 'India', code: '91', iso: 'in' }, // تم تكرارها، تم الإبقاء على النسخة الأخيرة لتكون هي المستخدمة في النهاية
    { name_ar: 'إندونيسيا', name_en: 'Indonesia', code: '62', iso: 'id' }, 
    { name_ar: 'إيران', name_en: 'Iran', code: '98', iso: 'ir' },
    { name_ar: 'أيرلندا', name_en: 'Ireland', code: '353', iso: 'ie' }, 
    { name_ar: 'إسرائيل', name_en: 'Israel', code: '972', iso: 'il' },
    { name_ar: 'إيطاليا', name_en: 'Italy', code: '39', iso: 'it' }, 
    { name_ar: 'ساحل العاج', name_en: 'Ivory Coast', code: '225', iso: 'ci' },
    { name_ar: 'جامايكا', name_en: 'Jamaica', code: '1876', iso: 'jm' }, 
    { name_ar: 'اليابان', name_en: 'Japan', code: '81', iso: 'jp' },
    { name_ar: 'كازاخستان', name_en: 'Kazakhstan', code: '7', iso: 'kz' }, 
    { name_ar: 'كينيا', name_en: 'Kenya', code: '254', iso: 'ke' },
    { name_ar: 'كيريباتي', name_en: 'Kiribati', code: '686', iso: 'ki' }, 
    { name_ar: 'كوريا الشمالية', name_en: 'North Korea', code: '850', iso: 'kp' },
    { name_ar: 'كوريا الجنوبية', name_en: 'South Korea', code: '82', iso: 'kr' }, 
    { name_ar: 'قيرغيزستان', name_en: 'Kyrgyzstan', code: '996', iso: 'kg' },
    { name_ar: 'لاوس', name_en: 'Laos', code: '856', iso: 'la' }, 
    { name_ar: 'لاتفيا', name_en: 'Latvia', code: '371', iso: 'lv' },
    { name_ar: 'ليسوتو', name_en: 'Lesotho', code: '266', iso: 'ls' }, 
    { name_ar: 'ليبيريا', name_en: 'Liberia', code: '231', iso: 'lr' },
    { name_ar: 'ليتوانيا', name_en: 'Lithuania', code: '370', iso: 'lt' }, 
    { name_ar: 'لوكسمبورغ', name_en: 'Luxembourg', code: '352', iso: 'lu' },
    { name_ar: 'مدغشقر', name_en: 'Madagascar', code: '261', iso: 'mg' }, 
    { name_ar: 'مالاوي', name_en: 'Malawi', code: '265', iso: 'mw' },
    { name_ar: 'ماليزيا', name_en: 'Malaysia', code: '60', iso: 'my' }, 
    { name_ar: 'جزر المالديف', name_en: 'Maldives', code: '960', iso: 'mv' },
    { name_ar: 'مالي', name_en: 'Mali', code: '223', iso: 'ml' }, 
    { name_ar: 'مالطا', name_en: 'Malta', code: '356', iso: 'mt' },
    { name_ar: 'جزر مارشال', name_en: 'Marshall Islands', code: '692', iso: 'mh' }, 
    { name_ar: 'موريتانيا', name_en: 'Mauritania', code: '222', iso: 'mr' },
    { name_ar: 'موريشيوس', name_en: 'Mauritius', code: '230', iso: 'mu' }, 
    { name_ar: 'المكسيك', name_en: 'Mexico', code: '52', iso: 'mx' },
    { name_ar: 'ميكرونيزيا', name_en: 'Micronesia', code: '691', iso: 'fm' }, 
    { name_ar: 'مولدوفا', name_en: 'Moldova', code: '373', iso: 'md' },
    { name_ar: 'موناكو', name_en: 'Monaco', code: '377', iso: 'mc' }, 
    { name_ar: 'منغوليا', name_en: 'Mongolia', code: '976', iso: 'mn' },
    { name_ar: 'الجبل الأسود', name_en: 'Montenegro', code: '382', iso: 'me' }, 
    { name_ar: 'موزمبيق', name_en: 'Mozambique', code: '258', iso: 'mz' },
    { name_ar: 'ميانمار', name_en: 'Myanmar', code: '95', iso: 'mm' }, 
    { name_ar: 'ناميبيا', name_en: 'Namibia', code: '264', iso: 'na' },
    { name_ar: 'ناورو', name_en: 'Nauru', code: '674', iso: 'nr' }, 
    { name_ar: 'نيبال', name_en: 'Nepal', code: '977', iso: 'np' },
    { name_ar: 'هولندا', name_en: 'Netherlands', code: '31', iso: 'nl' }, 
    { name_ar: 'نيوزيلندا', name_en: 'New Zealand', code: '64', iso: 'nz' },
    { name_ar: 'نيكاراغوا', name_en: 'Nicaragua', code: '505', iso: 'ni' }, 
    { name_ar: 'النيجر', name_en: 'Niger', code: '227', iso: 'ne' },
    { name_ar: 'نيجيريا', name_en: 'Nigeria', code: '234', iso: 'ng' }, 
    { name_ar: 'مقدونيا الشمالية', name_en: 'North Macedonia', code: '389', iso: 'mk' },
    { name_ar: 'النرويج', name_en: 'Norway', code: '47', iso: 'no' }, 
    { name_ar: 'باكستان', name_en: 'Pakistan', code: '92', iso: 'pk' },
    { name_ar: 'بالاو', name_en: 'Palau', code: '680', iso: 'pw' }, 
    { name_ar: 'بنما', name_en: 'Panama', code: '507', iso: 'pa' },
    { name_ar: 'بابوا غينيا الجديدة', name_en: 'Papua New Guinea', code: '675', iso: 'pg' }, 
    { name_ar: 'باراغواي', name_en: 'Paraguay', code: '595', iso: 'py' },
    { name_ar: 'بيرو', name_en: 'Peru', code: '51', iso: 'pe' }, 
    { name_ar: 'الفلبين', name_en: 'Philippines', code: '63', iso: 'ph' },
    { name_ar: 'بولندا', name_en: 'Poland', code: '48', iso: 'pl' }, 
    { name_ar: 'البرتغال', name_en: 'Portugal', code: '351', iso: 'pt' },
    { name_ar: 'الكونغو', name_en: 'Republic of the Congo', code: '242', iso: 'cg' }, 
    { name_ar: 'رومانيا', name_en: 'Romania', code: '40', iso: 'ro' },
    { name_ar: 'روسيا', name_en: 'Russia', code: '7', iso: 'ru' }, 
    { name_ar: 'رواندا', name_en: 'Rwanda', code: '250', iso: 'rw' },
    { name_ar: 'سانت كيتس ونيفيس', name_en: 'Saint Kitts and Nevis', code: '1869', iso: 'kn' }, 
    { name_ar: 'سانت لوسيا', name_en: 'Saint Lucia', code: '1758', iso: 'lc' },
    { name_ar: 'سانت فنسنت وجزر غرينادين', name_en: 'Saint Vincent and the Grenadines', code: '1784', iso: 'vc' }, 
    { name_ar: 'ساموا', name_en: 'Samoa', code: '685', iso: 'ws' },
    { name_ar: 'سان مارينو', name_en: 'San Marino', code: '378', iso: 'sm' }, 
    { name_ar: 'ساو تومي وبرينسيبي', name_en: 'Sao Tome and Principe', code: '239', iso: 'st' },
    { name_ar: 'السنغال', name_en: 'Senegal', code: '221', iso: 'sn' }, 
    { name_ar: 'صربيا', name_en: 'Serbia', code: '381', iso: 'rs' },
    { name_ar: 'سيشل', name_en: 'Seychelles', code: '248', iso: 'sc' }, 
    { name_ar: 'سيراليون', name_en: 'Sierra Leone', code: '232', iso: 'sl' },
    { name_ar: 'سنغافورة', name_en: 'Singapore', code: '65', iso: 'sg' }, 
    { name_ar: 'سلوفاكيا', name_en: 'Slovakia', code: '421', iso: 'sk' },
    { name_ar: 'سلوفينيا', name_en: 'Slovenia', code: '386', iso: 'si' }, 
    { name_ar: 'جزر سليمان', name_en: 'Solomon Islands', code: '677', iso: 'sb' },
    { name_ar: 'الصومال', name_en: 'Somalia', code: '252', iso: 'so' }, 
    { name_ar: 'جنوب أفريقيا', name_en: 'South Africa', code: '27', iso: 'za' },
    { name_ar: 'جنوب السودان', name_en: 'South Sudan', code: '211', iso: 'ss' }, 
    { name_ar: 'إسبانيا', name_en: 'Spain', code: '34', iso: 'es' },
    { name_ar: 'سريلانكا', name_en: 'Sri Lanka', code: '94', iso: 'lk' }, 
    { name_ar: 'السويد', name_en: 'Sweden', code: '46', iso: 'se' },
    { name_ar: 'سويسرا', name_en: 'Switzerland', code: '41', iso: 'ch' }, 
    { name_ar: 'تايوان', name_en: 'Taiwan', code: '886', iso: 'tw' },
    { name_ar: 'طاجيكستان', name_en: 'Tajikistan', code: '992', iso: 'tj' }, 
    { name_ar: 'تنزانيا', name_en: 'Tanzania', code: '255', iso: 'tz' },
    { name_ar: 'تايلاند', name_en: 'Thailand', code: '66', iso: 'th' }, 
    { name_ar: 'تيمور الشرقية', name_en: 'Timor-Leste', code: '670', iso: 'tl' },
    { name_ar: 'توجو', name_en: 'Togo', code: '228', iso: 'tg' }, 
    { name_ar: 'تونغا', name_en: 'Tonga', code: '676', iso: 'to' },
    { name_ar: 'ترينيداد وتوباغو', name_en: 'Trinidad and Tobago', code: '1868', iso: 'tt' }, 
    { name_ar: 'تركمانستان', name_en: 'Turkmenistan', code: '993', iso: 'tm' },
    { name_ar: 'توفالو', name_en: 'Tuvalu', code: '688', iso: 'tv' }, 
    { name_ar: 'أوغندا', name_en: 'Uganda', code: '256', iso: 'ug' },
    { name_ar: 'أوكرانيا', name_en: 'Ukraine', code: '380', iso: 'ua' }, 
    { name_ar: 'أوروغواي', name_en: 'Uruguay', code: '598', iso: 'uy' },
    { name_ar: 'أوزبكستان', name_en: 'Uzbekistan', code: '998', iso: 'uz' }, 
    { name_ar: 'فانواتو', name_en: 'Vanuatu', code: '678', iso: 'vu' },
    { name_ar: 'الفاتيكان', name_en: 'Vatican City', code: '379', iso: 'va' }, 
    { name_ar: 'فنزويلا', name_en: 'Venezuela', code: '58', iso: 've' },
    { name_ar: 'فيتنام', name_en: 'Vietnam', code: '84', iso: 'vn' }, 
    { name_ar: 'زامبيا', name_en: 'Zambia', code: '260', iso: 'zm' },
    { name_ar: 'زيمبابوي', name_en: 'Zimbabwe', code: '263', iso: 'zw' }
];

const codeMap = {};
const isoMap = {}; 
COUNTRY_DATA.forEach(country => {
    codeMap[country.code] = country;
    isoMap[country.iso] = country;
});


// ************** كائن الترجمة **************
const TRANSLATIONS = {
    ar: {
        title: "دردشة مباشرة",
        description: "أسرع وأذكى طريقة للتواصل مباشرة عبر واتساب.",
        install: "📲 تثبيت التطبيق",
        country_label: "اختر الدولة أو ابحث عنها:",
        country_placeholder: "ابحث عن الدولة (مثال: السودان (+249))",
        code_placeholder: "رمز الدولة",
        number_placeholder: "أدخل الرقم المحلي (بدون الرمز)",
        button: "بدء المحادثة الآن",
        share_title: "شارك التطبيق مع أصدقائك:",
        contact: "📞 اتصل بي",
        copyright: "جميع الحقوق محفوظة © 2025. <span class='owner-name'>Abdul3ziz95</span>",
        alert_msg: "الرجاء إدخال رقم هاتف محلي صالح (لا يقل عن 6 أرقام) ورمز الدولة.",
        initial_country: "السودان (+249)",
        share_message: 'جربوا مراسل الواتساب الفوري! أسرع طريقة لبدء محادثة دون حفظ الرقم. الرابط: ' + APP_LINK,
        initial_whatsapp_msg: "السلام عليكم"
    },
    en: {
        title: "Direct WhatsApp Chat",
        description: "The fastest and smartest way to start a direct WhatsApp conversation.",
        install: "📲 Install App",
        country_label: "Select or search for a country:",
        country_placeholder: "Search for Country (Example: Sudan (+249))",
        code_placeholder: "Code",
        number_placeholder: "Enter Local Number (without code)",
        button: "Start Chat Now",
        share_title: "Share the App with your friends:",
        contact: "📞 Contact Me",
        copyright: "All rights reserved © 2025. <span class='owner-name'>Abdul3ziz95</span>",
        alert_msg: "Please enter a valid local phone number (at least 6 digits) and country code.",
        initial_country: "Sudan (+249)",
        share_message: 'Try the instant WhatsApp messenger! The fastest way to start a conversation without saving the number. Link: ' + APP_LINK,
        initial_whatsapp_msg: "Hello"
    }
};

let currentLang = 'ar'; 

// ************** تحديد العناصر **************
const codeInput = document.getElementById('codeInput'); 
const phoneInput = document.getElementById('phoneInput'); 
const countryInput = document.getElementById('countryInput');
const countryOptionsList = document.getElementById('country-options');
const currentFlagSpan = document.getElementById('currentFlag');
const installButton = document.getElementById('installButton');
const langToggleBtn = document.getElementById('langToggleBtn'); 

let savedCountryValue = TRANSLATIONS[currentLang].initial_country; 
let deferredPrompt; 

// ************** 1. وظائف التحكم في الدولة **************

/**
 * يملأ قائمة datalist بأسماء الدول بناءً على اللغة المحددة.
 * @param {string} lang - اللغة المراد استخدامها ('ar' أو 'en').
 */
function populateDatalist(lang) {
    const langKey = lang === 'ar' ? 'name_ar' : 'name_en';
    countryOptionsList.innerHTML = '';
    COUNTRY_DATA.forEach(country => { 
        const option = document.createElement('option');
        // استخدام اسم الدولة باللغة المناسبة
        option.value = `${country[langKey]} (+${country.code})`;
        countryOptionsList.appendChild(option);
    });
}

function updateCodeFromCountry(selectedValue) {
    if (selectedValue.trim() === '') return;
    const match = selectedValue.match(/\(([^)]+)\)$/);
    if (match) {
        let code = match[1].replace('+', '');
        codeInput.value = '+' + code;
        updateFlag(code);
    }
}

function updateCountryFromCode(inputValue) {
    let code = inputValue.replace('+', '').trim();
    if (code.length === 0) {
        currentFlagSpan.className = 'flag-icon flag-icon-sd';
        countryInput.value = '';
        return;
    }
    
    code = code.replace(/^0+/, ''); 
    const langKey = currentLang === 'ar' ? 'name_ar' : 'name_en'; 

    if (codeMap[code]) {
        updateFlag(code);
        const country = codeMap[code];
        // استخدام اسم الدولة باللغة الحالية
        countryInput.value = `${country[langKey]} (+${country.code})`; 
        savedCountryValue = countryInput.value;
    } else {
        currentFlagSpan.className = 'flag-icon flag-icon-sd'; 
    }
}

function updateFlag(code) {
    const country = codeMap[code];
    if (country) {
        currentFlagSpan.className = `flag-icon flag-icon-${country.iso}`;
    }
}

function restoreCountryValue() {
    if (countryInput.value === '') {
        countryInput.value = savedCountryValue;
    }
}

// ************** 2. وظيفة التحديد التلقائي **************

async function setCountryAuto() {
    let code = '249'; 
    let iso = 'sd';
    
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_calling_code) {
            let potentialCode = data.country_calling_code.replace('+', '');
            if (codeMap[potentialCode]) {
                 code = potentialCode;
                 iso = data.country_code.toLowerCase();
            }
        }
    } catch (e) {
        // لا مشكلة
    }

    const country = codeMap[code];
    const langKey = currentLang === 'ar' ? 'name_ar' : 'name_en';
    codeInput.value = '+' + code;
    currentFlagSpan.className = `flag-icon flag-icon-${iso}`;
    // تعيين اسم الدولة باللغة الافتراضية
    countryInput.value = `${country[langKey]} (+${country.code})`;
    savedCountryValue = countryInput.value;
}


// ************** 3. وظائف التطبيق الرئيسية **************

function openWhatsApp() {
    const code = codeInput.value.replace('+', '').trim(); 
    const localNumber = phoneInput.value.trim().replace(/[\s+-]/g, '');
    const autoMessage = TRANSLATIONS[currentLang].initial_whatsapp_msg; 

    if (!code || !localNumber || localNumber.length < 6) {
        alert(TRANSLATIONS[currentLang].alert_msg); 
        return;
    }

    const fullNumber = code + localNumber;
    let whatsappLink = 'https://wa.me/' + fullNumber;

    if (autoMessage) {
        whatsappLink += `?text=${encodeURIComponent(autoMessage)}`;
    }
    
    window.open(whatsappLink, '_blank');
}

function shareApp(platform) {
    let url = '';
    const finalLink = APP_LINK + '?source=share'; 
    const finalMessage = TRANSLATIONS[currentLang].share_message.replace(APP_LINK, finalLink); 
    
    switch (platform) {
        case 'whatsapp':
            url = 'whatsapp://send?text=' + encodeURIComponent(finalMessage);
            break;
        case 'facebook':
            url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(finalLink);
            break;
        case 'messenger':
            url = 'https://www.facebook.com/dialog/send?link=' + encodeURIComponent(finalLink) + '&app_id=YOUR_APP_ID';
            break;
        default:
            return;
    }
    window.open(url, '_blank', 'width=600,height=400');
}


// ************** 4. وظيفة تبديل اللغة (الأداء فائق السرعة) **************

function toggleLanguage() {
    // تبديل اللغة الحالية
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const langData = TRANSLATIONS[currentLang];
    
    // 1. تغيير اتجاه الصفحة (RTL/LTR) واللغة في وسم HTML (فوري)
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
    
    // 2. تحديث نصوص الواجهة باستخدام data-key (فوري)
    document.title = langData.title;
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const text = langData[key];

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else if (element.id === 'whatsappButton') {
             if (element.querySelector('span')) {
                element.querySelector('span').textContent = text;
             }
        } else {
             element.innerHTML = text; 
        }
    });
    
    // 3. تحديث قائمة الدول (الميزة الجديدة - فوري)
    populateDatalist(currentLang);
    
    // 4. تحديث مظهر زر التبديل
    langToggleBtn.textContent = currentLang === 'ar' ? 'English' : 'العربية';
    
    // 5. تحديث قيمة مدخل الدولة للتطابق مع اللغة الجديدة
    const countryToRestore = COUNTRY_DATA.find(c => c.code === codeInput.value.replace('+', ''));
    if (countryToRestore) {
        const langKey = currentLang === 'ar' ? 'name_ar' : 'name_en';
        savedCountryValue = `${countryToRestore[langKey]} (+${countryToRestore.code})`;
    } else {
        savedCountryValue = langData.initial_country; 
    }
    restoreCountryValue(); 
}


// ************** 5. التهيئة (Initialization) **************

function initializeApp() {
    function setVhProperty() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.getElementById('pageWrapper').style.transform = 'translateZ(0)';
    }
    setVhProperty();
    window.addEventListener('resize', setVhProperty);
    
    // تعبئة قائمة الدول باللغة الافتراضية
    populateDatalist(currentLang);
    
    // تنفيذ التحديد التلقائي
    setCountryAuto();
    
    // تطبيق اللغة الافتراضية (العربية) على نصوص الواجهة
    const langData = TRANSLATIONS[currentLang];
    
    document.title = langData.title;
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const text = langData[key];
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else if (element.id === 'whatsappButton') {
             if (element.querySelector('span')) {
                element.querySelector('span').textContent = text;
             }
        } else {
             element.innerHTML = text;
        }
    });
    
    // تحديث قيمة زر التبديل
    langToggleBtn.textContent = 'English';
    
    setupPWA();
}

function setupPWA() {
     if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
                if(registration.scope.includes('/zol/')) { 
                   registration.unregister().catch(() => {});
                }
            }
        });
        
         navigator.serviceWorker.register(`/zol/sw.js?v=${CURRENT_VERSION}`, { scope: '/zol/' }) 
            .catch(() => {});
    }
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e; 
        installButton.style.display = 'block'; 
    });

    installButton.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    installButton.style.display = 'none'; 
                }
                deferredPrompt = null; 
            });
        }
    });
}

window.addEventListener('load', initializeApp);
