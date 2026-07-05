import React, { useState } from 'react';
import { Copy, Download, Check, ClipboardCopy } from 'lucide-react';
import { Post } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [copiedTitle, setCopiedTitle] = useState(false);
  const [copiedContent, setCopiedContent] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  const handleCopy = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fullPostText = `${post.title}\n\n${post.content}`;

  const isMarketing = post.category === 'marketing';
  const badgeColor = isMarketing ? 'bg-gold/10 text-gold border-gold/20' : 'bg-teal/10 text-teal border-teal/20';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-offwhite rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Header Info */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
        <span className="font-semibold text-navy">Day {String(post.day).padStart(2, '0')}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${badgeColor}`}>
          {post.category_label}
        </span>
      </div>

      {/* Image Section */}
      <div className="relative group aspect-square bg-slate-100 overflow-hidden border-b border-slate-100">
        <img 
          src={post.image.preview_url} 
          alt={`Day ${post.day} visual`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <a
            href={post.image.download_url}
            download={post.image.filename}
            className="bg-white text-navy px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Download size={18} />
            <span>ছবি ডাউনলোড</span>
          </a>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        {/* Title Section */}
        <div className="mb-6 relative">
          <div className="flex items-start gap-4">
            <h3 className="text-xl font-bold text-navy leading-snug flex-grow font-bengali">
              {post.title}
            </h3>
            <button 
              onClick={() => handleCopy(post.title, setCopiedTitle)}
              className="p-2 text-slate-400 hover:text-navy hover:bg-slate-100 rounded-md transition-colors flex-shrink-0 relative group"
              title="Copy Title"
            >
              {copiedTitle ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              
              <AnimatePresence>
                {copiedTitle && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-10 right-0 bg-navy text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                  >
                    কপি হয়েছে ✅
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative flex-grow">
          <div className="flex items-start gap-4 h-full">
            <div className="text-slate-600 font-bengali leading-relaxed whitespace-pre-wrap flex-grow text-sm">
              {post.content}
            </div>
            <button 
              onClick={() => handleCopy(post.content, setCopiedContent)}
              className="p-2 text-slate-400 hover:text-navy hover:bg-slate-100 rounded-md transition-colors flex-shrink-0 relative group mt-1"
              title="Copy Content"
            >
              {copiedContent ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              
              <AnimatePresence>
                {copiedContent && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-10 right-0 bg-navy text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10"
                  >
                    কপি হয়েছে ✅
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <button 
          onClick={() => handleCopy(fullPostText, setCopiedAll)}
          className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm flex items-center justify-center gap-2 hover:bg-white hover:border-slate-300 transition-all"
        >
          {copiedAll ? (
            <>
              <Check size={18} className="text-green-500" />
              <span className="text-green-600">সম্পূর্ণ পোস্ট কপি হয়েছে</span>
            </>
          ) : (
            <>
              <ClipboardCopy size={18} />
              <span>সম্পূর্ণ পোস্ট কপি করুন</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
