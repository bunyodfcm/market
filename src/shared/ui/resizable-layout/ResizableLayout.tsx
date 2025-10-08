import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * ResizableLayout (React + TypeScript + Tailwind)
 * – Telegram Web uslubida sudraladigan (draggable) sidebar
 * – Pointer (mouse/pen/touch), klaviatura (← →, Shift bilan katta qadam), A11y
 * – localStorage'da width saqlanadi, min/max clamp, dblclick reset
 * – Tailwind bilan toza, productionga tayyor
 *
 * Foydalanish:
 *   export default function App(){
 *     return (
 *       <ResizableLayout initial={300} min={220} max={560}>
 *         <aside className="h-full overflow-auto border-r border-gray-200 bg-gray-50">
 *           <div className="p-4 font-semibold">Sidebar</div>
 *           <div className="p-4 text-sm text-gray-500">Sudrab kengaytiring/toraytiring.</div>
 *         </aside>
 *         <main className="h-full overflow-auto">
 *           <div className="p-4 font-semibold">Kontent</div>
 *           <div className="p-4">Asosiy kontent joyi.</div>
 *         </main>
 *       </ResizableLayout>
 *     );
 *   }
 */

type ResizableLayoutProps = {
  /** Boshlang'ich kenglik (px) */
  initial?: number;
  /** Minimal kenglik (px) */
  min?: number;
  /** Maksimal kenglik (px) */
  max?: number;
  /** localStorage kaliti */
  storageKey?: string;
  /** Chapdagi panel (sidebar) – birinchi child */
  children: [React.ReactNode, React.ReactNode];
  /** Ajratuvchi (divider) kengligi (px), default 6 */
  dividerWidth?: number;
  /** Qo'shimcha class */
  className?: string;
};

export default function ResizableLayout({
  initial = 300,
  min = 220,
  max = 560,
  storageKey = 'sidebar-width',
  dividerWidth = 6,
  children,
  className = '',
}: ResizableLayoutProps) {
  const [sidebar, content] = children;

  const [width, setWidth] = useState<number>(() => {
    if (typeof window === 'undefined') return initial;
    const saved = localStorage.getItem(storageKey);
    const n = saved ? parseFloat(saved) : initial;
    return clamp(n, min, max);
  });

  const draggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Re-clamp on window resize (masalan viewport torayganda)
  useEffect(() => {
    const onResize = () => setWidth(w => clamp(w, min, max));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [min, max]);

  // Body cursor + userSelect boshqaruvi dragging paytida
  const setBodyDragging = (on: boolean) => {
    if (typeof document === 'undefined') return;
    const b = document.body as HTMLBodyElement;
    if (on) {
      b.style.cursor = 'col-resize';
      (b.style as any).userSelect = 'none';
      (b.style as any).webkitUserSelect = 'none';
      (b.style as any).msUserSelect = 'none';
    } else {
      b.style.cursor = '';
      (b.style as any).userSelect = '';
      (b.style as any).webkitUserSelect = '';
      (b.style as any).msUserSelect = '';
    }
  };

  // Pointer move hisob-kitobi
  const handleMove = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    const left = rect?.left ?? 0;
    const newW = clamp(clientX - left, min, max);
    setWidth(newW);
  };

  // Dragging boshqaruvi
  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    draggingRef.current = true;
    setBodyDragging(true);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!draggingRef.current) return;
    handleMove(e.clientX);
  };

  const onPointerUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setBodyDragging(false);
    localStorage.setItem(storageKey, String(width));
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  };

  // A11y: klaviatura bilan nazorat
  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 32 : 8; // Shift bosilsa yirik qadam
    if (e.key === 'ArrowLeft') {
      setWidth(w => clamp(w - step, min, max));
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      setWidth(w => clamp(w + step, min, max));
      e.preventDefault();
    } else if (e.key === 'Enter') {
      // Tez collapse/expand
      setWidth(w => (w > min + 40 ? min : clamp(300, min, max)));
      e.preventDefault();
    }
    // Har bir o'zgarishda saqlab boramiz
    queueMicrotask(() => localStorage.setItem(storageKey, String(width)));
  };

  // Double click – defaultga qaytarish
  const onDoubleClick = () => {
    const next = clamp(initial, min, max);
    setWidth(next);
    localStorage.setItem(storageKey, String(next));
  };

  // Grid ustunlari memo (perf)
  const gridTemplateColumns = useMemo(
    () => `${width}px ${dividerWidth}px 1fr`,
    [width, dividerWidth]
  );

  return (
    <div
      ref={containerRef}
      className={'grid h-screen grid-rows-[1fr] overflow-hidden ' + className}
      style={{ gridTemplateColumns }}
    >
      {/* Sidebar */}
      <div className="h-full overflow-auto border-r border-gray-200 bg-gray-50">
        {sidebar}
      </div>

      {/* Divider */}
      <div
        role="separator"
        aria-orientation="vertical"
        tabIndex={0}
        title="Kenglikni o'zgartirish (sudrab yoki ← →)"
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        onDoubleClick={onDoubleClick}
        className="relative h-full cursor-col-resize select-none"
      >
        {/* nozik markaziy chiziq */}
        <span className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gray-200 group-hover:bg-gray-300" />
      </div>

      {/* Content */}
      <div className="h-full overflow-auto bg-white">{content}</div>
    </div>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
