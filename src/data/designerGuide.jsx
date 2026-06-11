import React, { useState } from 'react';

export const designerGuideData = [
  // --- BUCKET 1: THE WHY (Theory & Psychology) ---
  {
    id: "preattentive-processing",
    category: "The Why",
    title: "Preattentive Processing",
    subtitle: "Evolutionary Psychology",
    description: "The brain scans for 'Danger, Food, or Friends' instantly. If a layout is confusing, the brain ignores it to save energy. Pass the brain's instant 'filtering' test by using familiar patterns.",
    why: "Evolutionary survival mechanism. Clarity = Safety.",
    action: "Ensure the primary focus is obvious within milliseconds. Use standard UI patterns for critical elements.",
    warning: "Don't create confusion; if the brain can't group the content instantly, the user leaves.",
    source: "Master Website Layouts",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl space-y-6">
        <p className="text-sm text-slate-500 text-center max-w-sm italic">Notice how your eye is instantly drawn to the red circle before you even process the gray squares.</p>
        <div className="flex items-center gap-8">
          <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
          <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
          <div className="w-20 h-20 bg-red-500 rounded-full shadow-lg shadow-red-500/30 animate-pulse"></div>
          <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
        </div>
      </div>
    )
  },
  {
    id: "story-variation",
    category: "The Why",
    title: "The 'Story' Variation",
    subtitle: "Cognitive Engagement",
    description: "If a layout repeats, the brain assumes it knows what comes next and stops processing. Surprise the user to keep them engaged.",
    why: "Predictability equals boredom. Variation signals new, important information.",
    action: "Vary your layouts as you scroll. Start familiar, then take an unexpected turn (e.g., switch from 1-column to 3-column).",
    warning: "Don't repeat the same layout over and over. Avoid 'template fatigue'.",
    source: "Master Website Layouts",
    component: () => (
      <div className="flex flex-col gap-4 p-6 bg-slate-50 rounded-xl w-full max-w-md">
        <div className="h-10 bg-slate-200 rounded flex justify-between items-center px-4">
          <div className="w-12 h-3 bg-slate-300 rounded"></div>
          <div className="w-12 h-3 bg-slate-300 rounded"></div>
        </div>
        <div className="h-32 bg-indigo-100 rounded-lg flex items-center justify-center border-2 border-dashed border-indigo-200">
          <span className="text-[10px] font-bold text-indigo-400 uppercase">Section 1: 1-Column Hero</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-20 bg-emerald-100 rounded-lg border-2 border-dashed border-emerald-200 flex items-center justify-center">
            <span className="text-[8px] font-bold text-emerald-400 uppercase">3-Col</span>
          </div>
          <div className="h-20 bg-emerald-100 rounded-lg border-2 border-dashed border-emerald-200 flex items-center justify-center">
            <span className="text-[8px] font-bold text-emerald-400 uppercase">3-Col</span>
          </div>
          <div className="h-20 bg-emerald-100 rounded-lg border-2 border-dashed border-emerald-200 flex items-center justify-center">
            <span className="text-[8px] font-bold text-emerald-400 uppercase">3-Col</span>
          </div>
        </div>
        <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">Rhythm through variation</p>
      </div>
    )
  },
  {
    id: "gestalt-grouping",
    category: "The Why",
    title: "Gestalt Grouping",
    subtitle: "Visual Psychology",
    description: "The brain naturally groups items that are close together (Proximity) or look similar (Similarity). Use this to create a clean, intuitive structure without needing boxes or borders.",
    why: "Humans search for patterns to reduce cognitive effort. Proper grouping signals related functions.",
    action: "Group related text and buttons with smaller gaps (e.g., 8px). Separate distinct sections with much larger gaps (e.g., 64px).",
    warning: "Don't use equal spacing everywhere. It creates 'visual soup' where nothing stands out.",
    source: "Glossary Blueprint",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-slate-200 shadow-sm space-y-10">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Proximity = One Group</span>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
            <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-slate-200 rounded"></div>
            <div className="w-8 h-8 bg-slate-200 rounded"></div>
          </div>
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase">Similarity = Functional Groups</span>
      </div>
    )
  },
  {
    id: "cognitive-load",
    category: "The Why",
    title: "Cognitive Load",
    subtitle: "Memory Management",
    description: "Every decision a user has to make drains their energy. Reduce the number of choices and visual noise to keep them focused on the primary goal.",
    why: "The 'Working Memory' can only hold 5-9 items at once. Overload causes abandonment.",
    action: "Remove non-essential links. Hide secondary features behind menus or 'Show More' buttons. Focus on ONE primary action per section.",
    warning: "Avoid 'Analysis Paralysis'. Don't give 10 pricing options when 3 will do.",
    source: "Glossary Blueprint",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl space-y-6">
        <div className="flex gap-4">
          <div className="w-32 h-40 bg-white border-2 border-red-200 rounded-xl p-4 flex flex-col gap-2 opacity-50">
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <span className="text-[8px] text-red-500 font-bold uppercase text-center mt-2">Too Much Noise</span>
          </div>
          <div className="w-32 h-40 bg-white border-2 border-emerald-500 rounded-xl p-4 flex flex-col items-center justify-center gap-4 shadow-xl">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">✓</div>
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <div className="h-6 w-full bg-emerald-600 rounded"></div>
            <span className="text-[8px] text-emerald-600 font-bold uppercase text-center">Clear Focus</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "atomic-theory",
    category: "The Why",
    title: "Atomic Design Theory",
    subtitle: "Systems Thinking",
    description: "Build interfaces from the smallest atoms up to templates to avoid creating a 'Frankenstein' website. Consistency is the byproduct of systemization.",
    why: "Ensures scalability and maintenance. If you change an atom, the whole organism updates.",
    action: "Define buttons, fonts, and colors globally first. Never design a unique section in isolation.",
    warning: "Avoid designing pages first. If you don't have a system, you have a mess.",
    source: "Atomic Design Principles",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          <div className="h-0.5 w-8 bg-slate-200"></div>
          <div className="flex gap-1 p-2 bg-slate-50 rounded-lg border border-slate-100">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-4 bg-slate-300 rounded"></div>
          </div>
          <div className="h-0.5 w-8 bg-slate-200"></div>
          <div className="w-32 h-20 bg-slate-900 rounded-lg p-2 flex flex-col gap-2 shadow-lg">
            <div className="w-10 h-2 bg-slate-700 rounded"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-full h-2 bg-slate-700 rounded"></div>
            </div>
            <div className="w-1/2 h-2 bg-slate-800 rounded"></div>
          </div>
        </div>
        <div className="flex gap-8 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-tighter">
          <span>Atom</span>
          <span>Molecule</span>
          <span>Organism</span>
        </div>
      </div>
    )
  },

  // --- BUCKET 2: THE HOW (Rules & Systems) ---
  {
    id: "spacing-rule",
    category: "The How",
    title: "The 4-8-16 Spacing Rule",
    subtitle: "Mathematical Rhythm",
    description: "A strict mathematical system where all padding, margins, and gaps must be multiples of 4 or 8. This creates a subconscious sense of rhythm and eliminates amateur 'random' spacing.",
    why: "Removes decision fatigue. 8px is the standard unit of the digital grid.",
    action: "Use 4px for fine details, 8px for small gaps, 16px for standard elements, and 32px+ for section spacing.",
    warning: "Don't use random numbers (e.g., 7px, 13px). It breaks the optical rhythm.",
    source: "20 Design Tips / 9 Hacks",
    component: () => (
      <div className="flex flex-col items-center justify-center p-10 bg-slate-900 rounded-xl space-y-10">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-slate-500 w-20 text-right">8px Gap</span>
          <div className="flex gap-2 p-1 bg-slate-800 rounded border border-slate-700">
            <div className="w-10 h-10 bg-indigo-500 rounded-sm"></div>
            <div className="w-10 h-10 bg-indigo-500 rounded-sm"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-slate-500 w-20 text-right">16px Gap</span>
          <div className="flex gap-4 p-1 bg-slate-800 rounded border border-slate-700">
            <div className="w-10 h-10 bg-emerald-500 rounded-sm"></div>
            <div className="w-10 h-10 bg-emerald-500 rounded-sm"></div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-slate-500 w-20 text-right">32px Gap</span>
          <div className="flex gap-8 p-1 bg-slate-800 rounded border border-slate-700">
            <div className="w-10 h-10 bg-pink-500 rounded-sm"></div>
            <div className="w-10 h-10 bg-pink-500 rounded-sm"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "squint-test",
    category: "The How",
    title: "The Squint Test",
    subtitle: "Hierarchy Validation",
    description: "Step back and squint until the design blurs. What stands out? If the Call to Action (CTA) disappears into the blob, you must increase its contrast immediately.",
    why: "Validates visual hierarchy without getting distracted by small details.",
    action: "Squint your eyes or apply a 10px blur filter. The primary heading and CTA should remain the most prominent blobs.",
    warning: "If everything blurs into a uniform gray, your contrast is too low.",
    source: "9 Web Design Hacks",
    component: () => {
      const [blur, setBlur] = useState(0);
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-slate-100 rounded-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase">Squint Intensity</label>
            <input type="range" min="0" max="10" value={blur} onChange={(e) => setBlur(e.target.value)} className="accent-indigo-600" />
          </div>
          <div className="w-64 bg-white p-6 rounded-xl shadow-lg border border-slate-200 transition-all duration-300" style={{ filter: `blur(${blur}px)` }}>
            <div className="w-10 h-10 bg-indigo-100 rounded-full mb-4"></div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Can you see this?</h3>
            <p className="text-xs text-slate-400 mb-4">This text should blur away, but the button below should stay visible.</p>
            <button className="w-full py-2.5 bg-indigo-600 text-white font-bold rounded-lg shadow-lg">Action Button</button>
          </div>
        </div>
      );
    }
  },
  {
    id: "text-chunking",
    category: "The How",
    title: "The 'Chunking' Rule",
    subtitle: "Readability Optimization",
    description: "Limit text width to 600-700 pixels (50-75 characters). Add a line break every 2-3 sentences.",
    why: "Prevents users from 'checking out' when facing walls of text. Reduces eye fatigue.",
    action: "Use max-width: 65ch; or similar constraints. Break long paragraphs into smaller, digestible chunks.",
    warning: "Never allow text to span the full width of a large desktop screen.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col gap-6 p-6 bg-white border border-slate-200 rounded-xl">
        <div className="space-y-2 opacity-30">
          <div className="h-2 w-full bg-slate-200 rounded"></div>
          <div className="h-2 w-full bg-slate-200 rounded"></div>
          <div className="h-2 w-full bg-slate-200 rounded"></div>
          <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-2/3 space-y-2 p-4 bg-emerald-50 border-x-2 border-emerald-200 relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-emerald-600 uppercase bg-white px-2">Optimal Chunk (60ch)</span>
            <div className="h-2 w-full bg-emerald-200 rounded"></div>
            <div className="h-2 w-full bg-emerald-200 rounded"></div>
            <div className="h-2 w-1/2 bg-emerald-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "responsive-system",
    category: "The How",
    title: "The 12-8-4 System",
    subtitle: "Responsive Columns",
    description: "Rebalance layouts for different devices rather than just shrinking them. Desktop uses 12 columns, Tablet uses 8, and Mobile uses 4.",
    why: "Maintain readability and clickability across all screen sizes. Columns provide the structural 'skeleton'.",
    action: "Do not simply scale elements down. Rearrange them to fit the new column count (e.g., 3-col on desktop becomes 1-col on mobile).",
    warning: "Don't try to force 12 columns onto a mobile phone. It makes content unreadable.",
    source: "Master Website Layouts",
    component: () => (
      <div className="flex flex-col gap-6 p-8 bg-slate-900 rounded-xl w-full max-w-md">
        <div className="space-y-2">
          <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-500">DESKTOP (12)</span><div className="h-1 w-32 bg-indigo-500 rounded-full"></div></div>
          <div className="grid grid-cols-12 gap-1 h-4">
            {[...Array(12)].map((_, i) => <div key={i} className="bg-slate-800 rounded-sm"></div>)}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-500">TABLET (8)</span><div className="h-1 w-20 bg-emerald-500 rounded-full"></div></div>
          <div className="grid grid-cols-8 gap-1 h-4 max-w-[280px]">
            {[...Array(8)].map((_, i) => <div key={i} className="bg-slate-800 rounded-sm"></div>)}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-500">MOBILE (4)</span><div className="h-1 w-10 bg-pink-500 rounded-full"></div></div>
          <div className="grid grid-cols-4 gap-1 h-4 max-w-[140px]">
            {[...Array(4)].map((_, i) => <div key={i} className="bg-slate-800 rounded-sm"></div>)}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "color-rule",
    category: "The How",
    title: "The 60-30-10 Rule",
    subtitle: "Color Distribution",
    description: "A classic interior design rule applied to UI. 60% neutral background, 30% brand/secondary color, and 10% accent color for calls to action.",
    why: "Prevents 'color fatigue' and ensures the important elements (buttons) naturally pop against a neutral canvas.",
    action: "Use white or off-white for 60%, a dark brand color for headings/text (30%), and a vibrant accent for primary buttons (10%).",
    warning: "Don't use your accent color for everything. If everything is bright, nothing is important.",
    source: "7-Minute Skills",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="w-full h-12 flex rounded-lg overflow-hidden border border-slate-200 shadow-inner">
          <div className="w-[60%] bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400">60% NEUTRAL</div>
          <div className="w-[30%] bg-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-500">30% BRAND</div>
          <div className="w-[10%] bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">10%</div>
        </div>
        <div className="w-full bg-slate-50 p-6 rounded-xl space-y-4">
          <div className="h-4 w-32 bg-slate-900 rounded"></div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-slate-200 rounded"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
            <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
          </div>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold">Accent Button</button>
        </div>
      </div>
    )
  },
  {
    id: "atoms",
    category: "The How",
    title: "Atoms",
    subtitle: "The Smallest Units",
    description: "The fundamental building blocks of UI: buttons, inputs, labels, and icons. They cannot be broken down further without losing their functionality.",
    why: "Consistency starts at the atomic level. If every button is different, the system fails.",
    action: "Design your atoms in isolation first. Define every state (hover, active, disabled).",
    warning: "Don't add layout properties (like margins) to atoms. They should be layout-agnostic.",
    source: "Atomic Design Principles",
    component: () => (
      <div className="flex flex-wrap items-center justify-center gap-6 p-8 bg-slate-50 rounded-xl">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded text-xs font-bold">Button</button>
        <input type="text" placeholder="Input..." className="px-3 py-2 border border-slate-200 rounded text-xs w-32" readOnly />
        <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">★</div>
      </div>
    )
  },
  {
    id: "molecules",
    category: "The How",
    title: "Molecules",
    subtitle: "Functional Assemblies",
    description: "Groups of atoms bonded together to perform a single function. Example: A search bar (Label + Input + Button).",
    why: "Molecules represent the first level of reusable functionality.",
    action: "Combine atoms that naturally work together. Test them as a single unit.",
    warning: "If a molecule does too much, it's probably an organism.",
    source: "Atomic Design Principles",
    component: () => (
      <div className="flex items-center justify-center p-8 bg-white border border-slate-200 rounded-xl">
        <div className="flex border-2 border-indigo-100 rounded-lg overflow-hidden max-w-xs">
          <input type="text" placeholder="Search..." className="px-4 py-2 text-xs w-40 outline-none" readOnly />
          <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold">GO</button>
        </div>
      </div>
    )
  },
  {
    id: "8-point-grid",
    category: "The How",
    title: "The 8-Point Grid",
    subtitle: "Systemic Spacing",
    description: "Every spacing value, margin, and padding must be a multiple of 8 (8, 16, 24, 32...). This ensures a consistent 'visual weight' across the entire interface.",
    why: "8 is the magic number for digital screens (divisible by 2, 4, 8). It eliminates 'random' spacing decisions.",
    action: "Set your base unit to 8px. Use 16px for standard gaps and 32-64px for section separations.",
    warning: "Don't use odd numbers or random values like 10px or 15px. It breaks the mathematical rhythm.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl space-y-6">
        <div className="grid grid-cols-4 gap-4 p-4 bg-white border-2 border-dashed border-slate-200 rounded-lg">
          {[...Array(8)].map((_, i) => <div key={i} className="w-10 h-10 bg-indigo-100 rounded-sm flex items-center justify-center text-[8px] font-bold text-indigo-400">8px</div>)}
        </div>
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">The Grid Skeleton</p>
      </div>
    )
  },
  {
    id: "font-families",
    category: "The How",
    title: "Font Super Families",
    subtitle: "Typography Pairing",
    description: "Use a single font family that includes both Serif and Sans-Serif variations. They are mathematically designed to match perfectly.",
    why: "Eliminates the risk of clashing fonts. Ensures structural harmony in typography.",
    action: "Use the Serif version for large headers to add personality, and the Sans version for body text for readability.",
    warning: "Avoid pairing two complex serif fonts together. It creates visual conflict.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col items-center justify-center p-10 bg-white rounded-xl border border-slate-200 shadow-sm space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-serif text-slate-900 leading-tight">The Elegant Header</h3>
          <p className="text-sm font-sans text-slate-500 max-w-xs mx-auto">This body text uses the sans-serif version of the same family, ensuring perfect mathematical alignment with the header above.</p>
        </div>
        <div className="flex gap-4 border-t border-slate-100 pt-6 w-full justify-center">
          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded">Family: Merriweather + Sans</span>
        </div>
      </div>
    )
  },
  {
    id: "chunking-rule",
    category: "The How",
    title: "The Chunking Rule",
    subtitle: "Kill the Wall of Text",
    description: "Users immediately 'check out' when they see massive blocks of text. Limit text width to 600px-700px (50-75 chars) and add line breaks often.",
    why: "Reading long, wide paragraphs on a screen causes eye fatigue. Short chunks provide mental resting points and make the text skimmable.",
    action: "Split any paragraph longer than 3 sentences. Use max-width containers to prevent text from spanning the full screen.",
    warning: "Don't leave 'Wall of Text' paragraphs; split them up immediately.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col gap-4 w-full max-w-md p-6 bg-slate-50 rounded-xl border border-slate-200">
        <div className="flex flex-col gap-2 opacity-50 grayscale">
           <span className="text-[10px] font-bold text-red-500 uppercase">Bad: Wall of Text</span>
           <div className="space-y-1">
             <div className="h-1.5 w-full bg-slate-400 rounded"></div>
             <div className="h-1.5 w-full bg-slate-400 rounded"></div>
             <div className="h-1.5 w-full bg-slate-400 rounded"></div>
             <div className="h-1.5 w-full bg-slate-400 rounded"></div>
             <div className="h-1.5 w-4/5 bg-slate-400 rounded"></div>
           </div>
        </div>
        <div className="w-full h-px bg-slate-200"></div>
        <div className="flex flex-col gap-2">
           <span className="text-[10px] font-bold text-emerald-500 uppercase">Good: Chunked Text</span>
           <div className="space-y-1 w-3/4">
             <div className="h-1.5 w-full bg-slate-600 rounded"></div>
             <div className="h-1.5 w-5/6 bg-slate-600 rounded"></div>
           </div>
           <div className="space-y-1 w-3/4 mt-2">
             <div className="h-1.5 w-full bg-slate-600 rounded"></div>
             <div className="h-1.5 w-11/12 bg-slate-600 rounded"></div>
             <div className="h-1.5 w-2/3 bg-slate-600 rounded"></div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "icon-list-pairing",
    category: "The How",
    title: "Icon-List Pairing",
    subtitle: "Elevate Your Bullet Points",
    description: "Identify dense paragraphs with multiple points and break them into vertical lists, replacing standard bullet dots with specific, meaningful icons.",
    why: "The brain loves lists; they provide a clear entry point. Icons add visual anchor points, elevating the design value from a '$500 look' to a '$5000 look'.",
    action: "Pair every bullet point with an icon that visually represents the text.",
    warning: "Don't force users to dig through a paragraph to find key features.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex gap-4 w-full max-w-md p-6 bg-white rounded-xl border border-slate-200">
         <div className="w-1/2 flex flex-col gap-3 pr-4 border-r border-slate-100 opacity-60">
            <span className="text-[9px] font-bold text-slate-400 uppercase">Standard</span>
            <ul className="list-disc pl-4 space-y-3">
               <li><div className="h-1.5 w-24 bg-slate-400 rounded inline-block"></div></li>
               <li><div className="h-1.5 w-20 bg-slate-400 rounded inline-block"></div></li>
               <li><div className="h-1.5 w-28 bg-slate-400 rounded inline-block"></div></li>
            </ul>
         </div>
         <div className="w-1/2 flex flex-col gap-4 pl-2">
            <span className="text-[9px] font-bold text-indigo-500 uppercase">Upgraded</span>
            <div className="space-y-3">
               <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center text-[10px]">✓</div>
                  <div className="h-1.5 w-24 bg-slate-700 rounded"></div>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-[10px]">⚡</div>
                  <div className="h-1.5 w-20 bg-slate-700 rounded"></div>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-purple-100 flex items-center justify-center text-[10px]">★</div>
                  <div className="h-1.5 w-28 bg-slate-700 rounded"></div>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "letter-spacing-tracking",
    category: "The How",
    title: "Letter Spacing (Tracking)",
    subtitle: "Scannability vs. Clickability",
    description: "Adjust letter spacing based on the text's goal: Headers get negative spacing (-1px to -3px), Body gets 0px, and CTAs get positive spacing (+1px to +3px).",
    why: "Tight headers look strong and scan well as a single block. Loose CTAs feel 'open', clickable, and draw the eye.",
    action: "Apply tracking adjustments globally in your CSS/Tailwind config so you don't have to think about it per-component.",
    warning: "Don't use positive spacing on headers; it makes them look weak and hard to scan.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col gap-6 w-full max-w-sm p-8 bg-slate-50 rounded-xl border border-slate-200 text-center">
         <div>
            <span className="text-[9px] text-slate-400 uppercase font-bold block mb-1">Headers (-Tracking)</span>
            <h2 className="text-3xl font-black text-slate-800 tracking-tighter leading-none">BOLD HEADER</h2>
         </div>
         <div>
            <span className="text-[9px] text-slate-400 uppercase font-bold block mb-1">Body (0 Tracking)</span>
            <p className="text-sm text-slate-600 tracking-normal">Standard readable body text.</p>
         </div>
         <div>
            <span className="text-[9px] text-slate-400 uppercase font-bold block mb-2">CTAs (+Tracking)</span>
            <button className="px-6 py-2 bg-indigo-600 text-white text-xs font-bold rounded tracking-[0.2em] uppercase">Click Here</button>
         </div>
      </div>
    )
  },
  {
    id: "squint-test",
    category: "The How",
    title: "The Squint Test",
    subtitle: "Visual Hierarchy Verification",
    description: "Step back and squint at your design until the screen blurs. If the page looks like a blob, the user won't know where to click.",
    why: "Just because an element is on the screen doesn't mean it commands attention. Squinting removes the details and reveals true visual weight.",
    action: "Use CSS blur (or physically squint) to check your work. What pops should be the Header and the primary CTA.",
    warning: "Don't assume visibility based on size alone; contrast is key.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex gap-4 w-full max-w-lg p-4 bg-slate-100 rounded-xl justify-center">
         <div className="w-48 h-40 bg-white rounded-lg border border-slate-200 p-4 flex flex-col justify-center items-center gap-3">
            <span className="text-[8px] font-bold text-slate-400 uppercase">Clear Design</span>
            <div className="w-3/4 h-4 bg-slate-800 rounded"></div>
            <div className="w-full h-1.5 bg-slate-300 rounded"></div>
            <div className="w-1/2 h-8 bg-indigo-600 rounded"></div>
         </div>
         <div className="w-48 h-40 bg-white rounded-lg border border-slate-200 p-4 flex flex-col justify-center items-center gap-3 blur-[3px]">
            <span className="text-[8px] font-bold text-slate-400 uppercase">Squint Test</span>
            <div className="w-3/4 h-4 bg-slate-800 rounded"></div>
            <div className="w-full h-1.5 bg-slate-300 rounded"></div>
            <div className="w-1/2 h-8 bg-indigo-600 rounded"></div>
         </div>
      </div>
    )
  },

  // --- BUCKET 3: THE WHAT (Layouts & Structures) ---
  {
    id: "engagement-line",
    category: "The What",
    title: "The Engagement Line",
    subtitle: "Visual Real Estate",
    description: "100% of visitors see the Hero; very few see the footer. Prioritize content based on user behavior.",
    why: "Value proposition must hit immediately. Social proof should follow closely.",
    action: "Place your most critical information within the first 1-2 viewport heights (Above the Fold).",
    warning: "Don't waste the top of your page on filler content or large, non-essential graphics.",
    source: "Proper Website Layout (8 Minutes)",
    component: () => (
      <div className="relative w-full max-w-sm h-64 bg-slate-200 rounded-xl overflow-hidden border-2 border-slate-300 shadow-inner">
        <div className="absolute top-0 w-full h-1/2 bg-indigo-50 border-b-2 border-dashed border-indigo-400 z-10 flex flex-col items-center justify-center p-4">
          <span className="absolute top-2 right-2 text-[8px] font-black text-indigo-500 uppercase bg-white px-1 border border-indigo-200">100% Visibility</span>
          <div className="w-2/3 h-4 bg-indigo-200 rounded mb-2"></div>
          <div className="w-1/2 h-8 bg-indigo-600 rounded"></div>
        </div>
        <div className="absolute top-1/2 w-full h-1/2 bg-white flex flex-col items-center justify-center p-4">
          <span className="absolute bottom-2 right-2 text-[8px] font-black text-slate-400 uppercase">20% Visibility</span>
          <div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
          <div className="w-full h-2 bg-slate-100 rounded mb-1"></div>
          <div className="w-full h-2 bg-slate-100 rounded"></div>
        </div>
        <div className="absolute top-[50%] left-0 w-full h-[2px] bg-red-500 z-20 flex items-center justify-center">
          <span className="bg-red-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full shadow-sm">THE FOLD</span>
        </div>
      </div>
    )
  },
  {
    id: "bento-grid",
    category: "The What",
    title: "The Bento Grid",
    subtitle: "Modern Structure",
    description: "A UI layout trend inspired by Japanese bento boxes. It uses strict CSS grids where internal elements are segmented into distinct cells of varying sizes.",
    why: "Creates a structured but flexible look. High information density without chaos.",
    action: "Use CSS Grid with grid-column and grid-row spanning. Keep corners rounded (16-24px) for the 'bento' feel.",
    warning: "Avoid over-complicating. If it has too many cells, it becomes a cluttered mess.",
    source: "33 UNIQUE Website Layouts",
    component: () => (
      <div className="grid grid-cols-4 grid-rows-3 gap-2 w-full max-w-md h-48 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex flex-col justify-end">
          <div className="w-1/2 h-2 bg-slate-200 rounded"></div>
        </div>
        <div className="col-span-2 bg-indigo-100 rounded-xl border border-indigo-200 p-3">
          <div className="w-1/3 h-2 bg-indigo-300 rounded"></div>
        </div>
        <div className="bg-emerald-100 rounded-xl border border-emerald-200"></div>
        <div className="bg-pink-100 rounded-xl border border-pink-200"></div>
      </div>
    )
  },
  {
    id: "diagonal-balance",
    category: "The What",
    title: "Diagonal Balance",
    subtitle: "3-Column Composition",
    description: "A technique for 3-column layouts where the center element is the focal point, and the side elements are offset vertically to create a 'diagonal' flow.",
    why: "Breaks the rigidity of a standard grid. Guides the eye through the content in a dynamic path.",
    action: "Place your primary image in the center. Offset the left image higher and the right image lower.",
    warning: "Ensure the diagonal doesn't become so extreme that it feels like the layout is falling apart.",
    source: "33 UNIQUE Layouts",
    component: () => (
      <div className="flex items-center justify-center gap-4 p-8 w-full max-w-lg h-64 bg-slate-50 rounded-2xl">
        <div className="w-1/4 h-32 bg-slate-200 rounded-xl -translate-y-8 border-2 border-dashed border-slate-300"></div>
        <div className="w-1/3 h-48 bg-indigo-600 rounded-2xl shadow-xl z-10 flex items-center justify-center text-white font-black">FOCUS</div>
        <div className="w-1/4 h-32 bg-slate-200 rounded-xl translate-y-8 border-2 border-dashed border-slate-300"></div>
      </div>
    )
  },
  {
    id: "breather-grid",
    category: "The What",
    title: "The Breather Grid",
    subtitle: "4-Column White Space",
    description: "A 4-column grid where content is kept minimal to maximize negative space (white space). Use this for premium, high-end designs.",
    why: "White space is a luxury element. It signals that the content is important enough to have its own 'breathing room'.",
    action: "Limit each column to a single heading or icon. Do not feel compelled to fill every pixel with text.",
    warning: "Don't over-clutter. If you add too much, it just becomes a standard, boring grid.",
    source: "33 UNIQUE Layouts",
    component: () => (
      <div className="grid grid-cols-4 gap-6 p-8 bg-white border border-slate-200 rounded-xl w-full">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="w-8 h-8 bg-indigo-50 rounded-full"></div>
            <div className="h-2 w-full bg-slate-200 rounded"></div>
            <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "structural-footer",
    category: "The What",
    title: "Structural Footer",
    subtitle: "5-Column Organization",
    description: "A high-density organization method for complex footers. Uses 5 verticals separated by visible grid lines to guide the eye.",
    why: "Prevents 'link soup'. The visible lines act as rails for the eye during scanning.",
    action: "Group links by strict category. Use visible borders (1px) between columns to define the verticals clearly.",
    warning: "Avoid uneven column heights. Try to balance the number of links in each category.",
    source: "33 UNIQUE Layouts",
    component: () => (
      <div className="w-full max-w-lg bg-slate-900 p-8 rounded-xl flex border-x border-slate-800">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex-1 flex flex-col gap-3 px-4 border-r last:border-0 border-slate-800">
            <div className="h-2 w-full bg-slate-700 rounded mb-2"></div>
            <div className="h-1.5 w-2/3 bg-slate-800 rounded"></div>
            <div className="h-1.5 w-1/2 bg-slate-800 rounded"></div>
            <div className="h-1.5 w-3/4 bg-slate-800 rounded"></div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "recursive-nesting",
    category: "The What",
    title: "Recursive Nesting",
    subtitle: "The 'Stripe' Method",
    description: "Creating complex layouts by nesting alignment axes. Mix horizontal and vertical flows to create a 'premium' custom look.",
    why: "Standard templates use only one axis. Mixing them signals high-end, custom engineering.",
    action: "Nest a vertical layout inside a horizontal one, then a horizontal one inside that. (H -> V -> H).",
    warning: "Don't go deeper than 3 levels of nesting or the layout becomes too difficult to manage.",
    source: "11 Section Layouts",
    component: () => (
      <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border-2 border-indigo-100 w-full max-w-md">
        <div className="w-24 h-40 bg-indigo-600 rounded-lg"></div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-16 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-4">
            <div className="flex gap-2 w-full">
              <div className="w-8 h-8 bg-emerald-100 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-slate-100 rounded"></div>
                <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
              </div>
            </div>
          </div>
          <div className="h-20 bg-white rounded-lg border border-slate-200"></div>
        </div>
      </div>
    )
  },

  // --- BUCKET 4: THE PROOF (Critiques & Case Studies) ---
  {
    id: "business-redesign",
    category: "The Proof",
    title: "Business Site Redesign",
    subtitle: "Before & After Case Study",
    description: "Moving from 'flat and outdated' to 'future-facing' by removing scroll-jacking and adding contextual trust elements.",
    why: "Conversion happens when friction is removed. User needs answers before they click buy.",
    action: "Remove parallax effects. Add FAQ accordions before final CTAs. Use multi-channel contact layouts.",
    warning: "Don't let 'cool' effects (like parallax) get in the way of actual readability and speed.",
    source: "Fixing This Business' Website",
    component: () => {
      const [step, setStep] = useState('before');
      return (
        <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl space-y-6 w-full">
          <div className="flex bg-slate-200 p-1 rounded-lg">
            <button onClick={() => setStep('before')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${step === 'before' ? 'bg-white shadow-sm text-red-500' : 'text-slate-500'}`}>BEFORE</button>
            <button onClick={() => setStep('after')} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${step === 'after' ? 'bg-indigo-600 shadow-sm text-white' : 'text-slate-50'}`}>AFTER</button>
          </div>

          <div className="w-full max-w-xs bg-white border border-slate-200 rounded-xl p-4 shadow-xl overflow-hidden min-h-[200px]">
            {step === 'before' ? (
              <div className="space-y-4 opacity-50 grayscale animate-pulse">
                <div className="h-8 bg-slate-200 rounded w-full"></div>
                <div className="h-32 bg-slate-100 rounded flex flex-col items-center justify-center text-[10px] font-bold text-slate-300 uppercase">Janky Parallax Section</div>
                <div className="h-10 bg-slate-200 rounded w-1/2 mx-auto"></div>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-4 bg-indigo-600 rounded"></div>
                  <div className="w-8 h-4 bg-slate-100 rounded"></div>
                </div>
                <div className="h-20 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-indigo-100 p-3">
                  <div className="w-full h-2 bg-indigo-200 rounded mb-2"></div>
                  <div className="w-2/3 h-2 bg-indigo-100 rounded"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-6 bg-slate-50 rounded border border-slate-100 flex items-center px-2 text-[8px] font-bold text-slate-400 italic">FAQ: Why choose us?</div>
                  <div className="h-6 bg-slate-50 rounded border border-slate-100 flex items-center px-2 text-[8px] font-bold text-slate-400 italic">FAQ: How fast is it?</div>
                </div>
                <button className="w-full py-2 bg-indigo-600 text-white text-[10px] font-bold rounded shadow-lg shadow-indigo-100">Contact Now</button>
              </div>
            )}
          </div>
        </div>
      );
    }
  },

  // --- BUCKET 5: THE FUTURE (Trends & Aesthetics) ---
  {
    id: "modular-grid",
    category: "The Future",
    title: "Modular Grid Design",
    subtitle: "2026 Trends",
    description: "Moving away from static templates toward immersive, interactive, and expressive modular experiences using CSS Grid auto-placement.",
    why: "Creates structured but flexible layouts that adapt to any content type perfectly.",
    action: "Use CSS Grid 'grid-column' and 'grid-row' spans to let items occupy variable space while maintaining a core grid rhythm.",
    warning: "Don't break the grid entirely. The 'modules' must still align to a base unit.",
    source: "Top 2026 Trends",
    component: () => (
      <div className="grid grid-cols-6 grid-rows-4 gap-2 w-full max-w-sm h-64 p-4 bg-slate-100 rounded-2xl">
        <div className="col-span-4 row-span-2 bg-indigo-600 rounded-xl shadow-lg"></div>
        <div className="col-span-2 bg-emerald-500 rounded-xl"></div>
        <div className="col-span-2 row-span-3 bg-slate-900 rounded-xl"></div>
        <div className="col-span-4 bg-white rounded-xl border border-slate-200"></div>
        <div className="col-span-2 bg-pink-500 rounded-xl"></div>
        <div className="col-span-2 bg-slate-300 rounded-xl"></div>
      </div>
    )
  },
  {
    id: "playful-interactions",
    category: "The Future",
    title: "Playful Interactions",
    subtitle: "Active Engagement",
    description: "Transforming passive viewing into active engagement by mapping user inputs (mouse, scroll) to visual element transformations.",
    why: "Increases time-on-site and creates a 'wow' factor that makes the brand memorable.",
    action: "Use Framer Motion or GSAP to link scroll progress to 3D rotations or opacity shifts of key assets.",
    warning: "Don't overdo it. If too many things move at once, it causes motion sickness (vestibular issues).",
    source: "Top 2026 Trends",
    component: () => {
      const [pos, setPos] = useState({ x: 0, y: 0 });
      return (
        <div
          className="relative w-full h-64 bg-slate-900 rounded-3xl overflow-hidden cursor-crosshair flex items-center justify-center"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPos({ x: (e.clientX - rect.left - rect.width / 2) / 10, y: (e.clientY - rect.top - rect.height / 2) / 10 });
          }}
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div
            className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl transition-transform duration-100 ease-out flex items-center justify-center"
            style={{ transform: `perspective(1000px) rotateY(${pos.x}deg) rotateX(${-pos.y}deg)` }}
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full"></div>
          </div>
          <div className="absolute bottom-4 text-[8px] font-black text-indigo-400 uppercase tracking-widest">Move mouse to interact</div>
        </div>
      );
    }
  },
  {
    id: "anti-design",
    category: "The Future",
    title: "Anti-Design / Brutalism",
    subtitle: "Visual Disruption",
    description: "Disrupting standard mental models to create a unique, often intentionally 'ugly' or 'raw' experience that stands out from corporate polish.",
    why: "Best for portfolios or art sites where memorability is more important than standard utility.",
    action: "Use high-contrast outlines, raw system fonts (e.g., Arial, Courier), and overlapping elements that 'break' the grid.",
    warning: "Not suitable for corporate or SaaS sites where trust and utility are paramount.",
    source: "Top 2026 Trends",
    component: () => (
      <div className="w-full h-64 bg-yellow-400 border-[6px] border-black p-8 flex flex-col justify-between relative overflow-hidden font-mono">
        <h3 className="text-5xl font-black italic -rotate-2 bg-black text-white px-2 w-fit">NO GRID</h3>
        <div className="absolute top-10 right-10 w-24 h-24 bg-white border-4 border-black flex items-center justify-center font-black text-4xl rotate-12">?</div>
        <div className="flex justify-between items-end">
          <button className="px-6 py-2 bg-white border-4 border-black font-black hover:bg-black hover:text-white transition-colors">BUTTON.EXE</button>
          <span className="text-[10px] font-black">STAY RAW // 2026</span>
        </div>
      </div>
    )
  },
  {
    id: "8-point-grid",
    category: "The Workflow",
    title: "The 8-Point Grid System",
    subtitle: "Mathematical Rhythm",
    description: "'Clean' design isn't magic; it's a mathematical rhythm that prevents randomness. Set a base unit (8px) and use its multiples (16px, 24px, 32px, 64px) for all spacing and sizing.",
    why: "Removes decision fatigue and ensures that margins and paddings scale predictably across the entire interface.",
    action: "If you use 16px padding on a card, don't use 13px somewhere else. Stick to the 8-point scale strictly.",
    warning: "Don't use random numbers. Consistency is what makes a design feel 'pro'.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col gap-4 w-full max-w-sm p-6 bg-white rounded-xl border border-slate-200">
         <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-indigo-200 rounded flex items-center justify-center text-[10px] font-bold text-indigo-700">8</div>
            <span className="text-[10px] text-slate-500 uppercase font-bold">Base Unit</span>
         </div>
         <div className="flex items-center gap-4">
            <div className="w-16 h-8 bg-indigo-300 rounded flex items-center justify-center text-[10px] font-bold text-indigo-800">16</div>
            <span className="text-[10px] text-slate-500 uppercase font-bold">Small Gap (x2)</span>
         </div>
         <div className="flex items-center gap-4">
            <div className="w-24 h-8 bg-indigo-400 rounded flex items-center justify-center text-[10px] font-bold text-white">24</div>
            <span className="text-[10px] text-slate-500 uppercase font-bold">Medium Gap (x3)</span>
         </div>
         <div className="flex items-center gap-4">
            <div className="w-32 h-8 bg-indigo-500 rounded flex items-center justify-center text-[10px] font-bold text-white">32</div>
            <span className="text-[10px] text-slate-500 uppercase font-bold">Large Gap (x4)</span>
         </div>
      </div>
    )
  },
  {
    id: "line-height-ratios",
    category: "The Workflow",
    title: "Line Height Ratios",
    subtitle: "The 1:1 and 1:1.5 Rule",
    description: "Use strict mathematical ratios for typography to improve engagement. Tight headers look strong, while airy body text looks readable.",
    why: "Headers are meant to be scanned quickly as a single visual block. Body text needs room to breathe so the eye doesn't jump lines.",
    action: "Headers: Set Line Height to 1:1 (Same as font size). Body: Set Line Height to 1:1.5 (1.5x font size).",
    warning: "Don't give headers too much space; they will look disconnected from their content.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col gap-6 w-full max-w-md p-6 bg-slate-50 rounded-xl border border-slate-200">
         <div className="bg-white p-4 rounded-lg shadow-sm">
            <span className="text-[9px] font-bold text-slate-400 uppercase mb-2 block">Headers (1:1 Ratio)</span>
            <div className="bg-indigo-100/50 p-1">
               <h3 className="text-2xl font-black leading-none text-slate-800 bg-indigo-200/50 inline-block">THE QUICK BROWN FOX<br/>JUMPS OVER THE LAZY DOG</h3>
            </div>
         </div>
         <div className="bg-white p-4 rounded-lg shadow-sm">
            <span className="text-[9px] font-bold text-slate-400 uppercase mb-2 block">Body (1:1.5 Ratio)</span>
            <div className="bg-emerald-100/50 p-1">
               <p className="text-sm leading-relaxed text-slate-600 bg-emerald-200/50 inline-block">The quick brown fox jumps over the lazy dog.<br/>This ensures maximum readability and reduces eye strain.</p>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "font-super-families",
    category: "The Workflow",
    title: "Font 'Super Families'",
    subtitle: "Automatic Cohesion",
    description: "Instead of struggling to pair discordant fonts, use a 'Super Family'—a single font family that includes both Serif and Sans-Serif variants (like DM Sans + DM Serif).",
    why: "Removes the difficulty of font pairing for beginners. It guarantees that the letterforms share the same underlying geometry and x-height.",
    action: "Use the Serif variant for large headers to add character, and the Sans variant for small body text to maximize legibility.",
    warning: "Don't struggle pairing random fonts if you aren't a typography expert; use a pre-matched family.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col items-center gap-4 w-full max-w-sm p-8 bg-white rounded-xl border border-slate-200 text-center">
         <div>
            <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest block mb-2">Serif Variant (Headers)</span>
            <h2 className="text-4xl font-serif text-slate-800">Elegant Display</h2>
         </div>
         <div className="w-8 h-px bg-slate-200 my-2"></div>
         <div>
            <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest block mb-2">Sans Variant (Body)</span>
            <p className="text-sm font-sans text-slate-600">Clean, legible, and highly functional body copy that perfectly matches the geometric structure of the header.</p>
         </div>
      </div>
    )
  },
  {
    id: "css-overview-extraction",
    category: "The Workflow",
    title: "CSS Overview Extraction",
    subtitle: "Steal Perfect Palettes",
    description: "Use Chrome DevTools 'CSS Overview' to extract the exact color palette and typography scale from a beautiful inspiration site.",
    why: "Allows you to be intentional with color rather than guessing or using random generators that often lack practical contrast.",
    action: "Find an inspiration site. Open DevTools -> 3 Dots -> More Tools -> CSS Overview -> Capture overview.",
    warning: "Don't manually color pick pixel by pixel; use the overview tool to get the entire design system at once.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex flex-col gap-2 w-full max-w-md p-4 bg-[#202124] rounded-xl border border-gray-700 font-mono text-xs">
         <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-2 text-gray-400">
            <span>CSS Overview</span>
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px]">Capture overview</span>
         </div>
         <span className="text-gray-300 font-bold mb-1">Colors (Background)</span>
         <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-gray-600"></div>
            <div className="w-8 h-8 rounded-full bg-[#F3F4F6] border border-gray-600"></div>
            <div className="w-8 h-8 rounded-full bg-[#111827] border border-gray-600"></div>
            <div className="w-8 h-8 rounded-full bg-[#4F46E5] border border-gray-600"></div>
            <div className="w-8 h-8 rounded-full bg-[#EC4899] border border-gray-600"></div>
         </div>
      </div>
    )
  },
  {
    id: "subtle-textures",
    category: "The Workflow",
    title: "Subtle Textures & Gradients",
    subtitle: "Grounded Design",
    description: "Pure flat color often feels cheap. Adding subtle textures (like a noise overlay or dot grid) makes the content feel 'grounded' and premium.",
    why: "Provides depth to the background layer without distracting from the foreground content.",
    action: "Add subtle patterns (dots, noise) to backgrounds. Use soft radial gradients behind text to ensure readability against the texture.",
    warning: "Don't over-design. If the texture competes with the text, fade it out.",
    source: "9 Web Design Hacks",
    component: () => (
      <div className="flex w-full max-w-lg gap-4 p-4 bg-slate-100 rounded-xl justify-center">
         <div className="w-1/2 h-40 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg">
             <span className="text-white font-bold text-sm">Flat Color</span>
         </div>
         <div className="w-1/2 h-40 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden">
             {/* Dot Grid Texture */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
             {/* Radial Gradient behind text */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/80 via-transparent to-transparent"></div>
             <span className="text-white font-bold text-sm relative z-10 drop-shadow-md">Textured & Grounded</span>
         </div>
      </div>
    )
  },
  {
    id: "hierarchy-vs-fpattern",
    category: "The How",
    title: "Loudness vs. F-Pattern",
    subtitle: "Visual Hierarchy",
    description: "The 'F-Pattern' is an outdated myth. Users don't read top-left to bottom-right; they jump to the 'loudest' (largest, highest contrast) elements first.",
    why: "By making secondary elements quieter (lower opacity, smaller size), the primary message stands out immediately.",
    action: "Make your H1 the largest element. 'Turn down the volume' on secondary info using opacity or size.",
    warning: "Don't rely on the F-Pattern. If everything is the same size, users will miss the most important information.",
    source: "7 Minutes & Your Web Design Skills",
    component: () => (
      <div className="flex flex-col gap-6 w-full max-w-sm p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
         <div className="space-y-2 relative">
            <div className="absolute -left-4 top-1 text-[10px] text-indigo-500 font-black">1.</div>
            <h1 className="text-3xl font-black text-slate-900 leading-none">THE LOUDEST ELEMENT FIRST</h1>
         </div>
         <div className="space-y-2 relative">
            <div className="absolute -left-4 top-1 text-[10px] text-indigo-300 font-black">2.</div>
            <p className="text-sm font-bold text-slate-500">Secondary information is smaller and lighter, making it 'quieter'. It's read second.</p>
         </div>
         <div className="relative">
            <div className="absolute -left-4 top-3 text-[10px] text-indigo-300 font-black">3.</div>
            <button className="px-6 py-3 bg-slate-900 text-white text-xs font-black rounded-lg">PRIMARY ACTION</button>
         </div>
      </div>
    )
  },
  {
    id: "ghost-button-ban",
    category: "The How",
    title: "The Ghost Button Ban",
    subtitle: "High Contrast CTAs",
    description: "Ghost buttons (transparent background with a border) blend into the design and are routinely ignored by users.",
    why: "High contrast is required for conversion. If a button doesn't look like a solid, clickable object, engagement drops.",
    action: "Use a solid fill color for your primary Call to Action. Ensure it has the highest contrast of any element in that section.",
    warning: "Never use Ghost Buttons for primary actions. Users simply don't see them.",
    source: "7 Minutes & Your Web Design Skills",
    component: () => (
      <div className="flex gap-4 w-full max-w-lg p-6 bg-slate-50 rounded-xl justify-center items-center">
         <div className="flex flex-col items-center gap-3">
             <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Banned</span>
             <button className="px-8 py-3 bg-transparent border-2 border-slate-400 text-slate-500 font-bold rounded-lg cursor-not-allowed">Ghost Button</button>
         </div>
         <div className="w-px h-16 bg-slate-200"></div>
         <div className="flex flex-col items-center gap-3">
             <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Correct</span>
             <button className="px-8 py-3 bg-indigo-600 border-2 border-indigo-600 text-white font-black rounded-lg shadow-lg hover:bg-indigo-700 transition-colors">Solid Button</button>
         </div>
      </div>
    )
  },
  {
    id: "color-rule-60-30-10",
    category: "The How",
    title: "The 60-30-10 Color Rule",
    subtitle: "Harmonious Palettes",
    description: "A strict formula for distributing color: 60% neutral backgrounds, 30% brand color for headings/highlights, and 10% accent color strictly for CTAs.",
    why: "Prevents the 'Rainbow Effect'. It guarantees that the Call to Action pops because the accent color is rare.",
    action: "Set your backgrounds to white/gray/black (60%), use your main brand color for structural elements (30%), and reserve a high-contrast accent color ONLY for buttons (10%).",
    warning: "Don't use your accent color everywhere. If everything is highlighted, nothing is highlighted.",
    source: "7 Minutes & Your Web Design Skills",
    component: () => (
      <div className="flex flex-col w-full max-w-sm rounded-xl overflow-hidden shadow-lg border border-slate-200">
         <div className="h-24 bg-slate-50 flex items-center justify-center p-4">
             <span className="text-slate-400 font-black text-2xl opacity-50">60% NEUTRAL</span>
         </div>
         <div className="h-16 bg-indigo-100 flex items-center justify-center">
             <span className="text-indigo-800 font-black">30% BRAND COLOR</span>
         </div>
         <div className="h-12 bg-amber-400 flex items-center justify-center relative">
             <span className="text-amber-900 font-black text-xs uppercase tracking-widest z-10">10% Accent (CTAs)</span>
             <div className="absolute inset-0 bg-amber-500 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                 <span className="text-amber-900 font-black text-xs uppercase tracking-widest">Hover State</span>
             </div>
         </div>
      </div>
    )
  },
  {
    id: "typography-triad",
    category: "The How",
    title: "Typography Triad",
    subtitle: "Instant Understanding",
    description: "Simplify your text structure into three distinct layers: H1 (Massive, Page Level), H2 (Medium, Section Level), and P (Small, Detail Level).",
    why: "Allows users to scan the page instantly and understand the hierarchy without reading every word.",
    action: "Make H1 the largest. Make H2 noticeably smaller but bolder than P. Use highly legible sans-serif or simple serif for P.",
    warning: "Don't use decorative fonts (scripts, handwriting) for paragraph text; it destroys readability.",
    source: "7 Minutes & Your Web Design Skills",
    component: () => (
      <div className="flex flex-col gap-6 w-full max-w-sm p-8 bg-white rounded-xl border border-slate-200 shadow-sm text-left">
         <div className="border-l-4 border-indigo-500 pl-4">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">H1 Title</h1>
            <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">Page Level (Massive)</span>
         </div>
         <div className="border-l-4 border-emerald-500 pl-4 ml-4">
            <h2 className="text-xl font-bold text-slate-800">H2 Section Title</h2>
            <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Section Level (Medium)</span>
         </div>
         <div className="border-l-4 border-amber-500 pl-4 ml-8">
            <p className="text-sm font-medium text-slate-600 leading-relaxed">P Body text. This is highly legible standard text for conveying details.</p>
            <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest mt-1 block">Detail Level (Small)</span>
         </div>
      </div>
    )
  },
  {
    id: "accessibility-contrast",
    category: "The Workflow",
    title: "Accessibility Contrast",
    subtitle: "WCAG Standards",
    description: "Always check your text against its background for proper contrast ratios (WCAG AA standard is 4.5:1).",
    why: "If users can't see it clearly, they can't engage. Poor contrast hurts usability, accessibility, and SEO.",
    action: "Use a contrast checker tool. If the ratio is below 4.5:1, darken the text or lighten the background.",
    warning: "Don't guess visibility based on your own eyes. Always verify with a tool.",
    source: "7 Minutes & Your Web Design Skills",
    component: () => (
      <div className="flex gap-4 w-full max-w-lg p-6 bg-slate-100 rounded-xl justify-center items-center">
         <div className="flex flex-col items-center w-1/2 gap-3 p-4 bg-slate-300 rounded-lg">
             <span className="text-[10px] font-black text-red-600 uppercase tracking-widest bg-red-100 px-2 py-1 rounded">Fail (2.1:1)</span>
             <p className="text-slate-400 font-bold text-center">This text is very hard to read against the gray background.</p>
         </div>
         <div className="flex flex-col items-center w-1/2 gap-3 p-4 bg-slate-900 rounded-lg">
             <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-900/50 px-2 py-1 rounded">Pass (13.5:1)</span>
             <p className="text-slate-200 font-bold text-center">This text has excellent contrast and is highly readable.</p>
         </div>
      </div>
    )
  },
  {
    id: "conversion-friction",
    category: "The Workflow",
    title: "Conversion Friction",
    subtitle: "Clarity Over Aesthetics",
    description: "A pretty site that doesn't sell is useless. You must answer: Who is it for? What do they get? What is the next step?",
    why: "Users will not dig through your site to figure out how to buy. If there are barriers, they leave.",
    action: "Make the 'Next Step' stupidly easy to find. Remove any unnecessary form fields or clicks.",
    warning: "Don't design for yourself or the client's ego; design strictly for the target audience's needs.",
    source: "7 Minutes & Your Web Design Skills",
    component: () => (
      <div className="flex flex-col gap-4 w-full max-w-md p-6 bg-white rounded-xl border border-slate-200 relative overflow-hidden">
         <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-50 rounded-full flex items-center justify-center border-4 border-red-100">
            <span className="text-red-500 font-black text-xl line-through opacity-50">Friction</span>
         </div>
         <h3 className="font-black text-slate-800 text-lg pr-12">Who is this for? What do they get?</h3>
         <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            <p className="text-xs text-slate-600 font-bold mb-4">You are one click away from achieving your goal. No credit card required. No 10-page forms.</p>
            <div className="flex items-center gap-3">
               <input type="email" placeholder="Enter email for instant access" className="flex-1 text-xs py-2 px-3 border border-slate-200 rounded outline-none pointer-events-none" />
               <button className="px-4 py-2 bg-emerald-500 text-white font-black text-xs rounded hover:bg-emerald-600 transition-colors pointer-events-none">Start Now</button>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "foreground-depth-blur",
    category: "The How",
    title: "Foreground Depth Blur",
    subtitle: "Cinematic Focus",
    description: "Create a cinematic effect by placing an object in the extreme foreground and blurring it out. This forces the eye directly to the main subject in the midground.",
    why: "It mimics how human eyes and camera lenses work (shallow depth of field), adding realism and extreme focus.",
    action: "Place a decorative shape or image in the foreground, overlapping the frame. Apply a heavy Gaussian blur.",
    warning: "Don't block the main content. The blurred object is a frame, not the subject.",
    source: "20 Design Tips You NEED in 2025",
    component: () => (
      <div className="relative w-full max-w-sm h-64 bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center border border-slate-800 shadow-2xl">
         {/* Background Element */}
         <div className="absolute top-4 right-4 w-16 h-16 bg-slate-800 rounded-full blur-sm opacity-50"></div>
         
         {/* Main Subject (In Focus) */}
         <div className="z-10 bg-white p-6 rounded-lg shadow-xl text-center border border-slate-200 transform scale-110">
            <h3 className="font-black text-slate-900 text-xl tracking-tight">THE SUBJECT</h3>
            <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">In Sharp Focus</span>
         </div>

         {/* Foreground Blurred Element */}
         <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-600 rounded-full blur-[20px] opacity-80 z-20"></div>
         <div className="absolute -top-12 -right-4 w-32 h-32 bg-emerald-500 rounded-full blur-[24px] opacity-40 z-20"></div>
      </div>
    )
  },
  {
    id: "real-shadow-formula",
    category: "The How",
    title: "The 'Real Shadow' Formula",
    subtitle: "Stop Using Pure Black",
    description: "Default shadows use pure black (#000000) which looks harsh and dirty. Real shadows take on the color of the environment.",
    why: "In reality, shadows are an absence of light, not black paint. Tinted shadows blend naturally into backgrounds.",
    action: "Shadow Color: #4D4D4D (or a dark tint of the background color). Blend Mode: Multiply. Opacity: 30-50%.",
    warning: "Never use default pure black (#000) drop shadows.",
    source: "20 Design Tips You NEED in 2025",
    component: () => (
      <div className="flex gap-6 w-full max-w-lg p-8 bg-indigo-50 rounded-xl justify-center items-center">
         <div className="flex flex-col items-center gap-4">
             <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center text-[10px] font-black text-slate-400" style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
                 Default (#000)
             </div>
             <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Harsh & Dirty</span>
         </div>
         
         <div className="flex flex-col items-center gap-4">
             <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center text-[10px] font-black text-indigo-600 border border-white" style={{ boxShadow: '0 20px 25px -5px rgba(49, 46, 129, 0.15), 0 8px 10px -6px rgba(49, 46, 129, 0.1)' }}>
                 Tinted Multiply
             </div>
             <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Soft & Natural</span>
         </div>
      </div>
    )
  },
  {
    id: "cognitive-relief-zones",
    category: "The How",
    title: "Cognitive Relief Zones",
    subtitle: "Pacing Your Layout",
    description: "Insert low-density sections (empty space, soft colors, minimal text) between heavy content blocks to give the brain a break.",
    why: "If you jam high-energy, information-dense sections back-to-back, the user experiences cognitive overload and bounces.",
    action: "Add a 'Relief Zone' (e.g., a simple quote, a soft gray divider section with just a logo) after a heavy data table or complex grid.",
    warning: "Don't place CTAs in relief zones; let them purely serve as visual breathing room.",
    source: "20 Design Tips You NEED in 2025",
    component: () => (
      <div className="flex flex-col w-full max-w-sm rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
         <div className="p-4 bg-white border-b border-slate-200">
             <div className="h-4 bg-slate-200 rounded w-1/3 mb-2"></div>
             <div className="grid grid-cols-3 gap-2">
                 <div className="h-8 bg-indigo-100 rounded"></div>
                 <div className="h-8 bg-indigo-100 rounded"></div>
                 <div className="h-8 bg-indigo-100 rounded"></div>
             </div>
             <span className="text-[8px] font-black text-slate-400 uppercase mt-2 block">Heavy Content</span>
         </div>
         
         <div className="h-20 bg-slate-100 flex flex-col items-center justify-center border-b border-slate-200">
             <div className="w-6 h-6 bg-slate-300 rounded-full mb-1"></div>
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Relief Zone</span>
         </div>
         
         <div className="p-4 bg-white">
             <div className="h-4 bg-slate-200 rounded w-1/2 mb-2"></div>
             <div className="h-16 bg-emerald-100 rounded"></div>
             <span className="text-[8px] font-black text-slate-400 uppercase mt-2 block">Heavy Content</span>
         </div>
      </div>
    )
  },
  {
    id: "keyword-micro-styling",
    category: "The How",
    title: "Keyword Micro-Styling",
    subtitle: "Guiding the Skimmer",
    description: "Create 'micro-movement' for the eye by slightly styling 2-3 keywords per paragraph (e.g., increasing font weight or changing color).",
    why: "It breaks the monotony of long text blocks and catches the eye of users who are just skimming, pulling them into the reading.",
    action: "Pick 2-3 critical keywords in a paragraph. Change their weight to bold, or apply a subtle brand color.",
    warning: "Don't over-style. It should feel like a subtle pulse, not a highlighter marker.",
    source: "20 Design Tips You NEED in 2025",
    component: () => (
      <div className="flex flex-col gap-4 w-full max-w-md p-8 bg-white rounded-xl border border-slate-200 shadow-sm text-left">
         <p className="text-sm text-slate-600 leading-loose">
            When designing for modern web applications, it is crucial to understand that users rarely read every word. Instead, they look for <span className="font-black text-indigo-600 bg-indigo-50 px-1 rounded">visual anchors</span> to guide their attention. By implementing subtle changes in weight and color, you can significantly increase <span className="font-black text-indigo-600 bg-indigo-50 px-1 rounded">content retention</span> without overwhelming the reader.
         </p>
         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-4">Eye drawn to anchors ↑</span>
      </div>
    )
  },
  {
    id: "4-checkpoint-test",
    category: "The Workflow",
    title: "The 4-Checkpoint Test",
    subtitle: "Scale Proofing",
    description: "Typography and balance change drastically at different scales. Thin fonts that look elegant on a 4K monitor vanish on a mobile phone.",
    why: "Ensures the design's structural integrity holds up regardless of the user's device or context.",
    action: "Always test your design at 4 specific scales: 1920px (Desktop), 768px (Tablet), 320px (Mobile), and 64px (Thumbnail/Favicon context).",
    warning: "Don't only design at full size. Always zoom out.",
    source: "20 Design Tips You NEED in 2025",
    component: () => (
      <div className="flex items-end justify-center gap-4 w-full max-w-lg p-6 bg-slate-100 rounded-xl">
         <div className="flex flex-col items-center gap-2">
             <div className="w-32 h-24 bg-white border border-slate-300 rounded shadow-md flex items-center justify-center">
                 <div className="w-16 h-2 bg-indigo-600 rounded"></div>
             </div>
             <span className="text-[9px] font-black text-slate-500 uppercase">1920px</span>
         </div>
         <div className="flex flex-col items-center gap-2">
             <div className="w-20 h-28 bg-white border border-slate-300 rounded shadow-md flex items-center justify-center">
                 <div className="w-10 h-2 bg-indigo-600 rounded"></div>
             </div>
             <span className="text-[9px] font-black text-slate-500 uppercase">768px</span>
         </div>
         <div className="flex flex-col items-center gap-2">
             <div className="w-12 h-20 bg-white border border-slate-300 rounded shadow-md flex items-center justify-center">
                 <div className="w-6 h-1 bg-indigo-600 rounded"></div>
             </div>
             <span className="text-[9px] font-black text-slate-500 uppercase">320px</span>
         </div>
         <div className="flex flex-col items-center gap-2">
             <div className="w-6 h-6 bg-white border border-slate-300 rounded-sm shadow-md flex items-center justify-center">
                 <div className="w-3 h-0.5 bg-indigo-600 rounded"></div>
             </div>
             <span className="text-[9px] font-black text-slate-500 uppercase">64px</span>
         </div>
      </div>
    )
  },
  {
    id: "dynamic-gradients",
    category: "The Future",
    title: "Dynamic Gradient Backgrounds",
    subtitle: "Living Canvas",
    description: "Backgrounds that shift and move using multi-hue gradients, creating a sense of depth and life without static images.",
    why: "Adds extreme visual richness and keeps the page feeling 'alive' and high-end.",
    action: "Use CSS animate to shift the 'background-position' of a large, multi-stop radial gradient.",
    warning: "Ensure contrast remains high enough for any text sitting on top of the moving colors.",
    source: "Top 2026 Web Design Trends",
    component: () => (
      <div className="relative w-full h-64 rounded-3xl overflow-hidden flex items-center justify-center group">
         <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-yellow-200 to-indigo-500 animate-gradient-xy bg-[length:400%_400%]"></div>
         <div className="z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl">
            <h3 className="text-white font-black text-2xl tracking-tight">FLUID MOTION</h3>
         </div>
         <style>{`
            @keyframes gradient-xy {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-gradient-xy {
              animation: gradient-xy 15s ease infinite;
            }
         `}</style>
      </div>
    )
  },
  {
    id: "hand-drawn-personality",
    category: "The Future",
    title: "Hand-Drawn Illustration",
    subtitle: "Human Over Corporate",
    description: "Using raw, hand-drawn strokes and mascots to break the 'sterile' feel of modern SaaS templates.",
    why: "Instantly adds personality and makes a brand feel approachable and unique.",
    action: "Apply hand-drawn strokes to UI elements like buttons, underlines, or secondary icons.",
    warning: "Maintain consistency; don't mix ultra-clean icons with rough hand-drawn ones.",
    source: "Top 2026 Web Design Trends",
    component: () => (
      <div className="flex flex-col items-center gap-6 w-full max-w-sm p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-sm">
         <div className="w-24 h-24 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-500">
               <path d="M20,50 Q20,20 50,20 Q80,20 80,50 Q80,80 50,80 Q20,80 20,50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
               <circle cx="35" cy="40" r="3" fill="currentColor" />
               <circle cx="65" cy="40" r="3" fill="currentColor" />
               <path d="M40,60 Q50,70 60,60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
         </div>
         <button className="relative px-6 py-2 font-black text-slate-800">
            <span className="relative z-10">UNIQUE CLICK</span>
            <svg className="absolute inset-0 w-full h-full text-yellow-400 -z-10" preserveAspectRatio="none">
               <path d="M5,5 Q50,2 95,5 Q98,25 95,45 Q50,48 5,45 Q2,25 5,5" fill="currentColor" stroke="black" strokeWidth="2" />
            </svg>
         </button>
      </div>
    )
  },
  {
    id: "gamified-exploration",
    category: "The Future",
    title: "Gamified Navigation",
    subtitle: "Discovery Mode",
    description: "Turning standard navigation into an exploration game where users 'discover' content rather than just clicking links.",
    why: "Creates a memorable, interactive experience that users will want to share.",
    action: "Add a 'character' or focal point that follows the cursor or reacts to keyboard arrows.",
    warning: "Always provide a 'Quick Skip' menu for users who just want to find information fast.",
    source: "Top 2026 Web Design Trends",
    component: () => {
      const [pos, setPos] = useState({ x: 50, y: 50 });
      return (
        <div className="relative w-full h-64 bg-slate-100 rounded-3xl overflow-hidden border-4 border-white shadow-inner">
           <div 
             className="absolute w-12 h-12 bg-indigo-600 rounded-xl shadow-lg transition-all duration-300 ease-out flex items-center justify-center text-white font-black"
             style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
           >
             YOU
           </div>
           <div className="absolute top-4 left-4 grid grid-cols-2 gap-1">
              {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 bg-white rounded border border-slate-200"></div>)}
           </div>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Explore the Space</span>
           </div>
           <div className="absolute bottom-4 right-4 flex gap-2">
              <button onClick={() => setPos(p => ({...p, y: Math.max(0, p.y-10)}))} className="w-8 h-8 bg-white border rounded">↑</button>
              <button onClick={() => setPos(p => ({...p, y: Math.min(100, p.y+10)}))} className="w-8 h-8 bg-white border rounded">↓</button>
           </div>
        </div>
      );
    }
  },
  {
    id: "gen-z-chaos",
    category: "The Future",
    title: "Gen Z Aesthetic",
    subtitle: "Controlled Chaos",
    description: "High-energy motion, video-in-video, and 'messy' layouts that mirror the fast-paced nature of social media feeds.",
    why: "Captures attention in an era of 3-second attention spans.",
    action: "Use zigzag section breaks, auto-playing micro-videos, and overlapping bold text.",
    warning: "Avoid for medical, financial, or legal sites where 'calm' and 'trust' are the goal.",
    source: "Top 2026 Web Design Trends",
    component: () => (
      <div className="w-full h-64 bg-black rounded-3xl overflow-hidden relative flex items-center justify-center">
         <div className="absolute w-full h-full opacity-50 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400')] bg-cover"></div>
         <div className="z-10 flex flex-col items-center rotate-[-5deg]">
            <h3 className="bg-yellow-400 text-black font-black text-4xl px-4 py-2 mb-2">FAST</h3>
            <h3 className="bg-pink-500 text-white font-black text-4xl px-4 py-2 ml-12">MOTION</h3>
         </div>
         <div className="absolute top-4 right-4 w-20 h-20 bg-indigo-500 rounded-full animate-bounce flex items-center justify-center font-black text-white text-[10px]">NEW!</div>
      </div>
    )
  },
  {
    id: "variable-typography",
    category: "The Future",
    title: "Variable Font Animation",
    subtitle: "Breathing Text",
    description: "Using the 'weight' axis of variable fonts to create text that morphs and 'breathes' based on user proximity or scroll.",
    why: "Typography becomes a primary interactive element rather than just a way to deliver content.",
    action: "Link the 'font-weight' CSS property to scroll position or hover states.",
    warning: "Don't animate paragraph text; keep animations restricted to large headings for readability.",
    source: "Top 2026 Web Design Trends",
    component: () => (
      <div className="flex flex-col items-center justify-center w-full h-64 bg-white rounded-3xl border border-slate-100 shadow-sm group">
         <h1 className="text-6xl font-black text-slate-900 transition-all duration-700 ease-in-out group-hover:font-thin tracking-tighter">
            VARIABLE
         </h1>
         <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mt-4">Hover to morph weight</span>
      </div>
    )
  },
  {
    id: "real-world-column-span",
    category: "The How",
    title: "Real-World Column Span",
    subtitle: "Text Readability",
    description: "A 12-column grid provides flexibility, but individual content blocks should rarely span all 12. Limit text width to 4-6 columns to maintain optimal line length.",
    why: "Prevents 'line-length fatigue'. The eye struggles to track back to the next line if the current one is too wide.",
    action: "Group content to span 3-4 columns for standard text. Use a maximum of 6 columns for main content blocks.",
    warning: "Don't use all 12 columns for a single line of text; it becomes unreadable.",
    source: "Master Website Layouts",
    component: () => (
      <div className="flex flex-col gap-4 p-6 bg-slate-900 rounded-xl w-full max-w-md">
        <div className="grid grid-cols-12 gap-1 h-2 opacity-20">
          {[...Array(12)].map((_, i) => <div key={i} className="bg-slate-500 rounded-sm"></div>)}
        </div>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-6 h-20 bg-indigo-500/20 border border-indigo-500/40 rounded flex items-center justify-center">
            <span className="text-[8px] font-bold text-indigo-400">MAX 6 COLS (50%)</span>
          </div>
          <div className="col-span-12 h-1 bg-red-500/20 rounded mt-2"></div>
          <span className="col-span-12 text-[8px] text-red-400 uppercase font-black text-center">Bad: 12-Column Text Span</span>
        </div>
      </div>
    )
  },
  {
    id: "figma-grid-setup",
    category: "The Workflow",
    title: "Figma Grid Setup",
    subtitle: "Professional Canvas",
    description: "Setting up a centered 12-column grid in Figma creates a contained, professional look on large screens, preventing the design from stretching too wide.",
    why: "Provides a predictable 'safe zone' for content. Standardizes alignment across the entire design team.",
    action: "Select Frame -> Layout Grid -> Columns -> Count: 12, Type: Center, Width: ~80px, Gutter: 20px.",
    warning: "Don't use the default 10px mesh grid for UI; switch to 'Columns' immediately.",
    source: "Master Website Layouts",
    component: () => (
      <div className="flex flex-col gap-2 p-4 bg-[#1E1E1E] rounded-xl border border-slate-700 font-sans">
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 border-b border-slate-700 pb-2">
          <span className="font-bold">Layout Grid</span>
          <span className="text-indigo-400 font-bold">+</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center bg-slate-800 p-2 rounded">
             <span className="text-[10px] text-slate-300">Count</span>
             <span className="text-[10px] text-white font-bold">12</span>
          </div>
          <div className="flex justify-between items-center bg-slate-800 p-2 rounded">
             <span className="text-[10px] text-slate-300">Type</span>
             <span className="text-[10px] text-indigo-400 font-bold">Center</span>
          </div>
          <div className="flex justify-between items-center bg-slate-800 p-2 rounded">
             <span className="text-[10px] text-slate-300">Width</span>
             <span className="text-[10px] text-white font-bold">80px</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "breathing-room-margins",
    category: "The How",
    title: "Breathing Room Margins",
    subtitle: "Viewport Safety",
    description: "Margins prevent content from looking 'squished' against the browser edges, especially on smaller screens or fluid layouts.",
    why: "Content touching the edge of the screen looks broken and reduces trust. Margins provide a visual 'frame' for the site.",
    action: "If using a 'Stretch' grid, add 20px-40px margins. Ensure empty space exists on the far left and right.",
    warning: "Don't allow zero margins; content MUST NEVER touch the viewport edge.",
    source: "Master Website Layouts",
    component: () => (
      <div className="flex items-center justify-center p-8 bg-slate-100 rounded-xl w-full">
        <div className="w-64 h-40 bg-white border-x-[16px] border-indigo-100 rounded-lg relative flex items-center justify-center">
           <div className="absolute top-0 left-[-16px] bottom-0 w-[16px] bg-indigo-500/10 flex items-center justify-center">
              <span className="rotate-90 text-[8px] font-bold text-indigo-500">MARGIN</span>
           </div>
           <div className="absolute top-0 right-[-16px] bottom-0 w-[16px] bg-indigo-500/10 flex items-center justify-center">
              <span className="rotate-90 text-[8px] font-bold text-indigo-500">MARGIN</span>
           </div>
           <div className="w-3/4 h-20 bg-slate-100 rounded border-2 border-dashed border-slate-200"></div>
        </div>
      </div>
    )
  },
  {
    id: "page-rhythm-variation",
    category: "The How",
    title: "Page Rhythm Variation",
    subtitle: "Sequence Control",
    description: "If Section A uses a specific layout, Section B must vary to keep the brain engaged. Avoid consecutive identical organisms.",
    why: "Maintains cognitive momentum. Predictable sequences cause users to skim faster and miss details.",
    action: "Rule: If Section N = Layout A, then Section N+1 MUST = Layout B. Limit sequence repetition to 1.",
    warning: "Don't stack identical section types. It creates 'template fatigue'.",
    source: "Atomic System Spec",
    component: () => (
      <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-xl w-full max-w-xs">
         <div className="h-10 bg-indigo-600 rounded flex items-center justify-center text-[8px] font-bold text-white uppercase">Section 1: Hero (A)</div>
         <div className="h-10 bg-emerald-500 rounded flex items-center justify-center text-[8px] font-bold text-white uppercase">Section 2: Features (B)</div>
         <div className="h-10 bg-indigo-600 rounded flex items-center justify-center text-[8px] font-bold text-white uppercase">Section 3: Grid (A)</div>
         <p className="text-[10px] text-slate-400 text-center font-bold mt-2">A → B → A (Dynamic Rhythm)</p>
      </div>
    )
  },
  {
    id: "responsive-flow-logic",
    category: "The How",
    title: "Responsive Flow Logic",
    subtitle: "Stacking Transitions",
    description: "Elements that are aligned horizontally on Desktop must follow a strict logical stack on Mobile to preserve the narrative flow.",
    why: "Ensures the 'story' of the page remains intact even when the physical layout shifts.",
    action: "Rule: IF Device changes Desktop -> Tablet/Mobile, THEN horizontal rows MUST become vertical columns.",
    warning: "Don't keep horizontal layouts on mobile; they overflow and break the UX.",
    source: "Atomic System Spec",
    component: () => (
      <div className="flex flex-col gap-6 p-6 bg-slate-900 rounded-xl">
         <div className="space-y-2">
            <span className="text-[9px] text-slate-500 font-bold uppercase">Desktop: Row</span>
            <div className="flex gap-2">
               <div className="flex-1 h-8 bg-indigo-500 rounded"></div>
               <div className="flex-1 h-8 bg-indigo-500 rounded"></div>
               <div className="flex-1 h-8 bg-indigo-500 rounded"></div>
            </div>
         </div>
         <div className="w-full h-px bg-slate-800"></div>
         <div className="space-y-2 max-w-[120px]">
            <span className="text-[9px] text-slate-500 font-bold uppercase">Mobile: Column</span>
            <div className="flex flex-col gap-2">
               <div className="w-full h-8 bg-emerald-500 rounded"></div>
               <div className="w-full h-8 bg-emerald-500 rounded"></div>
               <div className="w-full h-8 bg-emerald-500 rounded"></div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "margin-safety-rule",
    category: "The How",
    title: "Margin Safety Rule",
    subtitle: "Viewport Edge Protection",
    description: "Content MUST NEVER touch the viewport edge (0px). A minimum container padding of 20px is required to ensure visual stability and prevent 'edge bleed'.",
    why: "Prevents content from being cut off by physical screen bezels or browser scrollbars. Maintains a professional 'contained' aesthetic.",
    action: "Rule: Container Padding Left/Right >= 20px. Ensure the main content wrapper has a persistent horizontal gutter.",
    warning: "Don't allow zero margins. If it touches the edge, it looks broken.",
    source: "Atomic System Spec",
    component: () => (
      <div className="flex flex-col items-center gap-4 p-8 bg-slate-50 rounded-xl w-full">
         <div className="w-64 h-24 bg-white border-2 border-red-500 rounded relative">
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-[10px] font-black text-red-500 uppercase">Bad: 0px Margin</span>
            </div>
         </div>
         <div className="w-64 h-24 bg-white border-2 border-emerald-500 rounded p-5 relative">
            <div className="w-full h-full bg-emerald-50 border border-dashed border-emerald-200 flex items-center justify-center">
               <span className="text-[10px] font-black text-emerald-600 uppercase">Good: 20px Margin</span>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-5 bg-emerald-500/10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-5 bg-emerald-500/10"></div>
         </div>
      </div>
    )
  },

  // --- BUCKET: MOBILE STRATEGY ---
  {
    id: "vertical-rhythm-mobile",
    category: "Mobile Strategy",
    title: "Vertical Rhythm Mastery",
    subtitle: "Mobile Stacking Logic",
    description: "On mobile, horizontal real estate is precious. Complex desktop side-by-side layouts must collapse into a strict top-to-bottom rhythm to ensure readability.",
    why: "Scanning patterns on mobile are primarily vertical. Breaking this rhythm with horizontal elements (except carousels) causes cognitive friction.",
    action: "Rule: Convert all multi-column sections into a single 100% width vertical stack. Maintain a consistent 24px-32px gap between organisms.",
    warning: "Don't shrink columns to fit. If a button becomes smaller than 44px, it's unusable.",
    source: "Mobile-First Atomic System",
    component: () => (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-900 rounded-2xl w-full max-w-sm space-y-6">
        <div className="w-full h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-[10px] font-black text-white">1: PRIMARY HEADING</div>
        <div className="w-full h-32 bg-slate-800 rounded-lg border-2 border-dashed border-slate-700 flex items-center justify-center text-[10px] font-black text-slate-500">2: IMAGE/ASSET</div>
        <div className="w-full h-10 bg-white rounded-lg flex items-center justify-center text-[10px] font-black text-slate-900">3: CALL TO ACTION</div>
        <div className="text-[8px] font-black text-indigo-400 uppercase tracking-widest pt-2">The Golden Stack Order</div>
      </div>
    )
  },
  {
    id: "four-col-grid",
    category: "Mobile Strategy",
    title: "The 4-Column Grid",
    subtitle: "Mobile Layout Foundation",
    description: "While desktop uses 12 columns, mobile strictly uses 4. This simplifies layout decisions and ensures that even the smallest elements remain touch-friendly.",
    why: "4 columns divide well for 2-col grids (50/50) or 1-col stacks (100%), which are the only stable layouts for narrow screens.",
    action: "Set your mobile grid to 4 columns. Use a 16px gutter and 20px side margins.",
    warning: "Avoid odd-numbered columns on mobile. They create awkward sizing and lack symmetry.",
    source: "Mobile-First Atomic System",
    component: () => (
      <div className="w-64 h-64 bg-white border-2 border-slate-200 rounded-2xl p-5 relative overflow-hidden">
        <div className="grid grid-cols-4 gap-4 h-full">
          {[1,2,3,4].map(i => <div key={i} className="bg-indigo-50 border border-indigo-100 rounded-md"></div>)}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="bg-white px-3 py-1 border-2 border-indigo-600 text-indigo-600 font-black text-[10px] rounded-full shadow-lg">4-COLUMN SKELETON</span>
        </div>
      </div>
    )
  },
  {
    id: "z-index-dominance",
    category: "Mobile Strategy",
    title: "Z-Index Dominance",
    subtitle: "Depth in Narrow Viewports",
    description: "In limited space, elements should overlap to create hierarchy. Use z-index and shadows to signal which item is the primary focal point.",
    why: "Physical layering mimics how we process objects in 3D space. It creates a 'premium' feel that distinguishes custom apps from generic templates.",
    action: "Layer the CTA or primary visual slightly over background elements. Use large blur shadows (20px+) to define the elevation.",
    warning: "Don't overlap text with text. Ensure only non-essential visuals are used as background layers.",
    source: "Mobile-First Atomic System",
    component: () => (
      <div className="relative w-64 h-64 bg-slate-50 rounded-2xl flex items-center justify-center">
        <div className="absolute top-8 left-8 w-32 h-32 bg-slate-200 rounded-xl rotate-6 opacity-50"></div>
        <div className="z-10 w-40 h-24 bg-white rounded-xl shadow-2xl border border-slate-100 p-4 flex flex-col justify-end space-y-2">
          <div className="h-2 w-full bg-slate-100 rounded"></div>
          <div className="h-6 w-full bg-indigo-600 rounded"></div>
        </div>
        <div className="absolute bottom-8 right-8 w-24 h-24 bg-indigo-100 rounded-full -rotate-12 opacity-30"></div>
      </div>
    )
  }
];
