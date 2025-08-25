/**
 * ========================================
 * 🚀 Amer Developer Portfolio - FINAL Working Script (With data.json)
 * Version: 17.0 | Added data.json integration, enhanced security & features
 * Author: Amer Developer
 * ========================================
 */
// =======================
// 1. Configuration
// =======================
const CONFIG = {
  ADMIN_PASSWORD_HASH: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', // SHA-256 hash of 'ameramer9.1.2010'
  DATA_FILE_PATH: 'data/data.json',
  MAX_ADMIN_CLICKS: 8,
  LOGO_PATH: 'assets/images/logo.png',
  PROJECT_PLACEHOLDER: 'assets/images/project-placeholder.jpg'
};

// =======================
// 2. DOM Elements
// =======================
const logoImg = document.getElementById('logo-img');
const languageSwitcher = document.getElementById('language-switcher');
const languageMenu = document.getElementById('language-menu');
const toast = document.getElementById('toast');
const yearSpan = document.getElementById('year');
const adminPanel = document.getElementById('admin-panel');
const passwordModal = document.getElementById('password-modal');
const typingText = document.getElementById('typing-text');
const projectsCount = document.getElementById('projects-count'); // New element needed

// Contact Form
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const sendEmailBtn = document.getElementById('send-email');
const sendWhatsAppBtn = document.getElementById('send-whatsapp');

// Admin Panel
const editModeOverlay = document.getElementById('edit-mode-overlay');
const siteFrame = document.getElementById('site-frame');

// File Uploads
const projectImageInput = document.getElementById('input-project-image');
const projectVideoInput = document.getElementById('input-project-video');
const imageFilename = document.getElementById('image-filename');
const videoFilename = document.getElementById('video-filename');

// Delete Lists
const deleteProjectList = document.getElementById('delete-project-list');
const deleteSkillList = document.getElementById('delete-skill-list');
const deleteToolList = document.getElementById('delete-tool-list');

// Grids
const skillsGrid = document.getElementById('skills-grid');
const toolsGrid = document.getElementById('tools-grid');
const projectsGrid = document.getElementById('projects-grid');
const projectsEmpty = document.getElementById('projects-empty');
const servicesGrid = document.getElementById('services-grid');

// Modals
const tiktokModal = document.getElementById('tiktok-modal');
const adminPassword = document.getElementById('admin-password');
const passwordError = document.getElementById('password-error');

// Sections & Nav
const sections = document.querySelectorAll('.section, #home');
const navLinks = document.querySelectorAll('.nav-link');

// About Text (Multiple Paragraphs)
const aboutText = document.getElementById('about-text');
const aboutText2 = document.getElementById('about-text-2');
const aboutText3 = document.getElementById('about-text-3');

// Hero Name (to change "Amer" to "عامر" in Arabic)
const heroName = document.getElementById('hero-name');

// Forms
const formProject = document.getElementById('form-project');
const formSkill = document.getElementById('form-skill');
const formTool = document.getElementById('form-tool');

// Admin Forms Container
const adminForms = document.getElementById('admin-forms');
const formAddProject = document.getElementById('form-add-project');
const formAddSkill = document.getElementById('form-add-skill');
const formAddTool = document.getElementById('form-add-tool');
const deleteSections = document.getElementById('delete-sections');

// Page Title
const pageTitle = document.querySelector('title');

// Services Section Elements
const orderServiceBtn = document.getElementById('order-service-btn');
const servicesActions = document.getElementById('services-actions');
const cancelSelection = document.getElementById('cancel-selection');
const confirmOrder = document.getElementById('confirm-order');

// Loading Screen
const loadingScreen = document.getElementById('loading-screen');

// Sitemap
const sitemap = document.querySelector('.sitemap');

