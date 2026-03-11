'use client'

import { AlertTriangle, Shield, ExternalLink, X } from 'lucide-react'

interface RiskWarningScreenProps {
  onBack: () => void
}

export function RiskWarningScreen({ onBack }: RiskWarningScreenProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-end z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="w-full max-w-md mx-auto bg-card rounded-t-3xl p-5 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="flex justify-end mb-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-xl hover:bg-secondary flex items-center justify-center touch-feedback"
          >
            <X className="w-6 h-6 text-navy" />
          </button>
        </div>

        {/* Warning Icon */}
        <div className="flex flex-col items-center mb-5">
          <div className="w-20 h-20 rounded-full bg-danger/10 flex items-center justify-center mb-4">
            <AlertTriangle className="w-10 h-10 text-danger" />
          </div>
          <h2 className="text-danger text-xl font-bold mb-1">위험한 링크</h2>
          <p className="text-foreground text-center text-sm">
            이 링크는 피싱 사이트로 의심됩니다
          </p>
        </div>

        {/* Link Info */}
        <div className="bg-danger-bg rounded-2xl p-5 border border-danger/20 mb-5">
          <div className="flex items-start gap-3 mb-4">
            <ExternalLink className="w-5 h-5 text-danger-foreground flex-shrink-0 mt-0.5" />
            <div className="flex-1 break-all">
              <p className="text-danger-foreground text-sm">
                https://naver-event-2024-gift.xyz/claim/12345
              </p>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-danger mt-2 flex-shrink-0" />
              <p className="text-danger-foreground text-sm">정식 도메인이 아닙니다</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-danger mt-2 flex-shrink-0" />
              <p className="text-danger-foreground text-sm">개인정보를 요구할 수 있습니다</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-danger mt-2 flex-shrink-0" />
              <p className="text-danger-foreground text-sm">악성 앱 설치를 유도할 수 있습니다</p>
            </div>
          </div>
        </div>

        {/* Detection Info */}
        <div className="bg-secondary rounded-2xl p-4 mb-5">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-navy font-semibold mb-1 text-sm">포미가 차단했습니다</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                이 링크는 피싱 데이터베이스에 등록되어 있으며,
                자동으로 차단되었습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Source */}
        <div className="mb-5">
          <p className="text-muted-foreground text-sm mb-2">출처</p>
          <div className="bg-card rounded-2xl p-4 border border-border">
            <p className="text-navy font-medium text-sm mb-0.5">문자메시지</p>
            <p className="text-muted-foreground text-xs">어제 오후 3:24</p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onBack}
            className="w-full bg-navy text-primary-foreground rounded-2xl p-4 touch-feedback font-medium"
          >
            확인
          </button>
          <button
            className="w-full bg-secondary text-navy rounded-2xl p-4 touch-feedback font-medium"
          >
            신고하기
          </button>
        </div>
      </div>
    </div>
  )
}
