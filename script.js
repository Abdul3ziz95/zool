// بيانات الدول (تم دمجها في JS لسهولة الوصول إليها والتحديث)
const COUNTRY_DATA = [
    { name: 'السودان', code: '249', iso: 'sd' },
    { name: 'المملكة العربية السعودية', code: '966', iso: 'sa' },
    { name: 'الإمارات العربية المتحدة', code: '971', iso: 'ae' },
    { name: 'مصر', code: '20', iso: 'eg' },
    { name: 'الولايات المتحدة الأمريكية', code: '1', iso: 'us' },
    { name: 'المملكة المتحدة', code: '44', iso: 'gb' },
    { name: 'الجزائر', code: '213', iso: 'dz' },
    { name: 'الأردن', code: '962', iso: 'jo' },
    { name: 'الكويت', code: '965', iso: 'kw' },
    { name: 'قطر', code: '974', iso: 'qa' },
    { name: 'عُمان', code: '968', iso: 'om' },
    { name: 'اليمن', code: '967', iso: 'ye' },
    { name: 'ليبيا', code: '218', iso: 'ly' },
    { name: 'المغرب', code: '212', iso: 'ma' },
    { name: 'فلسطين', code: '970', iso: 'ps' },
    { name: 'العراق', code: '964', iso: 'iq' },
    { name: 'سوريا', code: '963', iso: 'sy' },
    { name: 'لبنان', code: '961', iso: 'lb' },
    { name: 'تونس', code: '216', iso: 'tn' },
    { name: 'أفغانستان', code: '93', iso: 'af' },
    { name: 'ألبانيا', code: '355', iso: 'al' },
    { name: 'أندورا', code: '376', iso: 'ad' },
    { name: 'أنغولا', code: '244', iso: 'ao' },
    { name: 'الأرجنتين', code: '54', iso: 'ar' },
    { name: 'أرمينيا', code: '374', iso: 'am' },
    { name: 'أستراليا', code: '61', iso: 'au' },
    { name: 'النمسا', code: '43', iso: 'at' },
    { name: 'أذربيجان', code: '994', iso: 'az' },
    { name: 'البحرين', code: '973', iso: 'bh' },
    { name: 'بنغلاديش', code: '880', iso: 'bd' },
    { name: 'بلجيكا', code: '32', iso: 'be' },
    { name: 'البرازيل', code: '55', iso: 'br' },
    { name: 'بلغاريا', code: '359', iso: 'bg' },
    { name: 'كندا', code: '1', iso: 'ca' },
    { name: 'تشيلي', code: '56', iso: 'cl' },
    { name: 'الصين', code: '86', iso: 'cn' },
    { name: 'كولومبيا', code: '57', iso: 'co' },
    { name: 'كرواتيا', code: '385', iso: 'hr' },
    { name: 'كوبا', code: '53', iso: 'cu' },
    { name: 'قبرص', code: '357', iso: 'cy' },
    { name: 'الدنمارك', code: '45', iso: 'dk' },
    { name: 'الإكوادور', code: '593', iso: 'ec' },
    { name: 'إثيوبيا', code: '251', iso: 'et' },
    { name: 'فنلندا', code: '358', iso: 'fi' },
    { name: 'فرنسا', code: '33', iso: 'fr' },
    { name: 'ألمانيا', code: '49', iso: 'de' },
    { name: 'اليونان', code: '30', iso: 'gr' },
    { name: 'الهند', code: '91', iso: 'in' },
    { name: 'إندونيسيا', code: '62', iso: 'id' },
    { name: 'أيرلندا', code: '353', iso: 'ie' },
    { name: 'إسرائيل', code: '972', iso: 'il' },
    { name: 'إيطاليا', code: '39', iso: 'it' },
    { name: 'اليابان', code: '81', iso: 'jp' },
    { name: 'كينيا', code: '254', iso: 'ke' },
    { name: 'كوريا الجنوبية', code: '82', iso: 'kr' },
    { name: 'المكسيك', code: '52', iso: 'mx' },
    { name: 'نيجيريا', code: '234', iso: 'ng' },
    { name: 'النرويج', code: '47', iso: 'no' },
    { name: 'باكستان', code: '92', iso: 'pk' },
    { name: 'بيرو', code: '51', iso: 'pe' },
    { name: 'الفلبين', code: '63', iso: 'ph' },
    { name: 'بولندا', code: '48', iso: 'pl' },
    { name: 'البرتغال', code: '351', iso: 'pt' },
    { name: 'روسيا', code: '7', iso: 'ru' },
    { name: 'سنغافورة', code: '65', iso: 'sg' },
    { name: 'الصومال', code: '252', iso: 'so' },
    { name: 'جنوب أفريقيا', code: '27', iso: 'za' },
    { name: 'إسبانيا', code: '34', iso: 'es' },
    { name: 'السويد', code: '46', iso: 'se' },
    { name: 'سويسرا', code: '41', iso: 'ch' },
    { name: 'تركيا', code: '90', iso: 'tr' },
    { name: 'أوكرانيا', code: '380', iso: 'ua' },
    { name: 'فنزويلا', code: '58', iso: 've' },
    { name: 'زيمبابوي', code: '263', iso: 'zw' }
];

const APP_LINK = 'https://abdul3ziz95.github.io/zool/';
const SHARE_MESSAGE = 'جربوا مراسل الواتساب السوداني الفوري! أسرع طريقة لبدء محادثة دون حفظ الرقم. الرابط: ' + APP_LINK;
const CURRENT_VERSION = '20251223';