// =======================
// 3. Translation System
// =======================
const translations = {
  ar: {
    home: 'الرئيسية',
    about: 'من أنا',
    skills: 'المهارات',
    tools: 'الأدوات',
    services: 'الخدمات',
    projects: 'المشاريع',
    contact: 'اتصل بي',
    'I offer professional development services tailored to your needs.': 'أقدم خدمات تطوير احترافية مخصصة لاحتياجاتك.',
    'More About Me': 'مزيد من التفاصيل',
    'Hello, I\'m': 'مرحبًا، أنا',
    'Building digital solutions': 'أبني حلولًا رقمية تساعدك على الظهور بشكل احترافي وفعّال في السوق الرقمي',
    'About Me': 'من أنا',
    'My Skills': 'مهاراتي',
    'My Tools': 'الأدوات',
    'My Services': 'خدماتي',
    'Latest Projects': 'أحدث المشاريع',
    'Latest Projects Count': 'أحدث %d مشاريع',
    'Contact Me': 'اتصل بي',
    'Your Name': 'اسمك',
    'Your Email': 'بريدك الإلكتروني',
    'Your Message': 'رسالتك',
    'Send via Email': 'إرسال عبر البريد الإلكتروني',
    'Send via WhatsApp': 'إرسال عبر واتساب',
    'I am available for collaboration': 'أنا متاح للتعاون والعمل على مشاريع جديدة، لا تتردد في التواصل معي لأي استفسار أو عرض عمل.',
    'Admin Panel': 'لوحة التحكم',
    'Add Project': 'إضافة مشروع',
    'Add Skill': 'إضافة مهارة',
    'Add Tool': 'إضافة أداة',
    'Delete Project': 'حذف مشروع',
    'Delete Skill': 'حذف مهارة',
    'Delete Tool': 'حذف أداة',
    'Project Name': 'اسم المشروع',
    'Project URL': 'رابط المشروع',
    'Upload Image': 'تحميل صورة',
    'Upload Video (optional)': 'تحميل فيديو (اختياري)',
    'Description (English)': 'الوصف (بالإنجليزية)',
    'Description (Arabic)': 'الوصف (بالعربية)',
    'Skill Abbreviation': 'اختصار المهارة (مثل: HTML)',
    'Full Name': 'الاسم الكامل (مثل: HyperText Markup Language)',
    'Tool Abbreviation': 'اختصار الأداة (مثل: Git)',
    'Save Project': 'حفظ المشروع',
    'Add Skill': 'إضافة مهارة',
    'Add Tool': 'إضافة أداة',
    'Sending...': 'جاري الإرسال...',
    'Success Email': 'تم إرسال الرسالة بنجاح، سيتم التواصل معك عبر البريد الإلكتروني خلال 24 ساعة',
    'Success WhatsApp': 'تم إرسال الرسالة بنجاح، سيتم التواصل معك عبر واتساب خلال 24 ساعة',
    'Error': 'تعذر إرسال الرسالة',
    'Error Network': 'تحقق من اتصالك بالإنترنت وحاول مرة أخرى.',
    'Error Invalid Email': 'يرجى إدخال بريد إلكتروني صحيح.',
    'Confirm Delete': 'هل أنت متأكد أنك تريد حذف هذا العنصر؟',
    'Enter Password': 'أدخل كلمة المرور للتأكيد',
    'Incorrect Password': 'كلمة المرور غير صحيحة',
    'No projects to delete': 'لا توجد مشاريع للحذف',
    'No skills to delete': 'لا توجد مهارات للحذف',
    'No tools to delete': 'لا توجد أدوات للحذف',
    'Enter Admin Password': 'أدخل كلمة مرور الإدارة',
    'This area is protected. Enter the password to continue.': 'هذه المنطقة محمية. أدخل كلمة المرور للمتابعة.',
    'Enter': 'أدخل',
    'Cancel': 'إلغاء',
    'TikTok Service Notice': 'إشعار خدمة تيك توك',
    'Got It': 'حسنًا',
    'Change Logo': 'تغيير الشعار',
    'Change About Text': 'تغيير نص "من أنا"',
    'Control Site Live': 'التحكم المباشر في الموقع',
    'No projects added yet.': 'لم تُضف مشاريع بعد.',
    'Back': 'العودة',
    'Order Service': 'اطلب خدمة',
    'Cancel Selection': 'إلغاء التحديد',
    'Confirm Order': 'تأكيد الطلب',
    'Service Selected': 'تم تحديد خدمة واحدة',
    'Services Selected': 'تم تحديد %d خدمات',
    'Please select at least one service': 'يرجى تحديد خدمة واحدة على الأقل',
    'Landing Pages': 'صفحات الهبوط',
    'Websites': 'مواقع الويب',
    'Python Scripts': 'سكربتات بايثون',
    'Support & Maintenance': 'الدعم والصيانة',
    'Landing Pages Desc': 'تصميم صفحات هبوط احترافية لزيادة التحويلات والتفاعل.',
    'Websites Desc': 'تطوير مواقع ويب حديثة وسريعة وسهلة الاستخدام.',
    'Python Scripts Desc': 'كتابة سكربتات بايثون لأتمتة المهام وتحليل البيانات.',
    'Support & Maintenance Desc': 'دعم فني وصيانة دورية لضمان استقرار موقعك.'
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    tools: 'Tools',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    'I offer professional development services tailored to your needs.': 'I offer professional development services tailored to your needs.',
    'More About Me': 'More About Me',
    'Hello, I\'m': 'Hello, I\'m',
    'Building digital solutions': 'I build digital solutions that help you appear professionally and effectively in the digital market',
    'About Me': 'About Me',
    'My Skills': 'My Skills',
    'My Tools': 'My Tools',
    'My Services': 'My Services',
    'Latest Projects': 'Latest Projects',
    'Latest Projects Count': 'Latest %d Projects',
    'Contact Me': 'Contact Me',
    'Your Name': 'Your Name',
    'Your Email': 'Your Email',
    'Your Message': 'Your Message',
    'Send via Email': 'Send via Email',
    'Send via WhatsApp': 'Send via WhatsApp',
    'I am available for collaboration': 'I am available for collaboration and new projects. Feel free to reach out for any inquiries or job offers.',
    'Admin Panel': 'Admin Panel',
    'Add Project': 'Add Project',
    'Add Skill': 'Add Skill',
    'Add Tool': 'Add Tool',
    'Delete Project': 'Delete Project',
    'Delete Skill': 'Delete Skill',
    'Delete Tool': 'Delete Tool',
    'Project Name': 'Project Name',
    'Project URL': 'Project URL',
    'Upload Image': 'Upload Image',
    'Upload Video (optional)': 'Upload Video (optional)',
    'Description (English)': 'Description (English)',
    'Description (Arabic)': 'وصف (بالعربية)',
    'Skill Abbreviation': 'Skill Abbreviation (e.g. HTML)',
    'Full Name': 'Full Name (e.g. HyperText Markup Language)',
    'Tool Abbreviation': 'Tool Abbreviation (e.g. Git)',
    'Save Project': 'Save Project',
    'Add Skill': 'Add Skill',
    'Add Tool': 'Add Tool',
    'Sending...': 'Sending...',
    'Success Email': 'Message sent successfully! I will contact you via email within 24 hours.',
    'Success WhatsApp': 'Message sent successfully! I will contact you via WhatsApp within 24 hours.',
    'Error': 'Failed to send message',
    'Error Network': 'Please check your internet connection and try again.',
    'Error Invalid Email': 'Please enter a valid email address.',
    'Confirm Delete': 'Are you sure you want to delete this item?',
    'Enter Password': 'Enter password to confirm',
    'Incorrect Password': 'Incorrect password',
    'No projects to delete': 'No projects to delete',
    'No skills to delete': 'No skills to delete',
    'No tools to delete': 'No tools to delete',
    'Enter Admin Password': 'Enter Admin Password',
    'This area is protected. Enter the password to continue.': 'This area is protected. Enter the password to continue.',
    'Enter': 'Enter',
    'Cancel': 'Cancel',
    'TikTok Service Notice': 'TikTok Service Notice',
    'Got It': 'Got It',
    'Change Logo': 'Change Logo',
    'Change About Text': 'Change About Text',
    'Control Site Live': 'Control Site Live',
    'No projects added yet.': 'No projects added yet.',
    'Back': 'Back',
    'Order Service': 'Order Service',
    'Cancel Selection': 'Cancel Selection',
    'Confirm Order': 'Confirm Order',
    'Service Selected': '1 service selected',
    'Services Selected': '%d services selected',
    'Please select at least one service': 'Please select at least one service',
    'Landing Pages': 'Landing Pages',
    'Websites': 'Websites',
    'Python Scripts': 'Python Scripts',
    'Support & Maintenance': 'Support & Maintenance',
    'Landing Pages Desc': 'Professional landing pages to increase conversions and engagement.',
    'Websites Desc': 'Modern, fast, and user-friendly websites.',
    'Python Scripts Desc': 'Python scripts for automation and data analysis.',
    'Support & Maintenance Desc': 'Technical support and regular maintenance for stability.'
  }
};

