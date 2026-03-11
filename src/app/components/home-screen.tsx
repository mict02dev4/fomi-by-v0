import { Shield, FileText, Info, ScanLine } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-navy">포미</h1>
            <p className="text-muted-foreground">내 폰 도우미</p>
          </div>
        </div>
      </div>

      {/* Status Card */}
      <div className="bg-safe-bg border border-safe/20 rounded-3xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-safe flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-safe-foreground mb-1">보호 중</h3>
            <p className="text-safe-foreground/70">마지막 검사: 오늘 오전 9:15</p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="space-y-4">
        {/* Malware Scan */}
        <button
          onClick={() => onNavigate('malware-entry')}
          className="w-full bg-card rounded-3xl p-6 shadow-sm border border-border hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center flex-shrink-0">
              <ScanLine className="w-7 h-7 text-navy" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-navy mb-1">악성앱 검사</h3>
              <p className="text-muted-foreground">설치된 앱의 안전성을 확인합니다</p>
            </div>
            <div className="text-navy/30">›</div>
          </div>
        </button>

        {/* Phishing Protection */}
        <button
          onClick={() => onNavigate('phishing-dashboard')}
          className="w-full bg-card rounded-3xl p-6 shadow-sm border border-border hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-teal" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-navy mb-1">스미싱 자동 점검</h3>
              <p className="text-muted-foreground">위험한 링크와 알림을 차단합니다</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-safe flex-shrink-0"></div>
          </div>
        </button>

        {/* Document Viewer */}
        <button
          onClick={() => onNavigate('document-hub')}
          className="w-full bg-card rounded-3xl p-6 shadow-sm border border-border hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7 text-navy" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-navy mb-1">문서 뷰어</h3>
              <p className="text-muted-foreground">다양한 문서를 안전하게 열람하세요</p>
            </div>
            <div className="text-navy/30">›</div>
          </div>
        </button>

        {/* Info / Inquiry */}
        <button
          onClick={() => onNavigate('info')}
          className="w-full bg-card rounded-3xl p-6 shadow-sm border border-border hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center flex-shrink-0">
              <Info className="w-7 h-7 text-navy" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-navy mb-1">정보 / 문의</h3>
              <p className="text-muted-foreground">앱 정보 및 고객 지원</p>
            </div>
            <div className="text-navy/30">›</div>
          </div>
        </button>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h4 className="text-navy mb-4">최근 활동</h4>
        <div className="space-y-3">
          <div className="bg-card rounded-2xl p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-safe/10 flex items-center justify-center">
                <ScanLine className="w-5 h-5 text-safe" />
              </div>
              <div className="flex-1">
                <p className="text-navy">악성앱 검사 완료</p>
                <p className="text-muted-foreground">2시간 전 • 이상 없음</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-warning" />
              </div>
              <div className="flex-1">
                <p className="text-navy">의심스러운 링크 차단</p>
                <p className="text-muted-foreground">어제 • 1건 차단됨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
