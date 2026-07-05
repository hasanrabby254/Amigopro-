import React, { useState } from 'react';
import { postsData, Category } from './data';
import { PostCard } from './components/PostCard';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';

type FilterType = 'all' | Category;

export default function App() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredPosts = postsData.filter(
    (post) => filter === 'all' || post.category === filter
  );

  const scrollToPosts = () => {
    document.getElementById('posts-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-navy selection:text-white">
      {/* Navbar/Header */}
      <header className="bg-navy text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tight flex items-center gap-2">
            AmigoPro<span className="text-gold">.</span>
          </div>
          <div className="text-sm font-medium text-slate-300 hidden sm:block">
            Content Showcase Portal
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-navy text-white pt-16 pb-24 px-6 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-navy-light blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bengali leading-tight mb-6 text-white">
              AmigoProর ২০ দিনের কনটেন্ট ক্যালেন্ডার — <br className="hidden md:block"/>
              <span className="text-gold">কপি করুন, পোস্ট করুন, রেজাল্ট দেখুন</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-bengali mb-10 max-w-2xl mx-auto leading-relaxed">
              ১০টি ডিজিটাল মার্কেটিং পোস্ট + ১০টি আইটি সল্যুশন পোস্ট। প্রতিটির জন্য রেডি টাইটেল, কনটেন্ট আর গ্রাফিক — এক ক্লিকে কপি ও ডাউনলোড।
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 flex flex-col items-center">
                <span className="text-2xl font-bold text-gold">১০</span>
                <span className="text-xs font-medium text-slate-300 uppercase tracking-wider mt-1">মার্কেটিং পোস্ট</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 flex flex-col items-center">
                <span className="text-2xl font-bold text-teal">১০</span>
                <span className="text-xs font-medium text-slate-300 uppercase tracking-wider mt-1">আইটি সল্যুশন পোস্ট</span>
              </div>
            </div>

            <button 
              onClick={scrollToPosts}
              className="bg-white text-navy font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              সব পোস্ট দেখুন
              <ArrowDown size={20} className="animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="posts-section" className="py-16 px-6 max-w-7xl mx-auto min-h-screen">
        
        {/* Filter Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-2xl font-bold text-navy font-bengali">
            {filter === 'all' && "সকল পোস্ট (২০)"}
            {filter === 'marketing' && "ডিজিটাল মার্কেটিং পোস্ট (১০)"}
            {filter === 'it' && "আইটি সল্যুশন পোস্ট (১০)"}
          </h2>
          
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-navy text-white shadow' 
                  : 'text-slate-600 hover:text-navy hover:bg-slate-50'
              }`}
            >
              সব
            </button>
            <button
              onClick={() => setFilter('marketing')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'marketing' 
                  ? 'bg-gold text-navy shadow' 
                  : 'text-slate-600 hover:text-navy hover:bg-slate-50'
              }`}
            >
              ডিজিটাল মার্কেটিং
            </button>
            <button
              onClick={() => setFilter('it')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'it' 
                  ? 'bg-teal text-white shadow' 
                  : 'text-slate-600 hover:text-navy hover:bg-slate-50'
              }`}
            >
              আইটি সল্যুশন
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <PostCard key={post.day} post={post} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-bengali">
            কোনো পোস্ট পাওয়া যায়নি।
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/10 text-slate-400 py-8 px-6 text-center text-sm font-bengali">
        <p>© {new Date().getFullYear()} AmigoPro. সর্বস্বত্ব সংরক্ষিত।</p>
      </footer>
    </div>
  );
}