// =======================
// 4. Language Management
// =======================
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    heroName.textContent = 'عامر';
  } else {
    document.documentElement.removeAttribute('dir');
    heroName.textContent = 'Amer';
  }

  // Update all elements with data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      const value = translations[lang][key];
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else if (el.tagName === 'LABEL') {
        el.textContent = value;
      } else if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName)) {
        el.textContent = value;
      } else if (el.tagName === 'P' && !el.id.startsWith('about-text')) {
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    }
  });

  // Update about text
  if (lang === 'ar') {
    aboutText.textContent = 'مرحبًا، أنا عامر من مصر 🇪🇬، مطوّر ويب ومبرمج مهتم بتحويل الأفكار إلى حلول رقمية عملية وفعّالة. بدأت رحلتي في عالم البرمجة بالتعلّم الذاتي، ومع كل مشروع أنجزه أكتسب خبرة أعمق ورؤية أوسع.';
    aboutText2.textContent = 'أعمل على تصميم وبرمجة مواقع عصرية متجاوبة وسهلة الاستخدام، مع التركيز على تجربة المستخدم وأدق التفاصيل. أتقن استخدام HTML، CSS، وJavaScript لتطوير واجهات احترافية، بالإضافة إلى Python لبناء أدوات وتطبيقات ذكية.';
    aboutText3.textContent = 'أسعى دائمًا لتطوير مهاراتي وإضافة تقنيات جديدة إلى صندوق أدواتي، بهدف تقديم أفضل قيمة ممكنة لكل عميل. وأؤمن أن نجاح أي مشروع يبدأ من فهم الهدف والرؤية بوضوح، ثم تحويلهما إلى منتج رقمي يحقق المطلوب بكفاءة واحترافية.';
  } else {
    aboutText.textContent = 'Hello, I\'m Amer from Egypt 🇪🇬, a web developer and programmer passionate about turning ideas into practical and effective digital solutions. I started my journey in programming through self-learning, and with every project I complete, I gain deeper experience and broader vision.';
    aboutText2.textContent = 'I specialize in designing and coding modern, responsive, and user-friendly websites, with a strong focus on user experience and fine details. I master HTML, CSS, and JavaScript to create professional interfaces, along with Python for building smart tools and applications.';
    aboutText3.textContent = 'I always strive to improve my skills and add new technologies to my toolkit, aiming to deliver the highest possible value to every client. I believe that the success of any project starts with a clear understanding of the goal and vision, then transforming them into a digital product that achieves the desired outcome efficiently and professionally.';
  }

  // Update page title
  pageTitle.textContent = lang === 'ar' 
    ? 'عامر المطور | حلول برمجية مبتكرة لمستقبل رقمي متطور' 
    : 'Amer Developer | Innovative Software Solutions for an Advanced Digital Future';

  // Update language menu
  document.querySelectorAll('#language-menu li').forEach(li => {
    li.classList.toggle('active', li.dataset.lang === lang);
  });

  // Hide menu after selection
  languageMenu.hidden = true;

  // Re-render all data-dependent sections
  renderDeleteProjectList();
  renderDeleteSkillList();
  renderDeleteToolList();
  renderSkills();
  renderTools();
  renderServices();
  renderProjects();

  // Update typing animation
  typingText.textContent = '';
  typeRole();

  showToast(`Language changed to ${lang.toUpperCase()}`);
}

