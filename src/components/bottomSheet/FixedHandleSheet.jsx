'use client';

import { clsx } from 'clsx';
import { useState } from 'react';
import { Drawer } from 'vaul';

// 네비게이션 높이를 고려한 snapPoints 설정
const snapPoints = ['80px', '50%', '90%']; // 네비게이션 바 높이 + 약간의 여유 공간

export default function FixedHandleSheet() {
  const [snap, setSnap] = useState(snapPoints[0]);

  return (
    <div className="relative h-screen">
      <Drawer.Root snapPoints={snapPoints} activeSnapPoint={snap} setActiveSnapPoint={setSnap}>
        <Drawer.Portal>
          <Drawer.Content
            className="fixed flex flex-col bg-white border border-gray-200 rounded-t-[10px] bottom-[84px] left-0 right-0 max-h-[calc(100vh-84px)]"
          >
            {/* 드래그 핸들 */}
            <div className="sticky top-0 pt-3 pb-4 bg-white rounded-t-[10px] z-10">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto" />
            </div>
            
            <div
              className={clsx('flex flex-col max-w-md mx-auto w-full px-4', {
                'overflow-y-auto': snap !== snapPoints[0],
                'overflow-hidden': snap === snapPoints[0],
              })}
            >
              {/* 사람들 섹션 */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-3">사람들</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 mb-1">
                      {/* 프로필 이미지 */}
                    </div>
                    <span className="text-sm">서영</span>
                    <span className="text-xs text-gray-500">직장에서</span>
                  </div>
                  {/* 필요한 만큼 프로필 추가 */}
                </div>
              </div>

              {/* 추가 컨텐츠 */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <span className="block text-gray-900">상태 업데이트</span>
                  <span className="text-gray-600">오후 12:35부터</span>
                </div>
                {/* 필요한 만큼 컨텐츠 추가 */}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      {/* 하단 네비게이션 바 */}
      <nav className="fixed bottom-0 left-0 right-0 h-[84px] bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-full max-w-md mx-auto px-4">
          <button className="flex flex-col items-center">
            <div className="text-purple-600 mb-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-xs text-purple-600">위치</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="text-gray-400 mb-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-xs text-gray-400">운전</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="text-gray-400 mb-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xs text-gray-400">안전</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="text-gray-400 mb-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <span className="text-xs text-gray-400">골드</span>
          </button>
        </div>
      </nav>
    </div>
  );
}