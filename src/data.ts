export type Category = 'marketing' | 'it';

export interface PostImage {
  drive_id: string;
  preview_url: string;
  download_url: string;
  filename: string;
}

export interface Post {
  day: number;
  category: Category;
  category_label: string;
  title: string;
  content: string;
  hashtags: string[];
  image: PostImage;
}

export const postsData: Post[] = [
  {
    "day": 1,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "১০,০০০ পোস্ট ভিউ পেয়েছেন, কিন্তু বিক্রি বেড়েছে কি?",
    "content": "বেশিরভাগ মার্কেটিং এজেন্সি লাইক, ফলোয়ার আর রিচ দেখিয়ে খুশি করে রাখে। কিন্তু আপনার ব্যবসার আসল প্রশ্ন একটাই, কত টাকার সেল হলো। AmigoPro তে আমরা রিচ না, রেভিনিউ মাপি। কতজন লিড এলো, কতজন মিটিং বুক করলো, আর শেষে কত টাকা আপনার অ্যাকাউন্টে ঢুকলো, এটাই আমাদের সাফল্যের মাপকাঠি।\n\nআপনার বর্তমান মার্কেটিং রিপোর্টে \"রিচ\" আছে, নাকি \"রেভিনিউ\"? কমেন্টে জানান।\n\n#DigitalMarketingBD #B2BMarketing #AmigoPro #LeadGeneration",
    "hashtags": [
      "#DigitalMarketingBD",
      "#B2BMarketing",
      "#AmigoPro",
      "#LeadGeneration"
    ],
    "image": {
      "drive_id": "1ipVUps3RCrIrsIx_pgA5UIBERfMfmfS5",
      "preview_url": "https://lh3.googleusercontent.com/d/1ipVUps3RCrIrsIx_pgA5UIBERfMfmfS5=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1ipVUps3RCrIrsIx_pgA5UIBERfMfmfS5",
      "filename": "amigopro_day01.jpg"
    }
  },
  {
    "day": 2,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "গুগলে সার্চ করলে আপনার কোম্পানি কোথায় থাকে?",
    "content": "ঢাকার একজন CEO যখন আপনার সার্ভিস গুগলে সার্চ করেন, আপনি প্রথম পেজে না থাকলে সেই কাস্টমার আপনার কম্পিটিটরের কাছে চলে যায়। SEO মানে শুধু কিওয়ার্ড বসানো নয়, এটা ওয়েবসাইটের স্ট্রাকচার, স্পিড আর কনটেন্ট মিলিয়ে গুগলের চোখে আপনাকে বিশ্বাসযোগ্য করে তোলা।\n\nআপনার ওয়েবসাইট গুগলের প্রথম পেজে আছে তো? ফ্রি SEO অডিটের জন্য ইনবক্সে মেসেজ করুন।\n\n#SEO #SEOBangladesh #GoogleRanking #AmigoPro",
    "hashtags": [
      "#SEO",
      "#SEOBangladesh",
      "#GoogleRanking",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1nVHHyqP-Gby0pvt7gQ7i_zVnNhcTKyl-",
      "preview_url": "https://lh3.googleusercontent.com/d/1nVHHyqP-Gby0pvt7gQ7i_zVnNhcTKyl-=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1nVHHyqP-Gby0pvt7gQ7i_zVnNhcTKyl-",
      "filename": "amigopro_day02.jpg"
    }
  },
  {
    "day": 3,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "শুধু পোস্ট বুস্ট করাই কি সোশ্যাল মিডিয়া মার্কেটিং?",
    "content": "অনেকেই মনে করেন কিছু টাকা দিয়ে পোস্ট বুস্ট করলেই সোশ্যাল মিডিয়া মার্কেটিং হয়ে যায়। বাস্তবে এটা একটা পুরো ফানেল, কনটেন্ট প্ল্যানিং, টার্গেট অডিয়েন্স রিসার্চ, ক্রিয়েটিভ ডিজাইন আর রিটার্গেটিং, সব মিলিয়ে একটা সিস্টেম যা পেজের লাইক না বাড়িয়ে আপনার সেলস বাড়ায়।\n\nআপনার সোশ্যাল মিডিয়া থেকে সত্যিকারের সেলস আসছে কি? জানান কমেন্টে।\n\n#SocialMediaMarketing #SMM #FacebookMarketing #AmigoPro",
    "hashtags": [
      "#SocialMediaMarketing",
      "#SMM",
      "#FacebookMarketing",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "17oTtaF_kPvpct7ebkmCsD19pkgFmO0SA",
      "preview_url": "https://lh3.googleusercontent.com/d/17oTtaF_kPvpct7ebkmCsD19pkgFmO0SA=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=17oTtaF_kPvpct7ebkmCsD19pkgFmO0SA",
      "filename": "amigopro_day03.jpg"
    }
  },
  {
    "day": 4,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "একটা লিড প্রথম দিনেই কেনে না।",
    "content": "বেশিরভাগ কাস্টমার প্রথমবার ওয়েবসাইটে এসেই কেনেন না, তারা রিসার্চ করেন, তুলনা করেন, তারপর সিদ্ধান্ত নেন। এই সময়টাতে যদি আপনি ইমেইলের মাধ্যমে ভ্যালু দিতে থাকেন, তাহলে যখন তিনি কিনতে প্রস্তুত হবেন, প্রথম নামটাই থাকবে আপনার ব্র্যান্ড। এটাকেই বলে অটোমেটেড ড্রিপ ক্যাম্পেইন।\n\nআপনার ঠান্ডা হয়ে যাওয়া লিডগুলো কি এখনো ফলোআপ পাচ্ছে?\n\n#EmailMarketing #LeadNurturing #B2BSales #AmigoPro",
    "hashtags": [
      "#EmailMarketing",
      "#LeadNurturing",
      "#B2BSales",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "117zkzCZp2bGPa7zDZNc-xztTSkME7Y5y",
      "preview_url": "https://lh3.googleusercontent.com/d/117zkzCZp2bGPa7zDZNc-xztTSkME7Y5y=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=117zkzCZp2bGPa7zDZNc-xztTSkME7Y5y",
      "filename": "amigopro_day04.jpg"
    }
  },
  {
    "day": 5,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "ইমেইল খোলা হয় না, কিন্তু SMS পড়া হয় প্রায় সবসময়।",
    "content": "ওপেন রেটের হিসেবে SMS মার্কেটিং এখনও সবচেয়ে শক্তিশালী চ্যানেলগুলোর একটা। প্রমোশন, রিমাইন্ডার আর আপডেট সরাসরি কাস্টমারের হাতে পৌঁছে দেওয়ার জন্য এটা দ্রুত আর কার্যকরী একটা মাধ্যম।\n\nআপনার বিজনেসে SMS ক্যাম্পেইন চালু আছে?\n\n#SMSMarketing #DigitalMarketing #AmigoPro",
    "hashtags": [
      "#SMSMarketing",
      "#DigitalMarketing",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "16uJVOLBPzckndC17n0cpA-qGUKIS9BjB",
      "preview_url": "https://lh3.googleusercontent.com/d/16uJVOLBPzckndC17n0cpA-qGUKIS9BjB=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=16uJVOLBPzckndC17n0cpA-qGUKIS9BjB",
      "filename": "amigopro_day05.jpg"
    }
  },
  {
    "day": 6,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "ওয়েবসাইটে ট্রাফিক আসছে, কিন্তু সেল হচ্ছে না কেন?",
    "content": "বেশিরভাগ সময় সমস্যা ট্রাফিকে না, ল্যান্ডিং পেজে। একটা সাধারণ হোমপেজ আর একটা হাই কনভার্টিং ল্যান্ডিং পেজের মধ্যে পার্থক্য হলো, একটা ভিজিটরকে তথ্য দেয়, আর অন্যটা ভিজিটরকে অ্যাকশন নিতে বাধ্য করে।\n\nআপনার অ্যাড ক্যাম্পেইনের জন্য আলাদা ল্যান্ডিং পেজ আছে তো?\n\n#LandingPage #ConversionRate #DigitalMarketingBD #AmigoPro",
    "hashtags": [
      "#LandingPage",
      "#ConversionRate",
      "#DigitalMarketingBD",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1n-nP4sV4Nm81KVTXHrQO6MiHz_EN_-sZ",
      "preview_url": "https://lh3.googleusercontent.com/d/1n-nP4sV4Nm81KVTXHrQO6MiHz_EN_-sZ=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1n-nP4sV4Nm81KVTXHrQO6MiHz_EN_-sZ",
      "filename": "amigopro_day06.jpg"
    }
  },
  {
    "day": 7,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "যে কাস্টমার একবার আপনার ওয়েবসাইটে এসে চলে গেছে, তাকে ভুলে যাচ্ছেন?",
    "content": "যে মানুষ একবার আপনার প্রোডাক্ট দেখেছে কিন্তু কেনেনি, সে আসলে সবচেয়ে গরম লিড। মেটা আর গুগলের রিটার্গেটিং অ্যাড দিয়ে ঠিক সেই মানুষদের সামনে আবার আপনার ব্র্যান্ড নিয়ে আসা যায়, যাদের কনভার্ট হওয়ার সম্ভাবনা সবচেয়ে বেশি।\n\nআপনার রিটার্গেটিং পিক্সেল সেটআপ করা আছে তো?\n\n#RetargetingAds #MetaAds #GoogleAds #AmigoPro",
    "hashtags": [
      "#RetargetingAds",
      "#MetaAds",
      "#GoogleAds",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1OWB6TusAjpkFeOltvzJK2M55EL4VEKJ_",
      "preview_url": "https://lh3.googleusercontent.com/d/1OWB6TusAjpkFeOltvzJK2M55EL4VEKJ_=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1OWB6TusAjpkFeOltvzJK2M55EL4VEKJ_",
      "filename": "amigopro_day07.jpg"
    }
  },
  {
    "day": 8,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "আপনার সেলস টিমের ইনবক্সে কতগুলো লিড হারিয়ে যাচ্ছে, খবর আছে?",
    "content": "ফেসবুক ফর্ম বা ওয়েবসাইট থেকে আসা লিড যদি সরাসরি ইমেইলে গিয়ে পড়ে থাকে, অনেক সময় সেলস টিম সময়মতো দেখেই না। CRM ইন্টিগ্রেশন থাকলে প্রতিটা লিড তৎক্ষণাৎ নোটিফিকেশন হিসেবে চলে যায় সেলস টিমের কাছে, এক মিনিটও দেরি হয় না।\n\nআপনার লিড ম্যানেজমেন্ট এখনো ম্যানুয়াল?\n\n#CRM #HubSpot #SalesAutomation #AmigoPro",
    "hashtags": [
      "#CRM",
      "#HubSpot",
      "#SalesAutomation",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "14lEOKxuleDRbG5AsGjtcIr9z-r-CME7H",
      "preview_url": "https://lh3.googleusercontent.com/d/14lEOKxuleDRbG5AsGjtcIr9z-r-CME7H=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=14lEOKxuleDRbG5AsGjtcIr9z-r-CME7H",
      "filename": "amigopro_day08.jpg"
    }
  },
  {
    "day": 9,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "৪৫টা ভেরিফাইড লিড, ১২টা মিটিং, ৩টা সেল ক্লোজ। সংখ্যাটা ছোট শুনতে হলেও রেজাল্ট বড়。",
    "content": "মার্কেটিং সফল কিনা বোঝার সহজ উপায় হলো ফানেলের শেষ পর্যন্ত তাকানো। ১০ হাজার রিচ থেকে যদি একটাও সেল না আসে, সেটা শূন্য রেজাল্ট। কিন্তু মাত্র কয়েকশ টার্গেটেড রিচ থেকে যদি বাস্তবিক কয়েকটা সেল আসে, সেটাই আসল গ্রোথ।\n\nআপনার ফানেল কোথায় লিক করছে জানতে চান? ফ্রি অডিট বুক করুন।\n\n#B2BGrowth #SalesFunnel #AmigoPro",
    "hashtags": [
      "#B2BGrowth",
      "#SalesFunnel",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1BsMHXrFIZHmibT_hu3yrQagxFa2QwerA",
      "preview_url": "https://lh3.googleusercontent.com/d/1BsMHXrFIZHmibT_hu3yrQagxFa2QwerA=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1BsMHXrFIZHmibT_hu3yrQagxFa2QwerA",
      "filename": "amigopro_day09.jpg"
    }
  },
  {
    "day": 10,
    "category": "marketing",
    "category_label": "ডিজিটাল মার্কেটিং",
    "title": "এজেন্সি বদলাতে বদলাতে ক্লান্ত?",
    "content": "এক এজেন্সি SEO করে, আরেকজন অ্যাড চালায়, আরেকজন ওয়েবসাইট বানায়, আর কোনো সমস্যা হলে সবাই একে অপরের দিকে আঙুল তোলে। যখন একটা টিম পুরো ইকোসিস্টেম সামলায়, দায়িত্বও থাকে একজনের কাঁধে, রেজাল্টও আসে দ্রুত।\n\nকতগুলো ভেন্ডরের সাথে এখন কাজ করছেন?\n\n#B2BMarketing #GrowthEcosystem #AmigoPro",
    "hashtags": [
      "#B2BMarketing",
      "#GrowthEcosystem",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "19rbTljlkkc8GVfgvYfVcNEiFOxVp3NND",
      "preview_url": "https://lh3.googleusercontent.com/d/19rbTljlkkc8GVfgvYfVcNEiFOxVp3NND=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=19rbTljlkkc8GVfgvYfVcNEiFOxVp3NND",
      "filename": "amigopro_day10.jpg"
    }
  },
  {
    "day": 11,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "আপনার ওয়েবসাইট কি স্রেফ একটা ডিজিটাল ভিজিটিং কার্ড?",
    "content": "অনেক ওয়েবসাইট শুধু তথ্য দেখায়, কোনো লিড ক্যাপচার করে না, কোনো CRM এর সাথে যুক্ত না। একটা ঠিকঠাক তৈরি ওয়েবসাইট আসলে একটা সিস্টেম, যেখানে প্রতিটা ভিজিটর একটা সম্ভাব্য কাস্টমারে রূপান্তরিত হওয়ার সুযোগ পায়।\n\nআপনার ওয়েবসাইট থেকে সরাসরি লিড আসে তো?\n\n#WebDevelopment #ITSolutionsBD #AmigoPro",
    "hashtags": [
      "#WebDevelopment",
      "#ITSolutionsBD",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1XDvOX9RfGzw3bkPVUGhazaVMYd_RleOr",
      "preview_url": "https://lh3.googleusercontent.com/d/1XDvOX9RfGzw3bkPVUGhazaVMYd_RleOr=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1XDvOX9RfGzw3bkPVUGhazaVMYd_RleOr",
      "filename": "amigopro_day11.jpg"
    }
  },
  {
    "day": 12,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "ওয়েবসাইট লোড হতে ৩ সেকেন্ডের বেশি লাগলে কী হয়?",
    "content": "একটা ধীরগতির ওয়েবসাইট মানে আপনার সম্ভাব্য কাস্টমার লোড হওয়ার আগেই ব্যাক বাটনে চাপ দিয়ে চলে যাচ্ছেন। স্পিড অপটিমাইজেশন শুধু টেকনিক্যাল বিষয় না, এটা সরাসরি আপনার সেলসের সাথে যুক্ত।\n\nশেষ কবে আপনার সাইটের স্পিড চেক করেছেন?\n\n#WebsiteSpeed #WebDevelopment #AmigoPro",
    "hashtags": [
      "#WebsiteSpeed",
      "#WebDevelopment",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1UCozib_pSN9c1mljbw4quDd2Gff2ra8V",
      "preview_url": "https://lh3.googleusercontent.com/d/1UCozib_pSN9c1mljbw4quDd2Gff2ra8V=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1UCozib_pSN9c1mljbw4quDd2Gff2ra8V",
      "filename": "amigopro_day12.jpg"
    }
  },
  {
    "day": 13,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "হাবস্পট বা সেলসফোর্স নাম শুনেছেন, কিন্তু কেন লাগে জানেন?",
    "content": "CRM মানে হলো আপনার প্রতিটা কাস্টমার আর লিডের সম্পূর্ণ ইতিহাস এক জায়গায় গুছিয়ে রাখা। কে কবে যোগাযোগ করলো, কী নিয়ে কথা হলো, কবে ফলোআপ দরকার, সব হাতের কাছে থাকলে সেলস টিমের কাজ অনেক সহজ হয়ে যায়।\n\nআপনার বিজনেসে এখনো এক্সেল শিটে লিড ট্র্যাক করছেন?\n\n#CRM #BusinessTech #AmigoPro",
    "hashtags": [
      "#CRM",
      "#BusinessTech",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1i_cIRcQElOQFYU3RG5rl9MVAJcTdxTP8",
      "preview_url": "https://lh3.googleusercontent.com/d/1i_cIRcQElOQFYU3RG5rl9MVAJcTdxTP8=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1i_cIRcQElOQFYU3RG5rl9MVAJcTdxTP8",
      "filename": "amigopro_day13.jpg"
    }
  },
  {
    "day": 14,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "একটা র‍্যানসমওয়্যার অ্যাটাক আপনার পুরো বিজনেস ডেটা বন্দি করে ফেলতে পারে।",
    "content": "অনেক ছোট আর মাঝারি বিজনেস মনে করে সাইবার অ্যাটাক শুধু বড় কোম্পানির সমস্যা। বাস্তবে দুর্বল সিকিউরিটির কারণে এখন প্রতিদিনই ছোট বিজনেস টার্গেট হচ্ছে। নিয়মিত নেটওয়ার্ক অডিট আর ডেটা ব্যাকআপ ছাড়া ঝুঁকি অনেক বেশি।\n\nআপনার বিজনেসের ডেটা ব্যাকআপ সিস্টেম কতটা মজবুত?\n\n#CyberSecurity #DataProtection #ITSolutionsBD #AmigoPro",
    "hashtags": [
      "#CyberSecurity",
      "#DataProtection",
      "#ITSolutionsBD",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "12VuJQhMhLmmbEmsidmGuFAghhYmxamC1",
      "preview_url": "https://lh3.googleusercontent.com/d/12VuJQhMhLmmbEmsidmGuFAghhYmxamC1=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=12VuJQhMhLmmbEmsidmGuFAghhYmxamC1",
      "filename": "amigopro_day14.jpg"
    }
  },
  {
    "day": 15,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "আপনার ওয়েবসাইট রাত ২টায় ডাউন হলে কে খবর পায়?",
    "content": "শেয়ার্ড হোস্টিং সস্তা মনে হলেও ট্রাফিক বাড়লে সাইট ক্র্যাশ করে, আর মনিটরিং না থাকলে ঘণ্টার পর ঘণ্টা সাইট ডাউন থেকে যায়, কারো নজরেই পড়ে না। প্রিমিয়াম ক্লাউড হোস্টিং আর ২৪/৭ মনিটরিং এই সমস্যাটাই সমাধান করে।\n\nআপনার হোস্টিং এ আপটাইম মনিটরিং আছে তো?\n\n#CloudHosting #ITSupport #AmigoPro",
    "hashtags": [
      "#CloudHosting",
      "#ITSupport",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1f5ucpBYEjQ3q8-WJfeKNlc6CzNi_JNMe",
      "preview_url": "https://lh3.googleusercontent.com/d/1f5ucpBYEjQ3q8-WJfeKNlc6CzNi_JNMe=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1f5ucpBYEjQ3q8-WJfeKNlc6CzNi_JNMe",
      "filename": "amigopro_day15.jpg"
    }
  },
  {
    "day": 16,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "অফিসের ইন্টারনেট বারবার স্লো হয়ে যায়?",
    "content": "ভুল নেটওয়ার্ক সেটআপের কারণে অনেক অফিসে কাজের সময় ইন্টারনেট ঝুলে যায়, ফাইল শেয়ারিং আটকে যায়, মিটিং কল ড্রপ হয়। সঠিক নেটওয়ার্ক ইনফ্রাস্ট্রাকচার ডিজাইন করা থাকলে পুরো টিমের প্রোডাক্টিভিটি বদলে যায়।\n\nআপনার অফিসের নেটওয়ার্ক শেষ কবে অডিট হয়েছে?\n\n#NetworkInfrastructure #ITSolutions #AmigoPro",
    "hashtags": [
      "#NetworkInfrastructure",
      "#ITSolutions",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1mDapGGqToDOlw19OQf-Lf69EHizCx8VM",
      "preview_url": "https://lh3.googleusercontent.com/d/1mDapGGqToDOlw19OQf-Lf69EHizCx8VM=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1mDapGGqToDOlw19OQf-Lf69EHizCx8VM",
      "filename": "amigopro_day16.jpg"
    }
  },
  {
    "day": 17,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "রাত ১২টায় সার্ভার ডাউন হলে আপনার আইটি টিম কি ফোন ধরে?",
    "content": "টেকনিক্যাল সমস্যা কখনো অফিস টাইম দেখে আসে না। ২৪/৭ রিমোট আইটি সাপোর্ট থাকলে সমস্যা যখনই আসুক, সমাধানও তখনই শুরু হয়, ব্যবসার ক্ষতি হওয়ার আগেই।\n\nআপনার বিজনেসের কি জরুরি আইটি সাপোর্ট আছে?\n\n#ITSupport #RemoteIT #AmigoPro",
    "hashtags": [
      "#ITSupport",
      "#RemoteIT",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1iGhMQBAj5ikIMkguT4HG88mJ6v8lEXjm",
      "preview_url": "https://lh3.googleusercontent.com/d/1iGhMQBAj5ikIMkguT4HG88mJ6v8lEXjm=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1iGhMQBAj5ikIMkguT4HG88mJ6v8lEXjm",
      "filename": "amigopro_day17.jpg"
    }
  },
  {
    "day": 18,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "আপনার কাস্টমারদের ৭০ শতাংশের বেশি মোবাইল থেকে ভিজিট করে, আপনার সাইট কি মোবাইলে ঠিকঠাক দেখায়?",
    "content": "ডেস্কটপে সুন্দর দেখানো একটা ওয়েবসাইট মোবাইলে ভাঙাচোরা দেখালে কাস্টমার সাথে সাথে চলে যায়। ই-কমার্স হোক বা কর্পোরেট সাইট, মোবাইল অপটিমাইজেশন এখন অপশনাল কোনো বিষয় না।\n\nআপনার সাইট মোবাইলে টেস্ট করে দেখেছেন কখনো?\n\n#EcommerceBD #WebDevelopment #MobileOptimization #AmigoPro",
    "hashtags": [
      "#EcommerceBD",
      "#WebDevelopment",
      "#MobileOptimization",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1teZhgNix0zYliZhX4ujPNhnWwOixFdbj",
      "preview_url": "https://lh3.googleusercontent.com/d/1teZhgNix0zYliZhX4ujPNhnWwOixFdbj=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1teZhgNix0zYliZhX4ujPNhnWwOixFdbj",
      "filename": "amigopro_day18.jpg"
    }
  },
  {
    "day": 19,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "ব্রাউজারে \"Not Secure\" লেখা দেখলে কাস্টমার কী করে জানেন? সাথে সাথে সাইট ছেড়ে চলে যায়।",
    "content": "SSL সার্টিফিকেট ছাড়া একটা ওয়েবসাইট শুধু অসুরক্ষিত না, এটা কাস্টমারের মনে সন্দেহও তৈরি করে। বিশেষ করে যেখানে পেমেন্ট বা পার্সোনাল তথ্য দিতে হয়, সেখানে সিকিউরিটি না থাকলে বিশ্বাস তৈরিই হয়বিধা হয় না।\n\nআপনার সাইটে SSL অ্যাক্টিভ আছে তো, একবার চেক করে নিন।\n\n#WebsiteSecurity #SSL #ITSolutionsBD #AmigoPro",
    "hashtags": [
      "#WebsiteSecurity",
      "#SSL",
      "#ITSolutionsBD",
      "#AmigoPro"
    ],
    "image": {
      "drive_id": "1nU80MUs8sykSJIwBDRebgOoiPrUF9VDr",
      "preview_url": "https://lh3.googleusercontent.com/d/1nU80MUs8sykSJIwBDRebgOoiPrUF9VDr=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1nU80MUs8sykSJIwBDRebgOoiPrUF9VDr",
      "filename": "amigopro_day19.jpg"
    }
  },
  {
    "day": 20,
    "category": "it",
    "category_label": "আইটি সল্যুশন",
    "title": "আজকাল বিজনেস বড় হয় না শুধু ভালো প্রোডাক্ট দিয়ে, বড় হয় সিস্টেম দিয়ে।",
    "content": "ভালো ওয়েবসাইট, স্মার্ট মার্কেটিং আর মজবুত আইটি ইনফ্রাস্ট্রাকচার যখন একসাথে কাজ করে, তখনই একটা বিজনেস প্রতিযোগিতায় এগিয়ে থাকে। টেকনোলজি আর মার্কেটিংকে আলাদা না ভেবে একটা ইকোসিস্টেম হিসেবে দেখাই এখন সময়ের দাবি।\n\nআপনার বিজনেসের ডিজিটাল ইকোসিস্টেম রেডি তো? কথা বলুন আমাদের সাথে।\n\n#DigitalTransformation #B2BGrowth #AmigoPro #Bangladesh",
    "hashtags": [
      "#DigitalTransformation",
      "#B2BGrowth",
      "#AmigoPro",
      "#Bangladesh"
    ],
    "image": {
      "drive_id": "1kKZ9fvAdEVQ_Ml-OJRzURP0wPWYy1H25",
      "preview_url": "https://lh3.googleusercontent.com/d/1kKZ9fvAdEVQ_Ml-OJRzURP0wPWYy1H25=w1000",
      "download_url": "https://drive.google.com/uc?export=download&id=1kKZ9fvAdEVQ_Ml-OJRzURP0wPWYy1H25",
      "filename": "amigopro_day20.jpg"
    }
  }
];