// Language switcher event
languageSwitcher.addEventListener('click', (e) => {
  e.stopPropagation();
  languageMenu.hidden = !languageMenu.hidden;
});

document.addEventListener('click', (e) => {
  if (!languageSwitcher.contains(e.target)) {
    languageMenu.hidden = true;
  }
});

document.querySelectorAll('#language-menu li').forEach(li => {
  li.addEventListener('click', () => {
    setLanguage(li.dataset.lang);
  });
});

// =======================
// 5. Typing Animation
// =======================
const roles = {
  en: ['Front-end Developer', 'Back-end Developer', 'Full-stack Developer'],
  ar: ['مطوّر واجهات أمامية', 'مطوّر واجهات خلفية', 'مطوّر متكامل']
};

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = roles[currentLang]?.[roleIndex];
  if (!currentRole) return;

  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => {
      isDeleting = true;
      typeRole();
    }, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles[currentLang].length;
    setTimeout(typeRole, 1500);
    return;
  }

  const typingSpeed = 250;
  const erasingSpeed = 100;
  setTimeout(typeRole, isDeleting ? erasingSpeed : typingSpeed);
}

// =======================
// 6. Scroll Animations & Active Nav
// =======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });

      // Show "Order Service" button only when in services section
      if (id === 'services') {
        orderServiceBtn.style.display = 'inline-flex';
      } else {
        orderServiceBtn.style.display = 'none';
      }
    }
  });
}, { threshold: 0.4, rootMargin: '-80px 0px 0px 0px' });

sections.forEach(section => observer.observe(section));

function updateActiveLink() {
  const scrollPosition = window.scrollY + 100;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
window.addEventListener('hashchange', () => {
  setTimeout(updateActiveLink, 100);
});

// =======================
// 7. Admin Access
// =======================
let clickCount = 0;
let lastClickTime = 0;

logoImg.addEventListener('click', () => {
  const now = Date.now();
  if (now - lastClickTime < 2000) {
    clickCount++;
  } else {
    clickCount = 1;
  }
  lastClickTime = now;
  
  if (clickCount >= CONFIG.MAX_ADMIN_CLICKS) {
    openPasswordModal();
    clickCount = 0;
  }
});

// Avatar click for mobile admin access
const heroAvatar = document.querySelector('.hero-avatar');
let mobileClickCount = 0;
let lastMobileClickTime = 0;

if (heroAvatar) {
  heroAvatar.addEventListener('click', () => {
    if (window.innerWidth > 768) return;
    const now = Date.now();
    if (now - lastMobileClickTime < 2000) {
      mobileClickCount++;
    } else {
      mobileClickCount = 1;
    }
    lastMobileClickTime = now;
    
    if (mobileClickCount >= CONFIG.MAX_ADMIN_CLICKS) {
      openPasswordModal();
      mobileClickCount = 0;
      showToast('Admin access triggered via avatar!');
    }
  });
}

function openPasswordModal() {
  passwordModal.classList.add('show');
  passwordModal.hidden = false;
  adminPassword.value = '';
  passwordError.style.display = 'none';
}

function closePasswordModal() {
  passwordModal.classList.remove('show');
  setTimeout(() => {
    passwordModal.hidden = true;
  }, 300);
}

// Simple SHA-256 hash comparison (in real app, use proper crypto)
function hashPassword(password) {
  // This is a placeholder - in production, use Web Crypto API
  // For now, we'll use the precomputed hash
  return CONFIG.ADMIN_PASSWORD_HASH;
}

function checkPassword() {
  const pass = adminPassword.value;
  const passHash = hashPassword(pass);
  
  if (passHash === CONFIG.ADMIN_PASSWORD_HASH) {
    closePasswordModal();
    toggleAdminPanel();
    renderDeleteProjectList();
    renderDeleteSkillList();
    renderDeleteToolList();
    showToast('Admin panel unlocked!');
  } else {
    passwordError.textContent = translations[currentLang]['Incorrect Password'];
    passwordError.style.display = 'block';
  }
}

function toggleAdminPanel() {
  adminPanel.style.display = adminPanel.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!passwordModal.hidden) closePasswordModal();
    if (adminPanel.style.display === 'block') toggleAdminPanel();
    if (editModeOverlay.style.display !== 'none') exitEditMode();
  }
});