// العناصر الرئيسية
const codeInput = document.getElementById('codeInput'); 
const phoneInput = document.getElementById('phoneInput'); 
const messageInput = document.getElementById('messageInput');
const currentFlagSpan = document.getElementById('currentFlag');
const countryNameText = document.getElementById('countryNameText');
const installButton = document.getElementById('installButton');
const whatsappButton = document.getElementById('whatsappButton');
const countryDisplayButton = document.getElementById('countryDisplayButton');

// عناصر المودال
const countryModal = document.getElementById('countryModal');
const closeModalButton = document.getElementById('closeModal');
const countrySearchInput = document.getElementById('countrySearch');
const countryListContainer = document.getElementById('countryList');

let deferredPrompt; 
let currentCountryCode = '249'; // القيمة الافتراضية

// ************** 1. وظائف التحكم في الدولة **************

// إنشاء قائمة الدول في المودال
function renderCountryList(filterText = '') {
    countryListContainer.innerHTML = '';
    const filteredData = COUNTRY_DATA.filter(country => 
        country.name.includes(filterText) || country.code.includes(filterText)
    );

    if (filteredData.length === 0) {
        countryListContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">لا توجد نتائج مطابقة.</p>';
        return;
    }

    filteredData.forEach(country => {
        const item = document.createElement('div');
        item.classList.add('country-item');
        item.dataset.code = country.code;
        item.dataset.iso = country.iso;

        item.innerHTML = `
            <div class="country-item-info">
                <span class="flag-icon flag-icon-${country.iso.toLowerCase()}"></span>
                <span>${country.name}</span>
            </div>
            <span class="country-code">+${country.code}</span>
        `;
        
        item.addEventListener('click', () => {
            selectCountry(country.code, country.name, country.iso);
            closeModal();
        });
        
        countryListContainer.appendChild(item);
    });
}

// وظيفة تحديث الواجهة بعد اختيار الدولة
function selectCountry(code, name, iso) {
    currentCountryCode = code;
    codeInput.textContent = `+${code}`;
    codeInput.dataset.code = code;
    countryNameText.textContent = name;
    currentFlagSpan.className = `flag-icon flag-icon-${iso.toLowerCase()}`;
}

// ************** 2. وظائف المودال (النافذة المنبثقة) **************

function openModal() {
    renderCountryList();
    countryModal.style.display = 'block';
    countrySearchInput.value = '';
    setTimeout(() => { countrySearchInput.focus(); }, 100);
}

function closeModal() {
    countryModal.style.display = 'none';
    countrySearchInput.value = '';
}

// ************** 3. وظائف التطبيق الرئيسية **************

function openWhatsApp() {
    const code = currentCountryCode; 
    const localNumber = phoneInput.value.trim().replace(/[\s+-]/g, '');
    const message = messageInput.value.trim();

    if (!code || !localNumber || localNumber.length < 6) {
        alert('الرجاء إدخال رقم هاتف محلي صالح (لا يقل عن 6 أرقام) بعد اختيار الدولة.');
        return;
    }

    const fullNumber = code + localNumber;
    let whatsappLink = 'https://wa.me/' + fullNumber;

    if (message) {
        whatsappLink += `?text=${encodeURIComponent(message)}`;
    }
    
    window.open(whatsappLink, '_blank');
}

function shareApp(platform) {
    // (كود المشاركة بدون تغيير)
    let url = '';
    const finalLink = APP_LINK + '?source=share'; 
    const finalMessage = SHARE_MESSAGE.replace(APP_LINK, finalLink);
    switch (platform) {
        case 'whatsapp':
            url = `https://wa.me/?text=${encodeURIComponent(finalMessage)}`;
            break;
        case 'messenger':
            url = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(finalLink)}&app_id=1234567890&redirect_uri=${encodeURIComponent(finalLink)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(finalLink)}`;
            break;
        default:
            return;
    }
    window.open(url, '_blank', 'width=600,height=400');
}

// ************** 4. التهيئة (Initialization) **************

function initializeApp() {
    // 4.1. حل مشكلة اهتزاز الشاشة (vh unit fix)
    function setVhProperty() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.getElementById('pageWrapper').style.transform = 'translateZ(0)';
    }
    setVhProperty();
    window.addEventListener('resize', setVhProperty);
    
    // 4.2. ربط الأحداث
    whatsappButton.addEventListener('click', openWhatsApp);
    countryDisplayButton.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);
    countrySearchInput.addEventListener('input', (e) => renderCountryList(e.target.value));

    // إغلاق المودال بالخلفية
    window.addEventListener('click', (event) => {
        if (event.target === countryModal) {
            closeModal();
        }
    });

    // 4.3. ربط أزرار المشاركة
    document.querySelector('.share-btn.whatsapp-share').addEventListener('click', () => shareApp('whatsapp'));
    document.querySelector('.share-btn.messenger').addEventListener('click', () => shareApp('messenger'));
    document.querySelector('.share-btn.facebook').addEventListener('click', () => shareApp('facebook'));

    // 4.4. تهيئة PWA و Service Worker
    setupPWA();
    
    // 4.5. تحديث الواجهة الافتراضية عند التحميل
    const defaultCountry = COUNTRY_DATA.find(c => c.code === '249');
    if (defaultCountry) {
         selectCountry(defaultCountry.code, defaultCountry.name, defaultCountry.iso);
    }
}

function setupPWA() {
     // (إلغاء التسجيل القديم والتسجيل الجديد)
     if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
               // إذا كان النطاق يتعلق بتطبيقنا
                if(registration.scope.includes('/zool/')) {
                   registration.unregister().catch((err) => { console.error('Failed to unregister SW:', err); });
                }
            }
        });
        
         navigator.serviceWorker.register(`/zool/sw.js?v=${CURRENT_VERSION}`, { scope: '/zool/' }) 
            .catch((err) => { console.log('SW registration failed:', err); });
    }
    
    // (منطق زر التثبيت PWA)
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

