// وضعیت‌های مختلف برای نمایش در پروژه
const statuses = [
    "✅ همه فایل‌ها در状态 تمیز هستند!",
    "📝 فایل index.html تغییر کرده است",
    "🎨 فایل style.css به‌روزرسانی شد",
    "⚡ فایل script.js تغییر کرد",
    "🔍 در حال بررسی تغییرات...",
    "💾 آماده برای کامیت بعدی",
    "🚀 همه چیز برای push آماده است"
];

let currentStatusIndex = 0;

// تابع برای بروزرسانی پیام وضعیت
function updateStatusMessage() {
    const statusMessage = document.getElementById('status-message');
    if (statusMessage) {
        statusMessage.textContent = statuses[currentStatusIndex];
        currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
        
        // اضافه کردن یک افکت انیمیشن
        statusMessage.style.animation = 'none';
        setTimeout(() => {
            statusMessage.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    }
}

// اضافه کردن انیمیشن به CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    #status-message {
        animation: fadeIn 0.5s ease;
    }
`;
document.head.appendChild(style);

// رویداد برای دکمه بروزرسانی
document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('update-status');
    if (updateButton) {
        updateButton.addEventListener('click', updateStatusMessage);
    }
    
    // نمایش اطلاعات کنسول برای تمرین گیت
    console.log('🚀 صفحه با موفقیت بارگذاری شد!');
    console.log('📁 می‌توانید تغییرات را با git add و git commit ثبت کنید');
    console.log('🔄 تاریخچه کامیت‌ها را با git log مشاهده کنید');
    
    // نمایش اطلاعات نسخه
    const versionInfo = {
        version: '1.0.0',
        lastUpdate: new Date().toLocaleDateString('fa-IR'),
        files: ['index.html', 'style.css', 'script.js']
    };
    
    console.log('📦 اطلاعات پروژه:', versionInfo);
    
    // اضافه کردن یک ویژگی تعاملی دیگر
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            console.log(`🖱️ کلیک روی کارت شماره ${index + 1}: ${card.querySelector('h2')?.textContent || 'بدون عنوان'}`);
        });
    });
});

// تابع کمکی برای نمایش راهنمای گیت در کنسول
function showGitHelp() {
    const commands = [
        'git init - شروع مخزن جدید',
        'git add . - اضافه کردن همه فایل‌ها',
        'git commit -m "پیام" - ثبت تغییرات',
        'git status - بررسی وضعیت',
        'git log - نمایش تاریخچه',
        'git diff - نمایش تغییرات',
        'git branch - مدیریت شاخه‌ها',
        'git checkout - جابجایی بین شاخه‌ها'
    ];
    
    console.log('📚 راهنمای سریع گیت:');
    commands.forEach(cmd => console.log(`  • ${cmd}`));
}

// فراخوانی راهنما بعد از 2 ثانیه
setTimeout(showGitHelp, 2000);

// اضافه کردن قابلیت نمایش زمان آخرین بروزرسانی
function updateTimestamp() {
    const footer = document.querySelector('footer p');
    if (footer && !footer.innerHTML.includes('آخرین بروزرسانی')) {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('fa-IR');
        footer.innerHTML = `نسخه 1.0.0 - آخرین بروزرسانی: ${formattedTime} | برای تمرین Git ساخته شده است`;
    }
}

// بروزرسانی timestamp هر 30 ثانیه
setInterval(updateTimestamp, 30000);
updateTimestamp();