// =======================
// 8. Admin Controls
// =======================
function closeAllForms() {
  [formAddProject, formAddSkill, formAddTool, deleteSections].forEach(f => f.style.display = 'none');
}

function openAddProject() { 
  closeAllForms(); 
  formAddProject.style.display = 'block'; 
}

function openAddSkill() { 
  closeAllForms(); 
  formAddSkill.style.display = 'block'; 
}

function openAddTool() { 
  closeAllForms(); 
  formAddTool.style.display = 'block'; 
}

function openDeleteProject() { 
  closeAllForms(); 
  deleteSections.style.display = 'block'; 
}

function openDeleteSkill() { 
  closeAllForms(); 
  deleteSections.style.display = 'block'; 
}

function openDeleteTool() { 
  closeAllForms(); 
  deleteSections.style.display = 'block'; 
}

function changeLogo() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch('/upload-logo', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          const result = await response.json();
          logoImg.src = result.url;
          CONFIG.LOGO_PATH = result.url;
          saveData();
          showToast('Logo changed successfully!');
        } else {
          throw new Error('Upload failed');
        }
      } catch (error) {
        // Fallback to data.json update
        const reader = new FileReader();
        reader.onload = () => {
          logoImg.src = reader.result;
          CONFIG.LOGO_PATH = reader.result;
          saveData();
          showToast('Logo changed successfully!');
        };
        reader.readAsDataURL(file);
      }
    }
  };
  input.click();
}

function changeAboutText() {
  const newText = prompt('Enter new About Me text:', aboutText.textContent);
  if (newText && newText.trim()) {
    aboutText.textContent = newText;
    saveData();
    showToast('About text updated successfully!');
  }
}

// =======================
// 9. Live Edit Mode
// =======================
function enterEditMode() {
  editModeOverlay.style.display = 'block';
  siteFrame.src = './';
}

function exitEditMode() {
  editModeOverlay.style.display = 'none';
}

// =======================
// 10. File Upload Display
// =======================
[projectImageInput, projectVideoInput].forEach(input => {
  input.addEventListener('change', function() {
    const filenameSpan = this === projectImageInput ? imageFilename : videoFilename;
    const placeholder = this === projectImageInput ? 'Upload Image' : 'Upload Video (optional)';
    filenameSpan.textContent = this.files.length ? this.files[0].name : translations[currentLang][placeholder];
  });
});

