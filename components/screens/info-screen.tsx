'use client'

import { ChevronLeft, Shield, Mail, Phone, MessageCircle, HelpCircle, FileText, ChevronRight } from 'lucide-react'

interface InfoScreenProps {
  onBack: () => void
}

export function InfoScreen({ onBack }: InfoScreenProps) {
  const handleContact = (method: string) => {
    alert(`${method} 문의하기`)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack} 
            className="w-10 h-10 rounded-xl hover:bg-secondary flex items-center justify-center touch-feedback"
          >
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          <h2 className="text-navy">정보 / 문의</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 pb-24 overflow-y-auto">
        {/* App Info */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 rounded-3xl bg-navy flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-navy mb-1">포미 - 내 폰 도우미</h2>
          <p className="text-muted-foreground text-sm mb-0.5">버전 1.2.5</p>
          <p className="text-muted-foreground text-sm">믿을 수 있는 스마트폰 보안 도우미</p>
        </div>

        {/* Contact Methods */}
        <div className="mb-6">
          <h3 className="text-navy font-semibold mb-3 text-sm">고객 지원</h3>
          <div className="bg-card rounded-3xl border border-border overflow-hidden">
            <button
              onClick={() => handleContact('이메일')}
              className="w-full p-4 hover:bg-secondary/50 touch-feedback border-b border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-navy font-medium text-sm mb-0.5">이메일 문의</h4>
                  <p className="text-muted-foreground text-xs">support@pomi.app</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button
              onClick={() => handleContact('전화')}
              className="w-full p-4 hover:bg-secondary/50 touch-feedback border-b border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-navy font-medium text-sm mb-0.5">전화 상담</h4>
                  <p className="text-muted-foreground text-xs">1588-0000 (평일 9-18시)</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button
              onClick={() => handleContact('채팅')}
              className="w-full p-4 hover:bg-secondary/50 touch-feedback"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-navy font-medium text-sm mb-0.5">1:1 채팅 상담</h4>
                  <p className="text-muted-foreground text-xs">실시간 문의하기</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-safe flex-shrink-0" />
              </div>
            </button>
          </div>
        </div>

        {/* Help & Resources */}
        <div className="mb-6">
          <h3 className="text-navy font-semibold mb-3 text-sm">도움말 및 정보</h3>
          <div className="space-y-2">
            <button className="w-full bg-card rounded-2xl p-4 border border-border touch-feedback text-left">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-navy" />
                </div>
                <div className="flex-1">
                  <p className="text-navy font-medium text-sm">자주 묻는 질문</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button className="w-full bg-card rounded-2xl p-4 border border-border touch-feedback text-left">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-navy" />
                </div>
                <div className="flex-1">
                  <p className="text-navy font-medium text-sm">이용 가이드</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button className="w-full bg-card rounded-2xl p-4 border border-border touch-feedback text-left">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-navy" />
                </div>
                <div className="flex-1">
                  <p className="text-navy font-medium text-sm">개인정보 처리방침</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button className="w-full bg-card rounded-2xl p-4 border border-border touch-feedback text-left">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-navy" />
                </div>
                <div className="flex-1">
                  <p className="text-navy font-medium text-sm">서비스 이용약관</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-secondary rounded-2xl p-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground text-sm">버전</span>
              <span className="text-navy font-medium text-sm">1.2.5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground text-sm">마지막 업데이트</span>
              <span className="text-navy font-medium text-sm">2026.03.05</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground text-sm">개발사</span>
              <span className="text-navy font-medium text-sm">포미 시큐리티</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
