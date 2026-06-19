window.portfolioProfile = {
	name: 'Eyüp Koyun',
	displayName: 'Eyüp Koyun',
	headline: '',
	headlineEn: '',
	intro: 'Otonom sistemler ve IoT çözümleri geliştiriyorum.',
	introEn: 'I develop autonomous systems and IoT solutions.',
	bio: 'Makine mühendisliğinden gelen tecrübemi, mekanik, elektrik-elektronik ve bilgisayar mühendisliği alanlarındaki teknik bilgimle birleştirerek; otonom sistemler, görüntü işleme ve simülasyon gibi teknolojik çözümler üretme kabiliyetine sahibim. TEKNOFEST yarışmalarında tasarladığım sistemler ve TÜBİTAK projelerinde gösterdiğim başarılarla teorik bilgimi pratiğe dökmüş bulunmaktayım. Gelecekte de bu sektörde çeşitli projelerde etkin roller üstlenmeyi hedefliyorum.',
	bioEn: 'Combining my mechanical engineering experience with technical knowledge in mechanical, electrical-electronic, and computer engineering, I have the capability to produce technological solutions in areas such as autonomous systems, image processing, and simulation. I have put my theoretical knowledge into practice through the systems I designed in TEKNOFEST competitions and successes in TÜBİTAK projects, and I aim to take active roles in various projects in this sector in the future.',
	avatar: 'images/PP.jpg',
	githubUrl: 'https://github.com/Eyupkoyun',
	linkedinUrl: 'https://www.linkedin.com/in/eyupkoyun/',
	repositoryCount: 15,
	contributionCount: 28,
	summaryPoints: [
		{ tr: 'Gömülü sistemler, görüntü işleme, otonom sistemler ve simülasyonları üzerine çalışmaktayım.', en: 'I work on embedded systems, image processing, autonomous systems, and their simulations.' },
		{ tr: 'Teknofest ve Tübitak projelerinde görüntü işleme, gömülü sistemler, mekanik ve elektronik tasarımları yaptım.', en: 'I designed image processing, embedded systems, mechanical, and electronic components in Teknofest and Tubitak projects.' }
	],
	skills: [
		'C++', 'Python', 'C#', 'C', 'Git', 'Linux', 'SQL', 'ESP32', 'STM32 (H7 & MP157)', 'Arduino', 'ASP.NET Core', 'AVR (Bare Metal)', 'Active Directory', 'Windows Server', 'ML (TF-IDF, Random Forest, SVM)', 'Gazebo', 'AutoCAD'
	],
	highlights: [
		{
			title: 'Kıyı Temizliği Drone Yönetimi', titleEn: 'Coastal Waste UAV Management',
			description: 'YOLOv12 ve ASP.NET Core tabanlı video-telemetri senkronizasyon sistemi.', descriptionEn: 'Video-telemetry synchronization system based on YOLOv12 and ASP.NET Core.',
			meta: 'AI & Web', url: 'https://github.com/Eyupkoyun/littter_detection_uav'
		},
		{
			title: 'Pothole Radar', titleEn: 'Pothole Radar',
			description: 'Yol çukurlarının tespiti ve haritalanması için Python ve React tabanlı radar dashboard.', descriptionEn: 'Python and React based radar dashboard for road pothole detection and mapping.',
			meta: 'Computer Vision', url: 'https://github.com/Eyupkoyun/pothole_radar'
		},
		{
			title: 'Konveyör Ayrıştırma', titleEn: 'Conveyor Sorting',
			description: 'YOLOv8 ve ROS2 tabanlı otomatik atık sınıflandırma ve ayrıştırma sistemi.', descriptionEn: 'YOLOv8 and ROS2 based automated waste classification and sorting system.',
			meta: 'Robotics', url: 'https://github.com/Eyupkoyun/ileri_derin_ogr'
		}
	],
	projects: [
		{
			id: 'akilli-sera',
			title: 'Yapay Zeka ile Kıyı Temizliği Drone Yönetimi (Bitirme Tezi)',
			titleEn: 'AI-Powered Coastal Waste Clean-Up Drone Management (Graduation Thesis)',
			category: 'Object Detection & ASP.NET',
			description: 'Bu çalışma, kıyı şeritlerinde biriken plastik atıkların tespiti ve haritalanması için düşük maliyetli, insansız hava araçları (İHA) tabanlı, verimli bir sistem geliştirmeyi amaçlamaktadır. YOLOv12 derin öğrenme mimarisi ve ASP.NET Core MVC tabanlı bir arayüz içermektedir.',
			descriptionEn: 'This study aims to develop a low-cost, UAV-based, and efficient system for the detection and mapping of plastic waste accumulating on coastal shorelines, featuring YOLOv12 deep learning architecture and an ASP.NET Core MVC-based interface.',
			technologies: ['Object Detection', 'ASP.NET Core', 'Cloudinary', 'YOLOv12', 'UAV'],
			team: ['Eyüp Koyun', 'Nur Hazal Çufalcı', 'Berke Akdoğan'],
			advisor: 'Dr. Öğr. Üyesi Aytaç Uğur Yerden',
			githubUrls: [
				{ label: 'Repository', url: 'https://github.com/Eyupkoyun/littter_detection_uav' }
			]
		},
		{
			id: 'pothole-radar',
			title: 'Pothole Radar - Yol Çukuru Tespit ve Haritalama',
			titleEn: 'Pothole Radar - Road Pothole Detection & Mapping',
			category: 'Computer Vision & Web Dashboard',
			description: 'Pothole Radar, yol çukurlarını tespit etmek ve haritalamak için geliştirilen bir sistemdir. Hem video + GPS verisini işleyip otomatik tespit yapan bir Python modülü hem de sonuçları interaktif bir harita üzerinden gösteren bir React dashboard içerir.',
			descriptionEn: 'Pothole Radar is a system developed to detect and map road potholes. It includes both a Python module that processes video + GPS data to perform automatic detection, and a React dashboard that displays the results on an interactive map.',
			technologies: ['YOLO', 'Python', 'React', 'Leaflet', 'Supabase'],
			githubUrls: [
				{ label: 'Repository', url: 'https://github.com/Eyupkoyun/pothole_radar' },
				{ label: 'Live App', url: 'https://pothole-radar.vercel.app/' }
			]
		},
		{
			id: 'conveyor-waste-sorting',
			title: 'Yapay Zeka Destekli Konveyör Bant Atık Ayrıştırma Sistemi',
			titleEn: 'AI-Powered Conveyor Belt Waste Sorting System',
			category: 'Deep Learning & Robotics',
			description: 'Konveyör bant üzerindeki atıklar YOLOv8s-cls modeliyle kamera görüntüsünden sınıflandırılır; plastik, cam ve metal tespitleri seri port üzerinden Arduino\'ya aktarılarak servo motorlarla ilgili kutulara yönlendirilir. Sensör geri bildirimleri ROS2 tabanlı dijital ikiz aracılığıyla gerçek dünya verileriyle karşılaştırılıp sistem doğruluğu izlenir.',
			descriptionEn: 'Waste on the conveyor belt is classified from the camera image using the YOLOv8s-cls model; plastic, glass, and metal detections are transmitted to the Arduino via the serial port and directed to the relevant bins using servo motors. Sensor feedbacks are compared with real-world data via a ROS2-based digital twin to monitor system accuracy.',
			technologies: ['YOLOv8s-cls', 'Arduino Uno', 'ROS2', 'Python', 'Digital Twin', 'Serial Port'],
			githubUrls: [
				{ label: 'Repository', url: 'https://github.com/Eyupkoyun/ileri_derin_ogr' },
				{ label: 'Demo Video', url: 'https://www.youtube.com/watch?v=SENVY5zxl2M' }
			]
		},
		{
			id: 'ir-replay',
			title: 'Kızılötesi (IR) İletişim ve Replay Analizi Projesi',
			titleEn: 'Infrared (IR) Communication and Replay Analysis Project',
			category: 'Embedded Security',
			description: 'Bu projede kızılötesi (IR) haberleşme sistemlerinin çalışma prensipleri incelenmiş, gerçek IR kumanda sinyalleri yakalanarak analiz edilmiş ve aynı sinyaller mikrodenetleyici aracılığıyla yeniden üretilmiştir. Çalışma kapsamında IR iletişimin temel yapısı ve replay (tekrar oynatma) saldırılarının uygulanabilirliği araştırılmıştır.',
			descriptionEn: 'In this project, the working principles of infrared (IR) communication systems were examined, real IR remote control signals were captured and analyzed, and the same signals were reproduced via a microcontroller. The basic structure of IR communication and the feasibility of replay attacks were investigated.',
			technologies: ['Infrared (IR)', 'Logic Analyzer', 'Microcontroller', 'Signal Analysis', 'Security'],
			githubUrls: [
				{ label: 'Repository', url: 'https://github.com/Eyupkoyun/ir-replay-block' },
				{ label: 'Article', url: 'https://medium.com/@xeyupkoyun/k%C4%B1z%C4%B1l%C3%B6tesi-ir-kumandalar%C4%B1-hacklemek-replay-sald%C4%B1r%C4%B1lar%C4%B1-ve-rolling-code-savunmas%C4%B1-6f6a5593b37b' }
			]
		},
		{
			id: 'rc-tank',
			title: 'Otonom Labirent Çözme Yetenekli İnsansız Kara Aracı (RC Tank)',
			titleEn: 'Autonomous Maze Solving Unmanned Ground Vehicle (RC Tank)',
			category: 'Embedded Systems & Robotics',
			description: 'Bu proje, otonom labirent çözme yetenekli uzaktan kumandalı tank uygulamasının iki farklı donanım versiyonunu içerir: PIC16F877A tabanlı gömülü sistem versiyonu ve Arduino Mega2560 Pro tabanlı C++/Arduino versiyonu. Her iki versiyon da Bluetooth ile joystick/gamepad komutlarını alıp palet motorları, servo kule/namlu ve ek aksiyonları (lazer, ateş, sinyal, fener, korna) kontrol etmeye odaklanır.',
			descriptionEn: 'This project includes two different hardware versions of an remote-controlled tank application with autonomous maze solving capabilities: a PIC16F877A-based embedded system version and an Arduino Mega2560 Pro-based C++/Arduino version. Both versions focus on receiving joystick/gamepad commands via Bluetooth to control track motors, servo turret/barrel, and additional actions (laser, firing, signaling, spotlight, horn).',
			technologies: ['PIC16F877A', 'Arduino Mega2560 Pro', 'CCS C', 'Bluetooth HC-06', 'Embedded Systems'],
			githubUrls: [
				{ label: 'Repository', url: 'https://github.com/Eyupkoyun/Rc-tank-embedded' },
				{ label: 'Demo Video', url: 'https://www.youtube.com/watch?v=eloVMIhDCvM' }
			]
		},
		{
			id: 'event-management',
			title: 'Etkinlik Yönetim Sistemi (1. Sınıf Projesi)',
			titleEn: 'Event Management System (1st Year Project)',
			category: 'Console Application',
			description: 'Bu proje, C# konsol uygulaması olarak hazırlanmış bir Etkinlik Yönetim Sistemidir. Organizasyonlar etkinlik oluşturup yönetmek, katılımcılar da etkinliklere kaydolmak veya kayıtlarını iptal etmek amacıyla sistemi kullanabilir.',
			descriptionEn: 'This project is an Event Management System prepared as a C# console application. Organizations can use the system to create and manage events, and participants to register for or cancel registrations.',
			technologies: ['C#', '.NET Console', 'OOP', 'Exception Handling'],
			githubUrls: [
				{ label: 'Repository', url: 'https://github.com/Eyupkoyun/ETKINLIK_YONETIM_SISTEMI' }
			]
		}
	],
	certificates: [
		{
			title: 'CCNA: Switching, Routing, and Wireless Essentials',
			titleEn: 'CCNA: Switching, Routing, and Wireless Essentials',
			issuer: 'SiberYetenek - CyberTalent / Cisco Networking Academy',
			date: '10.06.2025',
			description: 'SiberYetenek - CyberTalent ve Cisco Networking Academy iş birliğiyle sunulan CCNA: Switching, Routing, and Wireless Essentials eğitimi başarı sertifikası.',
			descriptionEn: 'Certificate of completion for the CCNA: Switching, Routing, and Wireless Essentials course offered by CyberTalent through the Cisco Networking Academy program.',
			logo: '',
			urlTr: 'Sertifikalar/_certificate_creyupkoyun0-gmail-com_0d46fc13-7dd3-4970-8c2d-3fa7a45560ba.pdf',
			urlEn: 'Sertifikalar/_certificate_creyupkoyun0-gmail-com_0d46fc13-7dd3-4970-8c2d-3fa7a45560ba.pdf'
		},
		{
			title: 'CCNA: Introduction to Networks',
			titleEn: 'CCNA: Introduction to Networks',
			issuer: 'SiberYetenek - CyberTalent / Cisco Networking Academy',
			date: '25.04.2025',
			description: 'SiberYetenek - CyberTalent ve Cisco Networking Academy iş birliğiyle sunulan CCNA: Introduction to Networks eğitimi başarı sertifikası.',
			descriptionEn: 'Certificate of completion for the CCNA: Introduction to Networks course offered by CyberTalent through the Cisco Networking Academy program.',
			logo: '',
			urlTr: 'Sertifikalar/_certificate_creyupkoyun0-gmail-com_afaf2c12-f3ea-45a7-ac99-b963c32c9dd8.pdf',
			urlEn: 'Sertifikalar/_certificate_creyupkoyun0-gmail-com_afaf2c12-f3ea-45a7-ac99-b963c32c9dd8.pdf'
		},
		{
			title: 'Introduction to Cybersecurity',
			titleEn: 'Introduction to Cybersecurity',
			issuer: 'SiberYetenek - CyberTalent / Cisco Networking Academy',
			date: '20.11.2025',
			description: 'SiberYetenek - CyberTalent ve Cisco Networking Academy iş birliğiyle sunulan Introduction to Cybersecurity eğitimi başarı sertifikası.',
			descriptionEn: 'Certificate of completion for the Introduction to Cybersecurity course offered by CyberTalent through the Cisco Networking Academy program.',
			logo: '',
			urlTr: 'Sertifikalar/Introduction_to_Cybersecurity_certificate_creyupkoyun0-gmail-com_6c53849a-a4a0-4d48-8f6b-97f3da5dbaa1.pdf',
			urlEn: 'Sertifikalar/Introduction_to_Cybersecurity_certificate_creyupkoyun0-gmail-com_6c53849a-a4a0-4d48-8f6b-97f3da5dbaa1.pdf'
		},
		{
			title: 'Introduction to Data Science',
			titleEn: 'Introduction to Data Science',
			issuer: 'SiberYetenek - CyberTalent / Cisco Networking Academy',
			date: '20.11.2025',
			description: 'SiberYetenek - CyberTalent ve Cisco Networking Academy iş birliğiyle sunulan Introduction to Data Science eğitimi başarı sertifikası.',
			descriptionEn: 'Certificate of completion for the Introduction to Data Science course offered by CyberTalent through the Cisco Networking Academy program.',
			logo: '',
			urlTr: 'Sertifikalar/Introduction_to_Data_Science_certificate_creyupkoyun0-gmail-com_43700c5b-1acb-4979-bd1f-42cff560daea.pdf',
			urlEn: 'Sertifikalar/Introduction_to_Data_Science_certificate_creyupkoyun0-gmail-com_43700c5b-1acb-4979-bd1f-42cff560daea.pdf'
		},
		{
			title: 'CCNA: Cybersecurity Essentials',
			titleEn: 'CCNA: Cybersecurity Essentials',
			issuer: 'SiberYetenek - CyberTalent / Cisco Networking Academy',
			date: '20.11.2025',
			description: 'SiberYetenek - CyberTalent ve Cisco Networking Academy iş birliğiyle sunulan Cybersecurity Essentials eğitimi başarı sertifikası.',
			descriptionEn: 'Certificate of completion for the Cybersecurity Essentials course offered by CyberTalent through the Cisco Networking Academy program.',
			logo: '',
			urlTr: 'Sertifikalar/Junior_Cybersecurity_Analyst_Career_Path_certificate_creyupkoyun0-gmail-com_4c70eeff-8f4e-47eb-9cf0-666725464388.pdf',
			urlEn: 'Sertifikalar/Junior_Cybersecurity_Analyst_Career_Path_certificate_creyupkoyun0-gmail-com_4c70eeff-8f4e-47eb-9cf0-666725464388.pdf'
		},
		{
			title: 'Yapay Zeka Yaz Kampı 2025 Mezuniyet Sertifikası',
			titleEn: 'Artificial Intelligence Summer Camp 2025 Certificate of Graduation',
			issuer: 'Yapay Zeka Yaz Kampı 2025',
			date: '17.08.2025',
			description: 'Yapay Zeka Yaz Kampı 2025 programı başarıyla tamamlanmıştır. Sertifika ID: zm7fumn7x4.',
			descriptionEn: 'Successfully completed the Artificial Intelligence Summer Camp 2025 program. Certificate ID: zm7fumn7x4.',
			logo: '',
			urlTr: 'Sertifikalar/Eyüp koyun - 2025-08-17.pdf',
			urlEn: 'Sertifikalar/Eyüp koyun - 2025-08-17.pdf'
		},
		{
			title: 'İHA-0 Sportif/Amatör Pilot Lisansı',
			titleEn: 'UAV-0 Sport/Amateur Pilot License',
			issuer: 'T.C. Sivil Havacılık Genel Müdürlüğü (SHGM)',
			date: '26.08.2025',
			description: 'T.C. Sivil Havacılık Genel Müdürlüğü tarafından onaylı, TR-IHA0H12301808 lisans numaralı İHA-0 pilot lisansı.',
			descriptionEn: 'Approved UAV-0 Pilot License with license number TR-IHA0H12301808, issued by the Directorate General of Civil Aviation.',
			logo: '',
			urlTr: 'Sertifikalar/License (12301808).pdf',
			urlEn: 'Sertifikalar/License (12301808).pdf'
		},
		{
			title: 'İHA-1 Sportif/Amatör Pilot Lisansı',
			titleEn: 'UAV-1 Sport/Amateur Pilot License',
			issuer: 'T.C. Sivil Havacılık Genel Müdürlüğü (SHGM)',
			date: '26.08.2025',
			description: 'T.C. Sivil Havacılık Genel Müdürlüğü tarafından onaylı, TR-IHA1H12301810 lisans numaralı İHA-1 pilot lisansı.',
			descriptionEn: 'Approved UAV-1 Pilot License with license number TR-IHA1H12301810, issued by the Directorate General of Civil Aviation.',
			logo: '',
			urlTr: 'Sertifikalar/License (12301810).pdf',
			urlEn: 'Sertifikalar/License (12301810).pdf'
		},
		{
			title: 'İleri Derin Öğrenme Birincilik Sertifikası',
			titleEn: 'Advanced Deep Learning First Place Certificate',
			issuer: 'İstanbul Gedik Üniversitesi',
			date: '2026',
			description: 'İleri Derin Öğrenme yarışması/dersi kapsamında kazanılan birincilik başarı sertifikası.',
			descriptionEn: 'First place achievement certificate awarded within the scope of the Advanced Deep Learning course/competition.',
			logo: '',
			urlTr: 'Sertifikalar/derin_ogr_birincilik.pdf',
			urlEn: 'Sertifikalar/derin_ogr_birincilik.pdf'
		},
		{
			title: 'ETSC\'26 (International Energy Transition and Sustainability Conference) Katılım Belgesi',
			titleEn: 'ETSC\'26 (International Energy Transition and Sustainability Conference) Certificate of Participation',
			issuer: 'ETSC\'26 Conference Committee',
			date: '20.03.2026',
			description: 'ETSC\'26 kapsamında gerçekleştirilen bilimsel çalışmalara katılım ve bildiri sunumu belgesi.',
			descriptionEn: 'Certificate of participation and paper presentation at ETSC\'26 (International Energy Transition and Sustainability Conference).',
			logo: '',
			urlTr: 'Sertifikalar/etsc_2026.pdf',
			urlEn: 'Sertifikalar/etsc_2026.pdf'
		}
	],
	careerHistory: [
		{
			company: 'TEKNOFEST 2026 (İnsansız Kara Aracı)',
			logo: '',
			emoji: '🤖',
			role: 'Takım Kaptanı', roleEn: 'Team Captain',
			date: '2026', dateEn: '2026',
			location: 'İstanbul, Türkiye', locationEn: 'Istanbul, Turkey',
			description: 'İnsansız Kara Aracı yarışmasında takım kaptanlığı görevini üstlendim. Gömülü sistemler, mekanik ve elektronik tasarım ile üretim süreçlerinin tamamı bana aittir.',
			descriptionEn: 'Served as the Team Captain for the Unmanned Ground Vehicle (UGV) competition. Embedded systems, mechanical, and electronic design/manufacturing processes belong entirely to me.'
		},
		{
			company: 'TEKNOFEST 2026 (Robolig)',
			logo: '',
			emoji: '🚀',
			role: 'Takım Kaptanı', roleEn: 'Team Captain',
			date: '2026', dateEn: '2026',
			location: 'İstanbul, Türkiye', locationEn: 'Istanbul, Turkey',
			description: 'Robolig yarışmasında takım kaptanlığı görevini üstlendim. Aracın mekanik, elektronik sistemleri ve iletişim yazılımlarının geliştirilmesi tamamen bana aittir.',
			descriptionEn: 'Served as the Team Captain for the Robolig competition. The mechanical/electronic systems and communication software of the vehicle belong entirely to me.'
		},
		{
			company: 'TEKNOFEST 2026 (Sanayide Robotik Uygulamalar)',
			logo: '',
			emoji: '🏭',
			role: 'Takım Kaptanı', roleEn: 'Team Captain',
			date: '2026', dateEn: '2026',
			location: 'İstanbul, Türkiye', locationEn: 'Istanbul, Turkey',
			description: 'Sanayide Robotik Uygulamalar yarışmasında takım kaptanlığı görevini üstlendim. Mekanik ve elektrik-elektronik sistemlerin tasarımı ve üretimi bana aittir.',
			descriptionEn: 'Served as the Team Captain for the Robotic Applications in Industry competition. The design and manufacturing of the mechanical and electrical-electronic systems belong to me.'
		},
		{
			company: 'Kartal Belediyesi',
			logo: '',
			emoji: '🏛️',
			role: 'Proje Yürütücüsü', roleEn: 'Project Manager',
			date: '2025 - 2026', dateEn: '2025 - 2026',
			location: 'İstanbul, Türkiye', locationEn: 'Istanbul, Turkey',
			description: 'Kartal Belediyesi özelinde proje yürütücülüğü yaptım. Projenin uçtan uca (end-to-end) tasarım, üretim ve saha uygulamasını bizzat kendim gerçekleştirdim.',
			descriptionEn: 'Managed a project specifically for Kartal Municipality. Personally carried out the end-to-end design, manufacturing, and field implementation of the project.'
		},
		{
			company: 'Fapatech (eding.com.tr)',
			logo: '',
			emoji: '💻',
			role: 'Web Geliştirici', roleEn: 'Web Developer',
			date: '2025', dateEn: '2025',
			location: 'İstanbul, Türkiye', locationEn: 'Istanbul, Turkey',
			description: 'Web Geliştirici olarak görev aldım. Sitenin admin panelini AdminLTE şablonuna uygun şekilde baştan tasarlayıp geliştirdim.',
			descriptionEn: 'Worked as a Web Developer. Redesigned and developed the admin panel of the website from scratch in accordance with the AdminLTE template.'
		},
		{
			company: 'TEKNOFEST 2025 (İnsansız Kara Aracı)',
			logo: '',
			emoji: '📡',
			role: 'Araç İletişim Sorumlusu', roleEn: 'Vehicle Communication Officer',
			date: '2025', dateEn: '2025',
			location: 'İstanbul, Türkiye', locationEn: 'Istanbul, Turkey',
			description: 'Teknofest İnsansız Kara Aracı projesinde araç iletişim sorumlusu olarak kablosuz veri iletimi ve telemetri protokolleri üzerine çalıştım (Takım yarışmadan çekilmiştir).',
			descriptionEn: 'Worked as a Vehicle Communication Officer on the Teknofest UGV project, focusing on wireless data transmission and telemetry protocols (The team withdrew from the competition).'
		}
	],
	articles: [
		{
			title: 'Autonomous Coastal Waste Detection and Localization Using UAV',
			titleEn: 'Autonomous Coastal Waste Detection and Localization Using UAV',
			publisher: 'Uluslararası Dergi Yazısı',
			publisherEn: 'International Journal Article',
			date: '2026',
			description: 'Sahil kesimlerindeki atıkları dronelar kullanarak minimum giderle tespit etmek için üretilen nesne tespit projesine ait uluslararası dergi yazısı. DOI: https://doi.org/10.65582/aifsc.2026.010',
			descriptionEn: 'International journal article on an object detection project developed to detect coastal waste using UAVs at minimum cost. DOI: https://doi.org/10.65582/aifsc.2026.010',
			url: 'https://doi.org/10.65582/aifsc.2026.010',
			images: []
		},
		{
			title: 'Autonomous Coastal Waste Detection and Localization Using UAV (ETSC’26 Abstract)',
			titleEn: 'Autonomous Coastal Waste Detection and Localization Using UAV (ETSC’26 Abstract)',
			publisher: 'ETSC’26 Bildiri Özeti Kitabı',
			publisherEn: 'ETSC’26 Abstract Book',
			date: 'Mart 2026',
			dateEn: 'March 2026',
			description: 'Eyup Koyun, International Energy Transition and Sustainability Conference (ETSC’26) Abstract Book, sf. 92, İstanbul Gedik Üniversitesi Yayınları, Mart 2026. DOI: 10.61150/gedikyay.2603 | E-ISBN: 978-625-92345-0-2',
			descriptionEn: 'Eyup Koyun, International Energy Transition and Sustainability Conference (ETSC’26) Abstract Book, p. 92, Istanbul Gedik University Press, March 2026. DOI: 10.61150/gedikyay.2603 | E-ISBN: 978-625-92345-0-2',
			url: 'https://doi.org/10.61150/gedikyay.2603',
			images: []
		}
	],
	teknofest: [],
	currentFocus: [
		{ tr: 'Yazılım Geliştirme: Python, C++, C, C# (.NET Core)', en: 'Software Development: Python, C++, C, C# (.NET Core)' },
		{ tr: 'Gömülü AI ve Otonom Sistemler: STM32MP157, Edge AI', en: 'Embedded AI & Autonomous Systems: STM32MP157, Edge AI' },
		{ tr: 'IoT ve Gömülü Platformlar: Linux, RTOS, STM32, ESP32', en: 'IoT & Embedded Platforms: Linux, RTOS, STM32, ESP32' },
		{ tr: 'Haberleşme Protokolleri: UART, SPI, I2C, LoRa, ESP-NOW, RS485', en: 'Comm Protocols: UART, SPI, I2C, LoRa, ESP-NOW, RS485' },
		{ tr: 'Versiyon Kontrol: Git', en: 'Version Control: Git' },
		{ tr: 'Dil Yetkinliği: İngilizce C1 (88/100)', en: 'Language Proficiency: English C1 (88/100)' },
		{ tr: 'İlgi Alanları: Robotik, Gömülü Sistemler, Görüntü İşleme, Simülasyon', en: 'Interests: Robotics, Embedded Systems, Image Processing, Simulation' }
	],
	contactText: 'Yeni proje fikirleri, iş birlikleri veya teknik görüşmeler için GitHub ya da LinkedIn üzerinden ulaşılabilir.',
	contactTextEn: 'Available for new project ideas, collaborations, or technical discussions via GitHub or LinkedIn.',
	references: [
		{
			name: 'Dr. Aytaç Uğur Yerden',
			title: 'İstanbul Gedik Üniversitesi Yapay Zeka Mühendisliği Bölüm Başkanı',
			titleEn: 'Head of Artificial Intelligence Engineering Department, Istanbul Gedik University',
			url: 'https://www.linkedin.com/in/aytaç-uğur-yerden/',
			category: 'academic',
			categoryTr: 'Akademik Referans',
			categoryEn: 'Academic Reference',
			icon: 'fas fa-university'
		}
	]
};