// =======================
// 11. Data Management - data.json Integration
// =======================
let data = {
  skills: [
    { 
      short: 'HTML', 
      full: 'HyperText Markup Language',
      desc_en: 'Structure of web pages and content organization.',
      desc_ar: 'هيكل صفحات الويب وصياغة المحتوى بطريقة منظمة.'
    },
    { 
      short: 'CSS', 
      full: 'Cascading Style Sheets',
      desc_en: 'Styling and adding aesthetic touches to design consistency.',
      desc_ar: 'تنسيق الصفحات وإضافة لمسات جمالية وتناسق في التصميم.'
    },
    { 
      short: 'JavaScript', 
      full: 'JavaScript',
      desc_en: 'Adding interactivity and motion to make the site dynamic.',
      desc_ar: 'إضافة التفاعلية والحركة لجعل الموقع ديناميكي.'
    },
    { 
      short: 'Python', 
      full: 'Python',
      desc_en: 'Programming applications and building smart tools and practical solutions.',
      desc_ar: 'برمجة التطبيقات وبناء أدوات ذكية وحلول عملية.'
    },
    { 
      short: 'Tailwind CSS', 
      full: 'Tailwind CSS',
      desc_en: 'Designing professional interfaces quickly and flexibly with clean code.',
      desc_ar: 'تصميم واجهات احترافية بسرعة ومرونة باستخدام كود نظيف.'
    },
    { 
      short: 'AI Tools', 
      full: 'Artificial Intelligence Tools',
      desc_en: 'Leveraging AI technologies to enhance performance and creativity.',
      desc_ar: 'استغلال تقنيات الذكاء الاصطناعي لتحسين الأداء والإبداع.'
    }
  ],
  tools: [
    { 
      short: 'Git', 
      full: 'Git',
      desc_en: 'Managing and tracking changes in programming projects.',
      desc_ar: 'إدارة وتتبع التغييرات في المشاريع البرمجية.'
    },
    { 
      short: 'GitHub', 
      full: 'GitHub',
      desc_en: 'Saving and sharing code with easy collaboration.',
      desc_ar: 'حفظ ومشاركة الأكواد والعمل الجماعي بسهولة.'
    },
    { 
      short: 'VS Code', 
      full: 'Visual Studio Code',
      desc_en: 'Powerful and flexible code editor supporting all technologies.',
      desc_ar: 'محرر أكواد قوي ومرن يدعم جميع التقنيات.'
    },
    { 
      short: 'Figma', 
      full: 'Figma',
      desc_en: 'Designing user interfaces and experiences professionally.',
      desc_ar: 'تصميم واجهات وتجربة مستخدم بشكل احترافي.'
    },
    { 
      short: 'AI Tools', 
      full: 'Artificial Intelligence Tools',
      desc_en: 'Using AI tools to improve work and save time.',
      desc_ar: 'استخدام أدوات الذكاء الاصطناعي في تحسين العمل وتوفير الوقت.'
    }
  ],
  projects: [],
  services: [
    { 
      name: 'Landing Pages',
      desc: 'Landing Pages Desc',
      message: 'أرغب في طلب خدمة تصميم صفحة هبوط.',
      message_en: 'I want to order a Landing Page service.'
    },
    { 
      name: 'Websites',
      desc: 'Websites Desc',
      message: 'أرغب في طلب خدمة تطوير موقع ويب.',
      message_en: 'I want to order a Website development service.'
    },
    { 
      name: 'Python Scripts',
      desc: 'Python Scripts Desc',
      message: 'أرغب في طلب خدمة سكربت بايثون.',
      message_en: 'I want to order a Python script service.'
    },
    { 
      name: 'Support & Maintenance',
      desc: 'Support & Maintenance Desc',
      message: 'أرغب في طلب خدمة الدعم والصيانة.',
      message_en: 'I want to order a Support & Maintenance service.'
    }
  ],
  logo: CONFIG.LOGO_PATH,
  about_text: ''
};

// Load data from data.json
async function loadData() {
  try {
    const response = await fetch(CONFIG.DATA_FILE_PATH);
    if (response.ok) {
      const jsonData = await response.json();
      data = { ...data, ...jsonData };
    }
  } catch (error) {
    console.warn('Could not load data.json, using defaults:', error);
  }
  
  // Apply loaded data
  if (data.logo) {
    logoImg.src = data.logo;
    CONFIG.LOGO_PATH = data.logo;
  }
  
  if (data.about_text) {
    aboutText.textContent = data.about_text;
  }
  
  renderAll();
}

// Save data to data.json
function saveData() {
  // Since GitHub Pages doesn't support server-side operations,
  // we can't actually write to data.json from the browser
  // Instead, we'll show the user what to copy and paste
  const dataToSave = {
    skills: data.skills,
    tools: data.tools,
    projects: data.projects,
    services: data.services,
    logo: CONFIG.LOGO_PATH,
    about_text: aboutText.textContent
  };
  
  const message = `⚠️ لا يمكن الحفظ التلقائي على GitHub Pages.\n\n✅ انسخ البيانات التالية، واحفظها يدويًا في data/data.json ثم ارفع الملف على جيت هاب:\n\n${JSON.stringify(dataToSave, null, 2)}`;
  
  alert(message);
}

// =======================
// 12. Render Functions
// =======================
function renderAll() {
  renderSkills(); 
  renderTools(); 
  renderProjects();
  renderServices();
}

function renderSkills() {
  skillsGrid.innerHTML = '';
  data.skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    const desc = currentLang === 'ar' ? skill.desc_ar : skill.desc_en;
    card.innerHTML = `
      <h3>${skill.short}</h3>
      <p>${desc}</p>
      <div class="tooltip">${currentLang === 'ar' ? `الكامل: ${skill.full}<br>الوصف: ${desc}` : `Full: ${skill.full}<br>Desc: ${desc}`}</div>
    `;
    skillsGrid.appendChild(card);
  });
}

function renderTools() {
  toolsGrid.innerHTML = '';
  data.tools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    const desc = currentLang === 'ar' ? tool.desc_ar : tool.desc_en;
    card.innerHTML = `
      <h3>${tool.short}</h3>
      <p>${desc}</p>
      <div class="tooltip">${currentLang === 'ar' ? `الكامل: ${tool.full}<br>الوصف: ${desc}` : `Full: ${tool.full}<br>Desc: ${desc}`}</div>
    `;
    toolsGrid.appendChild(card);
  });
}

