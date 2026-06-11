import React from 'react';

export const WireHeading = ({ width = "w-3/4", className = "" }) => <div className={`h-10 bg-gray-800 rounded-md ${width} ${className}`}></div>;
export const WireTextLine = ({ width = "w-full", className = "" }) => <div className={`h-3 bg-gray-200 rounded ${width} ${className}`}></div>;
export const WireImage = ({ text = "Asset", className = "" }) => (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-xl ${className}`}>
        <span className="text-gray-400 font-bold text-sm tracking-widest uppercase">{text}</span>
    </div>
);
export const WireButton = ({ className = "" }) => <div className={`h-10 w-32 bg-gray-800 rounded-md ${className}`}></div>;

export const MobileViewport = ({ children }) => (
    <div className="flex justify-center p-8 bg-gray-100/50 w-full">
        <div className="relative w-[375px] h-[667px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-gray-900 overflow-hidden flex flex-col">
            {/* Status Bar Area */}
            <div className="h-6 w-full bg-gray-900 flex justify-between px-8 items-center text-[8px] text-white font-bold shrink-0">
                <span>9:41</span>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-1 bg-white rounded-full opacity-50"></div>
                    <div className="w-2.5 h-1 bg-white rounded-full"></div>
                </div>
            </div>
            
            {/* Main Viewport Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
                {children}
            </div>

            {/* Home Indicator */}
            <div className="h-5 w-full flex items-center justify-center shrink-0 bg-white">
                <div className="w-24 h-1 bg-gray-200 rounded-full"></div>
            </div>
        </div>
    </div>
);
