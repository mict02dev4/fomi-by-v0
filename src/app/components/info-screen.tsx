import { ChevronLeft, Shield, Mail, Phone, MessageCircle, HelpCircle, FileText, ChevronRight } from 'lucide-react';

interface InfoScreenProps {
  onBack: () => void;
}

export function InfoScreen({ onBack }: InfoScreenProps) {
  const handleContact = (method: string) => {
    alert(`${method} 문의하기`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl hover:bg-secondary flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          <h2 className="text-navy">정보 / 문의</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 pb-24">
        {/* App Info */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-navy flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-navy mb-2">포미 - 내 폰 도우미</h2>
          <p className="text-muted-foreground mb-1">버전 1.2.5</p>
          <p className="text-muted-foreground">믿을 수 있는 스마트폰 보안 도우미</p>
        </div>

        {/* Contact Methods */}
        <div className="mb-8">
          <h3 className="text-navy mb-4">고객 지원</h3>
          <div className="bg-card rounded-3xl p-2 border border-border">
            <button
              onClick={() => handleContact('이메일')}
              className="w-full p-4 hover:bg-secondary/50 rounded-2xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-navy mb-1">이메일 문의</h4>
                  <p className="text-muted-foreground">support@pomi.app</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button
              onClick={() => handleContact('전화')}
              className="w-full p-4 hover:bg-secondary/50 rounded-2xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-navy mb-1">전화 상담</h4>
                  <p className="text-muted-foreground">1588-0000 (평일 9-18시)</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button
              onClick={() => handleContact('채팅')}
              className="w-full p-4 hover:bg-secondary/50 rounded-2xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-navy mb-1">1:1 채팅 상담</h4>
                  <p className="text-muted-foreground">실시간 문의하기</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-safe flex-shrink-0"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Help & Resources */}
        <div className="mb-8">
          <h3 className="text-navy mb-4">도움말 및 정보</h3>
          <div className="space-y-3">
            <button className="w-full bg-card rounded-2xl p-5 border border-border hover:shadow-md transition-all active:scale-[0.98]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-navy">자주 묻는 질문</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button className="w-full bg-card rounded-2xl p-5 border border-border hover:shadow-md transition-all active:scale-[0.98]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-navy">이용 가이드</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button className="w-full bg-card rounded-2xl p-5 border border-border hover:shadow-md transition-all active:scale-[0.98]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-navy">개인정보 처리방침</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>

            <button className="w-full bg-card rounded-2xl p-5 border border-border hover:shadow-md transition-all active:scale-[0.98]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-navy" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-navy">서비스 이용약관</p>
                </div>
                <ChevronRight className="w-5 h-5 text-navy/30" />
              </div>
            </button>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-secondary rounded-2xl p-5">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">버전</span>
              <span className="text-navy">1.2.5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">마지막 업데이트</span>
              <span className="text-navy">2026.03.05</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">개발사</span>
              <span className="text-navy">포미 시큐리티</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
