import React from 'react';
import { WireHeading, WireTextLine, WireImage, WireButton } from '../components/Wireframes';

const _mobileLayoutsRaw = [
    // --- MOBILE HERO SECTIONS (13) ---
    {
        id: "Mob_Hero_01_StandardStack", category: "Mobile Heroes", name: "Standard Stack",
        why: "Predictable and safe; ensures key messaging is seen immediately.", warning: "Content MUST align left for optimal scanning.",
        spec: "Display: Flex-Col. Order 1: Headings. Order 2: CTA. Order 3: Image_Atom.",
        component: () => (
            <div className="p-8 flex flex-col items-start gap-4">
                <WireHeading width="w-full" className="h-8" />
                <WireHeading width="w-2/3" className="h-8 -mt-2" />
                <WireTextLine className="mt-2" />
                <WireButton className="mt-4" />
                <WireImage className="w-full h-48 mt-8" text="Hero Image" />
            </div>
        )
    },
    {
        id: "Mob_Hero_02_InvertedStack", category: "Mobile Heroes", name: "Inverted Stack",
        why: "Visual-first approach; leads with imagery to set the mood.", warning: "Image MUST sit at the very top of the viewport.",
        spec: "Display: Flex-Col. Order 1: Image_Atom. Order 2: Headings. Order 3: CTA.",
        component: () => (
            <div className="flex flex-col items-start">
                <WireImage className="w-full h-64 rounded-none border-0 border-b" text="Primary Visual" />
                <div className="p-8 space-y-4">
                    <WireHeading width="w-full" />
                    <WireTextLine />
                    <WireButton className="mt-2" />
                </div>
            </div>
        )
    },
    {
        id: "Mob_Hero_03_BottomAnchor", category: "Mobile Heroes", name: "Bottom Anchor",
        why: "Dramatic use of negative space for high-end aesthetics.", warning: "Massive top whitespace MUST be preserved.",
        spec: "Display: Flex-Col. Min-Height: 100vh. Justify-Content: Flex-End.",
        component: () => (
            <div className="flex flex-col justify-end min-h-[580px] p-8 pb-16 bg-slate-50">
                <div className="space-y-4">
                    <WireHeading width="w-3/4" />
                    <WireTextLine />
                    <WireButton />
                </div>
            </div>
        )
    },
    {
        id: "Mob_Hero_04_CardContainer", category: "Mobile Heroes", name: "Card Container",
        why: "Encapsulates content to maintain clarity over background textures.", warning: "Background block MUST span 100vw.",
        spec: "Top: Left-aligned text. Bottom: Full-width Background_Block with nested Image_Atom.",
        component: () => (
            <div className="flex flex-col">
                <div className="p-8 space-y-4">
                    <WireHeading width="w-full" />
                    <WireButton />
                </div>
                <div className="w-full bg-slate-900 p-8 pt-12 mt-4">
                    <WireImage className="w-full h-48 bg-slate-800 border-slate-700" text="Nested Asset" />
                </div>
            </div>
        )
    },
    {
        id: "Mob_Hero_05_SplitGraphic", category: "Mobile Heroes", name: "Split Graphic",
        why: "Creates a sharp vertical rhythm using asymmetrical edges.", warning: "Image MUST touch the left screen edge.",
        spec: "Top: Text + CTA. Bottom: Image_Atom spanning left edge, right margin preserved.",
        component: () => (
            <div className="flex flex-col">
                <div className="p-8 space-y-4">
                    <WireHeading width="w-full" />
                    <WireTextLine />
                </div>
                <div className="flex mt-4">
                    <WireImage className="w-5/6 h-48 rounded-l-none border-l-0" text="Edge-to-Edge" />
                    <div className="flex-1 bg-indigo-50 border-l-2 border-indigo-100"></div>
                </div>
            </div>
        )
    },
    {
        id: "Mob_Hero_06_BleedRight", category: "Mobile Heroes", name: "Bleed Right",
        why: "Suggests continuity and expansive content beyond the screen.", warning: "Image MUST bleed off the right side of the screen.",
        spec: "Display: Flex-Col. Order 1: Text. Order 2: Image_Atom offset to the right.",
        component: () => (
            <div className="flex flex-col overflow-hidden">
                <div className="p-8">
                    <WireHeading width="w-full" className="mb-4" />
                    <WireTextLine width="w-3/4" />
                </div>
                <div className="pl-8 -mr-16 mt-4">
                    <WireImage className="w-full h-48 shadow-xl" text="Bleeding Visual" />
                </div>
            </div>
        )
    },
    {
        id: "Mob_Hero_07_BleedWithCTA", category: "Mobile Heroes", name: "Bleed with CTA",
        why: "Combines interactive elements with expansive visual depth.", warning: "CTA Molecule MUST be clearly visible above the bleeding image.",
        spec: "Order 1: Text. Order 2: CTA. Order 3: Image_Atom bleeding right.",
        component: () => (
            <div className="flex flex-col overflow-hidden">
                <div className="p-8 pb-0">
                    <WireHeading width="w-full" />
                    <WireButton className="mt-6 shadow-lg z-10 relative" />
                </div>
                <div className="pl-12 -mr-20 mt-4">
                    <WireImage className="w-full h-64 border-indigo-100" text="Asset" />
                </div>
            </div>
        )
    },
    {
        id: "Mob_Hero_08_HalfOverlay", category: "Mobile Heroes", name: "Half Overlay",
        why: "Strong geometric contrast used in editorial and luxury branding.", warning: "Header MUST cross the exact horizontal threshold of the split.",
        spec: "Background: Linear-Gradient(Dark 50%, Accent 50%). Content stacked vertically.",
        component: () => (
            <div className="flex flex-col min-h-[500px]">
                <div className="h-1/2 bg-slate-900 p-8 flex flex-col justify-end">
                    <WireHeading width="w-full" className="h-16 bg-white translate-y-8 z-10" />
                </div>
                <div className="h-1/2 bg-indigo-600 p-8 pt-16">
                    <WireTextLine className="bg-indigo-300" />
                    <WireButton className="bg-white mt-6" />
                </div>
            </div>
        )
    },
    {
        id: "Mob_Hero_09_SoftGradient", category: "Mobile Heroes", name: "Soft Gradient",
        why: "Enhances text legibility while providing immersive brand color.", warning: "Gradient MUST enhance, not obscure, text legibility.",
        spec: "Background: Linear-Gradient. Display: Flex-Col.",
        component: () => (
            <div className="flex flex-col min-h-[500px] bg-gradient-to-b from-slate-900 to-indigo-800 p-8 justify-center">
                <WireHeading width="w-full" className="bg-white/90 mb-4" />
                <WireTextLine className="bg-white/40 mb-2" />
                <WireTextLine className="bg-white/40 mb-8" />
                <WireButton className="bg-indigo-500 text-white w-full h-12" />
            </div>
        )
    },
    {
        id: "Mob_Hero_10_BentoHero", category: "Mobile Heroes", name: "Bento Hero",
        why: "Maintains high information density on narrow screens.", warning: "Top row elements MUST sit side-by-side using Flex-Row.",
        spec: "Top Row: Heading (Left) + Small_Image (Right). Bottom: Large_Image + Subtext.",
        component: () => (
            <div className="p-6 space-y-4">
                <div className="flex gap-4 items-end">
                    <WireHeading width="w-2/3" className="h-20" />
                    <WireImage className="w-1/3 h-20" text="Icon" />
                </div>
                <WireImage className="w-full h-64 bg-slate-100" text="Main Asset" />
                <WireTextLine />
            </div>
        )
    },
    {
        id: "Mob_Hero_11_AccordionList", category: "Mobile Heroes", name: "Accordion List",
        why: "Signals depth and variety immediately; great for feature-rich products.", warning: "Tabs MUST span 100% width with visible top borders.",
        spec: "Display: Flex-Col. Heading -> 4x Tab_Molecule -> Image_Atom.",
        component: () => (
            <div className="flex flex-col min-h-[500px]">
                <div className="p-8"><WireHeading /></div>
                <div className="flex-1">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="border-t border-slate-200 p-4 px-8 flex justify-between items-center bg-white">
                            <WireTextLine width="w-1/2" />
                            <span className="text-slate-300">+</span>
                        </div>
                    ))}
                </div>
                <WireImage className="w-full h-48 border-0 border-t" text="Context Image" />
            </div>
        )
    },
    {
        id: "Mob_Hero_12_EditorialFlow", category: "Mobile Heroes", name: "Editorial Flow",
        why: "Asymmetrical rhythm feels custom and high-end.", warning: "Elements MUST alternate alignment intentionally.",
        spec: "Flow: Small_Img_TopLeft -> Heading -> Subtext -> Small_Img_BottomCenter.",
        component: () => (
            <div className="p-8 space-y-12">
                <div className="flex justify-start"><WireImage className="w-24 h-24" text="Art" /></div>
                <div className="text-center space-y-4">
                    <WireHeading width="w-full" />
                    <WireTextLine />
                </div>
                <div className="flex justify-center"><WireImage className="w-40 h-40 rounded-full" text="Focus" /></div>
            </div>
        )
    },
    {
        id: "Mob_Hero_13_FloatingCTA", category: "Mobile Heroes", name: "Floating CTA",
        why: "Ensures the primary action is impossible to miss.", warning: "CTA Molecule MUST be centered and overlapping side images.",
        spec: "Position: Relative. Scattered side images. Center features a circular CTA.",
        component: () => (
            <div className="relative min-h-[500px] p-8 flex items-center justify-center overflow-hidden bg-slate-50">
                <div className="absolute top-10 -left-10 w-48 h-48 bg-slate-200 border-2 border-dashed border-slate-300 rounded-xl rotate-12 opacity-50"></div>
                <div className="absolute bottom-10 -right-10 w-48 h-48 bg-slate-200 border-2 border-dashed border-slate-300 rounded-xl -rotate-6 opacity-50"></div>
                <div className="z-10 w-32 h-32 bg-indigo-600 rounded-full shadow-2xl flex items-center justify-center text-white font-black text-xs text-center p-4">START NOW</div>
            </div>
        )
    },

    // --- STANDARD MOBILE GRIDS (25) ---
    // 2-Col Equivalents (10)
    {
        id: "Mob_2Col_01_Standard", category: "Mobile Grids", name: "Standard Stack",
        why: "Natural progression for reading.", warning: "Ensure uniform padding between the stack.",
        spec: "Display: Flex-Col. Standard stack.",
        component: () => (
            <div className="p-8 space-y-6">
                <WireImage className="w-full h-48" />
                <div className="space-y-4"><WireHeading /><WireTextLine /><WireButton /></div>
            </div>
        )
    },
    {
        id: "Mob_2Col_02_CardStack", category: "Mobile Grids", name: "The Card Stack",
        why: "Groups related info into a portable container.", warning: "Cards MUST span 100% width to maintain legibility.",
        spec: "Display: Flex-Col. Gap: 16px. Children: 2x [Card_Molecule].",
        component: () => (
            <div className="p-6 space-y-6">
                {[1,2].map(i => (
                    <div key={i} className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
                        <WireHeading className="h-6" />
                        <WireTextLine />
                        <WireButton className="w-full" />
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "Mob_2Col_04_ImgLayer", category: "Mobile Grids", name: "Layered Vertical Stack",
        why: "Creates depth without horizontal clutter.", warning: "Bottom image MUST have higher Z-Index.",
        spec: "Display: Flex-Col. Images stack vertically with slight negative margin overlap.",
        component: () => (
            <div className="p-8 space-y-4">
                <WireHeading />
                <div className="relative">
                    <WireImage className="w-full h-40 opacity-50" />
                    <WireImage className="w-3/4 h-40 absolute -bottom-10 left-1/2 -translate-x-1/2 shadow-xl z-10" />
                </div>
                <div className="h-16"></div>
                <WireTextLine />
            </div>
        )
    },
    {
        id: "Mob_2Col_08_IconList", category: "Mobile Grids", name: "Vertical Icon List",
        why: "Optimized for mobile scannability of features.", warning: "Icons MUST align left; text wraps cleanly to the right.",
        spec: "Display: Flex-Col. Children: Vertical data silos.",
        component: () => (
            <div className="p-8 space-y-8">
                <WireHeading />
                {[1,2,3].map(i => (
                    <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex-shrink-0"></div>
                        <div className="space-y-2 flex-1"><WireHeading className="h-4" /><WireTextLine /></div>
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "Mob_3Col_03_Rotate", category: "Mobile Grids", name: "Swipeable Carousel",
        why: "Saves vertical space while showcasing multiple options.", warning: "Elements MUST sit side-by-side to save vertical screen space.",
        spec: "Display: Flex-Row. Overflow-X: Scroll. Snap-Type: X Mandatory.",
        component: () => (
            <div className="flex gap-4 overflow-x-auto p-8 snap-x no-scrollbar">
                {[1,2,3,4].map(i => (
                    <div key={i} className="min-w-[280px] bg-white border rounded-2xl p-6 snap-center shadow-sm">
                        <WireImage className="h-32 mb-4" />
                        <WireHeading className="h-4" />
                        <WireTextLine />
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "Mob_4Col_01_Breather", category: "Mobile Grids", name: "2x2 Breather Grid",
        why: "Compacts wide desktop space into a dense mobile matrix.", warning: "Large 4-col white space is abandoned for a tight 2x2 grid.",
        spec: "Display: Grid. Grid-Template-Columns: 1fr 1fr.",
        component: () => (
            <div className="p-8 grid grid-cols-2 gap-4">
                {[1,2,3,4].map(i => (
                    <div key={i} className="bg-slate-50 border p-4 rounded-xl flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                        <WireHeading className="h-3" />
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "Mob_4Col_03_SwipeStack", category: "Mobile Grids", name: "Interactive Pull Stack",
        why: "Adds a touch-native discovery layer.", warning: "Hidden cards reveal on horizontal touch drag.",
        spec: "Display: Flex-Row. Overflow: Hidden. Interaction: Touch_Drag.",
        component: () => (
            <div className="relative p-8 overflow-hidden h-64 bg-slate-50 flex items-center">
                <div className="absolute left-8 w-[80%] h-48 bg-white border rounded-2xl shadow-xl z-20 p-6 flex flex-col justify-end">
                    <WireHeading className="h-6" />
                </div>
                <div className="absolute left-16 w-[80%] h-40 bg-white/50 border rounded-2xl shadow-lg z-10 scale-95"></div>
                <div className="absolute left-24 w-[80%] h-32 bg-white/20 border rounded-2xl shadow-md z-0 scale-90"></div>
            </div>
        )
    },
    {
        id: "Mob_4Col_06_PitchProof", category: "Mobile Grids", name: "Split the Difference",
        why: "Maintains visual texture without sacrificing text legibility.", warning: "Image grid CAN remain 2 columns because they are visuals.",
        spec: "Parent: Flex-Col. Child_1: 1-Col. Child_2 (Images): 2-Col Grid.",
        component: () => (
            <div className="p-8 space-y-8">
                <div className="space-y-4"><WireHeading /><WireTextLine /></div>
                <div className="grid grid-cols-2 gap-4">
                    <WireImage className="h-32" />
                    <WireImage className="h-32" />
                    <WireImage className="h-32" />
                    <WireImage className="h-32" />
                </div>
            </div>
        )
    }
];

const VIDEO_MOB = 'Mobile-First Atomic System';

export const mobileLayouts = _mobileLayoutsRaw.map(l => ({
    ...l, 
    video: VIDEO_MOB,
    subtitle: l.category === "Mobile Heroes" ? "Mobile Hero" : "Mobile Grid"
}));