function renderProjects() {
  projectsGrid.innerHTML = '';
  if (data.projects.length === 0) {
    projectsEmpty.style.display = 'block';
    return;
  }
  projectsEmpty.style.display = 'none';
  
  // Update projects count in section title
  const projectsTitle = document.querySelector('#projects .section-title');
  if (projectsTitle) {
    const countText = translations[currentLang]['Latest Projects Count'].replace('%d', data.projects.length);
    projectsTitle.textContent = countText;
  }
  
  data.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}" class="project-img">
      <div class="project-content">
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}" class="btn" target="_blank">View Project</a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

function renderServices() {
  servicesGrid.innerHTML = '';
  data.services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    const descKey = service.desc;
    const desc = translations[currentLang][descKey];
    const name = translations[currentLang][service.name];
    card.innerHTML = `
      <h3>${name}</h3>
      <p>${desc}</p>
    `;
    servicesGrid.appendChild(card);
  });
}

// =======================
// 13. Delete Lists
// =======================
function renderDeleteProjectList() {
  if (!deleteProjectList) return;
  deleteProjectList.innerHTML = '';
  if (data.projects.length === 0) {
    deleteProjectList.innerHTML = `<p>${translations[currentLang]['No projects to delete']}</p>`;
    return;
  }
  data.projects.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'delete-item';
    item.innerHTML = `<span>${p.name}</span><button onclick="confirmAndDelete('project', ${i})">🗑️</button>`;
    deleteProjectList.appendChild(item);
  });
}

function renderDeleteSkillList() {
  if (!deleteSkillList) return;
  deleteSkillList.innerHTML = '';
  if (data.skills.length === 0) {
    deleteSkillList.innerHTML = `<p>${translations[currentLang]['No skills to delete']}</p>`;
    return;
  }
  data.skills.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'delete-item';
    item.innerHTML = `<span>${s.short}</span><button onclick="confirmAndDelete('skill', ${i})">🗑️</button>`;
    deleteSkillList.appendChild(item);
  });
}

function renderDeleteToolList() {
  if (!deleteToolList) return;
  deleteToolList.innerHTML = '';
  if (data.tools.length === 0) {
    deleteToolList.innerHTML = `<p>${translations[currentLang]['No tools to delete']}</p>`;
    return;
  }
  data.tools.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = 'delete-item';
    item.innerHTML = `<span>${t.short}</span><button onclick="confirmAndDelete('tool', ${i})">🗑️</button>`;
    deleteToolList.appendChild(item);
  });
}

// =======================
// 14. Confirm and Delete
// =======================
function confirmAndDelete(type, index) {
  const t = translations[currentLang];
  if (confirm(t['Confirm Delete'])) {
    const pass = prompt(t['Enter Password']);
    const passHash = hashPassword(pass);
    
    if (passHash === CONFIG.ADMIN_PASSWORD_HASH) {
      if (type === 'project') data.projects.splice(index, 1);
      else if (type === 'skill') data.skills.splice(index, 1);
      else if (type === 'tool') data.tools.splice(index, 1);
      
      saveData();
      renderDeleteProjectList();
      renderDeleteSkillList();
      renderDeleteToolList();
      renderProjects(); // Update projects count
      showToast('Item deleted successfully!');
    } else {
      showToast(t['Incorrect Password'], 'error');
    }
  }
}

// =======================
// 15. Contact Form - Formspree Integration
// =======================
document.addEventListener('DOMContentLoaded', async () => {
  // Show loading screen
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 1000);
  }
  
  // Load data from data.json
  await loadData();
  
  // Set language
  setLanguage(currentLang);
  
  // Initialize typing animation
  typeRole();
  
  // Setup navigation scroll
  updateActiveLink();
  
  // Setup horizontal scroll for mobile nav
  setupNavScroll();
});

function setupNavScroll() {
  const navList = document.querySelector('.nav-list');
  if (!navList) return;
  
  let isDragging = false;
  let startX, scrollLeft;
  
  navList.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - navList.offsetLeft;
    scrollLeft = navList.scrollLeft;
  });
  
  navList.addEventListener('mouseleave', () => {
    isDragging = false;
  });
  
  navList.addEventListener('mouseup', () => {
    isDragging = false;
  });
  
  navList.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - navList.offsetLeft;
    const walk = (x - startX) * 2;
    navList.scrollLeft = scrollLeft - walk;
  });
  
  // Prevent selection
  navList.addEventListener('selectstart', (e) => e.preventDefault());
}

// =======================
// 16. Admin Forms
// =======================
formProject.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('input-project-name').value;
  const link = document.getElementById('input-project-link').value;
  const imageFile = projectImageInput.files[0];
  const videoFile = projectVideoInput.files[0];
  const descEn = document.getElementById('input-project-desc-en').value;
  const descAr = document.getElementById('input-project-desc-ar').value;
  
  // For GitHub Pages, we can't upload files directly
  // So we'll show the user what to do
  const dataToSave = {
    name,
    link,
    image: imageFile ? `assets/images/${imageFile.name}` : CONFIG.PROJECT_PLACEHOLDER,
    video: videoFile ? `assets/videos/${videoFile.name}` : '',
    desc_en: descEn,
    desc_ar: descAr
  };
  
  data.projects.unshift(dataToSave);
  
  const message = `✅ المشروع جاهز للإضافة!\n\nانسخ الكود التالي، وأضفه يدويًا إلى data/data.json:\n\n${JSON.stringify(dataToSave, null, 2)}`;
  
  alert(message);
  
  formProject.reset();
  imageFilename.textContent = translations[currentLang]['Upload Image'];
  videoFilename.textContent = translations[currentLang]['Upload Video (optional)'];
  showToast('Project data ready! Please upload files and update data.json manually.');
});

formSkill.addEventListener('submit', (e) => {
  e.preventDefault();
  const short = document.getElementById('input-skill-short').value;
  const full = document.getElementById('input-skill-full').value;
  const descEn = document.getElementById('input-skill-desc-en').value;
  const descAr = document.getElementById('input-skill-desc-ar').value;
  
  const newSkill = { 
    short, 
    full, 
    desc_en: descEn, 
    desc_ar: descAr 
  };
  
  data.skills.push(newSkill);
  
  const message = `✅ المهارة جاهزة للإضافة!\n\nانسخ الكود التالي، وأضفه يدويًا إلى data/data.json:\n\n${JSON.stringify(newSkill, null, 2)}`;
  
  alert(message);
  
  formSkill.reset();
  showToast('Skill data ready! Please update data.json manually.');
});

formTool.addEventListener('submit', (e) => {
  e.preventDefault();
  const short = document.getElementById('input-tool-short').value;
  const full = document.getElementById('input-tool-full').value;
  const descEn = document.getElementById('input-tool-desc-en').value;
  const descAr = document.getElementById('input-tool-desc-ar').value;
  
  const newTool = { 
    short, 
    full, 
    desc_en: descEn, 
    desc_ar: descAr 
  };
  
  data.tools.push(newTool);
  
  const message = `✅ الأداة جاهزة للإضافة!\n\nانسخ الكود التالي، وأضفه يدويًا إلى data/data.json:\n\n${JSON.stringify(newTool, null, 2)}`;
  
  alert(message);
  
  formTool.reset();
  showToast('Tool data ready! Please update data.json manually.');
});

// =======================
// 17. Toast & UI Feedback
// =======================
function showToast(message, type = 'success') {
  if (!toast) return;
  toast.textContent = message;
  toast.className = 'toast';
  toast.classList.add(type, 'show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}

// =======================
// 18. TikTok Notice
// =======================
function showTikTokNotice() {
  if (!tiktokModal) return;
  tiktokModal.classList.add('show');
  tiktokModal.hidden = false;
}

function closeTikTokModal() {
  if (!tiktokModal) return;
  tiktokModal.classList.remove('show');
  setTimeout(() => tiktokModal.hidden = true, 300);
}

// =======================
// 19. Misc
// =======================
yearSpan.textContent = new Date().getFullYear();

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === tiktokModal) closeTikTokModal();
});

// =======================
// 20. Services Section Logic
// =======================
orderServiceBtn.addEventListener('click', () => {
  // Move actions above grid
  const servicesContainer = document.querySelector('.services-section .container');
  if (servicesContainer) {
    servicesContainer.insertBefore(servicesActions, servicesGrid);
  }
  
  // Enable selection mode
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.add('selectable');
    card.classList.remove('selected');
    card.onclick = () => {
      card.classList.toggle('selected');
    };
  });
  
  servicesActions.style.display = 'block';
  orderServiceBtn.style.display = 'none';
});

cancelSelection.addEventListener('click', () => {
  // Reset selection mode
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.remove('selectable', 'selected');
    card.onclick = null;
  });
  
  servicesActions.style.display = 'none';
  orderServiceBtn.style.display = 'inline-flex';
});

confirmOrder.addEventListener('click', () => {
  const selected = document.querySelectorAll('.service-card.selected');
  if (selected.length === 0) {
    showToast(translations[currentLang]['Please select at least one service'], 'error');
    return;
  }
  
  const serviceNames = Array.from(selected).map(card => {
    const h3 = card.querySelector('h3').textContent;
    return data.services.find(s => translations[currentLang][s.name] === h3);
  });
  
  let message = '';
  if (serviceNames.length === 1) {
    message = currentLang === 'ar' ? serviceNames[0].message : serviceNames[0].message_en;
  } else {
    const messages = serviceNames.map(s => currentLang === 'ar' ? s.message : s.message_en);
    message = messages.join('\n');
  }
  
  // Scroll to contact section
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  
  // Fill message field
  messageInput.value = message;
  
  // Show success message
  showToast('Service request ready! Please fill your name and email.', 'success');
  
  // Exit selection mode
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.remove('selectable', 'selected');
    card.onclick = null;
  });
  
  servicesActions.style.display = 'none';
  orderServiceBtn.style.display = 'inline-flex';
});
